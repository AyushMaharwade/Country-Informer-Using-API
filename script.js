const iptval = document.getElementById("ipt");
const searchbtn = document.getElementById("btn");
const rst = document.getElementById("result");
const fi = document.getElementById("flag-info");

document.addEventListener("DOMContentLoaded", function () {
  btn.onclick = createtask;

  ipt.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      createtask();
    }
  });

  function createtask() {
    if (iptval.value === "") {
      alert("Enter somthing!");
    } else {
      let country = iptval.value;
      let info = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
      console.log(info);
      fetch(info)
        .then((Response) => Response.json())
        .then((data) => {
          console.log(data[0]);
          console.log(data[0].flags.svg);
          console.log(data[0].name.common);
          console.log(data[0].capital[0]);
          console.log(data[0].continents[0]);
          console.log(data[0].population);
          console.log(Object.keys(data[0].currencies)[0]);
          console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
          console.log(
            Object.values(data[0].languages).toString().split().join()
          );

          rst.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h1 class="heading">${data[0].name.common}</h1>
        `;
          fi.innerHTML = `
        <h3>Capital : ${data[0].capital[0]}</h3>
        <h3>Continent : ${data[0].continents[0]}</h3>
        <h3>Population : ${data[0].population}</h3>
        <h3>Currency : ${Object.keys(data[0].currencies)[0]},${
            data[0].currencies[Object.keys(data[0].currencies)].name
          }</h3>
        <h3>Languages : ${Object.values(data[0].languages)
          .toString()
          .split()
          .join()}</h3>
        `;

          iptval.value = "";
        });
    }
  }
});
