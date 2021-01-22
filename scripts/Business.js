// export const Supply = (supplyObject) => {
//     return `
//         <section class="supply">
//             <h3 class="supply__type">${supplyObject.type} by ${supplyObject.brand}</h3>
//             <div class="supply__price">
//                 Price: ${supplyObject.price}
//             </div>
//         </section>
//     `
// }


export const businessHTML = (bussinessObject) => {
    return `
    <h2 class="biz-name">${bussinessObject.companyName}</h2>
    <p class="biz-address">${bussinessObject.addressFullStreet}</p>
    `
}