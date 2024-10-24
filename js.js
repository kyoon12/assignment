(function() {
    emailjs.init("service_bztndao"); 
})();

function sendEmail(event) {
    event.preventDefault();

    const form = document.getElementById('contact-form');
    const data = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
    };

    emailjs.send('service_rvxj1bq', 'template_ddptx8k', data)
        .then(() => {
            alert('Your message has been sent successfully!');
            form.reset();
        }, (error) => {
            alert('Failed to send your message. Please try again later.');
        });
}