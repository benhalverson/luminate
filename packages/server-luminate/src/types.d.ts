import { GraphQLResolveInfo } from 'graphql';
import { Context } from './startServer';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Coffee = {
   __typename?: 'Coffee',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  region?: Maybe<Region>,
  varieties?: Maybe<Array<Maybe<Variety>>>,
  elevation?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
};

export type CoffeeConnection = {
   __typename?: 'CoffeeConnection',
  pageInfo: PageInfo,
  edges: Array<CoffeeEdge>,
};

export type CoffeeEdge = {
   __typename?: 'CoffeeEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<Coffee>,
};

export type Country = {
   __typename?: 'Country',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  regions?: Maybe<Array<Maybe<Region>>>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
};

export type CountryConnection = {
   __typename?: 'CountryConnection',
  pageInfo: PageInfo,
  edges: Array<CountryEdge>,
};

export type CountryEdge = {
   __typename?: 'CountryEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<Country>,
};

export type CreateCoffeeInput = {
  name?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['ID']>,
  region?: Maybe<Scalars['ID']>,
  farm?: Maybe<Scalars['ID']>,
  farmZone?: Maybe<Scalars['ID']>,
  varieties?: Maybe<Array<Maybe<Scalars['ID']>>>,
  elevation?: Maybe<Scalars['String']>,
};

export type CreateCountryInput = {
  name?: Maybe<Scalars['String']>,
};

export type CreateFarmInput = {
  name?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['ID']>,
  region?: Maybe<Scalars['ID']>,
};

export type CreateFarmZoneInput = {
  name?: Maybe<Scalars['String']>,
  farm?: Maybe<Scalars['ID']>,
};

export type CreateRegionInput = {
  name?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['ID']>,
};

export type CreateVarietyInput = {
  name?: Maybe<Scalars['String']>,
};

export type Farm = {
   __typename?: 'Farm',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  region?: Maybe<Region>,
  farmZones?: Maybe<Array<Maybe<FarmZone>>>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
};

export type FarmConnection = {
   __typename?: 'FarmConnection',
  pageInfo: PageInfo,
  edges: Array<FarmEdge>,
};

export type FarmEdge = {
   __typename?: 'FarmEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<Farm>,
};

export type FarmZone = {
   __typename?: 'FarmZone',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  region?: Maybe<Region>,
  farm?: Maybe<Farm>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
};

export type FarmZoneConnection = {
   __typename?: 'FarmZoneConnection',
  pageInfo: PageInfo,
  edges: Array<FarmZoneEdge>,
};

export type FarmZoneEdge = {
   __typename?: 'FarmZoneEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<FarmZone>,
};

export type Mutation = {
   __typename?: 'Mutation',
  _mutation?: Maybe<Scalars['String']>,
  createCoffee?: Maybe<Coffee>,
  updateCoffee?: Maybe<Coffee>,
  deleteCoffee?: Maybe<Coffee>,
  createCountry?: Maybe<Country>,
  updateCountry?: Maybe<Country>,
  deleteCountry?: Maybe<Country>,
  createFarm?: Maybe<Farm>,
  updateFarm?: Maybe<Farm>,
  deleteFarm?: Maybe<Farm>,
  createFarmZone?: Maybe<FarmZone>,
  updateFarmZone?: Maybe<FarmZone>,
  deleteFarmZone?: Maybe<FarmZone>,
  createRegion?: Maybe<Region>,
  updateRegion?: Maybe<Region>,
  deleteRegion?: Maybe<Region>,
  createVariety?: Maybe<Variety>,
  updateVariety?: Maybe<Variety>,
  deleteVariety?: Maybe<Variety>,
};


export type MutationCreateCoffeeArgs = {
  input: CreateCoffeeInput
};


export type MutationUpdateCoffeeArgs = {
  id: Scalars['ID'],
  input: UpdateCoffeeInput
};


export type MutationDeleteCoffeeArgs = {
  id: Scalars['ID']
};


export type MutationCreateCountryArgs = {
  input: CreateCountryInput
};


export type MutationUpdateCountryArgs = {
  id: Scalars['ID'],
  input: UpdateCountryInput
};


export type MutationDeleteCountryArgs = {
  id: Scalars['ID']
};


