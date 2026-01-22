export interface ProjectProps {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
}

const projectList: ProjectProps[] = [
  {
    id: 12,
    name: "El Café",
    image: "/images/projects/elCafe.webp",
    description: "A website for a local coffee shop that I created. The website is a simple design that includes a Menu Page that is synced to FutureTasty for easy management. The website was converted from a multiple page website to a single page website using Vite and React. I chose to use Vite because it is a fast and lightweight build tool that is easy to use and configure.",
    link: "https://elcafeny.netlify.app/",
  },
  {
    id: 11,
    name: "Korra Decor",
    image: "/images/projects/korraDecor.webp",
    description: "This is a website design that I created to practice my css abilities. and implement a responsive design. The website is a simple design that includes 3d animations and lottie animations. Using open source libraries I was able to quickly implement the animations and the website is fully responsive as a mobile first design.",
    link: "https://korra-decor.vercel.app/",
  },
  {
    id: 10,
    name: "Fast Line Safety Training",
    image: "/images/projects/fastLineSafetyTraining.webp",
    description: "Local Safety Training Company that offers in person training classes for construction workers to be allowed to work on construction sites.",
    link: "https://www.fastlinesafetytraining.com",
  },
  {
    id: 8,
    name: "Iglesia El Nazareno",
    image: "/images/projects/iglesiaElNazareno.webp",
    description: "A local Pentecostal church website that I created. The website is a simple design that includes a Calendar of Events Page that is synced to a Google Drive Folder for easy management.",
    link: "https://iglesiaelnazareno.netlify.app/",
  },
  {
    id: 7,
    name: "Pixel Perfect Recreation",
    image: "/images/projects/pixelPerfect.webp",
    description: "Using Figma Design guideline, i recreated a website design to practice my CSS abilities. The original design was given by my mentor and I was tasked with recreating the design as precisely as possible.",
    link: "https://mockk-portfolio.netlify.app",
  },
  {
    id: 6,
    name: "Prestige",
    image: "/images/projects/prestige.webp",
    description: "A website redesign for a Long Island based landscaping company.",
    link: "https://654146cba952f84fc33be4f5--prestige-care.netlify.app/",
  },
  {
    id: 5,
    name: "Connect Four",
    image: "/images/projects/connectFour.webp",
    description: "The classic game of Connect Four. With this project, Every user move the game board is checked for a winner using the same game rules.",
    link: "https://connect4-cj484.netlify.app/",
  },
  {
    id: 4,
    name: "Pokedex",
    image: "/images/projects/pokedex.webp",
    description: "This is a Pokedex app that I created using React and the PokeAPI. A simple API that returns Pokemon data when a GET request is made.",
    link: "https://newpokedexp-484.netlify.app/",
  },
  {
    id: 3,
    name: "Neighbor My Dog",
    image: "/images/projects/dogWalk.webp",
    description: "A simple implementation of the Dog Walk game in JavaScript.",
    link: "https://neighbormydog.netlify.app",
  },
  {
    id: 1,
    name: "Foodie",
    image: "/images/projects/foodie.webp",
    description: "For my final project at General Assembly, I created a recipe search app using React and the Spoonacular API. The app allows users to search for recipes by name, ingredients, or cuisine type using a query search on the endpoint(URL).",
    link: "https://foodie-recipes484.netlify.app",
  },
]

export const projects = projectList.sort((a, b) => b.id - a.id);
