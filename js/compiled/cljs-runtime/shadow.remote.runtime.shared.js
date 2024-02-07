goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17427){
var map__17428 = p__17427;
var map__17428__$1 = cljs.core.__destructure_map(map__17428);
var runtime = map__17428__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17428__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_17544 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_17544)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__17452 = runtime;
var G__17453 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_17544);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__17452,G__17453) : shadow.remote.runtime.shared.process.call(null,G__17452,G__17453));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17454,res){
var map__17455 = p__17454;
var map__17455__$1 = cljs.core.__destructure_map(map__17455);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17455__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17455__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17456 = res;
var G__17456__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17456,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17456);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17456__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17456__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17458 = arguments.length;
switch (G__17458) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17462,msg,handlers,timeout_after_ms){
var map__17463 = p__17462;
var map__17463__$1 = cljs.core.__destructure_map(map__17463);
var runtime = map__17463__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17463__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17546 = arguments.length;
var i__5770__auto___17547 = (0);
while(true){
if((i__5770__auto___17547 < len__5769__auto___17546)){
args__5775__auto__.push((arguments[i__5770__auto___17547]));

var G__17548 = (i__5770__auto___17547 + (1));
i__5770__auto___17547 = G__17548;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17481,ev,args){
var map__17482 = p__17481;
var map__17482__$1 = cljs.core.__destructure_map(map__17482);
var runtime = map__17482__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17482__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17483 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17486 = null;
var count__17487 = (0);
var i__17488 = (0);
while(true){
if((i__17488 < count__17487)){
var ext = chunk__17486.cljs$core$IIndexed$_nth$arity$2(null,i__17488);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17549 = seq__17483;
var G__17550 = chunk__17486;
var G__17551 = count__17487;
var G__17552 = (i__17488 + (1));
seq__17483 = G__17549;
chunk__17486 = G__17550;
count__17487 = G__17551;
i__17488 = G__17552;
continue;
} else {
var G__17553 = seq__17483;
var G__17554 = chunk__17486;
var G__17555 = count__17487;
var G__17556 = (i__17488 + (1));
seq__17483 = G__17553;
chunk__17486 = G__17554;
count__17487 = G__17555;
i__17488 = G__17556;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17483);
if(temp__5804__auto__){
var seq__17483__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17483__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17483__$1);
var G__17557 = cljs.core.chunk_rest(seq__17483__$1);
var G__17558 = c__5568__auto__;
var G__17559 = cljs.core.count(c__5568__auto__);
var G__17560 = (0);
seq__17483 = G__17557;
chunk__17486 = G__17558;
count__17487 = G__17559;
i__17488 = G__17560;
continue;
} else {
var ext = cljs.core.first(seq__17483__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17561 = cljs.core.next(seq__17483__$1);
var G__17562 = null;
var G__17563 = (0);
var G__17564 = (0);
seq__17483 = G__17561;
chunk__17486 = G__17562;
count__17487 = G__17563;
i__17488 = G__17564;
continue;
} else {
var G__17565 = cljs.core.next(seq__17483__$1);
var G__17566 = null;
var G__17567 = (0);
var G__17568 = (0);
seq__17483 = G__17565;
chunk__17486 = G__17566;
count__17487 = G__17567;
i__17488 = G__17568;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17477){
var G__17478 = cljs.core.first(seq17477);
var seq17477__$1 = cljs.core.next(seq17477);
var G__17479 = cljs.core.first(seq17477__$1);
var seq17477__$2 = cljs.core.next(seq17477__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17478,G__17479,seq17477__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17493,p__17494){
var map__17495 = p__17493;
var map__17495__$1 = cljs.core.__destructure_map(map__17495);
var runtime = map__17495__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17495__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17496 = p__17494;
var map__17496__$1 = cljs.core.__destructure_map(map__17496);
var msg = map__17496__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17496__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17497 = cljs.core.deref(state_ref);
var map__17497__$1 = cljs.core.__destructure_map(map__17497);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17497__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17497__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17499,msg){
var map__17500 = p__17499;
var map__17500__$1 = cljs.core.__destructure_map(map__17500);
var runtime = map__17500__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17500__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17504,key,p__17505){
var map__17506 = p__17504;
var map__17506__$1 = cljs.core.__destructure_map(map__17506);
var state = map__17506__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17506__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17507 = p__17505;
var map__17507__$1 = cljs.core.__destructure_map(map__17507);
var spec = map__17507__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17507__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17508,key,spec){
var map__17509 = p__17508;
var map__17509__$1 = cljs.core.__destructure_map(map__17509);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17509__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17510_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17510_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17511_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17511_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17512_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17512_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17513_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17513_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17514_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17514_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17517,key){
var map__17518 = p__17517;
var map__17518__$1 = cljs.core.__destructure_map(map__17518);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17518__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17519,msg){
var map__17520 = p__17519;
var map__17520__$1 = cljs.core.__destructure_map(map__17520);
var runtime = map__17520__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17520__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17523,p__17524){
var map__17525 = p__17523;
var map__17525__$1 = cljs.core.__destructure_map(map__17525);
var runtime = map__17525__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17525__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17526 = p__17524;
var map__17526__$1 = cljs.core.__destructure_map(map__17526);
var msg = map__17526__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17526__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17526__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17531 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17533 = null;
var count__17534 = (0);
var i__17535 = (0);
while(true){
if((i__17535 < count__17534)){
var map__17541 = chunk__17533.cljs$core$IIndexed$_nth$arity$2(null,i__17535);
var map__17541__$1 = cljs.core.__destructure_map(map__17541);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17541__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17570 = seq__17531;
var G__17571 = chunk__17533;
var G__17572 = count__17534;
var G__17573 = (i__17535 + (1));
seq__17531 = G__17570;
chunk__17533 = G__17571;
count__17534 = G__17572;
i__17535 = G__17573;
continue;
} else {
var G__17574 = seq__17531;
var G__17575 = chunk__17533;
var G__17576 = count__17534;
var G__17577 = (i__17535 + (1));
seq__17531 = G__17574;
chunk__17533 = G__17575;
count__17534 = G__17576;
i__17535 = G__17577;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17531);
if(temp__5804__auto__){
var seq__17531__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17531__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17531__$1);
var G__17578 = cljs.core.chunk_rest(seq__17531__$1);
var G__17579 = c__5568__auto__;
var G__17580 = cljs.core.count(c__5568__auto__);
var G__17581 = (0);
seq__17531 = G__17578;
chunk__17533 = G__17579;
count__17534 = G__17580;
i__17535 = G__17581;
continue;
} else {
var map__17542 = cljs.core.first(seq__17531__$1);
var map__17542__$1 = cljs.core.__destructure_map(map__17542);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17542__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17582 = cljs.core.next(seq__17531__$1);
var G__17583 = null;
var G__17584 = (0);
var G__17585 = (0);
seq__17531 = G__17582;
chunk__17533 = G__17583;
count__17534 = G__17584;
i__17535 = G__17585;
continue;
} else {
var G__17586 = cljs.core.next(seq__17531__$1);
var G__17587 = null;
var G__17588 = (0);
var G__17589 = (0);
seq__17531 = G__17586;
chunk__17533 = G__17587;
count__17534 = G__17588;
i__17535 = G__17589;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
