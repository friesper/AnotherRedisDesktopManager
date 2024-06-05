const adminCMD = {
  ACL: ['ACL CAT [categoryname]', 'ACL DELUSER username [username ...]', 'ACL DRYRUN username command [arg [arg ...]]', 'ACL GENPASS [bits]', 'ACL GETUSER username', 'ACL LIST', 'ACL LOAD', 'ACL LOG [count|RESET]', 'ACL SAVE', 'ACL SETUSER username [rule [rule ...]]', 'ACL USERS', 'ACL WHOAMI'],
  BGREWRITEAOF: 'BGREWRITEAOF',
  BGSAVE: 'BGSAVE',
  CLIENT: ['CLIENT LIST [TYPE normal|master|replica|pubsub]', 'CLIENT GETNAME', 'CLIENT REPLY ON|OFF|SKIP', 'CLIENT ID'],
  CLUSTER: ['CLUSTER COUNT-FAILURE-REPORTS node-id', 'CLUSTER COUNTKEYSINSLOT slot', 'CLUSTER GETKEYSINSLOT slot count', 'CLUSTER INFO', 'CLUSTER KEYSLOT key', 'CLUSTER NODES', 'CLUSTER SLAVES node-id', 'CLUSTER REPLICAS node-id', 'CLUSTER SLOTS'],
  CONFIG: ['CONFIG GET parameter', 'CONFIG SET parameter value', 'CONFIG RESETSTAT'],
  DEBUG: ['DEBUG OBJECT key', 'DEBUG SEGFAULT'],
  FAILOVER: 'FAILOVER [TO host port [FORCE]] [ABORT] [TIMEOUT milliseconds]',
  LATENCY: ['LATENCY DOCTOR', 'LATENCY GRAPH event', 'LATENCY HISTOGRAM [command [command ...]]', 'LATENCY HISTORY event', 'LATENCY LATEST', 'LATENCY RESET [event [event ...]]'],
  MODULE: ['MODULE LIST', 'MODULE LOAD path [arg [arg ...]]', 'MODULE UNLOAD name'],
  MONITOR: 'MONITOR',
  PFDEBUG: 'PFDEBUG',
  PFSELFTEST: 'PFSELFTEST',
  PSYNC: 'PSYNC replicationid offset',
  REPLCONF: 'REPLCONF',
  REPLICAOF: 'REPLICAOF host port',
  SAVE: 'SAVE',
  SHUTDOWN: 'SHUTDOWN [NOSAVE|SAVE] [NOW] [FORCE] [ABORT]',
  SLAVEOF: 'SLAVEOF host port',
  SLOWLOG: 'SLOWLOG subcommand [argument]',
  SYNC: 'SYNC',
};