export type MutationCreateFarmArgs = {
  input: CreateFarmInput
};


export type MutationUpdateFarmArgs = {
  id: Scalars['ID'],
  input: UpdateFarmInput
};


export type MutationDeleteFarmArgs = {
  id: Scalars['ID']
};


export type MutationCreateFarmZoneArgs = {
  input: CreateFarmZoneInput
};


export type MutationUpdateFarmZoneArgs = {
  id: Scalars['ID'],
  input: UpdateFarmZoneInput
};


export type MutationDeleteFarmZoneArgs = {
  id: Scalars['ID']
};


export type MutationCreateRegionArgs = {
  input: CreateRegionInput
};


export type MutationUpdateRegionArgs = {
  id: Scalars['ID'],
  input: UpdateRegionInput
};


export type MutationDeleteRegionArgs = {
  id: Scalars['ID']
};


export type MutationCreateVarietyArgs = {
  input: CreateVarietyInput
};


export type MutationUpdateVarietyArgs = {
  id: Scalars['ID'],
  input: UpdateVarietyInput
};


export type MutationDeleteVarietyArgs = {
  id: Scalars['ID']
};

export enum OperatorEnum {
  Eq = 'eq',
  Ne = 'ne',
  Gt = 'gt',
  Gte = 'gte',
  Lt = 'lt',
  Lte = 'lte',
  Contains = 'contains'
}

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage?: Maybe<Scalars['Boolean']>,
  prevCursor?: Maybe<Scalars['String']>,
  nextCursor?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  _query?: Maybe<Scalars['String']>,
  listCoffees: CoffeeConnection,
  getCoffee?: Maybe<Coffee>,
  listCountries: CountryConnection,
  getCountry?: Maybe<Country>,
  listFarms: FarmConnection,
  getFarm?: Maybe<Farm>,
  listFarmZones: FarmZoneConnection,
  getFarmZone?: Maybe<FarmZone>,
  listRegions: RegionConnection,
  getRegion?: Maybe<Region>,
  listVarieties: VarietyConnection,
  getVariety?: Maybe<Variety>,
};


export type QueryListCoffeesArgs = {
  cursor?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  query?: Maybe<Array<Maybe<QueryInput>>>
};


export type QueryGetCoffeeArgs = {
  id: Scalars['ID']
};


export type QueryListCountriesArgs = {
  cursor?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  query?: Maybe<Array<Maybe<QueryInput>>>
};


export type QueryGetCountryArgs = {
  id: Scalars['ID']
};


export type QueryListFarmsArgs = {
  cursor?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  query?: Maybe<Array<Maybe<QueryInput>>>
};


export type QueryGetFarmArgs = {
  id: Scalars['ID']
};


export type QueryListFarmZonesArgs = {
  cursor?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  query?: Maybe<Array<Maybe<QueryInput>>>
};


export type QueryGetFarmZoneArgs = {
  id: Scalars['ID']
};


export type QueryListRegionsArgs = {
  cursor?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  query?: Maybe<Array<Maybe<QueryInput>>>
};


export type QueryGetRegionArgs = {
  id: Scalars['ID']
};


export type QueryListVarietiesArgs = {
  cursor?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  query?: Maybe<Array<Maybe<QueryInput>>>
};


export type QueryGetVarietyArgs = {
  id: Scalars['ID']
};

export type QueryInput = {
  field: Scalars['String'],
  value: Scalars['String'],
  operator?: Maybe<OperatorEnum>,
};

export type Region = {
   __typename?: 'Region',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  farms?: Maybe<Array<Maybe<Farm>>>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
};

export type RegionConnection = {
   __typename?: 'RegionConnection',
  pageInfo: PageInfo,
  edges: Array<RegionEdge>,
};

export type RegionEdge = {
   __typename?: 'RegionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<Region>,
};

export type Subscription = {
   __typename?: 'Subscription',
  _subscription?: Maybe<Scalars['String']>,
};

export type UpdateCoffeeInput = {
  name?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['ID']>,
  region?: Maybe<Scalars['ID']>,
  farm?: Maybe<Scalars['ID']>,
  farmZone?: Maybe<Scalars['ID']>,
  varieties?: Maybe<Array<Maybe<Scalars['ID']>>>,
  elevation?: Maybe<Scalars['String']>,
};

