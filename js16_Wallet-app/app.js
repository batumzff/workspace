// selector
const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");
//variables
let gelirler = 0;

//hesap tablosu

const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan");

//harcama formu



//ekle formu
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = gelirler + Number(gelirInput.value);
  console.log(gelirler);
  localStorage.setItem("gelirler", gelirler);
  gelirinizTd.innerText = gelirler;

  ekleFormu.reset();
});

window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler")) || 0;
  gelirinizTd.innerText = gelirler;
});
