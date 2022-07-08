function validateForm() {
    let firstName = document.forms["contactForm"]["firstname"].value;
    let lastName = document.forms["contactForm"]["lastname"].value;
    let subject = document.forms["contactForm"]["subject"].value;

    if (firstName, lastName, subject == "") {
      alert("Everything must be filled out.");
      return false;
    }
}