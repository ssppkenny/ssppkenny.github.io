goog.provide('tailrecursion.priority_map');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item = cljs.core.first(cljs.core.val(f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key(f)], null);
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority_key = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5523__auto__ = (function tailrecursion$priority_map$iter__12454(s__12455){
return (new cljs.core.LazySeq(null,(function (){
var s__12455__$1 = s__12455;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12455__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__12460 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12460,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12460,(1),null);
var iterys__5519__auto__ = ((function (s__12455__$1,vec__12460,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__12454_$_iter__12456(s__12457){
return (new cljs.core.LazySeq(null,((function (s__12455__$1,vec__12460,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1){
return (function (){
var s__12457__$1 = s__12457;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12457__$1);
if(temp__5804__auto____$1){
var s__12457__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12457__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12457__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12459 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12458 = (0);
while(true){
if((i__12458 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__12458);
cljs.core.chunk_append(b__12459,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__12521 = (i__12458 + (1));
i__12458 = G__12521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12459),tailrecursion$priority_map$iter__12454_$_iter__12456(cljs.core.chunk_rest(s__12457__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12459),null);
}
} else {
var item = cljs.core.first(s__12457__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__12454_$_iter__12456(cljs.core.rest(s__12457__$2)));
}
} else {
return null;
}
break;
}
});})(s__12455__$1,vec__12460,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1))
,null,null));
});})(s__12455__$1,vec__12460,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(item_set));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tailrecursion$priority_map$iter__12454(cljs.core.rest(s__12455__$1)));
} else {
var G__12522 = cljs.core.rest(s__12455__$1);
s__12455__$1 = G__12522;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq((function (){var iter__5523__auto__ = (function tailrecursion$priority_map$iter__12463(s__12464){
return (new cljs.core.LazySeq(null,(function (){
var s__12464__$1 = s__12464;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12464__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__12469 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12469,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12469,(1),null);
var iterys__5519__auto__ = ((function (s__12464__$1,vec__12469,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__12463_$_iter__12465(s__12466){
return (new cljs.core.LazySeq(null,((function (s__12464__$1,vec__12469,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1){
return (function (){
var s__12466__$1 = s__12466;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12466__$1);
if(temp__5804__auto____$1){
var s__12466__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12466__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12466__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12468 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12467 = (0);
while(true){
if((i__12467 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__12467);
cljs.core.chunk_append(b__12468,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__12533 = (i__12467 + (1));
i__12467 = G__12533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12468),tailrecursion$priority_map$iter__12463_$_iter__12465(cljs.core.chunk_rest(s__12466__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12468),null);
}
} else {
var item = cljs.core.first(s__12466__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__12463_$_iter__12465(cljs.core.rest(s__12466__$2)));
}
} else {
return null;
}
break;
}
});})(s__12464__$1,vec__12469,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1))
,null,null));
});})(s__12464__$1,vec__12469,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(item_set));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tailrecursion$priority_map$iter__12463(cljs.core.rest(s__12464__$1)));
} else {
var G__12534 = cljs.core.rest(s__12464__$1);
s__12464__$1 = G__12534;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)) : self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority_key) : self__.priority__GT_set_of_items.call(null,priority_key));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__5802__auto__)){
var current_priority = temp__5802__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var current_priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(current_priority) : self__.keyfn.call(null,current_priority));
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5523__auto__ = (function tailrecursion$priority_map$iter__12472(s__12473){
return (new cljs.core.LazySeq(null,(function (){
var s__12473__$1 = s__12473;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12473__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__12478 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12478,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12478,(1),null);
var iterys__5519__auto__ = ((function (s__12473__$1,vec__12478,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__12472_$_iter__12474(s__12475){
return (new cljs.core.LazySeq(null,((function (s__12473__$1,vec__12478,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1){
return (function (){
var s__12475__$1 = s__12475;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12475__$1);
if(temp__5804__auto____$1){
var s__12475__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12475__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12475__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12477 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12476 = (0);
while(true){
if((i__12476 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__12476);
cljs.core.chunk_append(b__12477,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__12545 = (i__12476 + (1));
i__12476 = G__12545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12477),tailrecursion$priority_map$iter__12472_$_iter__12474(cljs.core.chunk_rest(s__12475__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12477),null);
}
} else {
var item = cljs.core.first(s__12475__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__12472_$_iter__12474(cljs.core.rest(s__12475__$2)));
}
} else {
return null;
}
break;
}
});})(s__12473__$1,vec__12478,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1))
,null,null));
});})(s__12473__$1,vec__12478,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(item_set));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tailrecursion$priority_map$iter__12472(cljs.core.rest(s__12473__$1)));
} else {
var G__12546 = cljs.core.rest(s__12473__$1);
s__12473__$1 = G__12546;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq((function (){var iter__5523__auto__ = (function tailrecursion$priority_map$iter__12481(s__12482){
return (new cljs.core.LazySeq(null,(function (){
var s__12482__$1 = s__12482;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12482__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__12487 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12487,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12487,(1),null);
var iterys__5519__auto__ = ((function (s__12482__$1,vec__12487,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__12481_$_iter__12483(s__12484){
return (new cljs.core.LazySeq(null,((function (s__12482__$1,vec__12487,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1){
return (function (){
var s__12484__$1 = s__12484;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12484__$1);
if(temp__5804__auto____$1){
var s__12484__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12484__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12484__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12486 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12485 = (0);
while(true){
if((i__12485 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__12485);
cljs.core.chunk_append(b__12486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__12547 = (i__12485 + (1));
i__12485 = G__12547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12486),tailrecursion$priority_map$iter__12481_$_iter__12483(cljs.core.chunk_rest(s__12484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12486),null);
}
} else {
var item = cljs.core.first(s__12484__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__12481_$_iter__12483(cljs.core.rest(s__12484__$2)));
}
} else {
return null;
}
break;
}
});})(s__12482__$1,vec__12487,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1))
,null,null));
});})(s__12482__$1,vec__12487,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(item_set));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tailrecursion$priority_map$iter__12481(cljs.core.rest(s__12482__$1)));
} else {
var G__12548 = cljs.core.rest(s__12482__$1);
s__12482__$1 = G__12548;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(self__.priority__GT_set_of_items);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function (unused__10314__auto__){
var self__ = this;
var self__ = this;
var G__12490 = (arguments.length - (1));
switch (G__12490) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args12453){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args12453)));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var fexpr__12491 = (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq);
return (fexpr__12491.cljs$core$IFn$_invoke$arity$1 ? fexpr__12491.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__12491.call(null,this$__$1));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5523__auto__ = (function tailrecursion$priority_map$iter__12492(s__12493){
return (new cljs.core.LazySeq(null,(function (){
var s__12493__$1 = s__12493;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12493__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__12498 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12498,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12498,(1),null);
var iterys__5519__auto__ = ((function (s__12493__$1,vec__12498,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__12492_$_iter__12494(s__12495){
return (new cljs.core.LazySeq(null,((function (s__12493__$1,vec__12498,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1){
return (function (){
var s__12495__$1 = s__12495;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12495__$1);
if(temp__5804__auto____$1){
var s__12495__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12495__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12495__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12497 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12496 = (0);
while(true){
if((i__12496 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__12496);
cljs.core.chunk_append(b__12497,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__12550 = (i__12496 + (1));
i__12496 = G__12550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12497),tailrecursion$priority_map$iter__12492_$_iter__12494(cljs.core.chunk_rest(s__12495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12497),null);
}
} else {
var item = cljs.core.first(s__12495__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__12492_$_iter__12494(cljs.core.rest(s__12495__$2)));
}
} else {
return null;
}
break;
}
});})(s__12493__$1,vec__12498,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1))
,null,null));
});})(s__12493__$1,vec__12498,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(item_set));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tailrecursion$priority_map$iter__12492(cljs.core.rest(s__12493__$1)));
} else {
var G__12551 = cljs.core.rest(s__12493__$1);
s__12493__$1 = G__12551;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(sets);
})());
} else {
return cljs.core.seq((function (){var iter__5523__auto__ = (function tailrecursion$priority_map$iter__12501(s__12502){
return (new cljs.core.LazySeq(null,(function (){
var s__12502__$1 = s__12502;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12502__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__12507 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12507,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12507,(1),null);
var iterys__5519__auto__ = ((function (s__12502__$1,vec__12507,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__12501_$_iter__12503(s__12504){
return (new cljs.core.LazySeq(null,((function (s__12502__$1,vec__12507,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1){
return (function (){
var s__12504__$1 = s__12504;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12504__$1);
if(temp__5804__auto____$1){
var s__12504__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12504__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12504__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12506 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12505 = (0);
while(true){
if((i__12505 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__12505);
cljs.core.chunk_append(b__12506,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__12558 = (i__12505 + (1));
i__12505 = G__12558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12506),tailrecursion$priority_map$iter__12501_$_iter__12503(cljs.core.chunk_rest(s__12504__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12506),null);
}
} else {
var item = cljs.core.first(s__12504__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__12501_$_iter__12503(cljs.core.rest(s__12504__$2)));
}
} else {
return null;
}
break;
}
});})(s__12502__$1,vec__12507,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1))
,null,null));
});})(s__12502__$1,vec__12507,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(item_set));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tailrecursion$priority_map$iter__12501(cljs.core.rest(s__12502__$1)));
} else {
var G__12559 = cljs.core.rest(s__12502__$1);
s__12502__$1 = G__12559;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(sets);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
var G__12510 = cljs.core.val(entry);
return (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(G__12510) : self__.keyfn.call(null,G__12510));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
}));

(tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true);

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap");

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
}));

/**
 * Positional factory function for tailrecursion.priority-map/PersistentPriorityMap.
 */
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

(tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null)));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var G__12512 = arguments.length;
switch (G__12512) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2);

tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
throw Error("Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12569 = arguments.length;
var i__5770__auto___12570 = (0);
while(true){
if((i__5770__auto___12570 < len__5769__auto___12569)){
args__5775__auto__.push((arguments[i__5770__auto___12570]));

var G__12571 = (i__5770__auto___12570 + (1));
i__5770__auto___12570 = G__12571;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__12572 = cljs.core.nnext(in$);
var G__12573 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__12572;
out = G__12573;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq12513){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12513));
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12574 = arguments.length;
var i__5770__auto___12575 = (0);
while(true){
if((i__5770__auto___12575 < len__5769__auto___12574)){
args__5775__auto__.push((arguments[i__5770__auto___12575]));

var G__12576 = (i__5770__auto___12575 + (1));
i__5770__auto___12575 = G__12576;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__12577 = cljs.core.nnext(in$);
var G__12578 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__12577;
out = G__12578;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq12514){
var G__12515 = cljs.core.first(seq12514);
var seq12514__$1 = cljs.core.next(seq12514);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12515,seq12514__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12579 = arguments.length;
var i__5770__auto___12580 = (0);
while(true){
if((i__5770__auto___12580 < len__5769__auto___12579)){
args__5775__auto__.push((arguments[i__5770__auto___12580]));

var G__12581 = (i__5770__auto___12580 + (1));
i__5770__auto___12580 = G__12581;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1(keyfn);
while(true){
if(in$){
var G__12582 = cljs.core.nnext(in$);
var G__12583 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__12582;
out = G__12583;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq12516){
var G__12517 = cljs.core.first(seq12516);
var seq12516__$1 = cljs.core.next(seq12516);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12517,seq12516__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12584 = arguments.length;
var i__5770__auto___12585 = (0);
while(true){
if((i__5770__auto___12585 < len__5769__auto___12584)){
args__5775__auto__.push((arguments[i__5770__auto___12585]));

var G__12586 = (i__5770__auto___12585 + (1));
i__5770__auto___12585 = G__12586;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2(keyfn,comparator);
while(true){
if(in$){
var G__12587 = cljs.core.nnext(in$);
var G__12588 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__12587;
out = G__12588;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq12518){
var G__12519 = cljs.core.first(seq12518);
var seq12518__$1 = cljs.core.next(seq12518);
var G__12520 = cljs.core.first(seq12518__$1);
var seq12518__$2 = cljs.core.next(seq12518__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12519,G__12520,seq12518__$2);
}));


//# sourceMappingURL=tailrecursion.priority_map.js.map
