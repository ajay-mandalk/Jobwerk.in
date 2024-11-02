/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, s as spreadAttributes, g as renderComponent, h as defineScriptVars, F as Fragment, i as renderHead } from '../astro_KUeRXzZw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import 'clsx';
import { motion } from 'framer-motion';
/* empty css                          */

const $$Astro$j = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["max-w-screen-xl mx-auto px-5", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/shared/Container.astro", void 0);

const $$Astro$i = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-white border-2 border-blue-500 hover:bg-blue-100 text-black ",
    primary: "bg-blue-600 text-white hover:bg-blue-800  border-2 border-transparent",
    inverted: "bg-white text-black   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/components/ui/Link.astro", void 0);

const AnimatedBanner = () => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "absolute inset-0",
      style: { background: "linear-gradient(to right, rgba(234,179,8,0.5), rgba(34,197,94,0.5), rgba(59,130,246,0.5), rgba(168,85,247,0.5))" },
      animate: {
        x: ["-100%", "100%"]
      },
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 5
      }
    }
  );
};

const $$Astro$h = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="announcement-banner" class="mt-0 relative overflow-hidden bg-gradient-to-r from-background-gradient-from to-background-gradient-to text-text-color" data-astro-cid-3ef6ksr2> <div class="absolute inset-0 overflow-hidden " data-astro-cid-3ef6ksr2> ${renderComponent($$result, "AnimatedBanner", AnimatedBanner, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/components/AnimatedBanner", "client:component-export": "AnimatedBanner", "data-astro-cid-3ef6ksr2": true })} </div> <div class="max-w-7xl mx-auto px-4 text-center" data-astro-cid-3ef6ksr2></div> <div class="relative flex min-h-[44px] w-screen items-center justify-between bg-[#2DF8C5]/80 text-[#013437] md:items-center md:justify-between md:gap-6 md:py-0 md:text-center md:text-[18px]" data-astro-cid-3ef6ksr2> <div class="max-w-7xl mx-auto px-4 text-center font-rubik text-[18px] flex items-center justify-between w-full" data-astro-cid-3ef6ksr2> <p data-astro-cid-3ef6ksr2>
Multiply Your Molds, Devide The Costs | Manufacturing with JobWerk
        &nbsp;<strong class="underline animate-blink" data-astro-cid-3ef6ksr2>Explore More</strong> </p> <button class="hover:opacity-75 transition-opacity" aria-label="Close banner" onclick="document.getElementById('announcement-banner').style.display = 'none'" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> </header> `;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/components/Header.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$g = createAstro();
const $$Astronav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Astronav;
  const { closeOnClick = false } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", " <script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      ".astronav-dropdown button, .astronav-dropdown-submenu button, #astronav-menu"\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'])), renderSlot($$result, $$slots["default"]), defineScriptVars({ closeOnClick }));
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/node_modules/astro-navbar/src/Astronav.astro", void 0);

const $$Astro$f = createAstro();
const $$MenuIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu" aria-label="Toggle Menu"> ${renderSlot($$result, $$slots["default"], renderTemplate` <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"${spreadAttributes(rest)}> <title>Toggle Menu</title> <path class="astronav-close-icon astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path> <path class="astronav-open-icon astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path> </svg> `)} </button>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/node_modules/astro-navbar/src/components/MenuIcon.astro", void 0);

const $$Astro$e = createAstro();
const $$OpenIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-open-icon astronav-toggle", className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/node_modules/astro-navbar/src/components/OpenIcon.astro", void 0);

const $$Astro$d = createAstro();
const $$CloseIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-close-icon astronav-toggle hidden", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/node_modules/astro-navbar/src/components/CloseIcon.astro", void 0);

const $$Astro$c = createAstro();
const $$MenuItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-items astronav-toggle", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </nav>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/node_modules/astro-navbar/src/components/MenuItems.astro", void 0);

