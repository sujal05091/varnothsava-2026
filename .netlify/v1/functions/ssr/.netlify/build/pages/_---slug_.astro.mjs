/* empty css                                  */
import { c as createComponent, d as createAstro, i as renderComponent, j as renderHead, r as renderTemplate } from '../chunks/astro/server_x88k1Hla.mjs';
import 'piccolore';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

const SEO = {
  Tags: ({ seoTagsServiceConfig }) => null
};
const loadSEOTagsServiceConfig = async (config) => ({
  title: "Varnothsava 2K26",
  description: "Welcome to Varnothsava 2K26",
  ...config
});

const Head = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("meta", { charSet: "UTF-8" }),
    /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
    /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://static.parastorage.com" })
  ] });
};

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const seoTagsServiceConfig = await loadSEOTagsServiceConfig({
    pageUrl: Astro2.url.href,
    itemData: {
      pageName: "Home"
    }
  });
  return renderTemplate`<html lang="en" class="w-full h-full"> <head>${renderComponent($$result, "Head", Head, {})}${renderComponent($$result, "SEO.Tags", SEO.Tags, { "seoTagsServiceConfig": seoTagsServiceConfig, "slot": "seo-tags" })}<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${renderHead()}</head> <body class="w-full h-full m-0 p-0"> <div id="root" class="w-full h-full"> ${renderComponent($$result, "AppRouter", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/Router", "client:component-export": "default" })} </div> </body></html>`;
}, "C:/Users/sujal/Downloads/varnothsava-2k26-main/varnothsava-2k26-main/src/pages/[...slug].astro", void 0);

const $$file = "C:/Users/sujal/Downloads/varnothsava-2k26-main/varnothsava-2k26-main/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
