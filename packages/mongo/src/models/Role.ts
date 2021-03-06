import mongoose from 'mongoose'
import {DocumentWithTimestamps} from '@luminate/graphql-utils'
import extendSchema from '../extendSchema'
import {BaseAuthenticatedSchema, AuthenticatedEntity, WithAuthenticatedMethods} from '../baseSchemas'

export interface RoleDocument extends DocumentWithTimestamps {
  name: string
  scopes?: string[]
}

export interface RoleModel extends WithAuthenticatedMethods<RoleDocument> {}

const Role = extendSchema(
  BaseAuthenticatedSchema,
  {
    name: {
      type: String,
      required: true,
    },
    scopes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'scope',
      },
    ],
  },
  {timestamps: true},
)

Role.loadClass(AuthenticatedEntity)

export default mongoose.model<RoleDocument, RoleModel>('role', Role)
