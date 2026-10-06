
import subLinks from "./data.js";

const nav = document.querySelector(".navbar");
const toggleBtn = document.querySelector(".toggle-btn");
const linkBtn = [...document.querySelectorAll(".link-btn")];

const hero = document.querySelector(".hero");

const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const closeBtn = document.querySelector(".close-btn");
const sidebarLinks = document.querySelector(".sidebar-links");

const submenu = document.querySelector(".submenu");

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

  linkBtn.forEach((btn) => { 
    btn.addEventListener("mouseover", function(e) { 
        // console.log(e.currentTarget)
        const text = e.currentTarget.textContent;
        const temBtn = e.currentTarget.getBoundingClientRect();
        const center = (temBtn.left + temBtn.right) / 2;
        const bottom = temBtn.bottom  -3;
        // console.log(temBtn, center, bottom);

        const tempPage = subLinks.find(({page}) => page === text);
        // console.log(tempPage);
        if (tempPage) {
            const {page, links} = tempPage;
            submenu.classList.add("show");
            submenu.style.left = `${center}px`;
            submenu.style.top = `${bottom}px`;
            
            // OPTIONAL
            let column = 'col-2';
            
            if (links.length === 3) {
                column = 'col-3'
            }
            if (links.length > 3) {
                column = 'col-4'
            }
            submenu.innerHTML = `
            <section>
            <h4>${page}</h4>
            <div class="submenu-center ${column}">
            ${links
              .map((links) => {
                return `
                <a href="${links.url}">
                <i class="${links.icon}"></i>${links.label}
                </a>
                `;
              })
              .join("")}
            </div>
            </section>
            `;
        }

        hero.addEventListener("mouseover", function(e) {
            submenu.classList.remove('show')
        })

        nav.addEventListener('mouseover', function (e) {
            if (!e.target.classList.contains('link-btn')) {
                submenu.classList.remove('show')
            }
        })
        
    })
  })