
import subLinks from "./data.js";

const nav = document.querySelector(".navbar");
const toggleBtn = document.querySelector(".toggle-btn");
const linkBtn = [...document.querySelectorAll(".link-btn")];

const hero = document.querySelector(".hero");

const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const closeBtn = document.querySelector(".close-btn");
const sidebarLinks = document.querySelector(".sidebar-links");

const subMenu = document.querySelector(".submenu");

// show/hide sidebar
toggleBtn.addEventListener("click", () => {
    sidebarWrapper.classList.add("show");
})

closeBtn.addEventListener("click", () => {
    sidebarWrapper.classList.remove("show");
})

// set sidebar
sidebarLinks.innerHTML = subLinks
  .map((items) => {
    // console.log(items)
    const { links, page } = items;
    return ` <article>
        <h4>${page}</h4>

        <div class="sidebar-subLinks">
        ${links.map((links) => {
            // console.log(links)
            return `
            <a href="${links.url}">
            <i class="${links.icon}"></i>${links.label}
            </a>
            `
            }).join("")}
        </div>
    </article>
    `
  })
  .join("");