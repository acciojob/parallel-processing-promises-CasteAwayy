//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const getImages = function (url) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = url;
    img.addEventListener("load", function () {
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(`Failed to load image's URL: ${url}`);
    });
  });
};

btn.addEventListener("click", () => {
  Promise.all([
    getImages(images[0].url),
    getImages(images[1].url),
    getImages(images[2].url),
  ])
    .then((values) => {
      values.forEach((image) => {
        output.insertAdjacentElement("afterbegin", image);
      });
    })
    .catch((error) => {
      console.error(error);
    });
});
