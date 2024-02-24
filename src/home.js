// Text content for the home page

const title = "Skyline Elegance Restaurant & Lounge";
const subtitle = "Welcome to Skyline Elegance";

const paragraphs = [
  `
Perched atop the vibrant heartbeat of the city, Skyline Elegance
offers a dining experience that transcends the ordinary. Amidst the
shimmering lights of the urban expanse, our restaurant serves as a
sanctuary where modern elegance and culinary artistry come together
in perfect harmony.`,
  `From the moment you step inside, you'll be enveloped in an ambiance
that is both chic and inviting. Our panoramic windows frame the
breathtaking cityscape, offering a backdrop that evolves from the
golden hues of sunset to the twinkling stars of the night sky. It's
not just a meal; it's a journey that captivates your senses.`,
  `Our menu, curated by renowned chefs, is a testament to the beauty of
fusion cuisine. Each dish is crafted with the finest locally sourced
ingredients, blending global flavors with innovative techniques to
delight your palate. Whether you're savoring a meticulously prepared
entrée or toasting to the night with one of our signature cocktails,
your experience at Skyline Elegance will be unforgettable.`,
  `Skyline Elegance is more than a restaurant; it's a destination where
moments are cherished, and memories are made. Join us for an evening
of unparalleled sophistication and culinary excellence. Let the
skyline be your canvas, as we paint an experience that's uniquely
yours.`,
  ` Welcome to your escape above the city—where every visit is an
occasion, and every meal is a celebration.`,
];

const slogan = "Embrace the Elegance. Savor the Skyline.";

// Create home div
const homeDiv = document.createElement("div");
homeDiv.id = "home";

// Create title element
const titleElement = document.createElement("h1");
titleElement.textContent = title;

// Create subtitle element
const subtitleElement = document.createElement("h2");
subtitleElement.textContent = subtitle;

// Create text div
const textDiv = document.createElement("div");
textDiv.classList.add("text");
textDiv.appendChild(subtitleElement);

// Create paragraph elements
paragraphs.forEach((paragraph) => {
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = paragraph;
  textDiv.appendChild(paragraphElement);
});

// Create slogan element
const sloganElement = document.createElement("em");
sloganElement.textContent = slogan;
textDiv.appendChild(sloganElement);

// Append title and text div to home div
homeDiv.appendChild(titleElement);
homeDiv.appendChild(textDiv);

// Export home div
export default homeDiv;
