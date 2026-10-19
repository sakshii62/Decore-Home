
function Hero() {
  return (
    <section className="relative grid min-h-[550px] w-full grid-cols-1 overflow-hidden bg-[#F8F5F0] md:grid-cols-2">

      {/* Full Hero Background Image - Right Side */}
      <img
        src="/Warm%20Minimalist%20Console%20Vignette.png"
        alt="Elegant home decor display"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
      />

      {/* Light Overlay for Left Text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5F0] from-0% via-[#F8F5F0]/90 via-25% to-transparent to-55%" />

      {/* Left Content */}
      <div className="relative z-10 flex min-h-[550px] flex-col justify-center px-5 py-14 sm:px-8 lg:px-10 md:col-span-1">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#626B4F]">
          Beautify Your Space
        </p>

        <h1 className="mb-6 font-serif text-4xl leading-tight text-[#292920] sm:text-5xl lg:text-[54px]">
          Decorate Your Home
        <span className="mt-2 block text-[#626B4F]">
        Inspire Your Life
        </span>
      </h1>

        <p className="mb-8 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
          Discover timeless home décor pieces that bring warmth,
          elegance, and personality to every corner of your home.
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="bg-[#626B4F] px-6 py-3 text-xs font-semibold tracking-wider text-white transition hover:bg-[#4D563D]">
            SHOP NOW
          </button>

          <button className="border border-[#626B4F] px-6 py-3 text-xs font-semibold tracking-wider text-[#626B4F] transition hover:bg-[#626B4F] hover:text-white">
            EXPLORE COLLECTION
          </button>
        </div>

        {/* Slider Dots */}
        <div className="mt-10 flex items-center gap-2">
          <span className="h-2 w-6 rounded-full bg-[#626B4F]"></span>
          <span className="h-2 w-2 rounded-full bg-[#C9C8BE]"></span>
          <span className="h-2 w-2 rounded-full bg-[#C9C8BE]"></span>
        </div>
      </div>
    </section>
  )
}

export default Hero;
