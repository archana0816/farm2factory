import React, { useState } from 'react';
import './Buyer.css';
import { useNavigate } from 'react-router-dom';

const Buyer = () => {
  const [selectedCard, setSelectedCard] = useState('https://www.natureloc.com/image/cache/catalog/products/coconut-shell-22-600x600.jpg');
  const navigate = useNavigate();

  const images = [
    'https://www.natureloc.com/image/cache/catalog/products/coconut-shell-22-600x600.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUiaxgXDdnlvDBw4B_Ad6GGqyh5i_Mp0MRA&s',
    'https://www.paperpulping.com/uploads/allimg/bagasses.jpg',
    'https://dakshfarm.com/wp-content/uploads/2013/10/baled-straw-1.jpg',
    'https://cdn.mos.cms.futurecdn.net/buqfd2eFGHtucebKCqcSZR-1200-80.jpg'
  ];

  const titles = {
    'https://www.natureloc.com/image/cache/catalog/products/coconut-shell-22-600x600.jpg': 'COCONUT SHELL',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUiaxgXDdnlvDBw4B_Ad6GGqyh5i_Mp0MRA&s': 'BANANA FIBRE',
    'https://www.paperpulping.com/uploads/allimg/bagasses.jpg': 'SUGARCANE BAGASSE',
    'https://dakshfarm.com/wp-content/uploads/2013/10/baled-straw-1.jpg': 'RICE STRAW',
    'https://cdn.mos.cms.futurecdn.net/buqfd2eFGHtucebKCqcSZR-1200-80.jpg': 'COCONUT HUSK',
  };

  const additionalCardsData = {
    'https://www.natureloc.com/image/cache/catalog/products/coconut-shell-22-600x600.jpg': [
      { img: 'https://parachutekalpavriksha.org/cdn/shop/articles/Recycling_coconut_waste_multiple_uses_of_the_coconut_shell.jpg?v=1711266598&width=2048', Place: 'Coimbatore',Price :'₹14', id: 1 },
      { img: 'https://miro.medium.com/v2/resize:fit:1400/1*pL-SWTHsZ-mIaaGoc9YPVw.jpeg', Place: 'Pollachi',Price :'₹11', id: 2 },
      { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByCgPtL2Vza8Nq6296pY7EPpggW_XAiP2juSbDGjhpXjNiqvuIUXo6NxpuioX_jGDgP4&usqp=CAU', Place: 'Dharapuram',Price :'₹15' , id: 3},
      { img: 'https://cdn.shopify.com/s/files/1/0071/1403/1186/files/image-asset_1024x1024.jpg?v=1710155452', Place: 'Thanjavur',Price :'₹12' , id: 4},
      { img: 'https://www.researchgate.net/publication/315727599/figure/fig5/AS:668320458084353@1536351422103/Coconut-shell-mound-as-waste-at-some-oil-mills.jpg', Place: 'Pattukkottai',Price :'₹11.5',id: 5 },
      { img: 'https://5.imimg.com/data5/ANDROID/Default/2024/6/428674726/PB/RU/BB/453789/product-jpeg-250x250.jpg', Place: 'Tenkasi',Price :'₹14', id: 6 },
      { img: 'https://img3.exportersindia.com/product_images/bc-small/2023/9/12034608/coconut-shell-1683395884-6883838.jpg', Place: 'Tirunelveli',Price :'₹12', id: 7 },
      { img: 'https://www.geewinexim.com/images/products/shell-2.jpg', Place: 'Nagapattinam',Price :'₹13' , id : 8}

      // Add more additional cards if needed
    ],
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUiaxgXDdnlvDBw4B_Ad6GGqyh5i_Mp0MRA&s': [
      { img: 'https://praneesthaikitchen.com/wp-content/uploads/2055/02/img_0377.jpg', Place: 'Trichy',Price :'₹30' , id: 9 },
      { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixu9IDUBBxUI1hTQ-1IEu8Up8bHHokpadO3Rmm56fqfhG6LrbNKeI3D-KgFO7RqcTDkQ&usqp=CAU', Place: 'Thanjavur',Price :'₹35' , id: 10},
      { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3lGih2dDQQi39AATOm3gNPs3HAQ1ohfDLMdoQO0c8J6Y5UCoQuDIvFuqiWSlNn2yxxc&usqp=CAU', Place: 'Pudukkottai',Price :'₹32' , id:11},
      { img: 'https://i0.wp.com/thingscouplesdo.com/wp-content/uploads/2021/05/FB_IMG_1621186785031.jpg?fit=480%2C480&ssl=1', Place: 'Tuticorin',Price :'₹33', id: 12 },
      { img: 'https://www.thestatesman.com/wp-content/uploads/2022/03/banana-stem.jpg', Place: 'Erode',Price :'₹38' , id:13},
      { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScWHi1yPDhped0u2Oo1yh2tVQ6cQMR4kNTod5HTrl699nm4myG7qX82l5tUyUIl0SiWo&usqp=CAU', Place: 'Tirunelveli',Price :'34', id:14 },
      { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9plU3yX98XlkmbuE1S2lRgpE9qvQhpquIKVOY9ngCM9Iph9SpIKOtTEfB2G18CqDPJs&usqp=CAU', Place: 'Kanyakumari',Price :'₹36',id:15 },
      { img: 'https://unair.ac.id/wp-content/uploads/2019/07/batang-pisang_20160326_223835-1.jpg',Place: 'Sirumalai',Price :'₹36', id:16}
    ],
    'https://www.paperpulping.com/uploads/allimg/bagasses.jpg': [
      { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUo39ue7NMAX0L3EcWDITu2h9T4lJgp-RNyQ&s', Place: 'Coimbatore',Price :'₹4.9', id:17},
      { img: 'https://www.shutterstock.com/image-photo/bagasse-waste-sugar-cane-after-600nw-1930698344.jpg', Place: 'Trichy',Price :'₹4.7',id:18 },
      { img: 'https://5.imimg.com/data5/SELLER/Default/2020/10/RD/TT/QM/55062602/sugarcane-bagasse-500x500.jpg',Place: 'Salem',Price :'₹4.3', id:19 },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sugarcane_bagasse.jpg/4000px-Sugarcane_bagasse.jpg', Place: 'Vellore',Price :'₹4.4', id:20 },
      { img: 'https://3.imimg.com/data3/VW/BU/MY-3439981/sugar-cane-bagasse-500x500.png', Place: 'Karur',Price :'₹4.26' ,id: 21},
      { img: 'https://cdn.wikifarmer.com/wp-content/uploads/2023/07/sugarcane-waste-management-1024x668.jpg', Place: 'Perambalur',Price :'₹4.5',id:22 },
      { img: 'https://www.paperpulping.com/uploads/allimg/bagasses.jpg',Place: 'Cuddlaore',Price :'₹4.56',id:23 },
      { img: 'https://images.squarespace-cdn.com/content/v1/5fd942c7730cb7231c94ad8c/1624921287171-490Q6JIES27970B9KW1P/240_F_158319909_9EioBWY5IAkquQAbTk2VBT0x57jAHPmH.jpg?format=750w', Place: 'Villupuram',Price :'₹5.12' , id:24}
    ],
    'https://dakshfarm.com/wp-content/uploads/2013/10/baled-straw-1.jpg': [
      { img: 'https://dakshfarm.com/wp-content/uploads/2013/10/baled-straw-1.jpg', Place: 'Thanjavur',Price :'₹12',id:25 },
      { img: 'https://5.imimg.com/data5/PP/VP/MY-9683712/utb8ucpqxkvjxkjksajhq6a7afxat-500x500.jpg',Place: 'Tiruvarur',Price :'₹11.7' ,id:26},
      { img: 'https://5.imimg.com/data5/SELLER/Default/2023/6/315782453/IL/ZZ/XQ/11591499/paddy-straw-bales.jpeg', Place: 'Tiruvallur',Price :'₹12.2',id:27 },
      { img: 'https://4.imimg.com/data4/LT/XO/MY-5308089/paddy-straw.jpg', Place: 'Kancheepuram',Price :'₹11.9', id:28 },
      { img: 'https://5.imimg.com/data5/SELLER/Default/2024/2/390352947/JP/WE/DC/20619103/500kg-paddy-straw-bale.jpg', Place: 'Villupuram',Price :'₹14', id:29 },
      { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvxW3qZD8cngjrqTJCaX1eYc0URUtzV96vK-IyRp3sRPxk2EKZEd-Ul8GdgowYXx1D90&usqp=CAU', Place: 'Cuddalore',Price :'₹14',id:30 },
      { img: 'https://sc04.alicdn.com/kf/U6537b4e89eaf47c9b88c21c1ebcc0f0fY.jpg', Place: 'Tirunelveli',Price :'₹13', id:31},
      { img: 'https://5.imimg.com/data5/ANDROID/Default/2021/3/KS/QH/YW/66930019/product-jpeg.jpg', Place: 'Villupuram',Price :'₹13.3', id:32 }
    ],
    'https://cdn.mos.cms.futurecdn.net/buqfd2eFGHtucebKCqcSZR-1200-80.jpg': [
      { img: 'https://media.istockphoto.com/id/523390634/photo/pile-coconut-shell-for-use-as-fuel.jpg?s=612x612&w=0&k=20&c=eb3LrCUPFp48tXN4jRfJnORTz7YjS_nWUumCw7g6tqM=', Place: 'Pollachi',Price :'₹140' , id:33},
      { img: 'https://media.istockphoto.com/id/1394774603/photo/coconut-husks-of-peeled-coconut-left-as-fertilizer.jpg?s=612x612&w=0&k=20&c=aadduF0mC4VqxvBcD0SoX_EttAO4gsbiuwlWCbO70sU=', Place: 'Trichy',Price :'₹138', id:34 },
      { img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?resize=1300%2C866&ssl=1', Place: 'Tirunelveli',Price :'₹142', id:35 },
      { img: 'https://cdn.shopify.com/s/files/1/0607/4220/5649/files/coconut_husk_detail_1024x1024.png?v=1678130480', Place: 'Kanyakumari',Price :'₹137.58', id:36 },
      { img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?resize=1300%2C866&ssl=1', Place: 'Coimbatore',Price :'₹147.25', id:37 },
      { img: 'https://t3.ftcdn.net/jpg/02/66/45/92/360_F_266459213_shM1V4Iagy13N9sfFlHhUNQhND6nXZXF.jpg', Place: 'Dharapuram',Price :'₹139.76', id:38},
      { img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?fit=1200%2C799&ssl=1&w=640',Place: 'Villupuram',Price :'₹136.12', id:39 },
      { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-jYLe5w6XK116DGCINOFIX6Zdg9QuO-n8KCUI4wwqpq81aPVe3_YkeydiKajXBROkRU&usqp=CAU', Place: 'Karur',Price :'₹139.3', id:40 }
    ],
    // Add more data for other images
  };

  const handleCardClick = (img) => {
    setSelectedCard(img);
  };

  const handleAdditionalCardClick = (card) => {
    navigate(`/product/${card.id}`);
  };

  const cardsToShow = [images[0], ...images.slice(1)];
  const additionalCards = additionalCardsData[selectedCard] || [];
  const title = titles[selectedCard];

  return (
    <div className="app">
      <div className="container">
        {cardsToShow.map((img, index) => (
          <div
            className={`card4 ${selectedCard === img ? 'active' : ''}`}
            key={index}
            onClick={() => handleCardClick(img)}
            tabIndex="0" // Make div focusable
          >
            <img src={img} alt={`Card4 ${index + 1}`} />
          </div>
        ))}
      </div>
      <br />
      <h2 className="buyer-additional-cards-title">{title}</h2>
      <div className="buyer-additional-cards">
        {additionalCards.map((card, index) => (
          <div
            className="buyer-additional-card"
            key={index}
            onClick={() => handleAdditionalCardClick(card)}
            tabIndex="0"
          >
            <img src={card.img} alt={`Additional ${index + 1}`} />
            <p className='buyer-pp'>Place: {card.Place}</p>
            <p className='buyer-pp'>Price: {card.Price}/kilogram</p>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Buyer;
