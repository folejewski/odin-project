const loadHome = () => {
    const content = document.getElementById('content');
    const home = document.createElement('div');

    home.classList.add('home-page');

    home.innerHTML = `
        <h1>Restaurant name</h1>
        <p>About the restaurant</p>
    `;
    
    content.appendChild(home);
};

export default loadHome;