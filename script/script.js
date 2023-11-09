const URL = "https://api.pexels.com/v1/search?query=flower";
const apiKey = "OTwFoLY3KBHQlqt3HHFkS6GrGDd5QRnOmlzZoTmMiacbdNJ6g22YyXC8";
const loadImagesBtn = document.getElementById("loadImages");
const loadSecondaryImagesBtn = document.getElementById("loadSecondaryImages");

window.onload = () => {
  fetch(URL, {
    headers: {
      Authorization:
        "[OTwFoLY3KBHQlqt3HHFkS6GrGDd5QRnOmlzZoTmMiacbdNJ6g22YyXC8]",
    },
  })
    .then((resp) => resp.json())
    .then((resourceObj) => {
      const { url, photographer, alt } = resourceObj;

      document.getElementById("url").value = url;
      document.getElementById("photographer").value = photographer;
      document.getElementById("alt").value = alt;
    })

    .catch((err) => console.log(err));
};
