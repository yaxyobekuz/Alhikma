import courses from "../data/courses.js";

const elCoursesList = document.getElementById("courses-list");
const elCoursesSelect = document.getElementById("courses-select");

const addCourseItemToCoursesList = ({ image, title, color, soon }) => {
  elCoursesList.innerHTML += `<li style="background-color: ${color};" class="overflow-hidden relative h-80 bg-white p-8 rounded-3xl"><h3 class="font-semibold text-2xl">${title} ${
    soon ? "<sup class='text-brand-dark/70'>(Tez kunda)</sup>" : ""
  }</h3><img alt="" width="288" height="288" src="${image}" class="absolute size-72 -bottom-8 -right-8" /></li>`;
};

const addCourseOptionToCoursesSelect = ({ title }) => {
  elCoursesSelect.innerHTML += `<option value="${title}">${title}</option>`;
};

document.addEventListener("DOMContentLoaded", () => {
  courses.forEach((course) => {
    addCourseItemToCoursesList(course);
    addCourseOptionToCoursesSelect(course);
  });
});
