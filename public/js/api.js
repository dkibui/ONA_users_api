const targetDiv = document.querySelector(".wrapper")
let outPutHtml = ""

function renderUserCard(parameter) {
  return `
  <div class="users__user-card">
    <div class="avatar">
        <img class="users__avatar" src="${
          parameter.gravatar
        }" alt="User's avatar">
    </div>
    <div class="users__card-paragraph">
      <p class="name">${parameter.name}</p>
      <p class="id">Joined on: ${new Date(parameter.joined_on).toLocaleString(
        "en-US",
        {
          month: "long",
          day: "2-digit",
          year: "numeric",
          timeZone: "Africa/Nairobi",
        }
      )}</p>
      <a class="id" href="${parameter.url}"> Link to ${
    parameter.last_name
  } json data</a> |      
  <a class="id" href="/${parameter.username}">Edit profile</a>
    </div>
  </div>
  `
}

fetch(
  "https://api.ona.io/api/v1/profiles?format=json&users=alice%2Cbob%2Ccharlene"
)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data)
    if (data.length) {
      data.forEach((user) => {
        outPutHtml = `${outPutHtml} ${renderUserCard(user)}`
        targetDiv.innerHTML = outPutHtml
      })
    } else {
      targetDiv.innerHTML = "No users were returned from this api"
    }
  })
  .catch(function (error) {
    console.log(error)
  })
