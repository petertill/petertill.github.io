(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "0rHPS5wp11otlybuc",
    });
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_petertill', 'petertill_templ', this)
            .then(() => {
                console.log('SUCCESS!');
                alert('Your message has been sent successfully. I will get back to you as soon as possible.');
            }, (error) => {
                console.log('FAILED...', error);
                alert('Your message has not been sent. Please try again.');
            });
    });
}