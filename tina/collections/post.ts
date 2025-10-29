import { Collection } from "tinacms";

const Post: Collection = {
  name: "post",
  label: "Posts",
  path: "content/posts",
  fields: [
    {
          type: "object",
          name: "featured_image",
          label: "Featured Image",
          fields: [
            {
              type: "image",
              name: "src",
              label: "Image",
            },
            {
              type: "string",
              name: "alt",
              label: "Image Description (alt)",
            },
            {
              type: "string",
              name: "caption",
              label: "Image Caption (title)",
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
