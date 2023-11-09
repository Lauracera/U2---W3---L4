const URL = "https://api.pexels.com/v1/search?query=flower";
const apiKey = "OTwFoLY3KBHQlqt3HHFkS6GrGDd5QRnOmlzZoTmMiacbdNJ6g22YyXC8";
const loadImagesBtn = document.getElementById("loadImages");
const loadSecondaryImagesBtn = document.getElementById("loadSecondaryImages");
const card = document.getElementsByClassName("card");

window.onload = () => {
  fetch(URL, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((resp) => resp.json())
    .then((resourceObj) => {
      console.log(resourceObj);
      resourceObj.forEach((elem) => {
        const imgCard = document.createElement("img");
        imgCard.src = elem.URL;
        imgCard.className = "card-img-top object-fit-cover";
        card.appendChild(imgCard);
      });
    })

    .catch((err) => console.log(err));
};

// const { url, photographer, alt } = resourceObj;

//       document.getElementById("url").value = url;
//       document.getElementById("photographer").value = photographer;
//       document.getElementById("alt").value = alt;
