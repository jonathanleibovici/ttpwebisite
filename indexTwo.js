/*Write the code necessary to do the following:
1) Select the section with an id of container without using querySelector.
2) Select the section with an id of container using querySelector.
3) Select all of the list items with a class of "second".
4) Select a list item with a class of third, but only the list item inside of the ol tag.
5) Give the section with an id of container the text "Hello!".
6) Add the class main to the div with a class of footer.
7) Remove the class main on the div with a class of footer.
8) Create a new li element.
9) Give the li the text "four".
10) Append the li to the ul element.
12) Loop over all of the lis inside the ol tag and give them a background color of "green".
13) Remove the div with a class of footer.
 */

//1 Select the section with an id of container without using querySelector.
document.getElementById("container");
// console.log(thecontainer)
//2  Select the section with an id of container using querySelector.
const Container = document.querySelector("#container");
console.log(Container);

//3 Select all of the list items with a class of "second".
const secned = document.getElementsByClassName("second");
console.log(secned);

//4 Select a list item with a class of third, but only the list item inside of the ol tag.
const list = document.querySelector("ol .third");
console.log(list);

//5 Give the section with an id of container the text "Hello!".
 Container.innerText = "hello"
 console.log(Container)

 //6 Add the class main to the div with a class of footer.

 const footer = document.querySelector(".footer")
 footer.classList.add("main")
 console.log(footer)

 //7 Remove the class main on the div with a class of footer.
 footer.classList.remove("main");
 console.log(footer)

 //8 Create a new li element.
 const li = document.createElement("li")
 //9 Give the li the text "four".
 li.textContent = "four"
 console.log(li)
 
//10 Append the li to the ul element.
let listelement = document.querySelector("ul")
console.log(listelement.appendChild(li))

//11) Loop over all of the lis inside the ol tag and give them a background color of "green".
const looping = document.querySelector("ol li")
for(let i = 0; i < looping.length; i++){
    looping[i].style.backgroundColor = "green";
}

//12 Remove the div with a class of footer.
let TheFooter = document.querySelector(".footer");
TheFooter.remove();
