import { getData } from "../getData";
import { NewList } from "@/components/NewList";
import { OldList } from "@/components/OldList";

export const dynamic = "force-dynamic";

export default async function StaticPage() {
  const data = await getData();

  const isNewList = process.env.SERVER_NEW_LIST === "true";

  return (
    <div>
      <h1>Dynamic Page</h1>
      <h2>Display component by env variable on server side</h2>
      <p>Current component: {isNewList ? "NewList" : "OldList"}</p>
      {isNewList ? <NewList items={data} /> : <OldList items={data} />}
    </div>
  );
}
