/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, e as addAttribute } from '../astro_KUeRXzZw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Link, b as $$Container, c as $$Layout } from './Login_74Lpxlie.mjs';
import 'clsx';

const $$Astro$5 = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<div class="bg-blue-800 p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"> <h2 class="text-white text-4xl md:text-6xl tracking-tight">
Get Best Quote with Jobwerk™
</h2> <p class="text-slate-400 mt-4 text-lg md:text-xl ">
manufacturer to streamline procurement and secure competitive quotes for Business needs.
</p> <div class="flex mt-5 font-semibold"> ${renderComponent($$result, "Link", $$Link, { "href": "#", "style": "inverted" }, { "default": ($$result2) => renderTemplate`Quote & Source Your Parts` })} </div> </div>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/components/Cta.astro", void 0);

const $$Astro$4 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<div> <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
Source Plastic Mold Parts.
</h1> <p class="text-lg mt-4 text-slate-600 max-w-xl">
Source Your Plastic Mold Parts.<wbr>With Outsourcing Injection Molding(Jobwerk™).<wbr>Delivering Plastic Parts With Reliability and Cost-effectiveness
</p> <div class="mt-6 flex flex-col sm:flex-row gap-3"> ${renderComponent($$result, "Link", $$Link, { "href": "https://afeigzuaza1.typeform.com/to/EUuNVQNA", "target": "_blank", "size": "lg", "class": "flex gap-1 items-center justify-center ", "rel": "noopener" }, { "default": ($$result2) => renderTemplate`
Take a Survey
` })} ${renderComponent($$result, "Link", $$Link, { "size": "lg", "style": "outline", "rel": "noopener", "href": "/UserQuery", "class": "flex gap-1 items-center justify-center ", "target": "_blank" }, { "default": ($$result2) => renderTemplate`
Become a Partner
` })} </div> </div> `;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/components/Hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate``;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/components/Services.astro", void 0);

const $$Astro$2 = createAstro();
const $$ShowcaseCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ShowcaseCard;
  const { title, description, imageUrl, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-lg overflow-hidden"> <img${addAttribute(imageUrl, "src")}${addAttribute(title, "alt")} class="w-full h-48 object-cover"> <div class="p-6"> <h3 class="text-2xl font-bold mb-3">${title}</h3> <p class="text-gray-600 mb-4">${description}</p> <ul class="mb-6 space-y-2"> ${features.map((feature) => renderTemplate`<li class="flex items-center text-gray-600"> <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"> <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path> </svg> ${feature} </li>`)} </ul> <div class="border-t pt-4"> <div class="flex justify-between items-center mb-4"> <div> <p class="text-gray-600">Price per ticket</p> <p class="text-2xl font-bold text-blue-600">₹50,000</p> </div> <div> <p class="text-gray-600">Period</p> <p class="text-lg font-semibold">30 days</p> </div> </div> <a href="#booking" class="block w-full bg-blue-600 text-white text-center py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
Book Now
</a> </div> </div> </div>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/components/ShowcaseCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Showcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Showcase;
  const dies = [
    {
      title: "Injection Mold Die",
      description: "Perfect for high-volume plastic parts production with complex geometries.",
      imageUrl: "/images/mold1.jpg",
      features: [
        "High precision tolerances",
        "Multiple cavity options",
        "Quick cycle times",
        "Suitable for most polymers"
      ]
    },
    {
      title: "Compression Mold Die",
      description: "Ideal for thermoset materials and large structural parts.",
      imageUrl: "/images/mold2.jpg",
      features: [
        "Excellent material flow",
        "Low maintenance",
        "Minimal material waste",
        "Superior surface finish"
      ]
    },
    {
      title: "Transfer Mold Die",
      description: "Specialized for intricate parts with complex geometries.",
      imageUrl: "/images/mold4.jpg",
      features: [
        "High dimensional accuracy",
        "Perfect for inserts",
        "Consistent quality",
        "Cost-effective production"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="showcase" class="py-16 bg-gray-50"> <div class="max-w-7xl mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12">Our Die Solutions</h2> <div class="grid md:grid-cols-3 gap-8"> ${dies.map((die) => renderTemplate`${renderComponent($$result, "ShowcaseCard", $$ShowcaseCard, { ...die })}`)} </div> </div> </section>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/components/Showcase.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "JobWerk - Multiply Your Molds | Divide The Cost" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Showcase", $$Showcase, {})} ${renderComponent($$result3, "Services", $$Services, {})} ${renderComponent($$result3, "Cta", $$Cta, {})}  ` })} ` })}`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/pages/index.astro", void 0);

const $$file = "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