export type UpdateCountryInput = {
  name?: Maybe<Scalars['String']>,
};

export type UpdateFarmInput = {
  name?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['ID']>,
  region?: Maybe<Scalars['ID']>,
};

export type UpdateFarmZoneInput = {
  name?: Maybe<Scalars['String']>,
  farm?: Maybe<Scalars['ID']>,
};

export type UpdateRegionInput = {
  name?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['ID']>,
};

export type UpdateVarietyInput = {
  name?: Maybe<Scalars['String']>,
};

export type Variety = {
   __typename?: 'Variety',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  coffees?: Maybe<Array<Maybe<Coffee>>>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
};

export type VarietyConnection = {
   __typename?: 'VarietyConnection',
  pageInfo: PageInfo,
  edges: Array<VarietyEdge>,
};

export type VarietyEdge = {
   __typename?: 'VarietyEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<Variety>,
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  QueryInput: QueryInput,
  OperatorEnum: OperatorEnum,
  CoffeeConnection: ResolverTypeWrapper<CoffeeConnection>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  CoffeeEdge: ResolverTypeWrapper<CoffeeEdge>,
  Coffee: ResolverTypeWrapper<Coffee>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Country: ResolverTypeWrapper<Country>,
  Region: ResolverTypeWrapper<Region>,
  Farm: ResolverTypeWrapper<Farm>,
  FarmZone: ResolverTypeWrapper<FarmZone>,
  Variety: ResolverTypeWrapper<Variety>,
  CountryConnection: ResolverTypeWrapper<CountryConnection>,
  CountryEdge: ResolverTypeWrapper<CountryEdge>,
  FarmConnection: ResolverTypeWrapper<FarmConnection>,
  FarmEdge: ResolverTypeWrapper<FarmEdge>,
  FarmZoneConnection: ResolverTypeWrapper<FarmZoneConnection>,
  FarmZoneEdge: ResolverTypeWrapper<FarmZoneEdge>,
  RegionConnection: ResolverTypeWrapper<RegionConnection>,
  RegionEdge: ResolverTypeWrapper<RegionEdge>,
  VarietyConnection: ResolverTypeWrapper<VarietyConnection>,
  VarietyEdge: ResolverTypeWrapper<VarietyEdge>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateCoffeeInput: CreateCoffeeInput,
  UpdateCoffeeInput: UpdateCoffeeInput,
  CreateCountryInput: CreateCountryInput,
  UpdateCountryInput: UpdateCountryInput,
  CreateFarmInput: CreateFarmInput,
  UpdateFarmInput: UpdateFarmInput,
  CreateFarmZoneInput: CreateFarmZoneInput,
  UpdateFarmZoneInput: UpdateFarmZoneInput,
  CreateRegionInput: CreateRegionInput,
  UpdateRegionInput: UpdateRegionInput,
  CreateVarietyInput: CreateVarietyInput,
  UpdateVarietyInput: UpdateVarietyInput,
  Subscription: ResolverTypeWrapper<{}>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  String: Scalars['String'],
  Int: Scalars['Int'],
  QueryInput: QueryInput,
  OperatorEnum: OperatorEnum,
  CoffeeConnection: CoffeeConnection,
  PageInfo: PageInfo,
  Boolean: Scalars['Boolean'],
  CoffeeEdge: CoffeeEdge,
  Coffee: Coffee,
  ID: Scalars['ID'],
  Country: Country,
  Region: Region,
  Farm: Farm,
  FarmZone: FarmZone,
  Variety: Variety,
  CountryConnection: CountryConnection,
  CountryEdge: CountryEdge,
  FarmConnection: FarmConnection,
  FarmEdge: FarmEdge,
  FarmZoneConnection: FarmZoneConnection,
  FarmZoneEdge: FarmZoneEdge,
  RegionConnection: RegionConnection,
  RegionEdge: RegionEdge,
  VarietyConnection: VarietyConnection,
  VarietyEdge: VarietyEdge,
  Mutation: {},
  CreateCoffeeInput: CreateCoffeeInput,
  UpdateCoffeeInput: UpdateCoffeeInput,
  CreateCountryInput: CreateCountryInput,
  UpdateCountryInput: UpdateCountryInput,
  CreateFarmInput: CreateFarmInput,
  UpdateFarmInput: UpdateFarmInput,
  CreateFarmZoneInput: CreateFarmZoneInput,
  UpdateFarmZoneInput: UpdateFarmZoneInput,
  CreateRegionInput: CreateRegionInput,
  UpdateRegionInput: UpdateRegionInput,
  CreateVarietyInput: CreateVarietyInput,
  UpdateVarietyInput: UpdateVarietyInput,
  Subscription: {},
}>;

export type CoffeeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Coffee'] = ResolversParentTypes['Coffee']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>,
  region?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>,
  varieties?: Resolver<Maybe<Array<Maybe<ResolversTypes['Variety']>>>, ParentType, ContextType>,
  elevation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type CoffeeConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CoffeeConnection'] = ResolversParentTypes['CoffeeConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['CoffeeEdge']>, ParentType, ContextType>,
}>;

export type CoffeeEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CoffeeEdge'] = ResolversParentTypes['CoffeeEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Coffee']>, ParentType, ContextType>,
}>;

export type CountryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type CountryConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CountryConnection'] = ResolversParentTypes['CountryConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['CountryEdge']>, ParentType, ContextType>,
}>;

export type CountryEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CountryEdge'] = ResolversParentTypes['CountryEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>,
}>;

export type FarmResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Farm'] = ResolversParentTypes['Farm']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>,
  region?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>,
  farmZones?: Resolver<Maybe<Array<Maybe<ResolversTypes['FarmZone']>>>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type FarmConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FarmConnection'] = ResolversParentTypes['FarmConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['FarmEdge']>, ParentType, ContextType>,
}>;

export type FarmEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FarmEdge'] = ResolversParentTypes['FarmEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType>,
}>;

export type FarmZoneResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FarmZone'] = ResolversParentTypes['FarmZone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>,
  region?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>,
  farm?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type FarmZoneConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FarmZoneConnection'] = ResolversParentTypes['FarmZoneConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['FarmZoneEdge']>, ParentType, ContextType>,
}>;

export type FarmZoneEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FarmZoneEdge'] = ResolversParentTypes['FarmZoneEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['FarmZone']>, ParentType, ContextType>,
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  _mutation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createCoffee?: Resolver<Maybe<ResolversTypes['Coffee']>, ParentType, ContextType, RequireFields<MutationCreateCoffeeArgs, 'input'>>,
  updateCoffee?: Resolver<Maybe<ResolversTypes['Coffee']>, ParentType, ContextType, RequireFields<MutationUpdateCoffeeArgs, 'id' | 'input'>>,
  deleteCoffee?: Resolver<Maybe<ResolversTypes['Coffee']>, ParentType, ContextType, RequireFields<MutationDeleteCoffeeArgs, 'id'>>,
  createCountry?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<MutationCreateCountryArgs, 'input'>>,
  updateCountry?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<MutationUpdateCountryArgs, 'id' | 'input'>>,
  deleteCountry?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<MutationDeleteCountryArgs, 'id'>>,
  createFarm?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType, RequireFields<MutationCreateFarmArgs, 'input'>>,
  updateFarm?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType, RequireFields<MutationUpdateFarmArgs, 'id' | 'input'>>,
  deleteFarm?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType, RequireFields<MutationDeleteFarmArgs, 'id'>>,
  createFarmZone?: Resolver<Maybe<ResolversTypes['FarmZone']>, ParentType, ContextType, RequireFields<MutationCreateFarmZoneArgs, 'input'>>,
  updateFarmZone?: Resolver<Maybe<ResolversTypes['FarmZone']>, ParentType, ContextType, RequireFields<MutationUpdateFarmZoneArgs, 'id' | 'input'>>,
  deleteFarmZone?: Resolver<Maybe<ResolversTypes['FarmZone']>, ParentType, ContextType, RequireFields<MutationDeleteFarmZoneArgs, 'id'>>,
  createRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<MutationCreateRegionArgs, 'input'>>,
  updateRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<MutationUpdateRegionArgs, 'id' | 'input'>>,
  deleteRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<MutationDeleteRegionArgs, 'id'>>,
  createVariety?: Resolver<Maybe<ResolversTypes['Variety']>, ParentType, ContextType, RequireFields<MutationCreateVarietyArgs, 'input'>>,
  updateVariety?: Resolver<Maybe<ResolversTypes['Variety']>, ParentType, ContextType, RequireFields<MutationUpdateVarietyArgs, 'id' | 'input'>>,
  deleteVariety?: Resolver<Maybe<ResolversTypes['Variety']>, ParentType, ContextType, RequireFields<MutationDeleteVarietyArgs, 'id'>>,
}>;

