type Item = {
  id: number;
  title: string;
  description: string;
};

interface ListProps {
  items: Item[];
}

export function NewList({ items }: ListProps) {
  return (
    <ul className="grid gap-4 p-4">
      {items.map((item) => (
        <li
          key={item.id}
          className="rounded-2xl bg-white shadow-lg p-5 transition-transform hover:scale-[1.02] hover:shadow-xl border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
