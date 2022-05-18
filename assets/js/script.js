function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

$(document).ready(function(){

        axios.get("https://restcountries.com/v3.1/all",)
          .then(function (response) {
            response.data.forEach(element => {
                $(".row").append(
                    `<div class="col-md-3">
                    <div class="card my-5" style="width: 18rem;">
                    <img src="${element.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title"> ${element.name.common}</h5>
                      <p class="card-text">Population: ${element.population}</p>
                      <p class="card-text">Region: ${element.region}</p>
                      <p class="card-text">Capital: ${element.capital}</p>
                    </div>
                    </div>
                    </div>`
                )
            });
          })
          .catch(function (error) {
            console.log(error);
          })


       
})