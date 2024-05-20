function reqListener() {
    const countries = JSON.parse(this.responseText);
    countries.forEach(country => {
      if (country.flags && country.flags.svg) {
        console.log(country.flags.svg);
      }
    });
  }
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  
  