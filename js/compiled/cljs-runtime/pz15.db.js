goog.provide('pz15.db');
if((typeof pz15 !== 'undefined') && (typeof pz15.db !== 'undefined') && (typeof pz15.db.dists !== 'undefined')){
} else {
pz15.db.dists = pz15.walkdist.dists;
}
if((typeof pz15 !== 'undefined') && (typeof pz15.db !== 'undefined') && (typeof pz15.db.UP !== 'undefined')){
} else {
pz15.db.UP = (1);
}
if((typeof pz15 !== 'undefined') && (typeof pz15.db !== 'undefined') && (typeof pz15.db.DOWN !== 'undefined')){
} else {
pz15.db.DOWN = (-1);
}
if((typeof pz15 !== 'undefined') && (typeof pz15.db !== 'undefined') && (typeof pz15.db.LEFT !== 'undefined')){
} else {
pz15.db.LEFT = (10);
}
if((typeof pz15 !== 'undefined') && (typeof pz15.db !== 'undefined') && (typeof pz15.db.RIGHT !== 'undefined')){
} else {
pz15.db.RIGHT = (-10);
}
pz15.db.sum_seq = (function pz15$db$sum_seq(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,s);
});
pz15.db.count_greater = (function pz15$db$count_greater(n,v){
return pz15.db.sum_seq((function (){var iter__5523__auto__ = (function pz15$db$count_greater_$_iter__14835(s__14836){
return (new cljs.core.LazySeq(null,(function (){
var s__14836__$1 = s__14836;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14836__$1);
if(temp__5804__auto__){
var s__14836__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14836__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14836__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14838 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14837 = (0);
while(true){
if((i__14837 < size__5522__auto__)){
var vec__14839 = cljs.core._nth(c__5521__auto__,i__14837);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14839,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14839,(1),null);
cljs.core.chunk_append(b__14838,(((n > x))?(1):(0)));

var G__14869 = (i__14837 + (1));
i__14837 = G__14869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14838),pz15$db$count_greater_$_iter__14835(cljs.core.chunk_rest(s__14836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14838),null);
}
} else {
var vec__14842 = cljs.core.first(s__14836__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14842,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14842,(1),null);
return cljs.core.cons((((n > x))?(1):(0)),pz15$db$count_greater_$_iter__14835(cljs.core.rest(s__14836__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(v);
})());
});
pz15.db.even_perm_QMARK_ = (function pz15$db$even_perm_QMARK_(s){
var v = cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a + (1)),b], null);
}),s));
var s__$1 = pz15.db.sum_seq((function (){var iter__5523__auto__ = (function pz15$db$even_perm_QMARK__$_iter__14845(s__14846){
return (new cljs.core.LazySeq(null,(function (){
var s__14846__$1 = s__14846;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14846__$1);
if(temp__5804__auto__){
var s__14846__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14846__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14846__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14848 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14847 = (0);
while(true){
if((i__14847 < size__5522__auto__)){
var vec__14849 = cljs.core._nth(c__5521__auto__,i__14847);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14849,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14849,(1),null);
cljs.core.chunk_append(b__14848,pz15.db.count_greater(n,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,i)));

var G__14870 = (i__14847 + (1));
i__14847 = G__14870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14848),pz15$db$even_perm_QMARK__$_iter__14845(cljs.core.chunk_rest(s__14846__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14848),null);
}
} else {
var vec__14852 = cljs.core.first(s__14846__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14852,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14852,(1),null);
return cljs.core.cons(pz15.db.count_greater(n,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,i)),pz15$db$even_perm_QMARK__$_iter__14845(cljs.core.rest(s__14846__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(v);
})());
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.rem(s__$1,(2)),(0));
});
pz15.db.random_state = (function pz15$db$random_state(){
var v = cljs.core.shuffle(cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)));
while(true){
var zero = cljs.core.quot(v.indexOf((0)),(4));
var f = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (v,zero){
return (function (x){
return (x > (0));
});})(v,zero))
,v);
if(((((pz15.db.even_perm_QMARK_(f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.rem((zero + (1)),(2)),(0))))) || ((((!(pz15.db.even_perm_QMARK_(f)))) && ((cljs.core.rem((zero + (1)),(2)) > (0))))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,zero,f){
return (function (x){
return cljs.core.zipmap(x,cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
});})(v,zero,f))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((4),v))),new cljs.core.Keyword(null,"zero","zero",-858964576),zero], null);
} else {
var G__14871 = cljs.core.shuffle(cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)));
v = G__14871;
continue;
}
break;
}
});
if((typeof pz15 !== 'undefined') && (typeof pz15.db !== 'undefined') && (typeof pz15.db.target_state !== 'undefined')){
} else {
pz15.db.target_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.zipmap(x,cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((4),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.rem((x + (1)),(16));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)))))),new cljs.core.Keyword(null,"zero","zero",-858964576),(3)], null);
}
pz15.db.swap_elts = (function pz15$db$swap_elts(v,i1,i2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,i2,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i1) : v.call(null,i1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i1,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i2) : v.call(null,i2))], 0));
});
pz15.db.inside_QMARK_ = (function pz15$db$inside_QMARK_(x){
return (((x >= (0))) && ((x < (4))));
});
pz15.db.sort_row_by_value = (function pz15$db$sort_row_by_value(row){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (a){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
}),cljs.core.vec(row)));
});
pz15.db.switch_hor = (function pz15$db$switch_hor(board,zero,pos){
var zero_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,zero);
var zero_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(zero_row,(0));
var a = cljs.core.vec(zero_row);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,pos);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,zero_pos);
var vec__14855 = x;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14855,(0),null);
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14855,(1),null);
var vec__14858 = y;
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14858,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14858,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,zero,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,i1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,i1], null)),i2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,i2], null))));
});
pz15.db.switch_vert = (function pz15$db$switch_vert(board,zero,pos){
var vv = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,board);
var zero_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,zero),(0));
var zero_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vv,zero);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vv,pos);
var vec__14861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(zero_row,zero_pos);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14861,(0),null);
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14861,(1),null);
var vec__14864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row,zero_pos);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14864,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14864,(1),null);
var new_zero_row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zero_row,i1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,i2], null)));
var new_row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,i1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,i1], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,zero,new_zero_row),pos,new_row);
});
pz15.db.next_state_for_action = (function pz15$db$next_state_for_action(p__14867,action){
var map__14868 = p__14867;
var map__14868__$1 = cljs.core.__destructure_map(map__14868);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14868__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14868__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var zero_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,zero);
var zero_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(zero_row,(0));
var next_s = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,(1)))?((pz15.db.inside_QMARK_((zero + (1))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),pz15.db.switch_vert(board,zero,(zero + (1))),new cljs.core.Keyword(null,"zero","zero",-858964576),(zero + (1))], null):null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,(-1)))?((pz15.db.inside_QMARK_((zero - (1))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),pz15.db.switch_vert(board,zero,(zero - (1))),new cljs.core.Keyword(null,"zero","zero",-858964576),(zero - (1))], null):null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,(10)))?((pz15.db.inside_QMARK_((zero_pos + (1))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),pz15.db.switch_hor(board,zero,(zero_pos + (1))),new cljs.core.Keyword(null,"zero","zero",-858964576),zero], null):null):((pz15.db.inside_QMARK_((zero_pos - (1))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),pz15.db.switch_hor(board,zero,(zero_pos - (1))),new cljs.core.Keyword(null,"zero","zero",-858964576),zero], null):null)
)));
if((!((next_s == null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pz15.db.sort_row_by_value,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(next_s)),new cljs.core.Keyword(null,"zero","zero",-858964576),new cljs.core.Keyword(null,"zero","zero",-858964576).cljs$core$IFn$_invoke$arity$1(next_s)], null);
} else {
return null;
}
});
pz15.db.move_right = (function pz15$db$move_right(s){
var new_state = pz15.db.next_state_for_action(s,(-10));
if((!((new_state == null)))){
return new_state;
} else {
return s;
}
});
pz15.db.move_left = (function pz15$db$move_left(s){
var new_state = pz15.db.next_state_for_action(s,(10));
if((!((new_state == null)))){
return new_state;
} else {
return s;
}
});
pz15.db.move_down = (function pz15$db$move_down(s){
var new_state = pz15.db.next_state_for_action(s,(-1));
if((!((new_state == null)))){
return new_state;
} else {
return s;
}
});
pz15.db.move_up = (function pz15$db$move_up(s){
var new_state = pz15.db.next_state_for_action(s,(1));
if((!((new_state == null)))){
return new_state;
} else {
return s;
}
});
pz15.db.default_db = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"re-frame",new cljs.core.Keyword(null,"state","state",-1988618099),pz15.db.random_state(),new cljs.core.Keyword(null,"solution","solution",-1727231491),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"solving","solving",-175043197),false,new cljs.core.Keyword(null,"start-time","start-time",814801386),null,new cljs.core.Keyword(null,"elapsed-seconds","elapsed-seconds",-1097390899),(0),new cljs.core.Keyword(null,"need-to-solve","need-to-solve",-258791151),false], null);

//# sourceMappingURL=pz15.db.js.map
