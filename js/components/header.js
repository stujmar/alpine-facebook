const headerPartial = document.createElement("template");

const fileUrl = "./js/components/header.html";
let partial = "no data yet";

fetch(fileUrl)
  .then(response => response.text())
  .then(data => {
    partial = data;
    // print(typeof data)
    console.log(typeof data)
    console.log("`" + data + "`")
    data = "`" + data + "`"
    headerPartial.innerHTML = partial;
    document.body.insertBefore(headerPartial.content, document.body.firstChild);
  });
