// Netlify Function wrapper around the TanStack Start SSR handler.
// The build emits dist/server/server.js, whose default export exposes a
// Web `fetch(request, env, ctx)` handler. Netlify Functions v2 already speak
// the Web Request/Response API, so we just forward the request through.
import handler from "../../dist/server/server.js";

export default async (request, context) => {
  return handler.fetch(request, context?.env ?? {}, context);
};

// Catch every path; `preferStatic` lets real files in the publish dir
// (assets, favicon.svg, resume.pdf) win before the function runs.
export const config = {
  path: "/*",
  preferStatic: true,
};
