const navBar = {
  show: false,
};

const mainBody = {
  gradientColors: "#5d4954, #ffa69e, #04619f, #f9ffa1",
  firstName: "Dhruv",
  middleName: "",
  lastName: "",
  message: "a teenager learning new tech. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/noneedofit",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/dhruv.pg/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/noneedofit_/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("./dhruv.jpg"),
  imageSize: 375,
  message:
    "My name is Dhruv. I’m a teenager from India learning how to create interesting tech with the help of programming. Currently I am learning web development and half way through. Good enough grasp at javascript. The recent project I have been working on is a discord microservice, Melody.",
};

const repos = {
  show: true,
  heading: "Repositories",
  gitHubUsername: "noneedofit",
  reposLength: 4,
  specificRepos: ["Melody"],
};

const getInTouch = {
  show: true,
  heading: "Contact",
  message:
    "For any enquiries you can mail me at",
  email: "dhruv@dhruvg.codes",
};

export { navBar, mainBody, about, repos, getInTouch };
