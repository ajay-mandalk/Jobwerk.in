/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_KUeRXzZw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Navbar } from './Login_74Lpxlie.mjs';

const $$Astro = createAstro();
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  return renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<div class="max-w-2xl mx-auto p-6 text-center"> <h1 class="text-2xl font-bold text-green-600 mb-4">Submission Successful!</h1> <p class="text-gray-600 mb-4">Thank you for your submission. We'll be in touch soon.</p> <a href="/" class="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
Return Home
</a> </div>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/pages/success.astro", void 0);

const $$file = "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/pages/success.astro";
const $$url = "/success";

export { $$Success as default, $$file as file, $$url as url };
