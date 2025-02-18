export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
module.exports = [
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: ["https://mi-frontend.vercel.app"]
    },
  },
];
