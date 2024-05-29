export default function ProductCard({
  title = "Basic",
  popular = false,
  billing = "monthly",
  features,
  price,
}) {
  return (
    <>
      <div>
        <div>
          <h2>Basic</h2>
          <p className={`${popular ? "hidden" : ""}`}>hot 🔥</p>
        </div>

        <div>
          <p>$ 00.0</p>
          <p>per user</p>
          <p>per {billing == "monthly" ? "month" : "year"}</p>
        </div>
        {/* Divider */}
        <div></div>

        <div>
          <h3>Features</h3>
          <ul>
            <li>
              <i class="bi bi-check-circle"></i>
              <span>so called feature</span>
            </li>
          </ul>
        </div>

        <button>Choose {title}</button>
      </div>
    </>
  );
}
