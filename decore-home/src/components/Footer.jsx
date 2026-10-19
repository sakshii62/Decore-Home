import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#FAF9F6] text-[#292920] border-t border-zinc-200">
      
      {/* 1. Newsletter Signup Strip */}
      <div className="border-b border-zinc-200 py-5 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center lg:text-left">
            <svg className="w-6 h-6 text-zinc-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <div>
              <h4 className="text-[11px] font-bold tracking-widest uppercase text-zinc-900">GET DECOR IDEAS & OFFERS</h4>
              <p className="text-[11px] text-gray-500">Subscribe for exclusive offers, new arrivals & decorating tips.</p>
            </div>
          </div>
          
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full lg:w-auto max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white border border-zinc-300 px-4 py-2.5 text-xs focus:outline-none focus:border-zinc-500 flex-1 lg:w-80"
              required
            />
            <button 
              type="submit" 
              className="bg-[#5c6248] text-white px-6 py-2.5 text-xs font-semibold tracking-wider hover:bg-[#4b5238] transition shrink-0"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* 2. Main Footer Links & Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <h2 className="font-serif text-xl font-bold tracking-[0.25em] text-[#292920]">
                  DECORÉ
                </h2>
                <p className="text-[9px] tracking-[0.2em] uppercase text-zinc-600 mt-0.5">
                  HOME DECOR
                </p>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed mb-6">
                Thoughtfully curated decor pieces to help you create a home that reflects your style and comfort.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-sm text-zinc-700">
              <a href="#" className="hover:text-black transition" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="hover:text-black transition" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.581 9 4.615V8z"/></svg>
              </a>
              <a href="#" className="hover:text-black transition" aria-label="Pinterest">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.363-.053.225-.177.273-.408.164-1.524-.709-2.479-2.936-2.479-4.724 0-3.843 2.793-7.375 8.056-7.375 4.232 0 7.525 3.018 7.525 7.051 0 4.207-2.652 7.593-6.334 7.593-1.235 0-2.397-.642-2.793-1.398l-.761 2.905c-.276 1.056-1.025 2.379-1.528 3.189 1.127.348 2.324.536 3.559.536 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="hover:text-black transition" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="text-[11px] font-bold tracking-widest uppercase mb-4 text-[#292920]">SHOP</h3>
            <ul className="space-y-2 text-[11px] text-gray-600">
              <li><a href="#" className="hover:text-black transition">All Products</a></li>
              <li><a href="#" className="hover:text-black transition">Vases & Flowers</a></li>
              <li><a href="#" className="hover:text-black transition">Candles & Holders</a></li>
              <li><a href="#" className="hover:text-black transition">Wall Decor</a></li>
              <li><a href="#" className="hover:text-black transition">Cushions & Covers</a></li>
              <li><a href="#" className="hover:text-black transition">Home Fragrance</a></li>
              <li><a href="#" className="hover:text-black transition">Storage & Baskets</a></li>
              <li><a href="#" className="hover:text-black transition">Sale</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h3 className="text-[11px] font-bold tracking-widest uppercase mb-4 text-[#292920]">CUSTOMER CARE</h3>
            <ul className="space-y-2 text-[11px] text-gray-600">
              <li><a href="#" className="hover:text-black transition">Help & FAQs</a></li>
              <li><a href="#" className="hover:text-black transition">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-black transition">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-black transition">Track Order</a></li>
              <li><a href="#" className="hover:text-black transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: About Us */}
          <div>
            <h3 className="text-[11px] font-bold tracking-widest uppercase mb-4 text-[#292920]">ABOUT US</h3>
            <ul className="space-y-2 text-[11px] text-gray-600">
              <li><a href="#" className="hover:text-black transition">Our Story</a></li>
              <li><a href="#" className="hover:text-black transition">Sustainability</a></li>
              <li><a href="#" className="hover:text-black transition">Blog</a></li>
              <li><a href="#" className="hover:text-black transition">Careers</a></li>
              <li><a href="#" className="hover:text-black transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 5: Right Features Stack */}
          <div className="lg:col-span-1 space-y-4 border-t lg:border-t-0 lg:border-l border-zinc-200 lg:pl-6 pt-6 lg:pt-0">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-zinc-800 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-6m6-15H5.25A2.25 2.25 0 003 6v8.25m18 0V7.5a2.25 2.25 0 00-2.25-2.25H16.5" />
              </svg>
              <div>
                <h4 className="text-[11px] font-bold tracking-wider uppercase text-zinc-900">FREE SHIPPING</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">On Orders Over $79</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-zinc-800 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <div>
                <h4 className="text-[11px] font-bold tracking-wider uppercase text-zinc-900">EASY RETURNS</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">30-Day Hassle Free Returns</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-zinc-800 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <div>
                <h4 className="text-[11px] font-bold tracking-wider uppercase text-zinc-900">SECURE PAYMENT</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">100% Secure Checkout</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright & Payment Badges */}
      <div className="border-t border-zinc-200 py-6 px-6 md:px-12 text-[11px] text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Decoré Home Decor. All Rights Reserved.</p>
          
          <div className="flex items-center gap-5 font-bold tracking-wider text-xs">
            <span className="text-[#1434CB] italic">VISA</span>
            <span className="flex -space-x-1.5"><span className="w-3.5 h-3.5 rounded-full bg-[#EB001B] opacity-90"></span><span className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] opacity-90"></span></span>
            <span className="text-[#003087]">PayPal</span>
            
            {/* Proper SVG Apple Pay Icon */}
            <span className="flex items-center gap-1 text-black font-semibold">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.03-7.6-7.82-11.72-14.37-6.22-10.05-11.12-21.2-14.7-33.45-3.57-12.25-5.36-23.75-5.36-34.5 0-14.04 3.56-25.26 10.67-33.64 7.12-8.39 15.93-12.65 26.44-12.79 4.9 0 10.23 1.25 15.99 3.75 5.76 2.5 9.77 3.78 12.03 3.84 2.13 0 6.27-1.35 12.43-4.04 6.15-2.69 11.54-3.9 16.16-3.62 14.65 1.08 26.04 6.94 34.18 17.56-12.47 7.58-18.6 17.84-18.38 30.78.22 10.59 4.3 19.34 12.24 26.26 3.7 3.25 8.1 5.64 13.2 7.16-2.58 7.42-5.74 15.01-9.48 22.78zm-31.5-104.7c0-8.91 3.23-17.15 9.69-24.72 6.46-7.57 14.39-11.83 23.78-12.79.11 1.09.16 2.07.16 2.94 0 8.35-3.26 16.92-9.78 25.72-6.53 8.79-14.49 13.21-23.86 13.25-.11-.87-.17-2.31-.17-4.4z"/>
              </svg>
              <span>Pay</span>
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer;