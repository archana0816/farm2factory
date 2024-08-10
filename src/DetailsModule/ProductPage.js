import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone ,faVideo,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Buyernavbar from '../BuyerModule/Buyernavbar';
import BuyerFooter from '../BuyerModule/BuyerFooter';
import './ProductPage.css';
import { useCart } from '../CartModule/CartContext';
import CartModal from '../CartModule/CartModal';

const productData = [
  {
    id: 1,
    img: 'https://parachutekalpavriksha.org/cdn/shop/articles/Recycling_coconut_waste_multiple_uses_of_the_coconut_shell.jpg?v=1711266598&width=2048',
    title: 'Coconut Shell',
    netweight: '450kg',
    availability: 'In Stock',
    price: '6,300',
    description: 'Discover the natural beauty and versatility of our premium coconut shells. Perfect for crafting, gardening, and home decor, these eco-friendly shells add a tropical touch to any project. Whether you’re creating unique art pieces, enhancing your garden, or adding rustic charm to your home, our coconut shells are the perfect choice. Embrace sustainability and creativity with every shell.',
    contact: '75864 63290',
    relatedProducts: [
      { id: 101, img:'https://img3.exportersindia.com/product_images/bc-small/2023/9/12034608/coconut-shell-1683395884-6883838.jpg'},
      { id: 102, img: 'https://www.geewinexim.com/images/products/shell-2.jpg' },
      { id: 103, img: 'https://5.imimg.com/data5/ANDROID/Default/2024/6/428674726/PB/RU/BB/453789/product-jpeg-250x250.jpg' }
    ]
  },
  {
    id: 2,
    img: 'https://miro.medium.com/v2/resize:fit:1400/1*pL-SWTHsZ-mIaaGoc9YPVw.jpeg',
    title: 'Coconut Shell',
    netweight: '320kg',
    availability: 'In Stock',
    price: '3,520',
    description: 'Discover the natural beauty and versatility of our premium coconut shells. Perfect for crafting, gardening, and home decor, these eco-friendly shells add a tropical touch to any project. Whether you’re creating unique art pieces, enhancing your garden, or adding rustic charm to your home, our coconut shells are the perfect choice. Embrace sustainability and creativity with every shell.',
    contact: '69874 23641',
    relatedProducts: [
      { id: 104, img: 'https://parachutekalpavriksha.org/cdn/shop/articles/Recycling_coconut_waste_multiple_uses_of_the_coconut_shell.jpg?v=1711266598&width=2048'},
      { id: 105, img: 'https://cdn.shopify.com/s/files/1/0071/1403/1186/files/image-asset_1024x1024.jpg?v=1710155452' },
      { id: 106, img: 'https://www.geewinexim.com/images/products/shell-2.jpg' }
    ]
  },
  {
    id:3 ,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByCgPtL2Vza8Nq6296pY7EPpggW_XAiP2juSbDGjhpXjNiqvuIUXo6NxpuioX_jGDgP4&usqp=CAU',
    title: 'Coconut Shell',
    netweight: '560kg',
    availability: 'In Stock',
    price: '8,400',
    description: 'Discover the natural beauty and versatility of our premium coconut shells. Perfect for crafting, gardening, and home decor, these eco-friendly shells add a tropical touch to any project. Whether you’re creating unique art pieces, enhancing your garden, or adding rustic charm to your home, our coconut shells are the perfect choice. Embrace sustainability and creativity with every shell.',
    contact: '89632 14596',
    relatedProducts: [
      { id: 107, img: 'https://www.researchgate.net/publication/315727599/figure/fig5/AS:668320458084353@1536351422103/Coconut-shell-mound-as-waste-at-some-oil-mills.jpg'},
      { id: 108, img: 'https://cdn.shopify.com/s/files/1/0071/1403/1186/files/image-asset_1024x1024.jpg?v=1710155452' },
      { id: 109, img: 'https://www.geewinexim.com/images/products/shell-2.jpg' }
    ]
  },
  {
    id:4 ,
    img: 'https://cdn.shopify.com/s/files/1/0071/1403/1186/files/image-asset_1024x1024.jpg?v=1710155452',
    title: 'Coconut Shell',
    netweight: '520kg',
    availability: 'In Stock',
    price: '6,240',
    description: 'Discover the natural beauty and versatility of our premium coconut shells. Perfect for crafting, gardening, and home decor, these eco-friendly shells add a tropical touch to any project. Whether you’re creating unique art pieces, enhancing your garden, or adding rustic charm to your home, our coconut shells are the perfect choice. Embrace sustainability and creativity with every shell.',
    contact: '78236 14692',
    relatedProducts: [
      { id: 110, img: 'https://5.imimg.com/data5/ANDROID/Default/2024/6/428674726/PB/RU/BB/453789/product-jpeg-250x250.jpg'},
      { id: 111, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByCgPtL2Vza8Nq6296pY7EPpggW_XAiP2juSbDGjhpXjNiqvuIUXo6NxpuioX_jGDgP4&usqp=CAU' },
      { id: 112, img: 'https://www.researchgate.net/publication/315727599/figure/fig5/AS:668320458084353@1536351422103/Coconut-shell-mound-as-waste-at-some-oil-mills.jpg' }
    ]
  },
  {
    id:5 ,
    img: 'https://www.researchgate.net/publication/315727599/figure/fig5/AS:668320458084353@1536351422103/Coconut-shell-mound-as-waste-at-some-oil-mills.jpg',
    title: 'Coconut Shell',
    netweight: '490kg',
    availability: 'In Stock',
    price: '5,635',
    description: 'Discover the natural beauty and versatility of our premium coconut shells. Perfect for crafting, gardening, and home decor, these eco-friendly shells add a tropical touch to any project. Whether you’re creating unique art pieces, enhancing your garden, or adding rustic charm to your home, our coconut shells are the perfect choice. Embrace sustainability and creativity with every shell.',
    contact: '95632 48613',
    relatedProducts: [
      { id: 113, img: 'https://cdn.shopify.com/s/files/1/0071/1403/1186/files/image-asset_1024x1024.jpg?v=1710155452'},
      { id: 114, img: 'https://5.imimg.com/data5/ANDROID/Default/2024/6/428674726/PB/RU/BB/453789/product-jpeg-250x250.jpg' },
      { id: 115, img: 'https://img3.exportersindia.com/product_images/bc-small/2023/9/12034608/coconut-shell-1683395884-6883838.jpg' }
    ]
  },
  {
    id: 6,
    img: 'https://5.imimg.com/data5/ANDROID/Default/2024/6/428674726/PB/RU/BB/453789/product-jpeg-250x250.jpg',
    title: 'Coconut Shell',
    netweight: '340kg',
    availability: 'In Stock',
    price: '4,760',
    description: 'Discover the natural beauty and versatility of our premium coconut shells. Perfect for crafting, gardening, and home decor, these eco-friendly shells add a tropical touch to any project. Whether you’re creating unique art pieces, enhancing your garden, or adding rustic charm to your home, our coconut shells are the perfect choice. Embrace sustainability and creativity with every shell.',
    contact: '99452 36569',
    relatedProducts: [
      { id: 116, img: 'https://img3.exportersindia.com/product_images/bc-small/2023/9/12034608/coconut-shell-1683395884-6883838.jpg'},
      { id: 117, img: 'https://www.geewinexim.com/images/products/shell-2.jpg' },
      { id: 118, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByCgPtL2Vza8Nq6296pY7EPpggW_XAiP2juSbDGjhpXjNiqvuIUXo6NxpuioX_jGDgP4&usqp=CAU' }
    ]
  },
  {
    id: 7,
    img: 'https://img3.exportersindia.com/product_images/bc-small/2023/9/12034608/coconut-shell-1683395884-6883838.jpg',
    title: 'Coconut Shell',
    netweight: '260kg',
    availability: 'In Stock',
    price: '3,120',
    description: 'Discover the natural beauty and versatility of our premium coconut shells. Perfect for crafting, gardening, and home decor, these eco-friendly shells add a tropical touch to any project. Whether you’re creating unique art pieces, enhancing your garden, or adding rustic charm to your home, our coconut shells are the perfect choice. Embrace sustainability and creativity with every shell.',
    contact: '63804 85963',
    relatedProducts: [
      { id: 119, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByCgPtL2Vza8Nq6296pY7EPpggW_XAiP2juSbDGjhpXjNiqvuIUXo6NxpuioX_jGDgP4&usqp=CAU'},
      { id: 120, img: 'https://www.geewinexim.com/images/products/shell-2.jpg' },
      { id: 121, img: 'https://5.imimg.com/data5/ANDROID/Default/2024/6/428674726/PB/RU/BB/453789/product-jpeg-250x250.jpg' }
    ]
  },
  {
    id: 8,
    img: 'https://www.geewinexim.com/images/products/shell-2.jpg',
    title: 'Coconut Shell',
    netweight: '312kg',
    availability: 'In Stock',
    price: '4,056',
    description: 'Discover the natural beauty and versatility of our premium coconut shells. Perfect for crafting, gardening, and home decor, these eco-friendly shells add a tropical touch to any project. Whether you’re creating unique art pieces, enhancing your garden, or adding rustic charm to your home, our coconut shells are the perfect choice. Embrace sustainability and creativity with every shell.',
    contact: '93645 83683',
    relatedProducts: [
      { id: 122, img: 'https://cdn.shopify.com/s/files/1/0071/1403/1186/files/image-asset_1024x1024.jpg?v=1710155452'},
      { id: 123, img: 'https://www.researchgate.net/publication/315727599/figure/fig5/AS:668320458084353@1536351422103/Coconut-shell-mound-as-waste-at-some-oil-mills.jpg' },
      { id: 124, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByCgPtL2Vza8Nq6296pY7EPpggW_XAiP2juSbDGjhpXjNiqvuIUXo6NxpuioX_jGDgP4&usqp=CAU' }
    ]
  },

  {
    id: 9,
    img: 'https://praneesthaikitchen.com/wp-content/uploads/2055/02/img_0377.jpg',
    title: 'Banana Stem',
    netweight: '523kg',
    availability: 'In Stock',
    price: '15,690',
    description: 'Transform waste into wonder with our high-quality banana stems, perfect for crafting durable and eco-friendly banana fibre. Ideal for textiles, packaging, and more, our banana stems offer a sustainable solution for innovative creators. Embrace the future of green materials and elevate your projects with the natural strength and versatility of banana fibre.',
    contact: '99635 74586',
    relatedProducts: [
      { id: 125, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixu9IDUBBxUI1hTQ-1IEu8Up8bHHokpadO3Rmm56fqfhG6LrbNKeI3D-KgFO7RqcTDkQ&usqp=CAU'},
      { id: 126, img: 'https://i0.wp.com/thingscouplesdo.com/wp-content/uploads/2021/05/FB_IMG_1621186785031.jpg?fit=480%2C480&ssl=1' },
      { id: 127, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3lGih2dDQQi39AATOm3gNPs3HAQ1ohfDLMdoQO0c8J6Y5UCoQuDIvFuqiWSlNn2yxxc&usqp=CAU' }
    ]
  },
  {
    id: 10,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixu9IDUBBxUI1hTQ-1IEu8Up8bHHokpadO3Rmm56fqfhG6LrbNKeI3D-KgFO7RqcTDkQ&usqp=CAU',
    title: 'Banana Stem',
    netweight: '263kg',
    availability: 'In Stock',
    price: '9,205',
    description: 'Transform waste into wonder with our high-quality banana stems, perfect for crafting durable and eco-friendly banana fibre. Ideal for textiles, packaging, and more, our banana stems offer a sustainable solution for innovative creators. Embrace the future of green materials and elevate your projects with the natural strength and versatility of banana fibre.',
    contact: '85685 89547',
    relatedProducts: [
      { id: 128, img: 'https://praneesthaikitchen.com/wp-content/uploads/2055/02/img_0377.jpg'},
      { id: 129, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScWHi1yPDhped0u2Oo1yh2tVQ6cQMR4kNTod5HTrl699nm4myG7qX82l5tUyUIl0SiWo&usqp=CAU' },
      { id: 130, img: 'https://www.thestatesman.com/wp-content/uploads/2022/03/banana-stem.jpg' }
    ]
  },
  {
    id: 11,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3lGih2dDQQi39AATOm3gNPs3HAQ1ohfDLMdoQO0c8J6Y5UCoQuDIvFuqiWSlNn2yxxc&usqp=CAU',
    title: 'Banana Stem',
    netweight: '460kg',
    availability: 'In Stock',
    price: '14,720',
    description: 'Transform waste into wonder with our high-quality banana stems, perfect for crafting durable and eco-friendly banana fibre. Ideal for textiles, packaging, and more, our banana stems offer a sustainable solution for innovative creators. Embrace the future of green materials and elevate your projects with the natural strength and versatility of banana fibre.',
    contact: '69596 48596',
    relatedProducts: [
      { id: 131, img: 'https://i0.wp.com/thingscouplesdo.com/wp-content/uploads/2021/05/FB_IMG_1621186785031.jpg?fit=480%2C480&ssl=1'},
      { id: 132, img: 'https://praneesthaikitchen.com/wp-content/uploads/2055/02/img_0377.jpg' },
      { id: 133, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9plU3yX98XlkmbuE1S2lRgpE9qvQhpquIKVOY9ngCM9Iph9SpIKOtTEfB2G18CqDPJs&usqp=CAU' }
    ]
  },
  {
    id:12 ,
    img: 'https://i0.wp.com/thingscouplesdo.com/wp-content/uploads/2021/05/FB_IMG_1621186785031.jpg?fit=480%2C480&ssl=1',
    title: 'Banana Stem',
    netweight: '380kg',
    availability: 'In Stock',
    price: '12,540',
    description: 'Transform waste into wonder with our high-quality banana stems, perfect for crafting durable and eco-friendly banana fibre. Ideal for textiles, packaging, and more, our banana stems offer a sustainable solution for innovative creators. Embrace the future of green materials and elevate your projects with the natural strength and versatility of banana fibre.',
    contact: '86953 74586',
    relatedProducts: [
      { id: 134, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixu9IDUBBxUI1hTQ-1IEu8Up8bHHokpadO3Rmm56fqfhG6LrbNKeI3D-KgFO7RqcTDkQ&usqp=CAU'},
      { id: 135, img: 'https://www.thestatesman.com/wp-content/uploads/2022/03/banana-stem.jpg' },
      { id: 136, img: 'https://praneesthaikitchen.com/wp-content/uploads/2055/02/img_0377.jpg' }
    ]
  },
  {
    id:13 ,
    img: 'https://www.thestatesman.com/wp-content/uploads/2022/03/banana-stem.jpg',
    title: 'Banana Stem',
    netweight: '420kg',
    availability: 'In Stock',
    price: '15,960',
    description: 'Transform waste into wonder with our high-quality banana stems, perfect for crafting durable and eco-friendly banana fibre. Ideal for textiles, packaging, and more, our banana stems offer a sustainable solution for innovative creators. Embrace the future of green materials and elevate your projects with the natural strength and versatility of banana fibre.',
    contact: '65986 48569',
    relatedProducts: [
      { id: 137, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3lGih2dDQQi39AATOm3gNPs3HAQ1ohfDLMdoQO0c8J6Y5UCoQuDIvFuqiWSlNn2yxxc&usqp=CAU'},
      { id: 138, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixu9IDUBBxUI1hTQ-1IEu8Up8bHHokpadO3Rmm56fqfhG6LrbNKeI3D-KgFO7RqcTDkQ&usqp=CAU' },
      { id: 139, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScWHi1yPDhped0u2Oo1yh2tVQ6cQMR4kNTod5HTrl699nm4myG7qX82l5tUyUIl0SiWo&usqp=CAU' }
    ]
  },
  {
    id: 14,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScWHi1yPDhped0u2Oo1yh2tVQ6cQMR4kNTod5HTrl699nm4myG7qX82l5tUyUIl0SiWo&usqp=CAU',
    title: 'Banana Stem',
    netweight: '459kg',
    availability: 'In Stock',
    price: '15,606',
    description: 'Transform waste into wonder with our high-quality banana stems, perfect for crafting durable and eco-friendly banana fibre. Ideal for textiles, packaging, and more, our banana stems offer a sustainable solution for innovative creators. Embrace the future of green materials and elevate your projects with the natural strength and versatility of banana fibre.',
    contact: '98726 14693',
    relatedProducts: [
      { id: 140, img: 'https://unair.ac.id/wp-content/uploads/2019/07/batang-pisang_20160326_223835-1.jpg'},
      { id: 141, img: 'https://praneesthaikitchen.com/wp-content/uploads/2055/02/img_0377.jpg' },
      { id: 142, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3lGih2dDQQi39AATOm3gNPs3HAQ1ohfDLMdoQO0c8J6Y5UCoQuDIvFuqiWSlNn2yxxc&usqp=CAU' }
    ]
  },
  {
    id: 15,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9plU3yX98XlkmbuE1S2lRgpE9qvQhpquIKVOY9ngCM9Iph9SpIKOtTEfB2G18CqDPJs&usqp=CAU',
    title: 'Banana Stem',
    netweight: '420kg',
    availability: 'In Stock',
    price: '15,120',
    description: 'Transform waste into wonder with our high-quality banana stems, perfect for crafting durable and eco-friendly banana fibre. Ideal for textiles, packaging, and more, our banana stems offer a sustainable solution for innovative creators. Embrace the future of green materials and elevate your projects with the natural strength and versatility of banana fibre.',
    contact: '87696 14856',
    relatedProducts: [
      { id: 143, img: 'https://i0.wp.com/thingscouplesdo.com/wp-content/uploads/2021/05/FB_IMG_1621186785031.jpg?fit=480%2C480&ssl=1'},
      { id: 144, img: 'https://www.thestatesman.com/wp-content/uploads/2022/03/banana-stem.jpg' },
      { id: 145, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixu9IDUBBxUI1hTQ-1IEu8Up8bHHokpadO3Rmm56fqfhG6LrbNKeI3D-KgFO7RqcTDkQ&usqp=CAU' }
    ]
  },
  {
    id:16 ,
    img: 'https://unair.ac.id/wp-content/uploads/2019/07/batang-pisang_20160326_223835-1.jpg',
    title: 'Banana Stem',
    netweight: '480kg',
    availability: 'In Stock',
    price: '17,280',
    description: 'Transform waste into wonder with our high-quality banana stems, perfect for crafting durable and eco-friendly banana fibre. Ideal for textiles, packaging, and more, our banana stems offer a sustainable solution for innovative creators. Embrace the future of green materials and elevate your projects with the natural strength and versatility of banana fibre.',
    contact: '95685 14526',
    relatedProducts: [
      { id: 146, img: 'https://praneesthaikitchen.com/wp-content/uploads/2055/02/img_0377.jpg'},
      { id: 147, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3lGih2dDQQi39AATOm3gNPs3HAQ1ohfDLMdoQO0c8J6Y5UCoQuDIvFuqiWSlNn2yxxc&usqp=CAU' },
      { id: 148, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixu9IDUBBxUI1hTQ-1IEu8Up8bHHokpadO3Rmm56fqfhG6LrbNKeI3D-KgFO7RqcTDkQ&usqp=CAU' }
    ]
  },

  {
    id: 17,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUo39ue7NMAX0L3EcWDITu2h9T4lJgp-RNyQ&s',
    title: 'Sugarcane Bagasse',
    netweight: '560kg',
    availability: 'In Stock',
    price: '2,744',
    description: 'Discover the eco-friendly magic of sugarcane bagasse, the perfect raw material for crafting durable and sustainable banana fibre. Ideal for textiles, packaging, and more, our premium bagasse offers a green solution for innovative makers. Embrace the future of sustainable materials and elevate your projects with the natural strength and versatility of sugarcane bagasse.',
    contact: '96998 78599',
    relatedProducts: [
      { id: 149, img: 'https://5.imimg.com/data5/SELLER/Default/2020/10/RD/TT/QM/55062602/sugarcane-bagasse-500x500.jpg'},
      { id: 150, img: 'https://www.shutterstock.com/image-photo/bagasse-waste-sugar-cane-after-600nw-1930698344.jpg' },
      { id: 151, img: 'https://3.imimg.com/data3/VW/BU/MY-3439981/sugar-cane-bagasse-500x500.png' }
    ]
  },
  {
    id: 18,
    img: 'https://www.shutterstock.com/image-photo/bagasse-waste-sugar-cane-after-600nw-1930698344.jpg',
    title: 'Sugarcane Bagasse',
    netweight: '620kg',
    availability: 'In Stock',
    price: '2,914',
    description: 'Discover the eco-friendly magic of sugarcane bagasse, the perfect raw material for crafting durable and sustainable banana fibre. Ideal for textiles, packaging, and more, our premium bagasse offers a green solution for innovative makers. Embrace the future of sustainable materials and elevate your projects with the natural strength and versatility of sugarcane bagasse.',
    contact: '85988 85456',
    relatedProducts: [
      { id: 152, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sugarcane_bagasse.jpg/4000px-Sugarcane_bagasse.jpg'},
      { id: 153, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUo39ue7NMAX0L3EcWDITu2h9T4lJgp-RNyQ&s' },
      { id: 154, img: 'https://cdn.wikifarmer.com/wp-content/uploads/2023/07/sugarcane-waste-management-1024x668.jpg' }
    ]
  },
  {
    id: 19,
    img: 'https://5.imimg.com/data5/SELLER/Default/2020/10/RD/TT/QM/55062602/sugarcane-bagasse-500x500.jpg',
    title: 'Sugarcane Bagasse',
    netweight: '585kg',
    availability: 'In Stock',
    price: '2,515.5',
    description: 'Discover the eco-friendly magic of sugarcane bagasse, the perfect raw material for crafting durable and sustainable banana fibre. Ideal for textiles, packaging, and more, our premium bagasse offers a green solution for innovative makers. Embrace the future of sustainable materials and elevate your projects with the natural strength and versatility of sugarcane bagasse.',
    contact: '85947 78988',
    relatedProducts: [
      { id: 155, img: 'https://3.imimg.com/data3/VW/BU/MY-3439981/sugar-cane-bagasse-500x500.png'},
      { id: 156, img: 'https://www.paperpulping.com/uploads/allimg/bagasses.jpg' },
      { id: 157, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUo39ue7NMAX0L3EcWDITu2h9T4lJgp-RNyQ&s' }
    ]
  },
  {
    id:20 ,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sugarcane_bagasse.jpg/4000px-Sugarcane_bagasse.jpg',
    title: 'Sugarcane Bagasse',
    netweight: '610kg',
    availability: 'In Stock',
    price: '2,684',
    description: 'Discover the eco-friendly magic of sugarcane bagasse, the perfect raw material for crafting durable and sustainable banana fibre. Ideal for textiles, packaging, and more, our premium bagasse offers a green solution for innovative makers. Embrace the future of sustainable materials and elevate your projects with the natural strength and versatility of sugarcane bagasse.',
    contact: '85898 48588',
    relatedProducts: [
      { id: 158, img: 'https://www.shutterstock.com/image-photo/bagasse-waste-sugar-cane-after-600nw-1930698344.jpg'},
      { id: 159, img: 'https://cdn.wikifarmer.com/wp-content/uploads/2023/07/sugarcane-waste-management-1024x668.jpg' },
      { id: 160, img: 'https://3.imimg.com/data3/VW/BU/MY-3439981/sugar-cane-bagasse-500x500.png' }
    ]
  },
  {
    id:21 ,
    img: 'https://3.imimg.com/data3/VW/BU/MY-3439981/sugar-cane-bagasse-500x500.png',
    title: 'Sugarcane Bagasse',
    netweight: '575kg',
    availability: 'In Stock',
    price: '2,499.5',
    description: 'Discover the eco-friendly magic of sugarcane bagasse, the perfect raw material for crafting durable and sustainable banana fibre. Ideal for textiles, packaging, and more, our premium bagasse offers a green solution for innovative makers. Embrace the future of sustainable materials and elevate your projects with the natural strength and versatility of sugarcane bagasse.',
    contact: '75986 75865',
    relatedProducts: [
      { id: 161, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUo39ue7NMAX0L3EcWDITu2h9T4lJgp-RNyQ&s'},
      { id: 162, img: 'https://www.paperpulping.com/uploads/allimg/bagasses.jpg' },
      { id: 163, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sugarcane_bagasse.jpg/4000px-Sugarcane_bagasse.jpg' }
    ]
  },
  {
    id: 22,
    img: 'https://cdn.wikifarmer.com/wp-content/uploads/2023/07/sugarcane-waste-management-1024x668.jpg',
    title: 'Sugarcane Bagasse',
    netweight: '630kg',
    availability: 'In Stock',
    price: '2,835',
    description: 'Discover the eco-friendly magic of sugarcane bagasse, the perfect raw material for crafting durable and sustainable banana fibre. Ideal for textiles, packaging, and more, our premium bagasse offers a green solution for innovative makers. Embrace the future of sustainable materials and elevate your projects with the natural strength and versatility of sugarcane bagasse.',
    contact: '75623 14526',
    relatedProducts: [
      { id: 164, img: 'https://www.shutterstock.com/image-photo/bagasse-waste-sugar-cane-after-600nw-1930698344.jpg'},
      { id: 165, img: 'https://images.squarespace-cdn.com/content/v1/5fd942c7730cb7231c94ad8c/1624921287171-490Q6JIES27970B9KW1P/240_F_158319909_9EioBWY5IAkquQAbTk2VBT0x57jAHPmH.jpg?format=750w' },
      { id: 166, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUo39ue7NMAX0L3EcWDITu2h9T4lJgp-RNyQ&s' }
    ]
  },
  {
    id: 23,
    img: 'https://www.paperpulping.com/uploads/allimg/bagasses.jpg',
    title: 'Sugarcane Bagasse',
    netweight: '645kg',
    availability: 'In Stock',
    price: '2,941.2',
    description: 'Discover the eco-friendly magic of sugarcane bagasse, the perfect raw material for crafting durable and sustainable banana fibre. Ideal for textiles, packaging, and more, our premium bagasse offers a green solution for innovative makers. Embrace the future of sustainable materials and elevate your projects with the natural strength and versatility of sugarcane bagasse.',
    contact: '85632 41365',
    relatedProducts: [
      { id: 167, img: 'https://5.imimg.com/data5/SELLER/Default/2020/10/RD/TT/QM/55062602/sugarcane-bagasse-500x500.jpg'},
      { id: 168, img: 'https://images.squarespace-cdn.com/content/v1/5fd942c7730cb7231c94ad8c/1624921287171-490Q6JIES27970B9KW1P/240_F_158319909_9EioBWY5IAkquQAbTk2VBT0x57jAHPmH.jpg?format=750w' },
      { id: 169, img: 'https://www.shutterstock.com/image-photo/bagasse-waste-sugar-cane-after-600nw-1930698344.jpg' }
    ]
  },
  {
    id:24 ,
    img: 'https://images.squarespace-cdn.com/content/v1/5fd942c7730cb7231c94ad8c/1624921287171-490Q6JIES27970B9KW1P/240_F_158319909_9EioBWY5IAkquQAbTk2VBT0x57jAHPmH.jpg?format=750w',
    title: 'Sugarcane Bagasse',
    netweight: '640kg',
    availability: 'In Stock',
    price: '3,276.8',
    description: 'Discover the eco-friendly magic of sugarcane bagasse, the perfect raw material for crafting durable and sustainable banana fibre. Ideal for textiles, packaging, and more, our premium bagasse offers a green solution for innovative makers. Embrace the future of sustainable materials and elevate your projects with the natural strength and versatility of sugarcane bagasse.',
    contact: '96325 74568',
    relatedProducts: [
      { id: 170, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUo39ue7NMAX0L3EcWDITu2h9T4lJgp-RNyQ&s'},
      { id: 171, img: 'https://3.imimg.com/data3/VW/BU/MY-3439981/sugar-cane-bagasse-500x500.png' },
      { id: 172, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sugarcane_bagasse.jpg/4000px-Sugarcane_bagasse.jpg' }
    ]
  },

  {
    id: 25,
    img: 'https://dakshfarm.com/wp-content/uploads/2013/10/baled-straw-1.jpg',
    title: 'Rice Straw',
    netweight: '850kg',
    availability: 'In Stock',
    price: '10,200',
    description: 'Discover the endless possibilities with our premium rice straw, a sustainable and eco-friendly material perfect for crafting, gardening, and more. Whether you’re creating unique art pieces, enhancing your garden, or exploring innovative uses, our rice straw offers the perfect blend of strength and flexibility. Embrace sustainability and creativity with every bundle. .',
    contact: '95748 58484',
    relatedProducts: [
      { id: 173, img: 'https://5.imimg.com/data5/PP/VP/MY-9683712/utb8ucpqxkvjxkjksajhq6a7afxat-500x500.jpg'},
      { id: 174, img: 'https://5.imimg.com/data5/SELLER/Default/2023/6/315782453/IL/ZZ/XQ/11591499/paddy-straw-bales.jpeg' },
      { id: 175, img: 'https://5.imimg.com/data5/SELLER/Default/2024/2/390352947/JP/WE/DC/20619103/500kg-paddy-straw-bale.jpg' }
    ]
  },
  {
    id: 26,
    img: 'https://5.imimg.com/data5/PP/VP/MY-9683712/utb8ucpqxkvjxkjksajhq6a7afxat-500x500.jpg',
    title: 'Rice Straw',
    netweight: '890kg',
    availability: 'In Stock',
    price: '10,413',
    description: 'Discover the endless possibilities with our premium rice straw, a sustainable and eco-friendly material perfect for crafting, gardening, and more. Whether you’re creating unique art pieces, enhancing your garden, or exploring innovative uses, our rice straw offers the perfect blend of strength and flexibility. Embrace sustainability and creativity with every bundle. .',
    contact: '78589 20155',
    relatedProducts: [
      { id: 176, img: 'https://4.imimg.com/data4/LT/XO/MY-5308089/paddy-straw.jpg'},
      { id: 177, img: 'https://dakshfarm.com/wp-content/uploads/2013/10/baled-straw-1.jpg' },
      { id: 178, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvxW3qZD8cngjrqTJCaX1eYc0URUtzV96vK-IyRp3sRPxk2EKZEd-Ul8GdgowYXx1D90&usqp=CAU' }
    ]
  },
  {
    id: 27,
    img: 'https://5.imimg.com/data5/SELLER/Default/2023/6/315782453/IL/ZZ/XQ/11591499/paddy-straw-bales.jpeg',
    title: 'Rice Straw',
    netweight: '840kg',
    availability: 'In Stock',
    price: '10,248',
    description: 'Discover the endless possibilities with our premium rice straw, a sustainable and eco-friendly material perfect for crafting, gardening, and more. Whether you’re creating unique art pieces, enhancing your garden, or exploring innovative uses, our rice straw offers the perfect blend of strength and flexibility. Embrace sustainability and creativity with every bundle. .',
    contact: '74121 14541',
    relatedProducts: [
      { id: 179, img: 'https://sc04.alicdn.com/kf/U6537b4e89eaf47c9b88c21c1ebcc0f0fY.jpg'},
      { id: 180, img: 'https://4.imimg.com/data4/LT/XO/MY-5308089/paddy-straw.jpg' },
      { id: 181, img: 'https://dakshfarm.com/wp-content/uploads/2013/10/baled-straw-1.jpg' }
    ]
  },
  {
    id: 28,
    img: 'https://4.imimg.com/data4/LT/XO/MY-5308089/paddy-straw.jpg',
    title: 'Rice Straw',
    netweight: '780kg',
    availability: 'In Stock',
    price: '9,282',
    description: 'Discover the endless possibilities with our premium rice straw, a sustainable and eco-friendly material perfect for crafting, gardening, and more. Whether you’re creating unique art pieces, enhancing your garden, or exploring innovative uses, our rice straw offers the perfect blend of strength and flexibility. Embrace sustainability and creativity with every bundle. .',
    contact: '89898 58582',
    relatedProducts: [
      { id: 182, img: 'https://5.imimg.com/data5/PP/VP/MY-9683712/utb8ucpqxkvjxkjksajhq6a7afxat-500x500.jpg'},
      { id: 183, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvxW3qZD8cngjrqTJCaX1eYc0URUtzV96vK-IyRp3sRPxk2EKZEd-Ul8GdgowYXx1D90&usqp=CAU' },
      { id: 184, img: 'https://5.imimg.com/data5/SELLER/Default/2024/2/390352947/JP/WE/DC/20619103/500kg-paddy-straw-bale.jpg' }
    ]
  },
  {
    id: 29,
    img: 'https://5.imimg.com/data5/SELLER/Default/2024/2/390352947/JP/WE/DC/20619103/500kg-paddy-straw-bale.jpg',
    title: 'Rice Straw',
    netweight: '950kg',
    availability: 'In Stock',
    price: '13,300',
    description: 'Discover the endless possibilities with our premium rice straw, a sustainable and eco-friendly material perfect for crafting, gardening, and more. Whether you’re creating unique art pieces, enhancing your garden, or exploring innovative uses, our rice straw offers the perfect blend of strength and flexibility. Embrace sustainability and creativity with every bundle. .',
    contact: '96523 63631',
    relatedProducts: [
      { id: 185, img: 'https://dakshfarm.com/wp-content/uploads/2013/10/baled-straw-1.jpg'},
      { id: 186, img: 'https://5.imimg.com/data5/SELLER/Default/2023/6/315782453/IL/ZZ/XQ/11591499/paddy-straw-bales.jpeg' },
      { id: 187, img: 'https://5.imimg.com/data5/ANDROID/Default/2021/3/KS/QH/YW/66930019/product-jpeg.jpg' }
    ]
  },
  {
    id: 30,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvxW3qZD8cngjrqTJCaX1eYc0URUtzV96vK-IyRp3sRPxk2EKZEd-Ul8GdgowYXx1D90&usqp=CAU',
    title: 'Rice Straw',
    netweight: '900kg',
    availability: 'In Stock',
    price: '12,600',
    description: 'Discover the endless possibilities with our premium rice straw, a sustainable and eco-friendly material perfect for crafting, gardening, and more. Whether you’re creating unique art pieces, enhancing your garden, or exploring innovative uses, our rice straw offers the perfect blend of strength and flexibility. Embrace sustainability and creativity with every bundle. .',
    contact: '94842 74856',
    relatedProducts: [
      { id: 188, img: 'https://sc04.alicdn.com/kf/U6537b4e89eaf47c9b88c21c1ebcc0f0fY.jpg'},
      { id: 189, img: 'https://5.imimg.com/data5/ANDROID/Default/2021/3/KS/QH/YW/66930019/product-jpeg.jpg' },
      { id: 190, img: 'https://dakshfarm.com/wp-content/uploads/2013/10/baled-straw-1.jpg' }
    ]
  },
  {
    id: 31,
    img: 'https://sc04.alicdn.com/kf/U6537b4e89eaf47c9b88c21c1ebcc0f0fY.jpg',
    title: 'Rice Straw',
    netweight: '860kg',
    availability: 'In Stock',
    price: '11,180',
    description: 'Discover the endless possibilities with our premium rice straw, a sustainable and eco-friendly material perfect for crafting, gardening, and more. Whether you’re creating unique art pieces, enhancing your garden, or exploring innovative uses, our rice straw offers the perfect blend of strength and flexibility. Embrace sustainability and creativity with every bundle. .',
    contact: '72301 01225',
    relatedProducts: [
      { id: 191, img: 'https://5.imimg.com/data5/SELLER/Default/2024/2/390352947/JP/WE/DC/20619103/500kg-paddy-straw-bale.jpg'},
      { id: 192, img: 'https://4.imimg.com/data4/LT/XO/MY-5308089/paddy-straw.jpg' },
      { id: 193, img: 'https://5.imimg.com/data5/PP/VP/MY-9683712/utb8ucpqxkvjxkjksajhq6a7afxat-500x500.jpg' }
    ]
  },
  {
    id:32 ,
    img: 'https://5.imimg.com/data5/ANDROID/Default/2021/3/KS/QH/YW/66930019/product-jpeg.jpg',
    title: 'Rice Straw',
    netweight: '830kg',
    availability: 'In Stock',
    price: '11,039',
    description: 'Discover the endless possibilities with our premium rice straw, a sustainable and eco-friendly material perfect for crafting, gardening, and more. Whether you’re creating unique art pieces, enhancing your garden, or exploring innovative uses, our rice straw offers the perfect blend of strength and flexibility. Embrace sustainability and creativity with every bundle. .',
    contact: '96201 01736',
    relatedProducts: [
      { id: 194, img: 'https://5.imimg.com/data5/SELLER/Default/2023/6/315782453/IL/ZZ/XQ/11591499/paddy-straw-bales.jpeg'},
      { id: 195, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvxW3qZD8cngjrqTJCaX1eYc0URUtzV96vK-IyRp3sRPxk2EKZEd-Ul8GdgowYXx1D90&usqp=CAU' },
      { id: 196, img: 'https://dakshfarm.com/wp-content/uploads/2013/10/baled-straw-1.jpg' }
    ]
  },


  {
    id:33 ,
    img: 'https://media.istockphoto.com/id/523390634/photo/pile-coconut-shell-for-use-as-fuel.jpg?s=612x612&w=0&k=20&c=eb3LrCUPFp48tXN4jRfJnORTz7YjS_nWUumCw7g6tqM=',
    title: 'Coconut Husk',
    netweight: '240kg',
    availability: 'In Stock',
    price: '33,600',
    description: 'Discover the incredible versatility of our premium coconut husk, perfect for gardening, crafting, and sustainable living. Whether you’re enhancing your garden soil, creating eco-friendly products, or exploring innovative uses, our coconut husk offers unmatched quality and sustainability. Embrace the natural strength and endless possibilities of coconut husk',
    contact: '96358 68532',
    relatedProducts: [
      { id: 197, img: 'https://media.istockphoto.com/id/1394774603/photo/coconut-husks-of-peeled-coconut-left-as-fertilizer.jpg?s=612x612&w=0&k=20&c=aadduF0mC4VqxvBcD0SoX_EttAO4gsbiuwlWCbO70sU='},
      { id: 198, img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?resize=1300%2C866&ssl=1' },
      { id: 199, img: 'https://cdn.shopify.com/s/files/1/0607/4220/5649/files/coconut_husk_detail_1024x1024.png?v=1678130480' }
    ]
  },
  {
    id:34 ,
    img: 'https://media.istockphoto.com/id/1394774603/photo/coconut-husks-of-peeled-coconut-left-as-fertilizer.jpg?s=612x612&w=0&k=20&c=aadduF0mC4VqxvBcD0SoX_EttAO4gsbiuwlWCbO70sU=',
    title: 'Coconut Husk',
    netweight: '210kg',
    availability: 'In Stock',
    price: '28,980',
    description: 'Discover the incredible versatility of our premium coconut husk, perfect for gardening, crafting, and sustainable living. Whether you’re enhancing your garden soil, creating eco-friendly products, or exploring innovative uses, our coconut husk offers unmatched quality and sustainability. Embrace the natural strength and endless possibilities of coconut husk',
    contact: '84236 45623',
    relatedProducts: [
      { id: 201, img: 'https://media.istockphoto.com/id/523390634/photo/pile-coconut-shell-for-use-as-fuel.jpg?s=612x612&w=0&k=20&c=eb3LrCUPFp48tXN4jRfJnORTz7YjS_nWUumCw7g6tqM='},
      { id: 202, img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?resize=1300%2C866&ssl=1' },
      { id: 203, img: 'https://cdn.shopify.com/s/files/1/0607/4220/5649/files/coconut_husk_detail_1024x1024.png?v=1678130480' }
    ]
  },
  {
    id: 35,
    img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?resize=1300%2C866&ssl=1',
    title: 'Coconut Husk',
    netweight: '260kg',
    availability: 'In Stock',
    price: '36,920',
    description: 'Discover the incredible versatility of our premium coconut husk, perfect for gardening, crafting, and sustainable living. Whether you’re enhancing your garden soil, creating eco-friendly products, or exploring innovative uses, our coconut husk offers unmatched quality and sustainability. Embrace the natural strength and endless possibilities of coconut husk',
    contact: '81030 26031',
    relatedProducts: [
      { id: 204, img: 'https://t3.ftcdn.net/jpg/02/66/45/92/360_F_266459213_shM1V4Iagy13N9sfFlHhUNQhND6nXZXF.jpg'},
      { id: 205, img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?fit=1200%2C799&ssl=1&w=640' },
      { id: 206, img: 'https://media.istockphoto.com/id/1394774603/photo/coconut-husks-of-peeled-coconut-left-as-fertilizer.jpg?s=612x612&w=0&k=20&c=aadduF0mC4VqxvBcD0SoX_EttAO4gsbiuwlWCbO70sU=' }
    ]
  },
  {
    id:36 ,
    img: 'https://cdn.shopify.com/s/files/1/0607/4220/5649/files/coconut_husk_detail_1024x1024.png?v=1678130480',
    title: 'Coconut Husk',
    netweight: '235kg',
    availability: 'In Stock',
    price: '32,331',
    description: 'Discover the incredible versatility of our premium coconut husk, perfect for gardening, crafting, and sustainable living. Whether you’re enhancing your garden soil, creating eco-friendly products, or exploring innovative uses, our coconut husk offers unmatched quality and sustainability. Embrace the natural strength and endless possibilities of coconut husk',
    contact: '84036 63948',
    relatedProducts: [
      { id: 207, img: 'https://media.istockphoto.com/id/523390634/photo/pile-coconut-shell-for-use-as-fuel.jpg?s=612x612&w=0&k=20&c=eb3LrCUPFp48tXN4jRfJnORTz7YjS_nWUumCw7g6tqM='},
      { id: 208, img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?resize=1300%2C866&ssl=1' },
      { id: 209, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-jYLe5w6XK116DGCINOFIX6Zdg9QuO-n8KCUI4wwqpq81aPVe3_YkeydiKajXBROkRU&usqp=CAU' }
    ]
  },
  {
    id: 37,
    img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?resize=1300%2C866&ssl=1',
    title: 'Coconut Husk',
    netweight: '196kg',
    availability: 'In Stock',
    price: '28,861',
    description: 'Discover the incredible versatility of our premium coconut husk, perfect for gardening, crafting, and sustainable living. Whether you’re enhancing your garden soil, creating eco-friendly products, or exploring innovative uses, our coconut husk offers unmatched quality and sustainability. Embrace the natural strength and endless possibilities of coconut husk',
    contact: '98565 71855',
    relatedProducts: [
      { id: 210, img: 'https://t3.ftcdn.net/jpg/02/66/45/92/360_F_266459213_shM1V4Iagy13N9sfFlHhUNQhND6nXZXF.jpg'},
      { id: 211, img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?resize=1300%2C866&ssl=1' },
      { id: 212, img: 'https://media.istockphoto.com/id/523390634/photo/pile-coconut-shell-for-use-as-fuel.jpg?s=612x612&w=0&k=20&c=eb3LrCUPFp48tXN4jRfJnORTz7YjS_nWUumCw7g6tqM=' }
    ]
  },
  {
    id: 38,
    img: 'https://t3.ftcdn.net/jpg/02/66/45/92/360_F_266459213_shM1V4Iagy13N9sfFlHhUNQhND6nXZXF.jpg',
    title: 'Coconut Husk',
    netweight: '220kg',
    availability: 'In Stock',
    price: '30,747',
    description: 'Discover the incredible versatility of our premium coconut husk, perfect for gardening, crafting, and sustainable living. Whether you’re enhancing your garden soil, creating eco-friendly products, or exploring innovative uses, our coconut husk offers unmatched quality and sustainability. Embrace the natural strength and endless possibilities of coconut husk',
    contact: '96554 75856',
    relatedProducts: [
      { id: 213, img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?fit=1200%2C799&ssl=1&w=640'},
      { id: 214, img: 'https://media.istockphoto.com/id/1394774603/photo/coconut-husks-of-peeled-coconut-left-as-fertilizer.jpg?s=612x612&w=0&k=20&c=aadduF0mC4VqxvBcD0SoX_EttAO4gsbiuwlWCbO70sU=' },
      { id: 215, img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?resize=1300%2C866&ssl=1' }
    ]
  },
  {
    id:39 ,
    img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?fit=1200%2C799&ssl=1&w=640',
    title: 'Coconut Husk',
    netweight: '280kg',
    availability: 'In Stock',
    price: '38,114',
    description: 'Discover the incredible versatility of our premium coconut husk, perfect for gardening, crafting, and sustainable living. Whether you’re enhancing your garden soil, creating eco-friendly products, or exploring innovative uses, our coconut husk offers unmatched quality and sustainability. Embrace the natural strength and endless possibilities of coconut husk',
    contact: '86548 94874',
    relatedProducts: [
      { id: 216, img: 'https://media.istockphoto.com/id/523390634/photo/pile-coconut-shell-for-use-as-fuel.jpg?s=612x612&w=0&k=20&c=eb3LrCUPFp48tXN4jRfJnORTz7YjS_nWUumCw7g6tqM='},
      { id: 217, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-jYLe5w6XK116DGCINOFIX6Zdg9QuO-n8KCUI4wwqpq81aPVe3_YkeydiKajXBROkRU&usqp=CAU' },
      { id: 218, img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?resize=1300%2C866&ssl=1' }
    ]
  },
  {
    id: 40,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-jYLe5w6XK116DGCINOFIX6Zdg9QuO-n8KCUI4wwqpq81aPVe3_YkeydiKajXBROkRU&usqp=CAU',
    title: 'Coconut Husk',
    netweight: '250kg',
    availability: 'In Stock',
    price: '34,825',
    description: 'Discover the incredible versatility of our premium coconut husk, perfect for gardening, crafting, and sustainable living. Whether you’re enhancing your garden soil, creating eco-friendly products, or exploring innovative uses, our coconut husk offers unmatched quality and sustainability. Embrace the natural strength and endless possibilities of coconut husk',
    contact: '96215 02302',
    relatedProducts: [
      { id: 219, img: 'https://cdn.shopify.com/s/files/1/0607/4220/5649/files/coconut_husk_detail_1024x1024.png?v=1678130480'},
      { id: 220, img: 'https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/10/coconut-husks.jpg?resize=1300%2C866&ssl=1' },
      { id: 221, img: 'https://media.istockphoto.com/id/523390634/photo/pile-coconut-shell-for-use-as-fuel.jpg?s=612x612&w=0&k=20&c=eb3LrCUPFp48tXN4jRfJnORTz7YjS_nWUumCw7g6tqM=' }
    ]
  },
  // Add more products as needed
];

export const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [isCartOpen, setCartOpen] = useState(false); // State to manage cart modal
  const { state } = useCart();

  useEffect(() => {
    const fetchProductData = () => {
      const currentProduct = productData.find(p => p.id === parseInt(productId, 10));
      setProduct(currentProduct);
      if (currentProduct) {
        setMainImage(currentProduct.img); // Set the initial main image
      }
    };

    fetchProductData();
  }, [productId]);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Buyernavbar />
      <div className="product-page">
        <div className="product-content">
          <div className="product-image-carousel">
            <ProductImage img={mainImage} />
            <RelatedProductsCarousel 
              relatedProducts={product.relatedProducts} 
              onProductClick={setMainImage} // Pass the handler here
            />
          </div>
          <ProductDetails product={product} />
        </div>
        <div className="cart-icon-container">
          <CartIcon onClick={toggleCart} />
        </div>
        <OtherProducts /> {/* No need to pass products here */}
      </div>
      <BuyerFooter />
      <CartModal isOpen={isCartOpen} onClose={toggleCart} />
    </div>
  );
};

const CartIcon = ({ onClick }) => {
  const { state } = useCart();

  return (
    <div className="cart-icon" onClick={onClick}>
      <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#26620e",}} />
      {state.cart.length > 0 && (
        <span className="cart-count">{state.cart.length}</span>
      )}
    </div>
  );
};

const ProductImage = ({ img }) => {
  return (
    <div className="product-image">
      <img src={img} alt="Product" />
    </div>
  );
};

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        img: product.img, // Add image URL to the payload
        name: product.title,
        price: parseFloat(product.price.replace('₹', '')), // Remove currency symbol and convert to number
        quantity
      }
    });
  };

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <br></br>
      <p>Net Weight: {product.netweight}</p>
      <p>Availability: {product.availability}</p>
      <p className="price">
      ₹{product.price} 
      </p>
      <p className="description">{product.description}</p>
      <p className='description'><FontAwesomeIcon icon={faPhone} style={{color: "#26620e",}} /> +91 {product.contact}</p>
      <div>
        <button className="add-to-cart" onClick={addToCart}><FontAwesomeIcon icon={faCartShopping} style={{color: "white",}} /> Add To Cart</button>
        <button className='video-chat' ><FontAwesomeIcon icon={faVideo} style={{color: "white",}} /> VideoChat</button>
      </div>
    </div>
  );
};


const RelatedProductsCarousel = ({ relatedProducts, onProductClick }) => {
  return (
    <div className="related-products-carousel">
      <Slider {...sliderSettings}>
        {relatedProducts.map(product => (
          <div 
            key={product.id}
            onClick={() => onProductClick(product.img)} // Handle click event
            style={{ cursor: 'pointer' }}
          >
            <img src={product.img} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const sliderSettings = {
  dots: true, // Enable dots
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  customPaging: i => (
    <button type="button">
      <span className="dot"></span>
    </button>
  ),
  appendDots: dots => (
    <div style={{ bottom: '10px' }}>
      <ul>{dots}</ul>
    </div>
  ),
};

const OtherProducts = () => {
  const navigate = useNavigate();

  const handleViewProductClick = () => {
    navigate('/buyerCombine'); // Navigate to the BuyerCombine page without product ID
  };

  // Hardcoded image URLs and product IDs
  const otherProducts = [
    { id: 1, img: 'https://praneesthaikitchen.com/wp-content/uploads/2055/02/img_0377.jpg' },
    { id: 2, img: 'https://www.paperpulping.com/uploads/allimg/bagasses.jpg' },
    { id: 3, img: 'https://sc04.alicdn.com/kf/U6537b4e89eaf47c9b88c21c1ebcc0f0fY.jpg'},
    { id: 4, img: 'https://t3.ftcdn.net/jpg/02/66/45/92/360_F_266459213_shM1V4Iagy13N9sfFlHhUNQhND6nXZXF.jpg'}
  ];

  return (
    <div className="other-products">
      <br></br>
      <h2 className='other-p'>OTHER PRODUCTS</h2>
      <br></br>
      <div className="other-products-grid">
        {otherProducts.map(product => (
          <div key={product.id} className="other-product-card">
            <img src={product.img} alt={'Product ${product.id}'} />
            <div className="hover-overlay">
              <button className="view-product" onClick={handleViewProductClick}>View Product</button>
            </div>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  );
};

export default ProductPage;
