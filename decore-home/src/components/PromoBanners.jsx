function PromoBanners() {
  return (
    <div className="max-w-7xl mx-auto p-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Banner 1: Sitewide Offer */}
        <div className="relative rounded-xl overflow-hidden min-h-[280px] flex items-center bg-[#5c6248] text-white">
          
          {/* Background Image */}
          <img
            src="/Baner2.jpeg"
            alt="Home decor"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Optional Dark Overlay so white text stands out clearly */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Text Content Overlay */}
          <div className="relative z-10 p-8 sm:p-10 max-w-md">
            <p className="text-xs mb-2 tracking-wider uppercase opacity-90">
              LIMITED TIME OFFER
            </p>

            <h2 className="text-3xl font-serif mb-3 leading-tight">
              20% OFF <br /> SITEWIDE
            </h2>

            <p className="mb-6 text-sm opacity-95">
              Use code: <b>DECOR10</b>
            </p>

            <button className="bg-white text-black px-5 py-2.5 rounded text-xs font-semibold tracking-wider hover:bg-gray-100 transition shadow">
              SHOP THE OFFER
            </button>
          </div>

        </div>

        {/* Banner 2: New Collection */}
        <div className="relative rounded-xl overflow-hidden min-h-[280px] flex items-center bg-[#ece8e1] text-black">
          
          {/* Background Image */}
          <img
            src="/Baner1.jpeg"
            alt="Shelf decor"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Optional Light Overlay to keep text readable if needed */}
          <div className="absolute inset-0 bg-white/10"></div>

          {/* Text Content Overlay */}
          <div className="relative z-10 p-8 sm:p-10 max-w-md">
            <p className="text-xs mb-2 tracking-wider uppercase opacity-80">
              NEW COLLECTION
            </p>

            <h2 className="text-3xl font-serif mb-3 leading-tight">
              New Arrivals <br /> For Every Corner
            </h2>

            <p className="text-sm mb-6 opacity-90">
              Discover our latest home decor collection.
            </p>

            <button className="bg-[#5c6248] text-white px-5 py-2.5 rounded text-xs font-semibold tracking-wider hover:bg-[#4b5238] transition shadow">
              EXPLORE NOW
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default PromoBanners;