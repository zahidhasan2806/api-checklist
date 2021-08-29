// https://randomuser.me/api/?results=5000



const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=36')
        .then(res => res.json())
        .then(data => displayUsers(data.results[0]));
}
// loadUsers();


const displayUsers = (user) => {
    const userInterface = document.getElementById("user-interface");

    const div = document.createElement('div');
    div.classList.add('col-md-3')
    const { picture, location } = user;
    div.innerHTML = `<div class=" card m-3 rounded"  style="width: 18rem;">
        <div class="card-body">
        <img class ='rounded-pill' src="${picture.large}" alt="">
        <p>Street Name: ${location.street.number} ${location.street.name}</p>
        <p>City Name: ${location.city}</p>
        <p>Timezone: ${location.timezone.description}</p>
        </div>
  </div>
        `
    userInterface.appendChild(div);
    // commentBox.textContent = ' ';



}
