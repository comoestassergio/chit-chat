import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "topic",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "address",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "topic" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "completed",
      type: "boolean",
      validation: (rule) => rule.info("Проставить по завершению встречи"),
      initialValue: false,
    }),
  ],
});
