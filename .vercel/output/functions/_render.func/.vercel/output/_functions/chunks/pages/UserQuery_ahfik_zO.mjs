/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_KUeRXzZw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { s as supabase, $ as $$Navbar } from './Login_74Lpxlie.mjs';

const $$Astro = createAstro();
const $$UserQuery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UserQuery;
  let errormessage = "";
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const file = formData.get("file");
      if (file && file.size > 10 * 1024 * 1024) {
        throw new Error("File size must be less than 10MB");
      }
      const submission = {
        first_name: formData.get("firstName"),
        last_name: formData.get("lastName"),
        project_description: formData.get("project"),
        communications_consent: formData.get("communications") === "on",
        data_processing_consent: formData.get("dataProcessing") === "on"
      };
      let file_url = null;
      if (file && file.size > 0) {
        const timestamp = (/* @__PURE__ */ new Date()).getTime();
        const fileName = `${timestamp}-${file.name}`;
        const { data, error: uploadError } = await supabase.storage.from("project-files").upload(fileName, file);
        if (uploadError)
          throw uploadError;
        file_url = data.path;
      }
      const { error: insertError } = await supabase.from("user_queries").insert([{ ...submission, file_url }]);
      if (insertError)
        throw insertError;
      return Astro2.redirect("/success");
    } catch (error) {
      console.error("Error:", error);
      errormessage = error instanceof Error ? error.message : "Something went wrong. Please try again.";
    }
  }
  return renderTemplate`<!-- Update the form to handle file uploads -->${renderComponent($$result, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<div class="max-w-2xl mx-auto px-4"> ${errormessage && renderTemplate`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"> ${errormessage} </div>`} <form class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md" method="POST" enctype="multipart/form-data"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> <div> <label for="firstName" class="block text-gray-700 font-medium mb-2">First Name</label> <input type="text" id="firstName" name="firstName" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div> <label for="lastName" class="block text-gray-700 font-medium mb-2">Last Name</label> <input type="text" id="lastName" name="lastName" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> </div> <div class="mb-6"> <label for="project" class="block text-gray-700 font-medium mb-2">Tell Us About Your Project</label> <textarea id="project" name="project" rows="4" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea> </div> <div class="mb-6"> <label for="file" class="block text-gray-700 font-medium mb-2">Upload File</label> <input type="file" id="file" name="file" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"> <p class="mt-1 text-sm text-gray-500">
Accepted file formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
</p> </div> <div class="mb-6 space-y-4"> <div class="flex items-start"> <input type="checkbox" id="communications" name="communications" required class="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"> <label for="communications" class="ml-2 block text-sm text-gray-700">
I agree to receive communications from Jobwerk
</label> </div> <div class="flex items-start"> <input type="checkbox" id="dataProcessing" name="dataProcessing" required class="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"> <label for="dataProcessing" class="ml-2 block text-sm text-gray-700">
I agree to allow Jobwerk to store and process my personal data
</label> </div> </div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
Submit
</button> </form> </div>`;
}, "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/pages/UserQuery.astro", void 0);

const $$file = "C:/Users/Ajaym/OneDrive/Desktop/Jobwerk/src/pages/UserQuery.astro";
const $$url = "/UserQuery";

export { $$UserQuery as default, $$file as file, $$url as url };
