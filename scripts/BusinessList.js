// import { useSupplies } from "./BusinessProvider.js"
// import { businessHTML, Supply } from "./Business.js"

// const contentTarget = document.querySelector(".supplies")

// export const SupplyList = () => {
//     // Catching the array of objects in a variable(supplyArray) by invoking it within the function.
//     const supplyArray = useSupplies()
//     // Assigning the information
//     contentTarget.innerHTML = "<h1>Art Supplies</h1>"
//     // Using the invoked array of objects from the data provider, looping through each index 
//     supplyArray.forEach(
//         // Passing an argument into the imported function "Supply" from the array of objects "useSupplies()" stored in the variable "supplyArray"
//         (supplyObject) => {
//             // Placing the information gathered from the '.forEach' (looping) method and putting it into a container. Adding onto that container each time it loops and placing 
//             contentTarget.innerHTML += Supply(supplyObject)
//         }
//     );
// }




// Importing two js files from two different locations.
import { exportedBusinessData } from './BusinessProvider.js'
import { businessHTML } from './Business.js'

// Creating a variable named "businessContainer" to store the built list of objects and html representations and targeting the place within the html to place it all.
const businessContainer = document.querySelector('#businesses')

// This function is taking the data provided from array of objects, manipulating it, and then exporting it.
export const listOfBuiltBusinesses = () => {

    // This variable is created to catch the exported data.
    const arrayOfBusinesses = exportedBusinessData()

    // This is acting like a container for what is produced from the .forEach array method.
    businessContainer.innerHTML = `<h1>Active Business</h1>`

    // The ".forEach" array method is looping through each of the objects in the array
    arrayOfBusinesses.forEach(

        // Storing those objects as an argument
        (bussinessObject) => {

            // Taking that argument and adding it to the list of arguments that has been built by the looping, while also using the the imported structured html to help build a final list for export.
            businessContainer.innerHTML += businessHTML(bussinessObject)
        }
    )
}