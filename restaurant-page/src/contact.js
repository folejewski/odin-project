const loadContact = () => {
    const content = document.getElementById('content');
    const contact = document.createElement('div');

    contact.classList.add('contact-page');

    contact.innerHTML = `
        <h1>Restaurant name</h1>
        <p>Phone number: 500010203</p>
        <p>Email: test@email.com</p>
    `;
    
    content.appendChild(contact);
};

export default loadContact;