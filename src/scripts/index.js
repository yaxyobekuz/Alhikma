import faq from "../data/faq.js";
import courses from "../data/courses.js";

const elCoursesList = document.getElementById("courses-list");
const elFaqContainer = document.getElementById("faq-container");
const elCoursesSelect = document.getElementById("courses-select");

const addCourseItemToCoursesList = ({ image, title, color, soon }) => {
  elCoursesList.innerHTML += `<li style="background-color: ${color};" class="overflow-hidden relative h-80 bg-white rounded-3xl p-3.5 lg:p-8"><h3 class="font-semibold text-xl md:text-2xl">${title} ${
    soon ? "<sup class='text-brand-dark/70'>(Tez kunda)</sup>" : ""
  }</h3><img alt="" width="288" height="288" src="${image}" class="absolute -bottom-8 -right-8 aspect-square max-w-72 w-full h-auto xs:max-w-max xs:w-auto xs:h-11/12 sm:h-auto sm:w-11/12 lg:size-72" /></li>`;
};

const addCourseOptionToCoursesSelect = ({ title }) => {
  elCoursesSelect.innerHTML += `<option value="${title}">${title}</option>`;
};

document.addEventListener("DOMContentLoaded", () => {
  courses.forEach((course) => {
    addCourseItemToCoursesList(course);
    addCourseOptionToCoursesSelect(course);
  });

  faq.forEach(({ question, answer }) => {
    elFaqContainer.innerHTML += `<details class="group bg-white rounded-3xl"><summary class="font-medium text-xl p-6">${question}?</summary><div class="bg-brand-primary text-white rounded-b-3xl p-6 text-lg">${answer}</div></details>`;
  });
});
