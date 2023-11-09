const URL = "https://api.pexels.com/v1/search?query=flower";
const apiKey = "OTwFoLY3KBHQlqt3HHFkS6GrGDd5QRnOmlzZoTmMiacbdNJ6g22YyXC8";

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
    });
};
