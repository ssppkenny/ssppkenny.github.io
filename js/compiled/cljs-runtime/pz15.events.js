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
var vec__13725 = pair;
var prev_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13725,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13725,(1),null);
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
pz15.events.states_to_events = (function pz15$events$states_to_events(states){
var pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.rest(states),states);
var events = cljs.core.reverse(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.events.action_to_event,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.events.states_move,pairs)));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[b,((500) * a)],null));
}),events),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","timeout-solved","pz15.events/timeout-solved",-73615761),(cljs.core.count(states) * (500))], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-left","pz15.events/timeout-left",-1394673148),(function (p__13728,arg){
var map__13729 = p__13728;
var map__13729__$1 = cljs.core.__destructure_map(map__13729);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13729__$1,new cljs.core.Keyword(null,"event","event",301435442));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13729__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-left","pz15.events/key-left",-945053855),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-right","pz15.events/timeout-right",22649708),(function (p__13730,arg){
var map__13731 = p__13730;
var map__13731__$1 = cljs.core.__destructure_map(map__13731);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13731__$1,new cljs.core.Keyword(null,"event","event",301435442));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13731__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-right","pz15.events/key-right",898237066),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-up","pz15.events/timeout-up",-1261138942),(function (p__13732,arg){
var map__13733 = p__13732;
var map__13733__$1 = cljs.core.__destructure_map(map__13733);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13733__$1,new cljs.core.Keyword(null,"event","event",301435442));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13733__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-up","pz15.events/key-up",-193450930),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-solved","pz15.events/timeout-solved",-73615761),(function (p__13734,arg){
var map__13735 = p__13734;
var map__13735__$1 = cljs.core.__destructure_map(map__13735);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,new cljs.core.Keyword(null,"event","event",301435442));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","stop-solve","pz15.events/stop-solve",896187541),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-down","pz15.events/timeout-down",-1122333238),(function (p__13736,arg){
var map__13737 = p__13736;
var map__13737__$1 = cljs.core.__destructure_map(map__13737);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,new cljs.core.Keyword(null,"event","event",301435442));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-down","pz15.events/key-down",-1790263068),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","stop-solve","pz15.events/stop-solve",896187541),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),false], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","do-solve","pz15.events/do-solve",-492752428),(function (p__13738,arg){
var map__13739 = p__13738;
var map__13739__$1 = cljs.core.__destructure_map(map__13739);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13739__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13739__$1,new cljs.core.Keyword(null,"event","event",301435442));
var solution = pz15.bfs.bfs(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db));
var events = pz15.events.states_to_events(solution);
var fx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__13740,arg__$1){
var vec__13741 = p__13740;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13741,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13741,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),d,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(0)], null)], null)], null);
}),events);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),fx], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","solve","pz15.events/solve",-328198452),(function (p__13744,arg){
var map__13745 = p__13744;
var map__13745__$1 = cljs.core.__destructure_map(map__13745);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13745__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13745__$1,new cljs.core.Keyword(null,"event","event",301435442));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","do-solve","pz15.events/do-solve",-492752428),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","key-down","pz15.events/key-down",-1790263068),(function (db){
var new_state = pz15.db.move_down(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),(function (a){
return new_state;
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","key-up","pz15.events/key-up",-193450930),(function (db){
var new_state = pz15.db.move_up(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),(function (a){
return new_state;
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","key-right","pz15.events/key-right",898237066),(function (db){
var new_state = pz15.db.move_right(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),(function (a){
return new_state;
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","key-left","pz15.events/key-left",-945053855),(function (db){
var new_state = pz15.db.move_left(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),(function (a){
return new_state;
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","shuffle","pz15.events/shuffle",349000693),(function (db){
var new_state = pz15.db.random_state();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"state","state",-1988618099),new_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","initialize-db","pz15.events/initialize-db",603333367),(function (_,___$1){
return pz15.db.default_db;
}));

//# sourceMappingURL=pz15.events.js.map
