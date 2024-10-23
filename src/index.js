const $ = require("jquery");
const helloWorld = require("./hello-world.js");

$(() => {
  $(window).on("click", () => {
    console.log(helloWorld());
  });
});
