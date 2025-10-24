document.getElementById('contact-form').addEventListener('submit', function(e) {
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.classList.add('loading');
    
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            showNotification('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
            this.reset();
        } else {
            showNotification('Failed to send your message. Please try again later.', 'error');
        }
    }).catch(error => {
        showNotification('Failed to send your message. Please try again later.', 'error');
    }).finally(() => {
        submitBtn.classList.remove('loading');
    });
    
    e.preventDefault();
});