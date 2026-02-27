export default function MenuCard({ item }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-sm duration-300 transition-all ease-out cursor-pointer hover:shadow-xl hover:-translate-y-1">
      
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div className="py-3 px-4.5 mb-4 flex flex-col grow">
        <h3 className="mb-1 font-semibold text-xl leading-8.5">{item.title}</h3>

        <p className="font-medium text-[16px] leading-6 text-[#1F2937] py-2">
          {item.description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span className="text-[#FF7A18] font-semibold text-sm">
            ₦{item.price}
          </span>

          <button className="bg-[#FF7A18] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
            +
          </button>
        </div>
      </div>
    </div>
  );
}