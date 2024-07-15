import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Product({ searchTerm, priceRange, selectedBrand, selectedCategory, handleProductSelect }) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                setCards(response.data);
            } catch (error) {
            }
        }
        fetchData();
    }, []);
    
    const filteredCards = cards.filter(card => {
        const matchesSearchTerm = card.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPriceRange = priceRange ? card.price >= priceRange[0] && card.price <= priceRange[1] : true; 
        const matchesBrand = selectedBrand ? card.brand === selectedBrand : true;
        const matchesCategory = selectedCategory ? card.category === selectedCategory : true;
        return matchesSearchTerm && matchesPriceRange && matchesBrand && matchesCategory;
    });
    
    return (
        <section>
            <ul className='d-flex flex-wrap'>
                {filteredCards.map((card, index) => (
                    <li key={index} className={'list-group-item'} onClick={() => handleProductSelect(card)}>
                        {card.image && <img src={card.image}/>}
                        <h5>{card.title}</h5>
                        <p>Price: ${card.price}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}




