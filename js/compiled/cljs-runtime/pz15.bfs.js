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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14744){
var vec__14745 = p__14744;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14745,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14745,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}),m));
});
pz15.bfs.with_index = (function pz15$bfs$with_index(p__14748){
var vec__14749 = p__14748;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14749,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14749,(1),null);
var v = vec__14749;
return pz15.bfs.map_values((function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,a], null);
}),y);
});
pz15.bfs.sum_seq = (function pz15$bfs$sum_seq(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,s);
});
pz15.bfs.transpose_coords = (function pz15$bfs$transpose_coords(coords){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14752){
var vec__14753 = p__14752;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14753,(0),null);
var vec__14756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14753,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14756,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14756,(1),null);
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
pz15.bfs.state_to_rows = (function pz15$bfs$state_to_rows(p__14759){
var map__14760 = p__14759;
var map__14760__$1 = cljs.core.__destructure_map(map__14760);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14760__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14760__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
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
var new_board = (function (){var tc = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.seq(cljs.core.group_by((function (p__14761){
var vec__14762 = p__14761;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14762,(0),null);
var vec__14765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14762,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14765,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14765,(1),null);
return x;
}),pz15.bfs.transpose_coords(coords))));
var iter__5523__auto__ = (function pz15$bfs$transpose_state_$_iter__14768(s__14769){
return (new cljs.core.LazySeq(null,(function (){
var s__14769__$1 = s__14769;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14769__$1);
if(temp__5804__auto__){
var s__14769__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14769__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14769__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14771 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14770 = (0);
while(true){
if((i__14770 < size__5522__auto__)){
var vec__14772 = cljs.core._nth(c__5521__auto__,i__14770);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14772,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14772,(1),null);
cljs.core.chunk_append(b__14771,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__14770,vec__14772,k,v,c__5521__auto__,size__5522__auto__,b__14771,s__14769__$2,temp__5804__auto__,tc,coords,new_zero){
return (function (p__14775){
var vec__14776 = p__14775;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14776,(0),null);
var vec__14779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14776,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14779,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14779,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([x,b]);
});})(i__14770,vec__14772,k,v,c__5521__auto__,size__5522__auto__,b__14771,s__14769__$2,temp__5804__auto__,tc,coords,new_zero))
,v)));

var G__14840 = (i__14770 + (1));
i__14770 = G__14840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14771),pz15$bfs$transpose_state_$_iter__14768(cljs.core.chunk_rest(s__14769__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14771),null);
}
} else {
var vec__14782 = cljs.core.first(s__14769__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14782,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14782,(1),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__14782,k,v,s__14769__$2,temp__5804__auto__,tc,coords,new_zero){
return (function (p__14785){
var vec__14786 = p__14785;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14786,(0),null);
var vec__14789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14786,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14789,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14789,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([x,b]);
});})(vec__14782,k,v,s__14769__$2,temp__5804__auto__,tc,coords,new_zero))
,v)),pz15$bfs$transpose_state_$_iter__14768(cljs.core.rest(s__14769__$2)));
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
pz15.bfs.state_to_cols = (function pz15$bfs$state_to_cols(p__14792){
var map__14793 = p__14792;
var map__14793__$1 = cljs.core.__destructure_map(map__14793);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14793__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14793__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
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
return pz15.bfs.sum_seq((function (){var iter__5523__auto__ = (function pz15$bfs$manh_dist_$_iter__14794(s__14795){
return (new cljs.core.LazySeq(null,(function (){
var s__14795__$1 = s__14795;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14795__$1);
if(temp__5804__auto__){
var s__14795__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14795__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14795__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14797 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14796 = (0);
while(true){
if((i__14796 < size__5522__auto__)){
var vec__14798 = cljs.core._nth(c__5521__auto__,i__14796);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14798,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14798,(1),null);
cljs.core.chunk_append(b__14797,(function (){var vec__14801 = v;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14801,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14801,(1),null);
var vec__14804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c2,k);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14804,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14804,(1),null);
return (cljs.core.abs((x1 - x2)) + cljs.core.abs((y1 - y2)));
})());

var G__14841 = (i__14796 + (1));
i__14796 = G__14841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14797),pz15$bfs$manh_dist_$_iter__14794(cljs.core.chunk_rest(s__14795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14797),null);
}
} else {
var vec__14807 = cljs.core.first(s__14795__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14807,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14807,(1),null);
return cljs.core.cons((function (){var vec__14810 = v;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14810,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14810,(1),null);
var vec__14813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c2,k);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14813,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14813,(1),null);
return (cljs.core.abs((x1 - x2)) + cljs.core.abs((y1 - y2)));
})(),pz15$bfs$manh_dist_$_iter__14794(cljs.core.rest(s__14795__$2)));
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
var vec__14816 = x;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14816,(0),null);
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14816,(1),null);
var vec__14819 = y;
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14819,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14819,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,zero,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,i1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,i1], null)),i2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,i2], null))));
});
pz15.bfs.switch_vert = (function pz15$bfs$switch_vert(board,zero,pos){
var vv = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,board);
var zero_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,zero),(0));
var zero_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vv,zero);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vv,pos);
var vec__14822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(zero_row,zero_pos);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14822,(0),null);
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14822,(1),null);
var vec__14825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row,zero_pos);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14825,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14825,(1),null);
var new_zero_row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zero_row,i1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,i2], null)));
var new_row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,i1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,i1], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,zero,new_zero_row),pos,new_row);
});
pz15.bfs.next_node_for_action = (function pz15$bfs$next_node_for_action(p__14828,action){
var map__14829 = p__14828;
var map__14829__$1 = cljs.core.__destructure_map(map__14829);
var n = map__14829__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14829__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14829__$1,new cljs.core.Keyword(null,"length","length",588987862));
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
var next_nodes = cljs.core.flatten((function (){var iter__5523__auto__ = (function pz15$bfs$expand_with_dists_$_iter__14830(s__14831){
return (new cljs.core.LazySeq(null,(function (){
var s__14831__$1 = s__14831;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14831__$1);
if(temp__5804__auto__){
var s__14831__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14831__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14831__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14833 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14832 = (0);
while(true){
if((i__14832 < size__5522__auto__)){
var action = cljs.core._nth(c__5521__auto__,i__14832);
cljs.core.chunk_append(b__14833,pz15.bfs.next_node_for_action(node,action));

var G__14842 = (i__14832 + (1));
i__14832 = G__14842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14833),pz15$bfs$expand_with_dists_$_iter__14830(cljs.core.chunk_rest(s__14831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14833),null);
}
} else {
var action = cljs.core.first(s__14831__$2);
return cljs.core.cons(pz15.bfs.next_node_for_action(node,action),pz15$bfs$expand_with_dists_$_iter__14830(cljs.core.rest(s__14831__$2)));
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
var vec__14837 = nn;
var seq__14838 = cljs.core.seq(vec__14837);
var first__14839 = cljs.core.first(seq__14838);
var seq__14838__$1 = cljs.core.next(seq__14838);
var n = first__14839;
var ns = seq__14838__$1;
var s = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n);
var new_prio = ((new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(n) + pz15.bfs.walk_dist(s)) + (((2) * pz15.bfs.manh_dist(s,pz15.bfs.target_state)) / (3)));
var new_vals = (((!(cljs.core.contains_QMARK_(r,s))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reached","reached",826384279),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,s,n),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,n,new_prio)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reached","reached",826384279),r,new cljs.core.Keyword(null,"queue","queue",1455835879),p], null));
var new_q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(new_vals);
var new_r = new cljs.core.Keyword(null,"reached","reached",826384279).cljs$core$IFn$_invoke$arity$1(new_vals);
var G__14843 = ns;
var G__14844 = new_q;
var G__14845 = new_r;
nn = G__14843;
p = G__14844;
r = G__14845;
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
var G__14846 = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(n);
var G__14847 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n));
n = G__14846;
acc = G__14847;
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
var G__14848 = new_reached;
var G__14849 = new_queue;
r = G__14848;
p = G__14849;
continue;
} else {
return pz15.bfs.node_to_list(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(p),(0)));
}
break;
}
});

//# sourceMappingURL=pz15.bfs.js.map
