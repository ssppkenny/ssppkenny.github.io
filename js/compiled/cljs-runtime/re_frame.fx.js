goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24139 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24140 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24140);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24228 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24228)){
var new_db_24229 = temp__5804__auto___24228;
var fexpr__24143_24230 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24143_24230.cljs$core$IFn$_invoke$arity$1 ? fexpr__24143_24230.cljs$core$IFn$_invoke$arity$1(new_db_24229) : fexpr__24143_24230.call(null,new_db_24229));
} else {
}

var seq__24146 = cljs.core.seq(effects_without_db);
var chunk__24147 = null;
var count__24148 = (0);
var i__24149 = (0);
while(true){
if((i__24149 < count__24148)){
var vec__24173 = chunk__24147.cljs$core$IIndexed$_nth$arity$2(null,i__24149);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24173,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24173,(1),null);
var temp__5802__auto___24231 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24231)){
var effect_fn_24232 = temp__5802__auto___24231;
(effect_fn_24232.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24232.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24232.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24233 = seq__24146;
var G__24234 = chunk__24147;
var G__24235 = count__24148;
var G__24236 = (i__24149 + (1));
seq__24146 = G__24233;
chunk__24147 = G__24234;
count__24148 = G__24235;
i__24149 = G__24236;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24146);
if(temp__5804__auto__){
var seq__24146__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24146__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24146__$1);
var G__24237 = cljs.core.chunk_rest(seq__24146__$1);
var G__24238 = c__5568__auto__;
var G__24239 = cljs.core.count(c__5568__auto__);
var G__24240 = (0);
seq__24146 = G__24237;
chunk__24147 = G__24238;
count__24148 = G__24239;
i__24149 = G__24240;
continue;
} else {
var vec__24176 = cljs.core.first(seq__24146__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24176,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24176,(1),null);
var temp__5802__auto___24241 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24241)){
var effect_fn_24242 = temp__5802__auto___24241;
(effect_fn_24242.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24242.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24242.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24243 = cljs.core.next(seq__24146__$1);
var G__24244 = null;
var G__24245 = (0);
var G__24246 = (0);
seq__24146 = G__24243;
chunk__24147 = G__24244;
count__24148 = G__24245;
i__24149 = G__24246;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23747__auto___24247 = re_frame.interop.now();
var duration__23748__auto___24248 = (end__23747__auto___24247 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23748__auto___24248,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23747__auto___24247);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24139);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24249 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24249)){
var new_db_24250 = temp__5804__auto___24249;
var fexpr__24179_24251 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24179_24251.cljs$core$IFn$_invoke$arity$1 ? fexpr__24179_24251.cljs$core$IFn$_invoke$arity$1(new_db_24250) : fexpr__24179_24251.call(null,new_db_24250));
} else {
}

