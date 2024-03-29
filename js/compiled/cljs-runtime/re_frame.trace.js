goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__23769){
var map__23770 = p__23769;
var map__23770__$1 = cljs.core.__destructure_map(map__23770);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23770__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23770__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23770__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23770__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__23774_23804 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23775_23805 = null;
var count__23776_23806 = (0);
var i__23777_23807 = (0);
while(true){
if((i__23777_23807 < count__23776_23806)){
var vec__23788_23808 = chunk__23775_23805.cljs$core$IIndexed$_nth$arity$2(null,i__23777_23807);
var k_23809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23788_23808,(0),null);
var cb_23810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23788_23808,(1),null);
try{var G__23793_23811 = cljs.core.deref(re_frame.trace.traces);
(cb_23810.cljs$core$IFn$_invoke$arity$1 ? cb_23810.cljs$core$IFn$_invoke$arity$1(G__23793_23811) : cb_23810.call(null,G__23793_23811));
}catch (e23792){var e_23812 = e23792;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23809,"while storing",cljs.core.deref(re_frame.trace.traces),e_23812], 0));
}

var G__23813 = seq__23774_23804;
var G__23814 = chunk__23775_23805;
var G__23815 = count__23776_23806;
var G__23816 = (i__23777_23807 + (1));
seq__23774_23804 = G__23813;
chunk__23775_23805 = G__23814;
count__23776_23806 = G__23815;
i__23777_23807 = G__23816;
continue;
} else {
var temp__5804__auto___23817 = cljs.core.seq(seq__23774_23804);
if(temp__5804__auto___23817){
var seq__23774_23818__$1 = temp__5804__auto___23817;
if(cljs.core.chunked_seq_QMARK_(seq__23774_23818__$1)){
var c__5568__auto___23819 = cljs.core.chunk_first(seq__23774_23818__$1);
var G__23820 = cljs.core.chunk_rest(seq__23774_23818__$1);
var G__23821 = c__5568__auto___23819;
var G__23822 = cljs.core.count(c__5568__auto___23819);
var G__23823 = (0);
seq__23774_23804 = G__23820;
chunk__23775_23805 = G__23821;
count__23776_23806 = G__23822;
i__23777_23807 = G__23823;
continue;
} else {
var vec__23794_23824 = cljs.core.first(seq__23774_23818__$1);
var k_23825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23794_23824,(0),null);
var cb_23826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23794_23824,(1),null);
try{var G__23798_23827 = cljs.core.deref(re_frame.trace.traces);
(cb_23826.cljs$core$IFn$_invoke$arity$1 ? cb_23826.cljs$core$IFn$_invoke$arity$1(G__23798_23827) : cb_23826.call(null,G__23798_23827));
}catch (e23797){var e_23828 = e23797;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23825,"while storing",cljs.core.deref(re_frame.trace.traces),e_23828], 0));
}

var G__23829 = cljs.core.next(seq__23774_23818__$1);
var G__23830 = null;
var G__23831 = (0);
var G__23832 = (0);
seq__23774_23804 = G__23829;
chunk__23775_23805 = G__23830;
count__23776_23806 = G__23831;
i__23777_23807 = G__23832;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
