goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17348 = (function (f,blockable,meta17349){
this.f = f;
this.blockable = blockable;
this.meta17349 = meta17349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17350,meta17349__$1){
var self__ = this;
var _17350__$1 = this;
return (new cljs.core.async.t_cljs$core$async17348(self__.f,self__.blockable,meta17349__$1));
}));

(cljs.core.async.t_cljs$core$async17348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17350){
var self__ = this;
var _17350__$1 = this;
return self__.meta17349;
}));

(cljs.core.async.t_cljs$core$async17348.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17349","meta17349",-917746635,null)], null);
}));

(cljs.core.async.t_cljs$core$async17348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17348");

(cljs.core.async.t_cljs$core$async17348.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17348.
 */
cljs.core.async.__GT_t_cljs$core$async17348 = (function cljs$core$async$__GT_t_cljs$core$async17348(f,blockable,meta17349){
return (new cljs.core.async.t_cljs$core$async17348(f,blockable,meta17349));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17347 = arguments.length;
switch (G__17347) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async17348(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17354 = arguments.length;
switch (G__17354) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17379 = arguments.length;
switch (G__17379) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17384 = arguments.length;
switch (G__17384) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19653 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19653) : fn1.call(null,val_19653));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19653) : fn1.call(null,val_19653));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17442 = arguments.length;
switch (G__17442) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19668 = n;
var x_19669 = (0);
while(true){
if((x_19669 < n__5636__auto___19668)){
(a[x_19669] = x_19669);

var G__19670 = (x_19669 + (1));
x_19669 = G__19670;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17459 = (function (flag,meta17460){
this.flag = flag;
this.meta17460 = meta17460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17461,meta17460__$1){
var self__ = this;
var _17461__$1 = this;
return (new cljs.core.async.t_cljs$core$async17459(self__.flag,meta17460__$1));
}));

(cljs.core.async.t_cljs$core$async17459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17461){
var self__ = this;
var _17461__$1 = this;
return self__.meta17460;
}));

(cljs.core.async.t_cljs$core$async17459.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17459.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17460","meta17460",283130669,null)], null);
}));

(cljs.core.async.t_cljs$core$async17459.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17459");

(cljs.core.async.t_cljs$core$async17459.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17459");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17459.
 */
cljs.core.async.__GT_t_cljs$core$async17459 = (function cljs$core$async$__GT_t_cljs$core$async17459(flag,meta17460){
return (new cljs.core.async.t_cljs$core$async17459(flag,meta17460));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async17459(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17501 = (function (flag,cb,meta17502){
this.flag = flag;
this.cb = cb;
this.meta17502 = meta17502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17503,meta17502__$1){
var self__ = this;
var _17503__$1 = this;
return (new cljs.core.async.t_cljs$core$async17501(self__.flag,self__.cb,meta17502__$1));
}));

(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17503){
var self__ = this;
var _17503__$1 = this;
return self__.meta17502;
}));

(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17502","meta17502",-524090627,null)], null);
}));