const $$Astro$b = createAstro();
const $$Dropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<menu${addAttribute(["astronav-dropdown", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/node_modules/astro-navbar/src/components/Dropdown.astro", void 0);

const $$Astro$a = createAstro();
const $$DropdownSubmenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$DropdownSubmenu;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown-submenu", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/node_modules/astro-navbar/src/components/DropdownSubmenu.astro", void 0);

const $$Astro$9 = createAstro();
const $$DropdownItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown dropdown-toggle hidden", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/node_modules/astro-navbar/src/components/DropdownItems.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$8 = createAstro();
const $$StickyHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$StickyHeader;
  const {
    scrollY = 100,
    defaultClass = "",
    activeClass = "",
    class: className = "",
    ...rest
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<header", "", "> ", " </header> <script>(function(){", '\nlet scrollPos = 0;\nlet ticking = false;\n\nfunction OnScroll(scrollPos) {\n  const headers = document.querySelectorAll(".astronav-sticky-header");\n  const classArray = activeClass.split(" ");\n  const replaceArray = defaultClass.split(" ");\n\n  headers.forEach((header) => {\n    if (scrollPos > scrollY) {\n      header.classList.remove(...replaceArray);\n      header.classList.add("is-active", ...classArray);\n      header.setAttribute("active", "");\n    }\n    //reduce the scrollY to avoid flickering when scrolling up\n    if (scrollPos < Math.max(scrollY - 40, 10)) {\n      header.classList.remove("is-active", ...classArray);\n      header.classList.add(...replaceArray);\n      header.removeAttribute("active");\n    }\n  });\n}\n\n// Scroll event throttling as per MDN\n// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event\n\ndocument.addEventListener("scroll", (event) => {\n  scrollPos = window.scrollY;\n  if (!ticking) {\n    window.requestAnimationFrame(() => {\n      OnScroll(scrollPos);\n      ticking = false;\n    });\n\n    ticking = true;\n  }\n});\n})();<\/script>'])), maybeRenderHead(), addAttribute(["astronav-sticky-header", className, defaultClass], "class:list"), spreadAttributes(rest), renderSlot($$result, $$slots["default"]), defineScriptVars({ scrollY, defaultClass, activeClass }));
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/node_modules/astro-navbar/src/components/StickyHeader.astro", void 0);

const $$Astro$7 = createAstro();
const $$DropDown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$DropDown;
  const { title, lastItem, children } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="relative"> ${renderComponent($$result, "DropdownContainer", $$Dropdown, { "class": "group" }, { "default": ($$result2) => renderTemplate` <button class="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900"> <span>${title}</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 mt-0.5 group-open:rotate-180"> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path> </svg> </button> ${renderComponent($$result2, "DropdownItems", $$DropdownItems, {}, { "default": ($$result3) => renderTemplate` <div${addAttribute([
    "lg:absolute w-full lg:w-48 z-10",
    lastItem ? "lg:right-0 origin-top-right" : "lg:left-0 origin-top-left"
  ], "class:list")}> <div class="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col"> ${children.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class="py-1 text-gray-600 hover:text-gray-900"> ${item.title} </a>`)} </div> </div> ` })} ` })} </li>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/components/navbar/DropDown.astro", void 0);

const $$Astro$6 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuitems = [
    {
      title: "Services",
      path: "#",
      children: [
        { title: "Product Design", path: "/" },
        { title: "Die Casting", path: "#" },
        { title: "Injection Molding", path: "#" }
      ]
    },
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Support",
      path: "/pricing"
    },
    {
      title: "About Jobwerk",
      path: "/about"
    },
    {
      title: "Molding Consultation",
      badge: true,
      path: "/UserQuery"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="flex flex-col lg:flex-row justify-between items-center my-5"> ${renderComponent($$result2, "Astronav", $$Astronav, {}, { "default": ($$result3) => renderTemplate` <div class="flex w-full lg:w-auto items-center justify-between"> <a href="/" class="text-lg"><span class="font-bold text-slate-800">JobWerk</span><span class="text-slate-500">Outsourcing</span> </a> <div class="block lg:hidden"> ${renderComponent($$result3, "MenuIcon", $$MenuIcon, { "class": "w-6 h-6 text-gray-800" })} </div> </div> ${renderComponent($$result3, "MenuItems", $$MenuItems, { "class": "hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0" }, { "default": ($$result4) => renderTemplate` <ul class="flex flex-col lg:flex-row lg:gap-3"> ${menuitems.map((item, index) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, {}, { "default": ($$result5) => renderTemplate`${item.children && renderTemplate`${renderComponent($$result5, "Dropdown", $$DropDown, { "title": item.title, "children": item.children, "lastItem": index === menuitems.length - 1 })}`}${!item.children && renderTemplate`<li> <a${addAttribute(item.path, "href")} class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"> <span> ${item.title}</span> ${item.badge && renderTemplate`<span class="ml-1 px-2 py-0.5 text-[10px] animate-pulse font-semibold uppercase text-white bg-blue-600 rounded-full">
Free
</span>`} </a> </li>`}` })}`)} </ul> <div class="lg:hidden flex items-center mt-3 gap-4"> ${renderComponent($$result4, "Link", $$Link, { "href": "/UserQuery", "style": "muted", "block": true, "size": "md" }, { "default": ($$result5) => renderTemplate`Become a Partner` })} ${renderComponent($$result4, "Link", $$Link, { "href": "/Login", "size": "md", "block": true }, { "default": ($$result5) => renderTemplate`Log In` })} </div> ` })} ` })} <div> <div class="hidden lg:flex items-center gap-4"> <a href="/UserQuery">Become a Partner</a> ${renderComponent($$result2, "Link", $$Link, { "href": "/UserQuery", "size": "md" }, { "default": ($$result3) => renderTemplate`Get a Quote` })} </div> </div> </header> ` })}`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/components/navbar/Navbar.astro", void 0);

const $$Astro$5 = createAstro();
const $$GroupFooterNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$GroupFooterNav;
  return renderTemplate`${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-8 h-max"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/blocks/GroupFooterNav.astro", void 0);

const $$Astro$4 = createAstro();
const $$FooterNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FooterNav;
  const { title, navItems } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="space-y-6"> <h2 class="capitalze font-semibold text-heading-1 text-xl"> ${title} </h2> <ul class="space-y-3 font-medium md:text-lg text-heading-3"> ${navItems.map((navItem) => renderTemplate`<li> <a${addAttribute(navItem.itemLink, "href")} class="transition hover:text-gray-500"> ${navItem.itemText} </a> </li>`)} </ul> </nav>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/shared/FooterNav.astro", void 0);

const $$Astro$3 = createAstro();
const $$Paragraph = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`md:text-lg text-heading-3 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/shared/Paragraph.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const footerNav1 = [
    {
      itemText: "Product Design",
      itemLink: "#"
    },
    {
      itemText: "Die Casting",
      itemLink: "#"
    },
    {
      itemText: "Injection Molding",
      itemLink: "#"
    },
    {
      itemText: "OutSourcing",
      itemLink: "#"
    },
    {
      itemText: "Manufacturing Services",
      itemLink: "#"
    }
  ];
  const footerSupport = [
    {
      itemText: "FAQs",
      itemLink: "#"
    },
    {
      itemText: "Guides",
      itemLink: "#"
    },
    {
      itemText: "Contact",
      itemLink: "#"
    }
  ];
  const footerCompany = [
    {
      itemText: "About Jobwerk",
      itemLink: "/about"
    },
    {
      itemText: "Why Jobwerk",
      itemLink: "#"
    },
    {
      itemText: "Industries",
      itemLink: "#"
    },
    {
      itemText: "Insights",
      itemLink: "/Brands.astro"
    }
  ];
  const footerLegal = [
    {
      itemText: "Claim",
      itemLink: "/#"
    },
    {
      itemText: "Privacy",
      itemLink: "#"
    },
    {
      itemText: "T&C",
      itemLink: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16"></div> <footer class="relative  bg-gradient-to-tr from-gray-100 to-gray-200 pt-16 rounded-lg"> <div class="absolute right-0 top-0 h-full w-full flex justify-end"></div> ${renderComponent($$result, "Container", $$Container, { "className": "pb-8 relative overflow-auto" }, { "default": ($$result2) => renderTemplate` <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-sm w-24 h-16 sm:w-48 sm:h-36 rotate-12"></span> <div class="grid grid-cols-2 lg:grid-cols-3 lg:items-stretch gap-8 relative"> <div class="col-span-2 lg:col-span-1 h-auto flex flex-col"> <div class="h-full"> <a href="/" class="text-lg"><span class="font-bold text-slate-800">JobWerk</span><span class="text-white-500">Outsourcing</span> </a> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-2 " }, { "default": ($$result3) => renderTemplate`
Source Your Plastic Mold Parts.
` })} </div> ${renderComponent($$result2, "Link", $$Link, { "href": "#", "href": "https://web3templates.com/templates/astroship-starter-website-template-for-astro", "target": "_blank", "class": " flex gap-1 items-center justify-center mt-4", "rel": "noopener" }, { "default": ($$result3) => renderTemplate`
Get a Quote
` })} <!-- social links --> <div class="min-h-max flex items-center gap-4 text-heading-3 mt-8"> <a href="#" class="transition hover:text-heading-1 hover:scale-105"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path> </svg> <span class="sr-only">social link</span> </a> <a href="#" class="transition hover:text-heading-1 hover:scale-105"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path> </svg> <span class="sr-only">social link</span> </a> <a href="#" class="transition hover:text-heading-1 hover:scale-105"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg> <span class="sr-only">social link</span> </a> <a href="#" class="transition hover:text-heading-1 hover:scale-105"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path> </svg> <span class="sr-only">social link</span> </a> </div> </div> ${renderComponent($$result2, "GroupFooterNav", $$GroupFooterNav, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "Company", "navItems": footerCompany })} ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "Support", "navItems": footerSupport })} ` })} ${renderComponent($$result2, "GroupFooterNav", $$GroupFooterNav, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "Solutions", "navItems": footerNav1 })} ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "Legal", "navItems": footerLegal })} ` })} </div> ` })} <div class=" bg-gradient-to-tl from-box-bg py-2 relative"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex justify-between items-center gap-6 md:text-lg text-heading-3"> <div>
&copy; <span id="year"></span> Jobwerk 2024. All right reserved
</div> <div>
made with ❤ <a href="https://fantomproducts.in/" target="_blank" class="font-semibold">Fantom Products</a> </div> </div> ` })} </div> </footer>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Start of HubSpot Embed Code --><script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/46558019.js"><\/script><!-- End of HubSpot Embed Code -->', "</head> <body> ", " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/layouts/Layout.astro", void 0);

const supabaseUrl = "https://fkmquaeeduekpvhfpkdd.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrbXF1YWVlZHVla3B2aGZwa2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NTI2NjgsImV4cCI6MjA0NjEyODY2OH0.7gZ_mgyKT-8P1CosRd8JKCr3hEKGJx0lq-z7vBi1YRM";
const supabase = createClient(supabaseUrl, supabaseKey);

function Login$1() {
  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error: signUpError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              name: formData.name
            }
          }
        });
        if (signUpError)
          throw signUpError;
        alert("Check your email for the confirmation link!");
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password
        });
        if (signInError)
          throw signInError;
      }
    } catch (error2) {
      setError(error2.message);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto bg-white p-8 rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-center mb-6", children: mode === "login" ? "Login" : "Create Account" }),
    error && /* @__PURE__ */ jsx("div", { className: "bg-red-50 text-red-600 p-4 rounded-md mb-6", children: error }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      mode === "signup" && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Name" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            required: true,
            "aria-label": "Full name",
            value: formData.name,
            onChange: (e) => setFormData((prev) => ({ ...prev, name: e.target.value })),
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Email" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            required: true,
            "aria-label": "Email address",
            value: formData.email,
            onChange: (e) => setFormData((prev) => ({ ...prev, email: e.target.value })),
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Password" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            required: true,
            "aria-label": "Password",
            minLength: 6,
            value: formData.password,
            onChange: (e) => setFormData((prev) => ({ ...prev, password: e.target.value })),
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50",
          children: loading ? "Processing..." : mode === "login" ? "Login" : "Sign Up"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setMode(mode === "login" ? "signup" : "login"),
        className: "text-blue-600 hover:text-blue-800",
        children: mode === "login" ? "Don't have an account? Sign Up" : "Already have an account? Login"
      }
    ) })
  ] });
}

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4"> ${renderComponent($$result2, "LoginComponent", Login$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/components/Auth/Login", "client:component-export": "Login" })} </main> ` })}`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/pages/Login.astro", void 0);

const $$file = "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/pages/Login.astro";
const $$url = "/Login";

const Login = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Navbar as $, Login as L, $$Link as a, $$Container as b, $$Layout as c, supabase as s };
