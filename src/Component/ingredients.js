import React, { useState } from 'react';
import './ingredi.css';
import Vegoil from './seeni.jpg';
import Onions from './seeni.jpg';
import Cashew from './seeni.jpg';
import BiriyaniLeaves from './seeni.jpg';
import Ginger from './seeni.jpg';
import Garlic from './seeni.jpg';
import Tomato from './seeni.jpg';
import Salt from './seeni.jpg';
import Redchilli from './seeni.jpg';
import Cumin from './seeni.jpg';
import Blackpepper from './seeni.jpg';
import Turmeric from './seeni.jpg';
import Curd from './seeni.jpg';
import Mint from './seeni.jpg';
import Cinnamon from './seeni.jpg';
import Chicken from './seeni.jpg';
import Cardomom from './seeni.jpg';
import Basmatirice from './seeni.jpg';
import Lemon from './seeni.jpg';
import Ghee from './seeni.jpg';

const Ingredients = () => {
    const [serve, setServe] = useState(0);

    const calculateQuantity = (baseValue, unit) => {
        return (serve * baseValue).toFixed(2) + ' ' + unit;//.2lf(double in C)
    };

    return (
        <div>
               <div>
                <label  style={{fontSize:'25px',backgroundColor:'#2183a2',padding:'20px 40px 20px 40px',color:'#fff'}}>
                    Enter number of servings:
                    <input type="number" style={{padding:'5px'}} value={serve}
                    onChange={(e) => setServe(Number(e.target.value))}
                    />
                </label>
            </div>
        <div className="gallery">
           
            <div className="content">
                <img src={Vegoil} alt="Vegetable Oil" />
                <h3>Vegetable Oil</h3>
                <p style={{ textAlign: 'center' }}>
                    Vegetable oils are extracted from various types of seeds, fruits, nuts, and grains. The most consumed oils are olive, sunflower, etc.
                </p>
                <h6>{calculateQuantity(125, 'ml')}</h6>
                <button className="buy1">Add</button>
            </div>

            <div className="content">
                <img src={Onions} alt="Onions" />
                <h3>Onions</h3>
                <p style={{ textAlign: 'center' }}>While onions offer many health benefits, consuming an excess amount can lead to gastrointestinal distress, such as irritable bowel syndrome and acid reflux.</p>
                <h6>{calculateQuantity(0.25, 'kg')}</h6>
                <button className="buy1">Add</button>
            </div>
            <div className="content">
                <img src={Garlic} alt="Garlic" />
                <h3>Garlic</h3>
                <p style={{ textAlign: 'center' }}>Garlic is widely recognized for its ability to fight bacteria, viruses, fungi, and even parasites.</p>
                <h6>{calculateQuantity(0.25, 'kg')}</h6>
                <button className="buy1">Add</button>
            </div>
            <div className="content">
                <img src={Ginger} alt="Ginger" />
                <h3>Fresh Ginger Root</h3>
                <p style={{ textAlign: 'center' }}>Grating is actually the most traditional way to prepare ginger for a recipe. To grate and to mince produce very similar results, but not identical.</p>
                <h6>{calculateQuantity(0.25, 'kg')}</h6>
                <button className="buy1">Add</button>
            </div>
            <div className="content">
                <img src={Tomato} alt="Tomato" />
                <h3>Tomatoes</h3>
                <p style={{ textAlign: 'center' }}>Tomatoes are juicy and sweet, full of antioxidants, and may help fight several diseases. They are especially high in lycopene, a plant compound linked to improved heart health</p>
                <h6>{calculateQuantity(0.25, 'kg')}</h6>
                <button className="buy1">Add</button>
            </div>
            <div className="content">
                <img src={Salt} alt="Salt" />
                <h3>Salt</h3>
                <p style={{ textAlign: 'center' }}>Salt plays a crucial role in maintaining human health. It is the main source of sodium and chloride ions in the human diet.</p>
                <h6>{calculateQuantity(0.16, 'Teaspoon')}</h6>
                <button className="buy1">Add</button>
            </div>

            <div className="content">
                <img src={Redchilli} alt="Redchilli" />
                <h3>Red Chilli</h3>
                <p style={{ textAlign: 'center' }}>Chili powder may help lower cholesterol levels and reduce the risk of heart disease. Improves circulation.</p>
                <h6>{calculateQuantity(0.1, 'Teaspoon')}</h6>
                <button className="buy1">Add</button>
            </div>
            <div className="content">
                <img src={Cumin} alt="Cumin" />
                <h3>Cumin</h3>
                <p style={{ textAlign: 'center' }}>Cumin can be used ground or as whole seeds. It imparts an earthy, warming and aromatic character to food, making it a staple in certain stews and soups.</p>
                <h6>{calculateQuantity(0.16, 'Teaspoon')}</h6>
                <button className="buy1">Add</button>
            </div>
            <div className="content">
                <img src={Blackpepper} alt="Blackpepper" />
                <h3>Blackpepper</h3>
                <p style={{ textAlign: 'center' }}>People take black pepper by mouth for arthritis, asthma, upset stomach, bronchitis, a bacterial infection that causes diarrhea (cholera), colic, depression.</p>
                <h6>{calculateQuantity(0.1, 'Tablespoon')}</h6>
                <button className="buy1">Add</button>
            </div>  <div className="content">
                <img src={Turmeric} alt="Turmeric" />
                <h3>Turmeric</h3>
                <p style={{ textAlign: 'center' }}>
                    Turmeric is one such herb. Turmeric is used as an herbal medicine for rheumatoid arthritis, chronic anterior uveitis, conjunctivitis, skin cancer, small pox, chicken pox</p>
                <h6>{calculateQuantity(0.1, 'Tablespoon')}</h6>
                <button className="buy1">Add</button>
            </div>  <div className="content">
                <img src={Curd} alt="Curd" />
                <h3>Curd</h3>
                <p style={{ textAlign: 'center' }}>Curd is a traditional fermented dairy product that originated in Indian Sub-Continent.</p>
                <h6>{calculateQuantity(0.40, 'ml')}</h6>
                <button className="buy1">Add</button>
            </div>
            <div className="content">
                <img src={Mint} alt="Mint" />
                <h3>Mint</h3>
                <p style={{ textAlign: 'center' }}>Mint leaves are delicate herbs with delicate stems and have an unmistakable charming fragrance, satisfying taste, cool after-sensation.</p>
                <h6>{calculateQuantity(0.40, 'Tablespoon')}</h6>
                <button className="buy1">Add</button>
            </div>  <div className="content">
                <img src={Cinnamon} alt="Cinnamon" />
                <h3>Cinnamon Stick</h3>
                <p style={{ textAlign: 'center' }}>Cinnamon contains antioxidants, which are a healthy component of the diet that help neutralize free radicals, preventing them from damaging cells in the body.</p>
                <h6>{calculateQuantity(0.2, 'gm')}</h6>
                <button className="buy1">Add</button>
            </div>  <div className="content">
                <img src={Chicken} alt="Chicken" />
                <h3>Boneless Chicken</h3>
                <p style={{ textAlign: 'center' }}>Boneless wings are not chicken wings with their bones removed. They're pieces of breast meat cut into the shape of chicken wings that chefs carefully bread, deep-fry, and slather in hot sauce.</p>
                <h6>{calculateQuantity(0.25, 'kg')}</h6>
                <button className="buy1">Add</button>
            </div>
            <div className="content">
                <img src={Cardomom} alt="Cardomom" />
                <h3>Cardomom</h3>
                <p style={{ textAlign: 'center' }}>Cardamom can ease inflammation and protect your cells against something called oxidative stress, an imbalance between free radicals and antioxidants.</p>
                <h6>{calculateQuantity(0.1, 'Teaspoon')}</h6>
                <button className="buy1">Add</button>
            </div>
            <div className="content">
                <img src={Basmatirice} alt="Basmatirice" />
                <h3>Basmati Rice</h3>
                <p style={{ textAlign: 'center' }}>Basmati rice has a unique nutrient profile that may provide several health benefits. It is lower in calories and glycemic index than many other types of rice.</p>
                <h6>{calculateQuantity(0.25, 'kg')}</h6>
                <button className="buy1">Add</button>
            </div>
            <div className="content">
                <img src={Lemon} alt="Lemon" />
                <h3>Lemon</h3>
                <p style={{ textAlign: 'center' }}>
                    Lemons may aid weight loss and reduce your risk of heart disease, anemia, kidney stones, digestive issues, and cancer.</p>
                <h6>{calculateQuantity(0.16, 'ml')}</h6>
                <button className="buy1">Add</button>
            </div>  <div className="content">
                <img src={Ghee} alt="Ghee" />
                <h3>Ghee</h3>
                <p style={{ textAlign: 'center' }}>Ghee is a type of clarified butter. It's more concentrated in fat than butter because it doesn't contain water or milk solids.</p>
                <h6>{calculateQuantity(100, 'ml')}</h6>
                <button className="buy1">Add</button>
            </div>  
            <div className="content">
                <img src={Cashew} alt="Cashew Nut" />
                <h3>Cashew Nut</h3>
                <p style={{ textAlign: 'center' }}>Cashews may help prevent heart disease due to their high magnesium content. Getting enough magnesium may reduce your risk of ischemic heart disease.</p>
                <h6>{calculateQuantity(100, 'gm')}</h6>
                <button className="buy1">Add</button>
            </div>
                <div className="content">
                <img src={BiriyaniLeaves} alt="Briyani Leaves" />
                <h3>Biriyani Leaves</h3>
                <p style={{ textAlign: 'center' }}>Briyani leaves offer diverse health benefits, aiding digestion, regulating blood sugar, reducing inflammation, and promoting respiratory and dental health.</p>
                <h6>{calculateQuantity(0.65, 'gm')}</h6>
                <button className="buy1">Add</button>
            </div>
         
        </div>
        </div>
    );
};

export default Ingredients;