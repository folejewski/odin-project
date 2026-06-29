const loadHome = () => {
    const content = document.getElementById('content');
    const home = document.createElement('div');

    home.classList.add('home-page');

    home.innerHTML = `
        <div class="hero">
            <p class="hero-location">Bermondsey · Since 2027</p>
            <h1>Fritas com <em>alma</em></h1>
            <div class="hero-divider"></div>
            <p class="hero-sub">Traditional Portuguese fried pastries, made fresh to order from the cart.</p>
            <span class="hero-tag">Find us at the market</span>
        </div>
        <div class="about-section">
            <h2>Made the old way</h2>
            <div class="section-divider"></div>
            <div class="about-grid">
                <div class="about-block">
                    <h3>The pastries</h3>
                    <p>Every batch is made from scratch using recipes passed down through generations - crisp outside, soft and warm within.</p>
                </div>
                <div class="about-block">
                    <h3>The cart</h3>
                    <p>We set up at local markets and events around London. No reservations, no fuss - just good food and good company.</p>
                </div>
                <div class="about-block">
                    <h3>The ingredients</h3>
                    <p>We source locally where we can. Seasonal fillings, quality oil, and nothing you can't pronounce.</p>
                </div>
                <div class="about-block">
                    <h3>The tradition</h3>
                    <p>Rissóis, croquetes, bolinhos de bacalhau - the classics, done properly. No shortcuts.</p>
                </div>
            </div>
        </div>
    `;
    
    content.appendChild(home);
};

export default loadHome;