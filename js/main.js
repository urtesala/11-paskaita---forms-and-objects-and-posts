"use strict";
console.log("main.js");

const htmlEls = {
  form: document.forms.createPost,
  title: document.getElementById("title"),
  image: document.getElementById("image"),
  date: document.getElementById("date"),
  author: document.getElementById("author"),
  body: document.getElementById("body"),
  postsContainer: document.getElementById("postsContainer"),
};

// initial posts
const initPostsArr = [
  {
    title: "HTML",
    image: "https://picsum.photos/id/1019/1000/800",
    date: "2022-01-05",
    author: "3",
    body: "html is structure",
  },
  {
    title: "CSS",
    image: "https://picsum.photos/id/1/1000/800",
    date: "2022-01-05",
    author: "2",
    body: "CSS is design",
  },
  {
    title: "JS",
    image: "https://picsum.photos/id/1010/1000/800",
    date: "2022-01-05",
    author: "1",
    body: "JS is interactivity",
  },
];
initPostsArr[1].title; // 'CSS'

function initPosts() {
  for (let onePost of initPostsArr) {
    generatePost(onePost, htmlEls.postsContainer);
  }
}

// atrinkti kuris autorius galima ir su tokiu masyvu. pabandyti
//
const selectOptions = ["", "Jame Bond", "Serbentautas", "Severijus Klaida"];
function whitchAuthorArr(id) {
  return selectOptions[id];
}
whitchAuthorArr(3);
console.log("selectOptions ===", selectOptions);
/* 
  <option value="1">Jame Bond</option>
  <option value="2">Serbentautas</option>
  <option value="3">Severijus Klaida</option>
*/

function whitchAuthor(id) {
  // su if else arba switch
  switch (id) {
    case 1:
      console.log("Jame Bond");
      return "Jame Bond";
    case 2:
      console.log("Jake Lake");
      return "Jake Lake";
    case 3:
      console.log("Blue Blues");
      return "Blue Blues";
    default:
      return "nera autoriaus";
  }
}
// console.log('whitchAuthor(1) ===', whitchAuthor(1));
// console.log('htmlEls ===', htmlEls);

/**
 * Main app function
 */
function init() {
  initPosts();
}
init();
// Event Listeners

htmlEls.form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Js is in control");

  // sukurti formValues objekta
  const formValues = {
    title: htmlEls.title.value.trim(),
    image: htmlEls.image.value.trim(),
    date: htmlEls.date.value.trim(),
    author: htmlEls.author.value.trim(),
    body: htmlEls.body.value.trim(),
  };
  generatePost(formValues, htmlEls.postsContainer);
  // console.log('formValues ===', formValues);
});

function generatePost(valuesObj, dest) {
  const articleEl = document.createElement("article");
  articleEl.className = "card post";
  dest.append(articleEl);

  // img create
  const imgEl = document.createElement("img");
  imgEl.src = valuesObj.image;
  imgEl.alt = valuesObj.title;
  articleEl.append(imgEl);

  crEl("h3", articleEl, "post__title", valuesObj.title);

  const authorName = whitchAuthorArr(+valuesObj.author);
  crEl("h4", articleEl, "post__author", authorName);

  crEl("p", articleEl, "post__date", valuesObj.date);
  crEl("p", articleEl, "post__text", valuesObj.body);
  const deleteBtnEl = crEl("button", articleEl, "deletePost", "delete");
  deleteBtnEl.addEventListener("click", deletePost);
}

function deletePost(event) {
  console.log("deletePost funkcija");
  console.log("event.target ===", event.target);
  // prideti confirm() ir jei vartojoas patvirtina, tai istrinam, jei ne netrinam
  // istrinti event.target tevini elementa su .remove()
  event.target.parentElement.remove();
}

function crEl(tagName, dest, className, text) {
  const el = document.createElement(tagName);
  if (className) el.className = className;
  if (text || text === 0) el.textContent = text;
  dest.append(el);
  // console.log(el);
  return el;
}
