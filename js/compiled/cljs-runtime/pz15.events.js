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
var vec__13653 = pair;
var prev_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13653,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13653,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-left","pz15.events/timeout-left",-1394673148),(function (p__13663,arg){
var map__13664 = p__13663;
var map__13664__$1 = cljs.core.__destructure_map(map__13664);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13664__$1,new cljs.core.Keyword(null,"event","event",301435442));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13664__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-left","pz15.events/key-left",-945053855),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-right","pz15.events/timeout-right",22649708),(function (p__13665,arg){
var map__13666 = p__13665;
var map__13666__$1 = cljs.core.__destructure_map(map__13666);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13666__$1,new cljs.core.Keyword(null,"event","event",301435442));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13666__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-right","pz15.events/key-right",898237066),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-up","pz15.events/timeout-up",-1261138942),(function (p__13667,arg){
var map__13668 = p__13667;
var map__13668__$1 = cljs.core.__destructure_map(map__13668);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13668__$1,new cljs.core.Keyword(null,"event","event",301435442));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13668__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-up","pz15.events/key-up",-193450930),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-solved","pz15.events/timeout-solved",-73615761),(function (p__13669,arg){
var map__13670 = p__13669;
var map__13670__$1 = cljs.core.__destructure_map(map__13670);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13670__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13670__$1,new cljs.core.Keyword(null,"event","event",301435442));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","stop-solve","pz15.events/stop-solve",896187541),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-down","pz15.events/timeout-down",-1122333238),(function (p__13671,arg){
var map__13672 = p__13671;
var map__13672__$1 = cljs.core.__destructure_map(map__13672);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13672__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13672__$1,new cljs.core.Keyword(null,"event","event",301435442));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-down","pz15.events/key-down",-1790263068),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","stop-solve","pz15.events/stop-solve",896187541),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),false], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","do-solve","pz15.events/do-solve",-492752428),(function (p__13673,arg){
var map__13674 = p__13673;
var map__13674__$1 = cljs.core.__destructure_map(map__13674);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13674__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13674__$1,new cljs.core.Keyword(null,"event","event",301435442));
var solution = pz15.bfs.bfs(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db));
var events = pz15.events.states_to_events(solution);
var fx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__13675,arg__$1){
var vec__13676 = p__13675;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13676,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13676,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),d,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(0)], null)], null)], null);
}),events);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),fx], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","play-solution","pz15.events/play-solution",674303489),(function (p__13679,arg){
var map__13680 = p__13679;
var map__13680__$1 = cljs.core.__destructure_map(map__13680);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13680__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13680__$1,new cljs.core.Keyword(null,"event","event",301435442));
var vec__13681 = event;
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13681,(0),null);
var sol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13681,(1),null);
var events = pz15.events.states_to_events(sol);
var fx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__13684,arg__$1){
var vec__13685 = p__13684;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13685,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13685,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),d,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(0)], null)], null)], null);
}),events);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),fx], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","do-new-solve","pz15.events/do-new-solve",-738758247),(function (p__13688,arg){
var map__13689 = p__13688;
var map__13689__$1 = cljs.core.__destructure_map(map__13689);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13689__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13689__$1,new cljs.core.Keyword(null,"event","event",301435442));
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var c__11670__auto___13706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11671__auto__ = (function (){var switch__11600__auto__ = (function (state_13694){
var state_val_13695 = (state_13694[(1)]);
if((state_val_13695 === (1))){
var inst_13690 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db);
var inst_13691 = (function (){return (function (s){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","play-solution","pz15.events/play-solution",674303489),pz15.bfs.bfs(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db))], null));
});
})();
var inst_13692 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(c,inst_13690,inst_13691);
var state_13694__$1 = state_13694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13694__$1,inst_13692);
} else {
return null;
}
});
return (function() {
var pz15$events$state_machine__11601__auto__ = null;
var pz15$events$state_machine__11601__auto____0 = (function (){
var statearr_13696 = [null,null,null,null,null,null,null];
(statearr_13696[(0)] = pz15$events$state_machine__11601__auto__);

(statearr_13696[(1)] = (1));

return statearr_13696;
});
var pz15$events$state_machine__11601__auto____1 = (function (state_13694){
while(true){
var ret_value__11602__auto__ = (function (){try{while(true){
var result__11603__auto__ = switch__11600__auto__(state_13694);
if(cljs.core.keyword_identical_QMARK_(result__11603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11603__auto__;
}
break;
}
}catch (e13697){var ex__11604__auto__ = e13697;
var statearr_13698_13711 = state_13694;
(statearr_13698_13711[(2)] = ex__11604__auto__);


if(cljs.core.seq((state_13694[(4)]))){
var statearr_13699_13712 = state_13694;
(statearr_13699_13712[(1)] = cljs.core.first((state_13694[(4)])));

} else {
throw ex__11604__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13713 = state_13694;
state_13694 = G__13713;
continue;
} else {
return ret_value__11602__auto__;
}
break;
}
});
pz15$events$state_machine__11601__auto__ = function(state_13694){
switch(arguments.length){
case 0:
return pz15$events$state_machine__11601__auto____0.call(this);
case 1:
return pz15$events$state_machine__11601__auto____1.call(this,state_13694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pz15$events$state_machine__11601__auto__.cljs$core$IFn$_invoke$arity$0 = pz15$events$state_machine__11601__auto____0;
pz15$events$state_machine__11601__auto__.cljs$core$IFn$_invoke$arity$1 = pz15$events$state_machine__11601__auto____1;
return pz15$events$state_machine__11601__auto__;
})()
})();
var state__11672__auto__ = (function (){var statearr_13700 = f__11671__auto__();
(statearr_13700[(6)] = c__11670__auto___13706);

return statearr_13700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11672__auto__);
}));


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","new-solve","pz15.events/new-solve",-1876562329),(function (p__13701,arg){
var map__13702 = p__13701;
var map__13702__$1 = cljs.core.__destructure_map(map__13702);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13702__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13702__$1,new cljs.core.Keyword(null,"event","event",301435442));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","do-new-solve","pz15.events/do-new-solve",-738758247),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","solve","pz15.events/solve",-328198452),(function (p__13703,arg){
var map__13704 = p__13703;
var map__13704__$1 = cljs.core.__destructure_map(map__13704);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13704__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13704__$1,new cljs.core.Keyword(null,"event","event",301435442));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","do-solve","pz15.events/do-solve",-492752428),(0)], null)], null)], null)], null)], null);
}));
pz15.events.move = (function pz15$events$move(db,event,f){
var flag = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),(0))) || (cljs.core.not(new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(db))));
var new_state = (function (){var G__13705 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13705) : f.call(null,G__13705));
})();
if(flag){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),new_state);
} else {
return db;
}
});
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
