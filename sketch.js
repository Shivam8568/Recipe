function setup() {
  createCanvas(1700,800);
}

function draw() {
  backgroundImg = loadImage("sprites/Hi.png");
  text("Ingredients",200,190);
  text ("2 pounds skinless, boneless chicken breast halves 2, teaspoons salt ",200,210);
  text ("½ cup cooking oil ,1 ½ cups chopped onion, 1 tablespoon minced garlic , ",200,230);
  text ("1 ½ teaspoons minced fresh ginger root , 1 tablespoon curry powder , ",200,250);
  text ("1 teaspoon ground cumin ,1 teaspoon ground turmeric ,1 teaspoon ground coriander ",200,270);
  text ("1 teaspoon cayenne pepper , 1 tablespoon water ,1 (15 ounce) can crushed tomatoes1 cup plain yogurt",200,290);
  text ("1 tablespoon chopped fresh cilantro, 1 teaspoon salt, ½ cup water , 1 teaspoon garam masala , ",200,310);
  text ("1 tablespoon chopped fresh cilantro, 1 tablespoon fresh lemon juice,",200,330);
  text ("Directions",300,400)
  text ("Step 1 Sprinkle the chicken breasts with 2 teaspoons salt. ",300,420);
  text ("Step 2 Heat the oil in a large skillet over high heat; partially cook the chicken in the hot oil in batches until completely browned. Transfer the browned chicken breasts to a plate and set aside.",300,440)
  text ("Step 3 Reduce the heat under the skillet to medium-high; add the onion, garlic, and ginger to the oil remaining in the skillet and cook and stir until the onion turns translucent, about 8 minutes.",300,460);
  text ("Stir the curry powder, cumin, turmeric, coriander, cayenne, and 1 tablespoon of water into the onion mixture; allow to heat together for about 1 minute while stirring. Mix the tomatoes, yogurt",300,480)
  text ("1 tablespoon chopped cilantro, and 1 teaspoon salt into the mixture. Return the chicken breast to the skillet along with any juices on the plate. Pour 1/2 cup water into the mixture; bring to a boil,",300,500);
  text ("turning the chicken to coat with the sauce. Sprinkle the garam masala and 1 tablespoon cilantro over the chicken",300,520);
  text ("step 4 Cover the skillet and simmer until the chicken breasts are no longer pink in the center and the juices run clear, about 20 minutes.",300,540);
  text ("An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C). Sprinkle with lemon juice to serve.",300,560);
  text ("Total cooking time = 1hr 50 min",300,590);
  text ("AND YAY WE ARE DONE",300,620);
  textfont("Comic sans");
  textsize("14")
  textcolour("red")
  drawSprites();
}