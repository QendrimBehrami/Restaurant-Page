// Create paragraphs array
const paragraphs = [
  `Welcome to Skyline Elegance, where culinary expertise meets the beauty of
    the city skyline. Established in 2021, our restaurant has quickly become a
    favorite for locals and visitors alike, offering an unforgettable dining
    experience that combines exquisite flavors, impeccable service, and
    breathtaking views.`,
  `Our mission is to provide a dining experience that delights the senses and
    brings people together. We believe in the power of food to connect,
    celebrate, and create lasting memories. At Skyline Elegance, every dish is
    prepared with care, using only the finest ingredients and innovative
    culinary techniques.`,
  `Behind every great dining experience is a team of dedicated professionals.
    Our chefs, servers, and staff work tirelessly to ensure that your time with
    us is memorable. From the kitchen to the dining room, our team embodies the
    passion and creativity that Skyline Elegance is known for.`,
];

// Create about titles
const aboutTitles = ["About Us", "Our Mission", "Meet Our Team"];

// Create about div
const aboutDiv = document.createElement("div");
aboutDiv.id = "about";

// Create sections
aboutTitles.forEach((title, index) => {
  const section = document.createElement("section");
  const h1 = document.createElement("h1");
  h1.textContent = title;
  const p = document.createElement("p");
  p.textContent = paragraphs[index];
  section.appendChild(h1);
  section.appendChild(p);
  aboutDiv.appendChild(section);
});

// Export about div
export default aboutDiv;
