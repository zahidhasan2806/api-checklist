// https://randomuser.me/api/?results=5000



const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=36')
        .then(res => res.json())
        .then(data => displayUsers(data.results));
}
loadUsers();


const displayUsers = (users) => {
    const userInterface = document.getElementById("user-interface");

    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('col-md-3')
        const { picture, location } = user;
        div.innerHTML = `
        <img src="${picture.large}" alt="">

        <p>Street Name: ${location.street.number} ${location.street.name}</p>
        <p>City Name: ${location.city}</p>
        <p>Timezone: ${location.timezone.description}</p>
       
        `
        userInterface.appendChild(div);
        // commentBox.textContent = ' ';
    });


}
