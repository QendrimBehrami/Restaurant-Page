{
  /* <div id="menu">
  <h1>Our Menu</h1>

  <section>
    <h2 id="starters">Starters</h2>
    <ul>
      <li>
        <h3>Seasonal Soup</h3>
        <p>
          A delightful mix of seasonal vegetables served with artisan bread.
        </p>
      </li>
      <li>
        <h3>Caprese Salad</h3>
        <p>Fresh tomatoes, mozzarella, basil, and balsamic glaze.</p>
      </li>
    </ul>
  </section>
  <section>
    <h2 id="mains">Mains</h2>
    <ul>
      <li>
        <h3>Grilled Salmon</h3>
        <p>Served with quinoa salad and a dill-yogurt sauce.</p>
      </li>
      <li>
        <h3>Beef Bourguignon</h3>
        <p>
          Slow-cooked to perfection, accompanied by mashed potatoes and seasonal
          greens.
        </p>
      </li>
    </ul>
  </section>
  <section>
    <h2 id="desserts">Desserts</h2>
    <ul>
      <li>
        <h3>Chocolate Lava Cake</h3>
        <p>With a molten chocolate center, served with vanilla ice cream.</p>
      </li>
      <li>
        <h3>Lemon Tart</h3>
        <p>
          A zesty lemon filling in a buttery crust, topped with fresh whipped
          cream.
        </p>
      </li>
    </ul>
  </section>
</div>; */
}

const starters = [
  {
    name: "Seasonal Soup",
    description:
      "A delightful mix of seasonal vegetables served with artisan bread.",
  },
  {
    name: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella, basil, and balsamic glaze.",
  },
];

const mains = [
  {
    name: "Grilled Salmon",
    description: "Served with quinoa salad and a dill-yogurt sauce.",
  },
  {
    name: "Beef Bourguignon",
    description:
      "Slow-cooked to perfection, accompanied by mashed potatoes and seasonal greens.",
  },
];

const desserts = [
  {
    name: "Chocolate Lava Cake",
    description:
      "With a molten chocolate center, served with vanilla ice cream.",
  },
  {
    name: "Lemon Tart",
    description:
      "A zesty lemon filling in a buttery crust, topped with fresh whipped cream.",
  },
];

// Create menu div
const menuDiv = document.createElement("div");
menuDiv.id = "menu";

// Create title element
const titleElement = document.createElement("h1");
titleElement.textContent = "Our Menu";
menuDiv.appendChild(titleElement);

// Create sections
const sections = [
  { title: "Starters", items: starters },
  { title: "Mains", items: mains },
  { title: "Desserts", items: desserts },
];

sections.forEach((section) => {
  const sectionElement = document.createElement("section");
  const h2 = document.createElement("h2");
  h2.textContent = section.title;
  sectionElement.appendChild(h2);

  const ul = document.createElement("ul");
  section.items.forEach((item) => {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    h3.textContent = item.name;
    const p = document.createElement("p");
    p.textContent = item.description;
    li.appendChild(h3);
    li.appendChild(p);
    ul.appendChild(li);
  });

  sectionElement.appendChild(ul);
  menuDiv.appendChild(sectionElement);
});

// Export menu div
export default menuDiv;
