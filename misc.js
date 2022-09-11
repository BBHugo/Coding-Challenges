//Syntax to create an object and make new ones with the grandma factory
class MakeCar{
    constructor(carMake,carModel,carColor,numOfDoors){
      this.make = carMake
      this.model = carModel
      this.color = carColor
      this.doors = numOfDoors
    }
    honk(){
      alert('BEEP BEEP FUCKER')
    }
    lock(){
      alert(`Locked ${this.doors} doors!`)
    }
  }
  
  let hondaCivic = new MakeCar('Honda','Civic','Silver', 4)
  
  let teslaRoadster = new MakeCar('Tesla','Roadster', 'Red', 2)

//Fetching from an API, using the .then to tell us what to do once we got the API Object

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

