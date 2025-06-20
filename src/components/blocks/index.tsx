import { tinaField } from "tinacms/dist/react";
import { Page, PageBlocks } from "@tina/__generated__/types";
import { DemoComponent } from "@/components/blocks/demo-component";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  if (!props.blocks) return null;
  return (
    <>
      {props.blocks.map(function (block, i) {
        return (
          <div key={i} data-tina-field={tinaField(block)}>
            <Block {...block} />
          </div>
        );
      })}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksDemoComponent":
      return <DemoComponent data={block} />;
    default:
      return null;
  }
};
