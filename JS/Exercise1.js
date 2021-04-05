fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
  .then(response => response.json())
  .then(paintings => {
    paintings.forEach(painting => {

      //create an array of painting attributes
      paintingAttributes = Object.values(painting)
      console.log(paintingAttributes)

      //create a table row
      const trElement = document.createElement("tr");

      paintingAttributes.forEach(attribute => {
        const tdElement = document.createElement("td");
        tdElement.innerHTML = attribute;
        trElement.appendChild(tdElement);
      }
      )

      document.getElementById("paintings").appendChild(trElement);
    })
  })
  .catch(err => {
    console.error(err.message)
  })