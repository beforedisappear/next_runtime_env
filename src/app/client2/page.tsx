import { Content } from "./content";
import { getData } from "../getData";

export const revalidate = 30;
export const dynamic = "force-static";

export default async function ClientPage() {
  const data = await getData();

  const items = data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
  }));

  return <Content items={items} />;
}
