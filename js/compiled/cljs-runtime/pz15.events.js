goog.provide('pz15.events');
if((typeof pz15 !== 'undefined') && (typeof pz15.events !== 'undefined') && (typeof pz15.events.UP !== 'undefined')){
} else {
pz15.events.UP = (1);
}
if((typeof pz15 !== 'undefined') && (typeof pz15.events !== 'undefined') && (typeof pz15.events.DOWN !== 'undefined')){
} else {
pz15.events.DOWN = (-1);
}
if((typeof pz15 !== 'undefined') && (typeof pz15.events !== 'undefined') && (typeof pz15.events.LEFT !== 'undefined')){
} else {
pz15.events.LEFT = (10);
}
if((typeof pz15 !== 'undefined') && (typeof pz15.events !== 'undefined') && (typeof pz15.events.RIGHT !== 'undefined')){
} else {
pz15.events.RIGHT = (-10);
}
pz15.events.states_move = (function pz15$events$states_move(pair){
var vec__17318 = pair;
var prev_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17318,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17318,(1),null);
var prev_board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(prev_state);
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
var prev_zero = new cljs.core.Keyword(null,"zero","zero",-858964576).cljs$core$IFn$_invoke$arity$1(prev_state);
var zero = new cljs.core.Keyword(null,"zero","zero",-858964576).cljs$core$IFn$_invoke$arity$1(state);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zero,prev_zero)))){
return (zero - prev_zero);
} else {
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,zero);
var prev_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(prev_board,zero);
var zero_prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_row,(0));
var zero_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,(0));
return ((zero_n - zero_prev) * (10));
}
});
pz15.events.action_to_event = (function pz15$events$action_to_event(a){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,(1))){
return new cljs.core.Keyword("pz15.events","timeout-up","pz15.events/timeout-up",-1261138942);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,(-1))){
return new cljs.core.Keyword("pz15.events","timeout-down","pz15.events/timeout-down",-1122333238);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,(10))){
return new cljs.core.Keyword("pz15.events","timeout-left","pz15.events/timeout-left",-1394673148);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,(-10))){
return new cljs.core.Keyword("pz15.events","timeout-right","pz15.events/timeout-right",22649708);
} else {
return null;
}
}
}
}
});
pz15.events.result_fx = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
pz15.events.states_to_events = (function pz15$events$states_to_events(states){
var pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.rest(states),states);
var events = cljs.core.reverse(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.events.action_to_event,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.events.states_move,pairs)));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[b,((500) * a)],null));
}),events),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","timeout-solved","pz15.events/timeout-solved",-73615761),(cljs.core.count(states) * (500))], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-left","pz15.events/timeout-left",-1394673148),(function (p__17321,arg){
var map__17322 = p__17321;
var map__17322__$1 = cljs.core.__destructure_map(map__17322);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17322__$1,new cljs.core.Keyword(null,"event","event",301435442));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17322__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-left","pz15.events/key-left",-945053855),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-right","pz15.events/timeout-right",22649708),(function (p__17323,arg){
var map__17324 = p__17323;
var map__17324__$1 = cljs.core.__destructure_map(map__17324);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17324__$1,new cljs.core.Keyword(null,"event","event",301435442));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17324__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-right","pz15.events/key-right",898237066),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-up","pz15.events/timeout-up",-1261138942),(function (p__17325,arg){
var map__17326 = p__17325;
var map__17326__$1 = cljs.core.__destructure_map(map__17326);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17326__$1,new cljs.core.Keyword(null,"event","event",301435442));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17326__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-up","pz15.events/key-up",-193450930),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-solved","pz15.events/timeout-solved",-73615761),(function (p__17327,arg){
var map__17328 = p__17327;
var map__17328__$1 = cljs.core.__destructure_map(map__17328);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17328__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17328__$1,new cljs.core.Keyword(null,"event","event",301435442));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","stop-solve","pz15.events/stop-solve",896187541),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-down","pz15.events/timeout-down",-1122333238),(function (p__17329,arg){
var map__17330 = p__17329;
var map__17330__$1 = cljs.core.__destructure_map(map__17330);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17330__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17330__$1,new cljs.core.Keyword(null,"event","event",301435442));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-down","pz15.events/key-down",-1790263068),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","stop-solve","pz15.events/stop-solve",896187541),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),false], 0));
}));
pz15.events.solution_to_fx = (function pz15$events$solution_to_fx(solution){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__17331,arg){
var vec__17332 = p__17331;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17332,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17332,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),d,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(0)], null)], null)], null);
}),pz15.events.states_to_events(solution));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","do-solve","pz15.events/do-solve",-492752428),(function (p__17335,arg){
var map__17336 = p__17335;
var map__17336__$1 = cljs.core.__destructure_map(map__17336);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17336__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17336__$1,new cljs.core.Keyword(null,"event","event",301435442));
var a = (new Parallel(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db)));
var sp = a.spawn((function (x){
return pz15.bfs.bfs(x);
}));
sp.then((function (x){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.deref(pz15.events.result_fx)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","play-solution","pz15.events/play-solution",674303489),(function (p__17337,arg){
var map__17338 = p__17337;
var map__17338__$1 = cljs.core.__destructure_map(map__17338);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17338__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17338__$1,new cljs.core.Keyword(null,"event","event",301435442));
var vec__17339 = event;
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17339,(0),null);
var sol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17339,(1),null);
var events = pz15.events.states_to_events(sol);
var fx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__17342,arg__$1){
var vec__17343 = p__17342;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17343,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17343,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),d,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(0)], null)], null)], null);
}),events);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),fx], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","do-new-solve","pz15.events/do-new-solve",-738758247),(function (p__17346,_){
var map__17347 = p__17346;
var map__17347__$1 = cljs.core.__destructure_map(map__17347);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17347__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","bfs","pz15.events/bfs",-640167240),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","new-solve","pz15.events/new-solve",-1876562329),(function (p__17348,_){
var map__17349 = p__17348;
var map__17349__$1 = cljs.core.__destructure_map(map__17349);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17349__$1,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_(new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(500),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","do-new-solve","pz15.events/do-new-solve",-738758247),(0)], null)], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","solve","pz15.events/solve",-328198452),(function (p__17350,_){
var map__17351 = p__17350;
var map__17351__$1 = cljs.core.__destructure_map(map__17351);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17351__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","do-solve","pz15.events/do-solve",-492752428),(0)], null)], null)], null)], null)], null);
}));
pz15.events.move = (function pz15$events$move(db,event,f){
var flag = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),(0))) || (cljs.core.not(new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(db))));
var new_state = (function (){var G__17352 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17352) : f.call(null,G__17352));
})();
if(flag){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),new_state);
} else {
return db;
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","bfs","pz15.events/bfs",-640167240),(function (p__17353,_){
var map__17354 = p__17353;
var map__17354__$1 = cljs.core.__destructure_map(map__17354);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17354__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17354__$1,new cljs.core.Keyword(null,"event","event",301435442));
var start_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1));
var start_node = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),start_state,new cljs.core.Keyword(null,"length","length",588987862),(0)], null);
var reached = cljs.core.PersistentArrayMap.createAsIfByAssoc([start_state,start_node]);
var queue = tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start_node,(0)], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","bfs-step","pz15.events/bfs-step",-1289628030),reached,queue], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","bfs-step","pz15.events/bfs-step",-1289628030),(function (p__17355,_){
var map__17356 = p__17355;
var map__17356__$1 = cljs.core.__destructure_map(map__17356);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17356__$1,new cljs.core.Keyword(null,"event","event",301435442));
var reached = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1));
var queue = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(2));
if((((!(cljs.core.empty_QMARK_(queue)))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pz15.bfs.target_state,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(queue),(0))))))))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(queue),(0));
var next_result = pz15.bfs.expand_with_dists(n,reached,cljs.core.pop(queue));
var new_reached = new cljs.core.Keyword(null,"reached","reached",826384279).cljs$core$IFn$_invoke$arity$1(next_result);
var new_queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(next_result);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","bfs-step","pz15.events/bfs-step",-1289628030),new_reached,new_queue], null));
} else {
var solution = pz15.bfs.node_to_list(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(queue),(0)));
return re_frame.core.dispatch(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","play-solution","pz15.events/play-solution",674303489),solution], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),true], null)));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","key-down","pz15.events/key-down",-1790263068),(function (db,event){
return pz15.events.move(db,event,pz15.db.move_down);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","key-up","pz15.events/key-up",-193450930),(function (db,event){
return pz15.events.move(db,event,pz15.db.move_up);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","key-right","pz15.events/key-right",898237066),(function (db,event){
return pz15.events.move(db,event,pz15.db.move_right);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","key-left","pz15.events/key-left",-945053855),(function (db,event){
return pz15.events.move(db,event,pz15.db.move_left);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","shuffle","pz15.events/shuffle",349000693),(function (db){
var new_state = pz15.db.random_state();
if(cljs.core.not(new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"state","state",-1988618099),new_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false], 0));
} else {
return db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","initialize-db","pz15.events/initialize-db",603333367),(function (_,___$1){
return pz15.db.default_db;
}));

//# sourceMappingURL=pz15.events.js.map
