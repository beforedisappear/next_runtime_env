"use client";

import { env } from "next-runtime-env";
import { NewList } from "@/components/NewList";
import { OldList } from "@/components/OldList";

type Item = {
  id: number;
  title: string;
  description: string;
};

interface ListProps {
  items: Item[];
}

export function Content({ items }: ListProps) {
  const isNewList = env("NEXT_PUBLIC_NEW_LIST") === "true";

  return (
    <div>
      <h1>ISR page</h1>
      <h2>Display component by env variable on client side</h2>
      <p>Current component: {isNewList ? "NewList" : "OldList"}</p>

      {isNewList ? <NewList items={items} /> : <OldList items={items} />}
    </div>
  );
}
