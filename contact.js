let contact = [];

const handleSubmit = () => {
    //Save data to arrays
    const input_fname = document.getElementById('fname').value;
    const input_lname = document.getElementById('lname').value;
    const input_country = document.getElementById('country').value;
    const input_subject = document.getElementById('subject').value;
    contact.push({
        "first_name": input_fname,
        "last_name": input_lname,
        "country": input_country,
        "subject": input_subject,
    })
    console.log(contact);
}