import { defineConfig } from "tinacms";
import Post from "./collections/post";
import Project from "./collections/project";
import Page from "./collections/page";

export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID!,
  branch:
    process.env.TINA_BRANCH! || // custom branch env override
    process.env.VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [Page, Post, Project],
  },
    search: {
    tina: {
      indexerToken: 'e467baa9022c39a6b168bb23055e8de11bc6e8a4',
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
