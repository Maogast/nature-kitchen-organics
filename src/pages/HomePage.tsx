import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import "../styles/components.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState(""); // Track the search input
    const [selectedCategory, setSelectedCategory] = useState("All"); // Track selected category
    const [isVisible, setIsVisible] = useState(false); // Show/hide scroll buttons based on scroll position

    const products = [
        { id: 1, name: "Turmeric", price: 200, benefits: "Anti-inflammatory", image: "/images/turmeric.JPG", category: "Spice" },
        { id: 2, name: "Cinnamon", price: 200, benefits: "Improves digestion", image: "/images/cinnamon.JPG", category: "Herbs" },
        { id: 3, name: "Ginger", price: 200, benefits: "Digestive aid, often used fresh/dried", image: "/images/ginger.JPG", category: "Herbs" },
        { id: 4, name: "Basil", price: 200, benefits: "Supports heart health, reduces inflammation", image: "/images/basil.JPG", category: "Herbs" },
        { id: 5, name: "Parsley", price: 200, benefits: "High in vitamin K, promotes bone health, aids digestion", image: "/images/parsley.png", category: "Herbs" },
        { id: 6, name: "Mint", price: 200, benefits: "Relieves indigestion, soothes headaches, freshens breath", image: "/images/mint.JPG", category: "Herbs" },
        { id: 7, name: "Oregano", price: 200, benefits: "Boosts immunity, antibacterial properties, supports respiratory health", image: "/images/oregano.JPG", category: "Herbs" },
        { id: 8, name: "Vanilla", price: 500, benefits: "Pure, aromatic pods for desserts", image: "/images/vanilla.png", category: "Baking & Sweet Spices" },
        { id: 9, name: "Nutmeg", price: 150, benefits: "Adds warmth to custards, lattes", image: "/images/nutmeg.png", category: "Baking & Sweet Spices" },
        { id: 10, name: "Cloves", price: 160, benefits: "Intense aroma for gingerbread, mulled cider", image: "/images/cloves.png", category: "Baking & Sweet Spices" },
        { id: 11, name: "Star Anise", price: 300, benefits: "Licorice flavor for Asian dishes", image: "/images/star_anise.png", category: "Global & Specialty Spices" },
        { id: 12, name: "Sumac", price: 250, benefits: "Tangy Middle Eastern garnish", image: "/images/sumac.png", category: "Global & Specialty Spices" },
        { id: 13, name: "Ashwagandha", price: 300, benefits: "Adaptogen for stress relief", image: "/images/ashwagandha.JPG", category: "Wellness-Focused Herbs" },
        { id: 14, name: "Holy Basil (Tulsi)", price: 300, benefits: "Supports immunity and clarity", image: "/images/holy_basil.png", category: "Wellness-Focused Herbs" },
        { id: 15, name: "Lemon-grass", price: 300, benefits: "Calming and anti-inflammatory properties", image: "/images/lemon_grass.png", category: "Wellness-Focused Herbs" },
        { id: 16, name: "Echinacea", price: 300, benefits: "Boosts immune system, reduces cold symptoms", image: "/images/echinacea.png", category: "Wellness-Focused Herbs" },
        { id: 17, name: "Chamomile", price: 300, benefits: "Promotes relaxation and better sleep", image: "/images/chamomile.png", category: "Wellness-Focused Herbs" },
        { id: 18, name: "Thyme", price: 300, benefits: "Antimicrobial properties, supports respiratory health", image: "/images/thyme2.png", category: "Wellness-Focused Herbs" },
        { id: 19, name: "Rosemary", price: 300, benefits: "Enhances memory and cognitive function", image: "/images/rosemary2.png", category: "Wellness-Focused Herbs" },
        { id: 20, name: "Saffron", price: 500, benefits: "Rich in antioxidants, enhances mood", image: "/images/saffron.png", category: "Global & Specialty Spices" },
        { id: 21, name: "Fenugreek", price: 300, benefits: "Supports lactation and improves digestion", image: "/images/fenugreek.png", category: "Global & Specialty Spices" },
        { id: 22, name: "Garam Masala", price: 300, benefits: "Aromatic blend for Indian cuisine", image: "/images/garam_masala.png", category: "Global & Specialty Spices" },
        { id: 23, name: "Annatto", price: 300, benefits: "Natural food coloring, rich in antioxidants", image: "/images/annatto.png", category: "Global & Specialty Spices" },
        { id: 24, name: "Allspice", price: 400, benefits: "Warm flavor for desserts and stews", image: "/images/allspice.png", category: "Baking & Sweet Spices" },
        { id: 25, name: "Cardamom", price: 400, benefits: "Aids digestion, freshens breath", image: "/images/cardamom.png", category: "Global & Specialty Spices" },
        { id: 26, name: "Black Pepper", price: 250, benefits: "Rich in antioxidants, improves nutrient absorption", image: "/images/black_pepper.png", category: "Spice" },
        { id: 27, name: "Coriander", price: 200, benefits: "Supports digestion, anti-inflammatory properties", image: "/images/coriander_powder.png", category: "Herbs" },
        { id: 28, name: "Fennel Seeds", price: 200, benefits: "Improves digestion, reduces bloating", image: "/images/fennel_seeds.png", category: "Spice" },
        { id: 29, name: "Bay Leaves", price: 150, benefits: "Enhances flavor, supports respiratory health", image: "/images/bay_leaves.png", category: "Herbs" },
        { id: 30, name: "Paprika", price: 180, benefits: "Rich in vitamins, adds vibrant color to dishes", image: "/images/paprika.png", category: "Spice" },
        { id: 31, name: "Chili Powder", price: 200, benefits: "Boosts metabolism, adds heat to dishes", image: "/images/chili_powder.png", category: "Spice" },
        { id: 32, name: "Cumin", price: 200, benefits: "Aids digestion, boosts immunity", image: "/images/cumin.png", category: "Spice" },
        { id: 33, name: "Sage", price: 300, benefits: "Improves brain function, supports oral health", image: "/images/sage.png", category: "Wellness-Focused Herbs" },
        { id: 34, name: "Lavender", price: 350, benefits: "Promotes relaxation, reduces stress", image: "/images/lavender.png", category: "Wellness-Focused Herbs" },
        { id: 35, name: "Peppermint", price: 300, benefits: "Relieves headaches, soothes digestion", image: "/images/peppermint.png", category: "Wellness-Focused Herbs" },
        { id: 36, name: "Onion Powder", price: 200, benefits: "Adds depth to dishes, rich in antioxidants", image: "/images/onion_powder.png", category: "Spice" },
        { id: 37, name: "Mustard Seeds", price: 180, benefits: "Rich in selenium, supports metabolism", image: "/images/mustard_seeds.png", category: "Spice" },
        { id: 38, name: "Dill", price: 200, benefits: "Supports digestion, rich in antioxidants", image: "/images/dill.png", category: "Herbs" },
        { id: 39, name: "Tarragon", price: 250, benefits: "Improves appetite, supports heart health", image: "/images/tarragon.png", category: "Herbs" },
        { id: 40, name: "Chives", price: 200, benefits: "Rich in vitamins, enhances flavor", image: "/images/chives.png", category: "Herbs" },
        { id: 41, name: "Fenugreek Leaves", price: 220, benefits: "Rich in iron, supports digestion", image: "/images/fenugreek_leaves.png", category: "Herbs" },
        { id: 42, name: "Jaggery", price: 150, benefits: "Natural sweetener, rich in minerals", image: "/images/jaggery.png", category: "Baking & Sweet Spices" },
        { id: 43, name: "Cinnamon Sticks", price: 200, benefits: "Adds warmth to beverages and desserts", image: "/images/cinnamon_sticks.png", category: "Baking & Sweet Spices" },
        { id: 44, name: "Moringa Powder", price: 300, benefits: "Rich in nutrients, boosts energy", image: "/images/moringa_powder.png", category: "Wellness-Focused Herbs" },
        { id: 45, name: "Spirulina", price: 400, benefits: "High in protein, supports detoxification", image: "/images/spirulina.png", category: "Wellness-Focused Herbs" },
        { id: 46, name: "Matcha Powder", price: 500, benefits: "Rich in antioxidants, boosts focus", image: "/images/matcha_powder.png", category: "Wellness-Focused Herbs" },
        { id: 47, name: "Elderberry", price: 300, benefits: "Supports immune health, rich in antioxidants", image: "/images/elderberry.png", category: "Wellness-Focused Herbs" },
    ];

    // Filter products based on the search query and selected category
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Scroll to bottom function
    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };

    // Toggle visibility of scroll buttons
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div>
            
            
            {/* Category Filter */}
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-filter"
            >
                <option value="All">All Categories</option>
                <option value="Herbs">Herbs</option>
                <option value="Spice">Spices</option>
                <option value="Baking & Sweet Spices">Baking & Sweet Spices</option>
                <option value="Global & Specialty Spices">Global & Specialty Spices</option>
                <option value="Wellness-Focused Herbs">Wellness-Focused Herbs</option>
            </select>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search products by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
            />
            
            {/* Display Filtered Products */}
            <ProductList products={filteredProducts} />
            
            {/* No Results Message */}
            {filteredProducts.length === 0 && <p>No products found. Try a different search term or category.</p>}

            {/* Navigate to Checkout */}
            <Link to="/checkout">
                <button className="checkout-button">Go to Cart</button>
            </Link>

            {/* Scroll Buttons */}
            {isVisible && (
                <div className="scroll-buttons">
                    <button onClick={scrollToTop} className="scroll-up">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                    <button onClick={scrollToBottom} className="scroll-down">
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default HomePage;
