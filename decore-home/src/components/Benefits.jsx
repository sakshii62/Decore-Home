function Benefits() {
  const benefits = [
    {
      title: "FREE SHIPPING",
      description: "On Orders Over $79",
      icon: (
        <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-6m6-15H5.25A2.25 2.25 0 003 6v8.25m18 0V7.5a2.25 2.25 0 00-2.25-2.25H16.5" />
        </svg>
      ),
    },
    {
      title: "SECURE PAYMENT",
      description: "100% Secure Checkout",
      icon: (
        <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: "PREMIUM QUALITY",
      description: "Carefully Selected Pieces",
      icon: (
        <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
    {
      title: "EASY RETURNS",
      description: "30-Day Hassle Free Returns",
      icon: (
        <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white border-y border-zinc-100 py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-zinc-100">
        {benefits.map((item) => (
          <div key={item.title} className="flex items-center gap-4 pt-4 sm:pt-0 lg:px-4 first:lg:pl-0 last:lg:pr-0">
            <div className="shrink-0 p-1">
              {item.icon}
            </div>

            <div>
              <h3 className="text-[11px] font-bold tracking-wider text-[#292920] uppercase">
                {item.title}
              </h3>
              <p className="text-[11px] text-gray-500 mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits;