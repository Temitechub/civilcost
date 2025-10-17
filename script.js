<!-- Replace the form tag with this -->
<form action="https://formspree.io/f/your-form-id" method="POST" class="space-y-4">
    <!-- Keep all the form fields the same -->
</form>

<!-- And update the form submission script -->
<script>
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.classList.add('loading');
        
        // Formspree handles the submission automatically
        // You just need to show a notification after submission
        fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                showNotification('Your message has been sent successfully! We will get back to you soon.', 'success');
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
</script>