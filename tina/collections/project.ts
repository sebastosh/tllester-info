import { Collection } from "tinacms";

const Project: Collection = {
  name: "project",
  label: "Projects",
  path: "content/projects",
  format: "md",
  match: {
    include: "**/*", // This ensures all files in the path are considered
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "datetime",
      label: "Date",
      name: "date",
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
    {
      type: "rich-text",
      name: "summary",
      label: "Summary",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
};

export default Project;
