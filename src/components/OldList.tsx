export function OldList({
  items,
}: {
  items: { id: number; title: string; description: string }[];
}) {
  return (
    <ul className="border border-gray-500 p-2 m-2 bg-white">
      {items.map((item, index) => (
        <li
          key={index}
          className="border-b border-gray-400 p-1 text-sm text-black"
        >
          {item.title}

          <p className="text-xs text-gray-500">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
