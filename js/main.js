const list = document.querySelectorAll(".props__item.props__item_four");
console.log("list: ", list[5]);
list[2].after(list[5]);

const list2 = document.querySelectorAll(".props__item.props__item_five");
const block = document.querySelector(".item.item_five");
const block2 = block.querySelector(".props__list");
block2.append(...list2);

const list2_2 = document.querySelectorAll(".props__item.props__item_three");
const block_2 = document.querySelector(".item.item_three");
const block3_2 = block_2.querySelector(".props__list");
block3_2.append(...list2_2);

const block3 = document.querySelector(".item.item_two");
const block3_3 = block3.querySelector(".props__list");
const last = document.querySelectorAll(".props__item.props__item_two");

block3_3.append(last[8], last[9]);

const items = document.querySelectorAll(".item");

const firstBlock = document.querySelector(".item.item_one");

const fourBlock = document.querySelector(".item.item_four");
firstBlock.after(fourBlock);

const threeBlock = document.querySelector(".item.item_three");
threeBlock.after(fourBlock);

const ads = document.querySelector(".ads");
ads.remove();

const fiveBlock = document.querySelector(".item.item_five");
const titleFive = fiveBlock.querySelector(".item__title");
console.log("titleFive: ", titleFive);
const imgFive = fiveBlock.querySelector(".item__image");
console.log("imgFive: ", imgFive);

const twoBlock = document.querySelector(".item.item_two");
const titleTwo = twoBlock.querySelector(".item__title");
console.log("titleTwo: ", titleTwo);

titleTwo.after(titleFive);

const sixBlock = document.querySelector(".item.item_six");
const titleSix = sixBlock.querySelector(".item__title");
console.log("titleSix: ", titleSix);
titleSix.after(titleTwo);
imgFive.after(titleSix);

const titleThree = threeBlock.querySelector(".item__title");
titleThree.textContent = "This и прототипы объектов";
