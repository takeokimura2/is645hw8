const travelInfo = {
  name: "Takeo",
  countries: [
    {
      name: "USA",
      year: 2001
    },
    {
      name: "Morocco",
      year: 2019
    },
    {
      name: "Germany",
      year: 2019
    }
  ],
};

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "content-Type": "application/json"
  },
  body: JSON.stringify(travelInfo)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });