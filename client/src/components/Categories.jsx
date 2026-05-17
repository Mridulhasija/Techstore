const categories = [
  "all",
  "laptops",
  "phones",
  "audio",
  "gaming",
];

function Categories({ filterProducts }) {
  return (
    <section className="section">
      <div className="categories">
        {categories.map((cat) => (
          <div
            key={cat}
            className="cat-card"
            onClick={() => filterProducts(cat)}
          >
            <div className="cat-name">{cat}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
