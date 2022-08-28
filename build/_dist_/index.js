/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');
const all = document.querySelector("#title-container");

////////////////////////////////////////////////////////////////////////////////////////////
//Modal elements.
const modalCompenetContainer = document.querySelector('#modal-compenet-container');
const modalFlexContainer = document.querySelector('.modal-flex-container');
const modalBgContainer = document.querySelector('.modal-bg-container');
const modalContainer = document.querySelector('.modal-container');
const modalWrapper = document.querySelector('.modal-wrapper');
const modalWrapperFlex = document.querySelector('.modal-wrapper-flex')
const modalIcon = document.querySelector('.modal-icon');
const modalContent = document.querySelector('.modal-content');
const modalContentTitle = document.querySelector('.modal-content-title');
const modalText = document.querySelector('.modal-text');
const modalTextContentDtitle = document.querySelector('.modal-text-content-des-title');
const modalTextContentDescription = document.querySelector('.modal-text-content-description');
const modalTextContentHardiness = document.querySelector('.modal-text-content-hardiness');
const modalTextContentTaste = document.querySelector('.modal-text-content-taste');
const modalActions = document.querySelector('.modal-actions');
const modalSpaceContainer = document.querySelector('.modal-space-container');
const modalIconImage = document.querySelector('#model-icon-image');
//Botton
const modalActionBotton = document.querySelector('.modal-action-botton');

modalCompenetContainer.className = 'hidden fixed inset-0';
modalFlexContainer.className = 'flex items-end justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0';
modalBgContainer.className = 'fixed inset-0 bg-gray-700 bg-opacity-75';
modalContainer.className = 'inline-block align-bottom bg-green-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full';
modalWrapper.className = 'bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4';
modalWrapperFlex.className = 'sm:flex sm:items-start';
modalIcon.className = 'mx-auto flex shrink-0 items-center justify-center h-2/4 w-2/4 object-contain rounded-full bg-red-100 sm:mx-0 h-10 w-10';
modalContent.className = 'text-center mt-3 sm:ml-0 sm:ml-4 sm:text-left';
modalText.className = 'flex flex-col gap-2 justify-center content-around';
modalTextContentDtitle.className = 'text-lg font-medium text-gray-900';
modalContentTitle.className = 'pb-2 text-lg font-medium text-gray-900';
modalTextContentDescription.className = 'text-gray-800 text-sm';
modalTextContentHardiness.className = 'text-lg font-medium text-gray-600';
modalTextContentTaste.className = 'text-lg font-medium text-gray-600';
modalActions.className = 'px-4 py-3 sm:px-6 sm:flex justify-center';
modalActionBotton.className = 'w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-green-200 hover:bg-white focus:outline-none ring-2 ring-offset-2 ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm';
modalSpaceContainer.className = 'hidden sm:inline-block align-middle h-screen';
modalIconImage.className = 'h-full w-full'
////////////////////////////////////////////////////////////////////////////////////////////

//Body Background color
document.querySelector('body').className = 'bg-green-200';

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN',{
        style:"currency",
        currency:"USD",
    }).format(price);
    return newPrice;
}

//Open or close modal
const toggleModel = () => {
    modalCompenetContainer.classList.toggle('hidden');
}

//web api
async function fetchData() {
    const response = await fetch(`${url}/api/avo`),
    information = await response.json(),
    allItems = [];

    //Working with the API
    information.data.forEach((item) => {

        // create image
        const image = document.createElement("img");
        image.loading = 'lazy';
        image.className ='w-1/4 md:w-2/4 lg:w-1/2 xl:w-2/5 mt-3 mb-8 rounded-full self-center';
        image.src = `${url}${item.image}`;
        
        // create title  
        const title = document.createElement("h2");
        title.innerText = item.name;
        title.style.fontSize = '1.5rem';
        title.className = 'ml-2 mr-2 text-2xl text-center text-black-800';
        
        // create price
        const price = document.createElement("div");
        price.innerText = formatPrice(item.price);

        const container = document.createElement("div");
        container.className = 'cursor-pointer gallery-card flex justify-between items-center flex-1 flex-row bg-green-100 shadow-lg shadow-green-800 rounded-lg p-6 hover:bg-green-600  ';
        container.append(image, title, price);

        //Add all the API data to the modal
        container.addEventListener('click',() => {
            toggleModel();
            modalContentTitle.textContent = `Shape 🥑: ${item.attributes.shape}`
            modalTextContentDescription.textContent = item.attributes.description;
            modalTextContentHardiness.textContent = `Hardiness 👨‍🌾: ${item.attributes.hardiness}`;
            modalTextContentTaste.textContent = `Taste 👅: ${item.attributes.taste}`;
            image.loading = 'lazy';
            modalIconImage.src = `${url}${item.image}`;
        });

        allItems.push(container);
    });

    //Add all nodes to the DOM
    app.append(...allItems);
    app.className = 'app-main-container mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-2 gap-3 lg:grid-cols-3 gap-4 xl:grid-cols-4 gap-5';
}


//////////////////////////////////////////////////////////////////////////////////////////////
//Toggle working with modal

modalActionBotton.addEventListener('click',toggleModel);

modalBgContainer.addEventListener('click',toggleModel);
////////////////////////////////////////////////////////////////////////////////////////////

fetchData();

