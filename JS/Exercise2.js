
const displayResult = () => {

  let url = "https://api.github.com/users/" + document.getElementById("username").value;

  fetch(url)
    .then(response => response.json())
    .then(users => {

      console.log(users);

      //clear content of the previous search
      document.getElementById("searchOutput").innerHTML = "";

      //insert the user picture into the page
      const pictureElement = document.createElement("img");
      pictureElement.src = users.avatar_url;
      pictureElement.style = "width:200px;height:200px;";
      document.getElementById("searchOutput").appendChild(pictureElement);

      //create and insert a table for user profile into the page
      const tableElement = document.createElement("table");
      tableElement.id = "userProfile";
      document.getElementById("searchOutput").appendChild(tableElement);

      //create and insert a table row for user name 
      const nameElement = document.createElement("tr");
      nameElement.id = "nameRow";
      document.getElementById("userProfile").appendChild(nameElement);

      //create and insert a table data for the name row
      const nameLabel = document.createElement("td");
      nameLabel.textContent = "Name";
      document.getElementById("nameRow").appendChild(nameLabel);

      //insert a user name into the name row
      const nameResult = document.createElement("td");
      nameResult.textContent = users.name;
      document.getElementById("nameRow").appendChild(nameResult);

      //create and insert a table row for user blog 
      const blogElement = document.createElement("tr");
      blogElement.id = "blogRow";
      document.getElementById("userProfile").appendChild(blogElement);

      //create and insert a table data for the blog row
      const blogLabel = document.createElement("td");
      blogLabel.textContent = "Blog";
      document.getElementById("blogRow").appendChild(blogLabel);

      //insert a user blog into the blog row
      const blogResult = document.createElement("td");
      blogResult.textContent = users.blog;
      document.getElementById("blogRow").appendChild(blogResult);

      //create and insert a table row for user creation date 
      const creationElement = document.createElement("tr");
      creationElement.id = "creationRow";
      document.getElementById("userProfile").appendChild(creationElement);

      //create and insert a table data for the creation row
      const creationLabel = document.createElement("td");
      creationLabel.textContent = "Created";
      document.getElementById("creationRow").appendChild(creationLabel);

      //insert a user creation into the creation row
      const creationResult = document.createElement("td");
      creationResult.textContent = users.created_at;
      document.getElementById("creationRow").appendChild(creationResult);
    })
}

//detect the submission without a user name 
//It does not work for some reasons!
function checkInput() {

  let userInput = document.getElementById("username").value;

  if (userInput != '') {
    displayResult;
  }

  else {
    const inputValidation = document.getElementById("usernameHelp");
    inputValidation.addEventListener("blur", e => {
      inputValidation.textContent = "Enter a GitHub username";
    })
  }
}
const buttonElement = document.getElementById("lookup");

buttonElement.addEventListener("click", displayResult);