
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
// e is even parameter that will help us know what
// image is clicked on. 
//When you use the .addEventListener() method in JS, the function you call to handle the event can have a special parameter which is typically called 'event' or 'e'.
//This parameter is an object that contains various information and methods related to the specific event that occured.
//You can use this event parameter to give you control over how the event behaves.
//It does not have to be explicitly sent as an argument in the call to the function.  
// Code to show modal  - Use event parameter 'e'   
    console.log(e.target);
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();

    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          