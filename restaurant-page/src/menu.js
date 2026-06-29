const loadMenu = () => {
    const content = document.getElementById('content');
    const menu = document.createElement('div');

    menu.classList.add('menu-page');

    menu.innerHTML = `
        <div class="menu-section">
            <h2>The menu</h2>
            <div class="section-divider"></div>
            <div class="menu-grid">
                <div class="menu-item">
                    <p class="menu-item-name">Rissóis de camarão</p>
                    <p class="menu-item-desc">Half-moon pastries filled with creamy prawn béchamel, breaded and fried golden.</p>
                    <p class="menu-item-price">£2.00 each or £5.50 for three</p>
                </div>
                <div class="menu-item">
                    <p class="menu-item-name">Croquetes de carne</p>
                    <p class="menu-item-desc">Classic beef croquettes - crisp, savoury, and impossible to eat just one.</p>
                    <p class="menu-item-price">£1.50 each or £4.00 for three</p>
                </div>
                <div class="menu-item">
                    <p class="menu-item-name">Bolinhos de bacalhau</p>
                    <p class="menu-item-desc">Salt cod fritters with potato and parsley. A Portuguese staple done right.</p>
                    <p class="menu-item-price">£1.80 each or £5.00 for three</p>
                </div>
                <div class="menu-item">
                    <p class="menu-item-name">Pastéis de massa tenra</p>
                    <p class="menu-item-desc">Flaky pastry pockets filled with spiced pork mince and hard-boiled egg.</p>
                    <p class="menu-item-price">£2.20 each or £6.00 for three</p>
                </div>
                <div class="menu-item">
                    <p class="menu-item-name">Chamuças</p>
                    <p class="menu-item-desc">Portuguese-style samosas with a savoury chicken and vegetable filling.</p>
                    <p class="menu-item-price">£1.80 each or £5.00 for three</p>
                </div>
                <div class="menu-item">
                    <p class="menu-item-name">Tray of six</p>
                    <p class="menu-item-desc">Pick any six from the menu. Mix and match, great for sharing.</p>
                    <p class="menu-item-price">£10.00 per tray</p>
                </div>
            </div>
        </div>
    `;
    
    content.appendChild(menu);
};

export default loadMenu;