const inputField = document.getElementById('inputField')
document.getElementById('btn').addEventListener('click', () => {
    const dynamicApi = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputField.value}`
    fetch(dynamicApi)
        .then(res => res.json())
        .then(data => displayTeam(data.teams))
})

function displayTeam(teams) {
    const teamDetails = document.getElementById('team-box')
    for (const team of teams) {
        const div = document.createElement('div');
        div.innerHTML = `<div class="card my-2" style="width: 18rem;">
                            <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
                                <div class="card-body">
                                            <h5 class="card-title">${team.strTeam}</h5>
                                             <p class="card-text">${(team.strCountry)}</p>
                                             <button onclick='showDetails(${team.idTeam})'class="btn btn-primary">Details</button>
                                 </div>
                    </div> `
        teamDetails.appendChild(div);
    }
    // teamDetails.innerHTML = ''
}

function showDetails(idTeam) {

    const dynamicApi = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
    fetch(dynamicApi)
        .then(res => res.json())
        .then(data => {
            const team = data.teams[0]
            const detailsBox = document.getElementById("details");
            const div = document.createElement('div');
            div.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
                <div class="card-body">
                            <h5 class="card-title">${team.strTeam}</h5>
                             <p class="card-text">${(team.strCountry)}</p>
                 </div>
    </div>`
            detailsBox.textContent = '';
            detailsBox.appendChild(div);
        })
}
