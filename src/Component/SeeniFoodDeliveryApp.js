import React, { useState } from 'react';
import ComponentA from './One Flie';
import ComponentB from './TwoFile';
function SeeniFoodDeliveryApp() {
    const [message, setMessage] = useState(''); //state-message,setMessage-setState
    const updateMessage = (newMessage) => {
      setMessage(newMessage);
    };
  return (
    
    <div>
      <h1>What's on your mind?</h1>
      <table >
    <td>
        <th><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png"className="a"/></th>
        <th><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png" className="a"/></th>
        <th><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png" className="a"/></th>
        <th><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" className="a"/></th>
        <th><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Appam.png" className="a"/></th>
        <th><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png" className="a"/></th>
        <th><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Vada.png" className="a"/></th>
    </td>
  </table>
      <center>  <h2>Top Restaurant chains in your nearby</h2>
      </center>
  <table style={{backgroungColor: "lightcyan"}}>

<tr>
    <ComponentA onButtonClick={updateMessage}className="c" />
    {/* <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/emlehbuwgsmryxhwzhvq"className="c"/></td> */}
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG"className="c"/> </td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/2/1776fa6d-0969-4a43-a0d3-378ca449cede_822315.jpg" className="c"/>  </td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8" className="c"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG" className="c"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg" className="c"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zzkjr3jcrl1pqop1pybu" className="c"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c583da4b69d264ffe705e5918fad0e98" className="c"/></td>
  <div/>
</tr>
<tr>
    <td><b>NH1 Bowls</b><br/>15-25 mins<br/>Fast Delivery   <ComponentB message={message}/></td>
    
  
    <td><b>KFC</b><br/> 30-35 mins Burgers, Fast Food, Rolls & Wraps</td>
    <td><b>Subway</b><br/>4.4 • 35-40 minsSalads, Snacks, Desserts, Beverages</td>
    <td><b>Domino's Pizza</b><br/> 4.3 • 20-25 mins Pizzas, Italian, Pastas, Desserts</td>
    <td><b>Burger King</b><br/>4.3 • 40-45 mins Burgers, American Basavanagudi</td>
    <td><b>Pizza Hut</b><br/>4.3 • 40-45 mins Pizzas Shanti Nagar</td>
    <td><b>LunchBox - Meals and Thalis</b><br/>4.3 • 40-45 mins Biryani, North Indian, Punjabi, Healthy Food, Desserts, Beverages</td>
    <td><b>WeFit - Protein Bowls, Salads & Sandwiches</b><br/>4.7 • 20-30 mins Healthy Food, Salads, Keto, Snacks Santhinagar</td>
</tr>
</table>
<center><h2>Veg & Non-veg & sweets Restaurantes</h2>
</center>
<table style={{backgroungColor: "lightcyan"}}>

<tr>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wet9zrjusmdtkk16jlrz" className="d"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h8scdayrwunwig3rtiyq" className="d"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1abb89624b491497c8cff182d95ac457" className="d"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e62351117b87978ba8af4c541d834053" className="d"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v8jgifosg3vdzrgsv1sw" className="d"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622202.JPG" className="d"/></td>
</tr>
<tr>
    <td><b>Puliyogare Point</b></td>
    <td><b> Srinivasa Brahmins</b></td>
    <td><b> Haldirams Restaurant & Sweets</b></td>
    <td><b>Cafe Amudham</b></td>
    <td><b>IDC Kitchen </b></td>
    <td><b>MOJO Pizza</b></td>
</tr>
<tr>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dhcdvnp6oohqaenixza2" className="d"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/c5bbd782-00ef-45a8-aae7-ed1f86cee653_692226.JPG" className="d"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/a4f027d0-378c-4288-8d62-e1f5fb346b4a_503003.JPG" className="d"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e165225d26130103fecf1c40f5dc3669" className="d"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vofvjtbfnonk6xespq03" className="d"/></td>
    <td><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/12/b104a8f6-1801-4d1c-8270-7b7a82403ede_924631.jpg" className="d"/></td>
</tr>
<tr>
    <td><b> Kanti Sweets</b></td>
    <td><b>BOOM Sandwich</b></td>
    <td><b> ZAZA Mughal Biryani</b></td>
    <td><b> Itminaan Matka Biryani </b></td>
    <td><b> Bangarpet Chats</b></td>
    <td><b>Pizza Galleria</b></td>
</tr>
</table>
    </div>
  )
}

export default SeeniFoodDeliveryApp
