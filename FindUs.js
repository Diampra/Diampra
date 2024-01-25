let Contact_FindUs = document.getElementById('Contact-popup');
// console.log(Contact);
window.onclick = function(event1) {
    if (event1.target == Contact_FindUs) {
        // alert(event1.target);
        Contact.style.display = "none";
    }

}