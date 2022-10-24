"use strict";
console.log("praktika.js");

// INPUT ALERT VARDAS
// const htmlEls = {
//   btn: document.getElementById("btnName"),
//   input: document.getElementById("name"),
//   age: document.getElementById("age"),
//   h2ElAge: document.getElementById("amzius"),
// };
// console.log("htmlEls ===", htmlEls);

// htmlEls.btn.addEventListener("click", () => {
//   console.log("pavyko");
//   const nameFromInput = htmlEls.input.value.trim();
//^ exit clause
//   if (nameFromInput === "") return;
//   alert(nameFromInput);
//^ clean input
//   htmlEls.input.value = "";
// });

//^Sukurk input į kurį įvesi savo amžių. Padaryk, kad submit paspaudus, viršuj esančiame h1 elemente atsirastų "Tavo amžius: [amžius]".

const htmlElements = {
  h1: document.getElementById("amzius"),
  form: document.forms[0],
};

console.log("htmlElements ===", htmlElements);

htmlElements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("js is in control");
  const ageFromInput = htmlElements.form.elements.age.valueAsNumber;
  console.log("ageFromInput ===", ageFromInput);
  htmlElements.h1.textContent = `Tavo amzius yra: ${ageFromInput}`;
  htmlElements.form.reset();
});
