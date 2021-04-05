const formElement = document.querySelector("form");

formElement.addEventListener("submit", e => {

  //cancel form data sending
  e.preventDefault();

  //assign user iput to variables
  customerNameValue = e.target.customername.value;
  customerEmailValue = e.target.email.value;
  paymentTypeValue = e.target.paymentType.value;
  promoSelectionValue = e.target.promotion.value;
  locationValue = e.target.location.value;

  //create a variable for a new form data
  let fd = new FormData();
  fd.append("name", customerNameValue);
  fd.append("email", customerEmailValue);
  fd.append("payment", paymentTypeValue);
  fd.append("promotion", promoSelectionValue);
  fd.append("location", locationValue);

  //create an array of the form data for display
  fdArray = Array.from(fd);
  console.log(Array.from(fdArray));

  //clear content of the previous search
  tableOutput = document.getElementById("output");
  tableOutput.innerHTML = "";

  //insert a table name above the output table
  const tableTitle = document.createElement("p");
  tableTitle.textContent = "Form Data Entered";
  tableTitle.style.font = "bold";
  tableOutput.appendChild(tableTitle);

  //create and insert a table for output
  const customerTable = document.createElement("table");
  customerTable.id = "customerTable";
  tableOutput.appendChild(customerTable);

  //create a table header
  const thElement = document.createElement("tr");
  thElement.id = "thElement"

  keyHeadElement = document.createElement("th");
  keyHeadElement.textContent = "Key";
  thElement.appendChild(keyHeadElement);

  valueHeadElement = document.createElement("th");
  valueHeadElement.textContent = "Value";
  thElement.appendChild(valueHeadElement);

  document.getElementById("customerTable").appendChild(thElement);

  //add customer input to the table
  fdArray.forEach(CustomerData => {
    trElement = document.createElement("tr");
    trElement.id = "trElementID";

    for (const myElement of CustomerData) {

      tdElement = document.createElement("td");
      tdElement.textContent = myElement;
      trElement.appendChild(tdElement);
    };

    document.getElementById("customerTable").appendChild(trElement);
  })



});

