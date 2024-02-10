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
var vec__14771 = pair;
var prev_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14771,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14771,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-left","pz15.events/timeout-left",-1394673148),(function (p__14774,arg){
var map__14775 = p__14774;
var map__14775__$1 = cljs.core.__destructure_map(map__14775);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14775__$1,new cljs.core.Keyword(null,"event","event",301435442));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14775__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-left","pz15.events/key-left",-945053855),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-right","pz15.events/timeout-right",22649708),(function (p__14776,arg){
var map__14777 = p__14776;
var map__14777__$1 = cljs.core.__destructure_map(map__14777);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14777__$1,new cljs.core.Keyword(null,"event","event",301435442));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14777__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-right","pz15.events/key-right",898237066),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-up","pz15.events/timeout-up",-1261138942),(function (p__14778,arg){
var map__14779 = p__14778;
var map__14779__$1 = cljs.core.__destructure_map(map__14779);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14779__$1,new cljs.core.Keyword(null,"event","event",301435442));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14779__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-up","pz15.events/key-up",-193450930),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-solved","pz15.events/timeout-solved",-73615761),(function (p__14780,arg){
var map__14781 = p__14780;
var map__14781__$1 = cljs.core.__destructure_map(map__14781);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14781__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14781__$1,new cljs.core.Keyword(null,"event","event",301435442));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),true], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","stop-solve","pz15.events/stop-solve",896187541),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","timeout-down","pz15.events/timeout-down",-1122333238),(function (p__14782,arg){
var map__14783 = p__14782;
var map__14783__$1 = cljs.core.__destructure_map(map__14783);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14783__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14783__$1,new cljs.core.Keyword(null,"event","event",301435442));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-down","pz15.events/key-down",-1790263068),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","stop-solve","pz15.events/stop-solve",896187541),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"solving","solving",-175043197),false], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","do-solve","pz15.events/do-solve",-492752428),(function (p__14784,arg){
var map__14785 = p__14784;
var map__14785__$1 = cljs.core.__destructure_map(map__14785);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14785__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14785__$1,new cljs.core.Keyword(null,"event","event",301435442));
var solution = pz15.bfs.bfs(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db));
var events = pz15.events.states_to_events(solution);
var fx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__14786,arg__$1){
var vec__14787 = p__14786;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14787,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14787,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),d,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(0)], null)], null)], null);
}),events);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),fx], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","play-solution","pz15.events/play-solution",674303489),(function (p__14790,arg){
var map__14791 = p__14790;
var map__14791__$1 = cljs.core.__destructure_map(map__14791);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14791__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14791__$1,new cljs.core.Keyword(null,"event","event",301435442));
var vec__14792 = event;
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14792,(0),null);
var sol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14792,(1),null);
var events = pz15.events.states_to_events(sol);
var fx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__14795,arg__$1){
var vec__14796 = p__14795;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14796,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14796,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),d,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(0)], null)], null)], null);
}),events);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),false),new cljs.core.Keyword(null,"fx","fx",-1237829572),fx], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","do-new-solve","pz15.events/do-new-solve",-738758247),(function (p__14799,arg){
var map__14800 = p__14799;
var map__14800__$1 = cljs.core.__destructure_map(map__14800);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14800__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14800__$1,new cljs.core.Keyword(null,"event","event",301435442));
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var c__11670__auto___14816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11671__auto__ = (function (){var switch__11573__auto__ = (function (state_14805){
var state_val_14806 = (state_14805[(1)]);
if((state_val_14806 === (1))){
var inst_14801 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db);
var inst_14802 = (function (){return (function (s){
console.log(["putting into channel",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","play-solution","pz15.events/play-solution",674303489),pz15.bfs.bfs(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db))], null));
});
})();
var inst_14803 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(c,inst_14801,inst_14802);
var state_14805__$1 = state_14805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14805__$1,inst_14803);
} else {
return null;
}
});
return (function() {
var pz15$events$state_machine__11574__auto__ = null;
var pz15$events$state_machine__11574__auto____0 = (function (){
var statearr_14807 = [null,null,null,null,null,null,null];
(statearr_14807[(0)] = pz15$events$state_machine__11574__auto__);

(statearr_14807[(1)] = (1));

return statearr_14807;
});
var pz15$events$state_machine__11574__auto____1 = (function (state_14805){
while(true){
var ret_value__11575__auto__ = (function (){try{while(true){
var result__11576__auto__ = switch__11573__auto__(state_14805);
if(cljs.core.keyword_identical_QMARK_(result__11576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11576__auto__;
}
break;
}
}catch (e14808){var ex__11577__auto__ = e14808;
var statearr_14809_14817 = state_14805;
(statearr_14809_14817[(2)] = ex__11577__auto__);


if(cljs.core.seq((state_14805[(4)]))){
var statearr_14810_14818 = state_14805;
(statearr_14810_14818[(1)] = cljs.core.first((state_14805[(4)])));

} else {
throw ex__11577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14819 = state_14805;
state_14805 = G__14819;
continue;
} else {
return ret_value__11575__auto__;
}
break;
}
});
pz15$events$state_machine__11574__auto__ = function(state_14805){
switch(arguments.length){
case 0:
return pz15$events$state_machine__11574__auto____0.call(this);
case 1:
return pz15$events$state_machine__11574__auto____1.call(this,state_14805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pz15$events$state_machine__11574__auto__.cljs$core$IFn$_invoke$arity$0 = pz15$events$state_machine__11574__auto____0;
pz15$events$state_machine__11574__auto__.cljs$core$IFn$_invoke$arity$1 = pz15$events$state_machine__11574__auto____1;
return pz15$events$state_machine__11574__auto__;
})()
})();
var state__11672__auto__ = (function (){var statearr_14811 = f__11671__auto__();
(statearr_14811[(6)] = c__11670__auto___14816);

return statearr_14811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11672__auto__);
}));


console.log("after put");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","new-solve","pz15.events/new-solve",-1876562329),(function (p__14812,arg){
var map__14813 = p__14812;
var map__14813__$1 = cljs.core.__destructure_map(map__14813);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14813__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14813__$1,new cljs.core.Keyword(null,"event","event",301435442));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","do-new-solve","pz15.events/do-new-solve",-738758247),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pz15.events","solve","pz15.events/solve",-328198452),(function (p__14814,arg){
var map__14815 = p__14814;
var map__14815__$1 = cljs.core.__destructure_map(map__14815);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14815__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14815__$1,new cljs.core.Keyword(null,"event","event",301435442));
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
