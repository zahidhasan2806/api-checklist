//checklist 01
const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data));
}
loadComments(); //checklist 03

// checklist 02
const displayComments = (comments) => {
    const commentBox = document.getElementById("comment-box");
    comments.forEach(comment => {

        const div = document.createElement('div');
        div.innerHTML = `<div class=" card m-3 rounded"  style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Name: ${comment.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Email:${comment.email}</h6>
          <p class="card-text">${comment.body}</p>
           <button onclick='showDetails(${comment.id})' class="btn btn-danger">Click here</button>
        </div>
      </div>`
        commentBox.appendChild(div);
    });
}

function showDetails(id) {
    const dynamicApi = `https://jsonplaceholder.typicode.com/comments/${id}`
    fetch(dynamicApi)
        .then(res => res.json())
        .then(data => showCommentDetails(data))
}

const showCommentDetails = (details) => {
    const detailsBox = document.getElementById("details");
    const div = document.createElement('div');
    div.innerHTML = `<div class=" card m-3 rounded"  style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Name: ${details.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Email:${details.email}</h6>
      <p class="card-text">${details.body}</p>
    </div>
  </div>`
    detailsBox.textContent = '';
    detailsBox.appendChild(div);

}