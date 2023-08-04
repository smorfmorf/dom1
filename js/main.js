const list = document.querySelectorAll(".props__item.props__item_four");
console.log("list: ", list[5]);
list[2].after(list[5]);

const list2 = document.querySelectorAll(".props__item.props__item_five");
const block = document.querySelector(".item.item_five");
console.log("block: ", block);
const block2 = block.querySelector(".props__list");
console.log("block2: ", block2);
block2.append(...list2);

const list2_2 = document.querySelectorAll(".props__item.props__item_three");
const block_2 = document.querySelector(".item.item_three");
console.log("block_2: ", block_2);
const block3_2 = block_2.querySelector(".props__list");
console.log("block3_2: ", block3_2);
block3_2.append(...list2_2);

const block3 = document.querySelector(".item.item_two");
console.log("block3: ", block3);
const block3_3 = block3.querySelector(".props__list");
console.log("block3_3: ", block3_3);
const last = document.querySelectorAll(".props__item.props__item_two");

block3_3.append(last[8], last[9]);
