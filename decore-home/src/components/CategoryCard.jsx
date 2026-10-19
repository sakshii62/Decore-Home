
function CategoryCard({ category }) {
  return (
    <div className="group cursor-pointer">
      <div className="h-48 overflow-hidden rounded-xl bg-[#FAF9F6] sm:h-56">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-center font-serif text-base text-[#292920] transition group-hover:text-[#626B4F]">
        {category.name}
      </h3>
    </div>
  )
}

export default CategoryCard;
