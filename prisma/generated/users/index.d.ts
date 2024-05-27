
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model accounts
 * 
 */
export type accounts = $Result.DefaultSelection<Prisma.$accountsPayload>
/**
 * Model character_inventory
 * 
 */
export type character_inventory = $Result.DefaultSelection<Prisma.$character_inventoryPayload>
/**
 * Model character_items
 * 
 */
export type character_items = $Result.DefaultSelection<Prisma.$character_itemsPayload>
/**
 * Model characters
 * 
 */
export type characters = $Result.DefaultSelection<Prisma.$charactersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.accounts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<ExtArgs>;

  /**
   * `prisma.character_inventory`: Exposes CRUD operations for the **character_inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Character_inventories
    * const character_inventories = await prisma.character_inventory.findMany()
    * ```
    */
  get character_inventory(): Prisma.character_inventoryDelegate<ExtArgs>;

  /**
   * `prisma.character_items`: Exposes CRUD operations for the **character_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Character_items
    * const character_items = await prisma.character_items.findMany()
    * ```
    */
  get character_items(): Prisma.character_itemsDelegate<ExtArgs>;

  /**
   * `prisma.characters`: Exposes CRUD operations for the **characters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.characters.findMany()
    * ```
    */
  get characters(): Prisma.charactersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    accounts: 'accounts',
    character_inventory: 'character_inventory',
    character_items: 'character_items',
    characters: 'characters'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'accounts' | 'character_inventory' | 'character_items' | 'characters'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      accounts: {
        payload: Prisma.$accountsPayload<ExtArgs>
        fields: Prisma.accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findFirst: {
            args: Prisma.accountsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findMany: {
            args: Prisma.accountsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          create: {
            args: Prisma.accountsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          createMany: {
            args: Prisma.accountsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.accountsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          update: {
            args: Prisma.accountsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          deleteMany: {
            args: Prisma.accountsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.accountsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.accountsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.accountsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountsCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      character_inventory: {
        payload: Prisma.$character_inventoryPayload<ExtArgs>
        fields: Prisma.character_inventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.character_inventoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_inventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.character_inventoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_inventoryPayload>
          }
          findFirst: {
            args: Prisma.character_inventoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_inventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.character_inventoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_inventoryPayload>
          }
          findMany: {
            args: Prisma.character_inventoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_inventoryPayload>[]
          }
          create: {
            args: Prisma.character_inventoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_inventoryPayload>
          }
          createMany: {
            args: Prisma.character_inventoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.character_inventoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_inventoryPayload>
          }
          update: {
            args: Prisma.character_inventoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_inventoryPayload>
          }
          deleteMany: {
            args: Prisma.character_inventoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.character_inventoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.character_inventoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_inventoryPayload>
          }
          aggregate: {
            args: Prisma.Character_inventoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharacter_inventory>
          }
          groupBy: {
            args: Prisma.character_inventoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Character_inventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.character_inventoryCountArgs<ExtArgs>,
            result: $Utils.Optional<Character_inventoryCountAggregateOutputType> | number
          }
        }
      }
      character_items: {
        payload: Prisma.$character_itemsPayload<ExtArgs>
        fields: Prisma.character_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.character_itemsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.character_itemsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_itemsPayload>
          }
          findFirst: {
            args: Prisma.character_itemsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.character_itemsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_itemsPayload>
          }
          findMany: {
            args: Prisma.character_itemsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_itemsPayload>[]
          }
          create: {
            args: Prisma.character_itemsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_itemsPayload>
          }
          createMany: {
            args: Prisma.character_itemsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.character_itemsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_itemsPayload>
          }
          update: {
            args: Prisma.character_itemsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_itemsPayload>
          }
          deleteMany: {
            args: Prisma.character_itemsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.character_itemsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.character_itemsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$character_itemsPayload>
          }
          aggregate: {
            args: Prisma.Character_itemsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharacter_items>
          }
          groupBy: {
            args: Prisma.character_itemsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Character_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.character_itemsCountArgs<ExtArgs>,
            result: $Utils.Optional<Character_itemsCountAggregateOutputType> | number
          }
        }
      }
      characters: {
        payload: Prisma.$charactersPayload<ExtArgs>
        fields: Prisma.charactersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.charactersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$charactersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.charactersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$charactersPayload>
          }
          findFirst: {
            args: Prisma.charactersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$charactersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.charactersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$charactersPayload>
          }
          findMany: {
            args: Prisma.charactersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$charactersPayload>[]
          }
          create: {
            args: Prisma.charactersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$charactersPayload>
          }
          createMany: {
            args: Prisma.charactersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.charactersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$charactersPayload>
          }
          update: {
            args: Prisma.charactersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$charactersPayload>
          }
          deleteMany: {
            args: Prisma.charactersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.charactersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.charactersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$charactersPayload>
          }
          aggregate: {
            args: Prisma.CharactersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharacters>
          }
          groupBy: {
            args: Prisma.charactersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CharactersGroupByOutputType>[]
          }
          count: {
            args: Prisma.charactersCountArgs<ExtArgs>,
            result: $Utils.Optional<CharactersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    id: number | null
  }

  export type AccountsSumAggregateOutputType = {
    id: number | null
  }

  export type AccountsMinAggregateOutputType = {
    id: number | null
    accountId: string | null
    password: string | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: number | null
    accountId: string | null
    password: string | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    accountId: number
    password: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    id?: true
  }

  export type AccountsSumAggregateInputType = {
    id?: true
  }

  export type AccountsMinAggregateInputType = {
    id?: true
    accountId?: true
    password?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    accountId?: true
    password?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    accountId?: true
    password?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithAggregationInput | accountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id: number
    accountId: string
    password: string
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    password?: boolean
    characters?: boolean | accounts$charactersArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectScalar = {
    id?: boolean
    accountId?: boolean
    password?: boolean
  }


  export type accountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | accounts$charactersArgs<ExtArgs>
  }


  export type $accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accounts"
    objects: {
      characters: Prisma.$charactersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accountId: string
      password: string
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }


  type accountsGetPayload<S extends boolean | null | undefined | accountsDefaultArgs> = $Result.GetResult<Prisma.$accountsPayload, S>

  type accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<accountsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accounts'], meta: { name: 'accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends accountsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, accountsFindUniqueArgs<ExtArgs>>
    ): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, accountsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends accountsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, accountsFindFirstArgs<ExtArgs>>
    ): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, accountsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends accountsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, accountsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
    **/
    create<T extends accountsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, accountsCreateArgs<ExtArgs>>
    ): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends accountsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, accountsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
    **/
    delete<T extends accountsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, accountsDeleteArgs<ExtArgs>>
    ): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends accountsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, accountsUpdateArgs<ExtArgs>>
    ): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends accountsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, accountsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends accountsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, accountsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
    **/
    upsert<T extends accountsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, accountsUpsertArgs<ExtArgs>>
    ): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountsGroupByArgs['orderBy'] }
        : { orderBy?: accountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accounts model
   */
  readonly fields: accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    characters<T extends accounts$charactersArgs<ExtArgs> = {}>(args?: Subset<T, accounts$charactersArgs<ExtArgs>>): Prisma__charactersClient<$Result.GetResult<Prisma.$charactersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the accounts model
   */ 
  interface accountsFieldRefs {
    readonly id: FieldRef<"accounts", 'Int'>
    readonly accountId: FieldRef<"accounts", 'String'>
    readonly password: FieldRef<"accounts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findMany
   */
  export type accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts create
   */
  export type accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
  }

  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts update
   */
  export type accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
  }

  /**
   * accounts upsert
   */
  export type accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
  }

  /**
   * accounts delete
   */
  export type accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput
  }

  /**
   * accounts.characters
   */
  export type accounts$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the characters
     */
    select?: charactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: charactersInclude<ExtArgs> | null
    where?: charactersWhereInput
  }

  /**
   * accounts without action
   */
  export type accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
  }


  /**
   * Model character_inventory
   */

  export type AggregateCharacter_inventory = {
    _count: Character_inventoryCountAggregateOutputType | null
    _avg: Character_inventoryAvgAggregateOutputType | null
    _sum: Character_inventorySumAggregateOutputType | null
    _min: Character_inventoryMinAggregateOutputType | null
    _max: Character_inventoryMaxAggregateOutputType | null
  }

  export type Character_inventoryAvgAggregateOutputType = {
    id: number | null
  }

  export type Character_inventorySumAggregateOutputType = {
    id: number | null
  }

  export type Character_inventoryMinAggregateOutputType = {
    id: number | null
  }

  export type Character_inventoryMaxAggregateOutputType = {
    id: number | null
  }

  export type Character_inventoryCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type Character_inventoryAvgAggregateInputType = {
    id?: true
  }

  export type Character_inventorySumAggregateInputType = {
    id?: true
  }

  export type Character_inventoryMinAggregateInputType = {
    id?: true
  }

  export type Character_inventoryMaxAggregateInputType = {
    id?: true
  }

  export type Character_inventoryCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type Character_inventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which character_inventory to aggregate.
     */
    where?: character_inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of character_inventories to fetch.
     */
    orderBy?: character_inventoryOrderByWithRelationInput | character_inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: character_inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` character_inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` character_inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned character_inventories
    **/
    _count?: true | Character_inventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Character_inventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Character_inventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Character_inventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Character_inventoryMaxAggregateInputType
  }

  export type GetCharacter_inventoryAggregateType<T extends Character_inventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter_inventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter_inventory[P]>
      : GetScalarType<T[P], AggregateCharacter_inventory[P]>
  }




  export type character_inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: character_inventoryWhereInput
    orderBy?: character_inventoryOrderByWithAggregationInput | character_inventoryOrderByWithAggregationInput[]
    by: Character_inventoryScalarFieldEnum[] | Character_inventoryScalarFieldEnum
    having?: character_inventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Character_inventoryCountAggregateInputType | true
    _avg?: Character_inventoryAvgAggregateInputType
    _sum?: Character_inventorySumAggregateInputType
    _min?: Character_inventoryMinAggregateInputType
    _max?: Character_inventoryMaxAggregateInputType
  }

  export type Character_inventoryGroupByOutputType = {
    id: number
    _count: Character_inventoryCountAggregateOutputType | null
    _avg: Character_inventoryAvgAggregateOutputType | null
    _sum: Character_inventorySumAggregateOutputType | null
    _min: Character_inventoryMinAggregateOutputType | null
    _max: Character_inventoryMaxAggregateOutputType | null
  }

  type GetCharacter_inventoryGroupByPayload<T extends character_inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Character_inventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Character_inventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Character_inventoryGroupByOutputType[P]>
            : GetScalarType<T[P], Character_inventoryGroupByOutputType[P]>
        }
      >
    >


  export type character_inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["character_inventory"]>

  export type character_inventorySelectScalar = {
    id?: boolean
  }



  export type $character_inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "character_inventory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["character_inventory"]>
    composites: {}
  }


  type character_inventoryGetPayload<S extends boolean | null | undefined | character_inventoryDefaultArgs> = $Result.GetResult<Prisma.$character_inventoryPayload, S>

  type character_inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<character_inventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Character_inventoryCountAggregateInputType | true
    }

  export interface character_inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['character_inventory'], meta: { name: 'character_inventory' } }
    /**
     * Find zero or one Character_inventory that matches the filter.
     * @param {character_inventoryFindUniqueArgs} args - Arguments to find a Character_inventory
     * @example
     * // Get one Character_inventory
     * const character_inventory = await prisma.character_inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends character_inventoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, character_inventoryFindUniqueArgs<ExtArgs>>
    ): Prisma__character_inventoryClient<$Result.GetResult<Prisma.$character_inventoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Character_inventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {character_inventoryFindUniqueOrThrowArgs} args - Arguments to find a Character_inventory
     * @example
     * // Get one Character_inventory
     * const character_inventory = await prisma.character_inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends character_inventoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, character_inventoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__character_inventoryClient<$Result.GetResult<Prisma.$character_inventoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Character_inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {character_inventoryFindFirstArgs} args - Arguments to find a Character_inventory
     * @example
     * // Get one Character_inventory
     * const character_inventory = await prisma.character_inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends character_inventoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, character_inventoryFindFirstArgs<ExtArgs>>
    ): Prisma__character_inventoryClient<$Result.GetResult<Prisma.$character_inventoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Character_inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {character_inventoryFindFirstOrThrowArgs} args - Arguments to find a Character_inventory
     * @example
     * // Get one Character_inventory
     * const character_inventory = await prisma.character_inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends character_inventoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, character_inventoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__character_inventoryClient<$Result.GetResult<Prisma.$character_inventoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Character_inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {character_inventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Character_inventories
     * const character_inventories = await prisma.character_inventory.findMany()
     * 
     * // Get first 10 Character_inventories
     * const character_inventories = await prisma.character_inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const character_inventoryWithIdOnly = await prisma.character_inventory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends character_inventoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, character_inventoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$character_inventoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Character_inventory.
     * @param {character_inventoryCreateArgs} args - Arguments to create a Character_inventory.
     * @example
     * // Create one Character_inventory
     * const Character_inventory = await prisma.character_inventory.create({
     *   data: {
     *     // ... data to create a Character_inventory
     *   }
     * })
     * 
    **/
    create<T extends character_inventoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, character_inventoryCreateArgs<ExtArgs>>
    ): Prisma__character_inventoryClient<$Result.GetResult<Prisma.$character_inventoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Character_inventories.
     * @param {character_inventoryCreateManyArgs} args - Arguments to create many Character_inventories.
     * @example
     * // Create many Character_inventories
     * const character_inventory = await prisma.character_inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends character_inventoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, character_inventoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Character_inventory.
     * @param {character_inventoryDeleteArgs} args - Arguments to delete one Character_inventory.
     * @example
     * // Delete one Character_inventory
     * const Character_inventory = await prisma.character_inventory.delete({
     *   where: {
     *     // ... filter to delete one Character_inventory
     *   }
     * })
     * 
    **/
    delete<T extends character_inventoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, character_inventoryDeleteArgs<ExtArgs>>
    ): Prisma__character_inventoryClient<$Result.GetResult<Prisma.$character_inventoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Character_inventory.
     * @param {character_inventoryUpdateArgs} args - Arguments to update one Character_inventory.
     * @example
     * // Update one Character_inventory
     * const character_inventory = await prisma.character_inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends character_inventoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, character_inventoryUpdateArgs<ExtArgs>>
    ): Prisma__character_inventoryClient<$Result.GetResult<Prisma.$character_inventoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Character_inventories.
     * @param {character_inventoryDeleteManyArgs} args - Arguments to filter Character_inventories to delete.
     * @example
     * // Delete a few Character_inventories
     * const { count } = await prisma.character_inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends character_inventoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, character_inventoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Character_inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {character_inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Character_inventories
     * const character_inventory = await prisma.character_inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends character_inventoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, character_inventoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Character_inventory.
     * @param {character_inventoryUpsertArgs} args - Arguments to update or create a Character_inventory.
     * @example
     * // Update or create a Character_inventory
     * const character_inventory = await prisma.character_inventory.upsert({
     *   create: {
     *     // ... data to create a Character_inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character_inventory we want to update
     *   }
     * })
    **/
    upsert<T extends character_inventoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, character_inventoryUpsertArgs<ExtArgs>>
    ): Prisma__character_inventoryClient<$Result.GetResult<Prisma.$character_inventoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Character_inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {character_inventoryCountArgs} args - Arguments to filter Character_inventories to count.
     * @example
     * // Count the number of Character_inventories
     * const count = await prisma.character_inventory.count({
     *   where: {
     *     // ... the filter for the Character_inventories we want to count
     *   }
     * })
    **/
    count<T extends character_inventoryCountArgs>(
      args?: Subset<T, character_inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Character_inventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character_inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Character_inventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Character_inventoryAggregateArgs>(args: Subset<T, Character_inventoryAggregateArgs>): Prisma.PrismaPromise<GetCharacter_inventoryAggregateType<T>>

    /**
     * Group by Character_inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {character_inventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends character_inventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: character_inventoryGroupByArgs['orderBy'] }
        : { orderBy?: character_inventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, character_inventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacter_inventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the character_inventory model
   */
  readonly fields: character_inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for character_inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__character_inventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the character_inventory model
   */ 
  interface character_inventoryFieldRefs {
    readonly id: FieldRef<"character_inventory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * character_inventory findUnique
   */
  export type character_inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_inventory
     */
    select?: character_inventorySelect<ExtArgs> | null
    /**
     * Filter, which character_inventory to fetch.
     */
    where: character_inventoryWhereUniqueInput
  }

  /**
   * character_inventory findUniqueOrThrow
   */
  export type character_inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_inventory
     */
    select?: character_inventorySelect<ExtArgs> | null
    /**
     * Filter, which character_inventory to fetch.
     */
    where: character_inventoryWhereUniqueInput
  }

  /**
   * character_inventory findFirst
   */
  export type character_inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_inventory
     */
    select?: character_inventorySelect<ExtArgs> | null
    /**
     * Filter, which character_inventory to fetch.
     */
    where?: character_inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of character_inventories to fetch.
     */
    orderBy?: character_inventoryOrderByWithRelationInput | character_inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for character_inventories.
     */
    cursor?: character_inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` character_inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` character_inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of character_inventories.
     */
    distinct?: Character_inventoryScalarFieldEnum | Character_inventoryScalarFieldEnum[]
  }

  /**
   * character_inventory findFirstOrThrow
   */
  export type character_inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_inventory
     */
    select?: character_inventorySelect<ExtArgs> | null
    /**
     * Filter, which character_inventory to fetch.
     */
    where?: character_inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of character_inventories to fetch.
     */
    orderBy?: character_inventoryOrderByWithRelationInput | character_inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for character_inventories.
     */
    cursor?: character_inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` character_inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` character_inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of character_inventories.
     */
    distinct?: Character_inventoryScalarFieldEnum | Character_inventoryScalarFieldEnum[]
  }

  /**
   * character_inventory findMany
   */
  export type character_inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_inventory
     */
    select?: character_inventorySelect<ExtArgs> | null
    /**
     * Filter, which character_inventories to fetch.
     */
    where?: character_inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of character_inventories to fetch.
     */
    orderBy?: character_inventoryOrderByWithRelationInput | character_inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing character_inventories.
     */
    cursor?: character_inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` character_inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` character_inventories.
     */
    skip?: number
    distinct?: Character_inventoryScalarFieldEnum | Character_inventoryScalarFieldEnum[]
  }

  /**
   * character_inventory create
   */
  export type character_inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_inventory
     */
    select?: character_inventorySelect<ExtArgs> | null
    /**
     * The data needed to create a character_inventory.
     */
    data?: XOR<character_inventoryCreateInput, character_inventoryUncheckedCreateInput>
  }

  /**
   * character_inventory createMany
   */
  export type character_inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many character_inventories.
     */
    data: character_inventoryCreateManyInput | character_inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * character_inventory update
   */
  export type character_inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_inventory
     */
    select?: character_inventorySelect<ExtArgs> | null
    /**
     * The data needed to update a character_inventory.
     */
    data: XOR<character_inventoryUpdateInput, character_inventoryUncheckedUpdateInput>
    /**
     * Choose, which character_inventory to update.
     */
    where: character_inventoryWhereUniqueInput
  }

  /**
   * character_inventory updateMany
   */
  export type character_inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update character_inventories.
     */
    data: XOR<character_inventoryUpdateManyMutationInput, character_inventoryUncheckedUpdateManyInput>
    /**
     * Filter which character_inventories to update
     */
    where?: character_inventoryWhereInput
  }

  /**
   * character_inventory upsert
   */
  export type character_inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_inventory
     */
    select?: character_inventorySelect<ExtArgs> | null
    /**
     * The filter to search for the character_inventory to update in case it exists.
     */
    where: character_inventoryWhereUniqueInput
    /**
     * In case the character_inventory found by the `where` argument doesn't exist, create a new character_inventory with this data.
     */
    create: XOR<character_inventoryCreateInput, character_inventoryUncheckedCreateInput>
    /**
     * In case the character_inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<character_inventoryUpdateInput, character_inventoryUncheckedUpdateInput>
  }

  /**
   * character_inventory delete
   */
  export type character_inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_inventory
     */
    select?: character_inventorySelect<ExtArgs> | null
    /**
     * Filter which character_inventory to delete.
     */
    where: character_inventoryWhereUniqueInput
  }

  /**
   * character_inventory deleteMany
   */
  export type character_inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which character_inventories to delete
     */
    where?: character_inventoryWhereInput
  }

  /**
   * character_inventory without action
   */
  export type character_inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_inventory
     */
    select?: character_inventorySelect<ExtArgs> | null
  }


  /**
   * Model character_items
   */

  export type AggregateCharacter_items = {
    _count: Character_itemsCountAggregateOutputType | null
    _avg: Character_itemsAvgAggregateOutputType | null
    _sum: Character_itemsSumAggregateOutputType | null
    _min: Character_itemsMinAggregateOutputType | null
    _max: Character_itemsMaxAggregateOutputType | null
  }

  export type Character_itemsAvgAggregateOutputType = {
    id: number | null
  }

  export type Character_itemsSumAggregateOutputType = {
    id: number | null
  }

  export type Character_itemsMinAggregateOutputType = {
    id: number | null
  }

  export type Character_itemsMaxAggregateOutputType = {
    id: number | null
  }

  export type Character_itemsCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type Character_itemsAvgAggregateInputType = {
    id?: true
  }

  export type Character_itemsSumAggregateInputType = {
    id?: true
  }

  export type Character_itemsMinAggregateInputType = {
    id?: true
  }

  export type Character_itemsMaxAggregateInputType = {
    id?: true
  }

  export type Character_itemsCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type Character_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which character_items to aggregate.
     */
    where?: character_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of character_items to fetch.
     */
    orderBy?: character_itemsOrderByWithRelationInput | character_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: character_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` character_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` character_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned character_items
    **/
    _count?: true | Character_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Character_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Character_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Character_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Character_itemsMaxAggregateInputType
  }

  export type GetCharacter_itemsAggregateType<T extends Character_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter_items[P]>
      : GetScalarType<T[P], AggregateCharacter_items[P]>
  }




  export type character_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: character_itemsWhereInput
    orderBy?: character_itemsOrderByWithAggregationInput | character_itemsOrderByWithAggregationInput[]
    by: Character_itemsScalarFieldEnum[] | Character_itemsScalarFieldEnum
    having?: character_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Character_itemsCountAggregateInputType | true
    _avg?: Character_itemsAvgAggregateInputType
    _sum?: Character_itemsSumAggregateInputType
    _min?: Character_itemsMinAggregateInputType
    _max?: Character_itemsMaxAggregateInputType
  }

  export type Character_itemsGroupByOutputType = {
    id: number
    _count: Character_itemsCountAggregateOutputType | null
    _avg: Character_itemsAvgAggregateOutputType | null
    _sum: Character_itemsSumAggregateOutputType | null
    _min: Character_itemsMinAggregateOutputType | null
    _max: Character_itemsMaxAggregateOutputType | null
  }

  type GetCharacter_itemsGroupByPayload<T extends character_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Character_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Character_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Character_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Character_itemsGroupByOutputType[P]>
        }
      >
    >


  export type character_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["character_items"]>

  export type character_itemsSelectScalar = {
    id?: boolean
  }



  export type $character_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "character_items"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["character_items"]>
    composites: {}
  }


  type character_itemsGetPayload<S extends boolean | null | undefined | character_itemsDefaultArgs> = $Result.GetResult<Prisma.$character_itemsPayload, S>

  type character_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<character_itemsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Character_itemsCountAggregateInputType | true
    }

  export interface character_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['character_items'], meta: { name: 'character_items' } }
    /**
     * Find zero or one Character_items that matches the filter.
     * @param {character_itemsFindUniqueArgs} args - Arguments to find a Character_items
     * @example
     * // Get one Character_items
     * const character_items = await prisma.character_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends character_itemsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, character_itemsFindUniqueArgs<ExtArgs>>
    ): Prisma__character_itemsClient<$Result.GetResult<Prisma.$character_itemsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Character_items that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {character_itemsFindUniqueOrThrowArgs} args - Arguments to find a Character_items
     * @example
     * // Get one Character_items
     * const character_items = await prisma.character_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends character_itemsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, character_itemsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__character_itemsClient<$Result.GetResult<Prisma.$character_itemsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Character_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {character_itemsFindFirstArgs} args - Arguments to find a Character_items
     * @example
     * // Get one Character_items
     * const character_items = await prisma.character_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends character_itemsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, character_itemsFindFirstArgs<ExtArgs>>
    ): Prisma__character_itemsClient<$Result.GetResult<Prisma.$character_itemsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Character_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {character_itemsFindFirstOrThrowArgs} args - Arguments to find a Character_items
     * @example
     * // Get one Character_items
     * const character_items = await prisma.character_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends character_itemsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, character_itemsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__character_itemsClient<$Result.GetResult<Prisma.$character_itemsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Character_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {character_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Character_items
     * const character_items = await prisma.character_items.findMany()
     * 
     * // Get first 10 Character_items
     * const character_items = await prisma.character_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const character_itemsWithIdOnly = await prisma.character_items.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends character_itemsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, character_itemsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$character_itemsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Character_items.
     * @param {character_itemsCreateArgs} args - Arguments to create a Character_items.
     * @example
     * // Create one Character_items
     * const Character_items = await prisma.character_items.create({
     *   data: {
     *     // ... data to create a Character_items
     *   }
     * })
     * 
    **/
    create<T extends character_itemsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, character_itemsCreateArgs<ExtArgs>>
    ): Prisma__character_itemsClient<$Result.GetResult<Prisma.$character_itemsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Character_items.
     * @param {character_itemsCreateManyArgs} args - Arguments to create many Character_items.
     * @example
     * // Create many Character_items
     * const character_items = await prisma.character_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends character_itemsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, character_itemsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Character_items.
     * @param {character_itemsDeleteArgs} args - Arguments to delete one Character_items.
     * @example
     * // Delete one Character_items
     * const Character_items = await prisma.character_items.delete({
     *   where: {
     *     // ... filter to delete one Character_items
     *   }
     * })
     * 
    **/
    delete<T extends character_itemsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, character_itemsDeleteArgs<ExtArgs>>
    ): Prisma__character_itemsClient<$Result.GetResult<Prisma.$character_itemsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Character_items.
     * @param {character_itemsUpdateArgs} args - Arguments to update one Character_items.
     * @example
     * // Update one Character_items
     * const character_items = await prisma.character_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends character_itemsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, character_itemsUpdateArgs<ExtArgs>>
    ): Prisma__character_itemsClient<$Result.GetResult<Prisma.$character_itemsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Character_items.
     * @param {character_itemsDeleteManyArgs} args - Arguments to filter Character_items to delete.
     * @example
     * // Delete a few Character_items
     * const { count } = await prisma.character_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends character_itemsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, character_itemsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Character_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {character_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Character_items
     * const character_items = await prisma.character_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends character_itemsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, character_itemsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Character_items.
     * @param {character_itemsUpsertArgs} args - Arguments to update or create a Character_items.
     * @example
     * // Update or create a Character_items
     * const character_items = await prisma.character_items.upsert({
     *   create: {
     *     // ... data to create a Character_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character_items we want to update
     *   }
     * })
    **/
    upsert<T extends character_itemsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, character_itemsUpsertArgs<ExtArgs>>
    ): Prisma__character_itemsClient<$Result.GetResult<Prisma.$character_itemsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Character_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {character_itemsCountArgs} args - Arguments to filter Character_items to count.
     * @example
     * // Count the number of Character_items
     * const count = await prisma.character_items.count({
     *   where: {
     *     // ... the filter for the Character_items we want to count
     *   }
     * })
    **/
    count<T extends character_itemsCountArgs>(
      args?: Subset<T, character_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Character_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Character_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Character_itemsAggregateArgs>(args: Subset<T, Character_itemsAggregateArgs>): Prisma.PrismaPromise<GetCharacter_itemsAggregateType<T>>

    /**
     * Group by Character_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {character_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends character_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: character_itemsGroupByArgs['orderBy'] }
        : { orderBy?: character_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, character_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacter_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the character_items model
   */
  readonly fields: character_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for character_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__character_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the character_items model
   */ 
  interface character_itemsFieldRefs {
    readonly id: FieldRef<"character_items", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * character_items findUnique
   */
  export type character_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_items
     */
    select?: character_itemsSelect<ExtArgs> | null
    /**
     * Filter, which character_items to fetch.
     */
    where: character_itemsWhereUniqueInput
  }

  /**
   * character_items findUniqueOrThrow
   */
  export type character_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_items
     */
    select?: character_itemsSelect<ExtArgs> | null
    /**
     * Filter, which character_items to fetch.
     */
    where: character_itemsWhereUniqueInput
  }

  /**
   * character_items findFirst
   */
  export type character_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_items
     */
    select?: character_itemsSelect<ExtArgs> | null
    /**
     * Filter, which character_items to fetch.
     */
    where?: character_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of character_items to fetch.
     */
    orderBy?: character_itemsOrderByWithRelationInput | character_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for character_items.
     */
    cursor?: character_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` character_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` character_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of character_items.
     */
    distinct?: Character_itemsScalarFieldEnum | Character_itemsScalarFieldEnum[]
  }

  /**
   * character_items findFirstOrThrow
   */
  export type character_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_items
     */
    select?: character_itemsSelect<ExtArgs> | null
    /**
     * Filter, which character_items to fetch.
     */
    where?: character_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of character_items to fetch.
     */
    orderBy?: character_itemsOrderByWithRelationInput | character_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for character_items.
     */
    cursor?: character_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` character_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` character_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of character_items.
     */
    distinct?: Character_itemsScalarFieldEnum | Character_itemsScalarFieldEnum[]
  }

  /**
   * character_items findMany
   */
  export type character_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_items
     */
    select?: character_itemsSelect<ExtArgs> | null
    /**
     * Filter, which character_items to fetch.
     */
    where?: character_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of character_items to fetch.
     */
    orderBy?: character_itemsOrderByWithRelationInput | character_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing character_items.
     */
    cursor?: character_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` character_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` character_items.
     */
    skip?: number
    distinct?: Character_itemsScalarFieldEnum | Character_itemsScalarFieldEnum[]
  }

  /**
   * character_items create
   */
  export type character_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_items
     */
    select?: character_itemsSelect<ExtArgs> | null
    /**
     * The data needed to create a character_items.
     */
    data?: XOR<character_itemsCreateInput, character_itemsUncheckedCreateInput>
  }

  /**
   * character_items createMany
   */
  export type character_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many character_items.
     */
    data: character_itemsCreateManyInput | character_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * character_items update
   */
  export type character_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_items
     */
    select?: character_itemsSelect<ExtArgs> | null
    /**
     * The data needed to update a character_items.
     */
    data: XOR<character_itemsUpdateInput, character_itemsUncheckedUpdateInput>
    /**
     * Choose, which character_items to update.
     */
    where: character_itemsWhereUniqueInput
  }

  /**
   * character_items updateMany
   */
  export type character_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update character_items.
     */
    data: XOR<character_itemsUpdateManyMutationInput, character_itemsUncheckedUpdateManyInput>
    /**
     * Filter which character_items to update
     */
    where?: character_itemsWhereInput
  }

  /**
   * character_items upsert
   */
  export type character_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_items
     */
    select?: character_itemsSelect<ExtArgs> | null
    /**
     * The filter to search for the character_items to update in case it exists.
     */
    where: character_itemsWhereUniqueInput
    /**
     * In case the character_items found by the `where` argument doesn't exist, create a new character_items with this data.
     */
    create: XOR<character_itemsCreateInput, character_itemsUncheckedCreateInput>
    /**
     * In case the character_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<character_itemsUpdateInput, character_itemsUncheckedUpdateInput>
  }

  /**
   * character_items delete
   */
  export type character_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_items
     */
    select?: character_itemsSelect<ExtArgs> | null
    /**
     * Filter which character_items to delete.
     */
    where: character_itemsWhereUniqueInput
  }

  /**
   * character_items deleteMany
   */
  export type character_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which character_items to delete
     */
    where?: character_itemsWhereInput
  }

  /**
   * character_items without action
   */
  export type character_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the character_items
     */
    select?: character_itemsSelect<ExtArgs> | null
  }


  /**
   * Model characters
   */

  export type AggregateCharacters = {
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  export type CharactersAvgAggregateOutputType = {
    id: number | null
    health: number | null
    power: number | null
    money: number | null
  }

  export type CharactersSumAggregateOutputType = {
    id: number | null
    health: number | null
    power: number | null
    money: number | null
  }

  export type CharactersMinAggregateOutputType = {
    id: number | null
    name: string | null
    health: number | null
    power: number | null
    money: number | null
  }

  export type CharactersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    health: number | null
    power: number | null
    money: number | null
  }

  export type CharactersCountAggregateOutputType = {
    id: number
    name: number
    health: number
    power: number
    money: number
    _all: number
  }


  export type CharactersAvgAggregateInputType = {
    id?: true
    health?: true
    power?: true
    money?: true
  }

  export type CharactersSumAggregateInputType = {
    id?: true
    health?: true
    power?: true
    money?: true
  }

  export type CharactersMinAggregateInputType = {
    id?: true
    name?: true
    health?: true
    power?: true
    money?: true
  }

  export type CharactersMaxAggregateInputType = {
    id?: true
    name?: true
    health?: true
    power?: true
    money?: true
  }

  export type CharactersCountAggregateInputType = {
    id?: true
    name?: true
    health?: true
    power?: true
    money?: true
    _all?: true
  }

  export type CharactersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which characters to aggregate.
     */
    where?: charactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of characters to fetch.
     */
    orderBy?: charactersOrderByWithRelationInput | charactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: charactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned characters
    **/
    _count?: true | CharactersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharactersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharactersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharactersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharactersMaxAggregateInputType
  }

  export type GetCharactersAggregateType<T extends CharactersAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacters[P]>
      : GetScalarType<T[P], AggregateCharacters[P]>
  }




  export type charactersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: charactersWhereInput
    orderBy?: charactersOrderByWithAggregationInput | charactersOrderByWithAggregationInput[]
    by: CharactersScalarFieldEnum[] | CharactersScalarFieldEnum
    having?: charactersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharactersCountAggregateInputType | true
    _avg?: CharactersAvgAggregateInputType
    _sum?: CharactersSumAggregateInputType
    _min?: CharactersMinAggregateInputType
    _max?: CharactersMaxAggregateInputType
  }

  export type CharactersGroupByOutputType = {
    id: number
    name: string
    health: number | null
    power: number | null
    money: number | null
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  type GetCharactersGroupByPayload<T extends charactersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharactersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharactersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharactersGroupByOutputType[P]>
            : GetScalarType<T[P], CharactersGroupByOutputType[P]>
        }
      >
    >


  export type charactersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    health?: boolean
    power?: boolean
    money?: boolean
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characters"]>

  export type charactersSelectScalar = {
    id?: boolean
    name?: boolean
    health?: boolean
    power?: boolean
    money?: boolean
  }


  export type charactersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }


  export type $charactersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "characters"
    objects: {
      accounts: Prisma.$accountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      health: number | null
      power: number | null
      money: number | null
    }, ExtArgs["result"]["characters"]>
    composites: {}
  }


  type charactersGetPayload<S extends boolean | null | undefined | charactersDefaultArgs> = $Result.GetResult<Prisma.$charactersPayload, S>

  type charactersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<charactersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharactersCountAggregateInputType | true
    }

  export interface charactersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['characters'], meta: { name: 'characters' } }
    /**
     * Find zero or one Characters that matches the filter.
     * @param {charactersFindUniqueArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends charactersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, charactersFindUniqueArgs<ExtArgs>>
    ): Prisma__charactersClient<$Result.GetResult<Prisma.$charactersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Characters that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {charactersFindUniqueOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends charactersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, charactersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__charactersClient<$Result.GetResult<Prisma.$charactersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {charactersFindFirstArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends charactersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, charactersFindFirstArgs<ExtArgs>>
    ): Prisma__charactersClient<$Result.GetResult<Prisma.$charactersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Characters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {charactersFindFirstOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends charactersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, charactersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__charactersClient<$Result.GetResult<Prisma.$charactersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {charactersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.characters.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.characters.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const charactersWithIdOnly = await prisma.characters.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends charactersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, charactersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$charactersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Characters.
     * @param {charactersCreateArgs} args - Arguments to create a Characters.
     * @example
     * // Create one Characters
     * const Characters = await prisma.characters.create({
     *   data: {
     *     // ... data to create a Characters
     *   }
     * })
     * 
    **/
    create<T extends charactersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, charactersCreateArgs<ExtArgs>>
    ): Prisma__charactersClient<$Result.GetResult<Prisma.$charactersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Characters.
     * @param {charactersCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const characters = await prisma.characters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends charactersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, charactersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Characters.
     * @param {charactersDeleteArgs} args - Arguments to delete one Characters.
     * @example
     * // Delete one Characters
     * const Characters = await prisma.characters.delete({
     *   where: {
     *     // ... filter to delete one Characters
     *   }
     * })
     * 
    **/
    delete<T extends charactersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, charactersDeleteArgs<ExtArgs>>
    ): Prisma__charactersClient<$Result.GetResult<Prisma.$charactersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Characters.
     * @param {charactersUpdateArgs} args - Arguments to update one Characters.
     * @example
     * // Update one Characters
     * const characters = await prisma.characters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends charactersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, charactersUpdateArgs<ExtArgs>>
    ): Prisma__charactersClient<$Result.GetResult<Prisma.$charactersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Characters.
     * @param {charactersDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.characters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends charactersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, charactersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {charactersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const characters = await prisma.characters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends charactersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, charactersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Characters.
     * @param {charactersUpsertArgs} args - Arguments to update or create a Characters.
     * @example
     * // Update or create a Characters
     * const characters = await prisma.characters.upsert({
     *   create: {
     *     // ... data to create a Characters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Characters we want to update
     *   }
     * })
    **/
    upsert<T extends charactersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, charactersUpsertArgs<ExtArgs>>
    ): Prisma__charactersClient<$Result.GetResult<Prisma.$charactersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {charactersCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.characters.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends charactersCountArgs>(
      args?: Subset<T, charactersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharactersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharactersAggregateArgs>(args: Subset<T, CharactersAggregateArgs>): Prisma.PrismaPromise<GetCharactersAggregateType<T>>

    /**
     * Group by Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {charactersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends charactersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: charactersGroupByArgs['orderBy'] }
        : { orderBy?: charactersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, charactersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharactersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the characters model
   */
  readonly fields: charactersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for characters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__charactersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountsDefaultArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the characters model
   */ 
  interface charactersFieldRefs {
    readonly id: FieldRef<"characters", 'Int'>
    readonly name: FieldRef<"characters", 'String'>
    readonly health: FieldRef<"characters", 'Int'>
    readonly power: FieldRef<"characters", 'Int'>
    readonly money: FieldRef<"characters", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * characters findUnique
   */
  export type charactersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the characters
     */
    select?: charactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: charactersInclude<ExtArgs> | null
    /**
     * Filter, which characters to fetch.
     */
    where: charactersWhereUniqueInput
  }

  /**
   * characters findUniqueOrThrow
   */
  export type charactersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the characters
     */
    select?: charactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: charactersInclude<ExtArgs> | null
    /**
     * Filter, which characters to fetch.
     */
    where: charactersWhereUniqueInput
  }

  /**
   * characters findFirst
   */
  export type charactersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the characters
     */
    select?: charactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: charactersInclude<ExtArgs> | null
    /**
     * Filter, which characters to fetch.
     */
    where?: charactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of characters to fetch.
     */
    orderBy?: charactersOrderByWithRelationInput | charactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for characters.
     */
    cursor?: charactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * characters findFirstOrThrow
   */
  export type charactersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the characters
     */
    select?: charactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: charactersInclude<ExtArgs> | null
    /**
     * Filter, which characters to fetch.
     */
    where?: charactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of characters to fetch.
     */
    orderBy?: charactersOrderByWithRelationInput | charactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for characters.
     */
    cursor?: charactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * characters findMany
   */
  export type charactersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the characters
     */
    select?: charactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: charactersInclude<ExtArgs> | null
    /**
     * Filter, which characters to fetch.
     */
    where?: charactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of characters to fetch.
     */
    orderBy?: charactersOrderByWithRelationInput | charactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing characters.
     */
    cursor?: charactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` characters.
     */
    skip?: number
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * characters create
   */
  export type charactersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the characters
     */
    select?: charactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: charactersInclude<ExtArgs> | null
    /**
     * The data needed to create a characters.
     */
    data: XOR<charactersCreateInput, charactersUncheckedCreateInput>
  }

  /**
   * characters createMany
   */
  export type charactersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many characters.
     */
    data: charactersCreateManyInput | charactersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * characters update
   */
  export type charactersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the characters
     */
    select?: charactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: charactersInclude<ExtArgs> | null
    /**
     * The data needed to update a characters.
     */
    data: XOR<charactersUpdateInput, charactersUncheckedUpdateInput>
    /**
     * Choose, which characters to update.
     */
    where: charactersWhereUniqueInput
  }

  /**
   * characters updateMany
   */
  export type charactersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update characters.
     */
    data: XOR<charactersUpdateManyMutationInput, charactersUncheckedUpdateManyInput>
    /**
     * Filter which characters to update
     */
    where?: charactersWhereInput
  }

  /**
   * characters upsert
   */
  export type charactersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the characters
     */
    select?: charactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: charactersInclude<ExtArgs> | null
    /**
     * The filter to search for the characters to update in case it exists.
     */
    where: charactersWhereUniqueInput
    /**
     * In case the characters found by the `where` argument doesn't exist, create a new characters with this data.
     */
    create: XOR<charactersCreateInput, charactersUncheckedCreateInput>
    /**
     * In case the characters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<charactersUpdateInput, charactersUncheckedUpdateInput>
  }

  /**
   * characters delete
   */
  export type charactersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the characters
     */
    select?: charactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: charactersInclude<ExtArgs> | null
    /**
     * Filter which characters to delete.
     */
    where: charactersWhereUniqueInput
  }

  /**
   * characters deleteMany
   */
  export type charactersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which characters to delete
     */
    where?: charactersWhereInput
  }

  /**
   * characters without action
   */
  export type charactersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the characters
     */
    select?: charactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: charactersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountsScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    password: 'password'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const Character_inventoryScalarFieldEnum: {
    id: 'id'
  };

  export type Character_inventoryScalarFieldEnum = (typeof Character_inventoryScalarFieldEnum)[keyof typeof Character_inventoryScalarFieldEnum]


  export const Character_itemsScalarFieldEnum: {
    id: 'id'
  };

  export type Character_itemsScalarFieldEnum = (typeof Character_itemsScalarFieldEnum)[keyof typeof Character_itemsScalarFieldEnum]


  export const CharactersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    health: 'health',
    power: 'power',
    money: 'money'
  };

  export type CharactersScalarFieldEnum = (typeof CharactersScalarFieldEnum)[keyof typeof CharactersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type accountsWhereInput = {
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    id?: IntFilter<"accounts"> | number
    accountId?: StringFilter<"accounts"> | string
    password?: StringFilter<"accounts"> | string
    characters?: XOR<CharactersNullableRelationFilter, charactersWhereInput> | null
  }

  export type accountsOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    password?: SortOrder
    characters?: charactersOrderByWithRelationInput
  }

  export type accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    accountId?: string
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    password?: StringFilter<"accounts"> | string
    characters?: XOR<CharactersNullableRelationFilter, charactersWhereInput> | null
  }, "id" | "accountId">

  export type accountsOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    password?: SortOrder
    _count?: accountsCountOrderByAggregateInput
    _avg?: accountsAvgOrderByAggregateInput
    _max?: accountsMaxOrderByAggregateInput
    _min?: accountsMinOrderByAggregateInput
    _sum?: accountsSumOrderByAggregateInput
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    OR?: accountsScalarWhereWithAggregatesInput[]
    NOT?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"accounts"> | number
    accountId?: StringWithAggregatesFilter<"accounts"> | string
    password?: StringWithAggregatesFilter<"accounts"> | string
  }

  export type character_inventoryWhereInput = {
    AND?: character_inventoryWhereInput | character_inventoryWhereInput[]
    OR?: character_inventoryWhereInput[]
    NOT?: character_inventoryWhereInput | character_inventoryWhereInput[]
    id?: IntFilter<"character_inventory"> | number
  }

  export type character_inventoryOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type character_inventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: character_inventoryWhereInput | character_inventoryWhereInput[]
    OR?: character_inventoryWhereInput[]
    NOT?: character_inventoryWhereInput | character_inventoryWhereInput[]
  }, "id">

  export type character_inventoryOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: character_inventoryCountOrderByAggregateInput
    _avg?: character_inventoryAvgOrderByAggregateInput
    _max?: character_inventoryMaxOrderByAggregateInput
    _min?: character_inventoryMinOrderByAggregateInput
    _sum?: character_inventorySumOrderByAggregateInput
  }

  export type character_inventoryScalarWhereWithAggregatesInput = {
    AND?: character_inventoryScalarWhereWithAggregatesInput | character_inventoryScalarWhereWithAggregatesInput[]
    OR?: character_inventoryScalarWhereWithAggregatesInput[]
    NOT?: character_inventoryScalarWhereWithAggregatesInput | character_inventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"character_inventory"> | number
  }

  export type character_itemsWhereInput = {
    AND?: character_itemsWhereInput | character_itemsWhereInput[]
    OR?: character_itemsWhereInput[]
    NOT?: character_itemsWhereInput | character_itemsWhereInput[]
    id?: IntFilter<"character_items"> | number
  }

  export type character_itemsOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type character_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: character_itemsWhereInput | character_itemsWhereInput[]
    OR?: character_itemsWhereInput[]
    NOT?: character_itemsWhereInput | character_itemsWhereInput[]
  }, "id">

  export type character_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: character_itemsCountOrderByAggregateInput
    _avg?: character_itemsAvgOrderByAggregateInput
    _max?: character_itemsMaxOrderByAggregateInput
    _min?: character_itemsMinOrderByAggregateInput
    _sum?: character_itemsSumOrderByAggregateInput
  }

  export type character_itemsScalarWhereWithAggregatesInput = {
    AND?: character_itemsScalarWhereWithAggregatesInput | character_itemsScalarWhereWithAggregatesInput[]
    OR?: character_itemsScalarWhereWithAggregatesInput[]
    NOT?: character_itemsScalarWhereWithAggregatesInput | character_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"character_items"> | number
  }

  export type charactersWhereInput = {
    AND?: charactersWhereInput | charactersWhereInput[]
    OR?: charactersWhereInput[]
    NOT?: charactersWhereInput | charactersWhereInput[]
    id?: IntFilter<"characters"> | number
    name?: StringFilter<"characters"> | string
    health?: IntNullableFilter<"characters"> | number | null
    power?: IntNullableFilter<"characters"> | number | null
    money?: IntNullableFilter<"characters"> | number | null
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
  }

  export type charactersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    health?: SortOrderInput | SortOrder
    power?: SortOrderInput | SortOrder
    money?: SortOrderInput | SortOrder
    accounts?: accountsOrderByWithRelationInput
  }

  export type charactersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: charactersWhereInput | charactersWhereInput[]
    OR?: charactersWhereInput[]
    NOT?: charactersWhereInput | charactersWhereInput[]
    name?: StringFilter<"characters"> | string
    health?: IntNullableFilter<"characters"> | number | null
    power?: IntNullableFilter<"characters"> | number | null
    money?: IntNullableFilter<"characters"> | number | null
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
  }, "id">

  export type charactersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    health?: SortOrderInput | SortOrder
    power?: SortOrderInput | SortOrder
    money?: SortOrderInput | SortOrder
    _count?: charactersCountOrderByAggregateInput
    _avg?: charactersAvgOrderByAggregateInput
    _max?: charactersMaxOrderByAggregateInput
    _min?: charactersMinOrderByAggregateInput
    _sum?: charactersSumOrderByAggregateInput
  }

  export type charactersScalarWhereWithAggregatesInput = {
    AND?: charactersScalarWhereWithAggregatesInput | charactersScalarWhereWithAggregatesInput[]
    OR?: charactersScalarWhereWithAggregatesInput[]
    NOT?: charactersScalarWhereWithAggregatesInput | charactersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"characters"> | number
    name?: StringWithAggregatesFilter<"characters"> | string
    health?: IntNullableWithAggregatesFilter<"characters"> | number | null
    power?: IntNullableWithAggregatesFilter<"characters"> | number | null
    money?: IntNullableWithAggregatesFilter<"characters"> | number | null
  }

  export type accountsCreateInput = {
    accountId: string
    password: string
    characters?: charactersCreateNestedOneWithoutAccountsInput
  }

  export type accountsUncheckedCreateInput = {
    id?: number
    accountId: string
    password: string
    characters?: charactersUncheckedCreateNestedOneWithoutAccountsInput
  }

  export type accountsUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    characters?: charactersUpdateOneWithoutAccountsNestedInput
  }

  export type accountsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    characters?: charactersUncheckedUpdateOneWithoutAccountsNestedInput
  }

  export type accountsCreateManyInput = {
    id?: number
    accountId: string
    password: string
  }

  export type accountsUpdateManyMutationInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type accountsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type character_inventoryCreateInput = {

  }

  export type character_inventoryUncheckedCreateInput = {
    id?: number
  }

  export type character_inventoryUpdateInput = {

  }

  export type character_inventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type character_inventoryCreateManyInput = {
    id?: number
  }

  export type character_inventoryUpdateManyMutationInput = {

  }

  export type character_inventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type character_itemsCreateInput = {

  }

  export type character_itemsUncheckedCreateInput = {
    id?: number
  }

  export type character_itemsUpdateInput = {

  }

  export type character_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type character_itemsCreateManyInput = {
    id?: number
  }

  export type character_itemsUpdateManyMutationInput = {

  }

  export type character_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type charactersCreateInput = {
    name: string
    health?: number | null
    power?: number | null
    money?: number | null
    accounts?: accountsCreateNestedOneWithoutCharactersInput
  }

  export type charactersUncheckedCreateInput = {
    id?: number
    name: string
    health?: number | null
    power?: number | null
    money?: number | null
  }

  export type charactersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
    accounts?: accountsUpdateOneRequiredWithoutCharactersNestedInput
  }

  export type charactersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type charactersCreateManyInput = {
    id?: number
    name: string
    health?: number | null
    power?: number | null
    money?: number | null
  }

  export type charactersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type charactersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CharactersNullableRelationFilter = {
    is?: charactersWhereInput | null
    isNot?: charactersWhereInput | null
  }

  export type accountsCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    password?: SortOrder
  }

  export type accountsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    password?: SortOrder
  }

  export type accountsMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    password?: SortOrder
  }

  export type accountsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type character_inventoryCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type character_inventoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type character_inventoryMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type character_inventoryMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type character_inventorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type character_itemsCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type character_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type character_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type character_itemsMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type character_itemsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AccountsRelationFilter = {
    is?: accountsWhereInput
    isNot?: accountsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type charactersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
  }

  export type charactersAvgOrderByAggregateInput = {
    id?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
  }

  export type charactersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
  }

  export type charactersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
  }

  export type charactersSumOrderByAggregateInput = {
    id?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type charactersCreateNestedOneWithoutAccountsInput = {
    create?: XOR<charactersCreateWithoutAccountsInput, charactersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: charactersCreateOrConnectWithoutAccountsInput
    connect?: charactersWhereUniqueInput
  }

  export type charactersUncheckedCreateNestedOneWithoutAccountsInput = {
    create?: XOR<charactersCreateWithoutAccountsInput, charactersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: charactersCreateOrConnectWithoutAccountsInput
    connect?: charactersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type charactersUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<charactersCreateWithoutAccountsInput, charactersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: charactersCreateOrConnectWithoutAccountsInput
    upsert?: charactersUpsertWithoutAccountsInput
    disconnect?: charactersWhereInput | boolean
    delete?: charactersWhereInput | boolean
    connect?: charactersWhereUniqueInput
    update?: XOR<XOR<charactersUpdateToOneWithWhereWithoutAccountsInput, charactersUpdateWithoutAccountsInput>, charactersUncheckedUpdateWithoutAccountsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type charactersUncheckedUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<charactersCreateWithoutAccountsInput, charactersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: charactersCreateOrConnectWithoutAccountsInput
    upsert?: charactersUpsertWithoutAccountsInput
    disconnect?: charactersWhereInput | boolean
    delete?: charactersWhereInput | boolean
    connect?: charactersWhereUniqueInput
    update?: XOR<XOR<charactersUpdateToOneWithWhereWithoutAccountsInput, charactersUpdateWithoutAccountsInput>, charactersUncheckedUpdateWithoutAccountsInput>
  }

  export type accountsCreateNestedOneWithoutCharactersInput = {
    create?: XOR<accountsCreateWithoutCharactersInput, accountsUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: accountsCreateOrConnectWithoutCharactersInput
    connect?: accountsWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type accountsUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<accountsCreateWithoutCharactersInput, accountsUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: accountsCreateOrConnectWithoutCharactersInput
    upsert?: accountsUpsertWithoutCharactersInput
    connect?: accountsWhereUniqueInput
    update?: XOR<XOR<accountsUpdateToOneWithWhereWithoutCharactersInput, accountsUpdateWithoutCharactersInput>, accountsUncheckedUpdateWithoutCharactersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type charactersCreateWithoutAccountsInput = {
    name: string
    health?: number | null
    power?: number | null
    money?: number | null
  }

  export type charactersUncheckedCreateWithoutAccountsInput = {
    name: string
    health?: number | null
    power?: number | null
    money?: number | null
  }

  export type charactersCreateOrConnectWithoutAccountsInput = {
    where: charactersWhereUniqueInput
    create: XOR<charactersCreateWithoutAccountsInput, charactersUncheckedCreateWithoutAccountsInput>
  }

  export type charactersUpsertWithoutAccountsInput = {
    update: XOR<charactersUpdateWithoutAccountsInput, charactersUncheckedUpdateWithoutAccountsInput>
    create: XOR<charactersCreateWithoutAccountsInput, charactersUncheckedCreateWithoutAccountsInput>
    where?: charactersWhereInput
  }

  export type charactersUpdateToOneWithWhereWithoutAccountsInput = {
    where?: charactersWhereInput
    data: XOR<charactersUpdateWithoutAccountsInput, charactersUncheckedUpdateWithoutAccountsInput>
  }

  export type charactersUpdateWithoutAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type charactersUncheckedUpdateWithoutAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type accountsCreateWithoutCharactersInput = {
    accountId: string
    password: string
  }

  export type accountsUncheckedCreateWithoutCharactersInput = {
    id?: number
    accountId: string
    password: string
  }

  export type accountsCreateOrConnectWithoutCharactersInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutCharactersInput, accountsUncheckedCreateWithoutCharactersInput>
  }

  export type accountsUpsertWithoutCharactersInput = {
    update: XOR<accountsUpdateWithoutCharactersInput, accountsUncheckedUpdateWithoutCharactersInput>
    create: XOR<accountsCreateWithoutCharactersInput, accountsUncheckedCreateWithoutCharactersInput>
    where?: accountsWhereInput
  }

  export type accountsUpdateToOneWithWhereWithoutCharactersInput = {
    where?: accountsWhereInput
    data: XOR<accountsUpdateWithoutCharactersInput, accountsUncheckedUpdateWithoutCharactersInput>
  }

  export type accountsUpdateWithoutCharactersInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type accountsUncheckedUpdateWithoutCharactersInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use accountsDefaultArgs instead
     */
    export type accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = accountsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use character_inventoryDefaultArgs instead
     */
    export type character_inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = character_inventoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use character_itemsDefaultArgs instead
     */
    export type character_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = character_itemsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use charactersDefaultArgs instead
     */
    export type charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = charactersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}