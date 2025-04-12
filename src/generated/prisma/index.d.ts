
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model Forum
 * 
 */
export type Forum = $Result.DefaultSelection<Prisma.$ForumPayload>
/**
 * Model ForumTag
 * 
 */
export type ForumTag = $Result.DefaultSelection<Prisma.$ForumTagPayload>
/**
 * Model ForumComment
 * 
 */
export type ForumComment = $Result.DefaultSelection<Prisma.$ForumCommentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forum`: Exposes CRUD operations for the **Forum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forums
    * const forums = await prisma.forum.findMany()
    * ```
    */
  get forum(): Prisma.ForumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumTag`: Exposes CRUD operations for the **ForumTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumTags
    * const forumTags = await prisma.forumTag.findMany()
    * ```
    */
  get forumTag(): Prisma.ForumTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumComment`: Exposes CRUD operations for the **ForumComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumComments
    * const forumComments = await prisma.forumComment.findMany()
    * ```
    */
  get forumComment(): Prisma.ForumCommentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    ChatSession: 'ChatSession',
    ChatMessage: 'ChatMessage',
    Forum: 'Forum',
    ForumTag: 'ForumTag',
    ForumComment: 'ForumComment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "chatSession" | "chatMessage" | "forum" | "forumTag" | "forumComment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      Forum: {
        payload: Prisma.$ForumPayload<ExtArgs>
        fields: Prisma.ForumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          findFirst: {
            args: Prisma.ForumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          findMany: {
            args: Prisma.ForumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>[]
          }
          create: {
            args: Prisma.ForumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          createMany: {
            args: Prisma.ForumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>[]
          }
          delete: {
            args: Prisma.ForumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          update: {
            args: Prisma.ForumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          deleteMany: {
            args: Prisma.ForumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>[]
          }
          upsert: {
            args: Prisma.ForumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          aggregate: {
            args: Prisma.ForumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForum>
          }
          groupBy: {
            args: Prisma.ForumGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumCountArgs<ExtArgs>
            result: $Utils.Optional<ForumCountAggregateOutputType> | number
          }
        }
      }
      ForumTag: {
        payload: Prisma.$ForumTagPayload<ExtArgs>
        fields: Prisma.ForumTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumTagPayload>
          }
          findFirst: {
            args: Prisma.ForumTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumTagPayload>
          }
          findMany: {
            args: Prisma.ForumTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumTagPayload>[]
          }
          create: {
            args: Prisma.ForumTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumTagPayload>
          }
          createMany: {
            args: Prisma.ForumTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumTagPayload>[]
          }
          delete: {
            args: Prisma.ForumTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumTagPayload>
          }
          update: {
            args: Prisma.ForumTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumTagPayload>
          }
          deleteMany: {
            args: Prisma.ForumTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumTagPayload>[]
          }
          upsert: {
            args: Prisma.ForumTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumTagPayload>
          }
          aggregate: {
            args: Prisma.ForumTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumTag>
          }
          groupBy: {
            args: Prisma.ForumTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumTagCountArgs<ExtArgs>
            result: $Utils.Optional<ForumTagCountAggregateOutputType> | number
          }
        }
      }
      ForumComment: {
        payload: Prisma.$ForumCommentPayload<ExtArgs>
        fields: Prisma.ForumCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          findFirst: {
            args: Prisma.ForumCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          findMany: {
            args: Prisma.ForumCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>[]
          }
          create: {
            args: Prisma.ForumCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          createMany: {
            args: Prisma.ForumCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>[]
          }
          delete: {
            args: Prisma.ForumCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          update: {
            args: Prisma.ForumCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          deleteMany: {
            args: Prisma.ForumCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>[]
          }
          upsert: {
            args: Prisma.ForumCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          aggregate: {
            args: Prisma.ForumCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumComment>
          }
          groupBy: {
            args: Prisma.ForumCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumCommentCountArgs<ExtArgs>
            result: $Utils.Optional<ForumCommentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    chatSession?: ChatSessionOmit
    chatMessage?: ChatMessageOmit
    forum?: ForumOmit
    forumTag?: ForumTagOmit
    forumComment?: ForumCommentOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ChatSession: number
    Forum: number
    ForumComment: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatSession?: boolean | UserCountOutputTypeCountChatSessionArgs
    Forum?: boolean | UserCountOutputTypeCountForumArgs
    ForumComment?: boolean | UserCountOutputTypeCountForumCommentArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountForumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountForumCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentWhereInput
  }


  /**
   * Count Type ChatSessionCountOutputType
   */

  export type ChatSessionCountOutputType = {
    ChatMessage: number
  }

  export type ChatSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatMessage?: boolean | ChatSessionCountOutputTypeCountChatMessageArgs
  }

  // Custom InputTypes
  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSessionCountOutputType
     */
    select?: ChatSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type ForumCountOutputType
   */

  export type ForumCountOutputType = {
    ForumTag: number
    ForumComment: number
  }

  export type ForumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForumTag?: boolean | ForumCountOutputTypeCountForumTagArgs
    ForumComment?: boolean | ForumCountOutputTypeCountForumCommentArgs
  }

  // Custom InputTypes
  /**
   * ForumCountOutputType without action
   */
  export type ForumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCountOutputType
     */
    select?: ForumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumCountOutputType without action
   */
  export type ForumCountOutputTypeCountForumTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumTagWhereInput
  }

  /**
   * ForumCountOutputType without action
   */
  export type ForumCountOutputTypeCountForumCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    user_name: string | null
    user_password: string | null
    user_email: string | null
    user_role: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    user_name: string | null
    user_password: string | null
    user_email: string | null
    user_role: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    user_name: number
    user_password: number
    user_email: number
    user_role: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    user_name?: true
    user_password?: true
    user_email?: true
    user_role?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    user_name?: true
    user_password?: true
    user_email?: true
    user_role?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    user_name?: true
    user_password?: true
    user_email?: true
    user_role?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    user_name: string
    user_password: string
    user_email: string
    user_role: string
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    user_password?: boolean
    user_email?: boolean
    user_role?: boolean
    created_at?: boolean
    ChatSession?: boolean | User$ChatSessionArgs<ExtArgs>
    Forum?: boolean | User$ForumArgs<ExtArgs>
    ForumComment?: boolean | User$ForumCommentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    user_password?: boolean
    user_email?: boolean
    user_role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    user_password?: boolean
    user_email?: boolean
    user_role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    user_name?: boolean
    user_password?: boolean
    user_email?: boolean
    user_role?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_name" | "user_password" | "user_email" | "user_role" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatSession?: boolean | User$ChatSessionArgs<ExtArgs>
    Forum?: boolean | User$ForumArgs<ExtArgs>
    ForumComment?: boolean | User$ForumCommentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ChatSession: Prisma.$ChatSessionPayload<ExtArgs>[]
      Forum: Prisma.$ForumPayload<ExtArgs>[]
      ForumComment: Prisma.$ForumCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_name: string
      user_password: string
      user_email: string
      user_role: string
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChatSession<T extends User$ChatSessionArgs<ExtArgs> = {}>(args?: Subset<T, User$ChatSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Forum<T extends User$ForumArgs<ExtArgs> = {}>(args?: Subset<T, User$ForumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ForumComment<T extends User$ForumCommentArgs<ExtArgs> = {}>(args?: Subset<T, User$ForumCommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly user_name: FieldRef<"User", 'String'>
    readonly user_password: FieldRef<"User", 'String'>
    readonly user_email: FieldRef<"User", 'String'>
    readonly user_role: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ChatSession
   */
  export type User$ChatSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * User.Forum
   */
  export type User$ForumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    where?: ForumWhereInput
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    cursor?: ForumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * User.ForumComment
   */
  export type User$ForumCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    where?: ForumCommentWhereInput
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    cursor?: ForumCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _avg: ChatSessionAvgAggregateOutputType | null
    _sum: ChatSessionSumAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ChatSessionSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    monetary_appeal: string | null
    urgency: string | null
    created_at: Date | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    monetary_appeal: string | null
    urgency: string | null
    created_at: Date | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    user_id: number
    monetary_appeal: number
    urgency: number
    created_at: number
    _all: number
  }


  export type ChatSessionAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ChatSessionSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ChatSessionMinAggregateInputType = {
    id?: true
    user_id?: true
    monetary_appeal?: true
    urgency?: true
    created_at?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    user_id?: true
    monetary_appeal?: true
    urgency?: true
    created_at?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    user_id?: true
    monetary_appeal?: true
    urgency?: true
    created_at?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _avg?: ChatSessionAvgAggregateInputType
    _sum?: ChatSessionSumAggregateInputType
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: number
    user_id: number
    monetary_appeal: string | null
    urgency: string | null
    created_at: Date
    _count: ChatSessionCountAggregateOutputType | null
    _avg: ChatSessionAvgAggregateOutputType | null
    _sum: ChatSessionSumAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    monetary_appeal?: boolean
    urgency?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    ChatMessage?: boolean | ChatSession$ChatMessageArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    monetary_appeal?: boolean
    urgency?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    monetary_appeal?: boolean
    urgency?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    user_id?: boolean
    monetary_appeal?: boolean
    urgency?: boolean
    created_at?: boolean
  }

  export type ChatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "monetary_appeal" | "urgency" | "created_at", ExtArgs["result"]["chatSession"]>
  export type ChatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    ChatMessage?: boolean | ChatSession$ChatMessageArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      ChatMessage: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      monetary_appeal: string | null
      urgency: string | null
      created_at: Date
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions and returns the data updated in the database.
     * @param {ChatSessionUpdateManyAndReturnArgs} args - Arguments to update many ChatSessions.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
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
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ChatMessage<T extends ChatSession$ChatMessageArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$ChatMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatSession model
   */
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'Int'>
    readonly user_id: FieldRef<"ChatSession", 'Int'>
    readonly monetary_appeal: FieldRef<"ChatSession", 'String'>
    readonly urgency: FieldRef<"ChatSession", 'String'>
    readonly created_at: FieldRef<"ChatSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession updateManyAndReturn
   */
  export type ChatSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to delete.
     */
    limit?: number
  }

  /**
   * ChatSession.ChatMessage
   */
  export type ChatSession$ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageAvgAggregateOutputType = {
    id: number | null
    session_id: number | null
  }

  export type ChatMessageSumAggregateOutputType = {
    id: number | null
    session_id: number | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: number | null
    session_id: number | null
    text: string | null
    created_at: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: number | null
    session_id: number | null
    text: string | null
    created_at: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    session_id: number
    text: number
    created_at: number
    _all: number
  }


  export type ChatMessageAvgAggregateInputType = {
    id?: true
    session_id?: true
  }

  export type ChatMessageSumAggregateInputType = {
    id?: true
    session_id?: true
  }

  export type ChatMessageMinAggregateInputType = {
    id?: true
    session_id?: true
    text?: true
    created_at?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    session_id?: true
    text?: true
    created_at?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    session_id?: true
    text?: true
    created_at?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _avg?: ChatMessageAvgAggregateInputType
    _sum?: ChatMessageSumAggregateInputType
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: number
    session_id: number
    text: string
    created_at: Date
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    text?: boolean
    created_at?: boolean
    ChatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    text?: boolean
    created_at?: boolean
    ChatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    text?: boolean
    created_at?: boolean
    ChatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    session_id?: boolean
    text?: boolean
    created_at?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session_id" | "text" | "created_at", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      ChatSession: Prisma.$ChatSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      session_id: number
      text: string
      created_at: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChatSession<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'Int'>
    readonly session_id: FieldRef<"ChatMessage", 'Int'>
    readonly text: FieldRef<"ChatMessage", 'String'>
    readonly created_at: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model Forum
   */

  export type AggregateForum = {
    _count: ForumCountAggregateOutputType | null
    _avg: ForumAvgAggregateOutputType | null
    _sum: ForumSumAggregateOutputType | null
    _min: ForumMinAggregateOutputType | null
    _max: ForumMaxAggregateOutputType | null
  }

  export type ForumAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ForumSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ForumMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    description: string | null
    image: string | null
    created_at: Date | null
  }

  export type ForumMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    description: string | null
    image: string | null
    created_at: Date | null
  }

  export type ForumCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    description: number
    image: number
    created_at: number
    _all: number
  }


  export type ForumAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ForumSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ForumMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    image?: true
    created_at?: true
  }

  export type ForumMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    image?: true
    created_at?: true
  }

  export type ForumCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    image?: true
    created_at?: true
    _all?: true
  }

  export type ForumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forum to aggregate.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forums
    **/
    _count?: true | ForumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumMaxAggregateInputType
  }

  export type GetForumAggregateType<T extends ForumAggregateArgs> = {
        [P in keyof T & keyof AggregateForum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForum[P]>
      : GetScalarType<T[P], AggregateForum[P]>
  }




  export type ForumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumWhereInput
    orderBy?: ForumOrderByWithAggregationInput | ForumOrderByWithAggregationInput[]
    by: ForumScalarFieldEnum[] | ForumScalarFieldEnum
    having?: ForumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumCountAggregateInputType | true
    _avg?: ForumAvgAggregateInputType
    _sum?: ForumSumAggregateInputType
    _min?: ForumMinAggregateInputType
    _max?: ForumMaxAggregateInputType
  }

  export type ForumGroupByOutputType = {
    id: number
    user_id: number
    title: string
    description: string
    image: string | null
    created_at: Date
    _count: ForumCountAggregateOutputType | null
    _avg: ForumAvgAggregateOutputType | null
    _sum: ForumSumAggregateOutputType | null
    _min: ForumMinAggregateOutputType | null
    _max: ForumMaxAggregateOutputType | null
  }

  type GetForumGroupByPayload<T extends ForumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumGroupByOutputType[P]>
            : GetScalarType<T[P], ForumGroupByOutputType[P]>
        }
      >
    >


  export type ForumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    ForumTag?: boolean | Forum$ForumTagArgs<ExtArgs>
    ForumComment?: boolean | Forum$ForumCommentArgs<ExtArgs>
    _count?: boolean | ForumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forum"]>

  export type ForumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forum"]>

  export type ForumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forum"]>

  export type ForumSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    created_at?: boolean
  }

  export type ForumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "description" | "image" | "created_at", ExtArgs["result"]["forum"]>
  export type ForumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    ForumTag?: boolean | Forum$ForumTagArgs<ExtArgs>
    ForumComment?: boolean | Forum$ForumCommentArgs<ExtArgs>
    _count?: boolean | ForumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ForumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ForumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Forum"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      ForumTag: Prisma.$ForumTagPayload<ExtArgs>[]
      ForumComment: Prisma.$ForumCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      title: string
      description: string
      image: string | null
      created_at: Date
    }, ExtArgs["result"]["forum"]>
    composites: {}
  }

  type ForumGetPayload<S extends boolean | null | undefined | ForumDefaultArgs> = $Result.GetResult<Prisma.$ForumPayload, S>

  type ForumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumCountAggregateInputType | true
    }

  export interface ForumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Forum'], meta: { name: 'Forum' } }
    /**
     * Find zero or one Forum that matches the filter.
     * @param {ForumFindUniqueArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumFindUniqueArgs>(args: SelectSubset<T, ForumFindUniqueArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Forum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumFindUniqueOrThrowArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumFindFirstArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumFindFirstArgs>(args?: SelectSubset<T, ForumFindFirstArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumFindFirstOrThrowArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forums
     * const forums = await prisma.forum.findMany()
     * 
     * // Get first 10 Forums
     * const forums = await prisma.forum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumWithIdOnly = await prisma.forum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumFindManyArgs>(args?: SelectSubset<T, ForumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Forum.
     * @param {ForumCreateArgs} args - Arguments to create a Forum.
     * @example
     * // Create one Forum
     * const Forum = await prisma.forum.create({
     *   data: {
     *     // ... data to create a Forum
     *   }
     * })
     * 
     */
    create<T extends ForumCreateArgs>(args: SelectSubset<T, ForumCreateArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forums.
     * @param {ForumCreateManyArgs} args - Arguments to create many Forums.
     * @example
     * // Create many Forums
     * const forum = await prisma.forum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumCreateManyArgs>(args?: SelectSubset<T, ForumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forums and returns the data saved in the database.
     * @param {ForumCreateManyAndReturnArgs} args - Arguments to create many Forums.
     * @example
     * // Create many Forums
     * const forum = await prisma.forum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forums and only return the `id`
     * const forumWithIdOnly = await prisma.forum.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Forum.
     * @param {ForumDeleteArgs} args - Arguments to delete one Forum.
     * @example
     * // Delete one Forum
     * const Forum = await prisma.forum.delete({
     *   where: {
     *     // ... filter to delete one Forum
     *   }
     * })
     * 
     */
    delete<T extends ForumDeleteArgs>(args: SelectSubset<T, ForumDeleteArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Forum.
     * @param {ForumUpdateArgs} args - Arguments to update one Forum.
     * @example
     * // Update one Forum
     * const forum = await prisma.forum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumUpdateArgs>(args: SelectSubset<T, ForumUpdateArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forums.
     * @param {ForumDeleteManyArgs} args - Arguments to filter Forums to delete.
     * @example
     * // Delete a few Forums
     * const { count } = await prisma.forum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumDeleteManyArgs>(args?: SelectSubset<T, ForumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forums
     * const forum = await prisma.forum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumUpdateManyArgs>(args: SelectSubset<T, ForumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forums and returns the data updated in the database.
     * @param {ForumUpdateManyAndReturnArgs} args - Arguments to update many Forums.
     * @example
     * // Update many Forums
     * const forum = await prisma.forum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forums and only return the `id`
     * const forumWithIdOnly = await prisma.forum.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Forum.
     * @param {ForumUpsertArgs} args - Arguments to update or create a Forum.
     * @example
     * // Update or create a Forum
     * const forum = await prisma.forum.upsert({
     *   create: {
     *     // ... data to create a Forum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Forum we want to update
     *   }
     * })
     */
    upsert<T extends ForumUpsertArgs>(args: SelectSubset<T, ForumUpsertArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCountArgs} args - Arguments to filter Forums to count.
     * @example
     * // Count the number of Forums
     * const count = await prisma.forum.count({
     *   where: {
     *     // ... the filter for the Forums we want to count
     *   }
     * })
    **/
    count<T extends ForumCountArgs>(
      args?: Subset<T, ForumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Forum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumAggregateArgs>(args: Subset<T, ForumAggregateArgs>): Prisma.PrismaPromise<GetForumAggregateType<T>>

    /**
     * Group by Forum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumGroupByArgs} args - Group by arguments.
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
      T extends ForumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumGroupByArgs['orderBy'] }
        : { orderBy?: ForumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Forum model
   */
  readonly fields: ForumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Forum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ForumTag<T extends Forum$ForumTagArgs<ExtArgs> = {}>(args?: Subset<T, Forum$ForumTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ForumComment<T extends Forum$ForumCommentArgs<ExtArgs> = {}>(args?: Subset<T, Forum$ForumCommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Forum model
   */
  interface ForumFieldRefs {
    readonly id: FieldRef<"Forum", 'Int'>
    readonly user_id: FieldRef<"Forum", 'Int'>
    readonly title: FieldRef<"Forum", 'String'>
    readonly description: FieldRef<"Forum", 'String'>
    readonly image: FieldRef<"Forum", 'String'>
    readonly created_at: FieldRef<"Forum", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Forum findUnique
   */
  export type ForumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum findUniqueOrThrow
   */
  export type ForumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum findFirst
   */
  export type ForumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forums.
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forums.
     */
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Forum findFirstOrThrow
   */
  export type ForumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forums.
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forums.
     */
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Forum findMany
   */
  export type ForumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forums to fetch.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forums.
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Forum create
   */
  export type ForumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * The data needed to create a Forum.
     */
    data: XOR<ForumCreateInput, ForumUncheckedCreateInput>
  }

  /**
   * Forum createMany
   */
  export type ForumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forums.
     */
    data: ForumCreateManyInput | ForumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Forum createManyAndReturn
   */
  export type ForumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * The data used to create many Forums.
     */
    data: ForumCreateManyInput | ForumCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Forum update
   */
  export type ForumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * The data needed to update a Forum.
     */
    data: XOR<ForumUpdateInput, ForumUncheckedUpdateInput>
    /**
     * Choose, which Forum to update.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum updateMany
   */
  export type ForumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forums.
     */
    data: XOR<ForumUpdateManyMutationInput, ForumUncheckedUpdateManyInput>
    /**
     * Filter which Forums to update
     */
    where?: ForumWhereInput
    /**
     * Limit how many Forums to update.
     */
    limit?: number
  }

  /**
   * Forum updateManyAndReturn
   */
  export type ForumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * The data used to update Forums.
     */
    data: XOR<ForumUpdateManyMutationInput, ForumUncheckedUpdateManyInput>
    /**
     * Filter which Forums to update
     */
    where?: ForumWhereInput
    /**
     * Limit how many Forums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Forum upsert
   */
  export type ForumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * The filter to search for the Forum to update in case it exists.
     */
    where: ForumWhereUniqueInput
    /**
     * In case the Forum found by the `where` argument doesn't exist, create a new Forum with this data.
     */
    create: XOR<ForumCreateInput, ForumUncheckedCreateInput>
    /**
     * In case the Forum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumUpdateInput, ForumUncheckedUpdateInput>
  }

  /**
   * Forum delete
   */
  export type ForumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter which Forum to delete.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum deleteMany
   */
  export type ForumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forums to delete
     */
    where?: ForumWhereInput
    /**
     * Limit how many Forums to delete.
     */
    limit?: number
  }

  /**
   * Forum.ForumTag
   */
  export type Forum$ForumTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumTag
     */
    select?: ForumTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumTag
     */
    omit?: ForumTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumTagInclude<ExtArgs> | null
    where?: ForumTagWhereInput
    orderBy?: ForumTagOrderByWithRelationInput | ForumTagOrderByWithRelationInput[]
    cursor?: ForumTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumTagScalarFieldEnum | ForumTagScalarFieldEnum[]
  }

  /**
   * Forum.ForumComment
   */
  export type Forum$ForumCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    where?: ForumCommentWhereInput
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    cursor?: ForumCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * Forum without action
   */
  export type ForumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
  }


  /**
   * Model ForumTag
   */

  export type AggregateForumTag = {
    _count: ForumTagCountAggregateOutputType | null
    _avg: ForumTagAvgAggregateOutputType | null
    _sum: ForumTagSumAggregateOutputType | null
    _min: ForumTagMinAggregateOutputType | null
    _max: ForumTagMaxAggregateOutputType | null
  }

  export type ForumTagAvgAggregateOutputType = {
    id: number | null
    forum_id: number | null
    tag_id: number | null
  }

  export type ForumTagSumAggregateOutputType = {
    id: number | null
    forum_id: number | null
    tag_id: number | null
  }

  export type ForumTagMinAggregateOutputType = {
    id: number | null
    forum_id: number | null
    tag_id: number | null
  }

  export type ForumTagMaxAggregateOutputType = {
    id: number | null
    forum_id: number | null
    tag_id: number | null
  }

  export type ForumTagCountAggregateOutputType = {
    id: number
    forum_id: number
    tag_id: number
    _all: number
  }


  export type ForumTagAvgAggregateInputType = {
    id?: true
    forum_id?: true
    tag_id?: true
  }

  export type ForumTagSumAggregateInputType = {
    id?: true
    forum_id?: true
    tag_id?: true
  }

  export type ForumTagMinAggregateInputType = {
    id?: true
    forum_id?: true
    tag_id?: true
  }

  export type ForumTagMaxAggregateInputType = {
    id?: true
    forum_id?: true
    tag_id?: true
  }

  export type ForumTagCountAggregateInputType = {
    id?: true
    forum_id?: true
    tag_id?: true
    _all?: true
  }

  export type ForumTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumTag to aggregate.
     */
    where?: ForumTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumTags to fetch.
     */
    orderBy?: ForumTagOrderByWithRelationInput | ForumTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumTags
    **/
    _count?: true | ForumTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumTagMaxAggregateInputType
  }

  export type GetForumTagAggregateType<T extends ForumTagAggregateArgs> = {
        [P in keyof T & keyof AggregateForumTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumTag[P]>
      : GetScalarType<T[P], AggregateForumTag[P]>
  }




  export type ForumTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumTagWhereInput
    orderBy?: ForumTagOrderByWithAggregationInput | ForumTagOrderByWithAggregationInput[]
    by: ForumTagScalarFieldEnum[] | ForumTagScalarFieldEnum
    having?: ForumTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumTagCountAggregateInputType | true
    _avg?: ForumTagAvgAggregateInputType
    _sum?: ForumTagSumAggregateInputType
    _min?: ForumTagMinAggregateInputType
    _max?: ForumTagMaxAggregateInputType
  }

  export type ForumTagGroupByOutputType = {
    id: number
    forum_id: number
    tag_id: number
    _count: ForumTagCountAggregateOutputType | null
    _avg: ForumTagAvgAggregateOutputType | null
    _sum: ForumTagSumAggregateOutputType | null
    _min: ForumTagMinAggregateOutputType | null
    _max: ForumTagMaxAggregateOutputType | null
  }

  type GetForumTagGroupByPayload<T extends ForumTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumTagGroupByOutputType[P]>
            : GetScalarType<T[P], ForumTagGroupByOutputType[P]>
        }
      >
    >


  export type ForumTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    forum_id?: boolean
    tag_id?: boolean
    Forum?: boolean | ForumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumTag"]>

  export type ForumTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    forum_id?: boolean
    tag_id?: boolean
    Forum?: boolean | ForumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumTag"]>

  export type ForumTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    forum_id?: boolean
    tag_id?: boolean
    Forum?: boolean | ForumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumTag"]>

  export type ForumTagSelectScalar = {
    id?: boolean
    forum_id?: boolean
    tag_id?: boolean
  }

  export type ForumTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "forum_id" | "tag_id", ExtArgs["result"]["forumTag"]>
  export type ForumTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Forum?: boolean | ForumDefaultArgs<ExtArgs>
  }
  export type ForumTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Forum?: boolean | ForumDefaultArgs<ExtArgs>
  }
  export type ForumTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Forum?: boolean | ForumDefaultArgs<ExtArgs>
  }

  export type $ForumTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumTag"
    objects: {
      Forum: Prisma.$ForumPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      forum_id: number
      tag_id: number
    }, ExtArgs["result"]["forumTag"]>
    composites: {}
  }

  type ForumTagGetPayload<S extends boolean | null | undefined | ForumTagDefaultArgs> = $Result.GetResult<Prisma.$ForumTagPayload, S>

  type ForumTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumTagCountAggregateInputType | true
    }

  export interface ForumTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumTag'], meta: { name: 'ForumTag' } }
    /**
     * Find zero or one ForumTag that matches the filter.
     * @param {ForumTagFindUniqueArgs} args - Arguments to find a ForumTag
     * @example
     * // Get one ForumTag
     * const forumTag = await prisma.forumTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumTagFindUniqueArgs>(args: SelectSubset<T, ForumTagFindUniqueArgs<ExtArgs>>): Prisma__ForumTagClient<$Result.GetResult<Prisma.$ForumTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumTagFindUniqueOrThrowArgs} args - Arguments to find a ForumTag
     * @example
     * // Get one ForumTag
     * const forumTag = await prisma.forumTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumTagClient<$Result.GetResult<Prisma.$ForumTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumTagFindFirstArgs} args - Arguments to find a ForumTag
     * @example
     * // Get one ForumTag
     * const forumTag = await prisma.forumTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumTagFindFirstArgs>(args?: SelectSubset<T, ForumTagFindFirstArgs<ExtArgs>>): Prisma__ForumTagClient<$Result.GetResult<Prisma.$ForumTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumTagFindFirstOrThrowArgs} args - Arguments to find a ForumTag
     * @example
     * // Get one ForumTag
     * const forumTag = await prisma.forumTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumTagClient<$Result.GetResult<Prisma.$ForumTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumTags
     * const forumTags = await prisma.forumTag.findMany()
     * 
     * // Get first 10 ForumTags
     * const forumTags = await prisma.forumTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumTagWithIdOnly = await prisma.forumTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumTagFindManyArgs>(args?: SelectSubset<T, ForumTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumTag.
     * @param {ForumTagCreateArgs} args - Arguments to create a ForumTag.
     * @example
     * // Create one ForumTag
     * const ForumTag = await prisma.forumTag.create({
     *   data: {
     *     // ... data to create a ForumTag
     *   }
     * })
     * 
     */
    create<T extends ForumTagCreateArgs>(args: SelectSubset<T, ForumTagCreateArgs<ExtArgs>>): Prisma__ForumTagClient<$Result.GetResult<Prisma.$ForumTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumTags.
     * @param {ForumTagCreateManyArgs} args - Arguments to create many ForumTags.
     * @example
     * // Create many ForumTags
     * const forumTag = await prisma.forumTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumTagCreateManyArgs>(args?: SelectSubset<T, ForumTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumTags and returns the data saved in the database.
     * @param {ForumTagCreateManyAndReturnArgs} args - Arguments to create many ForumTags.
     * @example
     * // Create many ForumTags
     * const forumTag = await prisma.forumTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumTags and only return the `id`
     * const forumTagWithIdOnly = await prisma.forumTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumTag.
     * @param {ForumTagDeleteArgs} args - Arguments to delete one ForumTag.
     * @example
     * // Delete one ForumTag
     * const ForumTag = await prisma.forumTag.delete({
     *   where: {
     *     // ... filter to delete one ForumTag
     *   }
     * })
     * 
     */
    delete<T extends ForumTagDeleteArgs>(args: SelectSubset<T, ForumTagDeleteArgs<ExtArgs>>): Prisma__ForumTagClient<$Result.GetResult<Prisma.$ForumTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumTag.
     * @param {ForumTagUpdateArgs} args - Arguments to update one ForumTag.
     * @example
     * // Update one ForumTag
     * const forumTag = await prisma.forumTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumTagUpdateArgs>(args: SelectSubset<T, ForumTagUpdateArgs<ExtArgs>>): Prisma__ForumTagClient<$Result.GetResult<Prisma.$ForumTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumTags.
     * @param {ForumTagDeleteManyArgs} args - Arguments to filter ForumTags to delete.
     * @example
     * // Delete a few ForumTags
     * const { count } = await prisma.forumTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumTagDeleteManyArgs>(args?: SelectSubset<T, ForumTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumTags
     * const forumTag = await prisma.forumTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumTagUpdateManyArgs>(args: SelectSubset<T, ForumTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumTags and returns the data updated in the database.
     * @param {ForumTagUpdateManyAndReturnArgs} args - Arguments to update many ForumTags.
     * @example
     * // Update many ForumTags
     * const forumTag = await prisma.forumTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumTags and only return the `id`
     * const forumTagWithIdOnly = await prisma.forumTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumTag.
     * @param {ForumTagUpsertArgs} args - Arguments to update or create a ForumTag.
     * @example
     * // Update or create a ForumTag
     * const forumTag = await prisma.forumTag.upsert({
     *   create: {
     *     // ... data to create a ForumTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumTag we want to update
     *   }
     * })
     */
    upsert<T extends ForumTagUpsertArgs>(args: SelectSubset<T, ForumTagUpsertArgs<ExtArgs>>): Prisma__ForumTagClient<$Result.GetResult<Prisma.$ForumTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumTagCountArgs} args - Arguments to filter ForumTags to count.
     * @example
     * // Count the number of ForumTags
     * const count = await prisma.forumTag.count({
     *   where: {
     *     // ... the filter for the ForumTags we want to count
     *   }
     * })
    **/
    count<T extends ForumTagCountArgs>(
      args?: Subset<T, ForumTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumTagAggregateArgs>(args: Subset<T, ForumTagAggregateArgs>): Prisma.PrismaPromise<GetForumTagAggregateType<T>>

    /**
     * Group by ForumTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumTagGroupByArgs} args - Group by arguments.
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
      T extends ForumTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumTagGroupByArgs['orderBy'] }
        : { orderBy?: ForumTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumTag model
   */
  readonly fields: ForumTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Forum<T extends ForumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForumDefaultArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForumTag model
   */
  interface ForumTagFieldRefs {
    readonly id: FieldRef<"ForumTag", 'Int'>
    readonly forum_id: FieldRef<"ForumTag", 'Int'>
    readonly tag_id: FieldRef<"ForumTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ForumTag findUnique
   */
  export type ForumTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumTag
     */
    select?: ForumTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumTag
     */
    omit?: ForumTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumTagInclude<ExtArgs> | null
    /**
     * Filter, which ForumTag to fetch.
     */
    where: ForumTagWhereUniqueInput
  }

  /**
   * ForumTag findUniqueOrThrow
   */
  export type ForumTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumTag
     */
    select?: ForumTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumTag
     */
    omit?: ForumTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumTagInclude<ExtArgs> | null
    /**
     * Filter, which ForumTag to fetch.
     */
    where: ForumTagWhereUniqueInput
  }

  /**
   * ForumTag findFirst
   */
  export type ForumTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumTag
     */
    select?: ForumTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumTag
     */
    omit?: ForumTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumTagInclude<ExtArgs> | null
    /**
     * Filter, which ForumTag to fetch.
     */
    where?: ForumTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumTags to fetch.
     */
    orderBy?: ForumTagOrderByWithRelationInput | ForumTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumTags.
     */
    cursor?: ForumTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumTags.
     */
    distinct?: ForumTagScalarFieldEnum | ForumTagScalarFieldEnum[]
  }

  /**
   * ForumTag findFirstOrThrow
   */
  export type ForumTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumTag
     */
    select?: ForumTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumTag
     */
    omit?: ForumTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumTagInclude<ExtArgs> | null
    /**
     * Filter, which ForumTag to fetch.
     */
    where?: ForumTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumTags to fetch.
     */
    orderBy?: ForumTagOrderByWithRelationInput | ForumTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumTags.
     */
    cursor?: ForumTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumTags.
     */
    distinct?: ForumTagScalarFieldEnum | ForumTagScalarFieldEnum[]
  }

  /**
   * ForumTag findMany
   */
  export type ForumTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumTag
     */
    select?: ForumTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumTag
     */
    omit?: ForumTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumTagInclude<ExtArgs> | null
    /**
     * Filter, which ForumTags to fetch.
     */
    where?: ForumTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumTags to fetch.
     */
    orderBy?: ForumTagOrderByWithRelationInput | ForumTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumTags.
     */
    cursor?: ForumTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumTags.
     */
    skip?: number
    distinct?: ForumTagScalarFieldEnum | ForumTagScalarFieldEnum[]
  }

  /**
   * ForumTag create
   */
  export type ForumTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumTag
     */
    select?: ForumTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumTag
     */
    omit?: ForumTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumTag.
     */
    data: XOR<ForumTagCreateInput, ForumTagUncheckedCreateInput>
  }

  /**
   * ForumTag createMany
   */
  export type ForumTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumTags.
     */
    data: ForumTagCreateManyInput | ForumTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumTag createManyAndReturn
   */
  export type ForumTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumTag
     */
    select?: ForumTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumTag
     */
    omit?: ForumTagOmit<ExtArgs> | null
    /**
     * The data used to create many ForumTags.
     */
    data: ForumTagCreateManyInput | ForumTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumTag update
   */
  export type ForumTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumTag
     */
    select?: ForumTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumTag
     */
    omit?: ForumTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumTag.
     */
    data: XOR<ForumTagUpdateInput, ForumTagUncheckedUpdateInput>
    /**
     * Choose, which ForumTag to update.
     */
    where: ForumTagWhereUniqueInput
  }

  /**
   * ForumTag updateMany
   */
  export type ForumTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumTags.
     */
    data: XOR<ForumTagUpdateManyMutationInput, ForumTagUncheckedUpdateManyInput>
    /**
     * Filter which ForumTags to update
     */
    where?: ForumTagWhereInput
    /**
     * Limit how many ForumTags to update.
     */
    limit?: number
  }

  /**
   * ForumTag updateManyAndReturn
   */
  export type ForumTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumTag
     */
    select?: ForumTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumTag
     */
    omit?: ForumTagOmit<ExtArgs> | null
    /**
     * The data used to update ForumTags.
     */
    data: XOR<ForumTagUpdateManyMutationInput, ForumTagUncheckedUpdateManyInput>
    /**
     * Filter which ForumTags to update
     */
    where?: ForumTagWhereInput
    /**
     * Limit how many ForumTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumTag upsert
   */
  export type ForumTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumTag
     */
    select?: ForumTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumTag
     */
    omit?: ForumTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumTag to update in case it exists.
     */
    where: ForumTagWhereUniqueInput
    /**
     * In case the ForumTag found by the `where` argument doesn't exist, create a new ForumTag with this data.
     */
    create: XOR<ForumTagCreateInput, ForumTagUncheckedCreateInput>
    /**
     * In case the ForumTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumTagUpdateInput, ForumTagUncheckedUpdateInput>
  }

  /**
   * ForumTag delete
   */
  export type ForumTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumTag
     */
    select?: ForumTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumTag
     */
    omit?: ForumTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumTagInclude<ExtArgs> | null
    /**
     * Filter which ForumTag to delete.
     */
    where: ForumTagWhereUniqueInput
  }

  /**
   * ForumTag deleteMany
   */
  export type ForumTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumTags to delete
     */
    where?: ForumTagWhereInput
    /**
     * Limit how many ForumTags to delete.
     */
    limit?: number
  }

  /**
   * ForumTag without action
   */
  export type ForumTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumTag
     */
    select?: ForumTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumTag
     */
    omit?: ForumTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumTagInclude<ExtArgs> | null
  }


  /**
   * Model ForumComment
   */

  export type AggregateForumComment = {
    _count: ForumCommentCountAggregateOutputType | null
    _avg: ForumCommentAvgAggregateOutputType | null
    _sum: ForumCommentSumAggregateOutputType | null
    _min: ForumCommentMinAggregateOutputType | null
    _max: ForumCommentMaxAggregateOutputType | null
  }

  export type ForumCommentAvgAggregateOutputType = {
    id: number | null
    forum_id: number | null
    user_id: number | null
    upvote: number | null
    downvote: number | null
  }

  export type ForumCommentSumAggregateOutputType = {
    id: number | null
    forum_id: number | null
    user_id: number | null
    upvote: number | null
    downvote: number | null
  }

  export type ForumCommentMinAggregateOutputType = {
    id: number | null
    forum_id: number | null
    user_id: number | null
    text: string | null
    upvote: number | null
    downvote: number | null
    created_at: Date | null
  }

  export type ForumCommentMaxAggregateOutputType = {
    id: number | null
    forum_id: number | null
    user_id: number | null
    text: string | null
    upvote: number | null
    downvote: number | null
    created_at: Date | null
  }

  export type ForumCommentCountAggregateOutputType = {
    id: number
    forum_id: number
    user_id: number
    text: number
    upvote: number
    downvote: number
    created_at: number
    _all: number
  }


  export type ForumCommentAvgAggregateInputType = {
    id?: true
    forum_id?: true
    user_id?: true
    upvote?: true
    downvote?: true
  }

  export type ForumCommentSumAggregateInputType = {
    id?: true
    forum_id?: true
    user_id?: true
    upvote?: true
    downvote?: true
  }

  export type ForumCommentMinAggregateInputType = {
    id?: true
    forum_id?: true
    user_id?: true
    text?: true
    upvote?: true
    downvote?: true
    created_at?: true
  }

  export type ForumCommentMaxAggregateInputType = {
    id?: true
    forum_id?: true
    user_id?: true
    text?: true
    upvote?: true
    downvote?: true
    created_at?: true
  }

  export type ForumCommentCountAggregateInputType = {
    id?: true
    forum_id?: true
    user_id?: true
    text?: true
    upvote?: true
    downvote?: true
    created_at?: true
    _all?: true
  }

  export type ForumCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumComment to aggregate.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumComments
    **/
    _count?: true | ForumCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumCommentMaxAggregateInputType
  }

  export type GetForumCommentAggregateType<T extends ForumCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateForumComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumComment[P]>
      : GetScalarType<T[P], AggregateForumComment[P]>
  }




  export type ForumCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentWhereInput
    orderBy?: ForumCommentOrderByWithAggregationInput | ForumCommentOrderByWithAggregationInput[]
    by: ForumCommentScalarFieldEnum[] | ForumCommentScalarFieldEnum
    having?: ForumCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumCommentCountAggregateInputType | true
    _avg?: ForumCommentAvgAggregateInputType
    _sum?: ForumCommentSumAggregateInputType
    _min?: ForumCommentMinAggregateInputType
    _max?: ForumCommentMaxAggregateInputType
  }

  export type ForumCommentGroupByOutputType = {
    id: number
    forum_id: number
    user_id: number
    text: string
    upvote: number
    downvote: number
    created_at: Date
    _count: ForumCommentCountAggregateOutputType | null
    _avg: ForumCommentAvgAggregateOutputType | null
    _sum: ForumCommentSumAggregateOutputType | null
    _min: ForumCommentMinAggregateOutputType | null
    _max: ForumCommentMaxAggregateOutputType | null
  }

  type GetForumCommentGroupByPayload<T extends ForumCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumCommentGroupByOutputType[P]>
            : GetScalarType<T[P], ForumCommentGroupByOutputType[P]>
        }
      >
    >


  export type ForumCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    forum_id?: boolean
    user_id?: boolean
    text?: boolean
    upvote?: boolean
    downvote?: boolean
    created_at?: boolean
    Forum?: boolean | ForumDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumComment"]>

  export type ForumCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    forum_id?: boolean
    user_id?: boolean
    text?: boolean
    upvote?: boolean
    downvote?: boolean
    created_at?: boolean
    Forum?: boolean | ForumDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumComment"]>

  export type ForumCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    forum_id?: boolean
    user_id?: boolean
    text?: boolean
    upvote?: boolean
    downvote?: boolean
    created_at?: boolean
    Forum?: boolean | ForumDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumComment"]>

  export type ForumCommentSelectScalar = {
    id?: boolean
    forum_id?: boolean
    user_id?: boolean
    text?: boolean
    upvote?: boolean
    downvote?: boolean
    created_at?: boolean
  }

  export type ForumCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "forum_id" | "user_id" | "text" | "upvote" | "downvote" | "created_at", ExtArgs["result"]["forumComment"]>
  export type ForumCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Forum?: boolean | ForumDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ForumCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Forum?: boolean | ForumDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ForumCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Forum?: boolean | ForumDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ForumCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumComment"
    objects: {
      Forum: Prisma.$ForumPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      forum_id: number
      user_id: number
      text: string
      upvote: number
      downvote: number
      created_at: Date
    }, ExtArgs["result"]["forumComment"]>
    composites: {}
  }

  type ForumCommentGetPayload<S extends boolean | null | undefined | ForumCommentDefaultArgs> = $Result.GetResult<Prisma.$ForumCommentPayload, S>

  type ForumCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumCommentCountAggregateInputType | true
    }

  export interface ForumCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumComment'], meta: { name: 'ForumComment' } }
    /**
     * Find zero or one ForumComment that matches the filter.
     * @param {ForumCommentFindUniqueArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumCommentFindUniqueArgs>(args: SelectSubset<T, ForumCommentFindUniqueArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumCommentFindUniqueOrThrowArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentFindFirstArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumCommentFindFirstArgs>(args?: SelectSubset<T, ForumCommentFindFirstArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentFindFirstOrThrowArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumComments
     * const forumComments = await prisma.forumComment.findMany()
     * 
     * // Get first 10 ForumComments
     * const forumComments = await prisma.forumComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumCommentWithIdOnly = await prisma.forumComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumCommentFindManyArgs>(args?: SelectSubset<T, ForumCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumComment.
     * @param {ForumCommentCreateArgs} args - Arguments to create a ForumComment.
     * @example
     * // Create one ForumComment
     * const ForumComment = await prisma.forumComment.create({
     *   data: {
     *     // ... data to create a ForumComment
     *   }
     * })
     * 
     */
    create<T extends ForumCommentCreateArgs>(args: SelectSubset<T, ForumCommentCreateArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumComments.
     * @param {ForumCommentCreateManyArgs} args - Arguments to create many ForumComments.
     * @example
     * // Create many ForumComments
     * const forumComment = await prisma.forumComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumCommentCreateManyArgs>(args?: SelectSubset<T, ForumCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumComments and returns the data saved in the database.
     * @param {ForumCommentCreateManyAndReturnArgs} args - Arguments to create many ForumComments.
     * @example
     * // Create many ForumComments
     * const forumComment = await prisma.forumComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumComments and only return the `id`
     * const forumCommentWithIdOnly = await prisma.forumComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumComment.
     * @param {ForumCommentDeleteArgs} args - Arguments to delete one ForumComment.
     * @example
     * // Delete one ForumComment
     * const ForumComment = await prisma.forumComment.delete({
     *   where: {
     *     // ... filter to delete one ForumComment
     *   }
     * })
     * 
     */
    delete<T extends ForumCommentDeleteArgs>(args: SelectSubset<T, ForumCommentDeleteArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumComment.
     * @param {ForumCommentUpdateArgs} args - Arguments to update one ForumComment.
     * @example
     * // Update one ForumComment
     * const forumComment = await prisma.forumComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumCommentUpdateArgs>(args: SelectSubset<T, ForumCommentUpdateArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumComments.
     * @param {ForumCommentDeleteManyArgs} args - Arguments to filter ForumComments to delete.
     * @example
     * // Delete a few ForumComments
     * const { count } = await prisma.forumComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumCommentDeleteManyArgs>(args?: SelectSubset<T, ForumCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumComments
     * const forumComment = await prisma.forumComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumCommentUpdateManyArgs>(args: SelectSubset<T, ForumCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumComments and returns the data updated in the database.
     * @param {ForumCommentUpdateManyAndReturnArgs} args - Arguments to update many ForumComments.
     * @example
     * // Update many ForumComments
     * const forumComment = await prisma.forumComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumComments and only return the `id`
     * const forumCommentWithIdOnly = await prisma.forumComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumComment.
     * @param {ForumCommentUpsertArgs} args - Arguments to update or create a ForumComment.
     * @example
     * // Update or create a ForumComment
     * const forumComment = await prisma.forumComment.upsert({
     *   create: {
     *     // ... data to create a ForumComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumComment we want to update
     *   }
     * })
     */
    upsert<T extends ForumCommentUpsertArgs>(args: SelectSubset<T, ForumCommentUpsertArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentCountArgs} args - Arguments to filter ForumComments to count.
     * @example
     * // Count the number of ForumComments
     * const count = await prisma.forumComment.count({
     *   where: {
     *     // ... the filter for the ForumComments we want to count
     *   }
     * })
    **/
    count<T extends ForumCommentCountArgs>(
      args?: Subset<T, ForumCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumCommentAggregateArgs>(args: Subset<T, ForumCommentAggregateArgs>): Prisma.PrismaPromise<GetForumCommentAggregateType<T>>

    /**
     * Group by ForumComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentGroupByArgs} args - Group by arguments.
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
      T extends ForumCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumCommentGroupByArgs['orderBy'] }
        : { orderBy?: ForumCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumComment model
   */
  readonly fields: ForumCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Forum<T extends ForumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForumDefaultArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForumComment model
   */
  interface ForumCommentFieldRefs {
    readonly id: FieldRef<"ForumComment", 'Int'>
    readonly forum_id: FieldRef<"ForumComment", 'Int'>
    readonly user_id: FieldRef<"ForumComment", 'Int'>
    readonly text: FieldRef<"ForumComment", 'String'>
    readonly upvote: FieldRef<"ForumComment", 'Int'>
    readonly downvote: FieldRef<"ForumComment", 'Int'>
    readonly created_at: FieldRef<"ForumComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ForumComment findUnique
   */
  export type ForumCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment findUniqueOrThrow
   */
  export type ForumCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment findFirst
   */
  export type ForumCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumComments.
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumComments.
     */
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumComment findFirstOrThrow
   */
  export type ForumCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumComments.
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumComments.
     */
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumComment findMany
   */
  export type ForumCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComments to fetch.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumComments.
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumComment create
   */
  export type ForumCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumComment.
     */
    data: XOR<ForumCommentCreateInput, ForumCommentUncheckedCreateInput>
  }

  /**
   * ForumComment createMany
   */
  export type ForumCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumComments.
     */
    data: ForumCommentCreateManyInput | ForumCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumComment createManyAndReturn
   */
  export type ForumCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * The data used to create many ForumComments.
     */
    data: ForumCommentCreateManyInput | ForumCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumComment update
   */
  export type ForumCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumComment.
     */
    data: XOR<ForumCommentUpdateInput, ForumCommentUncheckedUpdateInput>
    /**
     * Choose, which ForumComment to update.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment updateMany
   */
  export type ForumCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumComments.
     */
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyInput>
    /**
     * Filter which ForumComments to update
     */
    where?: ForumCommentWhereInput
    /**
     * Limit how many ForumComments to update.
     */
    limit?: number
  }

  /**
   * ForumComment updateManyAndReturn
   */
  export type ForumCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * The data used to update ForumComments.
     */
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyInput>
    /**
     * Filter which ForumComments to update
     */
    where?: ForumCommentWhereInput
    /**
     * Limit how many ForumComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumComment upsert
   */
  export type ForumCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumComment to update in case it exists.
     */
    where: ForumCommentWhereUniqueInput
    /**
     * In case the ForumComment found by the `where` argument doesn't exist, create a new ForumComment with this data.
     */
    create: XOR<ForumCommentCreateInput, ForumCommentUncheckedCreateInput>
    /**
     * In case the ForumComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumCommentUpdateInput, ForumCommentUncheckedUpdateInput>
  }

  /**
   * ForumComment delete
   */
  export type ForumCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter which ForumComment to delete.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment deleteMany
   */
  export type ForumCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumComments to delete
     */
    where?: ForumCommentWhereInput
    /**
     * Limit how many ForumComments to delete.
     */
    limit?: number
  }

  /**
   * ForumComment without action
   */
  export type ForumCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    user_name: 'user_name',
    user_password: 'user_password',
    user_email: 'user_email',
    user_role: 'user_role',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    monetary_appeal: 'monetary_appeal',
    urgency: 'urgency',
    created_at: 'created_at'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    session_id: 'session_id',
    text: 'text',
    created_at: 'created_at'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const ForumScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    description: 'description',
    image: 'image',
    created_at: 'created_at'
  };

  export type ForumScalarFieldEnum = (typeof ForumScalarFieldEnum)[keyof typeof ForumScalarFieldEnum]


  export const ForumTagScalarFieldEnum: {
    id: 'id',
    forum_id: 'forum_id',
    tag_id: 'tag_id'
  };

  export type ForumTagScalarFieldEnum = (typeof ForumTagScalarFieldEnum)[keyof typeof ForumTagScalarFieldEnum]


  export const ForumCommentScalarFieldEnum: {
    id: 'id',
    forum_id: 'forum_id',
    user_id: 'user_id',
    text: 'text',
    upvote: 'upvote',
    downvote: 'downvote',
    created_at: 'created_at'
  };

  export type ForumCommentScalarFieldEnum = (typeof ForumCommentScalarFieldEnum)[keyof typeof ForumCommentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    user_name?: StringFilter<"User"> | string
    user_password?: StringFilter<"User"> | string
    user_email?: StringFilter<"User"> | string
    user_role?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    ChatSession?: ChatSessionListRelationFilter
    Forum?: ForumListRelationFilter
    ForumComment?: ForumCommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_password?: SortOrder
    user_email?: SortOrder
    user_role?: SortOrder
    created_at?: SortOrder
    ChatSession?: ChatSessionOrderByRelationAggregateInput
    Forum?: ForumOrderByRelationAggregateInput
    ForumComment?: ForumCommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_name?: StringFilter<"User"> | string
    user_password?: StringFilter<"User"> | string
    user_email?: StringFilter<"User"> | string
    user_role?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    ChatSession?: ChatSessionListRelationFilter
    Forum?: ForumListRelationFilter
    ForumComment?: ForumCommentListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_password?: SortOrder
    user_email?: SortOrder
    user_role?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    user_name?: StringWithAggregatesFilter<"User"> | string
    user_password?: StringWithAggregatesFilter<"User"> | string
    user_email?: StringWithAggregatesFilter<"User"> | string
    user_role?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: IntFilter<"ChatSession"> | number
    user_id?: IntFilter<"ChatSession"> | number
    monetary_appeal?: StringNullableFilter<"ChatSession"> | string | null
    urgency?: StringNullableFilter<"ChatSession"> | string | null
    created_at?: DateTimeFilter<"ChatSession"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    ChatMessage?: ChatMessageListRelationFilter
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    monetary_appeal?: SortOrderInput | SortOrder
    urgency?: SortOrderInput | SortOrder
    created_at?: SortOrder
    User?: UserOrderByWithRelationInput
    ChatMessage?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    user_id?: IntFilter<"ChatSession"> | number
    monetary_appeal?: StringNullableFilter<"ChatSession"> | string | null
    urgency?: StringNullableFilter<"ChatSession"> | string | null
    created_at?: DateTimeFilter<"ChatSession"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    ChatMessage?: ChatMessageListRelationFilter
  }, "id">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    monetary_appeal?: SortOrderInput | SortOrder
    urgency?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _avg?: ChatSessionAvgOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
    _sum?: ChatSessionSumOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatSession"> | number
    user_id?: IntWithAggregatesFilter<"ChatSession"> | number
    monetary_appeal?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    urgency?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    session_id?: IntFilter<"ChatMessage"> | number
    text?: StringFilter<"ChatMessage"> | string
    created_at?: DateTimeFilter<"ChatMessage"> | Date | string
    ChatSession?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    session_id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    ChatSession?: ChatSessionOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    session_id?: IntFilter<"ChatMessage"> | number
    text?: StringFilter<"ChatMessage"> | string
    created_at?: DateTimeFilter<"ChatMessage"> | Date | string
    ChatSession?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    session_id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _avg?: ChatMessageAvgOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
    _sum?: ChatMessageSumOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatMessage"> | number
    session_id?: IntWithAggregatesFilter<"ChatMessage"> | number
    text?: StringWithAggregatesFilter<"ChatMessage"> | string
    created_at?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type ForumWhereInput = {
    AND?: ForumWhereInput | ForumWhereInput[]
    OR?: ForumWhereInput[]
    NOT?: ForumWhereInput | ForumWhereInput[]
    id?: IntFilter<"Forum"> | number
    user_id?: IntFilter<"Forum"> | number
    title?: StringFilter<"Forum"> | string
    description?: StringFilter<"Forum"> | string
    image?: StringNullableFilter<"Forum"> | string | null
    created_at?: DateTimeFilter<"Forum"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    ForumTag?: ForumTagListRelationFilter
    ForumComment?: ForumCommentListRelationFilter
  }

  export type ForumOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    User?: UserOrderByWithRelationInput
    ForumTag?: ForumTagOrderByRelationAggregateInput
    ForumComment?: ForumCommentOrderByRelationAggregateInput
  }

  export type ForumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ForumWhereInput | ForumWhereInput[]
    OR?: ForumWhereInput[]
    NOT?: ForumWhereInput | ForumWhereInput[]
    user_id?: IntFilter<"Forum"> | number
    title?: StringFilter<"Forum"> | string
    description?: StringFilter<"Forum"> | string
    image?: StringNullableFilter<"Forum"> | string | null
    created_at?: DateTimeFilter<"Forum"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    ForumTag?: ForumTagListRelationFilter
    ForumComment?: ForumCommentListRelationFilter
  }, "id">

  export type ForumOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ForumCountOrderByAggregateInput
    _avg?: ForumAvgOrderByAggregateInput
    _max?: ForumMaxOrderByAggregateInput
    _min?: ForumMinOrderByAggregateInput
    _sum?: ForumSumOrderByAggregateInput
  }

  export type ForumScalarWhereWithAggregatesInput = {
    AND?: ForumScalarWhereWithAggregatesInput | ForumScalarWhereWithAggregatesInput[]
    OR?: ForumScalarWhereWithAggregatesInput[]
    NOT?: ForumScalarWhereWithAggregatesInput | ForumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Forum"> | number
    user_id?: IntWithAggregatesFilter<"Forum"> | number
    title?: StringWithAggregatesFilter<"Forum"> | string
    description?: StringWithAggregatesFilter<"Forum"> | string
    image?: StringNullableWithAggregatesFilter<"Forum"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Forum"> | Date | string
  }

  export type ForumTagWhereInput = {
    AND?: ForumTagWhereInput | ForumTagWhereInput[]
    OR?: ForumTagWhereInput[]
    NOT?: ForumTagWhereInput | ForumTagWhereInput[]
    id?: IntFilter<"ForumTag"> | number
    forum_id?: IntFilter<"ForumTag"> | number
    tag_id?: IntFilter<"ForumTag"> | number
    Forum?: XOR<ForumScalarRelationFilter, ForumWhereInput>
  }

  export type ForumTagOrderByWithRelationInput = {
    id?: SortOrder
    forum_id?: SortOrder
    tag_id?: SortOrder
    Forum?: ForumOrderByWithRelationInput
  }

  export type ForumTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ForumTagWhereInput | ForumTagWhereInput[]
    OR?: ForumTagWhereInput[]
    NOT?: ForumTagWhereInput | ForumTagWhereInput[]
    forum_id?: IntFilter<"ForumTag"> | number
    tag_id?: IntFilter<"ForumTag"> | number
    Forum?: XOR<ForumScalarRelationFilter, ForumWhereInput>
  }, "id">

  export type ForumTagOrderByWithAggregationInput = {
    id?: SortOrder
    forum_id?: SortOrder
    tag_id?: SortOrder
    _count?: ForumTagCountOrderByAggregateInput
    _avg?: ForumTagAvgOrderByAggregateInput
    _max?: ForumTagMaxOrderByAggregateInput
    _min?: ForumTagMinOrderByAggregateInput
    _sum?: ForumTagSumOrderByAggregateInput
  }

  export type ForumTagScalarWhereWithAggregatesInput = {
    AND?: ForumTagScalarWhereWithAggregatesInput | ForumTagScalarWhereWithAggregatesInput[]
    OR?: ForumTagScalarWhereWithAggregatesInput[]
    NOT?: ForumTagScalarWhereWithAggregatesInput | ForumTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ForumTag"> | number
    forum_id?: IntWithAggregatesFilter<"ForumTag"> | number
    tag_id?: IntWithAggregatesFilter<"ForumTag"> | number
  }

  export type ForumCommentWhereInput = {
    AND?: ForumCommentWhereInput | ForumCommentWhereInput[]
    OR?: ForumCommentWhereInput[]
    NOT?: ForumCommentWhereInput | ForumCommentWhereInput[]
    id?: IntFilter<"ForumComment"> | number
    forum_id?: IntFilter<"ForumComment"> | number
    user_id?: IntFilter<"ForumComment"> | number
    text?: StringFilter<"ForumComment"> | string
    upvote?: IntFilter<"ForumComment"> | number
    downvote?: IntFilter<"ForumComment"> | number
    created_at?: DateTimeFilter<"ForumComment"> | Date | string
    Forum?: XOR<ForumScalarRelationFilter, ForumWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ForumCommentOrderByWithRelationInput = {
    id?: SortOrder
    forum_id?: SortOrder
    user_id?: SortOrder
    text?: SortOrder
    upvote?: SortOrder
    downvote?: SortOrder
    created_at?: SortOrder
    Forum?: ForumOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type ForumCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ForumCommentWhereInput | ForumCommentWhereInput[]
    OR?: ForumCommentWhereInput[]
    NOT?: ForumCommentWhereInput | ForumCommentWhereInput[]
    forum_id?: IntFilter<"ForumComment"> | number
    user_id?: IntFilter<"ForumComment"> | number
    text?: StringFilter<"ForumComment"> | string
    upvote?: IntFilter<"ForumComment"> | number
    downvote?: IntFilter<"ForumComment"> | number
    created_at?: DateTimeFilter<"ForumComment"> | Date | string
    Forum?: XOR<ForumScalarRelationFilter, ForumWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ForumCommentOrderByWithAggregationInput = {
    id?: SortOrder
    forum_id?: SortOrder
    user_id?: SortOrder
    text?: SortOrder
    upvote?: SortOrder
    downvote?: SortOrder
    created_at?: SortOrder
    _count?: ForumCommentCountOrderByAggregateInput
    _avg?: ForumCommentAvgOrderByAggregateInput
    _max?: ForumCommentMaxOrderByAggregateInput
    _min?: ForumCommentMinOrderByAggregateInput
    _sum?: ForumCommentSumOrderByAggregateInput
  }

  export type ForumCommentScalarWhereWithAggregatesInput = {
    AND?: ForumCommentScalarWhereWithAggregatesInput | ForumCommentScalarWhereWithAggregatesInput[]
    OR?: ForumCommentScalarWhereWithAggregatesInput[]
    NOT?: ForumCommentScalarWhereWithAggregatesInput | ForumCommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ForumComment"> | number
    forum_id?: IntWithAggregatesFilter<"ForumComment"> | number
    user_id?: IntWithAggregatesFilter<"ForumComment"> | number
    text?: StringWithAggregatesFilter<"ForumComment"> | string
    upvote?: IntWithAggregatesFilter<"ForumComment"> | number
    downvote?: IntWithAggregatesFilter<"ForumComment"> | number
    created_at?: DateTimeWithAggregatesFilter<"ForumComment"> | Date | string
  }

  export type UserCreateInput = {
    user_name: string
    user_password: string
    user_email: string
    user_role: string
    created_at?: Date | string
    ChatSession?: ChatSessionCreateNestedManyWithoutUserInput
    Forum?: ForumCreateNestedManyWithoutUserInput
    ForumComment?: ForumCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    user_name: string
    user_password: string
    user_email: string
    user_role: string
    created_at?: Date | string
    ChatSession?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    Forum?: ForumUncheckedCreateNestedManyWithoutUserInput
    ForumComment?: ForumCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatSession?: ChatSessionUpdateManyWithoutUserNestedInput
    Forum?: ForumUpdateManyWithoutUserNestedInput
    ForumComment?: ForumCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatSession?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    Forum?: ForumUncheckedUpdateManyWithoutUserNestedInput
    ForumComment?: ForumCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    user_name: string
    user_password: string
    user_email: string
    user_role: string
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionCreateInput = {
    monetary_appeal?: string | null
    urgency?: string | null
    created_at?: Date | string
    User: UserCreateNestedOneWithoutChatSessionInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutChatSessionInput
  }

  export type ChatSessionUncheckedCreateInput = {
    id?: number
    user_id: number
    monetary_appeal?: string | null
    urgency?: string | null
    created_at?: Date | string
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutChatSessionInput
  }

  export type ChatSessionUpdateInput = {
    monetary_appeal?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutChatSessionNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutChatSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    monetary_appeal?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutChatSessionNestedInput
  }

  export type ChatSessionCreateManyInput = {
    id?: number
    user_id: number
    monetary_appeal?: string | null
    urgency?: string | null
    created_at?: Date | string
  }

  export type ChatSessionUpdateManyMutationInput = {
    monetary_appeal?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    monetary_appeal?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    text: string
    created_at?: Date | string
    ChatSession: ChatSessionCreateNestedOneWithoutChatMessageInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: number
    session_id: number
    text: string
    created_at?: Date | string
  }

  export type ChatMessageUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatSession?: ChatSessionUpdateOneRequiredWithoutChatMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: number
    session_id: number
    text: string
    created_at?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumCreateInput = {
    title: string
    description: string
    image?: string | null
    created_at?: Date | string
    User: UserCreateNestedOneWithoutForumInput
    ForumTag?: ForumTagCreateNestedManyWithoutForumInput
    ForumComment?: ForumCommentCreateNestedManyWithoutForumInput
  }

  export type ForumUncheckedCreateInput = {
    id?: number
    user_id: number
    title: string
    description: string
    image?: string | null
    created_at?: Date | string
    ForumTag?: ForumTagUncheckedCreateNestedManyWithoutForumInput
    ForumComment?: ForumCommentUncheckedCreateNestedManyWithoutForumInput
  }

  export type ForumUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutForumNestedInput
    ForumTag?: ForumTagUpdateManyWithoutForumNestedInput
    ForumComment?: ForumCommentUpdateManyWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ForumTag?: ForumTagUncheckedUpdateManyWithoutForumNestedInput
    ForumComment?: ForumCommentUncheckedUpdateManyWithoutForumNestedInput
  }

  export type ForumCreateManyInput = {
    id?: number
    user_id: number
    title: string
    description: string
    image?: string | null
    created_at?: Date | string
  }

  export type ForumUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumTagCreateInput = {
    tag_id: number
    Forum: ForumCreateNestedOneWithoutForumTagInput
  }

  export type ForumTagUncheckedCreateInput = {
    id?: number
    forum_id: number
    tag_id: number
  }

  export type ForumTagUpdateInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    Forum?: ForumUpdateOneRequiredWithoutForumTagNestedInput
  }

  export type ForumTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    forum_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type ForumTagCreateManyInput = {
    id?: number
    forum_id: number
    tag_id: number
  }

  export type ForumTagUpdateManyMutationInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type ForumTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    forum_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentCreateInput = {
    text: string
    upvote?: number
    downvote?: number
    created_at?: Date | string
    Forum: ForumCreateNestedOneWithoutForumCommentInput
    User: UserCreateNestedOneWithoutForumCommentInput
  }

  export type ForumCommentUncheckedCreateInput = {
    id?: number
    forum_id: number
    user_id: number
    text: string
    upvote?: number
    downvote?: number
    created_at?: Date | string
  }

  export type ForumCommentUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    upvote?: IntFieldUpdateOperationsInput | number
    downvote?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Forum?: ForumUpdateOneRequiredWithoutForumCommentNestedInput
    User?: UserUpdateOneRequiredWithoutForumCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    forum_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    upvote?: IntFieldUpdateOperationsInput | number
    downvote?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumCommentCreateManyInput = {
    id?: number
    forum_id: number
    user_id: number
    text: string
    upvote?: number
    downvote?: number
    created_at?: Date | string
  }

  export type ForumCommentUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    upvote?: IntFieldUpdateOperationsInput | number
    downvote?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumCommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    forum_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    upvote?: IntFieldUpdateOperationsInput | number
    downvote?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChatSessionListRelationFilter = {
    every?: ChatSessionWhereInput
    some?: ChatSessionWhereInput
    none?: ChatSessionWhereInput
  }

  export type ForumListRelationFilter = {
    every?: ForumWhereInput
    some?: ForumWhereInput
    none?: ForumWhereInput
  }

  export type ForumCommentListRelationFilter = {
    every?: ForumCommentWhereInput
    some?: ForumCommentWhereInput
    none?: ForumCommentWhereInput
  }

  export type ChatSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_password?: SortOrder
    user_email?: SortOrder
    user_role?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_password?: SortOrder
    user_email?: SortOrder
    user_role?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_password?: SortOrder
    user_email?: SortOrder
    user_role?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    monetary_appeal?: SortOrder
    urgency?: SortOrder
    created_at?: SortOrder
  }

  export type ChatSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    monetary_appeal?: SortOrder
    urgency?: SortOrder
    created_at?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    monetary_appeal?: SortOrder
    urgency?: SortOrder
    created_at?: SortOrder
  }

  export type ChatSessionSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ChatSessionScalarRelationFilter = {
    is?: ChatSessionWhereInput
    isNot?: ChatSessionWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
  }

  export type ChatMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
  }

  export type ChatMessageSumOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
  }

  export type ForumTagListRelationFilter = {
    every?: ForumTagWhereInput
    some?: ForumTagWhereInput
    none?: ForumTagWhereInput
  }

  export type ForumTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
  }

  export type ForumAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ForumMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
  }

  export type ForumMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
  }

  export type ForumSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ForumScalarRelationFilter = {
    is?: ForumWhereInput
    isNot?: ForumWhereInput
  }

  export type ForumTagCountOrderByAggregateInput = {
    id?: SortOrder
    forum_id?: SortOrder
    tag_id?: SortOrder
  }

  export type ForumTagAvgOrderByAggregateInput = {
    id?: SortOrder
    forum_id?: SortOrder
    tag_id?: SortOrder
  }

  export type ForumTagMaxOrderByAggregateInput = {
    id?: SortOrder
    forum_id?: SortOrder
    tag_id?: SortOrder
  }

  export type ForumTagMinOrderByAggregateInput = {
    id?: SortOrder
    forum_id?: SortOrder
    tag_id?: SortOrder
  }

  export type ForumTagSumOrderByAggregateInput = {
    id?: SortOrder
    forum_id?: SortOrder
    tag_id?: SortOrder
  }

  export type ForumCommentCountOrderByAggregateInput = {
    id?: SortOrder
    forum_id?: SortOrder
    user_id?: SortOrder
    text?: SortOrder
    upvote?: SortOrder
    downvote?: SortOrder
    created_at?: SortOrder
  }

  export type ForumCommentAvgOrderByAggregateInput = {
    id?: SortOrder
    forum_id?: SortOrder
    user_id?: SortOrder
    upvote?: SortOrder
    downvote?: SortOrder
  }

  export type ForumCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    forum_id?: SortOrder
    user_id?: SortOrder
    text?: SortOrder
    upvote?: SortOrder
    downvote?: SortOrder
    created_at?: SortOrder
  }

  export type ForumCommentMinOrderByAggregateInput = {
    id?: SortOrder
    forum_id?: SortOrder
    user_id?: SortOrder
    text?: SortOrder
    upvote?: SortOrder
    downvote?: SortOrder
    created_at?: SortOrder
  }

  export type ForumCommentSumOrderByAggregateInput = {
    id?: SortOrder
    forum_id?: SortOrder
    user_id?: SortOrder
    upvote?: SortOrder
    downvote?: SortOrder
  }

  export type ChatSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type ForumCreateNestedManyWithoutUserInput = {
    create?: XOR<ForumCreateWithoutUserInput, ForumUncheckedCreateWithoutUserInput> | ForumCreateWithoutUserInput[] | ForumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutUserInput | ForumCreateOrConnectWithoutUserInput[]
    createMany?: ForumCreateManyUserInputEnvelope
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
  }

  export type ForumCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<ForumCommentCreateWithoutUserInput, ForumCommentUncheckedCreateWithoutUserInput> | ForumCommentCreateWithoutUserInput[] | ForumCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutUserInput | ForumCommentCreateOrConnectWithoutUserInput[]
    createMany?: ForumCommentCreateManyUserInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type ForumUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ForumCreateWithoutUserInput, ForumUncheckedCreateWithoutUserInput> | ForumCreateWithoutUserInput[] | ForumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutUserInput | ForumCreateOrConnectWithoutUserInput[]
    createMany?: ForumCreateManyUserInputEnvelope
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
  }

  export type ForumCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ForumCommentCreateWithoutUserInput, ForumCommentUncheckedCreateWithoutUserInput> | ForumCommentCreateWithoutUserInput[] | ForumCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutUserInput | ForumCommentCreateOrConnectWithoutUserInput[]
    createMany?: ForumCommentCreateManyUserInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChatSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type ForumUpdateManyWithoutUserNestedInput = {
    create?: XOR<ForumCreateWithoutUserInput, ForumUncheckedCreateWithoutUserInput> | ForumCreateWithoutUserInput[] | ForumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutUserInput | ForumCreateOrConnectWithoutUserInput[]
    upsert?: ForumUpsertWithWhereUniqueWithoutUserInput | ForumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ForumCreateManyUserInputEnvelope
    set?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    disconnect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    delete?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    update?: ForumUpdateWithWhereUniqueWithoutUserInput | ForumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ForumUpdateManyWithWhereWithoutUserInput | ForumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ForumScalarWhereInput | ForumScalarWhereInput[]
  }

  export type ForumCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ForumCommentCreateWithoutUserInput, ForumCommentUncheckedCreateWithoutUserInput> | ForumCommentCreateWithoutUserInput[] | ForumCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutUserInput | ForumCommentCreateOrConnectWithoutUserInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutUserInput | ForumCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ForumCommentCreateManyUserInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutUserInput | ForumCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutUserInput | ForumCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type ForumUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ForumCreateWithoutUserInput, ForumUncheckedCreateWithoutUserInput> | ForumCreateWithoutUserInput[] | ForumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutUserInput | ForumCreateOrConnectWithoutUserInput[]
    upsert?: ForumUpsertWithWhereUniqueWithoutUserInput | ForumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ForumCreateManyUserInputEnvelope
    set?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    disconnect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    delete?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    update?: ForumUpdateWithWhereUniqueWithoutUserInput | ForumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ForumUpdateManyWithWhereWithoutUserInput | ForumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ForumScalarWhereInput | ForumScalarWhereInput[]
  }

  export type ForumCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ForumCommentCreateWithoutUserInput, ForumCommentUncheckedCreateWithoutUserInput> | ForumCommentCreateWithoutUserInput[] | ForumCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutUserInput | ForumCommentCreateOrConnectWithoutUserInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutUserInput | ForumCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ForumCommentCreateManyUserInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutUserInput | ForumCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutUserInput | ForumCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatSessionInput = {
    create?: XOR<UserCreateWithoutChatSessionInput, UserUncheckedCreateWithoutChatSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatSessionInput
    connect?: UserWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutChatSessionInput = {
    create?: XOR<ChatMessageCreateWithoutChatSessionInput, ChatMessageUncheckedCreateWithoutChatSessionInput> | ChatMessageCreateWithoutChatSessionInput[] | ChatMessageUncheckedCreateWithoutChatSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatSessionInput | ChatMessageCreateOrConnectWithoutChatSessionInput[]
    createMany?: ChatMessageCreateManyChatSessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChatSessionInput = {
    create?: XOR<ChatMessageCreateWithoutChatSessionInput, ChatMessageUncheckedCreateWithoutChatSessionInput> | ChatMessageCreateWithoutChatSessionInput[] | ChatMessageUncheckedCreateWithoutChatSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatSessionInput | ChatMessageCreateOrConnectWithoutChatSessionInput[]
    createMany?: ChatMessageCreateManyChatSessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutChatSessionNestedInput = {
    create?: XOR<UserCreateWithoutChatSessionInput, UserUncheckedCreateWithoutChatSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatSessionInput
    upsert?: UserUpsertWithoutChatSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatSessionInput, UserUpdateWithoutChatSessionInput>, UserUncheckedUpdateWithoutChatSessionInput>
  }

  export type ChatMessageUpdateManyWithoutChatSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatSessionInput, ChatMessageUncheckedCreateWithoutChatSessionInput> | ChatMessageCreateWithoutChatSessionInput[] | ChatMessageUncheckedCreateWithoutChatSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatSessionInput | ChatMessageCreateOrConnectWithoutChatSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput | ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput[]
    createMany?: ChatMessageCreateManyChatSessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput | ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatSessionInput | ChatMessageUpdateManyWithWhereWithoutChatSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatSessionInput, ChatMessageUncheckedCreateWithoutChatSessionInput> | ChatMessageCreateWithoutChatSessionInput[] | ChatMessageUncheckedCreateWithoutChatSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatSessionInput | ChatMessageCreateOrConnectWithoutChatSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput | ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput[]
    createMany?: ChatMessageCreateManyChatSessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput | ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatSessionInput | ChatMessageUpdateManyWithWhereWithoutChatSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatSessionCreateNestedOneWithoutChatMessageInput = {
    create?: XOR<ChatSessionCreateWithoutChatMessageInput, ChatSessionUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutChatMessageInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type ChatSessionUpdateOneRequiredWithoutChatMessageNestedInput = {
    create?: XOR<ChatSessionCreateWithoutChatMessageInput, ChatSessionUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutChatMessageInput
    upsert?: ChatSessionUpsertWithoutChatMessageInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutChatMessageInput, ChatSessionUpdateWithoutChatMessageInput>, ChatSessionUncheckedUpdateWithoutChatMessageInput>
  }

  export type UserCreateNestedOneWithoutForumInput = {
    create?: XOR<UserCreateWithoutForumInput, UserUncheckedCreateWithoutForumInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumInput
    connect?: UserWhereUniqueInput
  }

  export type ForumTagCreateNestedManyWithoutForumInput = {
    create?: XOR<ForumTagCreateWithoutForumInput, ForumTagUncheckedCreateWithoutForumInput> | ForumTagCreateWithoutForumInput[] | ForumTagUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumTagCreateOrConnectWithoutForumInput | ForumTagCreateOrConnectWithoutForumInput[]
    createMany?: ForumTagCreateManyForumInputEnvelope
    connect?: ForumTagWhereUniqueInput | ForumTagWhereUniqueInput[]
  }

  export type ForumCommentCreateNestedManyWithoutForumInput = {
    create?: XOR<ForumCommentCreateWithoutForumInput, ForumCommentUncheckedCreateWithoutForumInput> | ForumCommentCreateWithoutForumInput[] | ForumCommentUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutForumInput | ForumCommentCreateOrConnectWithoutForumInput[]
    createMany?: ForumCommentCreateManyForumInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type ForumTagUncheckedCreateNestedManyWithoutForumInput = {
    create?: XOR<ForumTagCreateWithoutForumInput, ForumTagUncheckedCreateWithoutForumInput> | ForumTagCreateWithoutForumInput[] | ForumTagUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumTagCreateOrConnectWithoutForumInput | ForumTagCreateOrConnectWithoutForumInput[]
    createMany?: ForumTagCreateManyForumInputEnvelope
    connect?: ForumTagWhereUniqueInput | ForumTagWhereUniqueInput[]
  }

  export type ForumCommentUncheckedCreateNestedManyWithoutForumInput = {
    create?: XOR<ForumCommentCreateWithoutForumInput, ForumCommentUncheckedCreateWithoutForumInput> | ForumCommentCreateWithoutForumInput[] | ForumCommentUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutForumInput | ForumCommentCreateOrConnectWithoutForumInput[]
    createMany?: ForumCommentCreateManyForumInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutForumNestedInput = {
    create?: XOR<UserCreateWithoutForumInput, UserUncheckedCreateWithoutForumInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumInput
    upsert?: UserUpsertWithoutForumInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutForumInput, UserUpdateWithoutForumInput>, UserUncheckedUpdateWithoutForumInput>
  }

  export type ForumTagUpdateManyWithoutForumNestedInput = {
    create?: XOR<ForumTagCreateWithoutForumInput, ForumTagUncheckedCreateWithoutForumInput> | ForumTagCreateWithoutForumInput[] | ForumTagUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumTagCreateOrConnectWithoutForumInput | ForumTagCreateOrConnectWithoutForumInput[]
    upsert?: ForumTagUpsertWithWhereUniqueWithoutForumInput | ForumTagUpsertWithWhereUniqueWithoutForumInput[]
    createMany?: ForumTagCreateManyForumInputEnvelope
    set?: ForumTagWhereUniqueInput | ForumTagWhereUniqueInput[]
    disconnect?: ForumTagWhereUniqueInput | ForumTagWhereUniqueInput[]
    delete?: ForumTagWhereUniqueInput | ForumTagWhereUniqueInput[]
    connect?: ForumTagWhereUniqueInput | ForumTagWhereUniqueInput[]
    update?: ForumTagUpdateWithWhereUniqueWithoutForumInput | ForumTagUpdateWithWhereUniqueWithoutForumInput[]
    updateMany?: ForumTagUpdateManyWithWhereWithoutForumInput | ForumTagUpdateManyWithWhereWithoutForumInput[]
    deleteMany?: ForumTagScalarWhereInput | ForumTagScalarWhereInput[]
  }

  export type ForumCommentUpdateManyWithoutForumNestedInput = {
    create?: XOR<ForumCommentCreateWithoutForumInput, ForumCommentUncheckedCreateWithoutForumInput> | ForumCommentCreateWithoutForumInput[] | ForumCommentUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutForumInput | ForumCommentCreateOrConnectWithoutForumInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutForumInput | ForumCommentUpsertWithWhereUniqueWithoutForumInput[]
    createMany?: ForumCommentCreateManyForumInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutForumInput | ForumCommentUpdateWithWhereUniqueWithoutForumInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutForumInput | ForumCommentUpdateManyWithWhereWithoutForumInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type ForumTagUncheckedUpdateManyWithoutForumNestedInput = {
    create?: XOR<ForumTagCreateWithoutForumInput, ForumTagUncheckedCreateWithoutForumInput> | ForumTagCreateWithoutForumInput[] | ForumTagUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumTagCreateOrConnectWithoutForumInput | ForumTagCreateOrConnectWithoutForumInput[]
    upsert?: ForumTagUpsertWithWhereUniqueWithoutForumInput | ForumTagUpsertWithWhereUniqueWithoutForumInput[]
    createMany?: ForumTagCreateManyForumInputEnvelope
    set?: ForumTagWhereUniqueInput | ForumTagWhereUniqueInput[]
    disconnect?: ForumTagWhereUniqueInput | ForumTagWhereUniqueInput[]
    delete?: ForumTagWhereUniqueInput | ForumTagWhereUniqueInput[]
    connect?: ForumTagWhereUniqueInput | ForumTagWhereUniqueInput[]
    update?: ForumTagUpdateWithWhereUniqueWithoutForumInput | ForumTagUpdateWithWhereUniqueWithoutForumInput[]
    updateMany?: ForumTagUpdateManyWithWhereWithoutForumInput | ForumTagUpdateManyWithWhereWithoutForumInput[]
    deleteMany?: ForumTagScalarWhereInput | ForumTagScalarWhereInput[]
  }

  export type ForumCommentUncheckedUpdateManyWithoutForumNestedInput = {
    create?: XOR<ForumCommentCreateWithoutForumInput, ForumCommentUncheckedCreateWithoutForumInput> | ForumCommentCreateWithoutForumInput[] | ForumCommentUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutForumInput | ForumCommentCreateOrConnectWithoutForumInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutForumInput | ForumCommentUpsertWithWhereUniqueWithoutForumInput[]
    createMany?: ForumCommentCreateManyForumInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutForumInput | ForumCommentUpdateWithWhereUniqueWithoutForumInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutForumInput | ForumCommentUpdateManyWithWhereWithoutForumInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type ForumCreateNestedOneWithoutForumTagInput = {
    create?: XOR<ForumCreateWithoutForumTagInput, ForumUncheckedCreateWithoutForumTagInput>
    connectOrCreate?: ForumCreateOrConnectWithoutForumTagInput
    connect?: ForumWhereUniqueInput
  }

  export type ForumUpdateOneRequiredWithoutForumTagNestedInput = {
    create?: XOR<ForumCreateWithoutForumTagInput, ForumUncheckedCreateWithoutForumTagInput>
    connectOrCreate?: ForumCreateOrConnectWithoutForumTagInput
    upsert?: ForumUpsertWithoutForumTagInput
    connect?: ForumWhereUniqueInput
    update?: XOR<XOR<ForumUpdateToOneWithWhereWithoutForumTagInput, ForumUpdateWithoutForumTagInput>, ForumUncheckedUpdateWithoutForumTagInput>
  }

  export type ForumCreateNestedOneWithoutForumCommentInput = {
    create?: XOR<ForumCreateWithoutForumCommentInput, ForumUncheckedCreateWithoutForumCommentInput>
    connectOrCreate?: ForumCreateOrConnectWithoutForumCommentInput
    connect?: ForumWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutForumCommentInput = {
    create?: XOR<UserCreateWithoutForumCommentInput, UserUncheckedCreateWithoutForumCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumCommentInput
    connect?: UserWhereUniqueInput
  }

  export type ForumUpdateOneRequiredWithoutForumCommentNestedInput = {
    create?: XOR<ForumCreateWithoutForumCommentInput, ForumUncheckedCreateWithoutForumCommentInput>
    connectOrCreate?: ForumCreateOrConnectWithoutForumCommentInput
    upsert?: ForumUpsertWithoutForumCommentInput
    connect?: ForumWhereUniqueInput
    update?: XOR<XOR<ForumUpdateToOneWithWhereWithoutForumCommentInput, ForumUpdateWithoutForumCommentInput>, ForumUncheckedUpdateWithoutForumCommentInput>
  }

  export type UserUpdateOneRequiredWithoutForumCommentNestedInput = {
    create?: XOR<UserCreateWithoutForumCommentInput, UserUncheckedCreateWithoutForumCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumCommentInput
    upsert?: UserUpsertWithoutForumCommentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutForumCommentInput, UserUpdateWithoutForumCommentInput>, UserUncheckedUpdateWithoutForumCommentInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ChatSessionCreateWithoutUserInput = {
    monetary_appeal?: string | null
    urgency?: string | null
    created_at?: Date | string
    ChatMessage?: ChatMessageCreateNestedManyWithoutChatSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutUserInput = {
    id?: number
    monetary_appeal?: string | null
    urgency?: string | null
    created_at?: Date | string
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutChatSessionInput
  }

  export type ChatSessionCreateOrConnectWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionCreateManyUserInputEnvelope = {
    data: ChatSessionCreateManyUserInput | ChatSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ForumCreateWithoutUserInput = {
    title: string
    description: string
    image?: string | null
    created_at?: Date | string
    ForumTag?: ForumTagCreateNestedManyWithoutForumInput
    ForumComment?: ForumCommentCreateNestedManyWithoutForumInput
  }

  export type ForumUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
    image?: string | null
    created_at?: Date | string
    ForumTag?: ForumTagUncheckedCreateNestedManyWithoutForumInput
    ForumComment?: ForumCommentUncheckedCreateNestedManyWithoutForumInput
  }

  export type ForumCreateOrConnectWithoutUserInput = {
    where: ForumWhereUniqueInput
    create: XOR<ForumCreateWithoutUserInput, ForumUncheckedCreateWithoutUserInput>
  }

  export type ForumCreateManyUserInputEnvelope = {
    data: ForumCreateManyUserInput | ForumCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ForumCommentCreateWithoutUserInput = {
    text: string
    upvote?: number
    downvote?: number
    created_at?: Date | string
    Forum: ForumCreateNestedOneWithoutForumCommentInput
  }

  export type ForumCommentUncheckedCreateWithoutUserInput = {
    id?: number
    forum_id: number
    text: string
    upvote?: number
    downvote?: number
    created_at?: Date | string
  }

  export type ForumCommentCreateOrConnectWithoutUserInput = {
    where: ForumCommentWhereUniqueInput
    create: XOR<ForumCommentCreateWithoutUserInput, ForumCommentUncheckedCreateWithoutUserInput>
  }

  export type ForumCommentCreateManyUserInputEnvelope = {
    data: ForumCommentCreateManyUserInput | ForumCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutUserInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatSessionScalarWhereInput = {
    AND?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    OR?: ChatSessionScalarWhereInput[]
    NOT?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    id?: IntFilter<"ChatSession"> | number
    user_id?: IntFilter<"ChatSession"> | number
    monetary_appeal?: StringNullableFilter<"ChatSession"> | string | null
    urgency?: StringNullableFilter<"ChatSession"> | string | null
    created_at?: DateTimeFilter<"ChatSession"> | Date | string
  }

  export type ForumUpsertWithWhereUniqueWithoutUserInput = {
    where: ForumWhereUniqueInput
    update: XOR<ForumUpdateWithoutUserInput, ForumUncheckedUpdateWithoutUserInput>
    create: XOR<ForumCreateWithoutUserInput, ForumUncheckedCreateWithoutUserInput>
  }

  export type ForumUpdateWithWhereUniqueWithoutUserInput = {
    where: ForumWhereUniqueInput
    data: XOR<ForumUpdateWithoutUserInput, ForumUncheckedUpdateWithoutUserInput>
  }

  export type ForumUpdateManyWithWhereWithoutUserInput = {
    where: ForumScalarWhereInput
    data: XOR<ForumUpdateManyMutationInput, ForumUncheckedUpdateManyWithoutUserInput>
  }

  export type ForumScalarWhereInput = {
    AND?: ForumScalarWhereInput | ForumScalarWhereInput[]
    OR?: ForumScalarWhereInput[]
    NOT?: ForumScalarWhereInput | ForumScalarWhereInput[]
    id?: IntFilter<"Forum"> | number
    user_id?: IntFilter<"Forum"> | number
    title?: StringFilter<"Forum"> | string
    description?: StringFilter<"Forum"> | string
    image?: StringNullableFilter<"Forum"> | string | null
    created_at?: DateTimeFilter<"Forum"> | Date | string
  }

  export type ForumCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: ForumCommentWhereUniqueInput
    update: XOR<ForumCommentUpdateWithoutUserInput, ForumCommentUncheckedUpdateWithoutUserInput>
    create: XOR<ForumCommentCreateWithoutUserInput, ForumCommentUncheckedCreateWithoutUserInput>
  }

  export type ForumCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: ForumCommentWhereUniqueInput
    data: XOR<ForumCommentUpdateWithoutUserInput, ForumCommentUncheckedUpdateWithoutUserInput>
  }

  export type ForumCommentUpdateManyWithWhereWithoutUserInput = {
    where: ForumCommentScalarWhereInput
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type ForumCommentScalarWhereInput = {
    AND?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
    OR?: ForumCommentScalarWhereInput[]
    NOT?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
    id?: IntFilter<"ForumComment"> | number
    forum_id?: IntFilter<"ForumComment"> | number
    user_id?: IntFilter<"ForumComment"> | number
    text?: StringFilter<"ForumComment"> | string
    upvote?: IntFilter<"ForumComment"> | number
    downvote?: IntFilter<"ForumComment"> | number
    created_at?: DateTimeFilter<"ForumComment"> | Date | string
  }

  export type UserCreateWithoutChatSessionInput = {
    user_name: string
    user_password: string
    user_email: string
    user_role: string
    created_at?: Date | string
    Forum?: ForumCreateNestedManyWithoutUserInput
    ForumComment?: ForumCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatSessionInput = {
    id?: number
    user_name: string
    user_password: string
    user_email: string
    user_role: string
    created_at?: Date | string
    Forum?: ForumUncheckedCreateNestedManyWithoutUserInput
    ForumComment?: ForumCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatSessionInput, UserUncheckedCreateWithoutChatSessionInput>
  }

  export type ChatMessageCreateWithoutChatSessionInput = {
    text: string
    created_at?: Date | string
  }

  export type ChatMessageUncheckedCreateWithoutChatSessionInput = {
    id?: number
    text: string
    created_at?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutChatSessionInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChatSessionInput, ChatMessageUncheckedCreateWithoutChatSessionInput>
  }

  export type ChatMessageCreateManyChatSessionInputEnvelope = {
    data: ChatMessageCreateManyChatSessionInput | ChatMessageCreateManyChatSessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChatSessionInput = {
    update: XOR<UserUpdateWithoutChatSessionInput, UserUncheckedUpdateWithoutChatSessionInput>
    create: XOR<UserCreateWithoutChatSessionInput, UserUncheckedCreateWithoutChatSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatSessionInput, UserUncheckedUpdateWithoutChatSessionInput>
  }

  export type UserUpdateWithoutChatSessionInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Forum?: ForumUpdateManyWithoutUserNestedInput
    ForumComment?: ForumCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Forum?: ForumUncheckedUpdateManyWithoutUserNestedInput
    ForumComment?: ForumCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChatSessionInput, ChatMessageUncheckedUpdateWithoutChatSessionInput>
    create: XOR<ChatMessageCreateWithoutChatSessionInput, ChatMessageUncheckedCreateWithoutChatSessionInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChatSessionInput, ChatMessageUncheckedUpdateWithoutChatSessionInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChatSessionInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChatSessionInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    session_id?: IntFilter<"ChatMessage"> | number
    text?: StringFilter<"ChatMessage"> | string
    created_at?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatSessionCreateWithoutChatMessageInput = {
    monetary_appeal?: string | null
    urgency?: string | null
    created_at?: Date | string
    User: UserCreateNestedOneWithoutChatSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutChatMessageInput = {
    id?: number
    user_id: number
    monetary_appeal?: string | null
    urgency?: string | null
    created_at?: Date | string
  }

  export type ChatSessionCreateOrConnectWithoutChatMessageInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutChatMessageInput, ChatSessionUncheckedCreateWithoutChatMessageInput>
  }

  export type ChatSessionUpsertWithoutChatMessageInput = {
    update: XOR<ChatSessionUpdateWithoutChatMessageInput, ChatSessionUncheckedUpdateWithoutChatMessageInput>
    create: XOR<ChatSessionCreateWithoutChatMessageInput, ChatSessionUncheckedCreateWithoutChatMessageInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutChatMessageInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutChatMessageInput, ChatSessionUncheckedUpdateWithoutChatMessageInput>
  }

  export type ChatSessionUpdateWithoutChatMessageInput = {
    monetary_appeal?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutChatSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutChatMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    monetary_appeal?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutForumInput = {
    user_name: string
    user_password: string
    user_email: string
    user_role: string
    created_at?: Date | string
    ChatSession?: ChatSessionCreateNestedManyWithoutUserInput
    ForumComment?: ForumCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutForumInput = {
    id?: number
    user_name: string
    user_password: string
    user_email: string
    user_role: string
    created_at?: Date | string
    ChatSession?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    ForumComment?: ForumCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutForumInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutForumInput, UserUncheckedCreateWithoutForumInput>
  }

  export type ForumTagCreateWithoutForumInput = {
    tag_id: number
  }

  export type ForumTagUncheckedCreateWithoutForumInput = {
    id?: number
    tag_id: number
  }

  export type ForumTagCreateOrConnectWithoutForumInput = {
    where: ForumTagWhereUniqueInput
    create: XOR<ForumTagCreateWithoutForumInput, ForumTagUncheckedCreateWithoutForumInput>
  }

  export type ForumTagCreateManyForumInputEnvelope = {
    data: ForumTagCreateManyForumInput | ForumTagCreateManyForumInput[]
    skipDuplicates?: boolean
  }

  export type ForumCommentCreateWithoutForumInput = {
    text: string
    upvote?: number
    downvote?: number
    created_at?: Date | string
    User: UserCreateNestedOneWithoutForumCommentInput
  }

  export type ForumCommentUncheckedCreateWithoutForumInput = {
    id?: number
    user_id: number
    text: string
    upvote?: number
    downvote?: number
    created_at?: Date | string
  }

  export type ForumCommentCreateOrConnectWithoutForumInput = {
    where: ForumCommentWhereUniqueInput
    create: XOR<ForumCommentCreateWithoutForumInput, ForumCommentUncheckedCreateWithoutForumInput>
  }

  export type ForumCommentCreateManyForumInputEnvelope = {
    data: ForumCommentCreateManyForumInput | ForumCommentCreateManyForumInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutForumInput = {
    update: XOR<UserUpdateWithoutForumInput, UserUncheckedUpdateWithoutForumInput>
    create: XOR<UserCreateWithoutForumInput, UserUncheckedCreateWithoutForumInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutForumInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutForumInput, UserUncheckedUpdateWithoutForumInput>
  }

  export type UserUpdateWithoutForumInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatSession?: ChatSessionUpdateManyWithoutUserNestedInput
    ForumComment?: ForumCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutForumInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatSession?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    ForumComment?: ForumCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ForumTagUpsertWithWhereUniqueWithoutForumInput = {
    where: ForumTagWhereUniqueInput
    update: XOR<ForumTagUpdateWithoutForumInput, ForumTagUncheckedUpdateWithoutForumInput>
    create: XOR<ForumTagCreateWithoutForumInput, ForumTagUncheckedCreateWithoutForumInput>
  }

  export type ForumTagUpdateWithWhereUniqueWithoutForumInput = {
    where: ForumTagWhereUniqueInput
    data: XOR<ForumTagUpdateWithoutForumInput, ForumTagUncheckedUpdateWithoutForumInput>
  }

  export type ForumTagUpdateManyWithWhereWithoutForumInput = {
    where: ForumTagScalarWhereInput
    data: XOR<ForumTagUpdateManyMutationInput, ForumTagUncheckedUpdateManyWithoutForumInput>
  }

  export type ForumTagScalarWhereInput = {
    AND?: ForumTagScalarWhereInput | ForumTagScalarWhereInput[]
    OR?: ForumTagScalarWhereInput[]
    NOT?: ForumTagScalarWhereInput | ForumTagScalarWhereInput[]
    id?: IntFilter<"ForumTag"> | number
    forum_id?: IntFilter<"ForumTag"> | number
    tag_id?: IntFilter<"ForumTag"> | number
  }

  export type ForumCommentUpsertWithWhereUniqueWithoutForumInput = {
    where: ForumCommentWhereUniqueInput
    update: XOR<ForumCommentUpdateWithoutForumInput, ForumCommentUncheckedUpdateWithoutForumInput>
    create: XOR<ForumCommentCreateWithoutForumInput, ForumCommentUncheckedCreateWithoutForumInput>
  }

  export type ForumCommentUpdateWithWhereUniqueWithoutForumInput = {
    where: ForumCommentWhereUniqueInput
    data: XOR<ForumCommentUpdateWithoutForumInput, ForumCommentUncheckedUpdateWithoutForumInput>
  }

  export type ForumCommentUpdateManyWithWhereWithoutForumInput = {
    where: ForumCommentScalarWhereInput
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyWithoutForumInput>
  }

  export type ForumCreateWithoutForumTagInput = {
    title: string
    description: string
    image?: string | null
    created_at?: Date | string
    User: UserCreateNestedOneWithoutForumInput
    ForumComment?: ForumCommentCreateNestedManyWithoutForumInput
  }

  export type ForumUncheckedCreateWithoutForumTagInput = {
    id?: number
    user_id: number
    title: string
    description: string
    image?: string | null
    created_at?: Date | string
    ForumComment?: ForumCommentUncheckedCreateNestedManyWithoutForumInput
  }

  export type ForumCreateOrConnectWithoutForumTagInput = {
    where: ForumWhereUniqueInput
    create: XOR<ForumCreateWithoutForumTagInput, ForumUncheckedCreateWithoutForumTagInput>
  }

  export type ForumUpsertWithoutForumTagInput = {
    update: XOR<ForumUpdateWithoutForumTagInput, ForumUncheckedUpdateWithoutForumTagInput>
    create: XOR<ForumCreateWithoutForumTagInput, ForumUncheckedCreateWithoutForumTagInput>
    where?: ForumWhereInput
  }

  export type ForumUpdateToOneWithWhereWithoutForumTagInput = {
    where?: ForumWhereInput
    data: XOR<ForumUpdateWithoutForumTagInput, ForumUncheckedUpdateWithoutForumTagInput>
  }

  export type ForumUpdateWithoutForumTagInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutForumNestedInput
    ForumComment?: ForumCommentUpdateManyWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateWithoutForumTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ForumComment?: ForumCommentUncheckedUpdateManyWithoutForumNestedInput
  }

  export type ForumCreateWithoutForumCommentInput = {
    title: string
    description: string
    image?: string | null
    created_at?: Date | string
    User: UserCreateNestedOneWithoutForumInput
    ForumTag?: ForumTagCreateNestedManyWithoutForumInput
  }

  export type ForumUncheckedCreateWithoutForumCommentInput = {
    id?: number
    user_id: number
    title: string
    description: string
    image?: string | null
    created_at?: Date | string
    ForumTag?: ForumTagUncheckedCreateNestedManyWithoutForumInput
  }

  export type ForumCreateOrConnectWithoutForumCommentInput = {
    where: ForumWhereUniqueInput
    create: XOR<ForumCreateWithoutForumCommentInput, ForumUncheckedCreateWithoutForumCommentInput>
  }

  export type UserCreateWithoutForumCommentInput = {
    user_name: string
    user_password: string
    user_email: string
    user_role: string
    created_at?: Date | string
    ChatSession?: ChatSessionCreateNestedManyWithoutUserInput
    Forum?: ForumCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutForumCommentInput = {
    id?: number
    user_name: string
    user_password: string
    user_email: string
    user_role: string
    created_at?: Date | string
    ChatSession?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    Forum?: ForumUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutForumCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutForumCommentInput, UserUncheckedCreateWithoutForumCommentInput>
  }

  export type ForumUpsertWithoutForumCommentInput = {
    update: XOR<ForumUpdateWithoutForumCommentInput, ForumUncheckedUpdateWithoutForumCommentInput>
    create: XOR<ForumCreateWithoutForumCommentInput, ForumUncheckedCreateWithoutForumCommentInput>
    where?: ForumWhereInput
  }

  export type ForumUpdateToOneWithWhereWithoutForumCommentInput = {
    where?: ForumWhereInput
    data: XOR<ForumUpdateWithoutForumCommentInput, ForumUncheckedUpdateWithoutForumCommentInput>
  }

  export type ForumUpdateWithoutForumCommentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutForumNestedInput
    ForumTag?: ForumTagUpdateManyWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateWithoutForumCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ForumTag?: ForumTagUncheckedUpdateManyWithoutForumNestedInput
  }

  export type UserUpsertWithoutForumCommentInput = {
    update: XOR<UserUpdateWithoutForumCommentInput, UserUncheckedUpdateWithoutForumCommentInput>
    create: XOR<UserCreateWithoutForumCommentInput, UserUncheckedCreateWithoutForumCommentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutForumCommentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutForumCommentInput, UserUncheckedUpdateWithoutForumCommentInput>
  }

  export type UserUpdateWithoutForumCommentInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatSession?: ChatSessionUpdateManyWithoutUserNestedInput
    Forum?: ForumUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutForumCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatSession?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    Forum?: ForumUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatSessionCreateManyUserInput = {
    id?: number
    monetary_appeal?: string | null
    urgency?: string | null
    created_at?: Date | string
  }

  export type ForumCreateManyUserInput = {
    id?: number
    title: string
    description: string
    image?: string | null
    created_at?: Date | string
  }

  export type ForumCommentCreateManyUserInput = {
    id?: number
    forum_id: number
    text: string
    upvote?: number
    downvote?: number
    created_at?: Date | string
  }

  export type ChatSessionUpdateWithoutUserInput = {
    monetary_appeal?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatMessage?: ChatMessageUpdateManyWithoutChatSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    monetary_appeal?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutChatSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    monetary_appeal?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ForumTag?: ForumTagUpdateManyWithoutForumNestedInput
    ForumComment?: ForumCommentUpdateManyWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ForumTag?: ForumTagUncheckedUpdateManyWithoutForumNestedInput
    ForumComment?: ForumCommentUncheckedUpdateManyWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumCommentUpdateWithoutUserInput = {
    text?: StringFieldUpdateOperationsInput | string
    upvote?: IntFieldUpdateOperationsInput | number
    downvote?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Forum?: ForumUpdateOneRequiredWithoutForumCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    forum_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    upvote?: IntFieldUpdateOperationsInput | number
    downvote?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumCommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    forum_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    upvote?: IntFieldUpdateOperationsInput | number
    downvote?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyChatSessionInput = {
    id?: number
    text: string
    created_at?: Date | string
  }

  export type ChatMessageUpdateWithoutChatSessionInput = {
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateWithoutChatSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumTagCreateManyForumInput = {
    id?: number
    tag_id: number
  }

  export type ForumCommentCreateManyForumInput = {
    id?: number
    user_id: number
    text: string
    upvote?: number
    downvote?: number
    created_at?: Date | string
  }

  export type ForumTagUpdateWithoutForumInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type ForumTagUncheckedUpdateWithoutForumInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type ForumTagUncheckedUpdateManyWithoutForumInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentUpdateWithoutForumInput = {
    text?: StringFieldUpdateOperationsInput | string
    upvote?: IntFieldUpdateOperationsInput | number
    downvote?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutForumCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateWithoutForumInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    upvote?: IntFieldUpdateOperationsInput | number
    downvote?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumCommentUncheckedUpdateManyWithoutForumInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    upvote?: IntFieldUpdateOperationsInput | number
    downvote?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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