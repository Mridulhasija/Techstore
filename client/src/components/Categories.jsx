import { useState } from "react";

const categories = [
  { key: "all",      label: "All",       emoji: "🔮", count: "909 items" },
  { key: "laptops",  label: "Laptops",   emoji: "💻", count: "248 items" },
  { key: "phones",   label: "Phones",    emoji: "📱", count: "183 items" },
  { key: "audio",    label: "Audio",     emoji: "🎧", count: "97 items"  },
  { key: "wearables",label: "Wearables", emoji: "⌚", count: "64 items"  },
  { key: "monitors", label: "Monitors",  emoji: "🖥️", count: "112 items" },
  { key: "gaming",   label: "Gaming",    emoji: "🕹️", count: "205 items" },
];

function Categories({ filterProducts }) {
  const [active, setActive] = useState("laptops");

  const handleClick = (cat) => {
    setActive(cat.key);
    filterProducts(cat.key);
  };

  return (
    <section className="section">
      <div className="section-header">
        <div className="section-title">Browse Categories</div>
        <a className="see-all">See all →</a>
      </div>

      <div className="categories">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className={`cat-card${active === cat.key ? " active" : ""}`}
            onClick={() => handleClick(cat)}
          >
            <span className="cat-emoji">{cat.emoji}</span>
            <div className="cat-name">{cat.label}</div>
            <div className="cat-count">{cat.count}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
