import {flatRoutes} from 'remix-flat-routes';
import {config} from '@netlify/remix-adapter';

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...(process.env.NODE_ENV === 'production' ? config : undefined),
  ignoredRouteFiles: ['**/.*'],
  /*routes: async (defineRoutes) => {
    return flatRoutes('routes', defineRoutes);
  },*/
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
