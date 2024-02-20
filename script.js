// loc_input.addEventListener("change", function(){
//     console.log(loc_input.value);
// })
// let loc_input = document.querySelector('#location_user');
// let desc_input = document.querySelector('#description_user');
// let start_date = document.querySelector('#start_date_user')
// let finish_date = document.querySelector('#finish_date_user')

let create = document.querySelector('#create_button')
create.addEventListener("click", function () {
    let loc_input = document.querySelector('#location_user').value;
    let desc_input = document.querySelector('#description_user').value;
    let start_date = document.querySelector('#start_date_user').value;
    let finish_date = document.querySelector('#finish_data_user').value;
    if (isEmpty(loc_input) == 0 || isEmpty(desc_input) == 0
        || isEmpty(start_date) == 0 || isEmpty(finish_date) == 0) {
        alert("Missing fields")
    }
    else {
        const container = document.querySelector('#card_container')
        let newCard = document.createElement('div')

        //adding the properties of the new card:
        newCard.className = 'col'
        newCard.innerHTML = `
        <div class="card hover-card" style="width: 18rem;">
            <img class="card-img-top img-fluid" src="images/paris.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title fs-3">${loc_input}</h5>
                        <p class="card-text">
                            ${desc_input}
                        </p>
                    <div class="row">
                        <div class="col">
                            <h6>Start Date: ${start_date}</h6>
                        </div>
                        <div class="col">
                            <h6>End Date: ${finish_date}</h6>
                        </div>
                    </div>

                    <a href="" class="btn btn-primary d-none">Edit</a>

                </div>
            </div>
        `
        container.appendChild(newCard)

        // resetting the values for the card:

        document.querySelector('#location_user').value = ""
        document.querySelector('#description_user').value = ""
        document.querySelector('#start_date_user').value = ""
        document.querySelector('#finish_data_user').value = ""

    }
    // console.log(loc_input.value + " " + desc_input.value + " " + start_date.value + " " + finish_date.value);
})

function isEmpty(variable) {
    if (variable == undefined || variable == "") {
        return 0;
    }
    else {
        return 1;
    }
}

// edit itinerary:

// add item in packing list 
let packing_button = document.querySelector('#packing_button');
packing_button.addEventListener("click", function () {
    let newItem = document.querySelector('#packing_user').value;
    const packing_container = document.querySelector('.packing_container')
    let newEntry = document.createElement('li')
    // let newEntry = document.createElement('div')
    // newEntry.className = 'li'
    //     newEntry.innerHTML = `<li class="list-group-item trip-item text-danger">
    //     ${newItem}
    // </li>
    //     `
    newEntry.className = 'list-group-item trip-item text-danger'
    newEntry.innerHTML = newItem
    packing_container.appendChild(newEntry);
})

// add item in activities

let activities_button = document.querySelector('#activities_button')
activities_button.addEventListener("click", function () {
    let newItem = document.querySelector('#activities_user').value
    const activities_container = document.querySelector('.activities_container')
    let newEntry = document.createElement('li')
    newEntry.className = 'list-group-item trip-item text-danger'
    newEntry.innerHTML = `${newItem}`
    activities_container.appendChild(newEntry)
})

// add item in places

let places_button = document.querySelector('#places_button')
places_button.addEventListener("click", function(){
    let newItem = document.querySelector('#places_user').value
    const places_container =document.querySelector('.places_container')
    let newEntry = document.createElement('li')
    newEntry.className = 'list-group-item trip-item text-danger'
    newEntry.innerHTML = newItem
    places_container.appendChild(newEntry)

})