const loadContact = () => {
    const content = document.getElementById('content');
    const contact = document.createElement('div');

    contact.classList.add('contact-page');

    contact.innerHTML = `
        <div class="contact-section">
            <h2>Find us</h2>
            <div class="section-divider"></div>
            <div class="contact-block">
                <div class="contact-row">
                    <p class="contact-label">Location</p>
                    <p class="contact-value">Maltby Street Market, London, SE1 3PA</p>
                </div>
                <div class="contact-row">
                    <p class="contact-label">Market days</p>
                    <p class="contact-value">Saturdays 9:00 - 14:00 Sundays 10:00 - 13:00</p>
                </div>
                <div class="contact-row">
                    <p class="contact-label">Email</p>
                    <p class="contact-value">afritura@gmail.com</p>
                </div>
                <div class="contact-row">
                    <p class="contact-label">Instagram</p>
                    <p class="contact-value">@afritura</p>
                </div>
            </div>
            <p class="contact-note">We also take bookings for private events and festivals - get in touch.</p>
        </div>
    `;
    
    content.appendChild(contact);
};

export default loadContact;