//selectors

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

// Variables

let gelirler = 0;
let harcamaListesi = [];

//Hesap tablosu

const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan");

//harcama Formu
const harcamaFormu = document.getElementById("harcama-formu");
const harcamaAlaniInput = document.getElementById("harcama-alani");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");

//harcama tablosu
const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");

//Ekle Formu
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
  tarihInput.valueAsDate = new Date();
});

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault(); // reload u engeller

  const yeniHarcama = {
    id: new Date().getTime(),
    tarih: tarihInput.value,
    alan: harcamaAlaniInput.value,
    miktar: miktarInput.value,
  };

  // console.log(yeniHarcama)
  harcamaFormu.reset();
  tarihInput.valueAsDate = new Date();

  harcamaListesi.push(yeniHarcama);
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));
  harcamayiDomaYaz(yeniHarcama);
});

//Harcamayı Dom'a yaz

const harcamayiDomaYaz = ({ id, miktar, tarih, alan }) => {
  // const {id, miktar, tarih,alan} = yeniHarcama

  // harcamaBody.innerHTML += `
  // <tr>
  // <td>${tarih}</td>
  // <td>${alan}</td>
  // <td>${miktar}</td>
  // <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>

  // </tr>
  // `

  const tr = document.createElement("tr");

  const appendTd = (content) => {
    const td = document.createElement("td");
    td.textContent = content;
    return td;
  };
  const createLastTd = () => {
    const td = document.createElement("td");
    const iElement = document.createElement("i");
    iElement.id = id;
    iElement.className = "fa-solid fa-trash-can text-danger";
    iElement.type = "button";
    td.appendChild(iElement);
    return td;
  };

  tr.append(appendTd(tarih), appendTd(alan), appendTd(miktar), createLastTd());

  // harcamaBody.append(tr) // harcamayı sona ekler
  harcamaBody.prepend(tr); // harcamayı öne ekler
};
