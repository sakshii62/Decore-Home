function Categories() {
  const categories = [
    {
      name: "VASES & FLOWERS",
      image: "https://i.pinimg.com/736x/2f/44/ff/2f44ff94dd2efb75373989447e8be478.jpg",
    },
    {
      name: "CANDLES & HOLDERS",
      image: "https://i.pinimg.com/1200x/54/39/0d/54390dcc01af73ae94208d10ef614957.jpg",
    },
    {
      name: "CUSHIONS & COVERS",
      image: "https://i.pinimg.com/736x/d0/26/97/d026973bc7e8dda4b67fad94a3fd7242.jpg",
    },
    {
      name: "WALL DECOR",
      image: "https://i.pinimg.com/736x/55/0c/ac/550cac1ac607cbf3de06e32d90e7c761.jpg",
    },
    {
      name: "STORAGE & BASKETS",
      image: "https://i.pinimg.com/736x/71/40/88/714088b5acb329adc0cb5b8e78c86a14.jpg",
    },
    {
      name: "HOME FRAGRANCE",
      image: "https://i.pinimg.com/1200x/55/08/f2/5508f22cf93681766ba4c44fbd6d9a78.jpg",
    },
  ];

  return (
    <section className="bg-white px-6 py-12 md:px-12 max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-xs uppercase tracking-[0.25em] font-bold text-[#292920]">
          SHOP BY CATEGORY
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
        {categories.map((category) => (
          <a
            href="#"
            key={category.name}
            className="group flex flex-col items-center text-center"
          >
            {/* Circular Image Container */}
            <div className="w-full aspect-square rounded-full overflow-hidden bg-[#FAF9F6] mb-3 border border-zinc-100">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Category Title */}
            <h3 className="text-[11px] font-bold tracking-wider text-[#292920] mb-1">
              {category.name}
            </h3>

            {/* Shop Now Action */}
            <span className="text-[11px] text-gray-500 group-hover:text-black transition">
              Shop Now
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Categories;