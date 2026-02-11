// Dummy data for food deals
const deals = [
    {
        id: 1,
        name: "Vegetable Fried Rice",
        shop: "Tasty Eats Cafe",
        city: "Colombo 03",
        originalPrice: "Rs. 800",
        discountedPrice: "Rs. 400",
        discount: "50%",
        image: "https://images.unsplash.com/photo-1603133872878-684f5c9322ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
    },
    {
        id: 2,
        name: "Chicken Kothu",
        shop: "Raja Bojun",
        city: "Dehiwala",
        originalPrice: "Rs. 1200",
        discountedPrice: "Rs. 750",
        discount: "38%",
        image: "https://images.unsplash.com/photo-1626804475297-411dbe9175d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "Assorted Pastries Box",
        shop: "Fab Bakeries",
        city: "Nugegoda",
        originalPrice: "Rs. 1500",
        discountedPrice: "Rs. 900",
        discount: "40%",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Rice & Curry (Fish)",
        shop: "Lunch Pack Express",
        city: "Rajagiriya",
        originalPrice: "Rs. 450",
        discountedPrice: "Rs. 250",
        discount: "45%",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Populate Deals
    const dealsContainer = document.getElementById('deals-container');
    
    if (dealsContainer) {
        deals.forEach(deal => {
            const card = document.createElement('div');
            card.className = 'deal-card';
            
            // In a real app, WhatsApp API link would be constructed here
            // e.g. https://wa.me/947XXXXXXXX?text=I'm interested in...
            
            card.innerHTML = `
                <div class="deal-image" style="background-image: url('${deal.image}')">
                    <span class="discount-badge">${deal.discount} OFF</span>
                </div>
                <div class="deal-content">
                    <div class="deal-shop">
                        <i class="fa-solid fa-store"></i> ${deal.shop}, ${deal.city}
                    </div>
                    <h3>${deal.name}</h3>
                    <div class="deal-price">
                        <span class="new-price">${deal.discountedPrice}</span>
                        <span class="old-price">${deal.originalPrice}</span>
                    </div>
                    <button class="btn btn-deal" onclick="window.open('https://wa.me/?text=I am interested in ${deal.name} from ${deal.shop} at ${deal.discountedPrice}', '_blank')">
                        <i class="fa-brands fa-whatsapp"></i> Order Now
                    </button>
                </div>
            `;
            
            dealsContainer.appendChild(card);
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Change icon
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
