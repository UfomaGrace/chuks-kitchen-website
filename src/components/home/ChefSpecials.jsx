import React from 'react'

export default function ChefSpecials() {
    const specials = [
        {
            id: 1,
            image: "/images/tilapia.png",
            title: "Spicy Tilapia Pepper Soup",
            description: "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
            price: "₦3,500",
            button: "Add to Cart"
        },
        {
            id: 2,
            image: "/images/jollof.png",
            title: "Jollof Rice & Fried Chicken",
            description: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
            price: "₦3,500",
            button: "Add to Cart"
        },
        {
            id: 3,
            image: "/images/jollof.png",
            title: "Jollof Rice & Fried Chicken",
            description: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
            price: "₦3,500",
            button: "Add to Cart"
        },
        {
            id: 4,
            image: "/images/jollof.png",
            title: "Jollof Rice & Smoked Chicken",
            description: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
            price: "₦3,500",
            button: "Add to Cart"
        },
        {
            id: 5,
            image: "/images/Jollof&Chicken.png",
            title: "Jollof Rice & Fried Chicken",
            description: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
            price: "₦3,500",
            button: "Add to Cart"
        },
        {
            id: 6,
            image: "/images/Egusi.png",
            title: "Egusi Soup & Pounded Yam",
            description: "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
            price: "₦3,500",
            button: "Add to Cart"
        },
    ]
  return (
    <div className='bg-gray-100 px-18 py-18'>
        <h2 className='text-center text-2xl font-bold mb-10'>Chef's Specials</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-17.5'>
            {specials.map((item) => (
                <div key={item.id} 
                    className='group bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1'>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className='py-3 px-4.5 mb-4 flex flex-col grow'>
                        <div className='font-semibold text-xl leading-8.5'>{item.title}</div>
                        <div className='font-medium text-[16px] leading-6 text-[#1F2937] py-2'>{item.description}</div>
                        <div className='flex justify-between items-center mt-auto'>
                            <span className='text-sm font-semibold text-[#FF7A18]'>
                                {item.price}
                            </span>
                            <span className='px-6 py-3 text-sm font-semibold text-white bg-linear-to-r from-[#FF7A18] to-[#FF9A3D] rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer'>
                                {item.button}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