(cljs.core.async.t_cljs$core$async17501.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17501");

(cljs.core.async.t_cljs$core$async17501.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17501");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17501.
 */
cljs.core.async.__GT_t_cljs$core$async17501 = (function cljs$core$async$__GT_t_cljs$core$async17501(flag,cb,meta17502){
return (new cljs.core.async.t_cljs$core$async17501(flag,cb,meta17502));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async17501(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17515_SHARP_){
var G__17521 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17515_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17521) : fret.call(null,G__17521));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17516_SHARP_){
var G__17522 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17516_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17522) : fret.call(null,G__17522));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19685 = (i + (1));
i = G__19685;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19687 = arguments.length;
var i__5770__auto___19688 = (0);
while(true){
if((i__5770__auto___19688 < len__5769__auto___19687)){
args__5775__auto__.push((arguments[i__5770__auto___19688]));

var G__19690 = (i__5770__auto___19688 + (1));
i__5770__auto___19688 = G__19690;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17529){
var map__17530 = p__17529;
var map__17530__$1 = cljs.core.__destructure_map(map__17530);
var opts = map__17530__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17527){
var G__17528 = cljs.core.first(seq17527);
var seq17527__$1 = cljs.core.next(seq17527);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17528,seq17527__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17538 = arguments.length;
switch (G__17538) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17266__auto___19698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_17620){
var state_val_17621 = (state_17620[(1)]);
if((state_val_17621 === (7))){
var inst_17616 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
var statearr_17623_19700 = state_17620__$1;
(statearr_17623_19700[(2)] = inst_17616);

(statearr_17623_19700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (1))){
var state_17620__$1 = state_17620;
var statearr_17624_19701 = state_17620__$1;
(statearr_17624_19701[(2)] = null);

(statearr_17624_19701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (4))){
var inst_17599 = (state_17620[(7)]);
var inst_17599__$1 = (state_17620[(2)]);
var inst_17600 = (inst_17599__$1 == null);
var state_17620__$1 = (function (){var statearr_17625 = state_17620;
(statearr_17625[(7)] = inst_17599__$1);

return statearr_17625;
})();
if(cljs.core.truth_(inst_17600)){
var statearr_17626_19708 = state_17620__$1;
(statearr_17626_19708[(1)] = (5));

} else {
var statearr_17627_19709 = state_17620__$1;
(statearr_17627_19709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (13))){
var state_17620__$1 = state_17620;
var statearr_17628_19710 = state_17620__$1;
(statearr_17628_19710[(2)] = null);

(statearr_17628_19710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (6))){
var inst_17599 = (state_17620[(7)]);
var state_17620__$1 = state_17620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17620__$1,(11),to,inst_17599);
} else {
if((state_val_17621 === (3))){
var inst_17618 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17620__$1,inst_17618);
} else {
if((state_val_17621 === (12))){
var state_17620__$1 = state_17620;
var statearr_17632_19711 = state_17620__$1;
(statearr_17632_19711[(2)] = null);

(statearr_17632_19711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (2))){
var state_17620__$1 = state_17620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17620__$1,(4),from);
} else {
if((state_val_17621 === (11))){
var inst_17609 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
if(cljs.core.truth_(inst_17609)){
var statearr_17633_19712 = state_17620__$1;
(statearr_17633_19712[(1)] = (12));

} else {
var statearr_17634_19713 = state_17620__$1;
(statearr_17634_19713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (9))){
var state_17620__$1 = state_17620;
var statearr_17635_19714 = state_17620__$1;
(statearr_17635_19714[(2)] = null);

(statearr_17635_19714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (5))){
var state_17620__$1 = state_17620;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17636_19715 = state_17620__$1;
(statearr_17636_19715[(1)] = (8));

} else {
var statearr_17637_19716 = state_17620__$1;
(statearr_17637_19716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (14))){
var inst_17614 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
var statearr_17638_19718 = state_17620__$1;
(statearr_17638_19718[(2)] = inst_17614);

(statearr_17638_19718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (10))){
var inst_17606 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
var statearr_17640_19720 = state_17620__$1;
(statearr_17640_19720[(2)] = inst_17606);

(statearr_17640_19720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (8))){
var inst_17603 = cljs.core.async.close_BANG_(to);
var state_17620__$1 = state_17620;
var statearr_17641_19722 = state_17620__$1;
(statearr_17641_19722[(2)] = inst_17603);

(statearr_17641_19722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_17642 = [null,null,null,null,null,null,null,null];
(statearr_17642[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_17642[(1)] = (1));

return statearr_17642;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_17620){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17620);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17643){var ex__17103__auto__ = e17643;
var statearr_17644_19724 = state_17620;
(statearr_17644_19724[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17620[(4)]))){
var statearr_17645_19725 = state_17620;
(statearr_17645_19725[(1)] = cljs.core.first((state_17620[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19726 = state_17620;
state_17620 = G__19726;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_17620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_17620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_17646 = f__17267__auto__();
(statearr_17646[(6)] = c__17266__auto___19698);

return statearr_17646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17649){
var vec__17650 = p__17649;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17650,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17650,(1),null);
var job = vec__17650;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17266__auto___19734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_17657){
var state_val_17658 = (state_17657[(1)]);
if((state_val_17658 === (1))){
var state_17657__$1 = state_17657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17657__$1,(2),res,v);
} else {
if((state_val_17658 === (2))){
var inst_17654 = (state_17657[(2)]);
var inst_17655 = cljs.core.async.close_BANG_(res);
var state_17657__$1 = (function (){var statearr_17659 = state_17657;
(statearr_17659[(7)] = inst_17654);

return statearr_17659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17657__$1,inst_17655);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17660 = [null,null,null,null,null,null,null,null];
(statearr_17660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17660[(1)] = (1));

return statearr_17660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17657){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17657);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17662){var ex__17103__auto__ = e17662;
var statearr_17663_19737 = state_17657;
(statearr_17663_19737[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17657[(4)]))){
var statearr_17664_19738 = state_17657;
(statearr_17664_19738[(1)] = cljs.core.first((state_17657[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19739 = state_17657;
state_17657 = G__19739;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_17665 = f__17267__auto__();
(statearr_17665[(6)] = c__17266__auto___19734);

return statearr_17665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17666){
var vec__17667 = p__17666;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17667,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17667,(1),null);
var job = vec__17667;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19741 = n;
var __19742 = (0);
while(true){
if((__19742 < n__5636__auto___19741)){
var G__17671_19746 = type;
var G__17671_19747__$1 = (((G__17671_19746 instanceof cljs.core.Keyword))?G__17671_19746.fqn:null);
switch (G__17671_19747__$1) {
case "compute":
var c__17266__auto___19749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19742,c__17266__auto___19749,G__17671_19746,G__17671_19747__$1,n__5636__auto___19741,jobs,results,process__$1,async){
return (function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = ((function (__19742,c__17266__auto___19749,G__17671_19746,G__17671_19747__$1,n__5636__auto___19741,jobs,results,process__$1,async){
return (function (state_17684){
var state_val_17685 = (state_17684[(1)]);
if((state_val_17685 === (1))){
var state_17684__$1 = state_17684;
var statearr_17686_19750 = state_17684__$1;
(statearr_17686_19750[(2)] = null);

(statearr_17686_19750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (2))){
var state_17684__$1 = state_17684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17684__$1,(4),jobs);
} else {
if((state_val_17685 === (3))){
var inst_17682 = (state_17684[(2)]);
var state_17684__$1 = state_17684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17684__$1,inst_17682);
} else {
if((state_val_17685 === (4))){
var inst_17674 = (state_17684[(2)]);
var inst_17675 = process__$1(inst_17674);
var state_17684__$1 = state_17684;
if(cljs.core.truth_(inst_17675)){
var statearr_17688_19751 = state_17684__$1;
(statearr_17688_19751[(1)] = (5));

} else {
var statearr_17689_19752 = state_17684__$1;
(statearr_17689_19752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (5))){
var state_17684__$1 = state_17684;
var statearr_17690_19753 = state_17684__$1;
(statearr_17690_19753[(2)] = null);

(statearr_17690_19753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (6))){
var state_17684__$1 = state_17684;
var statearr_17691_19754 = state_17684__$1;
(statearr_17691_19754[(2)] = null);

(statearr_17691_19754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (7))){
var inst_17680 = (state_17684[(2)]);
var state_17684__$1 = state_17684;
var statearr_17692_19755 = state_17684__$1;
(statearr_17692_19755[(2)] = inst_17680);

(statearr_17692_19755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19742,c__17266__auto___19749,G__17671_19746,G__17671_19747__$1,n__5636__auto___19741,jobs,results,process__$1,async))
;
return ((function (__19742,switch__17099__auto__,c__17266__auto___19749,G__17671_19746,G__17671_19747__$1,n__5636__auto___19741,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17693 = [null,null,null,null,null,null,null];
(statearr_17693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17693[(1)] = (1));

return statearr_17693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17684){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17684);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17694){var ex__17103__auto__ = e17694;
var statearr_17695_19768 = state_17684;
(statearr_17695_19768[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17684[(4)]))){
var statearr_17696_19769 = state_17684;
(statearr_17696_19769[(1)] = cljs.core.first((state_17684[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19770 = state_17684;
state_17684 = G__19770;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17684){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
;})(__19742,switch__17099__auto__,c__17266__auto___19749,G__17671_19746,G__17671_19747__$1,n__5636__auto___19741,jobs,results,process__$1,async))
})();
var state__17268__auto__ = (function (){var statearr_17697 = f__17267__auto__();
(statearr_17697[(6)] = c__17266__auto___19749);

return statearr_17697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
});})(__19742,c__17266__auto___19749,G__17671_19746,G__17671_19747__$1,n__5636__auto___19741,jobs,results,process__$1,async))
);


break;
case "async":
var c__17266__auto___19771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19742,c__17266__auto___19771,G__17671_19746,G__17671_19747__$1,n__5636__auto___19741,jobs,results,process__$1,async){
return (function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = ((function (__19742,c__17266__auto___19771,G__17671_19746,G__17671_19747__$1,n__5636__auto___19741,jobs,results,process__$1,async){
return (function (state_17711){
var state_val_17712 = (state_17711[(1)]);
if((state_val_17712 === (1))){
var state_17711__$1 = state_17711;
var statearr_17713_19772 = state_17711__$1;
(statearr_17713_19772[(2)] = null);

(statearr_17713_19772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17712 === (2))){
var state_17711__$1 = state_17711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17711__$1,(4),jobs);
} else {
if((state_val_17712 === (3))){
var inst_17709 = (state_17711[(2)]);
var state_17711__$1 = state_17711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17711__$1,inst_17709);
} else {
if((state_val_17712 === (4))){
var inst_17701 = (state_17711[(2)]);
var inst_17702 = async(inst_17701);
var state_17711__$1 = state_17711;
if(cljs.core.truth_(inst_17702)){
var statearr_17714_19773 = state_17711__$1;
(statearr_17714_19773[(1)] = (5));

} else {
var statearr_17715_19774 = state_17711__$1;
(statearr_17715_19774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17712 === (5))){
var state_17711__$1 = state_17711;
var statearr_17716_19775 = state_17711__$1;
(statearr_17716_19775[(2)] = null);

(statearr_17716_19775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17712 === (6))){
var state_17711__$1 = state_17711;
var statearr_17718_19776 = state_17711__$1;
(statearr_17718_19776[(2)] = null);

(statearr_17718_19776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17712 === (7))){
var inst_17707 = (state_17711[(2)]);
var state_17711__$1 = state_17711;
var statearr_17719_19778 = state_17711__$1;
(statearr_17719_19778[(2)] = inst_17707);

(statearr_17719_19778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19742,c__17266__auto___19771,G__17671_19746,G__17671_19747__$1,n__5636__auto___19741,jobs,results,process__$1,async))
;
return ((function (__19742,switch__17099__auto__,c__17266__auto___19771,G__17671_19746,G__17671_19747__$1,n__5636__auto___19741,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17720 = [null,null,null,null,null,null,null];
(statearr_17720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17720[(1)] = (1));

return statearr_17720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17711){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17711);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17721){var ex__17103__auto__ = e17721;
var statearr_17722_19783 = state_17711;
(statearr_17722_19783[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17711[(4)]))){
var statearr_17723_19784 = state_17711;
(statearr_17723_19784[(1)] = cljs.core.first((state_17711[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19785 = state_17711;
state_17711 = G__19785;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
;})(__19742,switch__17099__auto__,c__17266__auto___19771,G__17671_19746,G__17671_19747__$1,n__5636__auto___19741,jobs,results,process__$1,async))
})();
var state__17268__auto__ = (function (){var statearr_17724 = f__17267__auto__();
(statearr_17724[(6)] = c__17266__auto___19771);

return statearr_17724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
});})(__19742,c__17266__auto___19771,G__17671_19746,G__17671_19747__$1,n__5636__auto___19741,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17671_19747__$1)].join('')));

}

var G__19786 = (__19742 + (1));
__19742 = G__19786;
continue;
} else {
}
break;
}

var c__17266__auto___19787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_17747){
var state_val_17748 = (state_17747[(1)]);
if((state_val_17748 === (7))){
var inst_17743 = (state_17747[(2)]);
var state_17747__$1 = state_17747;
var statearr_17750_19788 = state_17747__$1;
(statearr_17750_19788[(2)] = inst_17743);

(statearr_17750_19788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (1))){
var state_17747__$1 = state_17747;
var statearr_17751_19789 = state_17747__$1;
(statearr_17751_19789[(2)] = null);

(statearr_17751_19789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (4))){
var inst_17728 = (state_17747[(7)]);
var inst_17728__$1 = (state_17747[(2)]);
var inst_17729 = (inst_17728__$1 == null);
var state_17747__$1 = (function (){var statearr_17752 = state_17747;
(statearr_17752[(7)] = inst_17728__$1);

return statearr_17752;
})();
if(cljs.core.truth_(inst_17729)){
var statearr_17753_19791 = state_17747__$1;
(statearr_17753_19791[(1)] = (5));

} else {
var statearr_17754_19792 = state_17747__$1;
(statearr_17754_19792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (6))){
var inst_17728 = (state_17747[(7)]);
var inst_17733 = (state_17747[(8)]);
var inst_17733__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17734 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17735 = [inst_17728,inst_17733__$1];
var inst_17736 = (new cljs.core.PersistentVector(null,2,(5),inst_17734,inst_17735,null));
var state_17747__$1 = (function (){var statearr_17756 = state_17747;
(statearr_17756[(8)] = inst_17733__$1);

return statearr_17756;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17747__$1,(8),jobs,inst_17736);
} else {
if((state_val_17748 === (3))){
var inst_17745 = (state_17747[(2)]);
var state_17747__$1 = state_17747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17747__$1,inst_17745);
} else {
if((state_val_17748 === (2))){
var state_17747__$1 = state_17747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17747__$1,(4),from);
} else {
if((state_val_17748 === (9))){
var inst_17740 = (state_17747[(2)]);
var state_17747__$1 = (function (){var statearr_17757 = state_17747;
(statearr_17757[(9)] = inst_17740);

return statearr_17757;
})();
var statearr_17758_19793 = state_17747__$1;
(statearr_17758_19793[(2)] = null);

(statearr_17758_19793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (5))){
var inst_17731 = cljs.core.async.close_BANG_(jobs);
var state_17747__$1 = state_17747;
var statearr_17759_19794 = state_17747__$1;
(statearr_17759_19794[(2)] = inst_17731);

(statearr_17759_19794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (8))){
var inst_17733 = (state_17747[(8)]);
var inst_17738 = (state_17747[(2)]);
var state_17747__$1 = (function (){var statearr_17760 = state_17747;
(statearr_17760[(10)] = inst_17738);

return statearr_17760;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17747__$1,(9),results,inst_17733);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17762 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17762[(1)] = (1));

return statearr_17762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17747){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17747);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17763){var ex__17103__auto__ = e17763;
var statearr_17764_19795 = state_17747;
(statearr_17764_19795[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17747[(4)]))){
var statearr_17765_19796 = state_17747;
(statearr_17765_19796[(1)] = cljs.core.first((state_17747[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19801 = state_17747;
state_17747 = G__19801;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_17766 = f__17267__auto__();
(statearr_17766[(6)] = c__17266__auto___19787);

return statearr_17766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));


var c__17266__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_17805){
var state_val_17806 = (state_17805[(1)]);
if((state_val_17806 === (7))){
var inst_17801 = (state_17805[(2)]);
var state_17805__$1 = state_17805;
var statearr_17808_19802 = state_17805__$1;
(statearr_17808_19802[(2)] = inst_17801);

(statearr_17808_19802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (20))){
var state_17805__$1 = state_17805;
var statearr_17809_19803 = state_17805__$1;
(statearr_17809_19803[(2)] = null);

(statearr_17809_19803[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (1))){
var state_17805__$1 = state_17805;
var statearr_17810_19804 = state_17805__$1;
(statearr_17810_19804[(2)] = null);

(statearr_17810_19804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (4))){
var inst_17769 = (state_17805[(7)]);
var inst_17769__$1 = (state_17805[(2)]);
var inst_17771 = (inst_17769__$1 == null);
var state_17805__$1 = (function (){var statearr_17811 = state_17805;
(statearr_17811[(7)] = inst_17769__$1);

return statearr_17811;
})();
if(cljs.core.truth_(inst_17771)){
var statearr_17812_19805 = state_17805__$1;
(statearr_17812_19805[(1)] = (5));

} else {
var statearr_17813_19806 = state_17805__$1;
(statearr_17813_19806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (15))){
var inst_17783 = (state_17805[(8)]);
var state_17805__$1 = state_17805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17805__$1,(18),to,inst_17783);
} else {
if((state_val_17806 === (21))){
var inst_17796 = (state_17805[(2)]);
var state_17805__$1 = state_17805;
var statearr_17814_19807 = state_17805__$1;
(statearr_17814_19807[(2)] = inst_17796);

(statearr_17814_19807[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (13))){
var inst_17798 = (state_17805[(2)]);
var state_17805__$1 = (function (){var statearr_17815 = state_17805;
(statearr_17815[(9)] = inst_17798);

return statearr_17815;
})();
var statearr_17816_19808 = state_17805__$1;
(statearr_17816_19808[(2)] = null);

(statearr_17816_19808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (6))){
var inst_17769 = (state_17805[(7)]);
var state_17805__$1 = state_17805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17805__$1,(11),inst_17769);
} else {
if((state_val_17806 === (17))){
var inst_17791 = (state_17805[(2)]);
var state_17805__$1 = state_17805;
if(cljs.core.truth_(inst_17791)){
var statearr_17818_19809 = state_17805__$1;
(statearr_17818_19809[(1)] = (19));

} else {
var statearr_17819_19810 = state_17805__$1;
(statearr_17819_19810[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (3))){
var inst_17803 = (state_17805[(2)]);
var state_17805__$1 = state_17805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17805__$1,inst_17803);
} else {
if((state_val_17806 === (12))){
var inst_17780 = (state_17805[(10)]);
var state_17805__$1 = state_17805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17805__$1,(14),inst_17780);
} else {
if((state_val_17806 === (2))){
var state_17805__$1 = state_17805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17805__$1,(4),results);
} else {
if((state_val_17806 === (19))){
var state_17805__$1 = state_17805;
var statearr_17820_19811 = state_17805__$1;
(statearr_17820_19811[(2)] = null);

(statearr_17820_19811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (11))){
var inst_17780 = (state_17805[(2)]);
var state_17805__$1 = (function (){var statearr_17821 = state_17805;
(statearr_17821[(10)] = inst_17780);

return statearr_17821;
})();
var statearr_17822_19812 = state_17805__$1;
(statearr_17822_19812[(2)] = null);

(statearr_17822_19812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (9))){
var state_17805__$1 = state_17805;
var statearr_17823_19813 = state_17805__$1;
(statearr_17823_19813[(2)] = null);

(statearr_17823_19813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (5))){
var state_17805__$1 = state_17805;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17824_19814 = state_17805__$1;
(statearr_17824_19814[(1)] = (8));

} else {
var statearr_17825_19815 = state_17805__$1;
(statearr_17825_19815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (14))){
var inst_17785 = (state_17805[(11)]);
var inst_17783 = (state_17805[(8)]);
var inst_17783__$1 = (state_17805[(2)]);
var inst_17784 = (inst_17783__$1 == null);
var inst_17785__$1 = cljs.core.not(inst_17784);
var state_17805__$1 = (function (){var statearr_17826 = state_17805;
(statearr_17826[(11)] = inst_17785__$1);

(statearr_17826[(8)] = inst_17783__$1);

return statearr_17826;
})();
if(inst_17785__$1){
var statearr_17827_19816 = state_17805__$1;
(statearr_17827_19816[(1)] = (15));

} else {
var statearr_17829_19817 = state_17805__$1;
(statearr_17829_19817[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (16))){
var inst_17785 = (state_17805[(11)]);
var state_17805__$1 = state_17805;
var statearr_17830_19818 = state_17805__$1;
(statearr_17830_19818[(2)] = inst_17785);

(statearr_17830_19818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (10))){
var inst_17777 = (state_17805[(2)]);
var state_17805__$1 = state_17805;
var statearr_17831_19820 = state_17805__$1;
(statearr_17831_19820[(2)] = inst_17777);

(statearr_17831_19820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (18))){
var inst_17788 = (state_17805[(2)]);
var state_17805__$1 = state_17805;
var statearr_17832_19821 = state_17805__$1;
(statearr_17832_19821[(2)] = inst_17788);

(statearr_17832_19821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17806 === (8))){
var inst_17774 = cljs.core.async.close_BANG_(to);
var state_17805__$1 = state_17805;
var statearr_17833_19823 = state_17805__$1;
(statearr_17833_19823[(2)] = inst_17774);

(statearr_17833_19823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17834 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17834[(1)] = (1));

return statearr_17834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17805){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17805);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17835){var ex__17103__auto__ = e17835;
var statearr_17836_19825 = state_17805;
(statearr_17836_19825[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17805[(4)]))){
var statearr_17838_19826 = state_17805;
(statearr_17838_19826[(1)] = cljs.core.first((state_17805[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19827 = state_17805;
state_17805 = G__19827;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_17839 = f__17267__auto__();
(statearr_17839[(6)] = c__17266__auto__);

return statearr_17839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));

return c__17266__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17842 = arguments.length;
switch (G__17842) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17845 = arguments.length;
switch (G__17845) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17848 = arguments.length;
switch (G__17848) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17266__auto___19841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_17875){
var state_val_17876 = (state_17875[(1)]);
if((state_val_17876 === (7))){
var inst_17871 = (state_17875[(2)]);
var state_17875__$1 = state_17875;
var statearr_17878_19842 = state_17875__$1;
(statearr_17878_19842[(2)] = inst_17871);

(statearr_17878_19842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (1))){
var state_17875__$1 = state_17875;
var statearr_17879_19843 = state_17875__$1;
(statearr_17879_19843[(2)] = null);

(statearr_17879_19843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (4))){
var inst_17852 = (state_17875[(7)]);
var inst_17852__$1 = (state_17875[(2)]);
var inst_17853 = (inst_17852__$1 == null);
var state_17875__$1 = (function (){var statearr_17880 = state_17875;
(statearr_17880[(7)] = inst_17852__$1);

return statearr_17880;
})();
if(cljs.core.truth_(inst_17853)){
var statearr_17881_19847 = state_17875__$1;
(statearr_17881_19847[(1)] = (5));

} else {
var statearr_17882_19848 = state_17875__$1;
(statearr_17882_19848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (13))){
var state_17875__$1 = state_17875;
var statearr_17883_19852 = state_17875__$1;
(statearr_17883_19852[(2)] = null);

(statearr_17883_19852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (6))){
var inst_17852 = (state_17875[(7)]);
var inst_17858 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17852) : p.call(null,inst_17852));
var state_17875__$1 = state_17875;
if(cljs.core.truth_(inst_17858)){
var statearr_17884_19856 = state_17875__$1;
(statearr_17884_19856[(1)] = (9));

} else {
var statearr_17885_19857 = state_17875__$1;
(statearr_17885_19857[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (3))){
var inst_17873 = (state_17875[(2)]);
var state_17875__$1 = state_17875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17875__$1,inst_17873);
} else {
if((state_val_17876 === (12))){
var state_17875__$1 = state_17875;
var statearr_17887_19858 = state_17875__$1;
(statearr_17887_19858[(2)] = null);

(statearr_17887_19858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (2))){
var state_17875__$1 = state_17875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17875__$1,(4),ch);
} else {
if((state_val_17876 === (11))){
var inst_17852 = (state_17875[(7)]);
var inst_17862 = (state_17875[(2)]);
var state_17875__$1 = state_17875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17875__$1,(8),inst_17862,inst_17852);
} else {
if((state_val_17876 === (9))){
var state_17875__$1 = state_17875;
var statearr_17888_19859 = state_17875__$1;
(statearr_17888_19859[(2)] = tc);

(statearr_17888_19859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (5))){
var inst_17855 = cljs.core.async.close_BANG_(tc);
var inst_17856 = cljs.core.async.close_BANG_(fc);
var state_17875__$1 = (function (){var statearr_17889 = state_17875;
(statearr_17889[(8)] = inst_17855);

return statearr_17889;
})();
var statearr_17890_19863 = state_17875__$1;
(statearr_17890_19863[(2)] = inst_17856);

(statearr_17890_19863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (14))){
var inst_17869 = (state_17875[(2)]);
var state_17875__$1 = state_17875;
var statearr_17891_19864 = state_17875__$1;
(statearr_17891_19864[(2)] = inst_17869);

(statearr_17891_19864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (10))){
var state_17875__$1 = state_17875;
var statearr_17892_19865 = state_17875__$1;
(statearr_17892_19865[(2)] = fc);

(statearr_17892_19865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (8))){
var inst_17864 = (state_17875[(2)]);
var state_17875__$1 = state_17875;
if(cljs.core.truth_(inst_17864)){
var statearr_17894_19866 = state_17875__$1;
(statearr_17894_19866[(1)] = (12));

} else {
var statearr_17895_19867 = state_17875__$1;
(statearr_17895_19867[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_17896 = [null,null,null,null,null,null,null,null,null];
(statearr_17896[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_17896[(1)] = (1));

return statearr_17896;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_17875){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17875);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17897){var ex__17103__auto__ = e17897;
var statearr_17898_19872 = state_17875;
(statearr_17898_19872[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17875[(4)]))){
var statearr_17899_19873 = state_17875;
(statearr_17899_19873[(1)] = cljs.core.first((state_17875[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19877 = state_17875;
state_17875 = G__19877;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_17875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_17875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_17900 = f__17267__auto__();
(statearr_17900[(6)] = c__17266__auto___19841);

return statearr_17900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17266__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_17924){
var state_val_17925 = (state_17924[(1)]);
if((state_val_17925 === (7))){
var inst_17920 = (state_17924[(2)]);
var state_17924__$1 = state_17924;
var statearr_17926_19878 = state_17924__$1;
(statearr_17926_19878[(2)] = inst_17920);

(statearr_17926_19878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (1))){
var inst_17902 = init;
var inst_17904 = inst_17902;
var state_17924__$1 = (function (){var statearr_17928 = state_17924;
(statearr_17928[(7)] = inst_17904);

return statearr_17928;
})();
var statearr_17929_19879 = state_17924__$1;
(statearr_17929_19879[(2)] = null);

(statearr_17929_19879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (4))){
var inst_17907 = (state_17924[(8)]);
var inst_17907__$1 = (state_17924[(2)]);
var inst_17908 = (inst_17907__$1 == null);
var state_17924__$1 = (function (){var statearr_17930 = state_17924;
(statearr_17930[(8)] = inst_17907__$1);

return statearr_17930;
})();
if(cljs.core.truth_(inst_17908)){
var statearr_17931_19883 = state_17924__$1;
(statearr_17931_19883[(1)] = (5));

} else {
var statearr_17932_19884 = state_17924__$1;
(statearr_17932_19884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (6))){
var inst_17911 = (state_17924[(9)]);
var inst_17907 = (state_17924[(8)]);
var inst_17904 = (state_17924[(7)]);
var inst_17911__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17904,inst_17907) : f.call(null,inst_17904,inst_17907));
var inst_17912 = cljs.core.reduced_QMARK_(inst_17911__$1);
var state_17924__$1 = (function (){var statearr_17933 = state_17924;
(statearr_17933[(9)] = inst_17911__$1);

return statearr_17933;
})();
if(inst_17912){
var statearr_17934_19885 = state_17924__$1;
(statearr_17934_19885[(1)] = (8));

} else {
var statearr_17935_19886 = state_17924__$1;
(statearr_17935_19886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (3))){
var inst_17922 = (state_17924[(2)]);
var state_17924__$1 = state_17924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17924__$1,inst_17922);
} else {
if((state_val_17925 === (2))){
var state_17924__$1 = state_17924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17924__$1,(4),ch);
} else {
if((state_val_17925 === (9))){
var inst_17911 = (state_17924[(9)]);
var inst_17904 = inst_17911;
var state_17924__$1 = (function (){var statearr_17937 = state_17924;
(statearr_17937[(7)] = inst_17904);

return statearr_17937;
})();
var statearr_17938_19890 = state_17924__$1;
(statearr_17938_19890[(2)] = null);

(statearr_17938_19890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (5))){
var inst_17904 = (state_17924[(7)]);
var state_17924__$1 = state_17924;
var statearr_17939_19892 = state_17924__$1;
(statearr_17939_19892[(2)] = inst_17904);

(statearr_17939_19892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (10))){
var inst_17918 = (state_17924[(2)]);
var state_17924__$1 = state_17924;
var statearr_17940_19893 = state_17924__$1;
(statearr_17940_19893[(2)] = inst_17918);

(statearr_17940_19893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (8))){
var inst_17911 = (state_17924[(9)]);
var inst_17914 = cljs.core.deref(inst_17911);
var state_17924__$1 = state_17924;
var statearr_17941_19894 = state_17924__$1;
(statearr_17941_19894[(2)] = inst_17914);

(statearr_17941_19894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17100__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17100__auto____0 = (function (){
var statearr_17943 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17943[(0)] = cljs$core$async$reduce_$_state_machine__17100__auto__);

(statearr_17943[(1)] = (1));

return statearr_17943;
});
var cljs$core$async$reduce_$_state_machine__17100__auto____1 = (function (state_17924){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17924);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17944){var ex__17103__auto__ = e17944;
var statearr_17945_19898 = state_17924;
(statearr_17945_19898[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17924[(4)]))){
var statearr_17946_19899 = state_17924;
(statearr_17946_19899[(1)] = cljs.core.first((state_17924[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19900 = state_17924;
state_17924 = G__19900;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17100__auto__ = function(state_17924){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17100__auto____1.call(this,state_17924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17100__auto____0;
cljs$core$async$reduce_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17100__auto____1;
return cljs$core$async$reduce_$_state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_17947 = f__17267__auto__();
(statearr_17947[(6)] = c__17266__auto__);

return statearr_17947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));

return c__17266__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17266__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_17954){
var state_val_17955 = (state_17954[(1)]);
if((state_val_17955 === (1))){
var inst_17949 = cljs.core.async.reduce(f__$1,init,ch);
var state_17954__$1 = state_17954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17954__$1,(2),inst_17949);
} else {
if((state_val_17955 === (2))){
var inst_17951 = (state_17954[(2)]);
var inst_17952 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17951) : f__$1.call(null,inst_17951));
var state_17954__$1 = state_17954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17954__$1,inst_17952);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17100__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17100__auto____0 = (function (){
var statearr_17956 = [null,null,null,null,null,null,null];
(statearr_17956[(0)] = cljs$core$async$transduce_$_state_machine__17100__auto__);

(statearr_17956[(1)] = (1));

return statearr_17956;
});
var cljs$core$async$transduce_$_state_machine__17100__auto____1 = (function (state_17954){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17954);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17957){var ex__17103__auto__ = e17957;
var statearr_17958_19906 = state_17954;
(statearr_17958_19906[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17954[(4)]))){
var statearr_17959_19907 = state_17954;
(statearr_17959_19907[(1)] = cljs.core.first((state_17954[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19908 = state_17954;
state_17954 = G__19908;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17100__auto__ = function(state_17954){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17100__auto____1.call(this,state_17954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17100__auto____0;
cljs$core$async$transduce_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17100__auto____1;
return cljs$core$async$transduce_$_state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_17961 = f__17267__auto__();
(statearr_17961[(6)] = c__17266__auto__);

return statearr_17961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));

return c__17266__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17963 = arguments.length;
switch (G__17963) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17266__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_17989){
var state_val_17990 = (state_17989[(1)]);
if((state_val_17990 === (7))){
var inst_17971 = (state_17989[(2)]);
var state_17989__$1 = state_17989;
var statearr_17991_19914 = state_17989__$1;
(statearr_17991_19914[(2)] = inst_17971);

(statearr_17991_19914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17990 === (1))){
var inst_17965 = cljs.core.seq(coll);
var inst_17966 = inst_17965;
var state_17989__$1 = (function (){var statearr_17992 = state_17989;
(statearr_17992[(7)] = inst_17966);

return statearr_17992;
})();
var statearr_17993_19915 = state_17989__$1;
(statearr_17993_19915[(2)] = null);

(statearr_17993_19915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17990 === (4))){
var inst_17966 = (state_17989[(7)]);
var inst_17969 = cljs.core.first(inst_17966);
var state_17989__$1 = state_17989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17989__$1,(7),ch,inst_17969);
} else {
if((state_val_17990 === (13))){
var inst_17983 = (state_17989[(2)]);
var state_17989__$1 = state_17989;
var statearr_17995_19916 = state_17989__$1;
(statearr_17995_19916[(2)] = inst_17983);

(statearr_17995_19916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17990 === (6))){
var inst_17974 = (state_17989[(2)]);
var state_17989__$1 = state_17989;
if(cljs.core.truth_(inst_17974)){
var statearr_17996_19917 = state_17989__$1;
(statearr_17996_19917[(1)] = (8));

} else {
var statearr_17997_19918 = state_17989__$1;
(statearr_17997_19918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17990 === (3))){
var inst_17987 = (state_17989[(2)]);
var state_17989__$1 = state_17989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17989__$1,inst_17987);
} else {
if((state_val_17990 === (12))){
var state_17989__$1 = state_17989;
var statearr_17998_19919 = state_17989__$1;
(statearr_17998_19919[(2)] = null);

(statearr_17998_19919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17990 === (2))){
var inst_17966 = (state_17989[(7)]);
var state_17989__$1 = state_17989;
if(cljs.core.truth_(inst_17966)){
var statearr_17999_19920 = state_17989__$1;
(statearr_17999_19920[(1)] = (4));

} else {
var statearr_18000_19921 = state_17989__$1;
(statearr_18000_19921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17990 === (11))){
var inst_17980 = cljs.core.async.close_BANG_(ch);
var state_17989__$1 = state_17989;
var statearr_18001_19922 = state_17989__$1;
(statearr_18001_19922[(2)] = inst_17980);

(statearr_18001_19922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17990 === (9))){
var state_17989__$1 = state_17989;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18002_19923 = state_17989__$1;
(statearr_18002_19923[(1)] = (11));

} else {
var statearr_18003_19924 = state_17989__$1;
(statearr_18003_19924[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17990 === (5))){
var inst_17966 = (state_17989[(7)]);
var state_17989__$1 = state_17989;
var statearr_18005_19925 = state_17989__$1;
(statearr_18005_19925[(2)] = inst_17966);

(statearr_18005_19925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17990 === (10))){
var inst_17985 = (state_17989[(2)]);
var state_17989__$1 = state_17989;
var statearr_18006_19926 = state_17989__$1;
(statearr_18006_19926[(2)] = inst_17985);

(statearr_18006_19926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17990 === (8))){
var inst_17966 = (state_17989[(7)]);
var inst_17976 = cljs.core.next(inst_17966);
var inst_17966__$1 = inst_17976;
var state_17989__$1 = (function (){var statearr_18007 = state_17989;
(statearr_18007[(7)] = inst_17966__$1);

return statearr_18007;
})();
var statearr_18008_19927 = state_17989__$1;
(statearr_18008_19927[(2)] = null);

(statearr_18008_19927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_18009 = [null,null,null,null,null,null,null,null];
(statearr_18009[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_18009[(1)] = (1));

return statearr_18009;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_17989){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17989);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18010){var ex__17103__auto__ = e18010;
var statearr_18011_19928 = state_17989;
(statearr_18011_19928[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17989[(4)]))){
var statearr_18012_19929 = state_17989;
(statearr_18012_19929[(1)] = cljs.core.first((state_17989[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19931 = state_17989;
state_17989 = G__19931;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_17989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_17989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_18014 = f__17267__auto__();
(statearr_18014[(6)] = c__17266__auto__);

return statearr_18014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));

return c__17266__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18017 = arguments.length;
switch (G__18017) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19934 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19934(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19935 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19935(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19938 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19938(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19942 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19942(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18023 = (function (ch,cs,meta18024){
this.ch = ch;
this.cs = cs;
this.meta18024 = meta18024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18025,meta18024__$1){
var self__ = this;
var _18025__$1 = this;
return (new cljs.core.async.t_cljs$core$async18023(self__.ch,self__.cs,meta18024__$1));
}));

(cljs.core.async.t_cljs$core$async18023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18025){
var self__ = this;
var _18025__$1 = this;
return self__.meta18024;
}));

(cljs.core.async.t_cljs$core$async18023.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18023.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18023.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18023.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18023.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18023.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18024","meta18024",1099250172,null)], null);
}));

(cljs.core.async.t_cljs$core$async18023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18023");

(cljs.core.async.t_cljs$core$async18023.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18023.
 */
cljs.core.async.__GT_t_cljs$core$async18023 = (function cljs$core$async$__GT_t_cljs$core$async18023(ch,cs,meta18024){
return (new cljs.core.async.t_cljs$core$async18023(ch,cs,meta18024));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async18023(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17266__auto___19946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_18174){
var state_val_18176 = (state_18174[(1)]);
if((state_val_18176 === (7))){
var inst_18168 = (state_18174[(2)]);
var state_18174__$1 = state_18174;
var statearr_18182_19947 = state_18174__$1;
(statearr_18182_19947[(2)] = inst_18168);

(statearr_18182_19947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (20))){
var inst_18060 = (state_18174[(7)]);
var inst_18074 = cljs.core.first(inst_18060);
var inst_18075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18074,(0),null);
var inst_18077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18074,(1),null);
var state_18174__$1 = (function (){var statearr_18184 = state_18174;
(statearr_18184[(8)] = inst_18075);

return statearr_18184;
})();
if(cljs.core.truth_(inst_18077)){
var statearr_18186_19948 = state_18174__$1;
(statearr_18186_19948[(1)] = (22));

} else {
var statearr_18188_19949 = state_18174__$1;
(statearr_18188_19949[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (27))){
var inst_18105 = (state_18174[(9)]);
var inst_18107 = (state_18174[(10)]);
var inst_18029 = (state_18174[(11)]);
var inst_18115 = (state_18174[(12)]);
var inst_18115__$1 = cljs.core._nth(inst_18105,inst_18107);
var inst_18116 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18115__$1,inst_18029,done);
var state_18174__$1 = (function (){var statearr_18191 = state_18174;
(statearr_18191[(12)] = inst_18115__$1);

return statearr_18191;
})();
if(cljs.core.truth_(inst_18116)){
var statearr_18192_19950 = state_18174__$1;
(statearr_18192_19950[(1)] = (30));

} else {
var statearr_18193_19951 = state_18174__$1;
(statearr_18193_19951[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (1))){
var state_18174__$1 = state_18174;
var statearr_18196_19952 = state_18174__$1;
(statearr_18196_19952[(2)] = null);

(statearr_18196_19952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (24))){
var inst_18060 = (state_18174[(7)]);
var inst_18082 = (state_18174[(2)]);
var inst_18083 = cljs.core.next(inst_18060);
var inst_18038 = inst_18083;
var inst_18039 = null;
var inst_18040 = (0);
var inst_18041 = (0);
var state_18174__$1 = (function (){var statearr_18199 = state_18174;
(statearr_18199[(13)] = inst_18040);

(statearr_18199[(14)] = inst_18039);

(statearr_18199[(15)] = inst_18082);

(statearr_18199[(16)] = inst_18038);

(statearr_18199[(17)] = inst_18041);

return statearr_18199;
})();
var statearr_18202_19954 = state_18174__$1;
(statearr_18202_19954[(2)] = null);

(statearr_18202_19954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (39))){
var state_18174__$1 = state_18174;
var statearr_18210_19958 = state_18174__$1;
(statearr_18210_19958[(2)] = null);

(statearr_18210_19958[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (4))){
var inst_18029 = (state_18174[(11)]);
var inst_18029__$1 = (state_18174[(2)]);
var inst_18030 = (inst_18029__$1 == null);
var state_18174__$1 = (function (){var statearr_18212 = state_18174;
(statearr_18212[(11)] = inst_18029__$1);

return statearr_18212;
})();
if(cljs.core.truth_(inst_18030)){
var statearr_18214_19959 = state_18174__$1;
(statearr_18214_19959[(1)] = (5));

} else {
var statearr_18215_19960 = state_18174__$1;
(statearr_18215_19960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (15))){
var inst_18040 = (state_18174[(13)]);
var inst_18039 = (state_18174[(14)]);
var inst_18038 = (state_18174[(16)]);
var inst_18041 = (state_18174[(17)]);
var inst_18056 = (state_18174[(2)]);
var inst_18057 = (inst_18041 + (1));
var tmp18205 = inst_18040;
var tmp18206 = inst_18039;
var tmp18207 = inst_18038;
var inst_18038__$1 = tmp18207;
var inst_18039__$1 = tmp18206;
var inst_18040__$1 = tmp18205;
var inst_18041__$1 = inst_18057;
var state_18174__$1 = (function (){var statearr_18219 = state_18174;
(statearr_18219[(13)] = inst_18040__$1);

(statearr_18219[(14)] = inst_18039__$1);

(statearr_18219[(18)] = inst_18056);

(statearr_18219[(16)] = inst_18038__$1);

(statearr_18219[(17)] = inst_18041__$1);

return statearr_18219;
})();
var statearr_18221_19963 = state_18174__$1;
(statearr_18221_19963[(2)] = null);

(statearr_18221_19963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (21))){
var inst_18086 = (state_18174[(2)]);
var state_18174__$1 = state_18174;
var statearr_18228_19966 = state_18174__$1;
(statearr_18228_19966[(2)] = inst_18086);

(statearr_18228_19966[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (31))){
var inst_18115 = (state_18174[(12)]);
var inst_18119 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18115);
var state_18174__$1 = state_18174;
var statearr_18229_19967 = state_18174__$1;
(statearr_18229_19967[(2)] = inst_18119);

(statearr_18229_19967[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (32))){
var inst_18106 = (state_18174[(19)]);
var inst_18104 = (state_18174[(20)]);
var inst_18105 = (state_18174[(9)]);
var inst_18107 = (state_18174[(10)]);
var inst_18121 = (state_18174[(2)]);
var inst_18124 = (inst_18107 + (1));
var tmp18222 = inst_18106;
var tmp18223 = inst_18104;
var tmp18224 = inst_18105;
var inst_18104__$1 = tmp18223;
var inst_18105__$1 = tmp18224;
var inst_18106__$1 = tmp18222;
var inst_18107__$1 = inst_18124;
var state_18174__$1 = (function (){var statearr_18234 = state_18174;
(statearr_18234[(19)] = inst_18106__$1);

(statearr_18234[(20)] = inst_18104__$1);

(statearr_18234[(9)] = inst_18105__$1);

(statearr_18234[(10)] = inst_18107__$1);

(statearr_18234[(21)] = inst_18121);

return statearr_18234;
})();
var statearr_18236_19971 = state_18174__$1;
(statearr_18236_19971[(2)] = null);

(statearr_18236_19971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (40))){
var inst_18137 = (state_18174[(22)]);
var inst_18141 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18137);
var state_18174__$1 = state_18174;
var statearr_18238_19976 = state_18174__$1;
(statearr_18238_19976[(2)] = inst_18141);

(statearr_18238_19976[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (33))){
var inst_18128 = (state_18174[(23)]);
var inst_18130 = cljs.core.chunked_seq_QMARK_(inst_18128);
var state_18174__$1 = state_18174;
if(inst_18130){
var statearr_18241_19977 = state_18174__$1;
(statearr_18241_19977[(1)] = (36));

} else {
var statearr_18243_19978 = state_18174__$1;
(statearr_18243_19978[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (13))){
var inst_18050 = (state_18174[(24)]);
var inst_18053 = cljs.core.async.close_BANG_(inst_18050);
var state_18174__$1 = state_18174;
var statearr_18246_19985 = state_18174__$1;
(statearr_18246_19985[(2)] = inst_18053);

(statearr_18246_19985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (22))){
var inst_18075 = (state_18174[(8)]);
var inst_18079 = cljs.core.async.close_BANG_(inst_18075);
var state_18174__$1 = state_18174;
var statearr_18248_19986 = state_18174__$1;
(statearr_18248_19986[(2)] = inst_18079);

(statearr_18248_19986[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (36))){
var inst_18128 = (state_18174[(23)]);
var inst_18132 = cljs.core.chunk_first(inst_18128);
var inst_18133 = cljs.core.chunk_rest(inst_18128);
var inst_18134 = cljs.core.count(inst_18132);
var inst_18104 = inst_18133;
var inst_18105 = inst_18132;
var inst_18106 = inst_18134;
var inst_18107 = (0);
var state_18174__$1 = (function (){var statearr_18252 = state_18174;
(statearr_18252[(19)] = inst_18106);

(statearr_18252[(20)] = inst_18104);

(statearr_18252[(9)] = inst_18105);

(statearr_18252[(10)] = inst_18107);

return statearr_18252;
})();
var statearr_18254_19987 = state_18174__$1;
(statearr_18254_19987[(2)] = null);

(statearr_18254_19987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (41))){
var inst_18128 = (state_18174[(23)]);
var inst_18143 = (state_18174[(2)]);
var inst_18144 = cljs.core.next(inst_18128);
var inst_18104 = inst_18144;
var inst_18105 = null;
var inst_18106 = (0);
var inst_18107 = (0);
var state_18174__$1 = (function (){var statearr_18257 = state_18174;
(statearr_18257[(19)] = inst_18106);

(statearr_18257[(20)] = inst_18104);

(statearr_18257[(9)] = inst_18105);

(statearr_18257[(10)] = inst_18107);

(statearr_18257[(25)] = inst_18143);

return statearr_18257;
})();
var statearr_18260_19988 = state_18174__$1;
(statearr_18260_19988[(2)] = null);

(statearr_18260_19988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (43))){
var state_18174__$1 = state_18174;
var statearr_18262_19989 = state_18174__$1;
(statearr_18262_19989[(2)] = null);

(statearr_18262_19989[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (29))){
var inst_18152 = (state_18174[(2)]);
var state_18174__$1 = state_18174;
var statearr_18264_19991 = state_18174__$1;
(statearr_18264_19991[(2)] = inst_18152);

(statearr_18264_19991[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (44))){
var inst_18164 = (state_18174[(2)]);
var state_18174__$1 = (function (){var statearr_18268 = state_18174;
(statearr_18268[(26)] = inst_18164);

return statearr_18268;
})();
var statearr_18269_19995 = state_18174__$1;
(statearr_18269_19995[(2)] = null);

(statearr_18269_19995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (6))){
var inst_18096 = (state_18174[(27)]);
var inst_18095 = cljs.core.deref(cs);
var inst_18096__$1 = cljs.core.keys(inst_18095);
var inst_18097 = cljs.core.count(inst_18096__$1);
var inst_18098 = cljs.core.reset_BANG_(dctr,inst_18097);
var inst_18103 = cljs.core.seq(inst_18096__$1);
var inst_18104 = inst_18103;
var inst_18105 = null;
var inst_18106 = (0);
var inst_18107 = (0);
var state_18174__$1 = (function (){var statearr_18272 = state_18174;
(statearr_18272[(19)] = inst_18106);

(statearr_18272[(20)] = inst_18104);

(statearr_18272[(9)] = inst_18105);

(statearr_18272[(28)] = inst_18098);

(statearr_18272[(10)] = inst_18107);

(statearr_18272[(27)] = inst_18096__$1);

return statearr_18272;
})();
var statearr_18276_19996 = state_18174__$1;
(statearr_18276_19996[(2)] = null);

(statearr_18276_19996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (28))){
var inst_18128 = (state_18174[(23)]);
var inst_18104 = (state_18174[(20)]);
var inst_18128__$1 = cljs.core.seq(inst_18104);
var state_18174__$1 = (function (){var statearr_18278 = state_18174;
(statearr_18278[(23)] = inst_18128__$1);

return statearr_18278;
})();
if(inst_18128__$1){
var statearr_18279_19997 = state_18174__$1;
(statearr_18279_19997[(1)] = (33));

} else {
var statearr_18282_19998 = state_18174__$1;
(statearr_18282_19998[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (25))){
var inst_18106 = (state_18174[(19)]);
var inst_18107 = (state_18174[(10)]);
var inst_18111 = (inst_18107 < inst_18106);
var inst_18113 = inst_18111;
var state_18174__$1 = state_18174;
if(cljs.core.truth_(inst_18113)){
var statearr_18285_20002 = state_18174__$1;
(statearr_18285_20002[(1)] = (27));

} else {
var statearr_18286_20003 = state_18174__$1;
(statearr_18286_20003[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (34))){
var state_18174__$1 = state_18174;
var statearr_18291_20004 = state_18174__$1;
(statearr_18291_20004[(2)] = null);

(statearr_18291_20004[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (17))){
var state_18174__$1 = state_18174;
var statearr_18293_20005 = state_18174__$1;
(statearr_18293_20005[(2)] = null);

(statearr_18293_20005[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (3))){
var inst_18170 = (state_18174[(2)]);
var state_18174__$1 = state_18174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18174__$1,inst_18170);
} else {
if((state_val_18176 === (12))){
var inst_18091 = (state_18174[(2)]);
var state_18174__$1 = state_18174;
var statearr_18297_20006 = state_18174__$1;
(statearr_18297_20006[(2)] = inst_18091);

(statearr_18297_20006[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (2))){
var state_18174__$1 = state_18174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18174__$1,(4),ch);
} else {
if((state_val_18176 === (23))){
var state_18174__$1 = state_18174;
var statearr_18298_20007 = state_18174__$1;
(statearr_18298_20007[(2)] = null);

(statearr_18298_20007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (35))){
var inst_18150 = (state_18174[(2)]);
var state_18174__$1 = state_18174;
var statearr_18300_20008 = state_18174__$1;
(statearr_18300_20008[(2)] = inst_18150);

(statearr_18300_20008[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (19))){
var inst_18060 = (state_18174[(7)]);
var inst_18064 = cljs.core.chunk_first(inst_18060);
var inst_18065 = cljs.core.chunk_rest(inst_18060);
var inst_18066 = cljs.core.count(inst_18064);
var inst_18038 = inst_18065;
var inst_18039 = inst_18064;
var inst_18040 = inst_18066;
var inst_18041 = (0);
var state_18174__$1 = (function (){var statearr_18304 = state_18174;
(statearr_18304[(13)] = inst_18040);

(statearr_18304[(14)] = inst_18039);

(statearr_18304[(16)] = inst_18038);

(statearr_18304[(17)] = inst_18041);

return statearr_18304;
})();
var statearr_18306_20009 = state_18174__$1;
(statearr_18306_20009[(2)] = null);

(statearr_18306_20009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (11))){
var inst_18038 = (state_18174[(16)]);
var inst_18060 = (state_18174[(7)]);
var inst_18060__$1 = cljs.core.seq(inst_18038);
var state_18174__$1 = (function (){var statearr_18310 = state_18174;
(statearr_18310[(7)] = inst_18060__$1);

return statearr_18310;
})();
if(inst_18060__$1){
var statearr_18312_20016 = state_18174__$1;
(statearr_18312_20016[(1)] = (16));

} else {
var statearr_18313_20017 = state_18174__$1;
(statearr_18313_20017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (9))){
var inst_18093 = (state_18174[(2)]);
var state_18174__$1 = state_18174;
var statearr_18315_20018 = state_18174__$1;
(statearr_18315_20018[(2)] = inst_18093);

(statearr_18315_20018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (5))){
var inst_18036 = cljs.core.deref(cs);
var inst_18037 = cljs.core.seq(inst_18036);
var inst_18038 = inst_18037;
var inst_18039 = null;
var inst_18040 = (0);
var inst_18041 = (0);
var state_18174__$1 = (function (){var statearr_18319 = state_18174;
(statearr_18319[(13)] = inst_18040);

(statearr_18319[(14)] = inst_18039);

(statearr_18319[(16)] = inst_18038);

(statearr_18319[(17)] = inst_18041);

return statearr_18319;
})();
var statearr_18320_20019 = state_18174__$1;
(statearr_18320_20019[(2)] = null);

(statearr_18320_20019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (14))){
var state_18174__$1 = state_18174;
var statearr_18325_20020 = state_18174__$1;
(statearr_18325_20020[(2)] = null);

(statearr_18325_20020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (45))){
var inst_18161 = (state_18174[(2)]);
var state_18174__$1 = state_18174;
var statearr_18329_20021 = state_18174__$1;
(statearr_18329_20021[(2)] = inst_18161);

(statearr_18329_20021[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (26))){
var inst_18096 = (state_18174[(27)]);
var inst_18154 = (state_18174[(2)]);
var inst_18155 = cljs.core.seq(inst_18096);
var state_18174__$1 = (function (){var statearr_18331 = state_18174;
(statearr_18331[(29)] = inst_18154);

return statearr_18331;
})();
if(inst_18155){
var statearr_18332_20022 = state_18174__$1;
(statearr_18332_20022[(1)] = (42));

} else {
var statearr_18335_20023 = state_18174__$1;
(statearr_18335_20023[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (16))){
var inst_18060 = (state_18174[(7)]);
var inst_18062 = cljs.core.chunked_seq_QMARK_(inst_18060);
var state_18174__$1 = state_18174;
if(inst_18062){
var statearr_18337_20024 = state_18174__$1;
(statearr_18337_20024[(1)] = (19));

} else {
var statearr_18339_20025 = state_18174__$1;
(statearr_18339_20025[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (38))){
var inst_18147 = (state_18174[(2)]);
var state_18174__$1 = state_18174;
var statearr_18341_20026 = state_18174__$1;
(statearr_18341_20026[(2)] = inst_18147);

(statearr_18341_20026[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (30))){
var state_18174__$1 = state_18174;
var statearr_18344_20027 = state_18174__$1;
(statearr_18344_20027[(2)] = null);

(statearr_18344_20027[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (10))){
var inst_18039 = (state_18174[(14)]);
var inst_18041 = (state_18174[(17)]);
var inst_18049 = cljs.core._nth(inst_18039,inst_18041);
var inst_18050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18049,(0),null);
var inst_18051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18049,(1),null);
var state_18174__$1 = (function (){var statearr_18347 = state_18174;
(statearr_18347[(24)] = inst_18050);

return statearr_18347;
})();
if(cljs.core.truth_(inst_18051)){
var statearr_18351_20028 = state_18174__$1;
(statearr_18351_20028[(1)] = (13));

} else {
var statearr_18353_20029 = state_18174__$1;
(statearr_18353_20029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (18))){
var inst_18089 = (state_18174[(2)]);
var state_18174__$1 = state_18174;
var statearr_18354_20031 = state_18174__$1;
(statearr_18354_20031[(2)] = inst_18089);

(statearr_18354_20031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (42))){
var state_18174__$1 = state_18174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18174__$1,(45),dchan);
} else {
if((state_val_18176 === (37))){
var inst_18128 = (state_18174[(23)]);
var inst_18137 = (state_18174[(22)]);
var inst_18029 = (state_18174[(11)]);
var inst_18137__$1 = cljs.core.first(inst_18128);
var inst_18138 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18137__$1,inst_18029,done);
var state_18174__$1 = (function (){var statearr_18359 = state_18174;
(statearr_18359[(22)] = inst_18137__$1);

return statearr_18359;
})();
if(cljs.core.truth_(inst_18138)){
var statearr_18360_20032 = state_18174__$1;
(statearr_18360_20032[(1)] = (39));

} else {
var statearr_18361_20033 = state_18174__$1;
(statearr_18361_20033[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (8))){
var inst_18040 = (state_18174[(13)]);
var inst_18041 = (state_18174[(17)]);
var inst_18043 = (inst_18041 < inst_18040);
var inst_18044 = inst_18043;
var state_18174__$1 = state_18174;
if(cljs.core.truth_(inst_18044)){
var statearr_18363_20034 = state_18174__$1;
(statearr_18363_20034[(1)] = (10));

} else {
var statearr_18364_20035 = state_18174__$1;
(statearr_18364_20035[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17100__auto__ = null;
var cljs$core$async$mult_$_state_machine__17100__auto____0 = (function (){
var statearr_18369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18369[(0)] = cljs$core$async$mult_$_state_machine__17100__auto__);

(statearr_18369[(1)] = (1));

return statearr_18369;
});
var cljs$core$async$mult_$_state_machine__17100__auto____1 = (function (state_18174){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18174);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18372){var ex__17103__auto__ = e18372;
var statearr_18374_20036 = state_18174;
(statearr_18374_20036[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18174[(4)]))){
var statearr_18375_20037 = state_18174;
(statearr_18375_20037[(1)] = cljs.core.first((state_18174[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20038 = state_18174;
state_18174 = G__20038;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17100__auto__ = function(state_18174){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17100__auto____1.call(this,state_18174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17100__auto____0;
cljs$core$async$mult_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17100__auto____1;
return cljs$core$async$mult_$_state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_18379 = f__17267__auto__();
(statearr_18379[(6)] = c__17266__auto___19946);

return statearr_18379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18386 = arguments.length;
switch (G__18386) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20040 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20040(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20044 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20044(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20051 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20051(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20052 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20052(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20053 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20053(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20054 = arguments.length;
var i__5770__auto___20055 = (0);
while(true){
if((i__5770__auto___20055 < len__5769__auto___20054)){
args__5775__auto__.push((arguments[i__5770__auto___20055]));

var G__20056 = (i__5770__auto___20055 + (1));
i__5770__auto___20055 = G__20056;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18438){
var map__18439 = p__18438;
var map__18439__$1 = cljs.core.__destructure_map(map__18439);
var opts = map__18439__$1;
var statearr_18440_20057 = state;
(statearr_18440_20057[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18441_20058 = state;
(statearr_18441_20058[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18442_20059 = state;
(statearr_18442_20059[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18432){
var G__18433 = cljs.core.first(seq18432);
var seq18432__$1 = cljs.core.next(seq18432);
var G__18434 = cljs.core.first(seq18432__$1);
var seq18432__$2 = cljs.core.next(seq18432__$1);
var G__18435 = cljs.core.first(seq18432__$2);
var seq18432__$3 = cljs.core.next(seq18432__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18433,G__18434,G__18435,seq18432__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18460 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18461){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18461 = meta18461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18462,meta18461__$1){
var self__ = this;
var _18462__$1 = this;
return (new cljs.core.async.t_cljs$core$async18460(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18461__$1));
}));

(cljs.core.async.t_cljs$core$async18460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18462){
var self__ = this;
var _18462__$1 = this;
return self__.meta18461;
}));

(cljs.core.async.t_cljs$core$async18460.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18460.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18460.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18460.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18460.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18460.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18460.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18460.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18461","meta18461",-1091602848,null)], null);
}));

(cljs.core.async.t_cljs$core$async18460.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18460");

(cljs.core.async.t_cljs$core$async18460.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18460");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18460.
 */
cljs.core.async.__GT_t_cljs$core$async18460 = (function cljs$core$async$__GT_t_cljs$core$async18460(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18461){
return (new cljs.core.async.t_cljs$core$async18460(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18461));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async18460(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17266__auto___20069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_18559){
var state_val_18560 = (state_18559[(1)]);
if((state_val_18560 === (7))){
var inst_18511 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
if(cljs.core.truth_(inst_18511)){
var statearr_18565_20070 = state_18559__$1;
(statearr_18565_20070[(1)] = (8));

} else {
var statearr_18566_20071 = state_18559__$1;
(statearr_18566_20071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (20))){
var inst_18504 = (state_18559[(7)]);
var state_18559__$1 = state_18559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18559__$1,(23),out,inst_18504);
} else {
if((state_val_18560 === (1))){
var inst_18483 = calc_state();
var inst_18484 = cljs.core.__destructure_map(inst_18483);
var inst_18485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18484,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18484,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18484,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18488 = inst_18483;
var state_18559__$1 = (function (){var statearr_18568 = state_18559;
(statearr_18568[(8)] = inst_18487);

(statearr_18568[(9)] = inst_18486);

(statearr_18568[(10)] = inst_18485);

(statearr_18568[(11)] = inst_18488);

return statearr_18568;
})();
var statearr_18569_20072 = state_18559__$1;
(statearr_18569_20072[(2)] = null);

(statearr_18569_20072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (24))){
var inst_18494 = (state_18559[(12)]);
var inst_18488 = inst_18494;
var state_18559__$1 = (function (){var statearr_18570 = state_18559;
(statearr_18570[(11)] = inst_18488);

return statearr_18570;
})();
var statearr_18571_20073 = state_18559__$1;
(statearr_18571_20073[(2)] = null);

(statearr_18571_20073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (4))){
var inst_18506 = (state_18559[(13)]);
var inst_18504 = (state_18559[(7)]);
var inst_18503 = (state_18559[(2)]);
var inst_18504__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18503,(0),null);
var inst_18505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18503,(1),null);
var inst_18506__$1 = (inst_18504__$1 == null);
var state_18559__$1 = (function (){var statearr_18572 = state_18559;
(statearr_18572[(13)] = inst_18506__$1);

(statearr_18572[(14)] = inst_18505);

(statearr_18572[(7)] = inst_18504__$1);

return statearr_18572;
})();
if(cljs.core.truth_(inst_18506__$1)){
var statearr_18577_20074 = state_18559__$1;
(statearr_18577_20074[(1)] = (5));

} else {
var statearr_18578_20075 = state_18559__$1;
(statearr_18578_20075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (15))){
var inst_18529 = (state_18559[(15)]);
var inst_18495 = (state_18559[(16)]);
var inst_18529__$1 = cljs.core.empty_QMARK_(inst_18495);
var state_18559__$1 = (function (){var statearr_18583 = state_18559;
(statearr_18583[(15)] = inst_18529__$1);

return statearr_18583;
})();
if(inst_18529__$1){
var statearr_18584_20076 = state_18559__$1;
(statearr_18584_20076[(1)] = (17));

} else {
var statearr_18585_20077 = state_18559__$1;
(statearr_18585_20077[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (21))){
var inst_18494 = (state_18559[(12)]);
var inst_18488 = inst_18494;
var state_18559__$1 = (function (){var statearr_18586 = state_18559;
(statearr_18586[(11)] = inst_18488);

return statearr_18586;
})();
var statearr_18587_20078 = state_18559__$1;
(statearr_18587_20078[(2)] = null);

(statearr_18587_20078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (13))){
var inst_18518 = (state_18559[(2)]);
var inst_18519 = calc_state();
var inst_18488 = inst_18519;
var state_18559__$1 = (function (){var statearr_18592 = state_18559;
(statearr_18592[(11)] = inst_18488);

(statearr_18592[(17)] = inst_18518);

return statearr_18592;
})();
var statearr_18593_20080 = state_18559__$1;
(statearr_18593_20080[(2)] = null);

(statearr_18593_20080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (22))){
var inst_18549 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18594_20081 = state_18559__$1;
(statearr_18594_20081[(2)] = inst_18549);

(statearr_18594_20081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (6))){
var inst_18505 = (state_18559[(14)]);
var inst_18509 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18505,change);
var state_18559__$1 = state_18559;
var statearr_18599_20086 = state_18559__$1;
(statearr_18599_20086[(2)] = inst_18509);

(statearr_18599_20086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (25))){
var state_18559__$1 = state_18559;
var statearr_18600_20087 = state_18559__$1;
(statearr_18600_20087[(2)] = null);

(statearr_18600_20087[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (17))){
var inst_18505 = (state_18559[(14)]);
var inst_18496 = (state_18559[(18)]);
var inst_18531 = (inst_18496.cljs$core$IFn$_invoke$arity$1 ? inst_18496.cljs$core$IFn$_invoke$arity$1(inst_18505) : inst_18496.call(null,inst_18505));
var inst_18532 = cljs.core.not(inst_18531);
var state_18559__$1 = state_18559;
var statearr_18601_20088 = state_18559__$1;
(statearr_18601_20088[(2)] = inst_18532);

(statearr_18601_20088[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (3))){
var inst_18553 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18559__$1,inst_18553);
} else {
if((state_val_18560 === (12))){
var state_18559__$1 = state_18559;
var statearr_18605_20089 = state_18559__$1;
(statearr_18605_20089[(2)] = null);

(statearr_18605_20089[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (2))){
var inst_18494 = (state_18559[(12)]);
var inst_18488 = (state_18559[(11)]);
var inst_18494__$1 = cljs.core.__destructure_map(inst_18488);
var inst_18495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18494__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18494__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18494__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18559__$1 = (function (){var statearr_18607 = state_18559;
(statearr_18607[(12)] = inst_18494__$1);

(statearr_18607[(16)] = inst_18495);

(statearr_18607[(18)] = inst_18496);

return statearr_18607;
})();
return cljs.core.async.ioc_alts_BANG_(state_18559__$1,(4),inst_18497);
} else {
if((state_val_18560 === (23))){
var inst_18540 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
if(cljs.core.truth_(inst_18540)){
var statearr_18608_20090 = state_18559__$1;
(statearr_18608_20090[(1)] = (24));

} else {
var statearr_18609_20091 = state_18559__$1;
(statearr_18609_20091[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (19))){
var inst_18535 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18611_20092 = state_18559__$1;
(statearr_18611_20092[(2)] = inst_18535);

(statearr_18611_20092[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (11))){
var inst_18505 = (state_18559[(14)]);
var inst_18515 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18505);
var state_18559__$1 = state_18559;
var statearr_18612_20093 = state_18559__$1;
(statearr_18612_20093[(2)] = inst_18515);

(statearr_18612_20093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (9))){
var inst_18525 = (state_18559[(19)]);
var inst_18495 = (state_18559[(16)]);
var inst_18505 = (state_18559[(14)]);
var inst_18525__$1 = (inst_18495.cljs$core$IFn$_invoke$arity$1 ? inst_18495.cljs$core$IFn$_invoke$arity$1(inst_18505) : inst_18495.call(null,inst_18505));
var state_18559__$1 = (function (){var statearr_18613 = state_18559;
(statearr_18613[(19)] = inst_18525__$1);

return statearr_18613;
})();
if(cljs.core.truth_(inst_18525__$1)){
var statearr_18614_20094 = state_18559__$1;
(statearr_18614_20094[(1)] = (14));

} else {
var statearr_18615_20095 = state_18559__$1;
(statearr_18615_20095[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (5))){
var inst_18506 = (state_18559[(13)]);
var state_18559__$1 = state_18559;
var statearr_18620_20096 = state_18559__$1;
(statearr_18620_20096[(2)] = inst_18506);

(statearr_18620_20096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (14))){
var inst_18525 = (state_18559[(19)]);
var state_18559__$1 = state_18559;
var statearr_18624_20097 = state_18559__$1;
(statearr_18624_20097[(2)] = inst_18525);

(statearr_18624_20097[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (26))){
var inst_18545 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18626_20098 = state_18559__$1;
(statearr_18626_20098[(2)] = inst_18545);

(statearr_18626_20098[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (16))){
var inst_18537 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
if(cljs.core.truth_(inst_18537)){
var statearr_18627_20099 = state_18559__$1;
(statearr_18627_20099[(1)] = (20));

} else {
var statearr_18628_20100 = state_18559__$1;
(statearr_18628_20100[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (10))){
var inst_18551 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18632_20101 = state_18559__$1;
(statearr_18632_20101[(2)] = inst_18551);

(statearr_18632_20101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (18))){
var inst_18529 = (state_18559[(15)]);
var state_18559__$1 = state_18559;
var statearr_18634_20102 = state_18559__$1;
(statearr_18634_20102[(2)] = inst_18529);

(statearr_18634_20102[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (8))){
var inst_18504 = (state_18559[(7)]);
var inst_18513 = (inst_18504 == null);
var state_18559__$1 = state_18559;
if(cljs.core.truth_(inst_18513)){
var statearr_18635_20104 = state_18559__$1;
(statearr_18635_20104[(1)] = (11));

} else {
var statearr_18636_20105 = state_18559__$1;
(statearr_18636_20105[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17100__auto__ = null;
var cljs$core$async$mix_$_state_machine__17100__auto____0 = (function (){
var statearr_18641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18641[(0)] = cljs$core$async$mix_$_state_machine__17100__auto__);

(statearr_18641[(1)] = (1));

return statearr_18641;
});
var cljs$core$async$mix_$_state_machine__17100__auto____1 = (function (state_18559){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18559);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18642){var ex__17103__auto__ = e18642;
var statearr_18646_20107 = state_18559;
(statearr_18646_20107[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18559[(4)]))){
var statearr_18647_20108 = state_18559;
(statearr_18647_20108[(1)] = cljs.core.first((state_18559[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20109 = state_18559;
state_18559 = G__20109;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17100__auto__ = function(state_18559){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17100__auto____1.call(this,state_18559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17100__auto____0;
cljs$core$async$mix_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17100__auto____1;
return cljs$core$async$mix_$_state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_18649 = f__17267__auto__();
(statearr_18649[(6)] = c__17266__auto___20069);

return statearr_18649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20116 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20116(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20121 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20121(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20122 = (function() {
var G__20123 = null;
var G__20123__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20123__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20123 = function(p,v){
switch(arguments.length){
case 1:
return G__20123__1.call(this,p);
case 2:
return G__20123__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20123.cljs$core$IFn$_invoke$arity$1 = G__20123__1;
G__20123.cljs$core$IFn$_invoke$arity$2 = G__20123__2;
return G__20123;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18658 = arguments.length;
switch (G__18658) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20122(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20122(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18662 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18663){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18663 = meta18663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18664,meta18663__$1){
var self__ = this;
var _18664__$1 = this;
return (new cljs.core.async.t_cljs$core$async18662(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18663__$1));
}));

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18664){
var self__ = this;
var _18664__$1 = this;
return self__.meta18663;
}));

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18663","meta18663",2127873605,null)], null);
}));

(cljs.core.async.t_cljs$core$async18662.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18662");

(cljs.core.async.t_cljs$core$async18662.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18662");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18662.
 */
cljs.core.async.__GT_t_cljs$core$async18662 = (function cljs$core$async$__GT_t_cljs$core$async18662(ch,topic_fn,buf_fn,mults,ensure_mult,meta18663){
return (new cljs.core.async.t_cljs$core$async18662(ch,topic_fn,buf_fn,mults,ensure_mult,meta18663));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18661 = arguments.length;
switch (G__18661) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18659_SHARP_){
if(cljs.core.truth_((p1__18659_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18659_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18659_SHARP_.call(null,topic)))){
return p1__18659_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18659_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18662(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17266__auto___20128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_18742){
var state_val_18743 = (state_18742[(1)]);
if((state_val_18743 === (7))){
var inst_18738 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18744_20130 = state_18742__$1;
(statearr_18744_20130[(2)] = inst_18738);

(statearr_18744_20130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (20))){
var state_18742__$1 = state_18742;
var statearr_18745_20131 = state_18742__$1;
(statearr_18745_20131[(2)] = null);

(statearr_18745_20131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (1))){
var state_18742__$1 = state_18742;
var statearr_18746_20132 = state_18742__$1;
(statearr_18746_20132[(2)] = null);

(statearr_18746_20132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (24))){
var inst_18721 = (state_18742[(7)]);
var inst_18730 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18721);
var state_18742__$1 = state_18742;
var statearr_18747_20133 = state_18742__$1;
(statearr_18747_20133[(2)] = inst_18730);

(statearr_18747_20133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (4))){
var inst_18671 = (state_18742[(8)]);
var inst_18671__$1 = (state_18742[(2)]);
var inst_18672 = (inst_18671__$1 == null);
var state_18742__$1 = (function (){var statearr_18748 = state_18742;
(statearr_18748[(8)] = inst_18671__$1);

return statearr_18748;
})();
if(cljs.core.truth_(inst_18672)){
var statearr_18749_20134 = state_18742__$1;
(statearr_18749_20134[(1)] = (5));

} else {
var statearr_18750_20135 = state_18742__$1;
(statearr_18750_20135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (15))){
var inst_18715 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18752_20140 = state_18742__$1;
(statearr_18752_20140[(2)] = inst_18715);

(statearr_18752_20140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (21))){
var inst_18735 = (state_18742[(2)]);
var state_18742__$1 = (function (){var statearr_18754 = state_18742;
(statearr_18754[(9)] = inst_18735);

return statearr_18754;
})();
var statearr_18755_20143 = state_18742__$1;
(statearr_18755_20143[(2)] = null);

(statearr_18755_20143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (13))){
var inst_18697 = (state_18742[(10)]);
var inst_18699 = cljs.core.chunked_seq_QMARK_(inst_18697);
var state_18742__$1 = state_18742;
if(inst_18699){
var statearr_18756_20144 = state_18742__$1;
(statearr_18756_20144[(1)] = (16));

} else {
var statearr_18757_20145 = state_18742__$1;
(statearr_18757_20145[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (22))){
var inst_18727 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
if(cljs.core.truth_(inst_18727)){
var statearr_18759_20146 = state_18742__$1;
(statearr_18759_20146[(1)] = (23));

} else {
var statearr_18763_20147 = state_18742__$1;
(statearr_18763_20147[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (6))){
var inst_18671 = (state_18742[(8)]);
var inst_18721 = (state_18742[(7)]);
var inst_18723 = (state_18742[(11)]);
var inst_18721__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18671) : topic_fn.call(null,inst_18671));
var inst_18722 = cljs.core.deref(mults);
var inst_18723__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18722,inst_18721__$1);
var state_18742__$1 = (function (){var statearr_18764 = state_18742;
(statearr_18764[(7)] = inst_18721__$1);

(statearr_18764[(11)] = inst_18723__$1);

return statearr_18764;
})();
if(cljs.core.truth_(inst_18723__$1)){
var statearr_18765_20149 = state_18742__$1;
(statearr_18765_20149[(1)] = (19));

} else {
var statearr_18766_20153 = state_18742__$1;
(statearr_18766_20153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (25))){
var inst_18732 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18767_20154 = state_18742__$1;
(statearr_18767_20154[(2)] = inst_18732);

(statearr_18767_20154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (17))){
var inst_18697 = (state_18742[(10)]);
var inst_18706 = cljs.core.first(inst_18697);
var inst_18707 = cljs.core.async.muxch_STAR_(inst_18706);
var inst_18708 = cljs.core.async.close_BANG_(inst_18707);
var inst_18709 = cljs.core.next(inst_18697);
var inst_18682 = inst_18709;
var inst_18683 = null;
var inst_18684 = (0);
var inst_18685 = (0);
var state_18742__$1 = (function (){var statearr_18769 = state_18742;
(statearr_18769[(12)] = inst_18685);

(statearr_18769[(13)] = inst_18708);

(statearr_18769[(14)] = inst_18683);

(statearr_18769[(15)] = inst_18684);

(statearr_18769[(16)] = inst_18682);

return statearr_18769;
})();
var statearr_18770_20155 = state_18742__$1;
(statearr_18770_20155[(2)] = null);

(statearr_18770_20155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (3))){
var inst_18740 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18742__$1,inst_18740);
} else {
if((state_val_18743 === (12))){
var inst_18717 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18772_20156 = state_18742__$1;
(statearr_18772_20156[(2)] = inst_18717);

(statearr_18772_20156[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (2))){
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18742__$1,(4),ch);
} else {
if((state_val_18743 === (23))){
var state_18742__$1 = state_18742;
var statearr_18774_20158 = state_18742__$1;
(statearr_18774_20158[(2)] = null);

(statearr_18774_20158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (19))){
var inst_18671 = (state_18742[(8)]);
var inst_18723 = (state_18742[(11)]);
var inst_18725 = cljs.core.async.muxch_STAR_(inst_18723);
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18742__$1,(22),inst_18725,inst_18671);
} else {
if((state_val_18743 === (11))){
var inst_18697 = (state_18742[(10)]);
var inst_18682 = (state_18742[(16)]);
var inst_18697__$1 = cljs.core.seq(inst_18682);
var state_18742__$1 = (function (){var statearr_18777 = state_18742;
(statearr_18777[(10)] = inst_18697__$1);

return statearr_18777;
})();
if(inst_18697__$1){
var statearr_18778_20165 = state_18742__$1;
(statearr_18778_20165[(1)] = (13));

} else {
var statearr_18779_20166 = state_18742__$1;
(statearr_18779_20166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (9))){
var inst_18719 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18780_20167 = state_18742__$1;
(statearr_18780_20167[(2)] = inst_18719);

(statearr_18780_20167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (5))){
var inst_18679 = cljs.core.deref(mults);
var inst_18680 = cljs.core.vals(inst_18679);
var inst_18681 = cljs.core.seq(inst_18680);
var inst_18682 = inst_18681;
var inst_18683 = null;
var inst_18684 = (0);
var inst_18685 = (0);
var state_18742__$1 = (function (){var statearr_18784 = state_18742;
(statearr_18784[(12)] = inst_18685);

(statearr_18784[(14)] = inst_18683);

(statearr_18784[(15)] = inst_18684);

(statearr_18784[(16)] = inst_18682);

return statearr_18784;
})();
var statearr_18785_20171 = state_18742__$1;
(statearr_18785_20171[(2)] = null);

(statearr_18785_20171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (14))){
var state_18742__$1 = state_18742;
var statearr_18789_20172 = state_18742__$1;
(statearr_18789_20172[(2)] = null);

(statearr_18789_20172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (16))){
var inst_18697 = (state_18742[(10)]);
var inst_18701 = cljs.core.chunk_first(inst_18697);
var inst_18702 = cljs.core.chunk_rest(inst_18697);
var inst_18703 = cljs.core.count(inst_18701);
var inst_18682 = inst_18702;
var inst_18683 = inst_18701;
var inst_18684 = inst_18703;
var inst_18685 = (0);
var state_18742__$1 = (function (){var statearr_18790 = state_18742;
(statearr_18790[(12)] = inst_18685);

(statearr_18790[(14)] = inst_18683);

(statearr_18790[(15)] = inst_18684);

(statearr_18790[(16)] = inst_18682);

return statearr_18790;
})();
var statearr_18791_20176 = state_18742__$1;
(statearr_18791_20176[(2)] = null);

(statearr_18791_20176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (10))){
var inst_18685 = (state_18742[(12)]);
var inst_18683 = (state_18742[(14)]);
var inst_18684 = (state_18742[(15)]);
var inst_18682 = (state_18742[(16)]);
var inst_18690 = cljs.core._nth(inst_18683,inst_18685);
var inst_18692 = cljs.core.async.muxch_STAR_(inst_18690);
var inst_18693 = cljs.core.async.close_BANG_(inst_18692);
var inst_18694 = (inst_18685 + (1));
var tmp18786 = inst_18683;
var tmp18787 = inst_18684;
var tmp18788 = inst_18682;
var inst_18682__$1 = tmp18788;
var inst_18683__$1 = tmp18786;
var inst_18684__$1 = tmp18787;
var inst_18685__$1 = inst_18694;
var state_18742__$1 = (function (){var statearr_18792 = state_18742;
(statearr_18792[(12)] = inst_18685__$1);

(statearr_18792[(14)] = inst_18683__$1);

(statearr_18792[(15)] = inst_18684__$1);

(statearr_18792[(16)] = inst_18682__$1);

(statearr_18792[(17)] = inst_18693);

return statearr_18792;
})();
var statearr_18793_20184 = state_18742__$1;
(statearr_18793_20184[(2)] = null);

(statearr_18793_20184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (18))){
var inst_18712 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18794_20185 = state_18742__$1;
(statearr_18794_20185[(2)] = inst_18712);

(statearr_18794_20185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (8))){
var inst_18685 = (state_18742[(12)]);
var inst_18684 = (state_18742[(15)]);
var inst_18687 = (inst_18685 < inst_18684);
var inst_18688 = inst_18687;
var state_18742__$1 = state_18742;
if(cljs.core.truth_(inst_18688)){
var statearr_18802_20194 = state_18742__$1;
(statearr_18802_20194[(1)] = (10));

} else {
var statearr_18809_20195 = state_18742__$1;
(statearr_18809_20195[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_18816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18816[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_18816[(1)] = (1));

return statearr_18816;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_18742){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18742);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18817){var ex__17103__auto__ = e18817;
var statearr_18818_20200 = state_18742;
(statearr_18818_20200[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18742[(4)]))){
var statearr_18819_20201 = state_18742;
(statearr_18819_20201[(1)] = cljs.core.first((state_18742[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20202 = state_18742;
state_18742 = G__20202;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_18742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_18742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_18820 = f__17267__auto__();
(statearr_18820[(6)] = c__17266__auto___20128);

return statearr_18820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18832 = arguments.length;
switch (G__18832) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18837 = arguments.length;
switch (G__18837) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18843 = arguments.length;
switch (G__18843) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17266__auto___20220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_18894){
var state_val_18895 = (state_18894[(1)]);
if((state_val_18895 === (7))){
var state_18894__$1 = state_18894;
var statearr_18896_20221 = state_18894__$1;
(statearr_18896_20221[(2)] = null);

(statearr_18896_20221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (1))){
var state_18894__$1 = state_18894;
var statearr_18897_20223 = state_18894__$1;
(statearr_18897_20223[(2)] = null);

(statearr_18897_20223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (4))){
var inst_18854 = (state_18894[(7)]);
var inst_18855 = (state_18894[(8)]);
var inst_18857 = (inst_18855 < inst_18854);
var state_18894__$1 = state_18894;
if(cljs.core.truth_(inst_18857)){
var statearr_18900_20224 = state_18894__$1;
(statearr_18900_20224[(1)] = (6));

} else {
var statearr_18901_20226 = state_18894__$1;
(statearr_18901_20226[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (15))){
var inst_18880 = (state_18894[(9)]);
var inst_18885 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18880);
var state_18894__$1 = state_18894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18894__$1,(17),out,inst_18885);
} else {
if((state_val_18895 === (13))){
var inst_18880 = (state_18894[(9)]);
var inst_18880__$1 = (state_18894[(2)]);
var inst_18881 = cljs.core.some(cljs.core.nil_QMARK_,inst_18880__$1);
var state_18894__$1 = (function (){var statearr_18902 = state_18894;
(statearr_18902[(9)] = inst_18880__$1);

return statearr_18902;
})();
if(cljs.core.truth_(inst_18881)){
var statearr_18904_20228 = state_18894__$1;
(statearr_18904_20228[(1)] = (14));

} else {
var statearr_18905_20229 = state_18894__$1;
(statearr_18905_20229[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (6))){
var state_18894__$1 = state_18894;
var statearr_18907_20230 = state_18894__$1;
(statearr_18907_20230[(2)] = null);

(statearr_18907_20230[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (17))){
var inst_18887 = (state_18894[(2)]);
var state_18894__$1 = (function (){var statearr_18912 = state_18894;
(statearr_18912[(10)] = inst_18887);

return statearr_18912;
})();
var statearr_18913_20232 = state_18894__$1;
(statearr_18913_20232[(2)] = null);

(statearr_18913_20232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (3))){
var inst_18892 = (state_18894[(2)]);
var state_18894__$1 = state_18894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18894__$1,inst_18892);
} else {
if((state_val_18895 === (12))){
var _ = (function (){var statearr_18914 = state_18894;
(statearr_18914[(4)] = cljs.core.rest((state_18894[(4)])));

return statearr_18914;
})();
var state_18894__$1 = state_18894;
var ex18911 = (state_18894__$1[(2)]);
var statearr_18915_20233 = state_18894__$1;
(statearr_18915_20233[(5)] = ex18911);


if((ex18911 instanceof Object)){
var statearr_18916_20239 = state_18894__$1;
(statearr_18916_20239[(1)] = (11));

(statearr_18916_20239[(5)] = null);

} else {
throw ex18911;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (2))){
var inst_18852 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18854 = cnt;
var inst_18855 = (0);
var state_18894__$1 = (function (){var statearr_18917 = state_18894;
(statearr_18917[(11)] = inst_18852);

(statearr_18917[(7)] = inst_18854);

(statearr_18917[(8)] = inst_18855);

return statearr_18917;
})();
var statearr_18918_20240 = state_18894__$1;
(statearr_18918_20240[(2)] = null);

(statearr_18918_20240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (11))){
var inst_18859 = (state_18894[(2)]);
var inst_18860 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18894__$1 = (function (){var statearr_18919 = state_18894;
(statearr_18919[(12)] = inst_18859);

return statearr_18919;
})();
var statearr_18920_20242 = state_18894__$1;
(statearr_18920_20242[(2)] = inst_18860);

(statearr_18920_20242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (9))){
var inst_18855 = (state_18894[(8)]);
var _ = (function (){var statearr_18921 = state_18894;
(statearr_18921[(4)] = cljs.core.cons((12),(state_18894[(4)])));

return statearr_18921;
})();
var inst_18866 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18855) : chs__$1.call(null,inst_18855));
var inst_18867 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18855) : done.call(null,inst_18855));
var inst_18868 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18866,inst_18867);
var ___$1 = (function (){var statearr_18922 = state_18894;
(statearr_18922[(4)] = cljs.core.rest((state_18894[(4)])));

return statearr_18922;
})();
var state_18894__$1 = state_18894;
var statearr_18923_20244 = state_18894__$1;
(statearr_18923_20244[(2)] = inst_18868);

(statearr_18923_20244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (5))){
var inst_18878 = (state_18894[(2)]);
var state_18894__$1 = (function (){var statearr_18928 = state_18894;
(statearr_18928[(13)] = inst_18878);

return statearr_18928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18894__$1,(13),dchan);
} else {
if((state_val_18895 === (14))){
var inst_18883 = cljs.core.async.close_BANG_(out);
var state_18894__$1 = state_18894;
var statearr_18929_20245 = state_18894__$1;
(statearr_18929_20245[(2)] = inst_18883);

(statearr_18929_20245[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (16))){
var inst_18890 = (state_18894[(2)]);
var state_18894__$1 = state_18894;
var statearr_18931_20246 = state_18894__$1;
(statearr_18931_20246[(2)] = inst_18890);

(statearr_18931_20246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (10))){
var inst_18855 = (state_18894[(8)]);
var inst_18871 = (state_18894[(2)]);
var inst_18872 = (inst_18855 + (1));
var inst_18855__$1 = inst_18872;
var state_18894__$1 = (function (){var statearr_18932 = state_18894;
(statearr_18932[(14)] = inst_18871);

(statearr_18932[(8)] = inst_18855__$1);

return statearr_18932;
})();
var statearr_18933_20247 = state_18894__$1;
(statearr_18933_20247[(2)] = null);

(statearr_18933_20247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (8))){
var inst_18876 = (state_18894[(2)]);
var state_18894__$1 = state_18894;
var statearr_18935_20252 = state_18894__$1;
(statearr_18935_20252[(2)] = inst_18876);

(statearr_18935_20252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_18937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18937[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_18937[(1)] = (1));

return statearr_18937;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_18894){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18894);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18938){var ex__17103__auto__ = e18938;
var statearr_18939_20253 = state_18894;
(statearr_18939_20253[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18894[(4)]))){
var statearr_18940_20255 = state_18894;
(statearr_18940_20255[(1)] = cljs.core.first((state_18894[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20256 = state_18894;
state_18894 = G__20256;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_18894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_18894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_18941 = f__17267__auto__();
(statearr_18941[(6)] = c__17266__auto___20220);

return statearr_18941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18949 = arguments.length;
switch (G__18949) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17266__auto___20258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_18981){
var state_val_18982 = (state_18981[(1)]);
if((state_val_18982 === (7))){
var inst_18960 = (state_18981[(7)]);
var inst_18961 = (state_18981[(8)]);
var inst_18960__$1 = (state_18981[(2)]);
var inst_18961__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18960__$1,(0),null);
var inst_18962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18960__$1,(1),null);
var inst_18963 = (inst_18961__$1 == null);
var state_18981__$1 = (function (){var statearr_18987 = state_18981;
(statearr_18987[(7)] = inst_18960__$1);

(statearr_18987[(8)] = inst_18961__$1);

(statearr_18987[(9)] = inst_18962);

return statearr_18987;
})();
if(cljs.core.truth_(inst_18963)){
var statearr_18988_20262 = state_18981__$1;
(statearr_18988_20262[(1)] = (8));

} else {
var statearr_18989_20263 = state_18981__$1;
(statearr_18989_20263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (1))){
var inst_18950 = cljs.core.vec(chs);
var inst_18951 = inst_18950;
var state_18981__$1 = (function (){var statearr_18990 = state_18981;
(statearr_18990[(10)] = inst_18951);

return statearr_18990;
})();
var statearr_18991_20266 = state_18981__$1;
(statearr_18991_20266[(2)] = null);

(statearr_18991_20266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (4))){
var inst_18951 = (state_18981[(10)]);
var state_18981__$1 = state_18981;
return cljs.core.async.ioc_alts_BANG_(state_18981__$1,(7),inst_18951);
} else {
if((state_val_18982 === (6))){
var inst_18977 = (state_18981[(2)]);
var state_18981__$1 = state_18981;
var statearr_18994_20268 = state_18981__$1;
(statearr_18994_20268[(2)] = inst_18977);

(statearr_18994_20268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (3))){
var inst_18979 = (state_18981[(2)]);
var state_18981__$1 = state_18981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18981__$1,inst_18979);
} else {
if((state_val_18982 === (2))){
var inst_18951 = (state_18981[(10)]);
var inst_18953 = cljs.core.count(inst_18951);
var inst_18954 = (inst_18953 > (0));
var state_18981__$1 = state_18981;
if(cljs.core.truth_(inst_18954)){
var statearr_18998_20273 = state_18981__$1;
(statearr_18998_20273[(1)] = (4));

} else {
var statearr_18999_20277 = state_18981__$1;
(statearr_18999_20277[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (11))){
var inst_18951 = (state_18981[(10)]);
var inst_18970 = (state_18981[(2)]);
var tmp18997 = inst_18951;
var inst_18951__$1 = tmp18997;
var state_18981__$1 = (function (){var statearr_19000 = state_18981;
(statearr_19000[(10)] = inst_18951__$1);

(statearr_19000[(11)] = inst_18970);

return statearr_19000;
})();
var statearr_19001_20279 = state_18981__$1;
(statearr_19001_20279[(2)] = null);

(statearr_19001_20279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (9))){
var inst_18961 = (state_18981[(8)]);
var state_18981__$1 = state_18981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18981__$1,(11),out,inst_18961);
} else {
if((state_val_18982 === (5))){
var inst_18975 = cljs.core.async.close_BANG_(out);
var state_18981__$1 = state_18981;
var statearr_19002_20280 = state_18981__$1;
(statearr_19002_20280[(2)] = inst_18975);

(statearr_19002_20280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (10))){
var inst_18973 = (state_18981[(2)]);
var state_18981__$1 = state_18981;
var statearr_19003_20281 = state_18981__$1;
(statearr_19003_20281[(2)] = inst_18973);

(statearr_19003_20281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (8))){
var inst_18951 = (state_18981[(10)]);
var inst_18960 = (state_18981[(7)]);
var inst_18961 = (state_18981[(8)]);
var inst_18962 = (state_18981[(9)]);
var inst_18965 = (function (){var cs = inst_18951;
var vec__18956 = inst_18960;
var v = inst_18961;
var c = inst_18962;
return (function (p1__18944_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18944_SHARP_);
});
})();
var inst_18966 = cljs.core.filterv(inst_18965,inst_18951);
var inst_18951__$1 = inst_18966;
var state_18981__$1 = (function (){var statearr_19004 = state_18981;
(statearr_19004[(10)] = inst_18951__$1);

return statearr_19004;
})();
var statearr_19005_20285 = state_18981__$1;
(statearr_19005_20285[(2)] = null);

(statearr_19005_20285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19008 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19008[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19008[(1)] = (1));

return statearr_19008;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_18981){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18981);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19009){var ex__17103__auto__ = e19009;
var statearr_19010_20289 = state_18981;
(statearr_19010_20289[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18981[(4)]))){
var statearr_19011_20290 = state_18981;
(statearr_19011_20290[(1)] = cljs.core.first((state_18981[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20292 = state_18981;
state_18981 = G__20292;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_18981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_18981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_19015 = f__17267__auto__();
(statearr_19015[(6)] = c__17266__auto___20258);

return statearr_19015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19017 = arguments.length;
switch (G__19017) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17266__auto___20298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_19041){
var state_val_19042 = (state_19041[(1)]);
if((state_val_19042 === (7))){
var inst_19023 = (state_19041[(7)]);
var inst_19023__$1 = (state_19041[(2)]);
var inst_19024 = (inst_19023__$1 == null);
var inst_19025 = cljs.core.not(inst_19024);
var state_19041__$1 = (function (){var statearr_19043 = state_19041;
(statearr_19043[(7)] = inst_19023__$1);

return statearr_19043;
})();
if(inst_19025){
var statearr_19044_20300 = state_19041__$1;
(statearr_19044_20300[(1)] = (8));

} else {
var statearr_19045_20301 = state_19041__$1;
(statearr_19045_20301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (1))){
var inst_19018 = (0);
var state_19041__$1 = (function (){var statearr_19046 = state_19041;
(statearr_19046[(8)] = inst_19018);

return statearr_19046;
})();
var statearr_19047_20302 = state_19041__$1;
(statearr_19047_20302[(2)] = null);

(statearr_19047_20302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (4))){
var state_19041__$1 = state_19041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19041__$1,(7),ch);
} else {
if((state_val_19042 === (6))){
var inst_19036 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19048_20303 = state_19041__$1;
(statearr_19048_20303[(2)] = inst_19036);

(statearr_19048_20303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (3))){
var inst_19038 = (state_19041[(2)]);
var inst_19039 = cljs.core.async.close_BANG_(out);
var state_19041__$1 = (function (){var statearr_19049 = state_19041;
(statearr_19049[(9)] = inst_19038);

return statearr_19049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19041__$1,inst_19039);
} else {
if((state_val_19042 === (2))){
var inst_19018 = (state_19041[(8)]);
var inst_19020 = (inst_19018 < n);
var state_19041__$1 = state_19041;
if(cljs.core.truth_(inst_19020)){
var statearr_19050_20304 = state_19041__$1;
(statearr_19050_20304[(1)] = (4));

} else {
var statearr_19051_20305 = state_19041__$1;
(statearr_19051_20305[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (11))){
var inst_19018 = (state_19041[(8)]);
var inst_19028 = (state_19041[(2)]);
var inst_19029 = (inst_19018 + (1));
var inst_19018__$1 = inst_19029;
var state_19041__$1 = (function (){var statearr_19052 = state_19041;
(statearr_19052[(10)] = inst_19028);

(statearr_19052[(8)] = inst_19018__$1);

return statearr_19052;
})();
var statearr_19053_20307 = state_19041__$1;
(statearr_19053_20307[(2)] = null);

(statearr_19053_20307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (9))){
var state_19041__$1 = state_19041;
var statearr_19054_20308 = state_19041__$1;
(statearr_19054_20308[(2)] = null);

(statearr_19054_20308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (5))){
var state_19041__$1 = state_19041;
var statearr_19055_20309 = state_19041__$1;
(statearr_19055_20309[(2)] = null);

(statearr_19055_20309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (10))){
var inst_19033 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19056_20317 = state_19041__$1;
(statearr_19056_20317[(2)] = inst_19033);

(statearr_19056_20317[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (8))){
var inst_19023 = (state_19041[(7)]);
var state_19041__$1 = state_19041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19041__$1,(11),out,inst_19023);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19057[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19057[(1)] = (1));

return statearr_19057;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19041){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19041);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19058){var ex__17103__auto__ = e19058;
var statearr_19059_20331 = state_19041;
(statearr_19059_20331[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19041[(4)]))){
var statearr_19060_20332 = state_19041;
(statearr_19060_20332[(1)] = cljs.core.first((state_19041[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20333 = state_19041;
state_19041 = G__20333;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_19061 = f__17267__auto__();
(statearr_19061[(6)] = c__17266__auto___20298);

return statearr_19061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19070 = (function (f,ch,meta19065,_,fn1,meta19071){
this.f = f;
this.ch = ch;
this.meta19065 = meta19065;
this._ = _;
this.fn1 = fn1;
this.meta19071 = meta19071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19072,meta19071__$1){
var self__ = this;
var _19072__$1 = this;
return (new cljs.core.async.t_cljs$core$async19070(self__.f,self__.ch,self__.meta19065,self__._,self__.fn1,meta19071__$1));
}));

(cljs.core.async.t_cljs$core$async19070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19072){
var self__ = this;
var _19072__$1 = this;
return self__.meta19071;
}));

(cljs.core.async.t_cljs$core$async19070.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19062_SHARP_){
var G__19073 = (((p1__19062_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19062_SHARP_) : self__.f.call(null,p1__19062_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19073) : f1.call(null,G__19073));
});
}));

(cljs.core.async.t_cljs$core$async19070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19065","meta19065",-1057848586,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19064","cljs.core.async/t_cljs$core$async19064",-1790749608,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19071","meta19071",1477855806,null)], null);
}));

(cljs.core.async.t_cljs$core$async19070.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19070");

(cljs.core.async.t_cljs$core$async19070.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19070");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19070.
 */
cljs.core.async.__GT_t_cljs$core$async19070 = (function cljs$core$async$__GT_t_cljs$core$async19070(f,ch,meta19065,_,fn1,meta19071){
return (new cljs.core.async.t_cljs$core$async19070(f,ch,meta19065,_,fn1,meta19071));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19064 = (function (f,ch,meta19065){
this.f = f;
this.ch = ch;
this.meta19065 = meta19065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19066,meta19065__$1){
var self__ = this;
var _19066__$1 = this;
return (new cljs.core.async.t_cljs$core$async19064(self__.f,self__.ch,meta19065__$1));
}));

(cljs.core.async.t_cljs$core$async19064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19066){
var self__ = this;
var _19066__$1 = this;
return self__.meta19065;
}));

(cljs.core.async.t_cljs$core$async19064.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19064.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19064.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19070(self__.f,self__.ch,self__.meta19065,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19078 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19078) : self__.f.call(null,G__19078));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19064.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19065","meta19065",-1057848586,null)], null);
}));

(cljs.core.async.t_cljs$core$async19064.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19064");

(cljs.core.async.t_cljs$core$async19064.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19064");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19064.
 */
cljs.core.async.__GT_t_cljs$core$async19064 = (function cljs$core$async$__GT_t_cljs$core$async19064(f,ch,meta19065){
return (new cljs.core.async.t_cljs$core$async19064(f,ch,meta19065));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19064(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19079 = (function (f,ch,meta19080){
this.f = f;
this.ch = ch;
this.meta19080 = meta19080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19081,meta19080__$1){
var self__ = this;
var _19081__$1 = this;
return (new cljs.core.async.t_cljs$core$async19079(self__.f,self__.ch,meta19080__$1));
}));

(cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19081){
var self__ = this;
var _19081__$1 = this;
return self__.meta19080;
}));

(cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19080","meta19080",-420084429,null)], null);
}));

(cljs.core.async.t_cljs$core$async19079.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19079");

(cljs.core.async.t_cljs$core$async19079.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19079");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19079.
 */
cljs.core.async.__GT_t_cljs$core$async19079 = (function cljs$core$async$__GT_t_cljs$core$async19079(f,ch,meta19080){
return (new cljs.core.async.t_cljs$core$async19079(f,ch,meta19080));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19079(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19122 = (function (p,ch,meta19123){
this.p = p;
this.ch = ch;
this.meta19123 = meta19123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19124,meta19123__$1){
var self__ = this;
var _19124__$1 = this;
return (new cljs.core.async.t_cljs$core$async19122(self__.p,self__.ch,meta19123__$1));
}));

(cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19124){
var self__ = this;
var _19124__$1 = this;
return self__.meta19123;
}));

(cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19123","meta19123",2068753847,null)], null);
}));

(cljs.core.async.t_cljs$core$async19122.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19122");

(cljs.core.async.t_cljs$core$async19122.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19122");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19122.
 */
cljs.core.async.__GT_t_cljs$core$async19122 = (function cljs$core$async$__GT_t_cljs$core$async19122(p,ch,meta19123){
return (new cljs.core.async.t_cljs$core$async19122(p,ch,meta19123));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19122(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19132 = arguments.length;
switch (G__19132) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17266__auto___20461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_19153){
var state_val_19154 = (state_19153[(1)]);
if((state_val_19154 === (7))){
var inst_19149 = (state_19153[(2)]);
var state_19153__$1 = state_19153;
var statearr_19155_20466 = state_19153__$1;
(statearr_19155_20466[(2)] = inst_19149);

(statearr_19155_20466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19154 === (1))){
var state_19153__$1 = state_19153;
var statearr_19156_20467 = state_19153__$1;
(statearr_19156_20467[(2)] = null);

(statearr_19156_20467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19154 === (4))){
var inst_19135 = (state_19153[(7)]);
var inst_19135__$1 = (state_19153[(2)]);
var inst_19136 = (inst_19135__$1 == null);
var state_19153__$1 = (function (){var statearr_19157 = state_19153;
(statearr_19157[(7)] = inst_19135__$1);

return statearr_19157;
})();
if(cljs.core.truth_(inst_19136)){
var statearr_19158_20469 = state_19153__$1;
(statearr_19158_20469[(1)] = (5));

} else {
var statearr_19159_20470 = state_19153__$1;
(statearr_19159_20470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19154 === (6))){
var inst_19135 = (state_19153[(7)]);
var inst_19140 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19135) : p.call(null,inst_19135));
var state_19153__$1 = state_19153;
if(cljs.core.truth_(inst_19140)){
var statearr_19160_20471 = state_19153__$1;
(statearr_19160_20471[(1)] = (8));

} else {
var statearr_19161_20477 = state_19153__$1;
(statearr_19161_20477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19154 === (3))){
var inst_19151 = (state_19153[(2)]);
var state_19153__$1 = state_19153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19153__$1,inst_19151);
} else {
if((state_val_19154 === (2))){
var state_19153__$1 = state_19153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19153__$1,(4),ch);
} else {
if((state_val_19154 === (11))){
var inst_19143 = (state_19153[(2)]);
var state_19153__$1 = state_19153;
var statearr_19162_20479 = state_19153__$1;
(statearr_19162_20479[(2)] = inst_19143);

(statearr_19162_20479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19154 === (9))){
var state_19153__$1 = state_19153;
var statearr_19163_20480 = state_19153__$1;
(statearr_19163_20480[(2)] = null);

(statearr_19163_20480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19154 === (5))){
var inst_19138 = cljs.core.async.close_BANG_(out);
var state_19153__$1 = state_19153;
var statearr_19164_20481 = state_19153__$1;
(statearr_19164_20481[(2)] = inst_19138);

(statearr_19164_20481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19154 === (10))){
var inst_19146 = (state_19153[(2)]);
var state_19153__$1 = (function (){var statearr_19165 = state_19153;
(statearr_19165[(8)] = inst_19146);

return statearr_19165;
})();
var statearr_19166_20482 = state_19153__$1;
(statearr_19166_20482[(2)] = null);

(statearr_19166_20482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19154 === (8))){
var inst_19135 = (state_19153[(7)]);
var state_19153__$1 = state_19153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19153__$1,(11),out,inst_19135);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19167 = [null,null,null,null,null,null,null,null,null];
(statearr_19167[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19167[(1)] = (1));

return statearr_19167;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19153){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19153);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19168){var ex__17103__auto__ = e19168;
var statearr_19169_20483 = state_19153;
(statearr_19169_20483[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19153[(4)]))){
var statearr_19170_20484 = state_19153;
(statearr_19170_20484[(1)] = cljs.core.first((state_19153[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20485 = state_19153;
state_19153 = G__20485;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_19171 = f__17267__auto__();
(statearr_19171[(6)] = c__17266__auto___20461);

return statearr_19171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19173 = arguments.length;
switch (G__19173) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17266__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_19246){
var state_val_19247 = (state_19246[(1)]);
if((state_val_19247 === (7))){
var inst_19242 = (state_19246[(2)]);
var state_19246__$1 = state_19246;
var statearr_19248_20493 = state_19246__$1;
(statearr_19248_20493[(2)] = inst_19242);

(statearr_19248_20493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (20))){
var inst_19212 = (state_19246[(7)]);
var inst_19223 = (state_19246[(2)]);
var inst_19224 = cljs.core.next(inst_19212);
var inst_19198 = inst_19224;
var inst_19199 = null;
var inst_19200 = (0);
var inst_19201 = (0);
var state_19246__$1 = (function (){var statearr_19249 = state_19246;
(statearr_19249[(8)] = inst_19201);

(statearr_19249[(9)] = inst_19198);

(statearr_19249[(10)] = inst_19223);

(statearr_19249[(11)] = inst_19199);

(statearr_19249[(12)] = inst_19200);

return statearr_19249;
})();
var statearr_19250_20498 = state_19246__$1;
(statearr_19250_20498[(2)] = null);

(statearr_19250_20498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (1))){
var state_19246__$1 = state_19246;
var statearr_19251_20505 = state_19246__$1;
(statearr_19251_20505[(2)] = null);

(statearr_19251_20505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (4))){
var inst_19184 = (state_19246[(13)]);
var inst_19184__$1 = (state_19246[(2)]);
var inst_19185 = (inst_19184__$1 == null);
var state_19246__$1 = (function (){var statearr_19252 = state_19246;
(statearr_19252[(13)] = inst_19184__$1);

return statearr_19252;
})();
if(cljs.core.truth_(inst_19185)){
var statearr_19253_20514 = state_19246__$1;
(statearr_19253_20514[(1)] = (5));

} else {
var statearr_19254_20519 = state_19246__$1;
(statearr_19254_20519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (15))){
var state_19246__$1 = state_19246;
var statearr_19258_20521 = state_19246__$1;
(statearr_19258_20521[(2)] = null);

(statearr_19258_20521[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (21))){
var state_19246__$1 = state_19246;
var statearr_19259_20522 = state_19246__$1;
(statearr_19259_20522[(2)] = null);

(statearr_19259_20522[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (13))){
var inst_19201 = (state_19246[(8)]);
var inst_19198 = (state_19246[(9)]);
var inst_19199 = (state_19246[(11)]);
var inst_19200 = (state_19246[(12)]);
var inst_19208 = (state_19246[(2)]);
var inst_19209 = (inst_19201 + (1));
var tmp19255 = inst_19198;
var tmp19256 = inst_19199;
var tmp19257 = inst_19200;
var inst_19198__$1 = tmp19255;
var inst_19199__$1 = tmp19256;
var inst_19200__$1 = tmp19257;
var inst_19201__$1 = inst_19209;
var state_19246__$1 = (function (){var statearr_19260 = state_19246;
(statearr_19260[(8)] = inst_19201__$1);

(statearr_19260[(9)] = inst_19198__$1);

(statearr_19260[(11)] = inst_19199__$1);

(statearr_19260[(12)] = inst_19200__$1);

(statearr_19260[(14)] = inst_19208);

return statearr_19260;
})();
var statearr_19261_20527 = state_19246__$1;
(statearr_19261_20527[(2)] = null);

(statearr_19261_20527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (22))){
var state_19246__$1 = state_19246;
var statearr_19262_20534 = state_19246__$1;
(statearr_19262_20534[(2)] = null);

(statearr_19262_20534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (6))){
var inst_19184 = (state_19246[(13)]);
var inst_19196 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19184) : f.call(null,inst_19184));
var inst_19197 = cljs.core.seq(inst_19196);
var inst_19198 = inst_19197;
var inst_19199 = null;
var inst_19200 = (0);
var inst_19201 = (0);
var state_19246__$1 = (function (){var statearr_19263 = state_19246;
(statearr_19263[(8)] = inst_19201);

(statearr_19263[(9)] = inst_19198);

(statearr_19263[(11)] = inst_19199);

(statearr_19263[(12)] = inst_19200);

return statearr_19263;
})();
var statearr_19264_20542 = state_19246__$1;
(statearr_19264_20542[(2)] = null);

(statearr_19264_20542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (17))){
var inst_19212 = (state_19246[(7)]);
var inst_19216 = cljs.core.chunk_first(inst_19212);
var inst_19217 = cljs.core.chunk_rest(inst_19212);
var inst_19218 = cljs.core.count(inst_19216);
var inst_19198 = inst_19217;
var inst_19199 = inst_19216;
var inst_19200 = inst_19218;
var inst_19201 = (0);
var state_19246__$1 = (function (){var statearr_19266 = state_19246;
(statearr_19266[(8)] = inst_19201);

(statearr_19266[(9)] = inst_19198);

(statearr_19266[(11)] = inst_19199);

(statearr_19266[(12)] = inst_19200);

return statearr_19266;
})();
var statearr_19268_20555 = state_19246__$1;
(statearr_19268_20555[(2)] = null);

(statearr_19268_20555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (3))){
var inst_19244 = (state_19246[(2)]);
var state_19246__$1 = state_19246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19246__$1,inst_19244);
} else {
if((state_val_19247 === (12))){
var inst_19232 = (state_19246[(2)]);
var state_19246__$1 = state_19246;
var statearr_19269_20560 = state_19246__$1;
(statearr_19269_20560[(2)] = inst_19232);

(statearr_19269_20560[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (2))){
var state_19246__$1 = state_19246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19246__$1,(4),in$);
} else {
if((state_val_19247 === (23))){
var inst_19240 = (state_19246[(2)]);
var state_19246__$1 = state_19246;
var statearr_19272_20563 = state_19246__$1;
(statearr_19272_20563[(2)] = inst_19240);

(statearr_19272_20563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (19))){
var inst_19227 = (state_19246[(2)]);
var state_19246__$1 = state_19246;
var statearr_19273_20568 = state_19246__$1;
(statearr_19273_20568[(2)] = inst_19227);

(statearr_19273_20568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (11))){
var inst_19198 = (state_19246[(9)]);
var inst_19212 = (state_19246[(7)]);
var inst_19212__$1 = cljs.core.seq(inst_19198);
var state_19246__$1 = (function (){var statearr_19274 = state_19246;
(statearr_19274[(7)] = inst_19212__$1);

return statearr_19274;
})();
if(inst_19212__$1){
var statearr_19275_20575 = state_19246__$1;
(statearr_19275_20575[(1)] = (14));

} else {
var statearr_19276_20580 = state_19246__$1;
(statearr_19276_20580[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (9))){
var inst_19234 = (state_19246[(2)]);
var inst_19235 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19246__$1 = (function (){var statearr_19279 = state_19246;
(statearr_19279[(15)] = inst_19234);

return statearr_19279;
})();
if(cljs.core.truth_(inst_19235)){
var statearr_19280_20581 = state_19246__$1;
(statearr_19280_20581[(1)] = (21));

} else {
var statearr_19281_20582 = state_19246__$1;
(statearr_19281_20582[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (5))){
var inst_19187 = cljs.core.async.close_BANG_(out);
var state_19246__$1 = state_19246;
var statearr_19282_20583 = state_19246__$1;
(statearr_19282_20583[(2)] = inst_19187);

(statearr_19282_20583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (14))){
var inst_19212 = (state_19246[(7)]);
var inst_19214 = cljs.core.chunked_seq_QMARK_(inst_19212);
var state_19246__$1 = state_19246;
if(inst_19214){
var statearr_19283_20584 = state_19246__$1;
(statearr_19283_20584[(1)] = (17));

} else {
var statearr_19284_20585 = state_19246__$1;
(statearr_19284_20585[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (16))){
var inst_19230 = (state_19246[(2)]);
var state_19246__$1 = state_19246;
var statearr_19286_20588 = state_19246__$1;
(statearr_19286_20588[(2)] = inst_19230);

(statearr_19286_20588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (10))){
var inst_19201 = (state_19246[(8)]);
var inst_19199 = (state_19246[(11)]);
var inst_19206 = cljs.core._nth(inst_19199,inst_19201);
var state_19246__$1 = state_19246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19246__$1,(13),out,inst_19206);
} else {
if((state_val_19247 === (18))){
var inst_19212 = (state_19246[(7)]);
var inst_19221 = cljs.core.first(inst_19212);
var state_19246__$1 = state_19246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19246__$1,(20),out,inst_19221);
} else {
if((state_val_19247 === (8))){
var inst_19201 = (state_19246[(8)]);
var inst_19200 = (state_19246[(12)]);
var inst_19203 = (inst_19201 < inst_19200);
var inst_19204 = inst_19203;
var state_19246__$1 = state_19246;
if(cljs.core.truth_(inst_19204)){
var statearr_19288_20593 = state_19246__$1;
(statearr_19288_20593[(1)] = (10));

} else {
var statearr_19289_20595 = state_19246__$1;
(statearr_19289_20595[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_19290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19290[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__);

(statearr_19290[(1)] = (1));

return statearr_19290;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____1 = (function (state_19246){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19246);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19291){var ex__17103__auto__ = e19291;
var statearr_19292_20596 = state_19246;
(statearr_19292_20596[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19246[(4)]))){
var statearr_19293_20597 = state_19246;
(statearr_19293_20597[(1)] = cljs.core.first((state_19246[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20598 = state_19246;
state_19246 = G__20598;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__ = function(state_19246){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____1.call(this,state_19246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_19294 = f__17267__auto__();
(statearr_19294[(6)] = c__17266__auto__);

return statearr_19294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));

return c__17266__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19296 = arguments.length;
switch (G__19296) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19301 = arguments.length;
switch (G__19301) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19303 = arguments.length;
switch (G__19303) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17266__auto___20631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_19347){
var state_val_19348 = (state_19347[(1)]);
if((state_val_19348 === (7))){
var inst_19339 = (state_19347[(2)]);
var state_19347__$1 = state_19347;
var statearr_19352_20632 = state_19347__$1;
(statearr_19352_20632[(2)] = inst_19339);

(statearr_19352_20632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (1))){
var inst_19317 = null;
var state_19347__$1 = (function (){var statearr_19372 = state_19347;
(statearr_19372[(7)] = inst_19317);

return statearr_19372;
})();
var statearr_19373_20634 = state_19347__$1;
(statearr_19373_20634[(2)] = null);

(statearr_19373_20634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (4))){
var inst_19320 = (state_19347[(8)]);
var inst_19320__$1 = (state_19347[(2)]);
var inst_19321 = (inst_19320__$1 == null);
var inst_19322 = cljs.core.not(inst_19321);
var state_19347__$1 = (function (){var statearr_19374 = state_19347;
(statearr_19374[(8)] = inst_19320__$1);

return statearr_19374;
})();
if(inst_19322){
var statearr_19375_20635 = state_19347__$1;
(statearr_19375_20635[(1)] = (5));

} else {
var statearr_19376_20636 = state_19347__$1;
(statearr_19376_20636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (6))){
var state_19347__$1 = state_19347;
var statearr_19377_20641 = state_19347__$1;
(statearr_19377_20641[(2)] = null);

(statearr_19377_20641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (3))){
var inst_19341 = (state_19347[(2)]);
var inst_19342 = cljs.core.async.close_BANG_(out);
var state_19347__$1 = (function (){var statearr_19378 = state_19347;
(statearr_19378[(9)] = inst_19341);

return statearr_19378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19347__$1,inst_19342);
} else {
if((state_val_19348 === (2))){
var state_19347__$1 = state_19347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19347__$1,(4),ch);
} else {
if((state_val_19348 === (11))){
var inst_19320 = (state_19347[(8)]);
var inst_19333 = (state_19347[(2)]);
var inst_19317 = inst_19320;
var state_19347__$1 = (function (){var statearr_19379 = state_19347;
(statearr_19379[(10)] = inst_19333);

(statearr_19379[(7)] = inst_19317);

return statearr_19379;
})();
var statearr_19380_20645 = state_19347__$1;
(statearr_19380_20645[(2)] = null);

(statearr_19380_20645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (9))){
var inst_19320 = (state_19347[(8)]);
var state_19347__$1 = state_19347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19347__$1,(11),out,inst_19320);
} else {
if((state_val_19348 === (5))){
var inst_19317 = (state_19347[(7)]);
var inst_19320 = (state_19347[(8)]);
var inst_19324 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19320,inst_19317);
var state_19347__$1 = state_19347;
if(inst_19324){
var statearr_19382_20646 = state_19347__$1;
(statearr_19382_20646[(1)] = (8));

} else {
var statearr_19383_20647 = state_19347__$1;
(statearr_19383_20647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (10))){
var inst_19336 = (state_19347[(2)]);
var state_19347__$1 = state_19347;
var statearr_19384_20648 = state_19347__$1;
(statearr_19384_20648[(2)] = inst_19336);

(statearr_19384_20648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19348 === (8))){
var inst_19317 = (state_19347[(7)]);
var tmp19381 = inst_19317;
var inst_19317__$1 = tmp19381;
var state_19347__$1 = (function (){var statearr_19385 = state_19347;
(statearr_19385[(7)] = inst_19317__$1);

return statearr_19385;
})();
var statearr_19386_20649 = state_19347__$1;
(statearr_19386_20649[(2)] = null);

(statearr_19386_20649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19387 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19387[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19387[(1)] = (1));

return statearr_19387;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19347){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19347);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19388){var ex__17103__auto__ = e19388;
var statearr_19389_20650 = state_19347;
(statearr_19389_20650[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19347[(4)]))){
var statearr_19390_20651 = state_19347;
(statearr_19390_20651[(1)] = cljs.core.first((state_19347[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20652 = state_19347;
state_19347 = G__20652;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_19391 = f__17267__auto__();
(statearr_19391[(6)] = c__17266__auto___20631);

return statearr_19391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19393 = arguments.length;
switch (G__19393) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17266__auto___20655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_19433){
var state_val_19434 = (state_19433[(1)]);
if((state_val_19434 === (7))){
var inst_19429 = (state_19433[(2)]);
var state_19433__$1 = state_19433;
var statearr_19446_20656 = state_19433__$1;
(statearr_19446_20656[(2)] = inst_19429);

(statearr_19446_20656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (1))){
var inst_19394 = (new Array(n));
var inst_19395 = inst_19394;
var inst_19396 = (0);
var state_19433__$1 = (function (){var statearr_19447 = state_19433;
(statearr_19447[(7)] = inst_19395);

(statearr_19447[(8)] = inst_19396);

return statearr_19447;
})();
var statearr_19448_20657 = state_19433__$1;
(statearr_19448_20657[(2)] = null);

(statearr_19448_20657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (4))){
var inst_19400 = (state_19433[(9)]);
var inst_19400__$1 = (state_19433[(2)]);
var inst_19402 = (inst_19400__$1 == null);
var inst_19403 = cljs.core.not(inst_19402);
var state_19433__$1 = (function (){var statearr_19449 = state_19433;
(statearr_19449[(9)] = inst_19400__$1);

return statearr_19449;
})();
if(inst_19403){
var statearr_19450_20658 = state_19433__$1;
(statearr_19450_20658[(1)] = (5));

} else {
var statearr_19451_20659 = state_19433__$1;
(statearr_19451_20659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (15))){
var inst_19423 = (state_19433[(2)]);
var state_19433__$1 = state_19433;
var statearr_19453_20660 = state_19433__$1;
(statearr_19453_20660[(2)] = inst_19423);

(statearr_19453_20660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (13))){
var state_19433__$1 = state_19433;
var statearr_19454_20661 = state_19433__$1;
(statearr_19454_20661[(2)] = null);

(statearr_19454_20661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (6))){
var inst_19396 = (state_19433[(8)]);
var inst_19419 = (inst_19396 > (0));
var state_19433__$1 = state_19433;
if(cljs.core.truth_(inst_19419)){
var statearr_19455_20662 = state_19433__$1;
(statearr_19455_20662[(1)] = (12));

} else {
var statearr_19457_20663 = state_19433__$1;
(statearr_19457_20663[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (3))){
var inst_19431 = (state_19433[(2)]);
var state_19433__$1 = state_19433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19433__$1,inst_19431);
} else {
if((state_val_19434 === (12))){
var inst_19395 = (state_19433[(7)]);
var inst_19421 = cljs.core.vec(inst_19395);
var state_19433__$1 = state_19433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19433__$1,(15),out,inst_19421);
} else {
if((state_val_19434 === (2))){
var state_19433__$1 = state_19433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19433__$1,(4),ch);
} else {
if((state_val_19434 === (11))){
var inst_19413 = (state_19433[(2)]);
var inst_19414 = (new Array(n));
var inst_19395 = inst_19414;
var inst_19396 = (0);
var state_19433__$1 = (function (){var statearr_19458 = state_19433;
(statearr_19458[(7)] = inst_19395);

(statearr_19458[(10)] = inst_19413);

(statearr_19458[(8)] = inst_19396);

return statearr_19458;
})();
var statearr_19459_20665 = state_19433__$1;
(statearr_19459_20665[(2)] = null);

(statearr_19459_20665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (9))){
var inst_19395 = (state_19433[(7)]);
var inst_19411 = cljs.core.vec(inst_19395);
var state_19433__$1 = state_19433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19433__$1,(11),out,inst_19411);
} else {
if((state_val_19434 === (5))){
var inst_19400 = (state_19433[(9)]);
var inst_19395 = (state_19433[(7)]);
var inst_19406 = (state_19433[(11)]);
var inst_19396 = (state_19433[(8)]);
var inst_19405 = (inst_19395[inst_19396] = inst_19400);
var inst_19406__$1 = (inst_19396 + (1));
var inst_19407 = (inst_19406__$1 < n);
var state_19433__$1 = (function (){var statearr_19460 = state_19433;
(statearr_19460[(11)] = inst_19406__$1);

(statearr_19460[(12)] = inst_19405);

return statearr_19460;
})();
if(cljs.core.truth_(inst_19407)){
var statearr_19461_20666 = state_19433__$1;
(statearr_19461_20666[(1)] = (8));

} else {
var statearr_19462_20667 = state_19433__$1;
(statearr_19462_20667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (14))){
var inst_19426 = (state_19433[(2)]);
var inst_19427 = cljs.core.async.close_BANG_(out);
var state_19433__$1 = (function (){var statearr_19464 = state_19433;
(statearr_19464[(13)] = inst_19426);

return statearr_19464;
})();
var statearr_19465_20668 = state_19433__$1;
(statearr_19465_20668[(2)] = inst_19427);

(statearr_19465_20668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (10))){
var inst_19417 = (state_19433[(2)]);
var state_19433__$1 = state_19433;
var statearr_19466_20669 = state_19433__$1;
(statearr_19466_20669[(2)] = inst_19417);

(statearr_19466_20669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (8))){
var inst_19395 = (state_19433[(7)]);
var inst_19406 = (state_19433[(11)]);
var tmp19463 = inst_19395;
var inst_19395__$1 = tmp19463;
var inst_19396 = inst_19406;
var state_19433__$1 = (function (){var statearr_19467 = state_19433;
(statearr_19467[(7)] = inst_19395__$1);

(statearr_19467[(8)] = inst_19396);

return statearr_19467;
})();
var statearr_19468_20670 = state_19433__$1;
(statearr_19468_20670[(2)] = null);

(statearr_19468_20670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19469[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19469[(1)] = (1));

return statearr_19469;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19433){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19433);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19470){var ex__17103__auto__ = e19470;
var statearr_19471_20671 = state_19433;
(statearr_19471_20671[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19433[(4)]))){
var statearr_19472_20672 = state_19433;
(statearr_19472_20672[(1)] = cljs.core.first((state_19433[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20673 = state_19433;
state_19433 = G__20673;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_19474 = f__17267__auto__();
(statearr_19474[(6)] = c__17266__auto___20655);

return statearr_19474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19478 = arguments.length;
switch (G__19478) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17266__auto___20675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_19533){
var state_val_19534 = (state_19533[(1)]);
if((state_val_19534 === (7))){
var inst_19528 = (state_19533[(2)]);
var state_19533__$1 = state_19533;
var statearr_19535_20676 = state_19533__$1;
(statearr_19535_20676[(2)] = inst_19528);

(statearr_19535_20676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (1))){
var inst_19479 = [];
var inst_19480 = inst_19479;
var inst_19481 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19533__$1 = (function (){var statearr_19536 = state_19533;
(statearr_19536[(7)] = inst_19480);

(statearr_19536[(8)] = inst_19481);

return statearr_19536;
})();
var statearr_19537_20677 = state_19533__$1;
(statearr_19537_20677[(2)] = null);

(statearr_19537_20677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (4))){
var inst_19493 = (state_19533[(9)]);
var inst_19493__$1 = (state_19533[(2)]);
var inst_19494 = (inst_19493__$1 == null);
var inst_19495 = cljs.core.not(inst_19494);
var state_19533__$1 = (function (){var statearr_19538 = state_19533;
(statearr_19538[(9)] = inst_19493__$1);

return statearr_19538;
})();
if(inst_19495){
var statearr_19539_20678 = state_19533__$1;
(statearr_19539_20678[(1)] = (5));

} else {
var statearr_19540_20679 = state_19533__$1;
(statearr_19540_20679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (15))){
var inst_19480 = (state_19533[(7)]);
var inst_19520 = cljs.core.vec(inst_19480);
var state_19533__$1 = state_19533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19533__$1,(18),out,inst_19520);
} else {
if((state_val_19534 === (13))){
var inst_19515 = (state_19533[(2)]);
var state_19533__$1 = state_19533;
var statearr_19541_20680 = state_19533__$1;
(statearr_19541_20680[(2)] = inst_19515);

(statearr_19541_20680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (6))){
var inst_19480 = (state_19533[(7)]);
var inst_19517 = inst_19480.length;
var inst_19518 = (inst_19517 > (0));
var state_19533__$1 = state_19533;
if(cljs.core.truth_(inst_19518)){
var statearr_19542_20681 = state_19533__$1;
(statearr_19542_20681[(1)] = (15));

} else {
var statearr_19543_20682 = state_19533__$1;
(statearr_19543_20682[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (17))){
var inst_19525 = (state_19533[(2)]);
var inst_19526 = cljs.core.async.close_BANG_(out);
var state_19533__$1 = (function (){var statearr_19544 = state_19533;
(statearr_19544[(10)] = inst_19525);

return statearr_19544;
})();
var statearr_19545_20683 = state_19533__$1;
(statearr_19545_20683[(2)] = inst_19526);

(statearr_19545_20683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (3))){
var inst_19530 = (state_19533[(2)]);
var state_19533__$1 = state_19533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19533__$1,inst_19530);
} else {
if((state_val_19534 === (12))){
var inst_19480 = (state_19533[(7)]);
var inst_19508 = cljs.core.vec(inst_19480);
var state_19533__$1 = state_19533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19533__$1,(14),out,inst_19508);
} else {
if((state_val_19534 === (2))){
var state_19533__$1 = state_19533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19533__$1,(4),ch);
} else {
if((state_val_19534 === (11))){
var inst_19497 = (state_19533[(11)]);
var inst_19480 = (state_19533[(7)]);
var inst_19493 = (state_19533[(9)]);
var inst_19505 = inst_19480.push(inst_19493);
var tmp19546 = inst_19480;
var inst_19480__$1 = tmp19546;
var inst_19481 = inst_19497;
var state_19533__$1 = (function (){var statearr_19549 = state_19533;
(statearr_19549[(7)] = inst_19480__$1);

(statearr_19549[(8)] = inst_19481);

(statearr_19549[(12)] = inst_19505);

return statearr_19549;
})();
var statearr_19550_20684 = state_19533__$1;
(statearr_19550_20684[(2)] = null);

(statearr_19550_20684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (9))){
var inst_19481 = (state_19533[(8)]);
var inst_19501 = cljs.core.keyword_identical_QMARK_(inst_19481,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19533__$1 = state_19533;
var statearr_19551_20685 = state_19533__$1;
(statearr_19551_20685[(2)] = inst_19501);

(statearr_19551_20685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (5))){
var inst_19497 = (state_19533[(11)]);
var inst_19481 = (state_19533[(8)]);
var inst_19493 = (state_19533[(9)]);
var inst_19498 = (state_19533[(13)]);
var inst_19497__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19493) : f.call(null,inst_19493));
var inst_19498__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19497__$1,inst_19481);
var state_19533__$1 = (function (){var statearr_19552 = state_19533;
(statearr_19552[(11)] = inst_19497__$1);

(statearr_19552[(13)] = inst_19498__$1);

return statearr_19552;
})();
if(inst_19498__$1){
var statearr_19554_20687 = state_19533__$1;
(statearr_19554_20687[(1)] = (8));

} else {
var statearr_19555_20688 = state_19533__$1;
(statearr_19555_20688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (14))){
var inst_19497 = (state_19533[(11)]);
var inst_19493 = (state_19533[(9)]);
var inst_19510 = (state_19533[(2)]);
var inst_19511 = [];
var inst_19512 = inst_19511.push(inst_19493);
var inst_19480 = inst_19511;
var inst_19481 = inst_19497;
var state_19533__$1 = (function (){var statearr_19557 = state_19533;
(statearr_19557[(14)] = inst_19510);

(statearr_19557[(7)] = inst_19480);

(statearr_19557[(8)] = inst_19481);

(statearr_19557[(15)] = inst_19512);

return statearr_19557;
})();
var statearr_19558_20689 = state_19533__$1;
(statearr_19558_20689[(2)] = null);

(statearr_19558_20689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (16))){
var state_19533__$1 = state_19533;
var statearr_19559_20690 = state_19533__$1;
(statearr_19559_20690[(2)] = null);

(statearr_19559_20690[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (10))){
var inst_19503 = (state_19533[(2)]);
var state_19533__$1 = state_19533;
if(cljs.core.truth_(inst_19503)){
var statearr_19560_20691 = state_19533__$1;
(statearr_19560_20691[(1)] = (11));

} else {
var statearr_19561_20692 = state_19533__$1;
(statearr_19561_20692[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (18))){
var inst_19522 = (state_19533[(2)]);
var state_19533__$1 = state_19533;
var statearr_19562_20693 = state_19533__$1;
(statearr_19562_20693[(2)] = inst_19522);

(statearr_19562_20693[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (8))){
var inst_19498 = (state_19533[(13)]);
var state_19533__$1 = state_19533;
var statearr_19563_20694 = state_19533__$1;
(statearr_19563_20694[(2)] = inst_19498);

(statearr_19563_20694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19564[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19564[(1)] = (1));

return statearr_19564;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19533){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19533);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19565){var ex__17103__auto__ = e19565;
var statearr_19566_20697 = state_19533;
(statearr_19566_20697[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19533[(4)]))){
var statearr_19567_20698 = state_19533;
(statearr_19567_20698[(1)] = cljs.core.first((state_19533[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20699 = state_19533;
state_19533 = G__20699;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_19568 = f__17267__auto__();
(statearr_19568[(6)] = c__17266__auto___20675);

return statearr_19568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
