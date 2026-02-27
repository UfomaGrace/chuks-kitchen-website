import MenuCard from "./MenuCard";

export default function MenuSection({ title, items }) {
  return (
    <div className="px-4 lg:px-18 py-6 lg:py-12 bg-gray-200">
      <h2 className="text-2xl font-bold mb-4 lg:mb-8">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-17.5 gap-6">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}