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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14872){
var vec__14873 = p__14872;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14873,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14873,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}),m));
});
pz15.bfs.with_index = (function pz15$bfs$with_index(p__14876){
var vec__14877 = p__14876;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14877,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14877,(1),null);
var v = vec__14877;
return pz15.bfs.map_values((function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,a], null);
}),y);
});
pz15.bfs.sum_seq = (function pz15$bfs$sum_seq(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,s);
});
pz15.bfs.transpose_coords = (function pz15$bfs$transpose_coords(coords){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14880){
var vec__14881 = p__14880;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14881,(0),null);
var vec__14884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14881,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14884,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14884,(1),null);
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
pz15.bfs.state_to_rows = (function pz15$bfs$state_to_rows(p__14887){
var map__14888 = p__14887;
var map__14888__$1 = cljs.core.__destructure_map(map__14888);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14888__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14888__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
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
var new_board = (function (){var tc = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.seq(cljs.core.group_by((function (p__14889){
var vec__14890 = p__14889;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14890,(0),null);
var vec__14893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14890,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14893,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14893,(1),null);
return x;
}),pz15.bfs.transpose_coords(coords))));
var iter__5523__auto__ = (function pz15$bfs$transpose_state_$_iter__14896(s__14897){
return (new cljs.core.LazySeq(null,(function (){
var s__14897__$1 = s__14897;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14897__$1);
if(temp__5804__auto__){
var s__14897__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14897__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14897__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14899 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14898 = (0);
while(true){
if((i__14898 < size__5522__auto__)){
var vec__14900 = cljs.core._nth(c__5521__auto__,i__14898);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14900,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14900,(1),null);
cljs.core.chunk_append(b__14899,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__14898,vec__14900,k,v,c__5521__auto__,size__5522__auto__,b__14899,s__14897__$2,temp__5804__auto__,tc,coords,new_zero){
return (function (p__14903){
var vec__14904 = p__14903;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14904,(0),null);
var vec__14907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14904,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14907,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14907,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([x,b]);
});})(i__14898,vec__14900,k,v,c__5521__auto__,size__5522__auto__,b__14899,s__14897__$2,temp__5804__auto__,tc,coords,new_zero))
,v)));

var G__14971 = (i__14898 + (1));
i__14898 = G__14971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14899),pz15$bfs$transpose_state_$_iter__14896(cljs.core.chunk_rest(s__14897__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14899),null);
}
} else {
var vec__14910 = cljs.core.first(s__14897__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910,(1),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__14910,k,v,s__14897__$2,temp__5804__auto__,tc,coords,new_zero){
return (function (p__14913){
var vec__14914 = p__14913;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14914,(0),null);
var vec__14917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14914,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14917,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14917,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([x,b]);
});})(vec__14910,k,v,s__14897__$2,temp__5804__auto__,tc,coords,new_zero))
,v)),pz15$bfs$transpose_state_$_iter__14896(cljs.core.rest(s__14897__$2)));
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
pz15.bfs.state_to_cols = (function pz15$bfs$state_to_cols(p__14920){
var map__14921 = p__14920;
var map__14921__$1 = cljs.core.__destructure_map(map__14921);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14921__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14921__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
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
return pz15.bfs.sum_seq((function (){var iter__5523__auto__ = (function pz15$bfs$manh_dist_$_iter__14922(s__14923){
return (new cljs.core.LazySeq(null,(function (){
var s__14923__$1 = s__14923;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14923__$1);
if(temp__5804__auto__){
var s__14923__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14923__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14923__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14925 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14924 = (0);
while(true){
if((i__14924 < size__5522__auto__)){
var vec__14926 = cljs.core._nth(c__5521__auto__,i__14924);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14926,(1),null);
cljs.core.chunk_append(b__14925,(function (){var vec__14929 = v;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14929,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14929,(1),null);
var vec__14932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c2,k);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14932,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14932,(1),null);
return (cljs.core.abs((x1 - x2)) + cljs.core.abs((y1 - y2)));
})());

var G__14974 = (i__14924 + (1));
i__14924 = G__14974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14925),pz15$bfs$manh_dist_$_iter__14922(cljs.core.chunk_rest(s__14923__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14925),null);
}
} else {
var vec__14935 = cljs.core.first(s__14923__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14935,(1),null);
return cljs.core.cons((function (){var vec__14938 = v;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14938,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14938,(1),null);
var vec__14941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c2,k);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941,(1),null);
return (cljs.core.abs((x1 - x2)) + cljs.core.abs((y1 - y2)));
})(),pz15$bfs$manh_dist_$_iter__14922(cljs.core.rest(s__14923__$2)));
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
var vec__14944 = x;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14944,(0),null);
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14944,(1),null);
var vec__14947 = y;
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14947,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14947,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,zero,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,i1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,i1], null)),i2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,i2], null))));
});
pz15.bfs.switch_vert = (function pz15$bfs$switch_vert(board,zero,pos){
var vv = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,board);
var zero_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,zero),(0));
var zero_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vv,zero);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vv,pos);
var vec__14950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(zero_row,zero_pos);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14950,(0),null);
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14950,(1),null);
var vec__14953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row,zero_pos);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14953,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14953,(1),null);
var new_zero_row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zero_row,i1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,i2], null)));
var new_row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,i1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,i1], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,zero,new_zero_row),pos,new_row);
});
pz15.bfs.next_node_for_action = (function pz15$bfs$next_node_for_action(p__14956,action){
var map__14957 = p__14956;
var map__14957__$1 = cljs.core.__destructure_map(map__14957);
var n = map__14957__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14957__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14957__$1,new cljs.core.Keyword(null,"length","length",588987862));
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
var next_nodes = cljs.core.flatten((function (){var iter__5523__auto__ = (function pz15$bfs$expand_with_dists_$_iter__14958(s__14959){
return (new cljs.core.LazySeq(null,(function (){
var s__14959__$1 = s__14959;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14959__$1);
if(temp__5804__auto__){
var s__14959__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14959__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14959__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14961 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14960 = (0);
while(true){
if((i__14960 < size__5522__auto__)){
var action = cljs.core._nth(c__5521__auto__,i__14960);
cljs.core.chunk_append(b__14961,pz15.bfs.next_node_for_action(node,action));

var G__14985 = (i__14960 + (1));
i__14960 = G__14985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14961),pz15$bfs$expand_with_dists_$_iter__14958(cljs.core.chunk_rest(s__14959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14961),null);
}
} else {
var action = cljs.core.first(s__14959__$2);
return cljs.core.cons(pz15.bfs.next_node_for_action(node,action),pz15$bfs$expand_with_dists_$_iter__14958(cljs.core.rest(s__14959__$2)));
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
var vec__14965 = nn;
var seq__14966 = cljs.core.seq(vec__14965);
var first__14967 = cljs.core.first(seq__14966);
var seq__14966__$1 = cljs.core.next(seq__14966);
var n = first__14967;
var ns = seq__14966__$1;
var s = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n);
var new_prio = ((new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(n) + pz15.bfs.walk_dist(s)) + (((2) * pz15.bfs.manh_dist(s,pz15.bfs.target_state)) / (3)));
var new_vals = (((!(cljs.core.contains_QMARK_(r,s))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reached","reached",826384279),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,s,n),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,n,new_prio)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reached","reached",826384279),r,new cljs.core.Keyword(null,"queue","queue",1455835879),p], null));
var new_q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(new_vals);
var new_r = new cljs.core.Keyword(null,"reached","reached",826384279).cljs$core$IFn$_invoke$arity$1(new_vals);
var G__14991 = ns;
var G__14992 = new_q;
var G__14993 = new_r;
nn = G__14991;
p = G__14992;
r = G__14993;
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
var G__14995 = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(n);
var G__14996 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n));
n = G__14995;
acc = G__14996;
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
var G__15001 = new_reached;
var G__15002 = new_queue;
r = G__15001;
p = G__15002;
continue;
} else {
return pz15.bfs.node_to_list(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(p),(0)));
}
break;
}
});

//# sourceMappingURL=pz15.bfs.js.map
