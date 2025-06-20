"use client";
import { useTina } from "tinacms/dist/react";
import React from "react";
import type { Template } from "tinacms";
import type { PageBlocksDemoComponent } from "@tina/__generated__/types";

export function DemoComponent({ data }: { data: PageBlocksDemoComponent }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export const demoComponentBlockSchema: Template = {
  name: "demoComponent",
  label: "Demo Component",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
  ],
};
