// ---------------------------filer-------------------------------
console.log("avtoooooo345345345ooooooo");
// import { axios } from "https://unpkg.com/axios@1.1.2/dist/axios.min.js";
import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

let filterField = document.getElementById("filter");
let filterResult = document.getElementById("filter-results");
let clearList = [];

async function getUser() {
  console.log("avtooooooooooooo");
  try {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
getUser();

// // filterField.addEventListener("keyup", function (event) {
// //   console.log("avto");
// //   // filterData(event.target.value);
// //   getUser();
// // });

// window.onscroll = function () {
//   let top = window.scrollY;
//   console.log("avto333");
// };

// // axios.get('https://jsonplaceholder.typicode.com/users')
// //   .then(function (response) {

// //     console.log(response);
// //   })
// //   .catch(function (error) {

// //     console.log(error);
// //   })
// //   .finally(function () {

// //   });

// // getUsers = async () => {
// //   let res = await axios.get("https://reqres.in/api/users?page=1");
// //   let { data } = res.data;
// //   this.setState({ users: data });
// // };

// // getUser();

// // axios.get("https://reqres.in/api/users?page=2")
// //   .then(function (response) {
// //     console.log(response);
// //   })
// //   .catch(function (error) {
// //     console.log(error);
// //   });

// // getUser()
// //   .then((response) => {
// //     response.data.forEach((item) => {
// //       let li = document.createElement("li");
// //       li.innerText = `${item.last_name}`;

// //       clearList.push(li);
// //       filterResult.appendChild(li);
// //     });
// //   })

// //   .catch((errorData) => errorData);

// // function filterData(searchItem) {
// //   clearList.forEach((item) => {
// //     if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
// //       item.classList.remove("hide");
// //     } else {
// //       item.classList.add("hide");
// //     }
// //   });
// // }

// let burgerBar = document.getElementById("burgerBar");
// let ulItem = document.getElementById("ul-item");

// burgerBar.addEventListener("click", function () {
//   ulItem.classList.toggle("toggleUlNavigation");
//   burgerBar.classList.toggle("activeBurgerbar");
// });

// let navBar = document.getElementById("navBar");

window.onscroll = function () {
  console.log("avtooooooooooooo");
};