var seq__24180 = cljs.core.seq(effects_without_db);
var chunk__24181 = null;
var count__24182 = (0);
var i__24183 = (0);
while(true){
if((i__24183 < count__24182)){
var vec__24190 = chunk__24181.cljs$core$IIndexed$_nth$arity$2(null,i__24183);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24190,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24190,(1),null);
var temp__5802__auto___24252 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24252)){
var effect_fn_24253 = temp__5802__auto___24252;
(effect_fn_24253.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24253.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24253.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24254 = seq__24180;
var G__24255 = chunk__24181;
var G__24256 = count__24182;
var G__24257 = (i__24183 + (1));
seq__24180 = G__24254;
chunk__24181 = G__24255;
count__24182 = G__24256;
i__24183 = G__24257;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24180);
if(temp__5804__auto__){
var seq__24180__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24180__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24180__$1);
var G__24258 = cljs.core.chunk_rest(seq__24180__$1);
var G__24259 = c__5568__auto__;
var G__24260 = cljs.core.count(c__5568__auto__);
var G__24261 = (0);
seq__24180 = G__24258;
chunk__24181 = G__24259;
count__24182 = G__24260;
i__24183 = G__24261;
continue;
} else {
var vec__24193 = cljs.core.first(seq__24180__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24193,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24193,(1),null);
var temp__5802__auto___24262 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24262)){
var effect_fn_24263 = temp__5802__auto___24262;
(effect_fn_24263.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24263.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24263.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24264 = cljs.core.next(seq__24180__$1);
var G__24265 = null;
var G__24266 = (0);
var G__24267 = (0);
seq__24180 = G__24264;
chunk__24181 = G__24265;
count__24182 = G__24266;
i__24183 = G__24267;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24196){
var map__24197 = p__24196;
var map__24197__$1 = cljs.core.__destructure_map(map__24197);
var effect = map__24197__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24197__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24197__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__24198 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24199 = null;
var count__24200 = (0);
var i__24201 = (0);
while(true){
if((i__24201 < count__24200)){
var effect = chunk__24199.cljs$core$IIndexed$_nth$arity$2(null,i__24201);
re_frame.fx.dispatch_later(effect);


var G__24268 = seq__24198;
var G__24269 = chunk__24199;
var G__24270 = count__24200;
var G__24271 = (i__24201 + (1));
seq__24198 = G__24268;
chunk__24199 = G__24269;
count__24200 = G__24270;
i__24201 = G__24271;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24198);
if(temp__5804__auto__){
var seq__24198__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24198__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24198__$1);
var G__24272 = cljs.core.chunk_rest(seq__24198__$1);
var G__24273 = c__5568__auto__;
var G__24274 = cljs.core.count(c__5568__auto__);
var G__24275 = (0);
seq__24198 = G__24272;
chunk__24199 = G__24273;
count__24200 = G__24274;
i__24201 = G__24275;
continue;
} else {
var effect = cljs.core.first(seq__24198__$1);
re_frame.fx.dispatch_later(effect);


var G__24276 = cljs.core.next(seq__24198__$1);
var G__24277 = null;
var G__24278 = (0);
var G__24279 = (0);
seq__24198 = G__24276;
chunk__24199 = G__24277;
count__24200 = G__24278;
i__24201 = G__24279;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__24202 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24203 = null;
var count__24204 = (0);
var i__24205 = (0);
while(true){
if((i__24205 < count__24204)){
var vec__24212 = chunk__24203.cljs$core$IIndexed$_nth$arity$2(null,i__24205);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24212,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24212,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24280 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24280)){
var effect_fn_24281 = temp__5802__auto___24280;
(effect_fn_24281.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24281.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24281.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24282 = seq__24202;
var G__24283 = chunk__24203;
var G__24284 = count__24204;
var G__24285 = (i__24205 + (1));
seq__24202 = G__24282;
chunk__24203 = G__24283;
count__24204 = G__24284;
i__24205 = G__24285;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24202);
if(temp__5804__auto__){
var seq__24202__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24202__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24202__$1);
var G__24286 = cljs.core.chunk_rest(seq__24202__$1);
var G__24287 = c__5568__auto__;
var G__24288 = cljs.core.count(c__5568__auto__);
var G__24289 = (0);
seq__24202 = G__24286;
chunk__24203 = G__24287;
count__24204 = G__24288;
i__24205 = G__24289;
continue;
} else {
var vec__24215 = cljs.core.first(seq__24202__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24215,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24215,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24290 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24290)){
var effect_fn_24291 = temp__5802__auto___24290;
(effect_fn_24291.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24291.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24291.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24292 = cljs.core.next(seq__24202__$1);
var G__24293 = null;
var G__24294 = (0);
var G__24295 = (0);
seq__24202 = G__24292;
chunk__24203 = G__24293;
count__24204 = G__24294;
i__24205 = G__24295;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__24218 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24219 = null;
var count__24220 = (0);
var i__24221 = (0);
while(true){
if((i__24221 < count__24220)){
var event = chunk__24219.cljs$core$IIndexed$_nth$arity$2(null,i__24221);
re_frame.router.dispatch(event);


var G__24296 = seq__24218;
var G__24297 = chunk__24219;
var G__24298 = count__24220;
var G__24299 = (i__24221 + (1));
seq__24218 = G__24296;
chunk__24219 = G__24297;
count__24220 = G__24298;
i__24221 = G__24299;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24218);
if(temp__5804__auto__){
var seq__24218__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24218__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24218__$1);
var G__24300 = cljs.core.chunk_rest(seq__24218__$1);
var G__24301 = c__5568__auto__;
var G__24302 = cljs.core.count(c__5568__auto__);
var G__24303 = (0);
seq__24218 = G__24300;
chunk__24219 = G__24301;
count__24220 = G__24302;
i__24221 = G__24303;
continue;
} else {
var event = cljs.core.first(seq__24218__$1);
re_frame.router.dispatch(event);


var G__24304 = cljs.core.next(seq__24218__$1);
var G__24305 = null;
var G__24306 = (0);
var G__24307 = (0);
seq__24218 = G__24304;
chunk__24219 = G__24305;
count__24220 = G__24306;
i__24221 = G__24307;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24222 = cljs.core.seq(value);
var chunk__24223 = null;
var count__24224 = (0);
var i__24225 = (0);
while(true){
if((i__24225 < count__24224)){
var event = chunk__24223.cljs$core$IIndexed$_nth$arity$2(null,i__24225);
clear_event(event);


var G__24308 = seq__24222;
var G__24309 = chunk__24223;
var G__24310 = count__24224;
var G__24311 = (i__24225 + (1));
seq__24222 = G__24308;
chunk__24223 = G__24309;
count__24224 = G__24310;
i__24225 = G__24311;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24222);
if(temp__5804__auto__){
var seq__24222__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24222__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24222__$1);
var G__24312 = cljs.core.chunk_rest(seq__24222__$1);
var G__24313 = c__5568__auto__;
var G__24314 = cljs.core.count(c__5568__auto__);
var G__24315 = (0);
seq__24222 = G__24312;
chunk__24223 = G__24313;
count__24224 = G__24314;
i__24225 = G__24315;
continue;
} else {
var event = cljs.core.first(seq__24222__$1);
clear_event(event);


var G__24316 = cljs.core.next(seq__24222__$1);
var G__24317 = null;
var G__24318 = (0);
var G__24319 = (0);
seq__24222 = G__24316;
chunk__24223 = G__24317;
count__24224 = G__24318;
i__24225 = G__24319;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24226 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24227 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24227);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23747__auto___24320 = re_frame.interop.now();
var duration__23748__auto___24321 = (end__23747__auto___24320 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23748__auto___24321,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23747__auto___24320);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24226);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
