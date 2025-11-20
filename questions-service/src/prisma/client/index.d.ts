
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
 * Model areas
 * 
 */
export type areas = $Result.DefaultSelection<Prisma.$areasPayload>
/**
 * Model difficulty
 * 
 */
export type difficulty = $Result.DefaultSelection<Prisma.$difficultyPayload>
/**
 * Model question_images
 * 
 */
export type question_images = $Result.DefaultSelection<Prisma.$question_imagesPayload>
/**
 * Model question_options
 * 
 */
export type question_options = $Result.DefaultSelection<Prisma.$question_optionsPayload>
/**
 * Model question_references
 * 
 */
export type question_references = $Result.DefaultSelection<Prisma.$question_referencesPayload>
/**
 * Model question_types
 * 
 */
export type question_types = $Result.DefaultSelection<Prisma.$question_typesPayload>
/**
 * Model questions
 * 
 */
export type questions = $Result.DefaultSelection<Prisma.$questionsPayload>
/**
 * Model responses
 * 
 */
export type responses = $Result.DefaultSelection<Prisma.$responsesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Areas
 * const areas = await prisma.areas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Areas
   * const areas = await prisma.areas.findMany()
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
   * `prisma.areas`: Exposes CRUD operations for the **areas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.areas.findMany()
    * ```
    */
  get areas(): Prisma.areasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.difficulty`: Exposes CRUD operations for the **difficulty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Difficulties
    * const difficulties = await prisma.difficulty.findMany()
    * ```
    */
  get difficulty(): Prisma.difficultyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question_images`: Exposes CRUD operations for the **question_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Question_images
    * const question_images = await prisma.question_images.findMany()
    * ```
    */
  get question_images(): Prisma.question_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question_options`: Exposes CRUD operations for the **question_options** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Question_options
    * const question_options = await prisma.question_options.findMany()
    * ```
    */
  get question_options(): Prisma.question_optionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question_references`: Exposes CRUD operations for the **question_references** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Question_references
    * const question_references = await prisma.question_references.findMany()
    * ```
    */
  get question_references(): Prisma.question_referencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question_types`: Exposes CRUD operations for the **question_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Question_types
    * const question_types = await prisma.question_types.findMany()
    * ```
    */
  get question_types(): Prisma.question_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.questionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.responses`: Exposes CRUD operations for the **responses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Responses
    * const responses = await prisma.responses.findMany()
    * ```
    */
  get responses(): Prisma.responsesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    areas: 'areas',
    difficulty: 'difficulty',
    question_images: 'question_images',
    question_options: 'question_options',
    question_references: 'question_references',
    question_types: 'question_types',
    questions: 'questions',
    responses: 'responses'
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
      modelProps: "areas" | "difficulty" | "question_images" | "question_options" | "question_references" | "question_types" | "questions" | "responses"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      areas: {
        payload: Prisma.$areasPayload<ExtArgs>
        fields: Prisma.areasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.areasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.areasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>
          }
          findFirst: {
            args: Prisma.areasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.areasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>
          }
          findMany: {
            args: Prisma.areasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>[]
          }
          create: {
            args: Prisma.areasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>
          }
          createMany: {
            args: Prisma.areasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.areasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>[]
          }
          delete: {
            args: Prisma.areasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>
          }
          update: {
            args: Prisma.areasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>
          }
          deleteMany: {
            args: Prisma.areasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.areasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.areasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>[]
          }
          upsert: {
            args: Prisma.areasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>
          }
          aggregate: {
            args: Prisma.AreasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAreas>
          }
          groupBy: {
            args: Prisma.areasGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreasGroupByOutputType>[]
          }
          count: {
            args: Prisma.areasCountArgs<ExtArgs>
            result: $Utils.Optional<AreasCountAggregateOutputType> | number
          }
        }
      }
      difficulty: {
        payload: Prisma.$difficultyPayload<ExtArgs>
        fields: Prisma.difficultyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.difficultyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$difficultyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.difficultyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$difficultyPayload>
          }
          findFirst: {
            args: Prisma.difficultyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$difficultyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.difficultyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$difficultyPayload>
          }
          findMany: {
            args: Prisma.difficultyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$difficultyPayload>[]
          }
          create: {
            args: Prisma.difficultyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$difficultyPayload>
          }
          createMany: {
            args: Prisma.difficultyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.difficultyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$difficultyPayload>[]
          }
          delete: {
            args: Prisma.difficultyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$difficultyPayload>
          }
          update: {
            args: Prisma.difficultyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$difficultyPayload>
          }
          deleteMany: {
            args: Prisma.difficultyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.difficultyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.difficultyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$difficultyPayload>[]
          }
          upsert: {
            args: Prisma.difficultyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$difficultyPayload>
          }
          aggregate: {
            args: Prisma.DifficultyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDifficulty>
          }
          groupBy: {
            args: Prisma.difficultyGroupByArgs<ExtArgs>
            result: $Utils.Optional<DifficultyGroupByOutputType>[]
          }
          count: {
            args: Prisma.difficultyCountArgs<ExtArgs>
            result: $Utils.Optional<DifficultyCountAggregateOutputType> | number
          }
        }
      }
      question_images: {
        payload: Prisma.$question_imagesPayload<ExtArgs>
        fields: Prisma.question_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.question_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.question_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_imagesPayload>
          }
          findFirst: {
            args: Prisma.question_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.question_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_imagesPayload>
          }
          findMany: {
            args: Prisma.question_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_imagesPayload>[]
          }
          create: {
            args: Prisma.question_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_imagesPayload>
          }
          createMany: {
            args: Prisma.question_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.question_imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_imagesPayload>[]
          }
          delete: {
            args: Prisma.question_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_imagesPayload>
          }
          update: {
            args: Prisma.question_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_imagesPayload>
          }
          deleteMany: {
            args: Prisma.question_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.question_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.question_imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_imagesPayload>[]
          }
          upsert: {
            args: Prisma.question_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_imagesPayload>
          }
          aggregate: {
            args: Prisma.Question_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion_images>
          }
          groupBy: {
            args: Prisma.question_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Question_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.question_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Question_imagesCountAggregateOutputType> | number
          }
        }
      }
      question_options: {
        payload: Prisma.$question_optionsPayload<ExtArgs>
        fields: Prisma.question_optionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.question_optionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_optionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.question_optionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_optionsPayload>
          }
          findFirst: {
            args: Prisma.question_optionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_optionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.question_optionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_optionsPayload>
          }
          findMany: {
            args: Prisma.question_optionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_optionsPayload>[]
          }
          create: {
            args: Prisma.question_optionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_optionsPayload>
          }
          createMany: {
            args: Prisma.question_optionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.question_optionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_optionsPayload>[]
          }
          delete: {
            args: Prisma.question_optionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_optionsPayload>
          }
          update: {
            args: Prisma.question_optionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_optionsPayload>
          }
          deleteMany: {
            args: Prisma.question_optionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.question_optionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.question_optionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_optionsPayload>[]
          }
          upsert: {
            args: Prisma.question_optionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_optionsPayload>
          }
          aggregate: {
            args: Prisma.Question_optionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion_options>
          }
          groupBy: {
            args: Prisma.question_optionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Question_optionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.question_optionsCountArgs<ExtArgs>
            result: $Utils.Optional<Question_optionsCountAggregateOutputType> | number
          }
        }
      }
      question_references: {
        payload: Prisma.$question_referencesPayload<ExtArgs>
        fields: Prisma.question_referencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.question_referencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_referencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.question_referencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_referencesPayload>
          }
          findFirst: {
            args: Prisma.question_referencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_referencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.question_referencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_referencesPayload>
          }
          findMany: {
            args: Prisma.question_referencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_referencesPayload>[]
          }
          create: {
            args: Prisma.question_referencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_referencesPayload>
          }
          createMany: {
            args: Prisma.question_referencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.question_referencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_referencesPayload>[]
          }
          delete: {
            args: Prisma.question_referencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_referencesPayload>
          }
          update: {
            args: Prisma.question_referencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_referencesPayload>
          }
          deleteMany: {
            args: Prisma.question_referencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.question_referencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.question_referencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_referencesPayload>[]
          }
          upsert: {
            args: Prisma.question_referencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_referencesPayload>
          }
          aggregate: {
            args: Prisma.Question_referencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion_references>
          }
          groupBy: {
            args: Prisma.question_referencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Question_referencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.question_referencesCountArgs<ExtArgs>
            result: $Utils.Optional<Question_referencesCountAggregateOutputType> | number
          }
        }
      }
      question_types: {
        payload: Prisma.$question_typesPayload<ExtArgs>
        fields: Prisma.question_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.question_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.question_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_typesPayload>
          }
          findFirst: {
            args: Prisma.question_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.question_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_typesPayload>
          }
          findMany: {
            args: Prisma.question_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_typesPayload>[]
          }
          create: {
            args: Prisma.question_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_typesPayload>
          }
          createMany: {
            args: Prisma.question_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.question_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_typesPayload>[]
          }
          delete: {
            args: Prisma.question_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_typesPayload>
          }
          update: {
            args: Prisma.question_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_typesPayload>
          }
          deleteMany: {
            args: Prisma.question_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.question_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.question_typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_typesPayload>[]
          }
          upsert: {
            args: Prisma.question_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$question_typesPayload>
          }
          aggregate: {
            args: Prisma.Question_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion_types>
          }
          groupBy: {
            args: Prisma.question_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Question_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.question_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Question_typesCountAggregateOutputType> | number
          }
        }
      }
      questions: {
        payload: Prisma.$questionsPayload<ExtArgs>
        fields: Prisma.questionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findFirst: {
            args: Prisma.questionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findMany: {
            args: Prisma.questionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          create: {
            args: Prisma.questionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          createMany: {
            args: Prisma.questionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.questionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          delete: {
            args: Prisma.questionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          update: {
            args: Prisma.questionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          deleteMany: {
            args: Prisma.questionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.questionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          upsert: {
            args: Prisma.questionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.questionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.questionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
      responses: {
        payload: Prisma.$responsesPayload<ExtArgs>
        fields: Prisma.responsesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.responsesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$responsesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.responsesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$responsesPayload>
          }
          findFirst: {
            args: Prisma.responsesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$responsesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.responsesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$responsesPayload>
          }
          findMany: {
            args: Prisma.responsesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$responsesPayload>[]
          }
          create: {
            args: Prisma.responsesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$responsesPayload>
          }
          createMany: {
            args: Prisma.responsesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.responsesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$responsesPayload>[]
          }
          delete: {
            args: Prisma.responsesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$responsesPayload>
          }
          update: {
            args: Prisma.responsesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$responsesPayload>
          }
          deleteMany: {
            args: Prisma.responsesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.responsesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.responsesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$responsesPayload>[]
          }
          upsert: {
            args: Prisma.responsesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$responsesPayload>
          }
          aggregate: {
            args: Prisma.ResponsesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResponses>
          }
          groupBy: {
            args: Prisma.responsesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResponsesGroupByOutputType>[]
          }
          count: {
            args: Prisma.responsesCountArgs<ExtArgs>
            result: $Utils.Optional<ResponsesCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    areas?: areasOmit
    difficulty?: difficultyOmit
    question_images?: question_imagesOmit
    question_options?: question_optionsOmit
    question_references?: question_referencesOmit
    question_types?: question_typesOmit
    questions?: questionsOmit
    responses?: responsesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type AreasCountOutputType
   */

  export type AreasCountOutputType = {
    other_areas: number
    questions: number
  }

  export type AreasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_areas?: boolean | AreasCountOutputTypeCountOther_areasArgs
    questions?: boolean | AreasCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * AreasCountOutputType without action
   */
  export type AreasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasCountOutputType
     */
    select?: AreasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreasCountOutputType without action
   */
  export type AreasCountOutputTypeCountOther_areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: areasWhereInput
  }

  /**
   * AreasCountOutputType without action
   */
  export type AreasCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
  }


  /**
   * Count Type DifficultyCountOutputType
   */

  export type DifficultyCountOutputType = {
    questions: number
  }

  export type DifficultyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | DifficultyCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * DifficultyCountOutputType without action
   */
  export type DifficultyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DifficultyCountOutputType
     */
    select?: DifficultyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DifficultyCountOutputType without action
   */
  export type DifficultyCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
  }


  /**
   * Count Type Question_typesCountOutputType
   */

  export type Question_typesCountOutputType = {
    questions: number
  }

  export type Question_typesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Question_typesCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * Question_typesCountOutputType without action
   */
  export type Question_typesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_typesCountOutputType
     */
    select?: Question_typesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Question_typesCountOutputType without action
   */
  export type Question_typesCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
  }


  /**
   * Count Type QuestionsCountOutputType
   */

  export type QuestionsCountOutputType = {
    question_images: number
    question_options: number
    question_references: number
    responses: number
  }

  export type QuestionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question_images?: boolean | QuestionsCountOutputTypeCountQuestion_imagesArgs
    question_options?: boolean | QuestionsCountOutputTypeCountQuestion_optionsArgs
    question_references?: boolean | QuestionsCountOutputTypeCountQuestion_referencesArgs
    responses?: boolean | QuestionsCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionsCountOutputType
     */
    select?: QuestionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountQuestion_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: question_imagesWhereInput
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountQuestion_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: question_optionsWhereInput
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountQuestion_referencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: question_referencesWhereInput
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: responsesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model areas
   */

  export type AggregateAreas = {
    _count: AreasCountAggregateOutputType | null
    _avg: AreasAvgAggregateOutputType | null
    _sum: AreasSumAggregateOutputType | null
    _min: AreasMinAggregateOutputType | null
    _max: AreasMaxAggregateOutputType | null
  }

  export type AreasAvgAggregateOutputType = {
    id: number | null
    parentAreaID: number | null
  }

  export type AreasSumAggregateOutputType = {
    id: number | null
    parentAreaID: number | null
  }

  export type AreasMinAggregateOutputType = {
    id: number | null
    name: string | null
    parentAreaID: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AreasMaxAggregateOutputType = {
    id: number | null
    name: string | null
    parentAreaID: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AreasCountAggregateOutputType = {
    id: number
    name: number
    parentAreaID: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AreasAvgAggregateInputType = {
    id?: true
    parentAreaID?: true
  }

  export type AreasSumAggregateInputType = {
    id?: true
    parentAreaID?: true
  }

  export type AreasMinAggregateInputType = {
    id?: true
    name?: true
    parentAreaID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AreasMaxAggregateInputType = {
    id?: true
    name?: true
    parentAreaID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AreasCountAggregateInputType = {
    id?: true
    name?: true
    parentAreaID?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AreasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which areas to aggregate.
     */
    where?: areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areasOrderByWithRelationInput | areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned areas
    **/
    _count?: true | AreasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreasMaxAggregateInputType
  }

  export type GetAreasAggregateType<T extends AreasAggregateArgs> = {
        [P in keyof T & keyof AggregateAreas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAreas[P]>
      : GetScalarType<T[P], AggregateAreas[P]>
  }




  export type areasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: areasWhereInput
    orderBy?: areasOrderByWithAggregationInput | areasOrderByWithAggregationInput[]
    by: AreasScalarFieldEnum[] | AreasScalarFieldEnum
    having?: areasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreasCountAggregateInputType | true
    _avg?: AreasAvgAggregateInputType
    _sum?: AreasSumAggregateInputType
    _min?: AreasMinAggregateInputType
    _max?: AreasMaxAggregateInputType
  }

  export type AreasGroupByOutputType = {
    id: number
    name: string
    parentAreaID: number | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: AreasCountAggregateOutputType | null
    _avg: AreasAvgAggregateOutputType | null
    _sum: AreasSumAggregateOutputType | null
    _min: AreasMinAggregateOutputType | null
    _max: AreasMaxAggregateOutputType | null
  }

  type GetAreasGroupByPayload<T extends areasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreasGroupByOutputType[P]>
            : GetScalarType<T[P], AreasGroupByOutputType[P]>
        }
      >
    >


  export type areasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentAreaID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    areas?: boolean | areas$areasArgs<ExtArgs>
    other_areas?: boolean | areas$other_areasArgs<ExtArgs>
    questions?: boolean | areas$questionsArgs<ExtArgs>
    _count?: boolean | AreasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["areas"]>

  export type areasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentAreaID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    areas?: boolean | areas$areasArgs<ExtArgs>
  }, ExtArgs["result"]["areas"]>

  export type areasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentAreaID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    areas?: boolean | areas$areasArgs<ExtArgs>
  }, ExtArgs["result"]["areas"]>

  export type areasSelectScalar = {
    id?: boolean
    name?: boolean
    parentAreaID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type areasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "parentAreaID" | "createdAt" | "updatedAt", ExtArgs["result"]["areas"]>
  export type areasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | areas$areasArgs<ExtArgs>
    other_areas?: boolean | areas$other_areasArgs<ExtArgs>
    questions?: boolean | areas$questionsArgs<ExtArgs>
    _count?: boolean | AreasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type areasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | areas$areasArgs<ExtArgs>
  }
  export type areasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | areas$areasArgs<ExtArgs>
  }

  export type $areasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "areas"
    objects: {
      areas: Prisma.$areasPayload<ExtArgs> | null
      other_areas: Prisma.$areasPayload<ExtArgs>[]
      questions: Prisma.$questionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      parentAreaID: number | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["areas"]>
    composites: {}
  }

  type areasGetPayload<S extends boolean | null | undefined | areasDefaultArgs> = $Result.GetResult<Prisma.$areasPayload, S>

  type areasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<areasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreasCountAggregateInputType | true
    }

  export interface areasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['areas'], meta: { name: 'areas' } }
    /**
     * Find zero or one Areas that matches the filter.
     * @param {areasFindUniqueArgs} args - Arguments to find a Areas
     * @example
     * // Get one Areas
     * const areas = await prisma.areas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends areasFindUniqueArgs>(args: SelectSubset<T, areasFindUniqueArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Areas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {areasFindUniqueOrThrowArgs} args - Arguments to find a Areas
     * @example
     * // Get one Areas
     * const areas = await prisma.areas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends areasFindUniqueOrThrowArgs>(args: SelectSubset<T, areasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areasFindFirstArgs} args - Arguments to find a Areas
     * @example
     * // Get one Areas
     * const areas = await prisma.areas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends areasFindFirstArgs>(args?: SelectSubset<T, areasFindFirstArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Areas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areasFindFirstOrThrowArgs} args - Arguments to find a Areas
     * @example
     * // Get one Areas
     * const areas = await prisma.areas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends areasFindFirstOrThrowArgs>(args?: SelectSubset<T, areasFindFirstOrThrowArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.areas.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.areas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areasWithIdOnly = await prisma.areas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends areasFindManyArgs>(args?: SelectSubset<T, areasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Areas.
     * @param {areasCreateArgs} args - Arguments to create a Areas.
     * @example
     * // Create one Areas
     * const Areas = await prisma.areas.create({
     *   data: {
     *     // ... data to create a Areas
     *   }
     * })
     * 
     */
    create<T extends areasCreateArgs>(args: SelectSubset<T, areasCreateArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {areasCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const areas = await prisma.areas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends areasCreateManyArgs>(args?: SelectSubset<T, areasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Areas and returns the data saved in the database.
     * @param {areasCreateManyAndReturnArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const areas = await prisma.areas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Areas and only return the `id`
     * const areasWithIdOnly = await prisma.areas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends areasCreateManyAndReturnArgs>(args?: SelectSubset<T, areasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Areas.
     * @param {areasDeleteArgs} args - Arguments to delete one Areas.
     * @example
     * // Delete one Areas
     * const Areas = await prisma.areas.delete({
     *   where: {
     *     // ... filter to delete one Areas
     *   }
     * })
     * 
     */
    delete<T extends areasDeleteArgs>(args: SelectSubset<T, areasDeleteArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Areas.
     * @param {areasUpdateArgs} args - Arguments to update one Areas.
     * @example
     * // Update one Areas
     * const areas = await prisma.areas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends areasUpdateArgs>(args: SelectSubset<T, areasUpdateArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {areasDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.areas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends areasDeleteManyArgs>(args?: SelectSubset<T, areasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const areas = await prisma.areas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends areasUpdateManyArgs>(args: SelectSubset<T, areasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas and returns the data updated in the database.
     * @param {areasUpdateManyAndReturnArgs} args - Arguments to update many Areas.
     * @example
     * // Update many Areas
     * const areas = await prisma.areas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Areas and only return the `id`
     * const areasWithIdOnly = await prisma.areas.updateManyAndReturn({
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
    updateManyAndReturn<T extends areasUpdateManyAndReturnArgs>(args: SelectSubset<T, areasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Areas.
     * @param {areasUpsertArgs} args - Arguments to update or create a Areas.
     * @example
     * // Update or create a Areas
     * const areas = await prisma.areas.upsert({
     *   create: {
     *     // ... data to create a Areas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Areas we want to update
     *   }
     * })
     */
    upsert<T extends areasUpsertArgs>(args: SelectSubset<T, areasUpsertArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areasCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.areas.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends areasCountArgs>(
      args?: Subset<T, areasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AreasAggregateArgs>(args: Subset<T, AreasAggregateArgs>): Prisma.PrismaPromise<GetAreasAggregateType<T>>

    /**
     * Group by Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areasGroupByArgs} args - Group by arguments.
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
      T extends areasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: areasGroupByArgs['orderBy'] }
        : { orderBy?: areasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, areasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the areas model
   */
  readonly fields: areasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for areas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__areasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    areas<T extends areas$areasArgs<ExtArgs> = {}>(args?: Subset<T, areas$areasArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_areas<T extends areas$other_areasArgs<ExtArgs> = {}>(args?: Subset<T, areas$other_areasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends areas$questionsArgs<ExtArgs> = {}>(args?: Subset<T, areas$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the areas model
   */
  interface areasFieldRefs {
    readonly id: FieldRef<"areas", 'Int'>
    readonly name: FieldRef<"areas", 'String'>
    readonly parentAreaID: FieldRef<"areas", 'Int'>
    readonly createdAt: FieldRef<"areas", 'DateTime'>
    readonly updatedAt: FieldRef<"areas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * areas findUnique
   */
  export type areasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasInclude<ExtArgs> | null
    /**
     * Filter, which areas to fetch.
     */
    where: areasWhereUniqueInput
  }

  /**
   * areas findUniqueOrThrow
   */
  export type areasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasInclude<ExtArgs> | null
    /**
     * Filter, which areas to fetch.
     */
    where: areasWhereUniqueInput
  }

  /**
   * areas findFirst
   */
  export type areasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasInclude<ExtArgs> | null
    /**
     * Filter, which areas to fetch.
     */
    where?: areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areasOrderByWithRelationInput | areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for areas.
     */
    cursor?: areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of areas.
     */
    distinct?: AreasScalarFieldEnum | AreasScalarFieldEnum[]
  }

  /**
   * areas findFirstOrThrow
   */
  export type areasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasInclude<ExtArgs> | null
    /**
     * Filter, which areas to fetch.
     */
    where?: areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areasOrderByWithRelationInput | areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for areas.
     */
    cursor?: areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of areas.
     */
    distinct?: AreasScalarFieldEnum | AreasScalarFieldEnum[]
  }

  /**
   * areas findMany
   */
  export type areasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasInclude<ExtArgs> | null
    /**
     * Filter, which areas to fetch.
     */
    where?: areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areasOrderByWithRelationInput | areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing areas.
     */
    cursor?: areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    distinct?: AreasScalarFieldEnum | AreasScalarFieldEnum[]
  }

  /**
   * areas create
   */
  export type areasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasInclude<ExtArgs> | null
    /**
     * The data needed to create a areas.
     */
    data: XOR<areasCreateInput, areasUncheckedCreateInput>
  }

  /**
   * areas createMany
   */
  export type areasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many areas.
     */
    data: areasCreateManyInput | areasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * areas createManyAndReturn
   */
  export type areasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * The data used to create many areas.
     */
    data: areasCreateManyInput | areasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * areas update
   */
  export type areasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasInclude<ExtArgs> | null
    /**
     * The data needed to update a areas.
     */
    data: XOR<areasUpdateInput, areasUncheckedUpdateInput>
    /**
     * Choose, which areas to update.
     */
    where: areasWhereUniqueInput
  }

  /**
   * areas updateMany
   */
  export type areasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update areas.
     */
    data: XOR<areasUpdateManyMutationInput, areasUncheckedUpdateManyInput>
    /**
     * Filter which areas to update
     */
    where?: areasWhereInput
    /**
     * Limit how many areas to update.
     */
    limit?: number
  }

  /**
   * areas updateManyAndReturn
   */
  export type areasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * The data used to update areas.
     */
    data: XOR<areasUpdateManyMutationInput, areasUncheckedUpdateManyInput>
    /**
     * Filter which areas to update
     */
    where?: areasWhereInput
    /**
     * Limit how many areas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * areas upsert
   */
  export type areasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasInclude<ExtArgs> | null
    /**
     * The filter to search for the areas to update in case it exists.
     */
    where: areasWhereUniqueInput
    /**
     * In case the areas found by the `where` argument doesn't exist, create a new areas with this data.
     */
    create: XOR<areasCreateInput, areasUncheckedCreateInput>
    /**
     * In case the areas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<areasUpdateInput, areasUncheckedUpdateInput>
  }

  /**
   * areas delete
   */
  export type areasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasInclude<ExtArgs> | null
    /**
     * Filter which areas to delete.
     */
    where: areasWhereUniqueInput
  }

  /**
   * areas deleteMany
   */
  export type areasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which areas to delete
     */
    where?: areasWhereInput
    /**
     * Limit how many areas to delete.
     */
    limit?: number
  }

  /**
   * areas.areas
   */
  export type areas$areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasInclude<ExtArgs> | null
    where?: areasWhereInput
  }

  /**
   * areas.other_areas
   */
  export type areas$other_areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasInclude<ExtArgs> | null
    where?: areasWhereInput
    orderBy?: areasOrderByWithRelationInput | areasOrderByWithRelationInput[]
    cursor?: areasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreasScalarFieldEnum | AreasScalarFieldEnum[]
  }

  /**
   * areas.questions
   */
  export type areas$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    cursor?: questionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * areas without action
   */
  export type areasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasInclude<ExtArgs> | null
  }


  /**
   * Model difficulty
   */

  export type AggregateDifficulty = {
    _count: DifficultyCountAggregateOutputType | null
    _avg: DifficultyAvgAggregateOutputType | null
    _sum: DifficultySumAggregateOutputType | null
    _min: DifficultyMinAggregateOutputType | null
    _max: DifficultyMaxAggregateOutputType | null
  }

  export type DifficultyAvgAggregateOutputType = {
    id: number | null
  }

  export type DifficultySumAggregateOutputType = {
    id: number | null
  }

  export type DifficultyMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DifficultyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DifficultyCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DifficultyAvgAggregateInputType = {
    id?: true
  }

  export type DifficultySumAggregateInputType = {
    id?: true
  }

  export type DifficultyMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DifficultyMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DifficultyCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DifficultyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which difficulty to aggregate.
     */
    where?: difficultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of difficulties to fetch.
     */
    orderBy?: difficultyOrderByWithRelationInput | difficultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: difficultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` difficulties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` difficulties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned difficulties
    **/
    _count?: true | DifficultyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DifficultyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DifficultySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DifficultyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DifficultyMaxAggregateInputType
  }

  export type GetDifficultyAggregateType<T extends DifficultyAggregateArgs> = {
        [P in keyof T & keyof AggregateDifficulty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDifficulty[P]>
      : GetScalarType<T[P], AggregateDifficulty[P]>
  }




  export type difficultyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: difficultyWhereInput
    orderBy?: difficultyOrderByWithAggregationInput | difficultyOrderByWithAggregationInput[]
    by: DifficultyScalarFieldEnum[] | DifficultyScalarFieldEnum
    having?: difficultyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DifficultyCountAggregateInputType | true
    _avg?: DifficultyAvgAggregateInputType
    _sum?: DifficultySumAggregateInputType
    _min?: DifficultyMinAggregateInputType
    _max?: DifficultyMaxAggregateInputType
  }

  export type DifficultyGroupByOutputType = {
    id: number
    name: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: DifficultyCountAggregateOutputType | null
    _avg: DifficultyAvgAggregateOutputType | null
    _sum: DifficultySumAggregateOutputType | null
    _min: DifficultyMinAggregateOutputType | null
    _max: DifficultyMaxAggregateOutputType | null
  }

  type GetDifficultyGroupByPayload<T extends difficultyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DifficultyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DifficultyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DifficultyGroupByOutputType[P]>
            : GetScalarType<T[P], DifficultyGroupByOutputType[P]>
        }
      >
    >


  export type difficultySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | difficulty$questionsArgs<ExtArgs>
    _count?: boolean | DifficultyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["difficulty"]>

  export type difficultySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["difficulty"]>

  export type difficultySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["difficulty"]>

  export type difficultySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type difficultyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["difficulty"]>
  export type difficultyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | difficulty$questionsArgs<ExtArgs>
    _count?: boolean | DifficultyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type difficultyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type difficultyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $difficultyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "difficulty"
    objects: {
      questions: Prisma.$questionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["difficulty"]>
    composites: {}
  }

  type difficultyGetPayload<S extends boolean | null | undefined | difficultyDefaultArgs> = $Result.GetResult<Prisma.$difficultyPayload, S>

  type difficultyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<difficultyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DifficultyCountAggregateInputType | true
    }

  export interface difficultyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['difficulty'], meta: { name: 'difficulty' } }
    /**
     * Find zero or one Difficulty that matches the filter.
     * @param {difficultyFindUniqueArgs} args - Arguments to find a Difficulty
     * @example
     * // Get one Difficulty
     * const difficulty = await prisma.difficulty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends difficultyFindUniqueArgs>(args: SelectSubset<T, difficultyFindUniqueArgs<ExtArgs>>): Prisma__difficultyClient<$Result.GetResult<Prisma.$difficultyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Difficulty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {difficultyFindUniqueOrThrowArgs} args - Arguments to find a Difficulty
     * @example
     * // Get one Difficulty
     * const difficulty = await prisma.difficulty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends difficultyFindUniqueOrThrowArgs>(args: SelectSubset<T, difficultyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__difficultyClient<$Result.GetResult<Prisma.$difficultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Difficulty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {difficultyFindFirstArgs} args - Arguments to find a Difficulty
     * @example
     * // Get one Difficulty
     * const difficulty = await prisma.difficulty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends difficultyFindFirstArgs>(args?: SelectSubset<T, difficultyFindFirstArgs<ExtArgs>>): Prisma__difficultyClient<$Result.GetResult<Prisma.$difficultyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Difficulty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {difficultyFindFirstOrThrowArgs} args - Arguments to find a Difficulty
     * @example
     * // Get one Difficulty
     * const difficulty = await prisma.difficulty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends difficultyFindFirstOrThrowArgs>(args?: SelectSubset<T, difficultyFindFirstOrThrowArgs<ExtArgs>>): Prisma__difficultyClient<$Result.GetResult<Prisma.$difficultyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Difficulties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {difficultyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Difficulties
     * const difficulties = await prisma.difficulty.findMany()
     * 
     * // Get first 10 Difficulties
     * const difficulties = await prisma.difficulty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const difficultyWithIdOnly = await prisma.difficulty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends difficultyFindManyArgs>(args?: SelectSubset<T, difficultyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$difficultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Difficulty.
     * @param {difficultyCreateArgs} args - Arguments to create a Difficulty.
     * @example
     * // Create one Difficulty
     * const Difficulty = await prisma.difficulty.create({
     *   data: {
     *     // ... data to create a Difficulty
     *   }
     * })
     * 
     */
    create<T extends difficultyCreateArgs>(args: SelectSubset<T, difficultyCreateArgs<ExtArgs>>): Prisma__difficultyClient<$Result.GetResult<Prisma.$difficultyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Difficulties.
     * @param {difficultyCreateManyArgs} args - Arguments to create many Difficulties.
     * @example
     * // Create many Difficulties
     * const difficulty = await prisma.difficulty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends difficultyCreateManyArgs>(args?: SelectSubset<T, difficultyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Difficulties and returns the data saved in the database.
     * @param {difficultyCreateManyAndReturnArgs} args - Arguments to create many Difficulties.
     * @example
     * // Create many Difficulties
     * const difficulty = await prisma.difficulty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Difficulties and only return the `id`
     * const difficultyWithIdOnly = await prisma.difficulty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends difficultyCreateManyAndReturnArgs>(args?: SelectSubset<T, difficultyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$difficultyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Difficulty.
     * @param {difficultyDeleteArgs} args - Arguments to delete one Difficulty.
     * @example
     * // Delete one Difficulty
     * const Difficulty = await prisma.difficulty.delete({
     *   where: {
     *     // ... filter to delete one Difficulty
     *   }
     * })
     * 
     */
    delete<T extends difficultyDeleteArgs>(args: SelectSubset<T, difficultyDeleteArgs<ExtArgs>>): Prisma__difficultyClient<$Result.GetResult<Prisma.$difficultyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Difficulty.
     * @param {difficultyUpdateArgs} args - Arguments to update one Difficulty.
     * @example
     * // Update one Difficulty
     * const difficulty = await prisma.difficulty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends difficultyUpdateArgs>(args: SelectSubset<T, difficultyUpdateArgs<ExtArgs>>): Prisma__difficultyClient<$Result.GetResult<Prisma.$difficultyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Difficulties.
     * @param {difficultyDeleteManyArgs} args - Arguments to filter Difficulties to delete.
     * @example
     * // Delete a few Difficulties
     * const { count } = await prisma.difficulty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends difficultyDeleteManyArgs>(args?: SelectSubset<T, difficultyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Difficulties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {difficultyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Difficulties
     * const difficulty = await prisma.difficulty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends difficultyUpdateManyArgs>(args: SelectSubset<T, difficultyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Difficulties and returns the data updated in the database.
     * @param {difficultyUpdateManyAndReturnArgs} args - Arguments to update many Difficulties.
     * @example
     * // Update many Difficulties
     * const difficulty = await prisma.difficulty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Difficulties and only return the `id`
     * const difficultyWithIdOnly = await prisma.difficulty.updateManyAndReturn({
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
    updateManyAndReturn<T extends difficultyUpdateManyAndReturnArgs>(args: SelectSubset<T, difficultyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$difficultyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Difficulty.
     * @param {difficultyUpsertArgs} args - Arguments to update or create a Difficulty.
     * @example
     * // Update or create a Difficulty
     * const difficulty = await prisma.difficulty.upsert({
     *   create: {
     *     // ... data to create a Difficulty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Difficulty we want to update
     *   }
     * })
     */
    upsert<T extends difficultyUpsertArgs>(args: SelectSubset<T, difficultyUpsertArgs<ExtArgs>>): Prisma__difficultyClient<$Result.GetResult<Prisma.$difficultyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Difficulties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {difficultyCountArgs} args - Arguments to filter Difficulties to count.
     * @example
     * // Count the number of Difficulties
     * const count = await prisma.difficulty.count({
     *   where: {
     *     // ... the filter for the Difficulties we want to count
     *   }
     * })
    **/
    count<T extends difficultyCountArgs>(
      args?: Subset<T, difficultyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DifficultyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Difficulty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DifficultyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DifficultyAggregateArgs>(args: Subset<T, DifficultyAggregateArgs>): Prisma.PrismaPromise<GetDifficultyAggregateType<T>>

    /**
     * Group by Difficulty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {difficultyGroupByArgs} args - Group by arguments.
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
      T extends difficultyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: difficultyGroupByArgs['orderBy'] }
        : { orderBy?: difficultyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, difficultyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDifficultyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the difficulty model
   */
  readonly fields: difficultyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for difficulty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__difficultyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends difficulty$questionsArgs<ExtArgs> = {}>(args?: Subset<T, difficulty$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the difficulty model
   */
  interface difficultyFieldRefs {
    readonly id: FieldRef<"difficulty", 'Int'>
    readonly name: FieldRef<"difficulty", 'String'>
    readonly createdAt: FieldRef<"difficulty", 'DateTime'>
    readonly updatedAt: FieldRef<"difficulty", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * difficulty findUnique
   */
  export type difficultyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the difficulty
     */
    select?: difficultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the difficulty
     */
    omit?: difficultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: difficultyInclude<ExtArgs> | null
    /**
     * Filter, which difficulty to fetch.
     */
    where: difficultyWhereUniqueInput
  }

  /**
   * difficulty findUniqueOrThrow
   */
  export type difficultyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the difficulty
     */
    select?: difficultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the difficulty
     */
    omit?: difficultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: difficultyInclude<ExtArgs> | null
    /**
     * Filter, which difficulty to fetch.
     */
    where: difficultyWhereUniqueInput
  }

  /**
   * difficulty findFirst
   */
  export type difficultyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the difficulty
     */
    select?: difficultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the difficulty
     */
    omit?: difficultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: difficultyInclude<ExtArgs> | null
    /**
     * Filter, which difficulty to fetch.
     */
    where?: difficultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of difficulties to fetch.
     */
    orderBy?: difficultyOrderByWithRelationInput | difficultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for difficulties.
     */
    cursor?: difficultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` difficulties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` difficulties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of difficulties.
     */
    distinct?: DifficultyScalarFieldEnum | DifficultyScalarFieldEnum[]
  }

  /**
   * difficulty findFirstOrThrow
   */
  export type difficultyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the difficulty
     */
    select?: difficultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the difficulty
     */
    omit?: difficultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: difficultyInclude<ExtArgs> | null
    /**
     * Filter, which difficulty to fetch.
     */
    where?: difficultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of difficulties to fetch.
     */
    orderBy?: difficultyOrderByWithRelationInput | difficultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for difficulties.
     */
    cursor?: difficultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` difficulties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` difficulties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of difficulties.
     */
    distinct?: DifficultyScalarFieldEnum | DifficultyScalarFieldEnum[]
  }

  /**
   * difficulty findMany
   */
  export type difficultyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the difficulty
     */
    select?: difficultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the difficulty
     */
    omit?: difficultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: difficultyInclude<ExtArgs> | null
    /**
     * Filter, which difficulties to fetch.
     */
    where?: difficultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of difficulties to fetch.
     */
    orderBy?: difficultyOrderByWithRelationInput | difficultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing difficulties.
     */
    cursor?: difficultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` difficulties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` difficulties.
     */
    skip?: number
    distinct?: DifficultyScalarFieldEnum | DifficultyScalarFieldEnum[]
  }

  /**
   * difficulty create
   */
  export type difficultyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the difficulty
     */
    select?: difficultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the difficulty
     */
    omit?: difficultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: difficultyInclude<ExtArgs> | null
    /**
     * The data needed to create a difficulty.
     */
    data: XOR<difficultyCreateInput, difficultyUncheckedCreateInput>
  }

  /**
   * difficulty createMany
   */
  export type difficultyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many difficulties.
     */
    data: difficultyCreateManyInput | difficultyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * difficulty createManyAndReturn
   */
  export type difficultyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the difficulty
     */
    select?: difficultySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the difficulty
     */
    omit?: difficultyOmit<ExtArgs> | null
    /**
     * The data used to create many difficulties.
     */
    data: difficultyCreateManyInput | difficultyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * difficulty update
   */
  export type difficultyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the difficulty
     */
    select?: difficultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the difficulty
     */
    omit?: difficultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: difficultyInclude<ExtArgs> | null
    /**
     * The data needed to update a difficulty.
     */
    data: XOR<difficultyUpdateInput, difficultyUncheckedUpdateInput>
    /**
     * Choose, which difficulty to update.
     */
    where: difficultyWhereUniqueInput
  }

  /**
   * difficulty updateMany
   */
  export type difficultyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update difficulties.
     */
    data: XOR<difficultyUpdateManyMutationInput, difficultyUncheckedUpdateManyInput>
    /**
     * Filter which difficulties to update
     */
    where?: difficultyWhereInput
    /**
     * Limit how many difficulties to update.
     */
    limit?: number
  }

  /**
   * difficulty updateManyAndReturn
   */
  export type difficultyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the difficulty
     */
    select?: difficultySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the difficulty
     */
    omit?: difficultyOmit<ExtArgs> | null
    /**
     * The data used to update difficulties.
     */
    data: XOR<difficultyUpdateManyMutationInput, difficultyUncheckedUpdateManyInput>
    /**
     * Filter which difficulties to update
     */
    where?: difficultyWhereInput
    /**
     * Limit how many difficulties to update.
     */
    limit?: number
  }

  /**
   * difficulty upsert
   */
  export type difficultyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the difficulty
     */
    select?: difficultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the difficulty
     */
    omit?: difficultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: difficultyInclude<ExtArgs> | null
    /**
     * The filter to search for the difficulty to update in case it exists.
     */
    where: difficultyWhereUniqueInput
    /**
     * In case the difficulty found by the `where` argument doesn't exist, create a new difficulty with this data.
     */
    create: XOR<difficultyCreateInput, difficultyUncheckedCreateInput>
    /**
     * In case the difficulty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<difficultyUpdateInput, difficultyUncheckedUpdateInput>
  }

  /**
   * difficulty delete
   */
  export type difficultyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the difficulty
     */
    select?: difficultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the difficulty
     */
    omit?: difficultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: difficultyInclude<ExtArgs> | null
    /**
     * Filter which difficulty to delete.
     */
    where: difficultyWhereUniqueInput
  }

  /**
   * difficulty deleteMany
   */
  export type difficultyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which difficulties to delete
     */
    where?: difficultyWhereInput
    /**
     * Limit how many difficulties to delete.
     */
    limit?: number
  }

  /**
   * difficulty.questions
   */
  export type difficulty$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    cursor?: questionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * difficulty without action
   */
  export type difficultyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the difficulty
     */
    select?: difficultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the difficulty
     */
    omit?: difficultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: difficultyInclude<ExtArgs> | null
  }


  /**
   * Model question_images
   */

  export type AggregateQuestion_images = {
    _count: Question_imagesCountAggregateOutputType | null
    _avg: Question_imagesAvgAggregateOutputType | null
    _sum: Question_imagesSumAggregateOutputType | null
    _min: Question_imagesMinAggregateOutputType | null
    _max: Question_imagesMaxAggregateOutputType | null
  }

  export type Question_imagesAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
    imageId: number | null
  }

  export type Question_imagesSumAggregateOutputType = {
    id: number | null
    questionId: number | null
    imageId: number | null
  }

  export type Question_imagesMinAggregateOutputType = {
    id: number | null
    questionId: number | null
    imageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Question_imagesMaxAggregateOutputType = {
    id: number | null
    questionId: number | null
    imageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Question_imagesCountAggregateOutputType = {
    id: number
    questionId: number
    imageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Question_imagesAvgAggregateInputType = {
    id?: true
    questionId?: true
    imageId?: true
  }

  export type Question_imagesSumAggregateInputType = {
    id?: true
    questionId?: true
    imageId?: true
  }

  export type Question_imagesMinAggregateInputType = {
    id?: true
    questionId?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Question_imagesMaxAggregateInputType = {
    id?: true
    questionId?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Question_imagesCountAggregateInputType = {
    id?: true
    questionId?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Question_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which question_images to aggregate.
     */
    where?: question_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_images to fetch.
     */
    orderBy?: question_imagesOrderByWithRelationInput | question_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: question_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned question_images
    **/
    _count?: true | Question_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Question_imagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Question_imagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Question_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Question_imagesMaxAggregateInputType
  }

  export type GetQuestion_imagesAggregateType<T extends Question_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion_images[P]>
      : GetScalarType<T[P], AggregateQuestion_images[P]>
  }




  export type question_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: question_imagesWhereInput
    orderBy?: question_imagesOrderByWithAggregationInput | question_imagesOrderByWithAggregationInput[]
    by: Question_imagesScalarFieldEnum[] | Question_imagesScalarFieldEnum
    having?: question_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Question_imagesCountAggregateInputType | true
    _avg?: Question_imagesAvgAggregateInputType
    _sum?: Question_imagesSumAggregateInputType
    _min?: Question_imagesMinAggregateInputType
    _max?: Question_imagesMaxAggregateInputType
  }

  export type Question_imagesGroupByOutputType = {
    id: number
    questionId: number
    imageId: number
    createdAt: Date | null
    updatedAt: Date | null
    _count: Question_imagesCountAggregateOutputType | null
    _avg: Question_imagesAvgAggregateOutputType | null
    _sum: Question_imagesSumAggregateOutputType | null
    _min: Question_imagesMinAggregateOutputType | null
    _max: Question_imagesMaxAggregateOutputType | null
  }

  type GetQuestion_imagesGroupByPayload<T extends question_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Question_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Question_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Question_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Question_imagesGroupByOutputType[P]>
        }
      >
    >


  export type question_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_images"]>

  export type question_imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_images"]>

  export type question_imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_images"]>

  export type question_imagesSelectScalar = {
    id?: boolean
    questionId?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type question_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "imageId" | "createdAt" | "updatedAt", ExtArgs["result"]["question_images"]>
  export type question_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }
  export type question_imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }
  export type question_imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }

  export type $question_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "question_images"
    objects: {
      questions: Prisma.$questionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      questionId: number
      imageId: number
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["question_images"]>
    composites: {}
  }

  type question_imagesGetPayload<S extends boolean | null | undefined | question_imagesDefaultArgs> = $Result.GetResult<Prisma.$question_imagesPayload, S>

  type question_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<question_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Question_imagesCountAggregateInputType | true
    }

  export interface question_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['question_images'], meta: { name: 'question_images' } }
    /**
     * Find zero or one Question_images that matches the filter.
     * @param {question_imagesFindUniqueArgs} args - Arguments to find a Question_images
     * @example
     * // Get one Question_images
     * const question_images = await prisma.question_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends question_imagesFindUniqueArgs>(args: SelectSubset<T, question_imagesFindUniqueArgs<ExtArgs>>): Prisma__question_imagesClient<$Result.GetResult<Prisma.$question_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {question_imagesFindUniqueOrThrowArgs} args - Arguments to find a Question_images
     * @example
     * // Get one Question_images
     * const question_images = await prisma.question_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends question_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, question_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__question_imagesClient<$Result.GetResult<Prisma.$question_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_imagesFindFirstArgs} args - Arguments to find a Question_images
     * @example
     * // Get one Question_images
     * const question_images = await prisma.question_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends question_imagesFindFirstArgs>(args?: SelectSubset<T, question_imagesFindFirstArgs<ExtArgs>>): Prisma__question_imagesClient<$Result.GetResult<Prisma.$question_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_imagesFindFirstOrThrowArgs} args - Arguments to find a Question_images
     * @example
     * // Get one Question_images
     * const question_images = await prisma.question_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends question_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, question_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__question_imagesClient<$Result.GetResult<Prisma.$question_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Question_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Question_images
     * const question_images = await prisma.question_images.findMany()
     * 
     * // Get first 10 Question_images
     * const question_images = await prisma.question_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const question_imagesWithIdOnly = await prisma.question_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends question_imagesFindManyArgs>(args?: SelectSubset<T, question_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question_images.
     * @param {question_imagesCreateArgs} args - Arguments to create a Question_images.
     * @example
     * // Create one Question_images
     * const Question_images = await prisma.question_images.create({
     *   data: {
     *     // ... data to create a Question_images
     *   }
     * })
     * 
     */
    create<T extends question_imagesCreateArgs>(args: SelectSubset<T, question_imagesCreateArgs<ExtArgs>>): Prisma__question_imagesClient<$Result.GetResult<Prisma.$question_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Question_images.
     * @param {question_imagesCreateManyArgs} args - Arguments to create many Question_images.
     * @example
     * // Create many Question_images
     * const question_images = await prisma.question_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends question_imagesCreateManyArgs>(args?: SelectSubset<T, question_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Question_images and returns the data saved in the database.
     * @param {question_imagesCreateManyAndReturnArgs} args - Arguments to create many Question_images.
     * @example
     * // Create many Question_images
     * const question_images = await prisma.question_images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Question_images and only return the `id`
     * const question_imagesWithIdOnly = await prisma.question_images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends question_imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, question_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question_images.
     * @param {question_imagesDeleteArgs} args - Arguments to delete one Question_images.
     * @example
     * // Delete one Question_images
     * const Question_images = await prisma.question_images.delete({
     *   where: {
     *     // ... filter to delete one Question_images
     *   }
     * })
     * 
     */
    delete<T extends question_imagesDeleteArgs>(args: SelectSubset<T, question_imagesDeleteArgs<ExtArgs>>): Prisma__question_imagesClient<$Result.GetResult<Prisma.$question_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question_images.
     * @param {question_imagesUpdateArgs} args - Arguments to update one Question_images.
     * @example
     * // Update one Question_images
     * const question_images = await prisma.question_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends question_imagesUpdateArgs>(args: SelectSubset<T, question_imagesUpdateArgs<ExtArgs>>): Prisma__question_imagesClient<$Result.GetResult<Prisma.$question_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Question_images.
     * @param {question_imagesDeleteManyArgs} args - Arguments to filter Question_images to delete.
     * @example
     * // Delete a few Question_images
     * const { count } = await prisma.question_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends question_imagesDeleteManyArgs>(args?: SelectSubset<T, question_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Question_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Question_images
     * const question_images = await prisma.question_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends question_imagesUpdateManyArgs>(args: SelectSubset<T, question_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Question_images and returns the data updated in the database.
     * @param {question_imagesUpdateManyAndReturnArgs} args - Arguments to update many Question_images.
     * @example
     * // Update many Question_images
     * const question_images = await prisma.question_images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Question_images and only return the `id`
     * const question_imagesWithIdOnly = await prisma.question_images.updateManyAndReturn({
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
    updateManyAndReturn<T extends question_imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, question_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question_images.
     * @param {question_imagesUpsertArgs} args - Arguments to update or create a Question_images.
     * @example
     * // Update or create a Question_images
     * const question_images = await prisma.question_images.upsert({
     *   create: {
     *     // ... data to create a Question_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question_images we want to update
     *   }
     * })
     */
    upsert<T extends question_imagesUpsertArgs>(args: SelectSubset<T, question_imagesUpsertArgs<ExtArgs>>): Prisma__question_imagesClient<$Result.GetResult<Prisma.$question_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Question_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_imagesCountArgs} args - Arguments to filter Question_images to count.
     * @example
     * // Count the number of Question_images
     * const count = await prisma.question_images.count({
     *   where: {
     *     // ... the filter for the Question_images we want to count
     *   }
     * })
    **/
    count<T extends question_imagesCountArgs>(
      args?: Subset<T, question_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Question_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Question_imagesAggregateArgs>(args: Subset<T, Question_imagesAggregateArgs>): Prisma.PrismaPromise<GetQuestion_imagesAggregateType<T>>

    /**
     * Group by Question_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_imagesGroupByArgs} args - Group by arguments.
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
      T extends question_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: question_imagesGroupByArgs['orderBy'] }
        : { orderBy?: question_imagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, question_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestion_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the question_images model
   */
  readonly fields: question_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for question_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__question_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends questionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questionsDefaultArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the question_images model
   */
  interface question_imagesFieldRefs {
    readonly id: FieldRef<"question_images", 'Int'>
    readonly questionId: FieldRef<"question_images", 'Int'>
    readonly imageId: FieldRef<"question_images", 'Int'>
    readonly createdAt: FieldRef<"question_images", 'DateTime'>
    readonly updatedAt: FieldRef<"question_images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * question_images findUnique
   */
  export type question_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_images
     */
    select?: question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_images
     */
    omit?: question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_imagesInclude<ExtArgs> | null
    /**
     * Filter, which question_images to fetch.
     */
    where: question_imagesWhereUniqueInput
  }

  /**
   * question_images findUniqueOrThrow
   */
  export type question_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_images
     */
    select?: question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_images
     */
    omit?: question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_imagesInclude<ExtArgs> | null
    /**
     * Filter, which question_images to fetch.
     */
    where: question_imagesWhereUniqueInput
  }

  /**
   * question_images findFirst
   */
  export type question_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_images
     */
    select?: question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_images
     */
    omit?: question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_imagesInclude<ExtArgs> | null
    /**
     * Filter, which question_images to fetch.
     */
    where?: question_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_images to fetch.
     */
    orderBy?: question_imagesOrderByWithRelationInput | question_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for question_images.
     */
    cursor?: question_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of question_images.
     */
    distinct?: Question_imagesScalarFieldEnum | Question_imagesScalarFieldEnum[]
  }

  /**
   * question_images findFirstOrThrow
   */
  export type question_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_images
     */
    select?: question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_images
     */
    omit?: question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_imagesInclude<ExtArgs> | null
    /**
     * Filter, which question_images to fetch.
     */
    where?: question_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_images to fetch.
     */
    orderBy?: question_imagesOrderByWithRelationInput | question_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for question_images.
     */
    cursor?: question_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of question_images.
     */
    distinct?: Question_imagesScalarFieldEnum | Question_imagesScalarFieldEnum[]
  }

  /**
   * question_images findMany
   */
  export type question_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_images
     */
    select?: question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_images
     */
    omit?: question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_imagesInclude<ExtArgs> | null
    /**
     * Filter, which question_images to fetch.
     */
    where?: question_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_images to fetch.
     */
    orderBy?: question_imagesOrderByWithRelationInput | question_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing question_images.
     */
    cursor?: question_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_images.
     */
    skip?: number
    distinct?: Question_imagesScalarFieldEnum | Question_imagesScalarFieldEnum[]
  }

  /**
   * question_images create
   */
  export type question_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_images
     */
    select?: question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_images
     */
    omit?: question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a question_images.
     */
    data: XOR<question_imagesCreateInput, question_imagesUncheckedCreateInput>
  }

  /**
   * question_images createMany
   */
  export type question_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many question_images.
     */
    data: question_imagesCreateManyInput | question_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * question_images createManyAndReturn
   */
  export type question_imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_images
     */
    select?: question_imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the question_images
     */
    omit?: question_imagesOmit<ExtArgs> | null
    /**
     * The data used to create many question_images.
     */
    data: question_imagesCreateManyInput | question_imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * question_images update
   */
  export type question_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_images
     */
    select?: question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_images
     */
    omit?: question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a question_images.
     */
    data: XOR<question_imagesUpdateInput, question_imagesUncheckedUpdateInput>
    /**
     * Choose, which question_images to update.
     */
    where: question_imagesWhereUniqueInput
  }

  /**
   * question_images updateMany
   */
  export type question_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update question_images.
     */
    data: XOR<question_imagesUpdateManyMutationInput, question_imagesUncheckedUpdateManyInput>
    /**
     * Filter which question_images to update
     */
    where?: question_imagesWhereInput
    /**
     * Limit how many question_images to update.
     */
    limit?: number
  }

  /**
   * question_images updateManyAndReturn
   */
  export type question_imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_images
     */
    select?: question_imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the question_images
     */
    omit?: question_imagesOmit<ExtArgs> | null
    /**
     * The data used to update question_images.
     */
    data: XOR<question_imagesUpdateManyMutationInput, question_imagesUncheckedUpdateManyInput>
    /**
     * Filter which question_images to update
     */
    where?: question_imagesWhereInput
    /**
     * Limit how many question_images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * question_images upsert
   */
  export type question_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_images
     */
    select?: question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_images
     */
    omit?: question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the question_images to update in case it exists.
     */
    where: question_imagesWhereUniqueInput
    /**
     * In case the question_images found by the `where` argument doesn't exist, create a new question_images with this data.
     */
    create: XOR<question_imagesCreateInput, question_imagesUncheckedCreateInput>
    /**
     * In case the question_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<question_imagesUpdateInput, question_imagesUncheckedUpdateInput>
  }

  /**
   * question_images delete
   */
  export type question_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_images
     */
    select?: question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_images
     */
    omit?: question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_imagesInclude<ExtArgs> | null
    /**
     * Filter which question_images to delete.
     */
    where: question_imagesWhereUniqueInput
  }

  /**
   * question_images deleteMany
   */
  export type question_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which question_images to delete
     */
    where?: question_imagesWhereInput
    /**
     * Limit how many question_images to delete.
     */
    limit?: number
  }

  /**
   * question_images without action
   */
  export type question_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_images
     */
    select?: question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_images
     */
    omit?: question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_imagesInclude<ExtArgs> | null
  }


  /**
   * Model question_options
   */

  export type AggregateQuestion_options = {
    _count: Question_optionsCountAggregateOutputType | null
    _avg: Question_optionsAvgAggregateOutputType | null
    _sum: Question_optionsSumAggregateOutputType | null
    _min: Question_optionsMinAggregateOutputType | null
    _max: Question_optionsMaxAggregateOutputType | null
  }

  export type Question_optionsAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type Question_optionsSumAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type Question_optionsMinAggregateOutputType = {
    id: number | null
    questionId: number | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    correct: boolean | null
    additional: string | null
  }

  export type Question_optionsMaxAggregateOutputType = {
    id: number | null
    questionId: number | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    correct: boolean | null
    additional: string | null
  }

  export type Question_optionsCountAggregateOutputType = {
    id: number
    questionId: number
    text: number
    createdAt: number
    updatedAt: number
    correct: number
    additional: number
    _all: number
  }


  export type Question_optionsAvgAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type Question_optionsSumAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type Question_optionsMinAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    correct?: true
    additional?: true
  }

  export type Question_optionsMaxAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    correct?: true
    additional?: true
  }

  export type Question_optionsCountAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    correct?: true
    additional?: true
    _all?: true
  }

  export type Question_optionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which question_options to aggregate.
     */
    where?: question_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_options to fetch.
     */
    orderBy?: question_optionsOrderByWithRelationInput | question_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: question_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned question_options
    **/
    _count?: true | Question_optionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Question_optionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Question_optionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Question_optionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Question_optionsMaxAggregateInputType
  }

  export type GetQuestion_optionsAggregateType<T extends Question_optionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion_options]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion_options[P]>
      : GetScalarType<T[P], AggregateQuestion_options[P]>
  }




  export type question_optionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: question_optionsWhereInput
    orderBy?: question_optionsOrderByWithAggregationInput | question_optionsOrderByWithAggregationInput[]
    by: Question_optionsScalarFieldEnum[] | Question_optionsScalarFieldEnum
    having?: question_optionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Question_optionsCountAggregateInputType | true
    _avg?: Question_optionsAvgAggregateInputType
    _sum?: Question_optionsSumAggregateInputType
    _min?: Question_optionsMinAggregateInputType
    _max?: Question_optionsMaxAggregateInputType
  }

  export type Question_optionsGroupByOutputType = {
    id: number
    questionId: number
    text: string
    createdAt: Date | null
    updatedAt: Date | null
    correct: boolean
    additional: string | null
    _count: Question_optionsCountAggregateOutputType | null
    _avg: Question_optionsAvgAggregateOutputType | null
    _sum: Question_optionsSumAggregateOutputType | null
    _min: Question_optionsMinAggregateOutputType | null
    _max: Question_optionsMaxAggregateOutputType | null
  }

  type GetQuestion_optionsGroupByPayload<T extends question_optionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Question_optionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Question_optionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Question_optionsGroupByOutputType[P]>
            : GetScalarType<T[P], Question_optionsGroupByOutputType[P]>
        }
      >
    >


  export type question_optionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    correct?: boolean
    additional?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_options"]>

  export type question_optionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    correct?: boolean
    additional?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_options"]>

  export type question_optionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    correct?: boolean
    additional?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_options"]>

  export type question_optionsSelectScalar = {
    id?: boolean
    questionId?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    correct?: boolean
    additional?: boolean
  }

  export type question_optionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "text" | "createdAt" | "updatedAt" | "correct" | "additional", ExtArgs["result"]["question_options"]>
  export type question_optionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }
  export type question_optionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }
  export type question_optionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }

  export type $question_optionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "question_options"
    objects: {
      questions: Prisma.$questionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      questionId: number
      text: string
      createdAt: Date | null
      updatedAt: Date | null
      correct: boolean
      additional: string | null
    }, ExtArgs["result"]["question_options"]>
    composites: {}
  }

  type question_optionsGetPayload<S extends boolean | null | undefined | question_optionsDefaultArgs> = $Result.GetResult<Prisma.$question_optionsPayload, S>

  type question_optionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<question_optionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Question_optionsCountAggregateInputType | true
    }

  export interface question_optionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['question_options'], meta: { name: 'question_options' } }
    /**
     * Find zero or one Question_options that matches the filter.
     * @param {question_optionsFindUniqueArgs} args - Arguments to find a Question_options
     * @example
     * // Get one Question_options
     * const question_options = await prisma.question_options.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends question_optionsFindUniqueArgs>(args: SelectSubset<T, question_optionsFindUniqueArgs<ExtArgs>>): Prisma__question_optionsClient<$Result.GetResult<Prisma.$question_optionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question_options that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {question_optionsFindUniqueOrThrowArgs} args - Arguments to find a Question_options
     * @example
     * // Get one Question_options
     * const question_options = await prisma.question_options.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends question_optionsFindUniqueOrThrowArgs>(args: SelectSubset<T, question_optionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__question_optionsClient<$Result.GetResult<Prisma.$question_optionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_optionsFindFirstArgs} args - Arguments to find a Question_options
     * @example
     * // Get one Question_options
     * const question_options = await prisma.question_options.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends question_optionsFindFirstArgs>(args?: SelectSubset<T, question_optionsFindFirstArgs<ExtArgs>>): Prisma__question_optionsClient<$Result.GetResult<Prisma.$question_optionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question_options that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_optionsFindFirstOrThrowArgs} args - Arguments to find a Question_options
     * @example
     * // Get one Question_options
     * const question_options = await prisma.question_options.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends question_optionsFindFirstOrThrowArgs>(args?: SelectSubset<T, question_optionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__question_optionsClient<$Result.GetResult<Prisma.$question_optionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Question_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_optionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Question_options
     * const question_options = await prisma.question_options.findMany()
     * 
     * // Get first 10 Question_options
     * const question_options = await prisma.question_options.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const question_optionsWithIdOnly = await prisma.question_options.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends question_optionsFindManyArgs>(args?: SelectSubset<T, question_optionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question_options.
     * @param {question_optionsCreateArgs} args - Arguments to create a Question_options.
     * @example
     * // Create one Question_options
     * const Question_options = await prisma.question_options.create({
     *   data: {
     *     // ... data to create a Question_options
     *   }
     * })
     * 
     */
    create<T extends question_optionsCreateArgs>(args: SelectSubset<T, question_optionsCreateArgs<ExtArgs>>): Prisma__question_optionsClient<$Result.GetResult<Prisma.$question_optionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Question_options.
     * @param {question_optionsCreateManyArgs} args - Arguments to create many Question_options.
     * @example
     * // Create many Question_options
     * const question_options = await prisma.question_options.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends question_optionsCreateManyArgs>(args?: SelectSubset<T, question_optionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Question_options and returns the data saved in the database.
     * @param {question_optionsCreateManyAndReturnArgs} args - Arguments to create many Question_options.
     * @example
     * // Create many Question_options
     * const question_options = await prisma.question_options.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Question_options and only return the `id`
     * const question_optionsWithIdOnly = await prisma.question_options.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends question_optionsCreateManyAndReturnArgs>(args?: SelectSubset<T, question_optionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_optionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question_options.
     * @param {question_optionsDeleteArgs} args - Arguments to delete one Question_options.
     * @example
     * // Delete one Question_options
     * const Question_options = await prisma.question_options.delete({
     *   where: {
     *     // ... filter to delete one Question_options
     *   }
     * })
     * 
     */
    delete<T extends question_optionsDeleteArgs>(args: SelectSubset<T, question_optionsDeleteArgs<ExtArgs>>): Prisma__question_optionsClient<$Result.GetResult<Prisma.$question_optionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question_options.
     * @param {question_optionsUpdateArgs} args - Arguments to update one Question_options.
     * @example
     * // Update one Question_options
     * const question_options = await prisma.question_options.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends question_optionsUpdateArgs>(args: SelectSubset<T, question_optionsUpdateArgs<ExtArgs>>): Prisma__question_optionsClient<$Result.GetResult<Prisma.$question_optionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Question_options.
     * @param {question_optionsDeleteManyArgs} args - Arguments to filter Question_options to delete.
     * @example
     * // Delete a few Question_options
     * const { count } = await prisma.question_options.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends question_optionsDeleteManyArgs>(args?: SelectSubset<T, question_optionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Question_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_optionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Question_options
     * const question_options = await prisma.question_options.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends question_optionsUpdateManyArgs>(args: SelectSubset<T, question_optionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Question_options and returns the data updated in the database.
     * @param {question_optionsUpdateManyAndReturnArgs} args - Arguments to update many Question_options.
     * @example
     * // Update many Question_options
     * const question_options = await prisma.question_options.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Question_options and only return the `id`
     * const question_optionsWithIdOnly = await prisma.question_options.updateManyAndReturn({
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
    updateManyAndReturn<T extends question_optionsUpdateManyAndReturnArgs>(args: SelectSubset<T, question_optionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_optionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question_options.
     * @param {question_optionsUpsertArgs} args - Arguments to update or create a Question_options.
     * @example
     * // Update or create a Question_options
     * const question_options = await prisma.question_options.upsert({
     *   create: {
     *     // ... data to create a Question_options
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question_options we want to update
     *   }
     * })
     */
    upsert<T extends question_optionsUpsertArgs>(args: SelectSubset<T, question_optionsUpsertArgs<ExtArgs>>): Prisma__question_optionsClient<$Result.GetResult<Prisma.$question_optionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Question_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_optionsCountArgs} args - Arguments to filter Question_options to count.
     * @example
     * // Count the number of Question_options
     * const count = await prisma.question_options.count({
     *   where: {
     *     // ... the filter for the Question_options we want to count
     *   }
     * })
    **/
    count<T extends question_optionsCountArgs>(
      args?: Subset<T, question_optionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Question_optionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_optionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Question_optionsAggregateArgs>(args: Subset<T, Question_optionsAggregateArgs>): Prisma.PrismaPromise<GetQuestion_optionsAggregateType<T>>

    /**
     * Group by Question_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_optionsGroupByArgs} args - Group by arguments.
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
      T extends question_optionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: question_optionsGroupByArgs['orderBy'] }
        : { orderBy?: question_optionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, question_optionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestion_optionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the question_options model
   */
  readonly fields: question_optionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for question_options.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__question_optionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends questionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questionsDefaultArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the question_options model
   */
  interface question_optionsFieldRefs {
    readonly id: FieldRef<"question_options", 'Int'>
    readonly questionId: FieldRef<"question_options", 'Int'>
    readonly text: FieldRef<"question_options", 'String'>
    readonly createdAt: FieldRef<"question_options", 'DateTime'>
    readonly updatedAt: FieldRef<"question_options", 'DateTime'>
    readonly correct: FieldRef<"question_options", 'Boolean'>
    readonly additional: FieldRef<"question_options", 'String'>
  }
    

  // Custom InputTypes
  /**
   * question_options findUnique
   */
  export type question_optionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_options
     */
    select?: question_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_options
     */
    omit?: question_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_optionsInclude<ExtArgs> | null
    /**
     * Filter, which question_options to fetch.
     */
    where: question_optionsWhereUniqueInput
  }

  /**
   * question_options findUniqueOrThrow
   */
  export type question_optionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_options
     */
    select?: question_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_options
     */
    omit?: question_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_optionsInclude<ExtArgs> | null
    /**
     * Filter, which question_options to fetch.
     */
    where: question_optionsWhereUniqueInput
  }

  /**
   * question_options findFirst
   */
  export type question_optionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_options
     */
    select?: question_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_options
     */
    omit?: question_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_optionsInclude<ExtArgs> | null
    /**
     * Filter, which question_options to fetch.
     */
    where?: question_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_options to fetch.
     */
    orderBy?: question_optionsOrderByWithRelationInput | question_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for question_options.
     */
    cursor?: question_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of question_options.
     */
    distinct?: Question_optionsScalarFieldEnum | Question_optionsScalarFieldEnum[]
  }

  /**
   * question_options findFirstOrThrow
   */
  export type question_optionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_options
     */
    select?: question_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_options
     */
    omit?: question_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_optionsInclude<ExtArgs> | null
    /**
     * Filter, which question_options to fetch.
     */
    where?: question_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_options to fetch.
     */
    orderBy?: question_optionsOrderByWithRelationInput | question_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for question_options.
     */
    cursor?: question_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of question_options.
     */
    distinct?: Question_optionsScalarFieldEnum | Question_optionsScalarFieldEnum[]
  }

  /**
   * question_options findMany
   */
  export type question_optionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_options
     */
    select?: question_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_options
     */
    omit?: question_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_optionsInclude<ExtArgs> | null
    /**
     * Filter, which question_options to fetch.
     */
    where?: question_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_options to fetch.
     */
    orderBy?: question_optionsOrderByWithRelationInput | question_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing question_options.
     */
    cursor?: question_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_options.
     */
    skip?: number
    distinct?: Question_optionsScalarFieldEnum | Question_optionsScalarFieldEnum[]
  }

  /**
   * question_options create
   */
  export type question_optionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_options
     */
    select?: question_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_options
     */
    omit?: question_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_optionsInclude<ExtArgs> | null
    /**
     * The data needed to create a question_options.
     */
    data: XOR<question_optionsCreateInput, question_optionsUncheckedCreateInput>
  }

  /**
   * question_options createMany
   */
  export type question_optionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many question_options.
     */
    data: question_optionsCreateManyInput | question_optionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * question_options createManyAndReturn
   */
  export type question_optionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_options
     */
    select?: question_optionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the question_options
     */
    omit?: question_optionsOmit<ExtArgs> | null
    /**
     * The data used to create many question_options.
     */
    data: question_optionsCreateManyInput | question_optionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_optionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * question_options update
   */
  export type question_optionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_options
     */
    select?: question_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_options
     */
    omit?: question_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_optionsInclude<ExtArgs> | null
    /**
     * The data needed to update a question_options.
     */
    data: XOR<question_optionsUpdateInput, question_optionsUncheckedUpdateInput>
    /**
     * Choose, which question_options to update.
     */
    where: question_optionsWhereUniqueInput
  }

  /**
   * question_options updateMany
   */
  export type question_optionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update question_options.
     */
    data: XOR<question_optionsUpdateManyMutationInput, question_optionsUncheckedUpdateManyInput>
    /**
     * Filter which question_options to update
     */
    where?: question_optionsWhereInput
    /**
     * Limit how many question_options to update.
     */
    limit?: number
  }

  /**
   * question_options updateManyAndReturn
   */
  export type question_optionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_options
     */
    select?: question_optionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the question_options
     */
    omit?: question_optionsOmit<ExtArgs> | null
    /**
     * The data used to update question_options.
     */
    data: XOR<question_optionsUpdateManyMutationInput, question_optionsUncheckedUpdateManyInput>
    /**
     * Filter which question_options to update
     */
    where?: question_optionsWhereInput
    /**
     * Limit how many question_options to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_optionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * question_options upsert
   */
  export type question_optionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_options
     */
    select?: question_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_options
     */
    omit?: question_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_optionsInclude<ExtArgs> | null
    /**
     * The filter to search for the question_options to update in case it exists.
     */
    where: question_optionsWhereUniqueInput
    /**
     * In case the question_options found by the `where` argument doesn't exist, create a new question_options with this data.
     */
    create: XOR<question_optionsCreateInput, question_optionsUncheckedCreateInput>
    /**
     * In case the question_options was found with the provided `where` argument, update it with this data.
     */
    update: XOR<question_optionsUpdateInput, question_optionsUncheckedUpdateInput>
  }

  /**
   * question_options delete
   */
  export type question_optionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_options
     */
    select?: question_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_options
     */
    omit?: question_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_optionsInclude<ExtArgs> | null
    /**
     * Filter which question_options to delete.
     */
    where: question_optionsWhereUniqueInput
  }

  /**
   * question_options deleteMany
   */
  export type question_optionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which question_options to delete
     */
    where?: question_optionsWhereInput
    /**
     * Limit how many question_options to delete.
     */
    limit?: number
  }

  /**
   * question_options without action
   */
  export type question_optionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_options
     */
    select?: question_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_options
     */
    omit?: question_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_optionsInclude<ExtArgs> | null
  }


  /**
   * Model question_references
   */

  export type AggregateQuestion_references = {
    _count: Question_referencesCountAggregateOutputType | null
    _avg: Question_referencesAvgAggregateOutputType | null
    _sum: Question_referencesSumAggregateOutputType | null
    _min: Question_referencesMinAggregateOutputType | null
    _max: Question_referencesMaxAggregateOutputType | null
  }

  export type Question_referencesAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
    referenceId: number | null
  }

  export type Question_referencesSumAggregateOutputType = {
    id: number | null
    questionId: number | null
    referenceId: number | null
  }

  export type Question_referencesMinAggregateOutputType = {
    id: number | null
    questionId: number | null
    referenceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Question_referencesMaxAggregateOutputType = {
    id: number | null
    questionId: number | null
    referenceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Question_referencesCountAggregateOutputType = {
    id: number
    questionId: number
    referenceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Question_referencesAvgAggregateInputType = {
    id?: true
    questionId?: true
    referenceId?: true
  }

  export type Question_referencesSumAggregateInputType = {
    id?: true
    questionId?: true
    referenceId?: true
  }

  export type Question_referencesMinAggregateInputType = {
    id?: true
    questionId?: true
    referenceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Question_referencesMaxAggregateInputType = {
    id?: true
    questionId?: true
    referenceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Question_referencesCountAggregateInputType = {
    id?: true
    questionId?: true
    referenceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Question_referencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which question_references to aggregate.
     */
    where?: question_referencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_references to fetch.
     */
    orderBy?: question_referencesOrderByWithRelationInput | question_referencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: question_referencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_references from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_references.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned question_references
    **/
    _count?: true | Question_referencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Question_referencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Question_referencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Question_referencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Question_referencesMaxAggregateInputType
  }

  export type GetQuestion_referencesAggregateType<T extends Question_referencesAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion_references]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion_references[P]>
      : GetScalarType<T[P], AggregateQuestion_references[P]>
  }




  export type question_referencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: question_referencesWhereInput
    orderBy?: question_referencesOrderByWithAggregationInput | question_referencesOrderByWithAggregationInput[]
    by: Question_referencesScalarFieldEnum[] | Question_referencesScalarFieldEnum
    having?: question_referencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Question_referencesCountAggregateInputType | true
    _avg?: Question_referencesAvgAggregateInputType
    _sum?: Question_referencesSumAggregateInputType
    _min?: Question_referencesMinAggregateInputType
    _max?: Question_referencesMaxAggregateInputType
  }

  export type Question_referencesGroupByOutputType = {
    id: number
    questionId: number
    referenceId: number
    createdAt: Date | null
    updatedAt: Date | null
    _count: Question_referencesCountAggregateOutputType | null
    _avg: Question_referencesAvgAggregateOutputType | null
    _sum: Question_referencesSumAggregateOutputType | null
    _min: Question_referencesMinAggregateOutputType | null
    _max: Question_referencesMaxAggregateOutputType | null
  }

  type GetQuestion_referencesGroupByPayload<T extends question_referencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Question_referencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Question_referencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Question_referencesGroupByOutputType[P]>
            : GetScalarType<T[P], Question_referencesGroupByOutputType[P]>
        }
      >
    >


  export type question_referencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    referenceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_references"]>

  export type question_referencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    referenceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_references"]>

  export type question_referencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    referenceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_references"]>

  export type question_referencesSelectScalar = {
    id?: boolean
    questionId?: boolean
    referenceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type question_referencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "referenceId" | "createdAt" | "updatedAt", ExtArgs["result"]["question_references"]>
  export type question_referencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }
  export type question_referencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }
  export type question_referencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }

  export type $question_referencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "question_references"
    objects: {
      questions: Prisma.$questionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      questionId: number
      referenceId: number
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["question_references"]>
    composites: {}
  }

  type question_referencesGetPayload<S extends boolean | null | undefined | question_referencesDefaultArgs> = $Result.GetResult<Prisma.$question_referencesPayload, S>

  type question_referencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<question_referencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Question_referencesCountAggregateInputType | true
    }

  export interface question_referencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['question_references'], meta: { name: 'question_references' } }
    /**
     * Find zero or one Question_references that matches the filter.
     * @param {question_referencesFindUniqueArgs} args - Arguments to find a Question_references
     * @example
     * // Get one Question_references
     * const question_references = await prisma.question_references.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends question_referencesFindUniqueArgs>(args: SelectSubset<T, question_referencesFindUniqueArgs<ExtArgs>>): Prisma__question_referencesClient<$Result.GetResult<Prisma.$question_referencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question_references that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {question_referencesFindUniqueOrThrowArgs} args - Arguments to find a Question_references
     * @example
     * // Get one Question_references
     * const question_references = await prisma.question_references.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends question_referencesFindUniqueOrThrowArgs>(args: SelectSubset<T, question_referencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__question_referencesClient<$Result.GetResult<Prisma.$question_referencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question_references that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_referencesFindFirstArgs} args - Arguments to find a Question_references
     * @example
     * // Get one Question_references
     * const question_references = await prisma.question_references.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends question_referencesFindFirstArgs>(args?: SelectSubset<T, question_referencesFindFirstArgs<ExtArgs>>): Prisma__question_referencesClient<$Result.GetResult<Prisma.$question_referencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question_references that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_referencesFindFirstOrThrowArgs} args - Arguments to find a Question_references
     * @example
     * // Get one Question_references
     * const question_references = await prisma.question_references.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends question_referencesFindFirstOrThrowArgs>(args?: SelectSubset<T, question_referencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__question_referencesClient<$Result.GetResult<Prisma.$question_referencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Question_references that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_referencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Question_references
     * const question_references = await prisma.question_references.findMany()
     * 
     * // Get first 10 Question_references
     * const question_references = await prisma.question_references.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const question_referencesWithIdOnly = await prisma.question_references.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends question_referencesFindManyArgs>(args?: SelectSubset<T, question_referencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_referencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question_references.
     * @param {question_referencesCreateArgs} args - Arguments to create a Question_references.
     * @example
     * // Create one Question_references
     * const Question_references = await prisma.question_references.create({
     *   data: {
     *     // ... data to create a Question_references
     *   }
     * })
     * 
     */
    create<T extends question_referencesCreateArgs>(args: SelectSubset<T, question_referencesCreateArgs<ExtArgs>>): Prisma__question_referencesClient<$Result.GetResult<Prisma.$question_referencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Question_references.
     * @param {question_referencesCreateManyArgs} args - Arguments to create many Question_references.
     * @example
     * // Create many Question_references
     * const question_references = await prisma.question_references.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends question_referencesCreateManyArgs>(args?: SelectSubset<T, question_referencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Question_references and returns the data saved in the database.
     * @param {question_referencesCreateManyAndReturnArgs} args - Arguments to create many Question_references.
     * @example
     * // Create many Question_references
     * const question_references = await prisma.question_references.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Question_references and only return the `id`
     * const question_referencesWithIdOnly = await prisma.question_references.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends question_referencesCreateManyAndReturnArgs>(args?: SelectSubset<T, question_referencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_referencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question_references.
     * @param {question_referencesDeleteArgs} args - Arguments to delete one Question_references.
     * @example
     * // Delete one Question_references
     * const Question_references = await prisma.question_references.delete({
     *   where: {
     *     // ... filter to delete one Question_references
     *   }
     * })
     * 
     */
    delete<T extends question_referencesDeleteArgs>(args: SelectSubset<T, question_referencesDeleteArgs<ExtArgs>>): Prisma__question_referencesClient<$Result.GetResult<Prisma.$question_referencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question_references.
     * @param {question_referencesUpdateArgs} args - Arguments to update one Question_references.
     * @example
     * // Update one Question_references
     * const question_references = await prisma.question_references.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends question_referencesUpdateArgs>(args: SelectSubset<T, question_referencesUpdateArgs<ExtArgs>>): Prisma__question_referencesClient<$Result.GetResult<Prisma.$question_referencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Question_references.
     * @param {question_referencesDeleteManyArgs} args - Arguments to filter Question_references to delete.
     * @example
     * // Delete a few Question_references
     * const { count } = await prisma.question_references.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends question_referencesDeleteManyArgs>(args?: SelectSubset<T, question_referencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Question_references.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_referencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Question_references
     * const question_references = await prisma.question_references.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends question_referencesUpdateManyArgs>(args: SelectSubset<T, question_referencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Question_references and returns the data updated in the database.
     * @param {question_referencesUpdateManyAndReturnArgs} args - Arguments to update many Question_references.
     * @example
     * // Update many Question_references
     * const question_references = await prisma.question_references.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Question_references and only return the `id`
     * const question_referencesWithIdOnly = await prisma.question_references.updateManyAndReturn({
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
    updateManyAndReturn<T extends question_referencesUpdateManyAndReturnArgs>(args: SelectSubset<T, question_referencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_referencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question_references.
     * @param {question_referencesUpsertArgs} args - Arguments to update or create a Question_references.
     * @example
     * // Update or create a Question_references
     * const question_references = await prisma.question_references.upsert({
     *   create: {
     *     // ... data to create a Question_references
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question_references we want to update
     *   }
     * })
     */
    upsert<T extends question_referencesUpsertArgs>(args: SelectSubset<T, question_referencesUpsertArgs<ExtArgs>>): Prisma__question_referencesClient<$Result.GetResult<Prisma.$question_referencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Question_references.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_referencesCountArgs} args - Arguments to filter Question_references to count.
     * @example
     * // Count the number of Question_references
     * const count = await prisma.question_references.count({
     *   where: {
     *     // ... the filter for the Question_references we want to count
     *   }
     * })
    **/
    count<T extends question_referencesCountArgs>(
      args?: Subset<T, question_referencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Question_referencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question_references.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_referencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Question_referencesAggregateArgs>(args: Subset<T, Question_referencesAggregateArgs>): Prisma.PrismaPromise<GetQuestion_referencesAggregateType<T>>

    /**
     * Group by Question_references.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_referencesGroupByArgs} args - Group by arguments.
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
      T extends question_referencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: question_referencesGroupByArgs['orderBy'] }
        : { orderBy?: question_referencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, question_referencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestion_referencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the question_references model
   */
  readonly fields: question_referencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for question_references.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__question_referencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends questionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questionsDefaultArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the question_references model
   */
  interface question_referencesFieldRefs {
    readonly id: FieldRef<"question_references", 'Int'>
    readonly questionId: FieldRef<"question_references", 'Int'>
    readonly referenceId: FieldRef<"question_references", 'Int'>
    readonly createdAt: FieldRef<"question_references", 'DateTime'>
    readonly updatedAt: FieldRef<"question_references", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * question_references findUnique
   */
  export type question_referencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_references
     */
    select?: question_referencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_references
     */
    omit?: question_referencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_referencesInclude<ExtArgs> | null
    /**
     * Filter, which question_references to fetch.
     */
    where: question_referencesWhereUniqueInput
  }

  /**
   * question_references findUniqueOrThrow
   */
  export type question_referencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_references
     */
    select?: question_referencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_references
     */
    omit?: question_referencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_referencesInclude<ExtArgs> | null
    /**
     * Filter, which question_references to fetch.
     */
    where: question_referencesWhereUniqueInput
  }

  /**
   * question_references findFirst
   */
  export type question_referencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_references
     */
    select?: question_referencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_references
     */
    omit?: question_referencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_referencesInclude<ExtArgs> | null
    /**
     * Filter, which question_references to fetch.
     */
    where?: question_referencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_references to fetch.
     */
    orderBy?: question_referencesOrderByWithRelationInput | question_referencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for question_references.
     */
    cursor?: question_referencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_references from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_references.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of question_references.
     */
    distinct?: Question_referencesScalarFieldEnum | Question_referencesScalarFieldEnum[]
  }

  /**
   * question_references findFirstOrThrow
   */
  export type question_referencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_references
     */
    select?: question_referencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_references
     */
    omit?: question_referencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_referencesInclude<ExtArgs> | null
    /**
     * Filter, which question_references to fetch.
     */
    where?: question_referencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_references to fetch.
     */
    orderBy?: question_referencesOrderByWithRelationInput | question_referencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for question_references.
     */
    cursor?: question_referencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_references from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_references.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of question_references.
     */
    distinct?: Question_referencesScalarFieldEnum | Question_referencesScalarFieldEnum[]
  }

  /**
   * question_references findMany
   */
  export type question_referencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_references
     */
    select?: question_referencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_references
     */
    omit?: question_referencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_referencesInclude<ExtArgs> | null
    /**
     * Filter, which question_references to fetch.
     */
    where?: question_referencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_references to fetch.
     */
    orderBy?: question_referencesOrderByWithRelationInput | question_referencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing question_references.
     */
    cursor?: question_referencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_references from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_references.
     */
    skip?: number
    distinct?: Question_referencesScalarFieldEnum | Question_referencesScalarFieldEnum[]
  }

  /**
   * question_references create
   */
  export type question_referencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_references
     */
    select?: question_referencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_references
     */
    omit?: question_referencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_referencesInclude<ExtArgs> | null
    /**
     * The data needed to create a question_references.
     */
    data: XOR<question_referencesCreateInput, question_referencesUncheckedCreateInput>
  }

  /**
   * question_references createMany
   */
  export type question_referencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many question_references.
     */
    data: question_referencesCreateManyInput | question_referencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * question_references createManyAndReturn
   */
  export type question_referencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_references
     */
    select?: question_referencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the question_references
     */
    omit?: question_referencesOmit<ExtArgs> | null
    /**
     * The data used to create many question_references.
     */
    data: question_referencesCreateManyInput | question_referencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_referencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * question_references update
   */
  export type question_referencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_references
     */
    select?: question_referencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_references
     */
    omit?: question_referencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_referencesInclude<ExtArgs> | null
    /**
     * The data needed to update a question_references.
     */
    data: XOR<question_referencesUpdateInput, question_referencesUncheckedUpdateInput>
    /**
     * Choose, which question_references to update.
     */
    where: question_referencesWhereUniqueInput
  }

  /**
   * question_references updateMany
   */
  export type question_referencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update question_references.
     */
    data: XOR<question_referencesUpdateManyMutationInput, question_referencesUncheckedUpdateManyInput>
    /**
     * Filter which question_references to update
     */
    where?: question_referencesWhereInput
    /**
     * Limit how many question_references to update.
     */
    limit?: number
  }

  /**
   * question_references updateManyAndReturn
   */
  export type question_referencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_references
     */
    select?: question_referencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the question_references
     */
    omit?: question_referencesOmit<ExtArgs> | null
    /**
     * The data used to update question_references.
     */
    data: XOR<question_referencesUpdateManyMutationInput, question_referencesUncheckedUpdateManyInput>
    /**
     * Filter which question_references to update
     */
    where?: question_referencesWhereInput
    /**
     * Limit how many question_references to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_referencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * question_references upsert
   */
  export type question_referencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_references
     */
    select?: question_referencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_references
     */
    omit?: question_referencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_referencesInclude<ExtArgs> | null
    /**
     * The filter to search for the question_references to update in case it exists.
     */
    where: question_referencesWhereUniqueInput
    /**
     * In case the question_references found by the `where` argument doesn't exist, create a new question_references with this data.
     */
    create: XOR<question_referencesCreateInput, question_referencesUncheckedCreateInput>
    /**
     * In case the question_references was found with the provided `where` argument, update it with this data.
     */
    update: XOR<question_referencesUpdateInput, question_referencesUncheckedUpdateInput>
  }

  /**
   * question_references delete
   */
  export type question_referencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_references
     */
    select?: question_referencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_references
     */
    omit?: question_referencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_referencesInclude<ExtArgs> | null
    /**
     * Filter which question_references to delete.
     */
    where: question_referencesWhereUniqueInput
  }

  /**
   * question_references deleteMany
   */
  export type question_referencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which question_references to delete
     */
    where?: question_referencesWhereInput
    /**
     * Limit how many question_references to delete.
     */
    limit?: number
  }

  /**
   * question_references without action
   */
  export type question_referencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_references
     */
    select?: question_referencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_references
     */
    omit?: question_referencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_referencesInclude<ExtArgs> | null
  }


  /**
   * Model question_types
   */

  export type AggregateQuestion_types = {
    _count: Question_typesCountAggregateOutputType | null
    _avg: Question_typesAvgAggregateOutputType | null
    _sum: Question_typesSumAggregateOutputType | null
    _min: Question_typesMinAggregateOutputType | null
    _max: Question_typesMaxAggregateOutputType | null
  }

  export type Question_typesAvgAggregateOutputType = {
    id: number | null
  }

  export type Question_typesSumAggregateOutputType = {
    id: number | null
  }

  export type Question_typesMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Question_typesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Question_typesCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Question_typesAvgAggregateInputType = {
    id?: true
  }

  export type Question_typesSumAggregateInputType = {
    id?: true
  }

  export type Question_typesMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Question_typesMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Question_typesCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Question_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which question_types to aggregate.
     */
    where?: question_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_types to fetch.
     */
    orderBy?: question_typesOrderByWithRelationInput | question_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: question_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned question_types
    **/
    _count?: true | Question_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Question_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Question_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Question_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Question_typesMaxAggregateInputType
  }

  export type GetQuestion_typesAggregateType<T extends Question_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion_types[P]>
      : GetScalarType<T[P], AggregateQuestion_types[P]>
  }




  export type question_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: question_typesWhereInput
    orderBy?: question_typesOrderByWithAggregationInput | question_typesOrderByWithAggregationInput[]
    by: Question_typesScalarFieldEnum[] | Question_typesScalarFieldEnum
    having?: question_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Question_typesCountAggregateInputType | true
    _avg?: Question_typesAvgAggregateInputType
    _sum?: Question_typesSumAggregateInputType
    _min?: Question_typesMinAggregateInputType
    _max?: Question_typesMaxAggregateInputType
  }

  export type Question_typesGroupByOutputType = {
    id: number
    name: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: Question_typesCountAggregateOutputType | null
    _avg: Question_typesAvgAggregateOutputType | null
    _sum: Question_typesSumAggregateOutputType | null
    _min: Question_typesMinAggregateOutputType | null
    _max: Question_typesMaxAggregateOutputType | null
  }

  type GetQuestion_typesGroupByPayload<T extends question_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Question_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Question_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Question_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Question_typesGroupByOutputType[P]>
        }
      >
    >


  export type question_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | question_types$questionsArgs<ExtArgs>
    _count?: boolean | Question_typesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_types"]>

  export type question_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["question_types"]>

  export type question_typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["question_types"]>

  export type question_typesSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type question_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["question_types"]>
  export type question_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | question_types$questionsArgs<ExtArgs>
    _count?: boolean | Question_typesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type question_typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type question_typesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $question_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "question_types"
    objects: {
      questions: Prisma.$questionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["question_types"]>
    composites: {}
  }

  type question_typesGetPayload<S extends boolean | null | undefined | question_typesDefaultArgs> = $Result.GetResult<Prisma.$question_typesPayload, S>

  type question_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<question_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Question_typesCountAggregateInputType | true
    }

  export interface question_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['question_types'], meta: { name: 'question_types' } }
    /**
     * Find zero or one Question_types that matches the filter.
     * @param {question_typesFindUniqueArgs} args - Arguments to find a Question_types
     * @example
     * // Get one Question_types
     * const question_types = await prisma.question_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends question_typesFindUniqueArgs>(args: SelectSubset<T, question_typesFindUniqueArgs<ExtArgs>>): Prisma__question_typesClient<$Result.GetResult<Prisma.$question_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {question_typesFindUniqueOrThrowArgs} args - Arguments to find a Question_types
     * @example
     * // Get one Question_types
     * const question_types = await prisma.question_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends question_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, question_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__question_typesClient<$Result.GetResult<Prisma.$question_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_typesFindFirstArgs} args - Arguments to find a Question_types
     * @example
     * // Get one Question_types
     * const question_types = await prisma.question_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends question_typesFindFirstArgs>(args?: SelectSubset<T, question_typesFindFirstArgs<ExtArgs>>): Prisma__question_typesClient<$Result.GetResult<Prisma.$question_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_typesFindFirstOrThrowArgs} args - Arguments to find a Question_types
     * @example
     * // Get one Question_types
     * const question_types = await prisma.question_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends question_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, question_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__question_typesClient<$Result.GetResult<Prisma.$question_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Question_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Question_types
     * const question_types = await prisma.question_types.findMany()
     * 
     * // Get first 10 Question_types
     * const question_types = await prisma.question_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const question_typesWithIdOnly = await prisma.question_types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends question_typesFindManyArgs>(args?: SelectSubset<T, question_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question_types.
     * @param {question_typesCreateArgs} args - Arguments to create a Question_types.
     * @example
     * // Create one Question_types
     * const Question_types = await prisma.question_types.create({
     *   data: {
     *     // ... data to create a Question_types
     *   }
     * })
     * 
     */
    create<T extends question_typesCreateArgs>(args: SelectSubset<T, question_typesCreateArgs<ExtArgs>>): Prisma__question_typesClient<$Result.GetResult<Prisma.$question_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Question_types.
     * @param {question_typesCreateManyArgs} args - Arguments to create many Question_types.
     * @example
     * // Create many Question_types
     * const question_types = await prisma.question_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends question_typesCreateManyArgs>(args?: SelectSubset<T, question_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Question_types and returns the data saved in the database.
     * @param {question_typesCreateManyAndReturnArgs} args - Arguments to create many Question_types.
     * @example
     * // Create many Question_types
     * const question_types = await prisma.question_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Question_types and only return the `id`
     * const question_typesWithIdOnly = await prisma.question_types.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends question_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, question_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question_types.
     * @param {question_typesDeleteArgs} args - Arguments to delete one Question_types.
     * @example
     * // Delete one Question_types
     * const Question_types = await prisma.question_types.delete({
     *   where: {
     *     // ... filter to delete one Question_types
     *   }
     * })
     * 
     */
    delete<T extends question_typesDeleteArgs>(args: SelectSubset<T, question_typesDeleteArgs<ExtArgs>>): Prisma__question_typesClient<$Result.GetResult<Prisma.$question_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question_types.
     * @param {question_typesUpdateArgs} args - Arguments to update one Question_types.
     * @example
     * // Update one Question_types
     * const question_types = await prisma.question_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends question_typesUpdateArgs>(args: SelectSubset<T, question_typesUpdateArgs<ExtArgs>>): Prisma__question_typesClient<$Result.GetResult<Prisma.$question_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Question_types.
     * @param {question_typesDeleteManyArgs} args - Arguments to filter Question_types to delete.
     * @example
     * // Delete a few Question_types
     * const { count } = await prisma.question_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends question_typesDeleteManyArgs>(args?: SelectSubset<T, question_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Question_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Question_types
     * const question_types = await prisma.question_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends question_typesUpdateManyArgs>(args: SelectSubset<T, question_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Question_types and returns the data updated in the database.
     * @param {question_typesUpdateManyAndReturnArgs} args - Arguments to update many Question_types.
     * @example
     * // Update many Question_types
     * const question_types = await prisma.question_types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Question_types and only return the `id`
     * const question_typesWithIdOnly = await prisma.question_types.updateManyAndReturn({
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
    updateManyAndReturn<T extends question_typesUpdateManyAndReturnArgs>(args: SelectSubset<T, question_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question_types.
     * @param {question_typesUpsertArgs} args - Arguments to update or create a Question_types.
     * @example
     * // Update or create a Question_types
     * const question_types = await prisma.question_types.upsert({
     *   create: {
     *     // ... data to create a Question_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question_types we want to update
     *   }
     * })
     */
    upsert<T extends question_typesUpsertArgs>(args: SelectSubset<T, question_typesUpsertArgs<ExtArgs>>): Prisma__question_typesClient<$Result.GetResult<Prisma.$question_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Question_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_typesCountArgs} args - Arguments to filter Question_types to count.
     * @example
     * // Count the number of Question_types
     * const count = await prisma.question_types.count({
     *   where: {
     *     // ... the filter for the Question_types we want to count
     *   }
     * })
    **/
    count<T extends question_typesCountArgs>(
      args?: Subset<T, question_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Question_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Question_typesAggregateArgs>(args: Subset<T, Question_typesAggregateArgs>): Prisma.PrismaPromise<GetQuestion_typesAggregateType<T>>

    /**
     * Group by Question_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {question_typesGroupByArgs} args - Group by arguments.
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
      T extends question_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: question_typesGroupByArgs['orderBy'] }
        : { orderBy?: question_typesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, question_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestion_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the question_types model
   */
  readonly fields: question_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for question_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__question_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends question_types$questionsArgs<ExtArgs> = {}>(args?: Subset<T, question_types$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the question_types model
   */
  interface question_typesFieldRefs {
    readonly id: FieldRef<"question_types", 'Int'>
    readonly name: FieldRef<"question_types", 'String'>
    readonly createdAt: FieldRef<"question_types", 'DateTime'>
    readonly updatedAt: FieldRef<"question_types", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * question_types findUnique
   */
  export type question_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_types
     */
    select?: question_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_types
     */
    omit?: question_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_typesInclude<ExtArgs> | null
    /**
     * Filter, which question_types to fetch.
     */
    where: question_typesWhereUniqueInput
  }

  /**
   * question_types findUniqueOrThrow
   */
  export type question_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_types
     */
    select?: question_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_types
     */
    omit?: question_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_typesInclude<ExtArgs> | null
    /**
     * Filter, which question_types to fetch.
     */
    where: question_typesWhereUniqueInput
  }

  /**
   * question_types findFirst
   */
  export type question_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_types
     */
    select?: question_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_types
     */
    omit?: question_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_typesInclude<ExtArgs> | null
    /**
     * Filter, which question_types to fetch.
     */
    where?: question_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_types to fetch.
     */
    orderBy?: question_typesOrderByWithRelationInput | question_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for question_types.
     */
    cursor?: question_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of question_types.
     */
    distinct?: Question_typesScalarFieldEnum | Question_typesScalarFieldEnum[]
  }

  /**
   * question_types findFirstOrThrow
   */
  export type question_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_types
     */
    select?: question_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_types
     */
    omit?: question_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_typesInclude<ExtArgs> | null
    /**
     * Filter, which question_types to fetch.
     */
    where?: question_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_types to fetch.
     */
    orderBy?: question_typesOrderByWithRelationInput | question_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for question_types.
     */
    cursor?: question_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of question_types.
     */
    distinct?: Question_typesScalarFieldEnum | Question_typesScalarFieldEnum[]
  }

  /**
   * question_types findMany
   */
  export type question_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_types
     */
    select?: question_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_types
     */
    omit?: question_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_typesInclude<ExtArgs> | null
    /**
     * Filter, which question_types to fetch.
     */
    where?: question_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of question_types to fetch.
     */
    orderBy?: question_typesOrderByWithRelationInput | question_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing question_types.
     */
    cursor?: question_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` question_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` question_types.
     */
    skip?: number
    distinct?: Question_typesScalarFieldEnum | Question_typesScalarFieldEnum[]
  }

  /**
   * question_types create
   */
  export type question_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_types
     */
    select?: question_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_types
     */
    omit?: question_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a question_types.
     */
    data: XOR<question_typesCreateInput, question_typesUncheckedCreateInput>
  }

  /**
   * question_types createMany
   */
  export type question_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many question_types.
     */
    data: question_typesCreateManyInput | question_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * question_types createManyAndReturn
   */
  export type question_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_types
     */
    select?: question_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the question_types
     */
    omit?: question_typesOmit<ExtArgs> | null
    /**
     * The data used to create many question_types.
     */
    data: question_typesCreateManyInput | question_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * question_types update
   */
  export type question_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_types
     */
    select?: question_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_types
     */
    omit?: question_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a question_types.
     */
    data: XOR<question_typesUpdateInput, question_typesUncheckedUpdateInput>
    /**
     * Choose, which question_types to update.
     */
    where: question_typesWhereUniqueInput
  }

  /**
   * question_types updateMany
   */
  export type question_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update question_types.
     */
    data: XOR<question_typesUpdateManyMutationInput, question_typesUncheckedUpdateManyInput>
    /**
     * Filter which question_types to update
     */
    where?: question_typesWhereInput
    /**
     * Limit how many question_types to update.
     */
    limit?: number
  }

  /**
   * question_types updateManyAndReturn
   */
  export type question_typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_types
     */
    select?: question_typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the question_types
     */
    omit?: question_typesOmit<ExtArgs> | null
    /**
     * The data used to update question_types.
     */
    data: XOR<question_typesUpdateManyMutationInput, question_typesUncheckedUpdateManyInput>
    /**
     * Filter which question_types to update
     */
    where?: question_typesWhereInput
    /**
     * Limit how many question_types to update.
     */
    limit?: number
  }

  /**
   * question_types upsert
   */
  export type question_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_types
     */
    select?: question_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_types
     */
    omit?: question_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the question_types to update in case it exists.
     */
    where: question_typesWhereUniqueInput
    /**
     * In case the question_types found by the `where` argument doesn't exist, create a new question_types with this data.
     */
    create: XOR<question_typesCreateInput, question_typesUncheckedCreateInput>
    /**
     * In case the question_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<question_typesUpdateInput, question_typesUncheckedUpdateInput>
  }

  /**
   * question_types delete
   */
  export type question_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_types
     */
    select?: question_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_types
     */
    omit?: question_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_typesInclude<ExtArgs> | null
    /**
     * Filter which question_types to delete.
     */
    where: question_typesWhereUniqueInput
  }

  /**
   * question_types deleteMany
   */
  export type question_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which question_types to delete
     */
    where?: question_typesWhereInput
    /**
     * Limit how many question_types to delete.
     */
    limit?: number
  }

  /**
   * question_types.questions
   */
  export type question_types$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    cursor?: questionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * question_types without action
   */
  export type question_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_types
     */
    select?: question_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_types
     */
    omit?: question_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_typesInclude<ExtArgs> | null
  }


  /**
   * Model questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    areaId: number | null
    difficultyId: number | null
    typeId: number | null
  }

  export type QuestionsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    areaId: number | null
    difficultyId: number | null
    typeId: number | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    areaId: number | null
    text: string | null
    difficultyId: number | null
    approved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    hint: string | null
    explanation: string | null
    typeId: number | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    areaId: number | null
    text: string | null
    difficultyId: number | null
    approved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    hint: string | null
    explanation: string | null
    typeId: number | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    userId: number
    areaId: number
    text: number
    difficultyId: number
    approved: number
    createdAt: number
    updatedAt: number
    hint: number
    explanation: number
    typeId: number
    _all: number
  }


  export type QuestionsAvgAggregateInputType = {
    id?: true
    userId?: true
    areaId?: true
    difficultyId?: true
    typeId?: true
  }

  export type QuestionsSumAggregateInputType = {
    id?: true
    userId?: true
    areaId?: true
    difficultyId?: true
    typeId?: true
  }

  export type QuestionsMinAggregateInputType = {
    id?: true
    userId?: true
    areaId?: true
    text?: true
    difficultyId?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
    hint?: true
    explanation?: true
    typeId?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    userId?: true
    areaId?: true
    text?: true
    difficultyId?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
    hint?: true
    explanation?: true
    typeId?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    userId?: true
    areaId?: true
    text?: true
    difficultyId?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
    hint?: true
    explanation?: true
    typeId?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to aggregate.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type questionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithAggregationInput | questionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: questionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _avg?: QuestionsAvgAggregateInputType
    _sum?: QuestionsSumAggregateInputType
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: number
    userId: number | null
    areaId: number | null
    text: string
    difficultyId: number
    approved: boolean
    createdAt: Date | null
    updatedAt: Date | null
    hint: string | null
    explanation: string | null
    typeId: number
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends questionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type questionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    areaId?: boolean
    text?: boolean
    difficultyId?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hint?: boolean
    explanation?: boolean
    typeId?: boolean
    question_images?: boolean | questions$question_imagesArgs<ExtArgs>
    question_options?: boolean | questions$question_optionsArgs<ExtArgs>
    question_references?: boolean | questions$question_referencesArgs<ExtArgs>
    areas?: boolean | questions$areasArgs<ExtArgs>
    difficulty?: boolean | difficultyDefaultArgs<ExtArgs>
    question_types?: boolean | question_typesDefaultArgs<ExtArgs>
    responses?: boolean | questions$responsesArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type questionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    areaId?: boolean
    text?: boolean
    difficultyId?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hint?: boolean
    explanation?: boolean
    typeId?: boolean
    areas?: boolean | questions$areasArgs<ExtArgs>
    difficulty?: boolean | difficultyDefaultArgs<ExtArgs>
    question_types?: boolean | question_typesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type questionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    areaId?: boolean
    text?: boolean
    difficultyId?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hint?: boolean
    explanation?: boolean
    typeId?: boolean
    areas?: boolean | questions$areasArgs<ExtArgs>
    difficulty?: boolean | difficultyDefaultArgs<ExtArgs>
    question_types?: boolean | question_typesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type questionsSelectScalar = {
    id?: boolean
    userId?: boolean
    areaId?: boolean
    text?: boolean
    difficultyId?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hint?: boolean
    explanation?: boolean
    typeId?: boolean
  }

  export type questionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "areaId" | "text" | "difficultyId" | "approved" | "createdAt" | "updatedAt" | "hint" | "explanation" | "typeId", ExtArgs["result"]["questions"]>
  export type questionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question_images?: boolean | questions$question_imagesArgs<ExtArgs>
    question_options?: boolean | questions$question_optionsArgs<ExtArgs>
    question_references?: boolean | questions$question_referencesArgs<ExtArgs>
    areas?: boolean | questions$areasArgs<ExtArgs>
    difficulty?: boolean | difficultyDefaultArgs<ExtArgs>
    question_types?: boolean | question_typesDefaultArgs<ExtArgs>
    responses?: boolean | questions$responsesArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type questionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | questions$areasArgs<ExtArgs>
    difficulty?: boolean | difficultyDefaultArgs<ExtArgs>
    question_types?: boolean | question_typesDefaultArgs<ExtArgs>
  }
  export type questionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | questions$areasArgs<ExtArgs>
    difficulty?: boolean | difficultyDefaultArgs<ExtArgs>
    question_types?: boolean | question_typesDefaultArgs<ExtArgs>
  }

  export type $questionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "questions"
    objects: {
      question_images: Prisma.$question_imagesPayload<ExtArgs>[]
      question_options: Prisma.$question_optionsPayload<ExtArgs>[]
      question_references: Prisma.$question_referencesPayload<ExtArgs>[]
      areas: Prisma.$areasPayload<ExtArgs> | null
      difficulty: Prisma.$difficultyPayload<ExtArgs>
      question_types: Prisma.$question_typesPayload<ExtArgs>
      responses: Prisma.$responsesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      areaId: number | null
      text: string
      difficultyId: number
      approved: boolean
      createdAt: Date | null
      updatedAt: Date | null
      hint: string | null
      explanation: string | null
      typeId: number
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type questionsGetPayload<S extends boolean | null | undefined | questionsDefaultArgs> = $Result.GetResult<Prisma.$questionsPayload, S>

  type questionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface questionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['questions'], meta: { name: 'questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {questionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questionsFindUniqueArgs>(args: SelectSubset<T, questionsFindUniqueArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questionsFindUniqueOrThrowArgs>(args: SelectSubset<T, questionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questionsFindFirstArgs>(args?: SelectSubset<T, questionsFindFirstArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questionsFindFirstOrThrowArgs>(args?: SelectSubset<T, questionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends questionsFindManyArgs>(args?: SelectSubset<T, questionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questions.
     * @param {questionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends questionsCreateArgs>(args: SelectSubset<T, questionsCreateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {questionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questionsCreateManyArgs>(args?: SelectSubset<T, questionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {questionsCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends questionsCreateManyAndReturnArgs>(args?: SelectSubset<T, questionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Questions.
     * @param {questionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends questionsDeleteArgs>(args: SelectSubset<T, questionsDeleteArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questions.
     * @param {questionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questionsUpdateArgs>(args: SelectSubset<T, questionsUpdateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {questionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questionsDeleteManyArgs>(args?: SelectSubset<T, questionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questionsUpdateManyArgs>(args: SelectSubset<T, questionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {questionsUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.updateManyAndReturn({
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
    updateManyAndReturn<T extends questionsUpdateManyAndReturnArgs>(args: SelectSubset<T, questionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Questions.
     * @param {questionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends questionsUpsertArgs>(args: SelectSubset<T, questionsUpsertArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends questionsCountArgs>(
      args?: Subset<T, questionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsGroupByArgs} args - Group by arguments.
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
      T extends questionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questionsGroupByArgs['orderBy'] }
        : { orderBy?: questionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, questionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the questions model
   */
  readonly fields: questionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question_images<T extends questions$question_imagesArgs<ExtArgs> = {}>(args?: Subset<T, questions$question_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    question_options<T extends questions$question_optionsArgs<ExtArgs> = {}>(args?: Subset<T, questions$question_optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    question_references<T extends questions$question_referencesArgs<ExtArgs> = {}>(args?: Subset<T, questions$question_referencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$question_referencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    areas<T extends questions$areasArgs<ExtArgs> = {}>(args?: Subset<T, questions$areasArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    difficulty<T extends difficultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, difficultyDefaultArgs<ExtArgs>>): Prisma__difficultyClient<$Result.GetResult<Prisma.$difficultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question_types<T extends question_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, question_typesDefaultArgs<ExtArgs>>): Prisma__question_typesClient<$Result.GetResult<Prisma.$question_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends questions$responsesArgs<ExtArgs> = {}>(args?: Subset<T, questions$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$responsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the questions model
   */
  interface questionsFieldRefs {
    readonly id: FieldRef<"questions", 'Int'>
    readonly userId: FieldRef<"questions", 'Int'>
    readonly areaId: FieldRef<"questions", 'Int'>
    readonly text: FieldRef<"questions", 'String'>
    readonly difficultyId: FieldRef<"questions", 'Int'>
    readonly approved: FieldRef<"questions", 'Boolean'>
    readonly createdAt: FieldRef<"questions", 'DateTime'>
    readonly updatedAt: FieldRef<"questions", 'DateTime'>
    readonly hint: FieldRef<"questions", 'String'>
    readonly explanation: FieldRef<"questions", 'String'>
    readonly typeId: FieldRef<"questions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * questions findUnique
   */
  export type questionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findUniqueOrThrow
   */
  export type questionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findFirst
   */
  export type questionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findFirstOrThrow
   */
  export type questionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findMany
   */
  export type questionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions create
   */
  export type questionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The data needed to create a questions.
     */
    data: XOR<questionsCreateInput, questionsUncheckedCreateInput>
  }

  /**
   * questions createMany
   */
  export type questionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questions.
     */
    data: questionsCreateManyInput | questionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * questions createManyAndReturn
   */
  export type questionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * The data used to create many questions.
     */
    data: questionsCreateManyInput | questionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * questions update
   */
  export type questionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The data needed to update a questions.
     */
    data: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
    /**
     * Choose, which questions to update.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions updateMany
   */
  export type questionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questions.
     */
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
  }

  /**
   * questions updateManyAndReturn
   */
  export type questionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * The data used to update questions.
     */
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * questions upsert
   */
  export type questionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The filter to search for the questions to update in case it exists.
     */
    where: questionsWhereUniqueInput
    /**
     * In case the questions found by the `where` argument doesn't exist, create a new questions with this data.
     */
    create: XOR<questionsCreateInput, questionsUncheckedCreateInput>
    /**
     * In case the questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
  }

  /**
   * questions delete
   */
  export type questionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter which questions to delete.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions deleteMany
   */
  export type questionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to delete
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to delete.
     */
    limit?: number
  }

  /**
   * questions.question_images
   */
  export type questions$question_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_images
     */
    select?: question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_images
     */
    omit?: question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_imagesInclude<ExtArgs> | null
    where?: question_imagesWhereInput
    orderBy?: question_imagesOrderByWithRelationInput | question_imagesOrderByWithRelationInput[]
    cursor?: question_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Question_imagesScalarFieldEnum | Question_imagesScalarFieldEnum[]
  }

  /**
   * questions.question_options
   */
  export type questions$question_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_options
     */
    select?: question_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_options
     */
    omit?: question_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_optionsInclude<ExtArgs> | null
    where?: question_optionsWhereInput
    orderBy?: question_optionsOrderByWithRelationInput | question_optionsOrderByWithRelationInput[]
    cursor?: question_optionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Question_optionsScalarFieldEnum | Question_optionsScalarFieldEnum[]
  }

  /**
   * questions.question_references
   */
  export type questions$question_referencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question_references
     */
    select?: question_referencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question_references
     */
    omit?: question_referencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: question_referencesInclude<ExtArgs> | null
    where?: question_referencesWhereInput
    orderBy?: question_referencesOrderByWithRelationInput | question_referencesOrderByWithRelationInput[]
    cursor?: question_referencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Question_referencesScalarFieldEnum | Question_referencesScalarFieldEnum[]
  }

  /**
   * questions.areas
   */
  export type questions$areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areasInclude<ExtArgs> | null
    where?: areasWhereInput
  }

  /**
   * questions.responses
   */
  export type questions$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the responses
     */
    select?: responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the responses
     */
    omit?: responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: responsesInclude<ExtArgs> | null
    where?: responsesWhereInput
    orderBy?: responsesOrderByWithRelationInput | responsesOrderByWithRelationInput[]
    cursor?: responsesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponsesScalarFieldEnum | ResponsesScalarFieldEnum[]
  }

  /**
   * questions without action
   */
  export type questionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
  }


  /**
   * Model responses
   */

  export type AggregateResponses = {
    _count: ResponsesCountAggregateOutputType | null
    _avg: ResponsesAvgAggregateOutputType | null
    _sum: ResponsesSumAggregateOutputType | null
    _min: ResponsesMinAggregateOutputType | null
    _max: ResponsesMaxAggregateOutputType | null
  }

  export type ResponsesAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
    userId: number | null
    responseTime: number | null
    selectedOptionId: number | null
  }

  export type ResponsesSumAggregateOutputType = {
    id: number | null
    questionId: number | null
    userId: number | null
    responseTime: number | null
    selectedOptionId: number | null
  }

  export type ResponsesMinAggregateOutputType = {
    id: number | null
    questionId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    responseTime: number | null
    selectedOptionId: number | null
  }

  export type ResponsesMaxAggregateOutputType = {
    id: number | null
    questionId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    responseTime: number | null
    selectedOptionId: number | null
  }

  export type ResponsesCountAggregateOutputType = {
    id: number
    questionId: number
    createdAt: number
    updatedAt: number
    userId: number
    responseTime: number
    selectedOptionId: number
    _all: number
  }


  export type ResponsesAvgAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    responseTime?: true
    selectedOptionId?: true
  }

  export type ResponsesSumAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    responseTime?: true
    selectedOptionId?: true
  }

  export type ResponsesMinAggregateInputType = {
    id?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    responseTime?: true
    selectedOptionId?: true
  }

  export type ResponsesMaxAggregateInputType = {
    id?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    responseTime?: true
    selectedOptionId?: true
  }

  export type ResponsesCountAggregateInputType = {
    id?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    responseTime?: true
    selectedOptionId?: true
    _all?: true
  }

  export type ResponsesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which responses to aggregate.
     */
    where?: responsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of responses to fetch.
     */
    orderBy?: responsesOrderByWithRelationInput | responsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: responsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned responses
    **/
    _count?: true | ResponsesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResponsesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResponsesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponsesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponsesMaxAggregateInputType
  }

  export type GetResponsesAggregateType<T extends ResponsesAggregateArgs> = {
        [P in keyof T & keyof AggregateResponses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponses[P]>
      : GetScalarType<T[P], AggregateResponses[P]>
  }




  export type responsesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: responsesWhereInput
    orderBy?: responsesOrderByWithAggregationInput | responsesOrderByWithAggregationInput[]
    by: ResponsesScalarFieldEnum[] | ResponsesScalarFieldEnum
    having?: responsesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponsesCountAggregateInputType | true
    _avg?: ResponsesAvgAggregateInputType
    _sum?: ResponsesSumAggregateInputType
    _min?: ResponsesMinAggregateInputType
    _max?: ResponsesMaxAggregateInputType
  }

  export type ResponsesGroupByOutputType = {
    id: number
    questionId: number
    createdAt: Date | null
    updatedAt: Date | null
    userId: number
    responseTime: number | null
    selectedOptionId: number
    _count: ResponsesCountAggregateOutputType | null
    _avg: ResponsesAvgAggregateOutputType | null
    _sum: ResponsesSumAggregateOutputType | null
    _min: ResponsesMinAggregateOutputType | null
    _max: ResponsesMaxAggregateOutputType | null
  }

  type GetResponsesGroupByPayload<T extends responsesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponsesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponsesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponsesGroupByOutputType[P]>
            : GetScalarType<T[P], ResponsesGroupByOutputType[P]>
        }
      >
    >


  export type responsesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    responseTime?: boolean
    selectedOptionId?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responses"]>

  export type responsesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    responseTime?: boolean
    selectedOptionId?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responses"]>

  export type responsesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    responseTime?: boolean
    selectedOptionId?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responses"]>

  export type responsesSelectScalar = {
    id?: boolean
    questionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    responseTime?: boolean
    selectedOptionId?: boolean
  }

  export type responsesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "createdAt" | "updatedAt" | "userId" | "responseTime" | "selectedOptionId", ExtArgs["result"]["responses"]>
  export type responsesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }
  export type responsesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }
  export type responsesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }

  export type $responsesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "responses"
    objects: {
      questions: Prisma.$questionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      questionId: number
      createdAt: Date | null
      updatedAt: Date | null
      userId: number
      responseTime: number | null
      selectedOptionId: number
    }, ExtArgs["result"]["responses"]>
    composites: {}
  }

  type responsesGetPayload<S extends boolean | null | undefined | responsesDefaultArgs> = $Result.GetResult<Prisma.$responsesPayload, S>

  type responsesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<responsesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResponsesCountAggregateInputType | true
    }

  export interface responsesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['responses'], meta: { name: 'responses' } }
    /**
     * Find zero or one Responses that matches the filter.
     * @param {responsesFindUniqueArgs} args - Arguments to find a Responses
     * @example
     * // Get one Responses
     * const responses = await prisma.responses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends responsesFindUniqueArgs>(args: SelectSubset<T, responsesFindUniqueArgs<ExtArgs>>): Prisma__responsesClient<$Result.GetResult<Prisma.$responsesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Responses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {responsesFindUniqueOrThrowArgs} args - Arguments to find a Responses
     * @example
     * // Get one Responses
     * const responses = await prisma.responses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends responsesFindUniqueOrThrowArgs>(args: SelectSubset<T, responsesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__responsesClient<$Result.GetResult<Prisma.$responsesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {responsesFindFirstArgs} args - Arguments to find a Responses
     * @example
     * // Get one Responses
     * const responses = await prisma.responses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends responsesFindFirstArgs>(args?: SelectSubset<T, responsesFindFirstArgs<ExtArgs>>): Prisma__responsesClient<$Result.GetResult<Prisma.$responsesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Responses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {responsesFindFirstOrThrowArgs} args - Arguments to find a Responses
     * @example
     * // Get one Responses
     * const responses = await prisma.responses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends responsesFindFirstOrThrowArgs>(args?: SelectSubset<T, responsesFindFirstOrThrowArgs<ExtArgs>>): Prisma__responsesClient<$Result.GetResult<Prisma.$responsesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {responsesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responses
     * const responses = await prisma.responses.findMany()
     * 
     * // Get first 10 Responses
     * const responses = await prisma.responses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responsesWithIdOnly = await prisma.responses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends responsesFindManyArgs>(args?: SelectSubset<T, responsesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$responsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Responses.
     * @param {responsesCreateArgs} args - Arguments to create a Responses.
     * @example
     * // Create one Responses
     * const Responses = await prisma.responses.create({
     *   data: {
     *     // ... data to create a Responses
     *   }
     * })
     * 
     */
    create<T extends responsesCreateArgs>(args: SelectSubset<T, responsesCreateArgs<ExtArgs>>): Prisma__responsesClient<$Result.GetResult<Prisma.$responsesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Responses.
     * @param {responsesCreateManyArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const responses = await prisma.responses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends responsesCreateManyArgs>(args?: SelectSubset<T, responsesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Responses and returns the data saved in the database.
     * @param {responsesCreateManyAndReturnArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const responses = await prisma.responses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Responses and only return the `id`
     * const responsesWithIdOnly = await prisma.responses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends responsesCreateManyAndReturnArgs>(args?: SelectSubset<T, responsesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$responsesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Responses.
     * @param {responsesDeleteArgs} args - Arguments to delete one Responses.
     * @example
     * // Delete one Responses
     * const Responses = await prisma.responses.delete({
     *   where: {
     *     // ... filter to delete one Responses
     *   }
     * })
     * 
     */
    delete<T extends responsesDeleteArgs>(args: SelectSubset<T, responsesDeleteArgs<ExtArgs>>): Prisma__responsesClient<$Result.GetResult<Prisma.$responsesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Responses.
     * @param {responsesUpdateArgs} args - Arguments to update one Responses.
     * @example
     * // Update one Responses
     * const responses = await prisma.responses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends responsesUpdateArgs>(args: SelectSubset<T, responsesUpdateArgs<ExtArgs>>): Prisma__responsesClient<$Result.GetResult<Prisma.$responsesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Responses.
     * @param {responsesDeleteManyArgs} args - Arguments to filter Responses to delete.
     * @example
     * // Delete a few Responses
     * const { count } = await prisma.responses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends responsesDeleteManyArgs>(args?: SelectSubset<T, responsesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {responsesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responses
     * const responses = await prisma.responses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends responsesUpdateManyArgs>(args: SelectSubset<T, responsesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responses and returns the data updated in the database.
     * @param {responsesUpdateManyAndReturnArgs} args - Arguments to update many Responses.
     * @example
     * // Update many Responses
     * const responses = await prisma.responses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Responses and only return the `id`
     * const responsesWithIdOnly = await prisma.responses.updateManyAndReturn({
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
    updateManyAndReturn<T extends responsesUpdateManyAndReturnArgs>(args: SelectSubset<T, responsesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$responsesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Responses.
     * @param {responsesUpsertArgs} args - Arguments to update or create a Responses.
     * @example
     * // Update or create a Responses
     * const responses = await prisma.responses.upsert({
     *   create: {
     *     // ... data to create a Responses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Responses we want to update
     *   }
     * })
     */
    upsert<T extends responsesUpsertArgs>(args: SelectSubset<T, responsesUpsertArgs<ExtArgs>>): Prisma__responsesClient<$Result.GetResult<Prisma.$responsesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {responsesCountArgs} args - Arguments to filter Responses to count.
     * @example
     * // Count the number of Responses
     * const count = await prisma.responses.count({
     *   where: {
     *     // ... the filter for the Responses we want to count
     *   }
     * })
    **/
    count<T extends responsesCountArgs>(
      args?: Subset<T, responsesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponsesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResponsesAggregateArgs>(args: Subset<T, ResponsesAggregateArgs>): Prisma.PrismaPromise<GetResponsesAggregateType<T>>

    /**
     * Group by Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {responsesGroupByArgs} args - Group by arguments.
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
      T extends responsesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: responsesGroupByArgs['orderBy'] }
        : { orderBy?: responsesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, responsesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponsesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the responses model
   */
  readonly fields: responsesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for responses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__responsesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends questionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questionsDefaultArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the responses model
   */
  interface responsesFieldRefs {
    readonly id: FieldRef<"responses", 'Int'>
    readonly questionId: FieldRef<"responses", 'Int'>
    readonly createdAt: FieldRef<"responses", 'DateTime'>
    readonly updatedAt: FieldRef<"responses", 'DateTime'>
    readonly userId: FieldRef<"responses", 'Int'>
    readonly responseTime: FieldRef<"responses", 'Int'>
    readonly selectedOptionId: FieldRef<"responses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * responses findUnique
   */
  export type responsesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the responses
     */
    select?: responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the responses
     */
    omit?: responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: responsesInclude<ExtArgs> | null
    /**
     * Filter, which responses to fetch.
     */
    where: responsesWhereUniqueInput
  }

  /**
   * responses findUniqueOrThrow
   */
  export type responsesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the responses
     */
    select?: responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the responses
     */
    omit?: responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: responsesInclude<ExtArgs> | null
    /**
     * Filter, which responses to fetch.
     */
    where: responsesWhereUniqueInput
  }

  /**
   * responses findFirst
   */
  export type responsesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the responses
     */
    select?: responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the responses
     */
    omit?: responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: responsesInclude<ExtArgs> | null
    /**
     * Filter, which responses to fetch.
     */
    where?: responsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of responses to fetch.
     */
    orderBy?: responsesOrderByWithRelationInput | responsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for responses.
     */
    cursor?: responsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of responses.
     */
    distinct?: ResponsesScalarFieldEnum | ResponsesScalarFieldEnum[]
  }

  /**
   * responses findFirstOrThrow
   */
  export type responsesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the responses
     */
    select?: responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the responses
     */
    omit?: responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: responsesInclude<ExtArgs> | null
    /**
     * Filter, which responses to fetch.
     */
    where?: responsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of responses to fetch.
     */
    orderBy?: responsesOrderByWithRelationInput | responsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for responses.
     */
    cursor?: responsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of responses.
     */
    distinct?: ResponsesScalarFieldEnum | ResponsesScalarFieldEnum[]
  }

  /**
   * responses findMany
   */
  export type responsesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the responses
     */
    select?: responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the responses
     */
    omit?: responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: responsesInclude<ExtArgs> | null
    /**
     * Filter, which responses to fetch.
     */
    where?: responsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of responses to fetch.
     */
    orderBy?: responsesOrderByWithRelationInput | responsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing responses.
     */
    cursor?: responsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` responses.
     */
    skip?: number
    distinct?: ResponsesScalarFieldEnum | ResponsesScalarFieldEnum[]
  }

  /**
   * responses create
   */
  export type responsesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the responses
     */
    select?: responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the responses
     */
    omit?: responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: responsesInclude<ExtArgs> | null
    /**
     * The data needed to create a responses.
     */
    data: XOR<responsesCreateInput, responsesUncheckedCreateInput>
  }

  /**
   * responses createMany
   */
  export type responsesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many responses.
     */
    data: responsesCreateManyInput | responsesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * responses createManyAndReturn
   */
  export type responsesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the responses
     */
    select?: responsesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the responses
     */
    omit?: responsesOmit<ExtArgs> | null
    /**
     * The data used to create many responses.
     */
    data: responsesCreateManyInput | responsesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: responsesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * responses update
   */
  export type responsesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the responses
     */
    select?: responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the responses
     */
    omit?: responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: responsesInclude<ExtArgs> | null
    /**
     * The data needed to update a responses.
     */
    data: XOR<responsesUpdateInput, responsesUncheckedUpdateInput>
    /**
     * Choose, which responses to update.
     */
    where: responsesWhereUniqueInput
  }

  /**
   * responses updateMany
   */
  export type responsesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update responses.
     */
    data: XOR<responsesUpdateManyMutationInput, responsesUncheckedUpdateManyInput>
    /**
     * Filter which responses to update
     */
    where?: responsesWhereInput
    /**
     * Limit how many responses to update.
     */
    limit?: number
  }

  /**
   * responses updateManyAndReturn
   */
  export type responsesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the responses
     */
    select?: responsesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the responses
     */
    omit?: responsesOmit<ExtArgs> | null
    /**
     * The data used to update responses.
     */
    data: XOR<responsesUpdateManyMutationInput, responsesUncheckedUpdateManyInput>
    /**
     * Filter which responses to update
     */
    where?: responsesWhereInput
    /**
     * Limit how many responses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: responsesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * responses upsert
   */
  export type responsesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the responses
     */
    select?: responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the responses
     */
    omit?: responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: responsesInclude<ExtArgs> | null
    /**
     * The filter to search for the responses to update in case it exists.
     */
    where: responsesWhereUniqueInput
    /**
     * In case the responses found by the `where` argument doesn't exist, create a new responses with this data.
     */
    create: XOR<responsesCreateInput, responsesUncheckedCreateInput>
    /**
     * In case the responses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<responsesUpdateInput, responsesUncheckedUpdateInput>
  }

  /**
   * responses delete
   */
  export type responsesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the responses
     */
    select?: responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the responses
     */
    omit?: responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: responsesInclude<ExtArgs> | null
    /**
     * Filter which responses to delete.
     */
    where: responsesWhereUniqueInput
  }

  /**
   * responses deleteMany
   */
  export type responsesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which responses to delete
     */
    where?: responsesWhereInput
    /**
     * Limit how many responses to delete.
     */
    limit?: number
  }

  /**
   * responses without action
   */
  export type responsesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the responses
     */
    select?: responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the responses
     */
    omit?: responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: responsesInclude<ExtArgs> | null
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


  export const AreasScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parentAreaID: 'parentAreaID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AreasScalarFieldEnum = (typeof AreasScalarFieldEnum)[keyof typeof AreasScalarFieldEnum]


  export const DifficultyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DifficultyScalarFieldEnum = (typeof DifficultyScalarFieldEnum)[keyof typeof DifficultyScalarFieldEnum]


  export const Question_imagesScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    imageId: 'imageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Question_imagesScalarFieldEnum = (typeof Question_imagesScalarFieldEnum)[keyof typeof Question_imagesScalarFieldEnum]


  export const Question_optionsScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    correct: 'correct',
    additional: 'additional'
  };

  export type Question_optionsScalarFieldEnum = (typeof Question_optionsScalarFieldEnum)[keyof typeof Question_optionsScalarFieldEnum]


  export const Question_referencesScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    referenceId: 'referenceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Question_referencesScalarFieldEnum = (typeof Question_referencesScalarFieldEnum)[keyof typeof Question_referencesScalarFieldEnum]


  export const Question_typesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Question_typesScalarFieldEnum = (typeof Question_typesScalarFieldEnum)[keyof typeof Question_typesScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    areaId: 'areaId',
    text: 'text',
    difficultyId: 'difficultyId',
    approved: 'approved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    hint: 'hint',
    explanation: 'explanation',
    typeId: 'typeId'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const ResponsesScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    responseTime: 'responseTime',
    selectedOptionId: 'selectedOptionId'
  };

  export type ResponsesScalarFieldEnum = (typeof ResponsesScalarFieldEnum)[keyof typeof ResponsesScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type areasWhereInput = {
    AND?: areasWhereInput | areasWhereInput[]
    OR?: areasWhereInput[]
    NOT?: areasWhereInput | areasWhereInput[]
    id?: IntFilter<"areas"> | number
    name?: StringFilter<"areas"> | string
    parentAreaID?: IntNullableFilter<"areas"> | number | null
    createdAt?: DateTimeNullableFilter<"areas"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"areas"> | Date | string | null
    areas?: XOR<AreasNullableScalarRelationFilter, areasWhereInput> | null
    other_areas?: AreasListRelationFilter
    questions?: QuestionsListRelationFilter
  }

  export type areasOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    parentAreaID?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    areas?: areasOrderByWithRelationInput
    other_areas?: areasOrderByRelationAggregateInput
    questions?: questionsOrderByRelationAggregateInput
  }

  export type areasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: areasWhereInput | areasWhereInput[]
    OR?: areasWhereInput[]
    NOT?: areasWhereInput | areasWhereInput[]
    name?: StringFilter<"areas"> | string
    parentAreaID?: IntNullableFilter<"areas"> | number | null
    createdAt?: DateTimeNullableFilter<"areas"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"areas"> | Date | string | null
    areas?: XOR<AreasNullableScalarRelationFilter, areasWhereInput> | null
    other_areas?: AreasListRelationFilter
    questions?: QuestionsListRelationFilter
  }, "id">

  export type areasOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    parentAreaID?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: areasCountOrderByAggregateInput
    _avg?: areasAvgOrderByAggregateInput
    _max?: areasMaxOrderByAggregateInput
    _min?: areasMinOrderByAggregateInput
    _sum?: areasSumOrderByAggregateInput
  }

  export type areasScalarWhereWithAggregatesInput = {
    AND?: areasScalarWhereWithAggregatesInput | areasScalarWhereWithAggregatesInput[]
    OR?: areasScalarWhereWithAggregatesInput[]
    NOT?: areasScalarWhereWithAggregatesInput | areasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"areas"> | number
    name?: StringWithAggregatesFilter<"areas"> | string
    parentAreaID?: IntNullableWithAggregatesFilter<"areas"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"areas"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"areas"> | Date | string | null
  }

  export type difficultyWhereInput = {
    AND?: difficultyWhereInput | difficultyWhereInput[]
    OR?: difficultyWhereInput[]
    NOT?: difficultyWhereInput | difficultyWhereInput[]
    id?: IntFilter<"difficulty"> | number
    name?: StringFilter<"difficulty"> | string
    createdAt?: DateTimeNullableFilter<"difficulty"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"difficulty"> | Date | string | null
    questions?: QuestionsListRelationFilter
  }

  export type difficultyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    questions?: questionsOrderByRelationAggregateInput
  }

  export type difficultyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: difficultyWhereInput | difficultyWhereInput[]
    OR?: difficultyWhereInput[]
    NOT?: difficultyWhereInput | difficultyWhereInput[]
    name?: StringFilter<"difficulty"> | string
    createdAt?: DateTimeNullableFilter<"difficulty"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"difficulty"> | Date | string | null
    questions?: QuestionsListRelationFilter
  }, "id">

  export type difficultyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: difficultyCountOrderByAggregateInput
    _avg?: difficultyAvgOrderByAggregateInput
    _max?: difficultyMaxOrderByAggregateInput
    _min?: difficultyMinOrderByAggregateInput
    _sum?: difficultySumOrderByAggregateInput
  }

  export type difficultyScalarWhereWithAggregatesInput = {
    AND?: difficultyScalarWhereWithAggregatesInput | difficultyScalarWhereWithAggregatesInput[]
    OR?: difficultyScalarWhereWithAggregatesInput[]
    NOT?: difficultyScalarWhereWithAggregatesInput | difficultyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"difficulty"> | number
    name?: StringWithAggregatesFilter<"difficulty"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"difficulty"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"difficulty"> | Date | string | null
  }

  export type question_imagesWhereInput = {
    AND?: question_imagesWhereInput | question_imagesWhereInput[]
    OR?: question_imagesWhereInput[]
    NOT?: question_imagesWhereInput | question_imagesWhereInput[]
    id?: IntFilter<"question_images"> | number
    questionId?: IntFilter<"question_images"> | number
    imageId?: IntFilter<"question_images"> | number
    createdAt?: DateTimeNullableFilter<"question_images"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"question_images"> | Date | string | null
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }

  export type question_imagesOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    questions?: questionsOrderByWithRelationInput
  }

  export type question_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: question_imagesWhereInput | question_imagesWhereInput[]
    OR?: question_imagesWhereInput[]
    NOT?: question_imagesWhereInput | question_imagesWhereInput[]
    questionId?: IntFilter<"question_images"> | number
    imageId?: IntFilter<"question_images"> | number
    createdAt?: DateTimeNullableFilter<"question_images"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"question_images"> | Date | string | null
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }, "id">

  export type question_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: question_imagesCountOrderByAggregateInput
    _avg?: question_imagesAvgOrderByAggregateInput
    _max?: question_imagesMaxOrderByAggregateInput
    _min?: question_imagesMinOrderByAggregateInput
    _sum?: question_imagesSumOrderByAggregateInput
  }

  export type question_imagesScalarWhereWithAggregatesInput = {
    AND?: question_imagesScalarWhereWithAggregatesInput | question_imagesScalarWhereWithAggregatesInput[]
    OR?: question_imagesScalarWhereWithAggregatesInput[]
    NOT?: question_imagesScalarWhereWithAggregatesInput | question_imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"question_images"> | number
    questionId?: IntWithAggregatesFilter<"question_images"> | number
    imageId?: IntWithAggregatesFilter<"question_images"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"question_images"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"question_images"> | Date | string | null
  }

  export type question_optionsWhereInput = {
    AND?: question_optionsWhereInput | question_optionsWhereInput[]
    OR?: question_optionsWhereInput[]
    NOT?: question_optionsWhereInput | question_optionsWhereInput[]
    id?: IntFilter<"question_options"> | number
    questionId?: IntFilter<"question_options"> | number
    text?: StringFilter<"question_options"> | string
    createdAt?: DateTimeNullableFilter<"question_options"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"question_options"> | Date | string | null
    correct?: BoolFilter<"question_options"> | boolean
    additional?: StringNullableFilter<"question_options"> | string | null
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }

  export type question_optionsOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    correct?: SortOrder
    additional?: SortOrderInput | SortOrder
    questions?: questionsOrderByWithRelationInput
  }

  export type question_optionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: question_optionsWhereInput | question_optionsWhereInput[]
    OR?: question_optionsWhereInput[]
    NOT?: question_optionsWhereInput | question_optionsWhereInput[]
    questionId?: IntFilter<"question_options"> | number
    text?: StringFilter<"question_options"> | string
    createdAt?: DateTimeNullableFilter<"question_options"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"question_options"> | Date | string | null
    correct?: BoolFilter<"question_options"> | boolean
    additional?: StringNullableFilter<"question_options"> | string | null
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }, "id">

  export type question_optionsOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    correct?: SortOrder
    additional?: SortOrderInput | SortOrder
    _count?: question_optionsCountOrderByAggregateInput
    _avg?: question_optionsAvgOrderByAggregateInput
    _max?: question_optionsMaxOrderByAggregateInput
    _min?: question_optionsMinOrderByAggregateInput
    _sum?: question_optionsSumOrderByAggregateInput
  }

  export type question_optionsScalarWhereWithAggregatesInput = {
    AND?: question_optionsScalarWhereWithAggregatesInput | question_optionsScalarWhereWithAggregatesInput[]
    OR?: question_optionsScalarWhereWithAggregatesInput[]
    NOT?: question_optionsScalarWhereWithAggregatesInput | question_optionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"question_options"> | number
    questionId?: IntWithAggregatesFilter<"question_options"> | number
    text?: StringWithAggregatesFilter<"question_options"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"question_options"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"question_options"> | Date | string | null
    correct?: BoolWithAggregatesFilter<"question_options"> | boolean
    additional?: StringNullableWithAggregatesFilter<"question_options"> | string | null
  }

  export type question_referencesWhereInput = {
    AND?: question_referencesWhereInput | question_referencesWhereInput[]
    OR?: question_referencesWhereInput[]
    NOT?: question_referencesWhereInput | question_referencesWhereInput[]
    id?: IntFilter<"question_references"> | number
    questionId?: IntFilter<"question_references"> | number
    referenceId?: IntFilter<"question_references"> | number
    createdAt?: DateTimeNullableFilter<"question_references"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"question_references"> | Date | string | null
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }

  export type question_referencesOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    questions?: questionsOrderByWithRelationInput
  }

  export type question_referencesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: question_referencesWhereInput | question_referencesWhereInput[]
    OR?: question_referencesWhereInput[]
    NOT?: question_referencesWhereInput | question_referencesWhereInput[]
    questionId?: IntFilter<"question_references"> | number
    referenceId?: IntFilter<"question_references"> | number
    createdAt?: DateTimeNullableFilter<"question_references"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"question_references"> | Date | string | null
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }, "id">

  export type question_referencesOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: question_referencesCountOrderByAggregateInput
    _avg?: question_referencesAvgOrderByAggregateInput
    _max?: question_referencesMaxOrderByAggregateInput
    _min?: question_referencesMinOrderByAggregateInput
    _sum?: question_referencesSumOrderByAggregateInput
  }

  export type question_referencesScalarWhereWithAggregatesInput = {
    AND?: question_referencesScalarWhereWithAggregatesInput | question_referencesScalarWhereWithAggregatesInput[]
    OR?: question_referencesScalarWhereWithAggregatesInput[]
    NOT?: question_referencesScalarWhereWithAggregatesInput | question_referencesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"question_references"> | number
    questionId?: IntWithAggregatesFilter<"question_references"> | number
    referenceId?: IntWithAggregatesFilter<"question_references"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"question_references"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"question_references"> | Date | string | null
  }

  export type question_typesWhereInput = {
    AND?: question_typesWhereInput | question_typesWhereInput[]
    OR?: question_typesWhereInput[]
    NOT?: question_typesWhereInput | question_typesWhereInput[]
    id?: IntFilter<"question_types"> | number
    name?: StringFilter<"question_types"> | string
    createdAt?: DateTimeNullableFilter<"question_types"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"question_types"> | Date | string | null
    questions?: QuestionsListRelationFilter
  }

  export type question_typesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    questions?: questionsOrderByRelationAggregateInput
  }

  export type question_typesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: question_typesWhereInput | question_typesWhereInput[]
    OR?: question_typesWhereInput[]
    NOT?: question_typesWhereInput | question_typesWhereInput[]
    name?: StringFilter<"question_types"> | string
    createdAt?: DateTimeNullableFilter<"question_types"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"question_types"> | Date | string | null
    questions?: QuestionsListRelationFilter
  }, "id">

  export type question_typesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: question_typesCountOrderByAggregateInput
    _avg?: question_typesAvgOrderByAggregateInput
    _max?: question_typesMaxOrderByAggregateInput
    _min?: question_typesMinOrderByAggregateInput
    _sum?: question_typesSumOrderByAggregateInput
  }

  export type question_typesScalarWhereWithAggregatesInput = {
    AND?: question_typesScalarWhereWithAggregatesInput | question_typesScalarWhereWithAggregatesInput[]
    OR?: question_typesScalarWhereWithAggregatesInput[]
    NOT?: question_typesScalarWhereWithAggregatesInput | question_typesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"question_types"> | number
    name?: StringWithAggregatesFilter<"question_types"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"question_types"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"question_types"> | Date | string | null
  }

  export type questionsWhereInput = {
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    id?: IntFilter<"questions"> | number
    userId?: IntNullableFilter<"questions"> | number | null
    areaId?: IntNullableFilter<"questions"> | number | null
    text?: StringFilter<"questions"> | string
    difficultyId?: IntFilter<"questions"> | number
    approved?: BoolFilter<"questions"> | boolean
    createdAt?: DateTimeNullableFilter<"questions"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"questions"> | Date | string | null
    hint?: StringNullableFilter<"questions"> | string | null
    explanation?: StringNullableFilter<"questions"> | string | null
    typeId?: IntFilter<"questions"> | number
    question_images?: Question_imagesListRelationFilter
    question_options?: Question_optionsListRelationFilter
    question_references?: Question_referencesListRelationFilter
    areas?: XOR<AreasNullableScalarRelationFilter, areasWhereInput> | null
    difficulty?: XOR<DifficultyScalarRelationFilter, difficultyWhereInput>
    question_types?: XOR<Question_typesScalarRelationFilter, question_typesWhereInput>
    responses?: ResponsesListRelationFilter
  }

  export type questionsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    areaId?: SortOrderInput | SortOrder
    text?: SortOrder
    difficultyId?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    hint?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    typeId?: SortOrder
    question_images?: question_imagesOrderByRelationAggregateInput
    question_options?: question_optionsOrderByRelationAggregateInput
    question_references?: question_referencesOrderByRelationAggregateInput
    areas?: areasOrderByWithRelationInput
    difficulty?: difficultyOrderByWithRelationInput
    question_types?: question_typesOrderByWithRelationInput
    responses?: responsesOrderByRelationAggregateInput
  }

  export type questionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    userId?: IntNullableFilter<"questions"> | number | null
    areaId?: IntNullableFilter<"questions"> | number | null
    text?: StringFilter<"questions"> | string
    difficultyId?: IntFilter<"questions"> | number
    approved?: BoolFilter<"questions"> | boolean
    createdAt?: DateTimeNullableFilter<"questions"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"questions"> | Date | string | null
    hint?: StringNullableFilter<"questions"> | string | null
    explanation?: StringNullableFilter<"questions"> | string | null
    typeId?: IntFilter<"questions"> | number
    question_images?: Question_imagesListRelationFilter
    question_options?: Question_optionsListRelationFilter
    question_references?: Question_referencesListRelationFilter
    areas?: XOR<AreasNullableScalarRelationFilter, areasWhereInput> | null
    difficulty?: XOR<DifficultyScalarRelationFilter, difficultyWhereInput>
    question_types?: XOR<Question_typesScalarRelationFilter, question_typesWhereInput>
    responses?: ResponsesListRelationFilter
  }, "id">

  export type questionsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    areaId?: SortOrderInput | SortOrder
    text?: SortOrder
    difficultyId?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    hint?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    typeId?: SortOrder
    _count?: questionsCountOrderByAggregateInput
    _avg?: questionsAvgOrderByAggregateInput
    _max?: questionsMaxOrderByAggregateInput
    _min?: questionsMinOrderByAggregateInput
    _sum?: questionsSumOrderByAggregateInput
  }

  export type questionsScalarWhereWithAggregatesInput = {
    AND?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    OR?: questionsScalarWhereWithAggregatesInput[]
    NOT?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"questions"> | number
    userId?: IntNullableWithAggregatesFilter<"questions"> | number | null
    areaId?: IntNullableWithAggregatesFilter<"questions"> | number | null
    text?: StringWithAggregatesFilter<"questions"> | string
    difficultyId?: IntWithAggregatesFilter<"questions"> | number
    approved?: BoolWithAggregatesFilter<"questions"> | boolean
    createdAt?: DateTimeNullableWithAggregatesFilter<"questions"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"questions"> | Date | string | null
    hint?: StringNullableWithAggregatesFilter<"questions"> | string | null
    explanation?: StringNullableWithAggregatesFilter<"questions"> | string | null
    typeId?: IntWithAggregatesFilter<"questions"> | number
  }

  export type responsesWhereInput = {
    AND?: responsesWhereInput | responsesWhereInput[]
    OR?: responsesWhereInput[]
    NOT?: responsesWhereInput | responsesWhereInput[]
    id?: IntFilter<"responses"> | number
    questionId?: IntFilter<"responses"> | number
    createdAt?: DateTimeNullableFilter<"responses"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"responses"> | Date | string | null
    userId?: IntFilter<"responses"> | number
    responseTime?: IntNullableFilter<"responses"> | number | null
    selectedOptionId?: IntFilter<"responses"> | number
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }

  export type responsesOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    responseTime?: SortOrderInput | SortOrder
    selectedOptionId?: SortOrder
    questions?: questionsOrderByWithRelationInput
  }

  export type responsesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: responsesWhereInput | responsesWhereInput[]
    OR?: responsesWhereInput[]
    NOT?: responsesWhereInput | responsesWhereInput[]
    questionId?: IntFilter<"responses"> | number
    createdAt?: DateTimeNullableFilter<"responses"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"responses"> | Date | string | null
    userId?: IntFilter<"responses"> | number
    responseTime?: IntNullableFilter<"responses"> | number | null
    selectedOptionId?: IntFilter<"responses"> | number
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }, "id">

  export type responsesOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    responseTime?: SortOrderInput | SortOrder
    selectedOptionId?: SortOrder
    _count?: responsesCountOrderByAggregateInput
    _avg?: responsesAvgOrderByAggregateInput
    _max?: responsesMaxOrderByAggregateInput
    _min?: responsesMinOrderByAggregateInput
    _sum?: responsesSumOrderByAggregateInput
  }

  export type responsesScalarWhereWithAggregatesInput = {
    AND?: responsesScalarWhereWithAggregatesInput | responsesScalarWhereWithAggregatesInput[]
    OR?: responsesScalarWhereWithAggregatesInput[]
    NOT?: responsesScalarWhereWithAggregatesInput | responsesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"responses"> | number
    questionId?: IntWithAggregatesFilter<"responses"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"responses"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"responses"> | Date | string | null
    userId?: IntWithAggregatesFilter<"responses"> | number
    responseTime?: IntNullableWithAggregatesFilter<"responses"> | number | null
    selectedOptionId?: IntWithAggregatesFilter<"responses"> | number
  }

  export type areasCreateInput = {
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    areas?: areasCreateNestedOneWithoutOther_areasInput
    other_areas?: areasCreateNestedManyWithoutAreasInput
    questions?: questionsCreateNestedManyWithoutAreasInput
  }

  export type areasUncheckedCreateInput = {
    id?: number
    name: string
    parentAreaID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    other_areas?: areasUncheckedCreateNestedManyWithoutAreasInput
    questions?: questionsUncheckedCreateNestedManyWithoutAreasInput
  }

  export type areasUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    areas?: areasUpdateOneWithoutOther_areasNestedInput
    other_areas?: areasUpdateManyWithoutAreasNestedInput
    questions?: questionsUpdateManyWithoutAreasNestedInput
  }

  export type areasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentAreaID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_areas?: areasUncheckedUpdateManyWithoutAreasNestedInput
    questions?: questionsUncheckedUpdateManyWithoutAreasNestedInput
  }

  export type areasCreateManyInput = {
    id?: number
    name: string
    parentAreaID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type areasUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type areasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentAreaID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type difficultyCreateInput = {
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    questions?: questionsCreateNestedManyWithoutDifficultyInput
  }

  export type difficultyUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    questions?: questionsUncheckedCreateNestedManyWithoutDifficultyInput
  }

  export type difficultyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: questionsUpdateManyWithoutDifficultyNestedInput
  }

  export type difficultyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: questionsUncheckedUpdateManyWithoutDifficultyNestedInput
  }

  export type difficultyCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type difficultyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type difficultyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_imagesCreateInput = {
    imageId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    questions: questionsCreateNestedOneWithoutQuestion_imagesInput
  }

  export type question_imagesUncheckedCreateInput = {
    id?: number
    questionId: number
    imageId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type question_imagesUpdateInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: questionsUpdateOneRequiredWithoutQuestion_imagesNestedInput
  }

  export type question_imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_imagesCreateManyInput = {
    id?: number
    questionId: number
    imageId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type question_imagesUpdateManyMutationInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_optionsCreateInput = {
    text: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    correct?: boolean
    additional?: string | null
    questions: questionsCreateNestedOneWithoutQuestion_optionsInput
  }

  export type question_optionsUncheckedCreateInput = {
    id?: number
    questionId: number
    text: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    correct?: boolean
    additional?: string | null
  }

  export type question_optionsUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correct?: BoolFieldUpdateOperationsInput | boolean
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: questionsUpdateOneRequiredWithoutQuestion_optionsNestedInput
  }

  export type question_optionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correct?: BoolFieldUpdateOperationsInput | boolean
    additional?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type question_optionsCreateManyInput = {
    id?: number
    questionId: number
    text: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    correct?: boolean
    additional?: string | null
  }

  export type question_optionsUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correct?: BoolFieldUpdateOperationsInput | boolean
    additional?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type question_optionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correct?: BoolFieldUpdateOperationsInput | boolean
    additional?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type question_referencesCreateInput = {
    referenceId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    questions: questionsCreateNestedOneWithoutQuestion_referencesInput
  }

  export type question_referencesUncheckedCreateInput = {
    id?: number
    questionId: number
    referenceId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type question_referencesUpdateInput = {
    referenceId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: questionsUpdateOneRequiredWithoutQuestion_referencesNestedInput
  }

  export type question_referencesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    referenceId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_referencesCreateManyInput = {
    id?: number
    questionId: number
    referenceId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type question_referencesUpdateManyMutationInput = {
    referenceId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_referencesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    referenceId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_typesCreateInput = {
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    questions?: questionsCreateNestedManyWithoutQuestion_typesInput
  }

  export type question_typesUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    questions?: questionsUncheckedCreateNestedManyWithoutQuestion_typesInput
  }

  export type question_typesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: questionsUpdateManyWithoutQuestion_typesNestedInput
  }

  export type question_typesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: questionsUncheckedUpdateManyWithoutQuestion_typesNestedInput
  }

  export type question_typesCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type question_typesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_typesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questionsCreateInput = {
    userId?: number | null
    text: string
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    question_images?: question_imagesCreateNestedManyWithoutQuestionsInput
    question_options?: question_optionsCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesCreateNestedManyWithoutQuestionsInput
    areas?: areasCreateNestedOneWithoutQuestionsInput
    difficulty: difficultyCreateNestedOneWithoutQuestionsInput
    question_types: question_typesCreateNestedOneWithoutQuestionsInput
    responses?: responsesCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUncheckedCreateInput = {
    id?: number
    userId?: number | null
    areaId?: number | null
    text: string
    difficultyId: number
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    typeId: number
    question_images?: question_imagesUncheckedCreateNestedManyWithoutQuestionsInput
    question_options?: question_optionsUncheckedCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesUncheckedCreateNestedManyWithoutQuestionsInput
    responses?: responsesUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUpdateInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    question_images?: question_imagesUpdateManyWithoutQuestionsNestedInput
    question_options?: question_optionsUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUpdateManyWithoutQuestionsNestedInput
    areas?: areasUpdateOneWithoutQuestionsNestedInput
    difficulty?: difficultyUpdateOneRequiredWithoutQuestionsNestedInput
    question_types?: question_typesUpdateOneRequiredWithoutQuestionsNestedInput
    responses?: responsesUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    areaId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    difficultyId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    question_images?: question_imagesUncheckedUpdateManyWithoutQuestionsNestedInput
    question_options?: question_optionsUncheckedUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUncheckedUpdateManyWithoutQuestionsNestedInput
    responses?: responsesUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsCreateManyInput = {
    id?: number
    userId?: number | null
    areaId?: number | null
    text: string
    difficultyId: number
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    typeId: number
  }

  export type questionsUpdateManyMutationInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type questionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    areaId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    difficultyId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type responsesCreateInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    userId: number
    responseTime?: number | null
    selectedOptionId: number
    questions: questionsCreateNestedOneWithoutResponsesInput
  }

  export type responsesUncheckedCreateInput = {
    id?: number
    questionId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    userId: number
    responseTime?: number | null
    selectedOptionId: number
  }

  export type responsesUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    selectedOptionId?: IntFieldUpdateOperationsInput | number
    questions?: questionsUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type responsesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    selectedOptionId?: IntFieldUpdateOperationsInput | number
  }

  export type responsesCreateManyInput = {
    id?: number
    questionId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    userId: number
    responseTime?: number | null
    selectedOptionId: number
  }

  export type responsesUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    selectedOptionId?: IntFieldUpdateOperationsInput | number
  }

  export type responsesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    selectedOptionId?: IntFieldUpdateOperationsInput | number
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AreasNullableScalarRelationFilter = {
    is?: areasWhereInput | null
    isNot?: areasWhereInput | null
  }

  export type AreasListRelationFilter = {
    every?: areasWhereInput
    some?: areasWhereInput
    none?: areasWhereInput
  }

  export type QuestionsListRelationFilter = {
    every?: questionsWhereInput
    some?: questionsWhereInput
    none?: questionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type areasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type areasCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentAreaID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type areasAvgOrderByAggregateInput = {
    id?: SortOrder
    parentAreaID?: SortOrder
  }

  export type areasMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentAreaID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type areasMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentAreaID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type areasSumOrderByAggregateInput = {
    id?: SortOrder
    parentAreaID?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type difficultyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type difficultyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type difficultyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type difficultyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type difficultySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestionsScalarRelationFilter = {
    is?: questionsWhereInput
    isNot?: questionsWhereInput
  }

  export type question_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type question_imagesAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    imageId?: SortOrder
  }

  export type question_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type question_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type question_imagesSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    imageId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type question_optionsCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    correct?: SortOrder
    additional?: SortOrder
  }

  export type question_optionsAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type question_optionsMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    correct?: SortOrder
    additional?: SortOrder
  }

  export type question_optionsMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    correct?: SortOrder
    additional?: SortOrder
  }

  export type question_optionsSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type question_referencesCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type question_referencesAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    referenceId?: SortOrder
  }

  export type question_referencesMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type question_referencesMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type question_referencesSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    referenceId?: SortOrder
  }

  export type question_typesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type question_typesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type question_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type question_typesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type question_typesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Question_imagesListRelationFilter = {
    every?: question_imagesWhereInput
    some?: question_imagesWhereInput
    none?: question_imagesWhereInput
  }

  export type Question_optionsListRelationFilter = {
    every?: question_optionsWhereInput
    some?: question_optionsWhereInput
    none?: question_optionsWhereInput
  }

  export type Question_referencesListRelationFilter = {
    every?: question_referencesWhereInput
    some?: question_referencesWhereInput
    none?: question_referencesWhereInput
  }

  export type DifficultyScalarRelationFilter = {
    is?: difficultyWhereInput
    isNot?: difficultyWhereInput
  }

  export type Question_typesScalarRelationFilter = {
    is?: question_typesWhereInput
    isNot?: question_typesWhereInput
  }

  export type ResponsesListRelationFilter = {
    every?: responsesWhereInput
    some?: responsesWhereInput
    none?: responsesWhereInput
  }

  export type question_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type question_optionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type question_referencesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type responsesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questionsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    areaId?: SortOrder
    text?: SortOrder
    difficultyId?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hint?: SortOrder
    explanation?: SortOrder
    typeId?: SortOrder
  }

  export type questionsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    areaId?: SortOrder
    difficultyId?: SortOrder
    typeId?: SortOrder
  }

  export type questionsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    areaId?: SortOrder
    text?: SortOrder
    difficultyId?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hint?: SortOrder
    explanation?: SortOrder
    typeId?: SortOrder
  }

  export type questionsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    areaId?: SortOrder
    text?: SortOrder
    difficultyId?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hint?: SortOrder
    explanation?: SortOrder
    typeId?: SortOrder
  }

  export type questionsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    areaId?: SortOrder
    difficultyId?: SortOrder
    typeId?: SortOrder
  }

  export type responsesCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    responseTime?: SortOrder
    selectedOptionId?: SortOrder
  }

  export type responsesAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    responseTime?: SortOrder
    selectedOptionId?: SortOrder
  }

  export type responsesMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    responseTime?: SortOrder
    selectedOptionId?: SortOrder
  }

  export type responsesMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    responseTime?: SortOrder
    selectedOptionId?: SortOrder
  }

  export type responsesSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    responseTime?: SortOrder
    selectedOptionId?: SortOrder
  }

  export type areasCreateNestedOneWithoutOther_areasInput = {
    create?: XOR<areasCreateWithoutOther_areasInput, areasUncheckedCreateWithoutOther_areasInput>
    connectOrCreate?: areasCreateOrConnectWithoutOther_areasInput
    connect?: areasWhereUniqueInput
  }

  export type areasCreateNestedManyWithoutAreasInput = {
    create?: XOR<areasCreateWithoutAreasInput, areasUncheckedCreateWithoutAreasInput> | areasCreateWithoutAreasInput[] | areasUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: areasCreateOrConnectWithoutAreasInput | areasCreateOrConnectWithoutAreasInput[]
    createMany?: areasCreateManyAreasInputEnvelope
    connect?: areasWhereUniqueInput | areasWhereUniqueInput[]
  }

  export type questionsCreateNestedManyWithoutAreasInput = {
    create?: XOR<questionsCreateWithoutAreasInput, questionsUncheckedCreateWithoutAreasInput> | questionsCreateWithoutAreasInput[] | questionsUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutAreasInput | questionsCreateOrConnectWithoutAreasInput[]
    createMany?: questionsCreateManyAreasInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type areasUncheckedCreateNestedManyWithoutAreasInput = {
    create?: XOR<areasCreateWithoutAreasInput, areasUncheckedCreateWithoutAreasInput> | areasCreateWithoutAreasInput[] | areasUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: areasCreateOrConnectWithoutAreasInput | areasCreateOrConnectWithoutAreasInput[]
    createMany?: areasCreateManyAreasInputEnvelope
    connect?: areasWhereUniqueInput | areasWhereUniqueInput[]
  }

  export type questionsUncheckedCreateNestedManyWithoutAreasInput = {
    create?: XOR<questionsCreateWithoutAreasInput, questionsUncheckedCreateWithoutAreasInput> | questionsCreateWithoutAreasInput[] | questionsUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutAreasInput | questionsCreateOrConnectWithoutAreasInput[]
    createMany?: questionsCreateManyAreasInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type areasUpdateOneWithoutOther_areasNestedInput = {
    create?: XOR<areasCreateWithoutOther_areasInput, areasUncheckedCreateWithoutOther_areasInput>
    connectOrCreate?: areasCreateOrConnectWithoutOther_areasInput
    upsert?: areasUpsertWithoutOther_areasInput
    disconnect?: areasWhereInput | boolean
    delete?: areasWhereInput | boolean
    connect?: areasWhereUniqueInput
    update?: XOR<XOR<areasUpdateToOneWithWhereWithoutOther_areasInput, areasUpdateWithoutOther_areasInput>, areasUncheckedUpdateWithoutOther_areasInput>
  }

  export type areasUpdateManyWithoutAreasNestedInput = {
    create?: XOR<areasCreateWithoutAreasInput, areasUncheckedCreateWithoutAreasInput> | areasCreateWithoutAreasInput[] | areasUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: areasCreateOrConnectWithoutAreasInput | areasCreateOrConnectWithoutAreasInput[]
    upsert?: areasUpsertWithWhereUniqueWithoutAreasInput | areasUpsertWithWhereUniqueWithoutAreasInput[]
    createMany?: areasCreateManyAreasInputEnvelope
    set?: areasWhereUniqueInput | areasWhereUniqueInput[]
    disconnect?: areasWhereUniqueInput | areasWhereUniqueInput[]
    delete?: areasWhereUniqueInput | areasWhereUniqueInput[]
    connect?: areasWhereUniqueInput | areasWhereUniqueInput[]
    update?: areasUpdateWithWhereUniqueWithoutAreasInput | areasUpdateWithWhereUniqueWithoutAreasInput[]
    updateMany?: areasUpdateManyWithWhereWithoutAreasInput | areasUpdateManyWithWhereWithoutAreasInput[]
    deleteMany?: areasScalarWhereInput | areasScalarWhereInput[]
  }

  export type questionsUpdateManyWithoutAreasNestedInput = {
    create?: XOR<questionsCreateWithoutAreasInput, questionsUncheckedCreateWithoutAreasInput> | questionsCreateWithoutAreasInput[] | questionsUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutAreasInput | questionsCreateOrConnectWithoutAreasInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutAreasInput | questionsUpsertWithWhereUniqueWithoutAreasInput[]
    createMany?: questionsCreateManyAreasInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutAreasInput | questionsUpdateWithWhereUniqueWithoutAreasInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutAreasInput | questionsUpdateManyWithWhereWithoutAreasInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type areasUncheckedUpdateManyWithoutAreasNestedInput = {
    create?: XOR<areasCreateWithoutAreasInput, areasUncheckedCreateWithoutAreasInput> | areasCreateWithoutAreasInput[] | areasUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: areasCreateOrConnectWithoutAreasInput | areasCreateOrConnectWithoutAreasInput[]
    upsert?: areasUpsertWithWhereUniqueWithoutAreasInput | areasUpsertWithWhereUniqueWithoutAreasInput[]
    createMany?: areasCreateManyAreasInputEnvelope
    set?: areasWhereUniqueInput | areasWhereUniqueInput[]
    disconnect?: areasWhereUniqueInput | areasWhereUniqueInput[]
    delete?: areasWhereUniqueInput | areasWhereUniqueInput[]
    connect?: areasWhereUniqueInput | areasWhereUniqueInput[]
    update?: areasUpdateWithWhereUniqueWithoutAreasInput | areasUpdateWithWhereUniqueWithoutAreasInput[]
    updateMany?: areasUpdateManyWithWhereWithoutAreasInput | areasUpdateManyWithWhereWithoutAreasInput[]
    deleteMany?: areasScalarWhereInput | areasScalarWhereInput[]
  }

  export type questionsUncheckedUpdateManyWithoutAreasNestedInput = {
    create?: XOR<questionsCreateWithoutAreasInput, questionsUncheckedCreateWithoutAreasInput> | questionsCreateWithoutAreasInput[] | questionsUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutAreasInput | questionsCreateOrConnectWithoutAreasInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutAreasInput | questionsUpsertWithWhereUniqueWithoutAreasInput[]
    createMany?: questionsCreateManyAreasInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutAreasInput | questionsUpdateWithWhereUniqueWithoutAreasInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutAreasInput | questionsUpdateManyWithWhereWithoutAreasInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type questionsCreateNestedManyWithoutDifficultyInput = {
    create?: XOR<questionsCreateWithoutDifficultyInput, questionsUncheckedCreateWithoutDifficultyInput> | questionsCreateWithoutDifficultyInput[] | questionsUncheckedCreateWithoutDifficultyInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutDifficultyInput | questionsCreateOrConnectWithoutDifficultyInput[]
    createMany?: questionsCreateManyDifficultyInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type questionsUncheckedCreateNestedManyWithoutDifficultyInput = {
    create?: XOR<questionsCreateWithoutDifficultyInput, questionsUncheckedCreateWithoutDifficultyInput> | questionsCreateWithoutDifficultyInput[] | questionsUncheckedCreateWithoutDifficultyInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutDifficultyInput | questionsCreateOrConnectWithoutDifficultyInput[]
    createMany?: questionsCreateManyDifficultyInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type questionsUpdateManyWithoutDifficultyNestedInput = {
    create?: XOR<questionsCreateWithoutDifficultyInput, questionsUncheckedCreateWithoutDifficultyInput> | questionsCreateWithoutDifficultyInput[] | questionsUncheckedCreateWithoutDifficultyInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutDifficultyInput | questionsCreateOrConnectWithoutDifficultyInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutDifficultyInput | questionsUpsertWithWhereUniqueWithoutDifficultyInput[]
    createMany?: questionsCreateManyDifficultyInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutDifficultyInput | questionsUpdateWithWhereUniqueWithoutDifficultyInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutDifficultyInput | questionsUpdateManyWithWhereWithoutDifficultyInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type questionsUncheckedUpdateManyWithoutDifficultyNestedInput = {
    create?: XOR<questionsCreateWithoutDifficultyInput, questionsUncheckedCreateWithoutDifficultyInput> | questionsCreateWithoutDifficultyInput[] | questionsUncheckedCreateWithoutDifficultyInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutDifficultyInput | questionsCreateOrConnectWithoutDifficultyInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutDifficultyInput | questionsUpsertWithWhereUniqueWithoutDifficultyInput[]
    createMany?: questionsCreateManyDifficultyInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutDifficultyInput | questionsUpdateWithWhereUniqueWithoutDifficultyInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutDifficultyInput | questionsUpdateManyWithWhereWithoutDifficultyInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type questionsCreateNestedOneWithoutQuestion_imagesInput = {
    create?: XOR<questionsCreateWithoutQuestion_imagesInput, questionsUncheckedCreateWithoutQuestion_imagesInput>
    connectOrCreate?: questionsCreateOrConnectWithoutQuestion_imagesInput
    connect?: questionsWhereUniqueInput
  }

  export type questionsUpdateOneRequiredWithoutQuestion_imagesNestedInput = {
    create?: XOR<questionsCreateWithoutQuestion_imagesInput, questionsUncheckedCreateWithoutQuestion_imagesInput>
    connectOrCreate?: questionsCreateOrConnectWithoutQuestion_imagesInput
    upsert?: questionsUpsertWithoutQuestion_imagesInput
    connect?: questionsWhereUniqueInput
    update?: XOR<XOR<questionsUpdateToOneWithWhereWithoutQuestion_imagesInput, questionsUpdateWithoutQuestion_imagesInput>, questionsUncheckedUpdateWithoutQuestion_imagesInput>
  }

  export type questionsCreateNestedOneWithoutQuestion_optionsInput = {
    create?: XOR<questionsCreateWithoutQuestion_optionsInput, questionsUncheckedCreateWithoutQuestion_optionsInput>
    connectOrCreate?: questionsCreateOrConnectWithoutQuestion_optionsInput
    connect?: questionsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type questionsUpdateOneRequiredWithoutQuestion_optionsNestedInput = {
    create?: XOR<questionsCreateWithoutQuestion_optionsInput, questionsUncheckedCreateWithoutQuestion_optionsInput>
    connectOrCreate?: questionsCreateOrConnectWithoutQuestion_optionsInput
    upsert?: questionsUpsertWithoutQuestion_optionsInput
    connect?: questionsWhereUniqueInput
    update?: XOR<XOR<questionsUpdateToOneWithWhereWithoutQuestion_optionsInput, questionsUpdateWithoutQuestion_optionsInput>, questionsUncheckedUpdateWithoutQuestion_optionsInput>
  }

  export type questionsCreateNestedOneWithoutQuestion_referencesInput = {
    create?: XOR<questionsCreateWithoutQuestion_referencesInput, questionsUncheckedCreateWithoutQuestion_referencesInput>
    connectOrCreate?: questionsCreateOrConnectWithoutQuestion_referencesInput
    connect?: questionsWhereUniqueInput
  }

  export type questionsUpdateOneRequiredWithoutQuestion_referencesNestedInput = {
    create?: XOR<questionsCreateWithoutQuestion_referencesInput, questionsUncheckedCreateWithoutQuestion_referencesInput>
    connectOrCreate?: questionsCreateOrConnectWithoutQuestion_referencesInput
    upsert?: questionsUpsertWithoutQuestion_referencesInput
    connect?: questionsWhereUniqueInput
    update?: XOR<XOR<questionsUpdateToOneWithWhereWithoutQuestion_referencesInput, questionsUpdateWithoutQuestion_referencesInput>, questionsUncheckedUpdateWithoutQuestion_referencesInput>
  }

  export type questionsCreateNestedManyWithoutQuestion_typesInput = {
    create?: XOR<questionsCreateWithoutQuestion_typesInput, questionsUncheckedCreateWithoutQuestion_typesInput> | questionsCreateWithoutQuestion_typesInput[] | questionsUncheckedCreateWithoutQuestion_typesInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutQuestion_typesInput | questionsCreateOrConnectWithoutQuestion_typesInput[]
    createMany?: questionsCreateManyQuestion_typesInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type questionsUncheckedCreateNestedManyWithoutQuestion_typesInput = {
    create?: XOR<questionsCreateWithoutQuestion_typesInput, questionsUncheckedCreateWithoutQuestion_typesInput> | questionsCreateWithoutQuestion_typesInput[] | questionsUncheckedCreateWithoutQuestion_typesInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutQuestion_typesInput | questionsCreateOrConnectWithoutQuestion_typesInput[]
    createMany?: questionsCreateManyQuestion_typesInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type questionsUpdateManyWithoutQuestion_typesNestedInput = {
    create?: XOR<questionsCreateWithoutQuestion_typesInput, questionsUncheckedCreateWithoutQuestion_typesInput> | questionsCreateWithoutQuestion_typesInput[] | questionsUncheckedCreateWithoutQuestion_typesInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutQuestion_typesInput | questionsCreateOrConnectWithoutQuestion_typesInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutQuestion_typesInput | questionsUpsertWithWhereUniqueWithoutQuestion_typesInput[]
    createMany?: questionsCreateManyQuestion_typesInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutQuestion_typesInput | questionsUpdateWithWhereUniqueWithoutQuestion_typesInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutQuestion_typesInput | questionsUpdateManyWithWhereWithoutQuestion_typesInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type questionsUncheckedUpdateManyWithoutQuestion_typesNestedInput = {
    create?: XOR<questionsCreateWithoutQuestion_typesInput, questionsUncheckedCreateWithoutQuestion_typesInput> | questionsCreateWithoutQuestion_typesInput[] | questionsUncheckedCreateWithoutQuestion_typesInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutQuestion_typesInput | questionsCreateOrConnectWithoutQuestion_typesInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutQuestion_typesInput | questionsUpsertWithWhereUniqueWithoutQuestion_typesInput[]
    createMany?: questionsCreateManyQuestion_typesInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutQuestion_typesInput | questionsUpdateWithWhereUniqueWithoutQuestion_typesInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutQuestion_typesInput | questionsUpdateManyWithWhereWithoutQuestion_typesInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type question_imagesCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<question_imagesCreateWithoutQuestionsInput, question_imagesUncheckedCreateWithoutQuestionsInput> | question_imagesCreateWithoutQuestionsInput[] | question_imagesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: question_imagesCreateOrConnectWithoutQuestionsInput | question_imagesCreateOrConnectWithoutQuestionsInput[]
    createMany?: question_imagesCreateManyQuestionsInputEnvelope
    connect?: question_imagesWhereUniqueInput | question_imagesWhereUniqueInput[]
  }

  export type question_optionsCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<question_optionsCreateWithoutQuestionsInput, question_optionsUncheckedCreateWithoutQuestionsInput> | question_optionsCreateWithoutQuestionsInput[] | question_optionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: question_optionsCreateOrConnectWithoutQuestionsInput | question_optionsCreateOrConnectWithoutQuestionsInput[]
    createMany?: question_optionsCreateManyQuestionsInputEnvelope
    connect?: question_optionsWhereUniqueInput | question_optionsWhereUniqueInput[]
  }

  export type question_referencesCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<question_referencesCreateWithoutQuestionsInput, question_referencesUncheckedCreateWithoutQuestionsInput> | question_referencesCreateWithoutQuestionsInput[] | question_referencesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: question_referencesCreateOrConnectWithoutQuestionsInput | question_referencesCreateOrConnectWithoutQuestionsInput[]
    createMany?: question_referencesCreateManyQuestionsInputEnvelope
    connect?: question_referencesWhereUniqueInput | question_referencesWhereUniqueInput[]
  }

  export type areasCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<areasCreateWithoutQuestionsInput, areasUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: areasCreateOrConnectWithoutQuestionsInput
    connect?: areasWhereUniqueInput
  }

  export type difficultyCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<difficultyCreateWithoutQuestionsInput, difficultyUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: difficultyCreateOrConnectWithoutQuestionsInput
    connect?: difficultyWhereUniqueInput
  }

  export type question_typesCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<question_typesCreateWithoutQuestionsInput, question_typesUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: question_typesCreateOrConnectWithoutQuestionsInput
    connect?: question_typesWhereUniqueInput
  }

  export type responsesCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<responsesCreateWithoutQuestionsInput, responsesUncheckedCreateWithoutQuestionsInput> | responsesCreateWithoutQuestionsInput[] | responsesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: responsesCreateOrConnectWithoutQuestionsInput | responsesCreateOrConnectWithoutQuestionsInput[]
    createMany?: responsesCreateManyQuestionsInputEnvelope
    connect?: responsesWhereUniqueInput | responsesWhereUniqueInput[]
  }

  export type question_imagesUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<question_imagesCreateWithoutQuestionsInput, question_imagesUncheckedCreateWithoutQuestionsInput> | question_imagesCreateWithoutQuestionsInput[] | question_imagesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: question_imagesCreateOrConnectWithoutQuestionsInput | question_imagesCreateOrConnectWithoutQuestionsInput[]
    createMany?: question_imagesCreateManyQuestionsInputEnvelope
    connect?: question_imagesWhereUniqueInput | question_imagesWhereUniqueInput[]
  }

  export type question_optionsUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<question_optionsCreateWithoutQuestionsInput, question_optionsUncheckedCreateWithoutQuestionsInput> | question_optionsCreateWithoutQuestionsInput[] | question_optionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: question_optionsCreateOrConnectWithoutQuestionsInput | question_optionsCreateOrConnectWithoutQuestionsInput[]
    createMany?: question_optionsCreateManyQuestionsInputEnvelope
    connect?: question_optionsWhereUniqueInput | question_optionsWhereUniqueInput[]
  }

  export type question_referencesUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<question_referencesCreateWithoutQuestionsInput, question_referencesUncheckedCreateWithoutQuestionsInput> | question_referencesCreateWithoutQuestionsInput[] | question_referencesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: question_referencesCreateOrConnectWithoutQuestionsInput | question_referencesCreateOrConnectWithoutQuestionsInput[]
    createMany?: question_referencesCreateManyQuestionsInputEnvelope
    connect?: question_referencesWhereUniqueInput | question_referencesWhereUniqueInput[]
  }

  export type responsesUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<responsesCreateWithoutQuestionsInput, responsesUncheckedCreateWithoutQuestionsInput> | responsesCreateWithoutQuestionsInput[] | responsesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: responsesCreateOrConnectWithoutQuestionsInput | responsesCreateOrConnectWithoutQuestionsInput[]
    createMany?: responsesCreateManyQuestionsInputEnvelope
    connect?: responsesWhereUniqueInput | responsesWhereUniqueInput[]
  }

  export type question_imagesUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<question_imagesCreateWithoutQuestionsInput, question_imagesUncheckedCreateWithoutQuestionsInput> | question_imagesCreateWithoutQuestionsInput[] | question_imagesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: question_imagesCreateOrConnectWithoutQuestionsInput | question_imagesCreateOrConnectWithoutQuestionsInput[]
    upsert?: question_imagesUpsertWithWhereUniqueWithoutQuestionsInput | question_imagesUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: question_imagesCreateManyQuestionsInputEnvelope
    set?: question_imagesWhereUniqueInput | question_imagesWhereUniqueInput[]
    disconnect?: question_imagesWhereUniqueInput | question_imagesWhereUniqueInput[]
    delete?: question_imagesWhereUniqueInput | question_imagesWhereUniqueInput[]
    connect?: question_imagesWhereUniqueInput | question_imagesWhereUniqueInput[]
    update?: question_imagesUpdateWithWhereUniqueWithoutQuestionsInput | question_imagesUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: question_imagesUpdateManyWithWhereWithoutQuestionsInput | question_imagesUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: question_imagesScalarWhereInput | question_imagesScalarWhereInput[]
  }

  export type question_optionsUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<question_optionsCreateWithoutQuestionsInput, question_optionsUncheckedCreateWithoutQuestionsInput> | question_optionsCreateWithoutQuestionsInput[] | question_optionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: question_optionsCreateOrConnectWithoutQuestionsInput | question_optionsCreateOrConnectWithoutQuestionsInput[]
    upsert?: question_optionsUpsertWithWhereUniqueWithoutQuestionsInput | question_optionsUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: question_optionsCreateManyQuestionsInputEnvelope
    set?: question_optionsWhereUniqueInput | question_optionsWhereUniqueInput[]
    disconnect?: question_optionsWhereUniqueInput | question_optionsWhereUniqueInput[]
    delete?: question_optionsWhereUniqueInput | question_optionsWhereUniqueInput[]
    connect?: question_optionsWhereUniqueInput | question_optionsWhereUniqueInput[]
    update?: question_optionsUpdateWithWhereUniqueWithoutQuestionsInput | question_optionsUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: question_optionsUpdateManyWithWhereWithoutQuestionsInput | question_optionsUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: question_optionsScalarWhereInput | question_optionsScalarWhereInput[]
  }

  export type question_referencesUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<question_referencesCreateWithoutQuestionsInput, question_referencesUncheckedCreateWithoutQuestionsInput> | question_referencesCreateWithoutQuestionsInput[] | question_referencesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: question_referencesCreateOrConnectWithoutQuestionsInput | question_referencesCreateOrConnectWithoutQuestionsInput[]
    upsert?: question_referencesUpsertWithWhereUniqueWithoutQuestionsInput | question_referencesUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: question_referencesCreateManyQuestionsInputEnvelope
    set?: question_referencesWhereUniqueInput | question_referencesWhereUniqueInput[]
    disconnect?: question_referencesWhereUniqueInput | question_referencesWhereUniqueInput[]
    delete?: question_referencesWhereUniqueInput | question_referencesWhereUniqueInput[]
    connect?: question_referencesWhereUniqueInput | question_referencesWhereUniqueInput[]
    update?: question_referencesUpdateWithWhereUniqueWithoutQuestionsInput | question_referencesUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: question_referencesUpdateManyWithWhereWithoutQuestionsInput | question_referencesUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: question_referencesScalarWhereInput | question_referencesScalarWhereInput[]
  }

  export type areasUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<areasCreateWithoutQuestionsInput, areasUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: areasCreateOrConnectWithoutQuestionsInput
    upsert?: areasUpsertWithoutQuestionsInput
    disconnect?: areasWhereInput | boolean
    delete?: areasWhereInput | boolean
    connect?: areasWhereUniqueInput
    update?: XOR<XOR<areasUpdateToOneWithWhereWithoutQuestionsInput, areasUpdateWithoutQuestionsInput>, areasUncheckedUpdateWithoutQuestionsInput>
  }

  export type difficultyUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<difficultyCreateWithoutQuestionsInput, difficultyUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: difficultyCreateOrConnectWithoutQuestionsInput
    upsert?: difficultyUpsertWithoutQuestionsInput
    connect?: difficultyWhereUniqueInput
    update?: XOR<XOR<difficultyUpdateToOneWithWhereWithoutQuestionsInput, difficultyUpdateWithoutQuestionsInput>, difficultyUncheckedUpdateWithoutQuestionsInput>
  }

  export type question_typesUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<question_typesCreateWithoutQuestionsInput, question_typesUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: question_typesCreateOrConnectWithoutQuestionsInput
    upsert?: question_typesUpsertWithoutQuestionsInput
    connect?: question_typesWhereUniqueInput
    update?: XOR<XOR<question_typesUpdateToOneWithWhereWithoutQuestionsInput, question_typesUpdateWithoutQuestionsInput>, question_typesUncheckedUpdateWithoutQuestionsInput>
  }

  export type responsesUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<responsesCreateWithoutQuestionsInput, responsesUncheckedCreateWithoutQuestionsInput> | responsesCreateWithoutQuestionsInput[] | responsesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: responsesCreateOrConnectWithoutQuestionsInput | responsesCreateOrConnectWithoutQuestionsInput[]
    upsert?: responsesUpsertWithWhereUniqueWithoutQuestionsInput | responsesUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: responsesCreateManyQuestionsInputEnvelope
    set?: responsesWhereUniqueInput | responsesWhereUniqueInput[]
    disconnect?: responsesWhereUniqueInput | responsesWhereUniqueInput[]
    delete?: responsesWhereUniqueInput | responsesWhereUniqueInput[]
    connect?: responsesWhereUniqueInput | responsesWhereUniqueInput[]
    update?: responsesUpdateWithWhereUniqueWithoutQuestionsInput | responsesUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: responsesUpdateManyWithWhereWithoutQuestionsInput | responsesUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: responsesScalarWhereInput | responsesScalarWhereInput[]
  }

  export type question_imagesUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<question_imagesCreateWithoutQuestionsInput, question_imagesUncheckedCreateWithoutQuestionsInput> | question_imagesCreateWithoutQuestionsInput[] | question_imagesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: question_imagesCreateOrConnectWithoutQuestionsInput | question_imagesCreateOrConnectWithoutQuestionsInput[]
    upsert?: question_imagesUpsertWithWhereUniqueWithoutQuestionsInput | question_imagesUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: question_imagesCreateManyQuestionsInputEnvelope
    set?: question_imagesWhereUniqueInput | question_imagesWhereUniqueInput[]
    disconnect?: question_imagesWhereUniqueInput | question_imagesWhereUniqueInput[]
    delete?: question_imagesWhereUniqueInput | question_imagesWhereUniqueInput[]
    connect?: question_imagesWhereUniqueInput | question_imagesWhereUniqueInput[]
    update?: question_imagesUpdateWithWhereUniqueWithoutQuestionsInput | question_imagesUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: question_imagesUpdateManyWithWhereWithoutQuestionsInput | question_imagesUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: question_imagesScalarWhereInput | question_imagesScalarWhereInput[]
  }

  export type question_optionsUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<question_optionsCreateWithoutQuestionsInput, question_optionsUncheckedCreateWithoutQuestionsInput> | question_optionsCreateWithoutQuestionsInput[] | question_optionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: question_optionsCreateOrConnectWithoutQuestionsInput | question_optionsCreateOrConnectWithoutQuestionsInput[]
    upsert?: question_optionsUpsertWithWhereUniqueWithoutQuestionsInput | question_optionsUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: question_optionsCreateManyQuestionsInputEnvelope
    set?: question_optionsWhereUniqueInput | question_optionsWhereUniqueInput[]
    disconnect?: question_optionsWhereUniqueInput | question_optionsWhereUniqueInput[]
    delete?: question_optionsWhereUniqueInput | question_optionsWhereUniqueInput[]
    connect?: question_optionsWhereUniqueInput | question_optionsWhereUniqueInput[]
    update?: question_optionsUpdateWithWhereUniqueWithoutQuestionsInput | question_optionsUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: question_optionsUpdateManyWithWhereWithoutQuestionsInput | question_optionsUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: question_optionsScalarWhereInput | question_optionsScalarWhereInput[]
  }

  export type question_referencesUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<question_referencesCreateWithoutQuestionsInput, question_referencesUncheckedCreateWithoutQuestionsInput> | question_referencesCreateWithoutQuestionsInput[] | question_referencesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: question_referencesCreateOrConnectWithoutQuestionsInput | question_referencesCreateOrConnectWithoutQuestionsInput[]
    upsert?: question_referencesUpsertWithWhereUniqueWithoutQuestionsInput | question_referencesUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: question_referencesCreateManyQuestionsInputEnvelope
    set?: question_referencesWhereUniqueInput | question_referencesWhereUniqueInput[]
    disconnect?: question_referencesWhereUniqueInput | question_referencesWhereUniqueInput[]
    delete?: question_referencesWhereUniqueInput | question_referencesWhereUniqueInput[]
    connect?: question_referencesWhereUniqueInput | question_referencesWhereUniqueInput[]
    update?: question_referencesUpdateWithWhereUniqueWithoutQuestionsInput | question_referencesUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: question_referencesUpdateManyWithWhereWithoutQuestionsInput | question_referencesUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: question_referencesScalarWhereInput | question_referencesScalarWhereInput[]
  }

  export type responsesUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<responsesCreateWithoutQuestionsInput, responsesUncheckedCreateWithoutQuestionsInput> | responsesCreateWithoutQuestionsInput[] | responsesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: responsesCreateOrConnectWithoutQuestionsInput | responsesCreateOrConnectWithoutQuestionsInput[]
    upsert?: responsesUpsertWithWhereUniqueWithoutQuestionsInput | responsesUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: responsesCreateManyQuestionsInputEnvelope
    set?: responsesWhereUniqueInput | responsesWhereUniqueInput[]
    disconnect?: responsesWhereUniqueInput | responsesWhereUniqueInput[]
    delete?: responsesWhereUniqueInput | responsesWhereUniqueInput[]
    connect?: responsesWhereUniqueInput | responsesWhereUniqueInput[]
    update?: responsesUpdateWithWhereUniqueWithoutQuestionsInput | responsesUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: responsesUpdateManyWithWhereWithoutQuestionsInput | responsesUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: responsesScalarWhereInput | responsesScalarWhereInput[]
  }

  export type questionsCreateNestedOneWithoutResponsesInput = {
    create?: XOR<questionsCreateWithoutResponsesInput, questionsUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: questionsCreateOrConnectWithoutResponsesInput
    connect?: questionsWhereUniqueInput
  }

  export type questionsUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<questionsCreateWithoutResponsesInput, questionsUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: questionsCreateOrConnectWithoutResponsesInput
    upsert?: questionsUpsertWithoutResponsesInput
    connect?: questionsWhereUniqueInput
    update?: XOR<XOR<questionsUpdateToOneWithWhereWithoutResponsesInput, questionsUpdateWithoutResponsesInput>, questionsUncheckedUpdateWithoutResponsesInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type areasCreateWithoutOther_areasInput = {
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    areas?: areasCreateNestedOneWithoutOther_areasInput
    questions?: questionsCreateNestedManyWithoutAreasInput
  }

  export type areasUncheckedCreateWithoutOther_areasInput = {
    id?: number
    name: string
    parentAreaID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    questions?: questionsUncheckedCreateNestedManyWithoutAreasInput
  }

  export type areasCreateOrConnectWithoutOther_areasInput = {
    where: areasWhereUniqueInput
    create: XOR<areasCreateWithoutOther_areasInput, areasUncheckedCreateWithoutOther_areasInput>
  }

  export type areasCreateWithoutAreasInput = {
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    other_areas?: areasCreateNestedManyWithoutAreasInput
    questions?: questionsCreateNestedManyWithoutAreasInput
  }

  export type areasUncheckedCreateWithoutAreasInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    other_areas?: areasUncheckedCreateNestedManyWithoutAreasInput
    questions?: questionsUncheckedCreateNestedManyWithoutAreasInput
  }

  export type areasCreateOrConnectWithoutAreasInput = {
    where: areasWhereUniqueInput
    create: XOR<areasCreateWithoutAreasInput, areasUncheckedCreateWithoutAreasInput>
  }

  export type areasCreateManyAreasInputEnvelope = {
    data: areasCreateManyAreasInput | areasCreateManyAreasInput[]
    skipDuplicates?: boolean
  }

  export type questionsCreateWithoutAreasInput = {
    userId?: number | null
    text: string
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    question_images?: question_imagesCreateNestedManyWithoutQuestionsInput
    question_options?: question_optionsCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesCreateNestedManyWithoutQuestionsInput
    difficulty: difficultyCreateNestedOneWithoutQuestionsInput
    question_types: question_typesCreateNestedOneWithoutQuestionsInput
    responses?: responsesCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutAreasInput = {
    id?: number
    userId?: number | null
    text: string
    difficultyId: number
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    typeId: number
    question_images?: question_imagesUncheckedCreateNestedManyWithoutQuestionsInput
    question_options?: question_optionsUncheckedCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesUncheckedCreateNestedManyWithoutQuestionsInput
    responses?: responsesUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutAreasInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutAreasInput, questionsUncheckedCreateWithoutAreasInput>
  }

  export type questionsCreateManyAreasInputEnvelope = {
    data: questionsCreateManyAreasInput | questionsCreateManyAreasInput[]
    skipDuplicates?: boolean
  }

  export type areasUpsertWithoutOther_areasInput = {
    update: XOR<areasUpdateWithoutOther_areasInput, areasUncheckedUpdateWithoutOther_areasInput>
    create: XOR<areasCreateWithoutOther_areasInput, areasUncheckedCreateWithoutOther_areasInput>
    where?: areasWhereInput
  }

  export type areasUpdateToOneWithWhereWithoutOther_areasInput = {
    where?: areasWhereInput
    data: XOR<areasUpdateWithoutOther_areasInput, areasUncheckedUpdateWithoutOther_areasInput>
  }

  export type areasUpdateWithoutOther_areasInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    areas?: areasUpdateOneWithoutOther_areasNestedInput
    questions?: questionsUpdateManyWithoutAreasNestedInput
  }

  export type areasUncheckedUpdateWithoutOther_areasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentAreaID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: questionsUncheckedUpdateManyWithoutAreasNestedInput
  }

  export type areasUpsertWithWhereUniqueWithoutAreasInput = {
    where: areasWhereUniqueInput
    update: XOR<areasUpdateWithoutAreasInput, areasUncheckedUpdateWithoutAreasInput>
    create: XOR<areasCreateWithoutAreasInput, areasUncheckedCreateWithoutAreasInput>
  }

  export type areasUpdateWithWhereUniqueWithoutAreasInput = {
    where: areasWhereUniqueInput
    data: XOR<areasUpdateWithoutAreasInput, areasUncheckedUpdateWithoutAreasInput>
  }

  export type areasUpdateManyWithWhereWithoutAreasInput = {
    where: areasScalarWhereInput
    data: XOR<areasUpdateManyMutationInput, areasUncheckedUpdateManyWithoutAreasInput>
  }

  export type areasScalarWhereInput = {
    AND?: areasScalarWhereInput | areasScalarWhereInput[]
    OR?: areasScalarWhereInput[]
    NOT?: areasScalarWhereInput | areasScalarWhereInput[]
    id?: IntFilter<"areas"> | number
    name?: StringFilter<"areas"> | string
    parentAreaID?: IntNullableFilter<"areas"> | number | null
    createdAt?: DateTimeNullableFilter<"areas"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"areas"> | Date | string | null
  }

  export type questionsUpsertWithWhereUniqueWithoutAreasInput = {
    where: questionsWhereUniqueInput
    update: XOR<questionsUpdateWithoutAreasInput, questionsUncheckedUpdateWithoutAreasInput>
    create: XOR<questionsCreateWithoutAreasInput, questionsUncheckedCreateWithoutAreasInput>
  }

  export type questionsUpdateWithWhereUniqueWithoutAreasInput = {
    where: questionsWhereUniqueInput
    data: XOR<questionsUpdateWithoutAreasInput, questionsUncheckedUpdateWithoutAreasInput>
  }

  export type questionsUpdateManyWithWhereWithoutAreasInput = {
    where: questionsScalarWhereInput
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyWithoutAreasInput>
  }

  export type questionsScalarWhereInput = {
    AND?: questionsScalarWhereInput | questionsScalarWhereInput[]
    OR?: questionsScalarWhereInput[]
    NOT?: questionsScalarWhereInput | questionsScalarWhereInput[]
    id?: IntFilter<"questions"> | number
    userId?: IntNullableFilter<"questions"> | number | null
    areaId?: IntNullableFilter<"questions"> | number | null
    text?: StringFilter<"questions"> | string
    difficultyId?: IntFilter<"questions"> | number
    approved?: BoolFilter<"questions"> | boolean
    createdAt?: DateTimeNullableFilter<"questions"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"questions"> | Date | string | null
    hint?: StringNullableFilter<"questions"> | string | null
    explanation?: StringNullableFilter<"questions"> | string | null
    typeId?: IntFilter<"questions"> | number
  }

  export type questionsCreateWithoutDifficultyInput = {
    userId?: number | null
    text: string
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    question_images?: question_imagesCreateNestedManyWithoutQuestionsInput
    question_options?: question_optionsCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesCreateNestedManyWithoutQuestionsInput
    areas?: areasCreateNestedOneWithoutQuestionsInput
    question_types: question_typesCreateNestedOneWithoutQuestionsInput
    responses?: responsesCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutDifficultyInput = {
    id?: number
    userId?: number | null
    areaId?: number | null
    text: string
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    typeId: number
    question_images?: question_imagesUncheckedCreateNestedManyWithoutQuestionsInput
    question_options?: question_optionsUncheckedCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesUncheckedCreateNestedManyWithoutQuestionsInput
    responses?: responsesUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutDifficultyInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutDifficultyInput, questionsUncheckedCreateWithoutDifficultyInput>
  }

  export type questionsCreateManyDifficultyInputEnvelope = {
    data: questionsCreateManyDifficultyInput | questionsCreateManyDifficultyInput[]
    skipDuplicates?: boolean
  }

  export type questionsUpsertWithWhereUniqueWithoutDifficultyInput = {
    where: questionsWhereUniqueInput
    update: XOR<questionsUpdateWithoutDifficultyInput, questionsUncheckedUpdateWithoutDifficultyInput>
    create: XOR<questionsCreateWithoutDifficultyInput, questionsUncheckedCreateWithoutDifficultyInput>
  }

  export type questionsUpdateWithWhereUniqueWithoutDifficultyInput = {
    where: questionsWhereUniqueInput
    data: XOR<questionsUpdateWithoutDifficultyInput, questionsUncheckedUpdateWithoutDifficultyInput>
  }

  export type questionsUpdateManyWithWhereWithoutDifficultyInput = {
    where: questionsScalarWhereInput
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyWithoutDifficultyInput>
  }

  export type questionsCreateWithoutQuestion_imagesInput = {
    userId?: number | null
    text: string
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    question_options?: question_optionsCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesCreateNestedManyWithoutQuestionsInput
    areas?: areasCreateNestedOneWithoutQuestionsInput
    difficulty: difficultyCreateNestedOneWithoutQuestionsInput
    question_types: question_typesCreateNestedOneWithoutQuestionsInput
    responses?: responsesCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutQuestion_imagesInput = {
    id?: number
    userId?: number | null
    areaId?: number | null
    text: string
    difficultyId: number
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    typeId: number
    question_options?: question_optionsUncheckedCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesUncheckedCreateNestedManyWithoutQuestionsInput
    responses?: responsesUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutQuestion_imagesInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutQuestion_imagesInput, questionsUncheckedCreateWithoutQuestion_imagesInput>
  }

  export type questionsUpsertWithoutQuestion_imagesInput = {
    update: XOR<questionsUpdateWithoutQuestion_imagesInput, questionsUncheckedUpdateWithoutQuestion_imagesInput>
    create: XOR<questionsCreateWithoutQuestion_imagesInput, questionsUncheckedCreateWithoutQuestion_imagesInput>
    where?: questionsWhereInput
  }

  export type questionsUpdateToOneWithWhereWithoutQuestion_imagesInput = {
    where?: questionsWhereInput
    data: XOR<questionsUpdateWithoutQuestion_imagesInput, questionsUncheckedUpdateWithoutQuestion_imagesInput>
  }

  export type questionsUpdateWithoutQuestion_imagesInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    question_options?: question_optionsUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUpdateManyWithoutQuestionsNestedInput
    areas?: areasUpdateOneWithoutQuestionsNestedInput
    difficulty?: difficultyUpdateOneRequiredWithoutQuestionsNestedInput
    question_types?: question_typesUpdateOneRequiredWithoutQuestionsNestedInput
    responses?: responsesUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutQuestion_imagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    areaId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    difficultyId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    question_options?: question_optionsUncheckedUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUncheckedUpdateManyWithoutQuestionsNestedInput
    responses?: responsesUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsCreateWithoutQuestion_optionsInput = {
    userId?: number | null
    text: string
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    question_images?: question_imagesCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesCreateNestedManyWithoutQuestionsInput
    areas?: areasCreateNestedOneWithoutQuestionsInput
    difficulty: difficultyCreateNestedOneWithoutQuestionsInput
    question_types: question_typesCreateNestedOneWithoutQuestionsInput
    responses?: responsesCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutQuestion_optionsInput = {
    id?: number
    userId?: number | null
    areaId?: number | null
    text: string
    difficultyId: number
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    typeId: number
    question_images?: question_imagesUncheckedCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesUncheckedCreateNestedManyWithoutQuestionsInput
    responses?: responsesUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutQuestion_optionsInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutQuestion_optionsInput, questionsUncheckedCreateWithoutQuestion_optionsInput>
  }

  export type questionsUpsertWithoutQuestion_optionsInput = {
    update: XOR<questionsUpdateWithoutQuestion_optionsInput, questionsUncheckedUpdateWithoutQuestion_optionsInput>
    create: XOR<questionsCreateWithoutQuestion_optionsInput, questionsUncheckedCreateWithoutQuestion_optionsInput>
    where?: questionsWhereInput
  }

  export type questionsUpdateToOneWithWhereWithoutQuestion_optionsInput = {
    where?: questionsWhereInput
    data: XOR<questionsUpdateWithoutQuestion_optionsInput, questionsUncheckedUpdateWithoutQuestion_optionsInput>
  }

  export type questionsUpdateWithoutQuestion_optionsInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    question_images?: question_imagesUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUpdateManyWithoutQuestionsNestedInput
    areas?: areasUpdateOneWithoutQuestionsNestedInput
    difficulty?: difficultyUpdateOneRequiredWithoutQuestionsNestedInput
    question_types?: question_typesUpdateOneRequiredWithoutQuestionsNestedInput
    responses?: responsesUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutQuestion_optionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    areaId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    difficultyId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    question_images?: question_imagesUncheckedUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUncheckedUpdateManyWithoutQuestionsNestedInput
    responses?: responsesUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsCreateWithoutQuestion_referencesInput = {
    userId?: number | null
    text: string
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    question_images?: question_imagesCreateNestedManyWithoutQuestionsInput
    question_options?: question_optionsCreateNestedManyWithoutQuestionsInput
    areas?: areasCreateNestedOneWithoutQuestionsInput
    difficulty: difficultyCreateNestedOneWithoutQuestionsInput
    question_types: question_typesCreateNestedOneWithoutQuestionsInput
    responses?: responsesCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutQuestion_referencesInput = {
    id?: number
    userId?: number | null
    areaId?: number | null
    text: string
    difficultyId: number
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    typeId: number
    question_images?: question_imagesUncheckedCreateNestedManyWithoutQuestionsInput
    question_options?: question_optionsUncheckedCreateNestedManyWithoutQuestionsInput
    responses?: responsesUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutQuestion_referencesInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutQuestion_referencesInput, questionsUncheckedCreateWithoutQuestion_referencesInput>
  }

  export type questionsUpsertWithoutQuestion_referencesInput = {
    update: XOR<questionsUpdateWithoutQuestion_referencesInput, questionsUncheckedUpdateWithoutQuestion_referencesInput>
    create: XOR<questionsCreateWithoutQuestion_referencesInput, questionsUncheckedCreateWithoutQuestion_referencesInput>
    where?: questionsWhereInput
  }

  export type questionsUpdateToOneWithWhereWithoutQuestion_referencesInput = {
    where?: questionsWhereInput
    data: XOR<questionsUpdateWithoutQuestion_referencesInput, questionsUncheckedUpdateWithoutQuestion_referencesInput>
  }

  export type questionsUpdateWithoutQuestion_referencesInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    question_images?: question_imagesUpdateManyWithoutQuestionsNestedInput
    question_options?: question_optionsUpdateManyWithoutQuestionsNestedInput
    areas?: areasUpdateOneWithoutQuestionsNestedInput
    difficulty?: difficultyUpdateOneRequiredWithoutQuestionsNestedInput
    question_types?: question_typesUpdateOneRequiredWithoutQuestionsNestedInput
    responses?: responsesUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutQuestion_referencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    areaId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    difficultyId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    question_images?: question_imagesUncheckedUpdateManyWithoutQuestionsNestedInput
    question_options?: question_optionsUncheckedUpdateManyWithoutQuestionsNestedInput
    responses?: responsesUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsCreateWithoutQuestion_typesInput = {
    userId?: number | null
    text: string
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    question_images?: question_imagesCreateNestedManyWithoutQuestionsInput
    question_options?: question_optionsCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesCreateNestedManyWithoutQuestionsInput
    areas?: areasCreateNestedOneWithoutQuestionsInput
    difficulty: difficultyCreateNestedOneWithoutQuestionsInput
    responses?: responsesCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutQuestion_typesInput = {
    id?: number
    userId?: number | null
    areaId?: number | null
    text: string
    difficultyId: number
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    question_images?: question_imagesUncheckedCreateNestedManyWithoutQuestionsInput
    question_options?: question_optionsUncheckedCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesUncheckedCreateNestedManyWithoutQuestionsInput
    responses?: responsesUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutQuestion_typesInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutQuestion_typesInput, questionsUncheckedCreateWithoutQuestion_typesInput>
  }

  export type questionsCreateManyQuestion_typesInputEnvelope = {
    data: questionsCreateManyQuestion_typesInput | questionsCreateManyQuestion_typesInput[]
    skipDuplicates?: boolean
  }

  export type questionsUpsertWithWhereUniqueWithoutQuestion_typesInput = {
    where: questionsWhereUniqueInput
    update: XOR<questionsUpdateWithoutQuestion_typesInput, questionsUncheckedUpdateWithoutQuestion_typesInput>
    create: XOR<questionsCreateWithoutQuestion_typesInput, questionsUncheckedCreateWithoutQuestion_typesInput>
  }

  export type questionsUpdateWithWhereUniqueWithoutQuestion_typesInput = {
    where: questionsWhereUniqueInput
    data: XOR<questionsUpdateWithoutQuestion_typesInput, questionsUncheckedUpdateWithoutQuestion_typesInput>
  }

  export type questionsUpdateManyWithWhereWithoutQuestion_typesInput = {
    where: questionsScalarWhereInput
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyWithoutQuestion_typesInput>
  }

  export type question_imagesCreateWithoutQuestionsInput = {
    imageId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type question_imagesUncheckedCreateWithoutQuestionsInput = {
    id?: number
    imageId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type question_imagesCreateOrConnectWithoutQuestionsInput = {
    where: question_imagesWhereUniqueInput
    create: XOR<question_imagesCreateWithoutQuestionsInput, question_imagesUncheckedCreateWithoutQuestionsInput>
  }

  export type question_imagesCreateManyQuestionsInputEnvelope = {
    data: question_imagesCreateManyQuestionsInput | question_imagesCreateManyQuestionsInput[]
    skipDuplicates?: boolean
  }

  export type question_optionsCreateWithoutQuestionsInput = {
    text: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    correct?: boolean
    additional?: string | null
  }

  export type question_optionsUncheckedCreateWithoutQuestionsInput = {
    id?: number
    text: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    correct?: boolean
    additional?: string | null
  }

  export type question_optionsCreateOrConnectWithoutQuestionsInput = {
    where: question_optionsWhereUniqueInput
    create: XOR<question_optionsCreateWithoutQuestionsInput, question_optionsUncheckedCreateWithoutQuestionsInput>
  }

  export type question_optionsCreateManyQuestionsInputEnvelope = {
    data: question_optionsCreateManyQuestionsInput | question_optionsCreateManyQuestionsInput[]
    skipDuplicates?: boolean
  }

  export type question_referencesCreateWithoutQuestionsInput = {
    referenceId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type question_referencesUncheckedCreateWithoutQuestionsInput = {
    id?: number
    referenceId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type question_referencesCreateOrConnectWithoutQuestionsInput = {
    where: question_referencesWhereUniqueInput
    create: XOR<question_referencesCreateWithoutQuestionsInput, question_referencesUncheckedCreateWithoutQuestionsInput>
  }

  export type question_referencesCreateManyQuestionsInputEnvelope = {
    data: question_referencesCreateManyQuestionsInput | question_referencesCreateManyQuestionsInput[]
    skipDuplicates?: boolean
  }

  export type areasCreateWithoutQuestionsInput = {
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    areas?: areasCreateNestedOneWithoutOther_areasInput
    other_areas?: areasCreateNestedManyWithoutAreasInput
  }

  export type areasUncheckedCreateWithoutQuestionsInput = {
    id?: number
    name: string
    parentAreaID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    other_areas?: areasUncheckedCreateNestedManyWithoutAreasInput
  }

  export type areasCreateOrConnectWithoutQuestionsInput = {
    where: areasWhereUniqueInput
    create: XOR<areasCreateWithoutQuestionsInput, areasUncheckedCreateWithoutQuestionsInput>
  }

  export type difficultyCreateWithoutQuestionsInput = {
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type difficultyUncheckedCreateWithoutQuestionsInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type difficultyCreateOrConnectWithoutQuestionsInput = {
    where: difficultyWhereUniqueInput
    create: XOR<difficultyCreateWithoutQuestionsInput, difficultyUncheckedCreateWithoutQuestionsInput>
  }

  export type question_typesCreateWithoutQuestionsInput = {
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type question_typesUncheckedCreateWithoutQuestionsInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type question_typesCreateOrConnectWithoutQuestionsInput = {
    where: question_typesWhereUniqueInput
    create: XOR<question_typesCreateWithoutQuestionsInput, question_typesUncheckedCreateWithoutQuestionsInput>
  }

  export type responsesCreateWithoutQuestionsInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    userId: number
    responseTime?: number | null
    selectedOptionId: number
  }

  export type responsesUncheckedCreateWithoutQuestionsInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    userId: number
    responseTime?: number | null
    selectedOptionId: number
  }

  export type responsesCreateOrConnectWithoutQuestionsInput = {
    where: responsesWhereUniqueInput
    create: XOR<responsesCreateWithoutQuestionsInput, responsesUncheckedCreateWithoutQuestionsInput>
  }

  export type responsesCreateManyQuestionsInputEnvelope = {
    data: responsesCreateManyQuestionsInput | responsesCreateManyQuestionsInput[]
    skipDuplicates?: boolean
  }

  export type question_imagesUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: question_imagesWhereUniqueInput
    update: XOR<question_imagesUpdateWithoutQuestionsInput, question_imagesUncheckedUpdateWithoutQuestionsInput>
    create: XOR<question_imagesCreateWithoutQuestionsInput, question_imagesUncheckedCreateWithoutQuestionsInput>
  }

  export type question_imagesUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: question_imagesWhereUniqueInput
    data: XOR<question_imagesUpdateWithoutQuestionsInput, question_imagesUncheckedUpdateWithoutQuestionsInput>
  }

  export type question_imagesUpdateManyWithWhereWithoutQuestionsInput = {
    where: question_imagesScalarWhereInput
    data: XOR<question_imagesUpdateManyMutationInput, question_imagesUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type question_imagesScalarWhereInput = {
    AND?: question_imagesScalarWhereInput | question_imagesScalarWhereInput[]
    OR?: question_imagesScalarWhereInput[]
    NOT?: question_imagesScalarWhereInput | question_imagesScalarWhereInput[]
    id?: IntFilter<"question_images"> | number
    questionId?: IntFilter<"question_images"> | number
    imageId?: IntFilter<"question_images"> | number
    createdAt?: DateTimeNullableFilter<"question_images"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"question_images"> | Date | string | null
  }

  export type question_optionsUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: question_optionsWhereUniqueInput
    update: XOR<question_optionsUpdateWithoutQuestionsInput, question_optionsUncheckedUpdateWithoutQuestionsInput>
    create: XOR<question_optionsCreateWithoutQuestionsInput, question_optionsUncheckedCreateWithoutQuestionsInput>
  }

  export type question_optionsUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: question_optionsWhereUniqueInput
    data: XOR<question_optionsUpdateWithoutQuestionsInput, question_optionsUncheckedUpdateWithoutQuestionsInput>
  }

  export type question_optionsUpdateManyWithWhereWithoutQuestionsInput = {
    where: question_optionsScalarWhereInput
    data: XOR<question_optionsUpdateManyMutationInput, question_optionsUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type question_optionsScalarWhereInput = {
    AND?: question_optionsScalarWhereInput | question_optionsScalarWhereInput[]
    OR?: question_optionsScalarWhereInput[]
    NOT?: question_optionsScalarWhereInput | question_optionsScalarWhereInput[]
    id?: IntFilter<"question_options"> | number
    questionId?: IntFilter<"question_options"> | number
    text?: StringFilter<"question_options"> | string
    createdAt?: DateTimeNullableFilter<"question_options"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"question_options"> | Date | string | null
    correct?: BoolFilter<"question_options"> | boolean
    additional?: StringNullableFilter<"question_options"> | string | null
  }

  export type question_referencesUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: question_referencesWhereUniqueInput
    update: XOR<question_referencesUpdateWithoutQuestionsInput, question_referencesUncheckedUpdateWithoutQuestionsInput>
    create: XOR<question_referencesCreateWithoutQuestionsInput, question_referencesUncheckedCreateWithoutQuestionsInput>
  }

  export type question_referencesUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: question_referencesWhereUniqueInput
    data: XOR<question_referencesUpdateWithoutQuestionsInput, question_referencesUncheckedUpdateWithoutQuestionsInput>
  }

  export type question_referencesUpdateManyWithWhereWithoutQuestionsInput = {
    where: question_referencesScalarWhereInput
    data: XOR<question_referencesUpdateManyMutationInput, question_referencesUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type question_referencesScalarWhereInput = {
    AND?: question_referencesScalarWhereInput | question_referencesScalarWhereInput[]
    OR?: question_referencesScalarWhereInput[]
    NOT?: question_referencesScalarWhereInput | question_referencesScalarWhereInput[]
    id?: IntFilter<"question_references"> | number
    questionId?: IntFilter<"question_references"> | number
    referenceId?: IntFilter<"question_references"> | number
    createdAt?: DateTimeNullableFilter<"question_references"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"question_references"> | Date | string | null
  }

  export type areasUpsertWithoutQuestionsInput = {
    update: XOR<areasUpdateWithoutQuestionsInput, areasUncheckedUpdateWithoutQuestionsInput>
    create: XOR<areasCreateWithoutQuestionsInput, areasUncheckedCreateWithoutQuestionsInput>
    where?: areasWhereInput
  }

  export type areasUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: areasWhereInput
    data: XOR<areasUpdateWithoutQuestionsInput, areasUncheckedUpdateWithoutQuestionsInput>
  }

  export type areasUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    areas?: areasUpdateOneWithoutOther_areasNestedInput
    other_areas?: areasUpdateManyWithoutAreasNestedInput
  }

  export type areasUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentAreaID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_areas?: areasUncheckedUpdateManyWithoutAreasNestedInput
  }

  export type difficultyUpsertWithoutQuestionsInput = {
    update: XOR<difficultyUpdateWithoutQuestionsInput, difficultyUncheckedUpdateWithoutQuestionsInput>
    create: XOR<difficultyCreateWithoutQuestionsInput, difficultyUncheckedCreateWithoutQuestionsInput>
    where?: difficultyWhereInput
  }

  export type difficultyUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: difficultyWhereInput
    data: XOR<difficultyUpdateWithoutQuestionsInput, difficultyUncheckedUpdateWithoutQuestionsInput>
  }

  export type difficultyUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type difficultyUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_typesUpsertWithoutQuestionsInput = {
    update: XOR<question_typesUpdateWithoutQuestionsInput, question_typesUncheckedUpdateWithoutQuestionsInput>
    create: XOR<question_typesCreateWithoutQuestionsInput, question_typesUncheckedCreateWithoutQuestionsInput>
    where?: question_typesWhereInput
  }

  export type question_typesUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: question_typesWhereInput
    data: XOR<question_typesUpdateWithoutQuestionsInput, question_typesUncheckedUpdateWithoutQuestionsInput>
  }

  export type question_typesUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_typesUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type responsesUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: responsesWhereUniqueInput
    update: XOR<responsesUpdateWithoutQuestionsInput, responsesUncheckedUpdateWithoutQuestionsInput>
    create: XOR<responsesCreateWithoutQuestionsInput, responsesUncheckedCreateWithoutQuestionsInput>
  }

  export type responsesUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: responsesWhereUniqueInput
    data: XOR<responsesUpdateWithoutQuestionsInput, responsesUncheckedUpdateWithoutQuestionsInput>
  }

  export type responsesUpdateManyWithWhereWithoutQuestionsInput = {
    where: responsesScalarWhereInput
    data: XOR<responsesUpdateManyMutationInput, responsesUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type responsesScalarWhereInput = {
    AND?: responsesScalarWhereInput | responsesScalarWhereInput[]
    OR?: responsesScalarWhereInput[]
    NOT?: responsesScalarWhereInput | responsesScalarWhereInput[]
    id?: IntFilter<"responses"> | number
    questionId?: IntFilter<"responses"> | number
    createdAt?: DateTimeNullableFilter<"responses"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"responses"> | Date | string | null
    userId?: IntFilter<"responses"> | number
    responseTime?: IntNullableFilter<"responses"> | number | null
    selectedOptionId?: IntFilter<"responses"> | number
  }

  export type questionsCreateWithoutResponsesInput = {
    userId?: number | null
    text: string
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    question_images?: question_imagesCreateNestedManyWithoutQuestionsInput
    question_options?: question_optionsCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesCreateNestedManyWithoutQuestionsInput
    areas?: areasCreateNestedOneWithoutQuestionsInput
    difficulty: difficultyCreateNestedOneWithoutQuestionsInput
    question_types: question_typesCreateNestedOneWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutResponsesInput = {
    id?: number
    userId?: number | null
    areaId?: number | null
    text: string
    difficultyId: number
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    typeId: number
    question_images?: question_imagesUncheckedCreateNestedManyWithoutQuestionsInput
    question_options?: question_optionsUncheckedCreateNestedManyWithoutQuestionsInput
    question_references?: question_referencesUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutResponsesInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutResponsesInput, questionsUncheckedCreateWithoutResponsesInput>
  }

  export type questionsUpsertWithoutResponsesInput = {
    update: XOR<questionsUpdateWithoutResponsesInput, questionsUncheckedUpdateWithoutResponsesInput>
    create: XOR<questionsCreateWithoutResponsesInput, questionsUncheckedCreateWithoutResponsesInput>
    where?: questionsWhereInput
  }

  export type questionsUpdateToOneWithWhereWithoutResponsesInput = {
    where?: questionsWhereInput
    data: XOR<questionsUpdateWithoutResponsesInput, questionsUncheckedUpdateWithoutResponsesInput>
  }

  export type questionsUpdateWithoutResponsesInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    question_images?: question_imagesUpdateManyWithoutQuestionsNestedInput
    question_options?: question_optionsUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUpdateManyWithoutQuestionsNestedInput
    areas?: areasUpdateOneWithoutQuestionsNestedInput
    difficulty?: difficultyUpdateOneRequiredWithoutQuestionsNestedInput
    question_types?: question_typesUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    areaId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    difficultyId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    question_images?: question_imagesUncheckedUpdateManyWithoutQuestionsNestedInput
    question_options?: question_optionsUncheckedUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type areasCreateManyAreasInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type questionsCreateManyAreasInput = {
    id?: number
    userId?: number | null
    text: string
    difficultyId: number
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    typeId: number
  }

  export type areasUpdateWithoutAreasInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_areas?: areasUpdateManyWithoutAreasNestedInput
    questions?: questionsUpdateManyWithoutAreasNestedInput
  }

  export type areasUncheckedUpdateWithoutAreasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_areas?: areasUncheckedUpdateManyWithoutAreasNestedInput
    questions?: questionsUncheckedUpdateManyWithoutAreasNestedInput
  }

  export type areasUncheckedUpdateManyWithoutAreasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questionsUpdateWithoutAreasInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    question_images?: question_imagesUpdateManyWithoutQuestionsNestedInput
    question_options?: question_optionsUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUpdateManyWithoutQuestionsNestedInput
    difficulty?: difficultyUpdateOneRequiredWithoutQuestionsNestedInput
    question_types?: question_typesUpdateOneRequiredWithoutQuestionsNestedInput
    responses?: responsesUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutAreasInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    difficultyId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    question_images?: question_imagesUncheckedUpdateManyWithoutQuestionsNestedInput
    question_options?: question_optionsUncheckedUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUncheckedUpdateManyWithoutQuestionsNestedInput
    responses?: responsesUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateManyWithoutAreasInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    difficultyId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type questionsCreateManyDifficultyInput = {
    id?: number
    userId?: number | null
    areaId?: number | null
    text: string
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
    typeId: number
  }

  export type questionsUpdateWithoutDifficultyInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    question_images?: question_imagesUpdateManyWithoutQuestionsNestedInput
    question_options?: question_optionsUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUpdateManyWithoutQuestionsNestedInput
    areas?: areasUpdateOneWithoutQuestionsNestedInput
    question_types?: question_typesUpdateOneRequiredWithoutQuestionsNestedInput
    responses?: responsesUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutDifficultyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    areaId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    question_images?: question_imagesUncheckedUpdateManyWithoutQuestionsNestedInput
    question_options?: question_optionsUncheckedUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUncheckedUpdateManyWithoutQuestionsNestedInput
    responses?: responsesUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateManyWithoutDifficultyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    areaId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type questionsCreateManyQuestion_typesInput = {
    id?: number
    userId?: number | null
    areaId?: number | null
    text: string
    difficultyId: number
    approved?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    hint?: string | null
    explanation?: string | null
  }

  export type questionsUpdateWithoutQuestion_typesInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    question_images?: question_imagesUpdateManyWithoutQuestionsNestedInput
    question_options?: question_optionsUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUpdateManyWithoutQuestionsNestedInput
    areas?: areasUpdateOneWithoutQuestionsNestedInput
    difficulty?: difficultyUpdateOneRequiredWithoutQuestionsNestedInput
    responses?: responsesUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutQuestion_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    areaId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    difficultyId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    question_images?: question_imagesUncheckedUpdateManyWithoutQuestionsNestedInput
    question_options?: question_optionsUncheckedUpdateManyWithoutQuestionsNestedInput
    question_references?: question_referencesUncheckedUpdateManyWithoutQuestionsNestedInput
    responses?: responsesUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateManyWithoutQuestion_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    areaId?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    difficultyId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type question_imagesCreateManyQuestionsInput = {
    id?: number
    imageId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type question_optionsCreateManyQuestionsInput = {
    id?: number
    text: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    correct?: boolean
    additional?: string | null
  }

  export type question_referencesCreateManyQuestionsInput = {
    id?: number
    referenceId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type responsesCreateManyQuestionsInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    userId: number
    responseTime?: number | null
    selectedOptionId: number
  }

  export type question_imagesUpdateWithoutQuestionsInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_imagesUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_imagesUncheckedUpdateManyWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_optionsUpdateWithoutQuestionsInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correct?: BoolFieldUpdateOperationsInput | boolean
    additional?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type question_optionsUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correct?: BoolFieldUpdateOperationsInput | boolean
    additional?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type question_optionsUncheckedUpdateManyWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correct?: BoolFieldUpdateOperationsInput | boolean
    additional?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type question_referencesUpdateWithoutQuestionsInput = {
    referenceId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_referencesUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type question_referencesUncheckedUpdateManyWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type responsesUpdateWithoutQuestionsInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    selectedOptionId?: IntFieldUpdateOperationsInput | number
  }

  export type responsesUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    selectedOptionId?: IntFieldUpdateOperationsInput | number
  }

  export type responsesUncheckedUpdateManyWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    selectedOptionId?: IntFieldUpdateOperationsInput | number
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