export type PageInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  prevCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _query?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  listCoffees?: Resolver<ResolversTypes['CoffeeConnection'], ParentType, ContextType, QueryListCoffeesArgs>,
  getCoffee?: Resolver<Maybe<ResolversTypes['Coffee']>, ParentType, ContextType, RequireFields<QueryGetCoffeeArgs, 'id'>>,
  listCountries?: Resolver<ResolversTypes['CountryConnection'], ParentType, ContextType, QueryListCountriesArgs>,
  getCountry?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<QueryGetCountryArgs, 'id'>>,
  listFarms?: Resolver<ResolversTypes['FarmConnection'], ParentType, ContextType, QueryListFarmsArgs>,
  getFarm?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType, RequireFields<QueryGetFarmArgs, 'id'>>,
  listFarmZones?: Resolver<ResolversTypes['FarmZoneConnection'], ParentType, ContextType, QueryListFarmZonesArgs>,
  getFarmZone?: Resolver<Maybe<ResolversTypes['FarmZone']>, ParentType, ContextType, RequireFields<QueryGetFarmZoneArgs, 'id'>>,
  listRegions?: Resolver<ResolversTypes['RegionConnection'], ParentType, ContextType, QueryListRegionsArgs>,
  getRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<QueryGetRegionArgs, 'id'>>,
  listVarieties?: Resolver<ResolversTypes['VarietyConnection'], ParentType, ContextType, QueryListVarietiesArgs>,
  getVariety?: Resolver<Maybe<ResolversTypes['Variety']>, ParentType, ContextType, RequireFields<QueryGetVarietyArgs, 'id'>>,
}>;

export type RegionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>,
  farms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Farm']>>>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type RegionConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RegionConnection'] = ResolversParentTypes['RegionConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['RegionEdge']>, ParentType, ContextType>,
}>;

export type RegionEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RegionEdge'] = ResolversParentTypes['RegionEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>,
}>;

export type SubscriptionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  _subscription?: SubscriptionResolver<Maybe<ResolversTypes['String']>, "_subscription", ParentType, ContextType>,
}>;

export type VarietyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Variety'] = ResolversParentTypes['Variety']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  background?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  coffees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Coffee']>>>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type VarietyConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['VarietyConnection'] = ResolversParentTypes['VarietyConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['VarietyEdge']>, ParentType, ContextType>,
}>;

export type VarietyEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['VarietyEdge'] = ResolversParentTypes['VarietyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Variety']>, ParentType, ContextType>,
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Coffee?: CoffeeResolvers<ContextType>,
  CoffeeConnection?: CoffeeConnectionResolvers<ContextType>,
  CoffeeEdge?: CoffeeEdgeResolvers<ContextType>,
  Country?: CountryResolvers<ContextType>,
  CountryConnection?: CountryConnectionResolvers<ContextType>,
  CountryEdge?: CountryEdgeResolvers<ContextType>,
  Farm?: FarmResolvers<ContextType>,
  FarmConnection?: FarmConnectionResolvers<ContextType>,
  FarmEdge?: FarmEdgeResolvers<ContextType>,
  FarmZone?: FarmZoneResolvers<ContextType>,
  FarmZoneConnection?: FarmZoneConnectionResolvers<ContextType>,
  FarmZoneEdge?: FarmZoneEdgeResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  PageInfo?: PageInfoResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Region?: RegionResolvers<ContextType>,
  RegionConnection?: RegionConnectionResolvers<ContextType>,
  RegionEdge?: RegionEdgeResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  Variety?: VarietyResolvers<ContextType>,
  VarietyConnection?: VarietyConnectionResolvers<ContextType>,
  VarietyEdge?: VarietyEdgeResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;