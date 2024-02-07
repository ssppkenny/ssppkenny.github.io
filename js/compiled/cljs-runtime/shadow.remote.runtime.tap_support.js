goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20913,p__20914){
var map__20916 = p__20913;
var map__20916__$1 = cljs.core.__destructure_map(map__20916);
var svc = map__20916__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20916__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20916__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20916__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20917 = p__20914;
var map__20917__$1 = cljs.core.__destructure_map(map__20917);
var msg = map__20917__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20917__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20917__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20917__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20917__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20949,p__20950){
var map__20952 = p__20949;
var map__20952__$1 = cljs.core.__destructure_map(map__20952);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20952__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20958 = p__20950;
var map__20958__$1 = cljs.core.__destructure_map(map__20958);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20958__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20978,p__20979){
var map__20981 = p__20978;
var map__20981__$1 = cljs.core.__destructure_map(map__20981);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20981__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20981__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20982 = p__20979;
var map__20982__$1 = cljs.core.__destructure_map(map__20982);
var msg = map__20982__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20982__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20986,tid){
var map__20987 = p__20986;
var map__20987__$1 = cljs.core.__destructure_map(map__20987);
var svc = map__20987__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20987__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20994 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20995 = null;
var count__20996 = (0);
var i__20997 = (0);
while(true){
if((i__20997 < count__20996)){
var vec__21030 = chunk__20995.cljs$core$IIndexed$_nth$arity$2(null,i__20997);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21030,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21030,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21123 = seq__20994;
var G__21124 = chunk__20995;
var G__21125 = count__20996;
var G__21126 = (i__20997 + (1));
seq__20994 = G__21123;
chunk__20995 = G__21124;
count__20996 = G__21125;
i__20997 = G__21126;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20994);
if(temp__5804__auto__){
var seq__20994__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20994__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20994__$1);
var G__21128 = cljs.core.chunk_rest(seq__20994__$1);
var G__21129 = c__5568__auto__;
var G__21130 = cljs.core.count(c__5568__auto__);
var G__21131 = (0);
seq__20994 = G__21128;
chunk__20995 = G__21129;
count__20996 = G__21130;
i__20997 = G__21131;
continue;
} else {
var vec__21056 = cljs.core.first(seq__20994__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21056,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21056,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21135 = cljs.core.next(seq__20994__$1);
var G__21136 = null;
var G__21137 = (0);
var G__21138 = (0);
seq__20994 = G__21135;
chunk__20995 = G__21136;
count__20996 = G__21137;
i__20997 = G__21138;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20989_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20989_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20990_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20990_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20991_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20991_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20992_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20992_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21091){
var map__21092 = p__21091;
var map__21092__$1 = cljs.core.__destructure_map(map__21092);
var svc = map__21092__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21092__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21092__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