const readCMD = {
  AUTH: 'AUTH password',
  BITCOUNT: 'BITCOUNT key [start] [end]',
  BITOP: 'BITOP operation destkey key [key ...]',
  BITPOS: 'BITPOS key bit [start] [end]',
  COMMAND: ['COMMAND COUNT', 'COMMAND GETKEYS', 'COMMAND INFO command-name [command-name ...]'],
  DBSIZE: 'DBSIZE',
  DISCARD: 'DISCARD',
  DUMP: 'DUMP key',
  ECHO: 'ECHO message',
  EXEC: 'EXEC',
  EXISTS: 'EXISTS key',
  GET: 'GET key',
  GETBIT: 'GETBIT key offset',
  GETRANGE: 'GETRANGE key start end',
  HEXISTS: 'HEXISTS key field',
  HGET: 'HGET key field',
  HGETALL: 'HGETALL key',
  HKEYS: 'HKEYS key',
  HLEN: 'HLEN key',
  HMGET: 'HMGET key field [field ...]',
  HSCAN: 'HSCAN key cursor [MATCH pattern] [COUNT count]',
  HVALS: 'HVALS key',
  INFO: 'INFO [section]',
  KEYS: 'KEYS pattern',
  LASTSAVE: 'LASTSAVE',
  LINDEX: 'LINDEX key index',
  LLEN: 'LLEN key',
  LRANGE: 'LRANGE key start stop',
  MGET: 'MGET key [key ...]',
  MULTI: 'MULTI',
  OBJECT: ['OBJECT ENCODING key', 'OBJECT FREQ key', 'OBJECT IDLETIME key', 'OBJECT REFCOUNT key'],
  PING: 'PING [message]',
  PUBSUB: ['PUBSUB CHANNELS [pattern]', 'PUBSUB NUMSUB [channel-1 ...]', 'PUBSUB NUMPAT'],
  PSUBSCRIBE: 'PSUBSCRIBE pattern [pattern ...]',
  PTTL: 'PTTL key',
  PUNSUBSCRIBE: 'PUNSUBSCRIBE [pattern ...]',
  RANDOMKEY: 'RANDOMKEY',
  ROLE: 'ROLE',
  SCAN: 'SCAN cursor [MATCH pattern] [COUNT count]',
  SCARD: 'SCARD key',
  SDIFF: 'SDIFF key [key ...]',
  SELECT: 'SELECT index',
  SINTER: 'SINTER key [key ...]',
  SISMEMBER: 'SISMEMBER key member',
  SMEMBERS: 'SMEMBERS key',
  SRANDMEMBER: 'SRANDMEMBER key [count]',
  SSCAN: 'SSCAN key cursor [MATCH pattern] [COUNT count]',
  STRLEN: 'STRLEN key',
  SUBSCRIBE: 'SUBSCRIBE channel [channel ...]',
  SUNION: 'SUNION key [key ...]',
  TIME: 'TIME',
  TTL: 'TTL key',
  TYPE: 'TYPE key',
  UNSUBSCRIBE: 'UNSUBSCRIBE [channel ...]',
  UNWATCH: 'UNWATCH',
  WATCH: 'WATCH key [key ...]',
  ZCARD: 'ZCARD key',
  ZCOUNT: 'ZCOUNT key min max',
  ZLEXCOUNT: 'ZLEXCOUNT key min max',
  ZRANGE: 'ZRANGE key start stop [WITHSCORES]',
  ZRANGEBYLEX: 'ZRANGEBYLEX key min max [LIMIT offset count]',
  ZRANGEBYSCORE: 'ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]',
  ZRANK: 'ZRANK key member',
  ZREVRANGE: 'ZREVRANGE key start stop [WITHSCORES]',
  ZREVRANGEBYLEX: 'ZREVRANGEBYLEX key max min [LIMIT offset count]',
  ZREVRANGEBYSCORE: 'ZREVRANGEBYSCORE key max min [WITHSCORES] [LIMIT offset count]',
  ZREVRANK: 'ZREVRANK key member',
  ZSCAN: 'ZSCAN key cursor [MATCH pattern] [COUNT count]',
  ZSCORE: 'ZSCORE key member',
  GEOHASH: 'GEOHASH key member [member ...]',
  GEOPOS: 'GEOPOS key member [member ...]',
  GEODIST: 'GEODIST key member1 member2 [unit]',
  HSTRLEN: 'HSTRLEN key field',
  MEMORY: ['MEMORY DOCTOR', 'MEMORY HELP', 'MEMORY MALLOC-STATS', 'MEMORY STATS', 'MEMORY USAGE key [SAMPLES count]'],
  XINFO: 'XINFO [CONSUMERS key groupname] [GROUPS key] [STREAM key] [HELP]',
  XRANGE: 'XRANGE key start end [COUNT count]',
  XREVRANGE: 'XREVRANGE key end start [COUNT count]',
  XLEN: 'XLEN key',
  XREAD: 'XREAD [COUNT count] [BLOCK milliseconds] STREAMS key [key ...] ID [ID ...]',
  XREADGROUP: 'XREADGROUP GROUP group consumer [COUNT count] [BLOCK milliseconds] [NOACK] STREAMS key [key ...] ID [ID ...]',
  XPENDING: 'XPENDING key group [start end count] [consumer]',
};

