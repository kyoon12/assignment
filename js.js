(function(){
    emailjs.init("IliSXVEVYtXPJz-vP");
})();


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_1iis658', 'template_0qv83tk', this)
            .then(function() {
                alert('Thank you for sending me a message.');
                document.getElementById('contact-form').reset();
            }, function(error) {
                alert('Failed to send the message: ' + JSON.stringify(error));
            });
    });
});