// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "chit-chat",
  title: "Chit Chat",
  projectId: "hy5wyd3m",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [...schemaTypes],
  },
});
