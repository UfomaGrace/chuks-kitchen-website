import React from 'react'

export default function PopularCategories() {
    const categories = [
        {
            id: 1,
            title: "Jollof Delights",
            image: "/images/jollof.png"
        },
        {
            id: 2,
            title: "Swallow and Soup",
            image: "/images/swallow.png"
        },
        {
            id: 3,
            title: "Grills & BBQ",
            image: "/images/grills.png"
        },
        {
            id: 4,
            title: "Sweet Treats",
            image: "/images/sweets.png"
        },
        {
            id: 5,
            title: "Jollof Delights",
            image: "/images/swallow.png"
        },
        {
            id: 6,
            title: "Jollof Delights",
            image: "/images/grills.png"
        },
    ]
  return (
    <div className='lg:px-18 px-4 lg:py-18 py-6 bg-gray-200'>
        <h2 className="text-center text-2xl font-bold mb-10">Popular Categories</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-17.5 gap-6'>
            {categories.map((item) => (
                <div key={item.id} className="group bg-white rounded-2xl border-2 border-white overflow-hidden h-full flex flex-col shadow-sm duration-300 transition-all ease-out cursor-pointer hover:shadow-xl hover:-translate-y-1">
                    <img src={item.image} alt={item.title} 
                        className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className=" text-center font-medium px-4 py-10">{item.title}</div>
                </div>
            ))}
        </div>
    </div>
  )
}
