import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot:true,
      }
    }),
    defineField({
      name: "blogcategories",
      type: "array",
      of: [
        defineArrayMember({type:"reference", to:{type:"blogcategory"}}),
      ],
    }),
    defineField({
      name: "publishedAt",
      type:"datetime",
    }),
    defineField({
      name: "isLatest",
      title: "Latest Blog",
      type: "boolean",
      description: "Toggle to latest on ro off",
      initialValue:true,
    })
  ],
})