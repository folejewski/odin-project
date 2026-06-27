const loadMenu = () => {
    const content = document.getElementById('content');
    const menu = document.createElement('div');

    menu.classList.add('menu-page');

    menu.innerHTML = `
        <h1>Menu</h1>
        <h2>Burger</h2>
        <p>4€</p>
    `;
    
    content.appendChild(menu);
};

export default loadMenu;