const writeCMD = {
  APPEND: 'APPEND key value',
  BLMOVE: 'BLMOVE source destination LEFT|RIGHT LEFT|RIGHT timeout',
  BLPOP: 'BLPOP key [key ...] timeout',
  BRPOP: 'BRPOP key [key ...] timeout',
  BRPOPLPUSH: 'BRPOPLPUSH source destination timeout',
  BZPOPMAX: 'BZPOPMAX key [key ...] timeout',
  BZPOPMIN: 'BZPOPMIN key [key ...] timeout',
  COPY: 'COPY source destination [DB destination-db] [REPLACE]',
  DECR: 'DECR key',
  DECRBY: 'DECRBY key decrement',
  DEL: 'DEL key [key ...]',
  EVAL: 'EVAL script numkeys key [key ...] arg [arg ...]',
  EVALSHA: 'EVALSHA sha1 numkeys key [key ...] arg [arg ...]',
  EXPIRE: 'EXPIRE key seconds',
  EXPIREAT: 'EXPIREAT key timestamp',
  FLUSHALL: 'FLUSHALL',
  FLUSHDB: 'FLUSHDB',
  GEOADD: 'GEOADD key [NX|XX] [CH] longitude latitude member [longitude latitude member ...]',
  GETDEL: 'GETDEL key',
  GETSET: 'GETSET key value',
  HDEL: 'HDEL key field [field ...]',
  HINCRBY: 'HINCRBY key field increment',
  HINCRBYFLOAT: 'HINCRBYFLOAT key field increment',
  HMSET: 'HMSET key field value [field value ...]',
  HSET: 'HSET key field value',
  HSETNX: 'HSETNX key field value',
  INCR: 'INCR key',
  INCRBY: 'INCRBY key increment',
  INCRBYFLOAT: 'INCRBYFLOAT key increment',
  LINSERT: 'LINSERT key BEFORE|AFTER pivot value',
  LMOVE: 'LMOVE source destination LEFT|RIGHT LEFT|RIGHT',
  LPOP: 'LPOP key',
  LPUSH: 'LPUSH key value [value ...]',
  LPUSHX: 'LPUSHX key value',
  LREM: 'LREM key count value',
  LSET: 'LSET key index value',
  LTRIM: 'LTRIM key start stop',
  MIGRATE: 'MIGRATE host port key destination-db timeout',
  MOVE: 'MOVE key db',
  MSET: 'MSET key value [key value ...]',
  MSETNX: 'MSETNX key value [key value ...]',
  PERSIST: 'PERSIST key',
  PEXPIRE: 'PEXPIRE key milliseconds',
  PEXPIREAT: 'PEXPIREAT key milliseconds-timestamp',
  PSETEX: 'PSETEX key milliseconds value',
  PUBLISH: 'PUBLISH channel message',
  RENAME: 'RENAME key newkey',
  RENAMENX: 'RENAMENX key newkey',
  RESTORE: 'RESTORE key ttl serialized-value',
  RPOP: 'RPOP key',
  RPOPLPUSH: 'RPOPLPUSH source destination',
  RPUSH: 'RPUSH key value [value ...]',
  RPUSHX: 'RPUSHX key value',
  SADD: 'SADD key member [member ...]',
  SCRIPT: ['SCRIPT EXISTS script [script ...]', 'SCRIPT FLUSH', 'SCRIPT KILL', 'SCRIPT LOAD script'],
  SDIFFSTORE: 'SDIFFSTORE destination key [key ...]',
  SET: 'SET key value',
  SETBIT: 'SETBIT key offset value',
  SETEX: 'SETEX key seconds value',
  SETNX: 'SETNX key value',
  SETRANGE: 'SETRANGE key offset value',
  SINTERSTORE: 'SINTERSTORE destination key [key ...]',
  SMOVE: 'SMOVE source destination member',
  SORT: 'SORT key [BY pattern] [LIMIT offset count] [GET pattern [GET pattern ...]] [ASC|DESC] [ALPHA] [STORE destination]',
  SPOP: 'SPOP key',
  SREM: 'SREM key member [member ...]',
  SUNIONSTORE: 'SUNIONSTORE destination key [key ...]',
  SWAPDB: 'SWAPDB index1 index2',
  UNLINK: 'UNLINK key [key ...]',
  XADD: 'XADD key ID field string [field string ...]',
  XDEL: 'XDEL key ID [ID ...]',
  XGROUP: ['XGROUP CREATE key groupname id|$ [MKSTREAM]', 'XGROUP CREATECONSUMER key groupname consumername', 'XGROUP DELCONSUMER key groupname consumername', 'XGROUP DESTROY key groupname', 'XGROUP SETID key groupname id|$'],
  XTRIM: 'XTRIM key MAXLEN [~] count',
  ZADD: 'ZADD key score member [score] [member]',
  ZDIFFSTORE: 'ZDIFFSTORE destination numkeys key [key ...]',
  ZINCRBY: 'ZINCRBY key increment member',
  ZINTERSTORE: 'ZINTERSTORE destination numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX]',
  ZPOPMAX: 'ZPOPMAX key [count]',
  ZPOPMIN: 'ZPOPMIN key [count]',
  ZRANGESTORE: 'ZRANGESTORE dst src min max [BYSCORE|BYLEX] [REV] [LIMIT offset count]',
  ZREM: 'ZREM key member [member ...]',
  ZREMRANGEBYLEX: 'ZREMRANGEBYLEX key min max',
  ZREMRANGEBYRANK: 'ZREMRANGEBYRANK key start stop',
  ZREMRANGEBYSCORE: 'ZREMRANGEBYSCORE key min max',
  ZUNIONSTORE: 'ZUNIONSTORE destination numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX]',
};

module.exports = {
  allCMD: { ...adminCMD, ...readCMD, ...writeCMD },
  writeCMD,
};
