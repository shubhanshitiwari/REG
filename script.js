const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// function showAlert(){
//     alert("Thank you for registering! Your spot at the event has been reserved.");
// }
