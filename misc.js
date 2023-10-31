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
    //We can now use the async await syntax so make this asynchronous
    async function getACuteDogPhoto(){
        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await res.json()
        console.log(data)
    }
    getACuteDogPhoto()

//Async Await example
async function getPaid(){
    const houseOneWait = await houseOne()
    const houseTwoWait = await houseTwo()
    const houseThreeWait = await houseThree()
    console.log(houseOneWait)
    console.log(houseTwoWait)
    console.log(houseThreeWait)
}
getPaid()


//THE CODE BELOW IS THE FETCH FUNCTION TO OBTAIN AN API

fetch("YOUR URL HERE")
  .then(res => res.json()) // parse response as JSON, the res is a parameter for whatever comes through, we're transformingn it to a json
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(`error ${err}`)
  })

    //A reminder that we can get the specific data from