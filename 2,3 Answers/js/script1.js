function reqListener() {
    
    const countries = JSON.parse(this.responseText);
  
    
    countries.forEach(country => {
      const name = country.name.common;
      const region = country.region;
      const subRegion = country.subregion;
      const population = country.population;
      console.log(`Name: ${name}, Region: ${region}, Sub-Region: ${subRegion}, Population: ${population}`);
    });
  }
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  
  
  req.send();
  