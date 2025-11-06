import { Collection } from "tinacms";

const Post: Collection = {
  name: "post",
  label: "Posts",
  path: "content/posts",
  fields: [
    {
          type: "object",
          name: "image",
          label: "Image",
          fields: [
            {
              type: "image",
              name: "src",
              label: "Image",
            },
          ],
        },
            {
          type: "object",
          name: "pdf",
          label: "PDF",
          fields: [
            {
              type: "image",
              name: "src",
              label: "PDF",
            },
          ],
        },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
        {
      type: "string",
      name: "external_url",
      label: "External URL",
    },
    {
      type: 'string',
      name: 'projects',
      label: 'Projects',
      description: 'Related Projects',
      list: true,
      ui: {
        component: 'tags',
      },
      options: ['freedimensional','lanchonete','luv-til-it-hurts','el-mejor-karate','farm-school','my-art-world'],
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
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
};

export default Post;
