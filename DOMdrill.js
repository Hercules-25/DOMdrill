document.addEventListener("DOMContentLoaded", function () {
  let div = document.createElement("div");
  div.className = "header-container";
  let h1 = document.createElement("h1");
  let h1txt = document.createTextNode("This is an h1 text");

  h1.appendChild(h1txt);
  div.appendChild(h1);
  document.body.appendChild(div);
  h1.className = "h1";

  let h2 = document.createElement("h2");
  let h2txt = document.createTextNode("This is an h2 text");

  h2.appendChild(h2txt);
  div.appendChild(h2);
  h2.className = "h2";

  let h3 = document.createElement("h3");
  let h3txt = document.createTextNode("This is an h3 text");

  h3.appendChild(h3txt);
  div.appendChild(h3);
  h3.className = "h3";

  let h4 = document.createElement("h4");
  let h4txt = document.createTextNode("This is an h4 text");

  h4.appendChild(h4txt);
  div.appendChild(h4);
  h4.className = "h4";

  let h5 = document.createElement("h5");
  let h5tx = document.createTextNode("This is an h5 text");

  h5.appendChild(h5tx);
  div.appendChild(h5);
  h5.className = "h5";

  let h6 = document.createElement("h6");
  let h6txt = document.createTextNode("This is an h6 text");

  h6.appendChild(h6txt);
  div.appendChild(h6);
  h6.className = "h6";

  let colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "magenta",
    "rose",
  ];

  h1.addEventListener("dblclick", function () {
    let randoColor = colors[Math.floor(Math.random() * colors.length)];
    h1.style.color = randoColor;
  });
  h2.addEventListener("dblclick", function () {
    let randoColor = colors[Math.floor(Math.random() * colors.length)];
    h2.style.color = randoColor;
  });
  h3.addEventListener("dblclick", function () {
    let randoColor = colors[Math.floor(Math.random() * colors.length)];
    h3.style.color = randoColor;
  });
  h4.addEventListener("dblclick", function () {
    let randoColor = colors[Math.floor(Math.random() * colors.length)];
    h4.style.color = randoColor;
  });
  h5.addEventListener("dblclick", function () {
    let randoColor = colors[Math.floor(Math.random() * colors.length)];
    h5.style.color = randoColor;
  });
  h6.addEventListener("dblclick", function () {
    h6.style.color = randoColor;
  });

  let button = document.getElementsByClassName("myLilButton");
document.body.appendChild(button)
  let myList = [
    "This is list item 1",
    "This is list item 2",
    "This is list item 3",
  ];

button.addEventListener("click", function () {
    for (let i = 0; i < myList.length; i++)
      document.body.appendChild(myList[i]);
  });
  myList.addEventListener("click", function () {
    let randoColor = colors[Math.floor(Math.random() * colors.length)];
  });
  myList.addEventListener("dblclick", function () {});
});
