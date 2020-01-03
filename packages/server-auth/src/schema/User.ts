import {gql} from 'apollo-server-express'
import {createConnectionResults, LoaderFn, createToken} from '@luminate/graphql-utils'
import bcrypt from 'bcrypt'
import {Resolvers, User} from '../types'
import tokenJSON from '../token.json'

const typeDefs = gql`
  type User {
    id: ID!
    username: String
    firstName: String
    lastName: String
  }

  type UserConnection {
    pageInfo: PageInfo!
    edges: [UserEdge!]!
  }

  type UserEdge {
    cursor: String
    node: User
  }

  input CreateUserInput {
    firstName: String
    lastName: String
    username: String!
    password: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    username: String
  }

  input UpdatePasswordInput {
    currentPassword: String!
    newPassword: String!
  }

  extend type Query {
    listUsers(cursor: String, limit: Int, query: [QueryInput]): UserConnection!
    getUser(id: ID!): User
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): User
    updatePassword(id: ID!, input: UpdatePasswordInput!): Boolean
    login(username: String!, password: String!): Boolean
    logout: Boolean
  }
`

const resolvers: Resolvers = {
  Query: {
    listUsers: async (parent, args, {models}) => {
      const {User} = models
      const results = await createConnectionResults({args: {...args, type: 'user'}, model: User})
      return results
    },
    getUser: async (parent, {id}, {loaders}, info) => {
      const {users} = loaders
      return users.load(id)
    },
  },
  Mutation: {
    createUser: async (parent, {input}, {models}) => {
      const {User} = models
      const user = await new User({...input, type: ['user']}).save()
      return user
    },
    updateUser: async (parent, {id, input}, {models}) => {
      const {User} = models
      const user = await User.findByIdAndUpdate(id, input, {new: true})
      return user
    },
    deleteUser: async (parent, {id}, {models}) => {
      const {User} = models
      const user = await User.findByIdAndDelete(id)
      return user
    },
    updatePassword: async (parent, {id, input}, {models}) => {
      const {User} = models
      const foundUser = await User.findById(id)

      if (!foundUser || !foundUser.password) return false

      const currentPasswordMatches = await bcrypt.compare(input.currentPassword, foundUser.password)

      // if (currentPasswordMatches) {
      //   // must save password this way in order to trigger pre-save hook for hashing
      //   user.password = input.newPassword
      //   user.save()
      //   return true
      // }

      return false
    },
    login: async (parent, {username, password}, {models, res}) => {
      const {User} = models
      const user = await User.findOne({username})

      if (!user) return false

      const token = createToken(user.id, tokenJSON.token)

      res.cookie('id', token, {
        httpOnly: false,
        secure: false,
      })

      return true
    },
    logout: (parent, args, {res}) => {
      res.cookie('id', '', {
        expires: new Date(0),
      })
      return true
    },
  },
}

export interface UserLoaders {
  users: LoaderFn<User>
}

export const loaders: UserLoaders = {
  users: async (ids, models) => {
    const {User} = models
    const users = await User.find({_id: ids})
    return ids.map(id => {
      const user = users.find(user => user._id.toString() === id.toString())
      if (!user) throw new Error('Document not found')
      return user
    })
  },
}

export const schema = {typeDefs, resolvers}
