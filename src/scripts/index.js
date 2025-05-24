// Data
import faq from "../data/faq.js";
import courses from "../data/courses.js";

// Helpers
import { closeElement, openElement } from "./helpers.js";

const elMenu = document.getElementById("menu");
const elModal = document.getElementById("modal");
const elPlayButton = document.getElementById("play-button");
const elMenuLinks = document.querySelectorAll(".menu-link");
const elCoursesList = document.getElementById("courses-list");
const elFaqContainer = document.getElementById("faq-container");
const elCoursesSelect = document.getElementById("courses-select");
const elOpenMenuButton = document.getElementById("open-menu-button");
const elCloseMenuButton = document.getElementById("close-menu-button");
const elCloseModalButton = document.getElementById("close-modal-button");

const addCourseItemToCoursesList = ({ image, title, color, soon }) => {
  elCoursesList.innerHTML += `<li style="background-color: ${color};" class="overflow-hidden relative h-80 bg-white rounded-3xl p-3.5 lg:p-8"><h3 class="font-semibold text-xl md:text-2xl">${title} ${
    soon ? "<sup class='text-brand-dark/70'>(Tez kunda)</sup>" : ""
  }</h3><img alt="" width="288" height="288" src="${image}" class="absolute -bottom-8 -right-8 aspect-square max-w-72 w-full h-auto xs:max-w-max xs:w-auto xs:h-11/12 sm:h-auto sm:w-11/12 lg:size-72" /></li>`;
};

const addCourseOptionToCoursesSelect = ({ title }) => {
  elCoursesSelect.innerHTML += `<option value="${title}">${title}</option>`;
};

document.addEventListener("DOMContentLoaded", () => {
  // Manage menu
  const handleOpenMenu = () => openElement(elMenu);
  const handleCloseMenu = () => closeElement(elMenu);

  elOpenMenuButton.addEventListener("click", handleOpenMenu);
  elCloseMenuButton.addEventListener("click", handleCloseMenu);
  elMenuLinks.forEach((l) => l.addEventListener("click", handleCloseMenu));

  // Manage modal
  const handleOpenModal = () => openElement(elModal);
  const handleCloseModal = () => closeElement(elModal);

  elPlayButton.addEventListener("click", handleOpenModal);
  elCloseModalButton.addEventListener("click", handleCloseModal);

  // Manage modal & menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const checkOpen = (el) => !el.getAttribute("class").includes("hidden");

      const isOpenMenu = checkOpen(elMenu);
      const isOpenModal = checkOpen(elModal);

      isOpenMenu && handleCloseMenu();
      isOpenModal && handleCloseModal();
    }
  });

  // Add course items to courses list
  courses.forEach((course) => {
    addCourseItemToCoursesList(course);
    addCourseOptionToCoursesSelect(course);
  });

  // Generate FAQ items
  faq.forEach(({ question, answer }) => {
    elFaqContainer.innerHTML += `<details class="group bg-white rounded-3xl"><summary class="font-medium text-lg p-3.5 sm:py-6 sm:text-xl lg:p-6">${question}?</summary><div class="bg-brand-primary text-white rounded-b-3xl p-3.5 md:text-lg lg:p-6">${answer}</div></details>`;
  });

  // Gallery swiper
  new Swiper(".swiper", {
    loop: true,

    // Navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
