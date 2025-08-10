import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/server" className="text-blue-500">
        Server Page
      </Link>
      <Link href="/client" className="text-blue-500">
        Client (static) Page
      </Link>
      <Link href="/client2" className="text-blue-500">
        Client (ISR) Page
      </Link>
    </div>
  );
}
