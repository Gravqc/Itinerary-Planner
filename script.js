// loc_input.addEventListener("change", function(){
//     console.log(loc_input.value);
// })
// let loc_input = document.querySelector('#location_user');
// let desc_input = document.querySelector('#description_user');
// let start_date = document.querySelector('#start_date_user')
// let finish_date = document.querySelector('#finish_date_user')

// create a new trip
let uniqueIdCounter = 0;

function createModalTemplate(modalId) {
    let modal = document.createElement('div');
    modal.className = "modal fade";
    modal.id = modalId;
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', `${modalId}Title`);
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
    <div class="modal-dialog modal-xl bg-white" style="border-radius: 10px;" role="document">
        <div class="modal-content">
        <div class="close-button mb-4">
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <i class="bi bi-x"></i>
        </button>
    </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row row-outline">
                        <!-- Packing List Column -->
                        <div class="col-md column-outline">
                            <h4 class="fs-3 text-center text-primary">Packing List</h4>
                            <div class="row align-items-center">
                                <div class="col-md-11">
                                    <input type="text" class="form-control packing-input" placeholder="Add new item">
                                </div>
                                <div class="col-md-1 d-flex justify-content-center align-items-center fs-4 ps-1 pb-1 packing-button">
                                    <i class="bi bi-plus-circle"></i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <ul class="list-group list-group-flush packing-list"></ul>
                                </div>
                            </div>
                        </div>
                        <!-- Activities Column -->
                        <div class="col-md column-outline">
                            <h4 class="fs-3 text-center text-primary">Activities</h4>
                            <div class="row align-items-center">
                                <div class="col-md-11">
                                    <input type="text" class="form-control activities-input" placeholder="Add new activity">
                                </div>
                                <div class="col-md-1 d-flex justify-content-center align-items-center fs-4 ps-1 pb-1 activities-button">
                                    <i class="bi bi-plus-circle"></i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <ul class="list-group list-group-flush activities-list"></ul>
                                </div>
                            </div>
                        </div>
                        <!-- Places Column -->
                        <div class="col-md column-outline">
                            <h4 class="fs-3 text-center text-primary">Places</h4>
                            <div class="row align-items-center">
                                <div class="col-md-11">
                                    <input type="text" class="form-control places-input" placeholder="Add new place">
                                </div>
                                <div class="col-md-1 d-flex justify-content-center align-items-center fs-4 ps-1 pb-1 places-button">
                                    <i class="bi bi-plus-circle"></i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <ul class="list-group list-group-flush places-list"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    return modal;
}

let create = document.querySelector('#create_button')
create.addEventListener("click", function () {
    let modalId = `exampleModalCenter-${uniqueIdCounter++}`;
    let loc_input = document.querySelector('#location_user').value;
    let desc_input = document.querySelector('#description_user').value;
    let start_date = document.querySelector('#start_date_user').value;
    let finish_date = document.querySelector('#finish_data_user').value;
    if (isEmpty(loc_input) || isEmpty(desc_input) || isEmpty(start_date) || isEmpty(finish_date)) {
        alert("Missing fields");
    }
    else {
        const container = document.querySelector('#card_container')
        let newCard = document.createElement('div')

        //adding the properties of the new card:
        newCard.className = 'col'
        newCard.innerHTML = `
        <div class="card hover-card" data-bs-toggle="modal" data-bs-target="#${modalId}" style="width: 18rem;">
            <img class="card-img-top img-fluid" src="images/paris.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title fs-3">${loc_input}</h5>
                <p class="card-text">${desc_input}</p>
                <div class="row">
                    <div class="col">
                        <h6>Start Date: ${start_date}</h6>
                    </div>
                    <div class="col">
                        <h6>End Date: ${finish_date}</h6>
                    </div>
                </div>
            </div>
        </div>`;

        container.appendChild(newCard)

        // create and append modal
        let modalTemplate = createModalTemplate(modalId);
        document.body.appendChild(modalTemplate);

        attachEventListenersToModal(modalId)
        // resetting the values for the card:

        document.querySelector('#location_user').value = ""
        document.querySelector('#description_user').value = ""
        document.querySelector('#start_date_user').value = ""
        document.querySelector('#finish_data_user').value = ""

    }
    // console.log(loc_input.value + " " + desc_input.value + " " + start_date.value + " " + finish_date.value);
})

function isEmpty(variable) {
    return !variable || variable.trim() === "";
}


// edit itinerary:

// add item in packing list 
function attachEventListenersToModal(modalId) {
    let modal = document.getElementById(modalId);

    // For Packing List
    let packingAddButton = modal.querySelector('.packing-button'); 
    packingAddButton.addEventListener("click", function () {
        let input = modal.querySelector('.packing-input'); 
        let list = modal.querySelector('.packing-list'); 
        if (input.value.trim() !== "") {
            let newEntry = document.createElement('li');
            newEntry.className = 'list-group-item trip-item text-danger';
            newEntry.textContent = input.value;
            list.appendChild(newEntry);
            input.value = ""; 
        }
    });

    // For Activities
    let activitiesAddButton = modal.querySelector('.activities-button'); 
    activitiesAddButton.addEventListener("click", function () {
        let input = modal.querySelector('.activities-input'); 
        let list = modal.querySelector('.activities-list'); 
        if (input.value.trim() !== "") {
            let newEntry = document.createElement('li');
            newEntry.className = 'list-group-item trip-item text-danger';
            newEntry.textContent = input.value;
            list.appendChild(newEntry);
            input.value = ""; 
        }
    });

    // For Places
    let placesAddButton = modal.querySelector('.places-button');
    placesAddButton.addEventListener("click", function () {
        let input = modal.querySelector('.places-input'); 
        let list = modal.querySelector('.places-list'); 
        if (input.value.trim() !== "") {
            let newEntry = document.createElement('li');
            newEntry.className = 'list-group-item trip-item text-danger';
            newEntry.textContent = input.value;
            list.appendChild(newEntry);
            input.value = ""; 
        }
    });
}
