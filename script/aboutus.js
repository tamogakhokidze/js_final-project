// ---------------------------filer-------------------------------

let filterField = document.getElementById("filter");
let filterResult = document.getElementById("filter-results");
let clearList = [];

// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(function (response) {

//     console.log(response);
//   })
//   .catch(function (error) {

//     console.log(error);
//   })
//   .finally(function () {

//   });




// import axios from "axios";

async function getUser() {
  try {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
getUser();

// getUsers = async () => {
//   let res = await axios.get("https://reqres.in/api/users?page=1");
//   let { data } = res.data;
//   this.setState({ users: data });
// };

// getUser();

// axios.get("https://reqres.in/api/users?page=2")
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// getUser()
//   .then((response) => {
//     response.data.forEach((item) => {
//       let li = document.createElement("li");
//       li.innerText = `${item.last_name}`;

//       clearList.push(li);
//       filterResult.appendChild(li);
//     });
//   })

//   .catch((errorData) => errorData);

// function filterData(searchItem) {
//   clearList.forEach((item) => {
//     if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
//       item.classList.remove("hide");
//     } else {
//       item.classList.add("hide");
//     }
//   });
// }

// filterField.addEventListener("keyup", function (event) {
//   filterData(event.target.value);
// });
