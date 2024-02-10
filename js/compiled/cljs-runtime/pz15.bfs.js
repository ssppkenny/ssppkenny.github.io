goog.provide('pz15.bfs');
if((typeof pz15 !== 'undefined') && (typeof pz15.bfs !== 'undefined') && (typeof pz15.bfs.UP !== 'undefined')){
} else {
pz15.bfs.UP = (1);
}
if((typeof pz15 !== 'undefined') && (typeof pz15.bfs !== 'undefined') && (typeof pz15.bfs.DOWN !== 'undefined')){
} else {
pz15.bfs.DOWN = (-1);
}
if((typeof pz15 !== 'undefined') && (typeof pz15.bfs !== 'undefined') && (typeof pz15.bfs.LEFT !== 'undefined')){
} else {
pz15.bfs.LEFT = (10);
}
if((typeof pz15 !== 'undefined') && (typeof pz15.bfs !== 'undefined') && (typeof pz15.bfs.RIGHT !== 'undefined')){
} else {
pz15.bfs.RIGHT = (-10);
}
pz15.bfs.map_values = (function pz15$bfs$map_values(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13018){
var vec__13019 = p__13018;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13019,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13019,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}),m));
});
pz15.bfs.with_index = (function pz15$bfs$with_index(p__13022){
var vec__13023 = p__13022;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13023,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13023,(1),null);
var v = vec__13023;
return pz15.bfs.map_values((function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,a], null);
}),y);
});
pz15.bfs.sum_seq = (function pz15$bfs$sum_seq(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,s);
});
pz15.bfs.transpose_coords = (function pz15$bfs$transpose_coords(coords){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13026){
var vec__13027 = p__13026;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13027,(0),null);
var vec__13030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13027,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13030,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13030,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)], null);
}),coords);
});
pz15.bfs.num_to_row = (function pz15$bfs$num_to_row(n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return (0);
} else {
return (cljs.core.quot((n - (1)),(4)) + (1));
}
});
pz15.bfs.row_to_freqs = (function pz15$bfs$row_to_freqs(row){
return cljs.core.frequencies(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.bfs.num_to_row,cljs.core.keys(row)));
});
pz15.bfs.state_to_rows = (function pz15$bfs$state_to_rows(p__13033){
var map__13034 = p__13033;
var map__13034__$1 = cljs.core.__destructure_map(map__13034);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13034__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13034__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var new_board = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.bfs.row_to_freqs,board);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"zero","zero",-858964576),zero], null);
});
pz15.bfs.state_coords = (function pz15$bfs$state_coords(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.bfs.with_index,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return x;
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(s)))));
});
pz15.bfs.transpose_state = (function pz15$bfs$transpose_state(s){
var coords = pz15.bfs.state_coords(s);
var new_zero = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(coords,(0)),(1));
var new_board = (function (){var tc = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.seq(cljs.core.group_by((function (p__13035){
var vec__13036 = p__13035;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13036,(0),null);
var vec__13039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13036,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13039,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13039,(1),null);
return x;
}),pz15.bfs.transpose_coords(coords))));
var iter__5523__auto__ = (function pz15$bfs$transpose_state_$_iter__13042(s__13043){
return (new cljs.core.LazySeq(null,(function (){
var s__13043__$1 = s__13043;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13043__$1);
if(temp__5804__auto__){
var s__13043__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13043__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13043__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13045 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13044 = (0);
while(true){
if((i__13044 < size__5522__auto__)){
var vec__13046 = cljs.core._nth(c__5521__auto__,i__13044);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13046,(1),null);
cljs.core.chunk_append(b__13045,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__13044,vec__13046,k,v,c__5521__auto__,size__5522__auto__,b__13045,s__13043__$2,temp__5804__auto__,tc,coords,new_zero){
return (function (p__13049){
var vec__13050 = p__13049;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050,(0),null);
var vec__13053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13053,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13053,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([x,b]);
});})(i__13044,vec__13046,k,v,c__5521__auto__,size__5522__auto__,b__13045,s__13043__$2,temp__5804__auto__,tc,coords,new_zero))
,v)));

var G__13114 = (i__13044 + (1));
i__13044 = G__13114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13045),pz15$bfs$transpose_state_$_iter__13042(cljs.core.chunk_rest(s__13043__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13045),null);
}
} else {
var vec__13056 = cljs.core.first(s__13043__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(1),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__13056,k,v,s__13043__$2,temp__5804__auto__,tc,coords,new_zero){
return (function (p__13059){
var vec__13060 = p__13059;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13060,(0),null);
var vec__13063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13060,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([x,b]);
});})(vec__13056,k,v,s__13043__$2,temp__5804__auto__,tc,coords,new_zero))
,v)),pz15$bfs$transpose_state_$_iter__13042(cljs.core.rest(s__13043__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(tc);
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"zero","zero",-858964576),new_zero], null);
});
pz15.bfs.num_to_col = (function pz15$bfs$num_to_col(n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.rem(n,(4)),(0))){
return (4);
} else {
return cljs.core.rem(n,(4));
}
}
});
pz15.bfs.col_to_freqs = (function pz15$bfs$col_to_freqs(row){
return cljs.core.frequencies(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.bfs.num_to_col,cljs.core.keys(row)));
});
pz15.bfs.state_to_cols = (function pz15$bfs$state_to_cols(p__13066){
var map__13067 = p__13066;
var map__13067__$1 = cljs.core.__destructure_map(map__13067);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13067__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13067__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var new_board = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.bfs.col_to_freqs,board);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"zero","zero",-858964576),zero], null);
});
if((typeof pz15 !== 'undefined') && (typeof pz15.bfs !== 'undefined') && (typeof pz15.bfs.target_state !== 'undefined')){
} else {
pz15.bfs.target_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.zipmap(x,cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((4),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.rem((x + (1)),(16));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)))))),new cljs.core.Keyword(null,"zero","zero",-858964576),(3)], null);
}
pz15.bfs.hor_dist = (function pz15$bfs$hor_dist(s){
var row_state = pz15.bfs.state_to_rows(s);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pz15.db.dists,row_state);
});
pz15.bfs.vert_dist = (function pz15$bfs$vert_dist(s){
var ts = pz15.bfs.transpose_state(s);
var row_state = pz15.bfs.state_to_cols(ts);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pz15.db.dists,row_state);
});
pz15.bfs.walk_dist = (function pz15$bfs$walk_dist(s){
return (pz15.bfs.hor_dist(s) + pz15.bfs.vert_dist(s));
});
pz15.bfs.manh_dist = (function pz15$bfs$manh_dist(s,t){
var c1 = pz15.bfs.state_coords(s);
var c2 = pz15.bfs.state_coords(t);
return pz15.bfs.sum_seq((function (){var iter__5523__auto__ = (function pz15$bfs$manh_dist_$_iter__13068(s__13069){
return (new cljs.core.LazySeq(null,(function (){
var s__13069__$1 = s__13069;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13069__$1);
if(temp__5804__auto__){
var s__13069__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13069__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13069__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13071 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13070 = (0);
while(true){
if((i__13070 < size__5522__auto__)){
var vec__13072 = cljs.core._nth(c__5521__auto__,i__13070);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13072,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13072,(1),null);
cljs.core.chunk_append(b__13071,(function (){var vec__13075 = v;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13075,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13075,(1),null);
var vec__13078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c2,k);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13078,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13078,(1),null);
return (cljs.core.abs((x1 - x2)) + cljs.core.abs((y1 - y2)));
})());

var G__13117 = (i__13070 + (1));
i__13070 = G__13117;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13071),pz15$bfs$manh_dist_$_iter__13068(cljs.core.chunk_rest(s__13069__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13071),null);
}
} else {
var vec__13081 = cljs.core.first(s__13069__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13081,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13081,(1),null);
return cljs.core.cons((function (){var vec__13084 = v;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13084,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13084,(1),null);
var vec__13087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c2,k);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087,(1),null);
return (cljs.core.abs((x1 - x2)) + cljs.core.abs((y1 - y2)));
})(),pz15$bfs$manh_dist_$_iter__13068(cljs.core.rest(s__13069__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(c1);
})());
});
pz15.bfs.inside_QMARK_ = (function pz15$bfs$inside_QMARK_(x){
return (((x >= (0))) && ((x < (4))));
});
pz15.bfs.sort_row_by_value = (function pz15$bfs$sort_row_by_value(row){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (a){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
}),cljs.core.vec(row)));
});
pz15.bfs.switch_hor = (function pz15$bfs$switch_hor(board,zero,pos){
var zero_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,zero);
var zero_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(zero_row,(0));
var a = cljs.core.vec(zero_row);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,pos);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,zero_pos);
var vec__13090 = x;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13090,(0),null);
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13090,(1),null);
var vec__13093 = y;
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,zero,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,i1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,i1], null)),i2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,i2], null))));
});
pz15.bfs.switch_vert = (function pz15$bfs$switch_vert(board,zero,pos){
var vv = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,board);
var zero_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,zero),(0));
var zero_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vv,zero);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vv,pos);
var vec__13096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(zero_row,zero_pos);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13096,(0),null);
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13096,(1),null);
var vec__13099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row,zero_pos);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13099,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13099,(1),null);
var new_zero_row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zero_row,i1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,i2], null)));
var new_row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,i1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,i1], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,zero,new_zero_row),pos,new_row);
});
pz15.bfs.next_node_for_action = (function pz15$bfs$next_node_for_action(p__13102,action){
var map__13103 = p__13102;
var map__13103__$1 = cljs.core.__destructure_map(map__13103);
var n = map__13103__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13103__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13103__$1,new cljs.core.Keyword(null,"length","length",588987862));
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
var zero = new cljs.core.Keyword(null,"zero","zero",-858964576).cljs$core$IFn$_invoke$arity$1(state);
var zero_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,zero);
var zero_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(zero_row,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,(1))){
if(pz15.bfs.inside_QMARK_((zero + (1)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prev","prev",-1597069226),n,new cljs.core.Keyword(null,"length","length",588987862),(length + (1)),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),pz15.bfs.switch_vert(board,zero,(zero + (1))),new cljs.core.Keyword(null,"zero","zero",-858964576),(zero + (1))], null)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,(-1))){
if(pz15.bfs.inside_QMARK_((zero - (1)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prev","prev",-1597069226),n,new cljs.core.Keyword(null,"length","length",588987862),(length + (1)),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),pz15.bfs.switch_vert(board,zero,(zero - (1))),new cljs.core.Keyword(null,"zero","zero",-858964576),(zero - (1))], null)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,(10))){
if(pz15.bfs.inside_QMARK_((zero_pos + (1)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prev","prev",-1597069226),n,new cljs.core.Keyword(null,"length","length",588987862),(length + (1)),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),pz15.bfs.switch_hor(board,zero,(zero_pos + (1))),new cljs.core.Keyword(null,"zero","zero",-858964576),zero], null)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
if(pz15.bfs.inside_QMARK_((zero_pos - (1)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prev","prev",-1597069226),n,new cljs.core.Keyword(null,"length","length",588987862),(length + (1)),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),pz15.bfs.switch_hor(board,zero,(zero_pos - (1))),new cljs.core.Keyword(null,"zero","zero",-858964576),zero], null)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}

}
}
}
});
pz15.bfs.expand_with_dists = (function pz15$bfs$expand_with_dists(node,reached,q){
var next_nodes = cljs.core.flatten((function (){var iter__5523__auto__ = (function pz15$bfs$expand_with_dists_$_iter__13104(s__13105){
return (new cljs.core.LazySeq(null,(function (){
var s__13105__$1 = s__13105;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13105__$1);
if(temp__5804__auto__){
var s__13105__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13105__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13105__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13107 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13106 = (0);
while(true){
if((i__13106 < size__5522__auto__)){
var action = cljs.core._nth(c__5521__auto__,i__13106);
cljs.core.chunk_append(b__13107,pz15.bfs.next_node_for_action(node,action));

var G__13126 = (i__13106 + (1));
i__13106 = G__13126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13107),pz15$bfs$expand_with_dists_$_iter__13104(cljs.core.chunk_rest(s__13105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13107),null);
}
} else {
var action = cljs.core.first(s__13105__$2);
return cljs.core.cons(pz15.bfs.next_node_for_action(node,action),pz15$bfs$expand_with_dists_$_iter__13104(cljs.core.rest(s__13105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(10),(-10)], null));
})());
var nn = next_nodes;
var p = q;
var r = reached;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(nn),(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"queue","queue",1455835879),p,new cljs.core.Keyword(null,"reached","reached",826384279),r], null);
} else {
var vec__13111 = nn;
var seq__13112 = cljs.core.seq(vec__13111);
var first__13113 = cljs.core.first(seq__13112);
var seq__13112__$1 = cljs.core.next(seq__13112);
var n = first__13113;
var ns = seq__13112__$1;
var s = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n);
var new_prio = ((new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(n) + pz15.bfs.walk_dist(s)) + (((2) * pz15.bfs.manh_dist(s,pz15.bfs.target_state)) / (3)));
var new_vals = (((!(cljs.core.contains_QMARK_(r,s))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reached","reached",826384279),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,s,n),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,n,new_prio)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reached","reached",826384279),r,new cljs.core.Keyword(null,"queue","queue",1455835879),p], null));
var new_q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(new_vals);
var new_r = new cljs.core.Keyword(null,"reached","reached",826384279).cljs$core$IFn$_invoke$arity$1(new_vals);
var G__13127 = ns;
var G__13128 = new_q;
var G__13129 = new_r;
nn = G__13127;
p = G__13128;
r = G__13129;
continue;
}
break;
}
});
pz15.bfs.node_to_list = (function pz15$bfs$node_to_list(node){
var n = node;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((!((!((new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(n) == null)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n));
} else {
var G__13130 = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(n);
var G__13131 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n));
n = G__13130;
acc = G__13131;
continue;
}
break;
}
});
pz15.bfs.bfs = (function pz15$bfs$bfs(start_state){
var start_node = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),start_state,new cljs.core.Keyword(null,"length","length",588987862),(0)], null);
var q = tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start_node,(0)], 0));
var reached = cljs.core.PersistentArrayMap.createAsIfByAssoc([start_state,start_node]);
var r = reached;
var p = q;
while(true){
if((((!(cljs.core.empty_QMARK_(p)))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pz15.bfs.target_state,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(p),(0))))))))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(p),(0));
var next_result = pz15.bfs.expand_with_dists(n,r,cljs.core.pop(p));
var new_reached = new cljs.core.Keyword(null,"reached","reached",826384279).cljs$core$IFn$_invoke$arity$1(next_result);
var new_queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(next_result);
var G__13132 = new_reached;
var G__13133 = new_queue;
r = G__13132;
p = G__13133;
continue;
} else {
return pz15.bfs.node_to_list(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(p),(0)));
}
break;
}
});

//# sourceMappingURL=pz15.bfs.js.map
