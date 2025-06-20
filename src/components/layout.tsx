import React, { PropsWithChildren } from "react";
import { LayoutProvider } from "@/components/layout-context";
import client from "@tina/__generated__/client";

type LayoutProps = PropsWithChildren & {
  rawPageData?: any;
};

export default async function Layout({ children, rawPageData }: LayoutProps) {
  return (
    <LayoutProvider pageData={rawPageData}>
      <main className="overflow-x-hidden pt-20">{children}</main>
    </LayoutProvider>
  );
}
