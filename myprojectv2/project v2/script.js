const homeSection = document.querySelector("#home-section");
const showcaseSection = document.querySelector("#showcase-section");
const registerSection = document.querySelector("#register-section");
const aboutSection = document.querySelector("#about-section");
const homeLink = document.querySelector("#home-link");
const serviceLink = document.querySelector("#service-link");
const galleryLink = document.querySelector("#gallery-link");
const contactLink = document.querySelector("#contact-link");
const aboutLink = document.querySelector("#about-link");


async function getRandomUser(){
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const user = data.results[0];
  displayUser(user)
  console.log(data)
}

function displayUser(user){
  
  const profileImage = document.getElementById("profile-pic");

  profileImage.setAttribute("src", `${user.picture.large}`);
}

getRandomUser();


home






