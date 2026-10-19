function BestSellers() {
  const products = [
    {
      name: "Ceramic Vase",
      price: "₹799",
      oldPrice: "₹999",
      rating: "★★★★★",
      image: "https://i.pinimg.com/736x/51/38/b0/5138b062bcb68d061532d5efa097893b.jpg",
    },
    {
      name: "Table Lamp",
      price: "₹1,499",
      oldPrice: "₹1,799",
      rating: "★★★★★",
      image: "https://i.pinimg.com/1200x/3d/55/da/3d55da93e590bdfef149540a7ffbcd32.jpg",
    },
    {
      name: "Blanket",
      price: "₹599",
      oldPrice: "₹799",
      rating: "★★★★☆",
      image: "https://i.pinimg.com/1200x/8f/5a/49/8f5a494afb7acef81b80f425fd9bc034.jpg",
    },
    {
      name: "Scented Candle",
      price: "₹449",
      oldPrice: "₹599",
      rating: "★★★★★",
      image: "https://i.pinimg.com/736x/07/fe/70/07fe706c437415153b89e764ee6109fa.jpg",
    },
    {
      name: "Aesthetic Donut Vase",
      price: "₹449",
      oldPrice: "₹599",
      rating: "★★★★★",
      image: "https://i.pinimg.com/736x/b5/e0/94/b5e0949ef4175ca7098123f7d6e4b1f6.jpg",
    },
    {
      name: "Handmade Macrame Wall Hanging",
      price: "₹449",
      oldPrice: "₹599",
      rating: "★★★★★",
      image: "https://i.pinimg.com/736x/92/cc/c2/92ccc2399c89876cba285a46c146c78c.jpg",
    },
    {
      name: "Decorative Bowl",
      price: "₹449",
      oldPrice: "₹599",
      rating: "★★★★★",
      image: "https://i.pinimg.com/1200x/38/33/5d/38335d8d650edfeb9574abead190d05a.jpg",
    },
  ];

  return (
    <section className="bg-white px-6 py-12 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xs uppercase tracking-[0.25em] font-bold text-[#292920]">
          BEST SELLERS
        </h2>
        <a 
          href="#" 
          className="text-xs uppercase tracking-wider font-semibold text-[#292920] hover:opacity-60 transition flex items-center gap-1"
        >
          VIEW ALL <span>→</span>
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between min-w-0 bg-white"
          >
            <div>
              {/* Image Container with Fixed Height & Favorite Icon */}
              <div className="relative overflow-hidden rounded-lg bg-[#FAF9F6] h-48 border border-zinc-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                <button 
                  type="button" 
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-sm text-xs transition"
                  aria-label="Add to favorites"
                >
                  ♡
                </button>
              </div>

              {/* Product Info */}
              <div className="pt-3">
                <div className="mb-1 text-[10px] tracking-widest text-[#B68A45]">
                  {product.rating}
                </div>

                <h3 className="line-clamp-2 text-xs font-medium text-[#292920] h-8">
                  {product.name}
                </h3>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs font-bold text-[#292920]">
                    {product.price}
                  </span>
                  <span className="text-[10px] text-gray-400 line-through">
                    {product.oldPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              className="mt-3 w-full border border-[#5c6248] px-1 py-1.5 text-[10px] uppercase tracking-wider text-[#5c6248] transition hover:bg-[#5c6248] hover:text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestSellers;