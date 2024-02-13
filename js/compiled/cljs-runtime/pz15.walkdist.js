goog.provide('pz15.walkdist');
pz15.walkdist.UP = (1);
pz15.walkdist.DOWN = (-1);
pz15.walkdist.inside_QMARK_ = (function pz15$walkdist$inside_QMARK_(x){
return (((x >= (0))) && ((x < (4))));
});
pz15.walkdist.target_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.zipmap(x,cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((4),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.rem((x + (1)),(16));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)))))),new cljs.core.Keyword(null,"zero","zero",-858964576),(3)], null);
pz15.walkdist.inc_map = (function pz15$walkdist$inc_map(m,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,(0));
if((v > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(v - (1))),(0),(1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k),(0),(1));
}
});
pz15.walkdist.change_zero_row = (function pz15$walkdist$change_zero_row(m,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,(0));
if((v > (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,(0)),k,(v + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,(0)),k,(1));
}
});
pz15.walkdist.map_values = (function pz15$walkdist$map_values(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13370){
var vec__13371 = p__13370;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13371,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13371,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}),m));
});
pz15.walkdist.with_index = (function pz15$walkdist$with_index(p__13374){
var vec__13375 = p__13374;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13375,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13375,(1),null);
var v = vec__13375;
return pz15.walkdist.map_values((function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,a], null);
}),y);
});
pz15.walkdist.state_coords = (function pz15$walkdist$state_coords(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.walkdist.with_index,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return x;
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(s)))));
});
pz15.walkdist.transpose_coords = (function pz15$walkdist$transpose_coords(coords){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13378){
var vec__13379 = p__13378;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13379,(0),null);
var vec__13382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13379,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13382,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13382,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)], null);
}),coords);
});
pz15.walkdist.transpose_state = (function pz15$walkdist$transpose_state(s){
var coords = pz15.walkdist.state_coords(s);
var new_zero = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(coords,(0)),(1));
var new_board = (function (){var tc = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.seq(cljs.core.group_by((function (p__13385){
var vec__13386 = p__13385;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13386,(0),null);
var vec__13389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13386,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13389,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13389,(1),null);
return x;
}),pz15.walkdist.transpose_coords(coords))));
var iter__5523__auto__ = (function pz15$walkdist$transpose_state_$_iter__13392(s__13393){
return (new cljs.core.LazySeq(null,(function (){
var s__13393__$1 = s__13393;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13393__$1);
if(temp__5804__auto__){
var s__13393__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13393__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13393__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13395 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13394 = (0);
while(true){
if((i__13394 < size__5522__auto__)){
var vec__13396 = cljs.core._nth(c__5521__auto__,i__13394);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13396,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13396,(1),null);
cljs.core.chunk_append(b__13395,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__13394,vec__13396,k,v,c__5521__auto__,size__5522__auto__,b__13395,s__13393__$2,temp__5804__auto__,tc,coords,new_zero){
return (function (p__13399){
var vec__13400 = p__13399;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13400,(0),null);
var vec__13403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13400,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13403,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13403,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([x,b]);
});})(i__13394,vec__13396,k,v,c__5521__auto__,size__5522__auto__,b__13395,s__13393__$2,temp__5804__auto__,tc,coords,new_zero))
,v)));

var G__13468 = (i__13394 + (1));
i__13394 = G__13468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13395),pz15$walkdist$transpose_state_$_iter__13392(cljs.core.chunk_rest(s__13393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13395),null);
}
} else {
var vec__13406 = cljs.core.first(s__13393__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13406,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13406,(1),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__13406,k,v,s__13393__$2,temp__5804__auto__,tc,coords,new_zero){
return (function (p__13409){
var vec__13410 = p__13409;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13410,(0),null);
var vec__13413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13410,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13413,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13413,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([x,b]);
});})(vec__13406,k,v,s__13393__$2,temp__5804__auto__,tc,coords,new_zero))
,v)),pz15$walkdist$transpose_state_$_iter__13392(cljs.core.rest(s__13393__$2)));
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
pz15.walkdist.sum_seq = (function pz15$walkdist$sum_seq(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,s);
});
pz15.walkdist.num_to_row = (function pz15$walkdist$num_to_row(n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return (0);
} else {
return (cljs.core.quot((n - (1)),(4)) + (1));
}
});
pz15.walkdist.num_to_col = (function pz15$walkdist$num_to_col(n){
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
pz15.walkdist.row_to_freqs = (function pz15$walkdist$row_to_freqs(row){
return cljs.core.frequencies(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.walkdist.num_to_row,cljs.core.keys(row)));
});
pz15.walkdist.col_to_freqs = (function pz15$walkdist$col_to_freqs(row){
return cljs.core.frequencies(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.walkdist.num_to_col,cljs.core.keys(row)));
});
pz15.walkdist.state_to_rows = (function pz15$walkdist$state_to_rows(p__13416){
var map__13417 = p__13416;
var map__13417__$1 = cljs.core.__destructure_map(map__13417);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13417__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13417__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var new_board = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.walkdist.row_to_freqs,board);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"zero","zero",-858964576),zero], null);
});
pz15.walkdist.state_to_cols = (function pz15$walkdist$state_to_cols(p__13418){
var map__13419 = p__13418;
var map__13419__$1 = cljs.core.__destructure_map(map__13419);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13419__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13419__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var new_board = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.walkdist.col_to_freqs,board);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"zero","zero",-858964576),zero], null);
});
pz15.walkdist.manh_dist = (function pz15$walkdist$manh_dist(s,t){
var c1 = pz15.walkdist.state_coords(s);
var c2 = pz15.walkdist.state_coords(t);
return pz15.walkdist.sum_seq((function (){var iter__5523__auto__ = (function pz15$walkdist$manh_dist_$_iter__13420(s__13421){
return (new cljs.core.LazySeq(null,(function (){
var s__13421__$1 = s__13421;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13421__$1);
if(temp__5804__auto__){
var s__13421__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13421__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13421__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13423 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13422 = (0);
while(true){
if((i__13422 < size__5522__auto__)){
var vec__13424 = cljs.core._nth(c__5521__auto__,i__13422);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13424,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13424,(1),null);
cljs.core.chunk_append(b__13423,(function (){var vec__13427 = v;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13427,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13427,(1),null);
var vec__13430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c2,k);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13430,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13430,(1),null);
return (cljs.core.abs((x1 - x2)) + cljs.core.abs((y1 - y2)));
})());

var G__13469 = (i__13422 + (1));
i__13422 = G__13469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13423),pz15$walkdist$manh_dist_$_iter__13420(cljs.core.chunk_rest(s__13421__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13423),null);
}
} else {
var vec__13433 = cljs.core.first(s__13421__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13433,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13433,(1),null);
return cljs.core.cons((function (){var vec__13436 = v;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13436,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13436,(1),null);
var vec__13439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c2,k);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13439,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13439,(1),null);
return (cljs.core.abs((x1 - x2)) + cljs.core.abs((y1 - y2)));
})(),pz15$walkdist$manh_dist_$_iter__13420(cljs.core.rest(s__13421__$2)));
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
pz15.walkdist.next_node = (function pz15$walkdist$next_node(p__13442,action){
var map__13443 = p__13442;
var map__13443__$1 = cljs.core.__destructure_map(map__13443);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13443__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13443__$1,new cljs.core.Keyword(null,"length","length",588987862));
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
var zero = new cljs.core.Keyword(null,"zero","zero",-858964576).cljs$core$IFn$_invoke$arity$1(state);
var new_pos = (zero + action);
var ret_val = ((pz15.walkdist.inside_QMARK_(new_pos))?(function (){var new_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,new_pos);
var uniq_elts = cljs.core.set(cljs.core.keys(new_row));
var cur_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,zero);
var new_nodes = (function (){var iter__5523__auto__ = (function pz15$walkdist$next_node_$_iter__13444(s__13445){
return (new cljs.core.LazySeq(null,(function (){
var s__13445__$1 = s__13445;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13445__$1);
if(temp__5804__auto__){
var s__13445__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13445__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13445__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13447 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13446 = (0);
while(true){
if((i__13446 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__13446);
cljs.core.chunk_append(b__13447,(function (){var new_board = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,new_pos,pz15.walkdist.inc_map(new_row,x)),zero,pz15.walkdist.change_zero_row(cur_row,x)),new cljs.core.Keyword(null,"zero","zero",-858964576),new_pos], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new_board,new cljs.core.Keyword(null,"length","length",588987862),(length + (1))], null);
})());

var G__13477 = (i__13446 + (1));
i__13446 = G__13477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13447),pz15$walkdist$next_node_$_iter__13444(cljs.core.chunk_rest(s__13445__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13447),null);
}
} else {
var x = cljs.core.first(s__13445__$2);
return cljs.core.cons((function (){var new_board = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,new_pos,pz15.walkdist.inc_map(new_row,x)),zero,pz15.walkdist.change_zero_row(cur_row,x)),new cljs.core.Keyword(null,"zero","zero",-858964576),new_pos], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new_board,new cljs.core.Keyword(null,"length","length",588987862),(length + (1))], null);
})(),pz15$walkdist$next_node_$_iter__13444(cljs.core.rest(s__13445__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(uniq_elts);
})();
return cljs.core.vec(new_nodes);
})():cljs.core.PersistentVector.EMPTY);
return ret_val;
});
pz15.walkdist.expand = (function pz15$walkdist$expand(node,reached,q){
var next_nodes = cljs.core.flatten((function (){var iter__5523__auto__ = (function pz15$walkdist$expand_$_iter__13448(s__13449){
return (new cljs.core.LazySeq(null,(function (){
var s__13449__$1 = s__13449;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13449__$1);
if(temp__5804__auto__){
var s__13449__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13449__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13449__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13451 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13450 = (0);
while(true){
if((i__13450 < size__5522__auto__)){
var action = cljs.core._nth(c__5521__auto__,i__13450);
cljs.core.chunk_append(b__13451,pz15.walkdist.next_node(node,action));

var G__13481 = (i__13450 + (1));
i__13450 = G__13481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13451),pz15$walkdist$expand_$_iter__13448(cljs.core.chunk_rest(s__13449__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13451),null);
}
} else {
var action = cljs.core.first(s__13449__$2);
return cljs.core.cons(pz15.walkdist.next_node(node,action),pz15$walkdist$expand_$_iter__13448(cljs.core.rest(s__13449__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null));
})());
var nn = next_nodes;
var p = q;
var r = reached;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(nn),(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"queue","queue",1455835879),p,new cljs.core.Keyword(null,"reached","reached",826384279),r], null);
} else {
var vec__13455 = nn;
var seq__13456 = cljs.core.seq(vec__13455);
var first__13457 = cljs.core.first(seq__13456);
var seq__13456__$1 = cljs.core.next(seq__13456);
var n = first__13457;
var ns = seq__13456__$1;
var s = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n);
var new_vals = (((!(cljs.core.contains_QMARK_(r,s))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reached","reached",826384279),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,s,n),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,n,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(n))], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reached","reached",826384279),r,new cljs.core.Keyword(null,"queue","queue",1455835879),p], null));
var new_q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(new_vals);
var new_r = new cljs.core.Keyword(null,"reached","reached",826384279).cljs$core$IFn$_invoke$arity$1(new_vals);
var G__13486 = ns;
var G__13487 = new_q;
var G__13488 = new_r;
nn = G__13486;
p = G__13487;
r = G__13488;
continue;
}
break;
}
});
pz15.walkdist.get_dists = (function pz15$walkdist$get_dists(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function pz15$walkdist$get_dists_$_iter__13458(s__13459){
return (new cljs.core.LazySeq(null,(function (){
var s__13459__$1 = s__13459;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13459__$1);
if(temp__5804__auto__){
var s__13459__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13459__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13459__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13461 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13460 = (0);
while(true){
if((i__13460 < size__5522__auto__)){
var vec__13462 = cljs.core._nth(c__5521__auto__,i__13460);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13462,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13462,(1),null);
cljs.core.chunk_append(b__13461,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((function (i__13460,vec__13462,k,v,c__5521__auto__,size__5522__auto__,b__13461,s__13459__$2,temp__5804__auto__){
return (function (x){
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(x);
});})(i__13460,vec__13462,k,v,c__5521__auto__,size__5522__auto__,b__13461,s__13459__$2,temp__5804__auto__))
(v)], null));

var G__13489 = (i__13460 + (1));
i__13460 = G__13489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13461),pz15$walkdist$get_dists_$_iter__13458(cljs.core.chunk_rest(s__13459__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13461),null);
}
} else {
var vec__13465 = cljs.core.first(s__13459__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13465,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13465,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((function (vec__13465,k,v,s__13459__$2,temp__5804__auto__){
return (function (x){
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(x);
});})(vec__13465,k,v,s__13459__$2,temp__5804__auto__))
(v)], null),pz15$walkdist$get_dists_$_iter__13458(cljs.core.rest(s__13459__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(m);
})());
});
pz15.walkdist.node_to_list = (function pz15$walkdist$node_to_list(node){
var n = node;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((!((!((new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(n) == null)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n));
} else {
var G__13493 = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(n);
var G__13494 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n));
n = G__13493;
acc = G__13494;
continue;
}
break;
}
});
pz15.walkdist.state_to_string = (function pz15$walkdist$state_to_string(s){
var smaps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.vals(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),clojure.set.map_invert(x)));
}),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(s));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",smaps);
});
pz15.walkdist.solution = (function pz15$walkdist$solution(){
var start_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [(1),(4)], null),new cljs.core.PersistentArrayMap(null, 1, [(2),(4)], null),new cljs.core.PersistentArrayMap(null, 1, [(3),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [(4),(3),(0),(1)], null)], null),new cljs.core.Keyword(null,"zero","zero",-858964576),(3)], null);
var start_node = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),start_state,new cljs.core.Keyword(null,"length","length",588987862),(0),new cljs.core.Keyword(null,"prev","prev",-1597069226),null], null);
var q = tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start_node,(0)], 0));
var reached = cljs.core.PersistentArrayMap.createAsIfByAssoc([start_state,start_node]);
var r = reached;
var p = q;
while(true){
if((!(cljs.core.empty_QMARK_(p)))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(p),(0));
var next_result = pz15.walkdist.expand(n,r,cljs.core.pop(p));
var new_reached = new cljs.core.Keyword(null,"reached","reached",826384279).cljs$core$IFn$_invoke$arity$1(next_result);
var new_queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(next_result);
var G__13498 = new_reached;
var G__13499 = new_queue;
r = G__13498;
p = G__13499;
continue;
} else {
return pz15.walkdist.get_dists(r);
}
break;
}
});
if((typeof pz15 !== 'undefined') && (typeof pz15.walkdist !== 'undefined') && (typeof pz15.walkdist.dists !== 'undefined')){
} else {
pz15.walkdist.dists = pz15.walkdist.solution();
}

//# sourceMappingURL=pz15.walkdist.js.map
