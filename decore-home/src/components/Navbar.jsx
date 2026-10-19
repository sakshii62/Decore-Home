function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4 md:px-10">

      {/* Logo */}
      <a href="#" className="shrink-0 flex items-center gap-2">
        <span className="text-xl">🌿</span>
        <div>
          <h1 className="font-serif text-2xl tracking-[0.15em] text-[#626B4F]">
            DECORÉ
          </h1>
          <p className="text-[8px] tracking-[0.3em] text-gray-500 text-center">
            HOME DECOR
          </p>
        </div>
      </a>

      {/* Navigation Links */}
      <div className="hidden items-center gap-6 lg:flex text-xs font-medium tracking-wider text-[#292920]">
        <a href="#" className="flex items-center gap-1 hover:text-[#626B4F]">
          SHOP <span className="text-[10px]"></span>
        </a>
        <a href="#" className="flex items-center gap-1 hover:text-[#626B4F]">
          ROOMS <span className="text-[10px]"></span>
        </a>
        <a href="#" className="hover:text-[#626B4F]">BEST SELLERS</a>
        <a href="#" className="hover:text-[#626B4F]">NEW ARRIVALS</a>
        <a href="#" className="text-xs uppercase text-[#8B493C] hover:text-[#626B4F]">SALE</a>
        <a href="#" className="hover:text-[#626B4F]">ABOUT US</a>
        <a href="#" className="hover:text-[#626B4F]">BLOG</a>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-5 text-zinc-800">
        <button type="button" aria-label="Search" className="hover:opacity-70 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>

        <button type="button" aria-label="Account" className="hover:opacity-70 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </button>

        <button type="button" aria-label="Shopping bag" className="relative hover:opacity-70 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <span className="absolute -bottom-1 -right-1 bg-[#626B4F] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
            0
          </span>
        </button>
      </div>

    </nav>
  )
}

export default Navbar;