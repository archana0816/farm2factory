import React from 'react';
import './Aboutus.css'; // Make sure to create a corresponding CSS file
import Buyernavbar from '../BuyerModule/Buyernavbar';
import BuyerFooter from '../BuyerModule/BuyerFooter';
import { useState } from 'react';

const Aboutus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    { question: 'What does Farm2Factory do?', answer: 'Farm2Factory is a website that connects farmers with industries to sell agricultural waste products. Farmers can list their by-products, such as crop residues, while industries can purchase these materials for manufacturing. This platform helps farmers earn extra income from waste and supports industries in sourcing sustainable, cost-effective raw materials, promoting a circular economy and reducing agricultural waste.' },
    { question: 'How do farmers and industry professionals benefit from using Farm2Factory?', answer: 'Farmers benefit from Farm2Factory by earning additional income from selling their agricultural waste products, which would otherwise be discarded. Industry professionals profit by sourcing sustainable, cost-effective raw materials for manufacturing, reducing production costs, and supporting eco-friendly practices. This mutually beneficial exchange promotes economic growth and sustainability.' },
    { question: "How does the delivery process work on Farm2Factory?", answer: 'The delivery process on Farm2Factory involves farmers sending their agricultural waste products directly to the purchasing industry without any intermediaries. This direct transaction ensures a faster, more efficient, and cost-effective delivery process, benefiting both parties by reducing handling time and expenses.' }
  ];
  
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <Buyernavbar />
      <div className="about-us">
        <header className="aboutus-header">
          <h1 className="aboutus-title">Farm2Factory</h1>
          <p className="aboutus-subtitle">Marketplace for farmers to sell agricultural waste products to Industries</p>
        </header>
        <br />
        <section className="history-container">
          <div className="history-left">
            <p>
              The concept of connecting farmers with industries for agricultural waste emerged with the rise of sustainable practices. It facilitates efficient waste management and resource utilization. This platform helps to reduce environmental impact and provide farmers with additional income sources by turning waste into valuable products.
            </p>
          </div>
          <div className="history-right">
            <p>
              The agricultural waste products are meticulously sourced, ensuring they meet industry standards for quality. These materials are carefully processed to retain their usability and effectiveness, providing a reliable and sustainable resource for various industrial applications.
            </p>
          </div>
        </section>
        <div className="aboutus-images">
          <img src="https://www.natureloc.com/image/cache/catalog/products/coconut-shell-22-600x600.jpg" alt="coconut shell" className="aboutus-image" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUiaxgXDdnlvDBw4B_Ad6GGqyh5i_Mp0MRA&s" alt="banana fibre" className="aboutus-image" />
          <img src="https://www.paperpulping.com/uploads/allimg/bagasses.jpg" alt="Sugarcane bagasse" className="aboutus-image" />
          <img src="https://dakshfarm.com/wp-content/uploads/2013/10/baled-straw-1.jpg" alt="Rice Straw" className="aboutus-image" />
        </div>
        <br></br>
        <h1 className='aboutus-header'>Our History</h1>
        <p className='new-history'>
        The website was launched to bridge the gap between farmers and industries by facilitating the exchange of agri-waste products. Initially designed as a basic marketplace, it quickly evolved into a comprehensive platform supporting sustainable practices. Over time, features were added to enhance collaboration, including tools for communication and resource management. The platform has grown to include logistics coordination and educational resources, aiming to optimize the use of agri-waste and promote innovative solutions. Its mission remains focused on reducing environmental impact and supporting economic growth within the agricultural and industrial sectors.
        </p>

        <br></br><br></br>
        <h1 className='aboutus-header'>Our Vision</h1>
        <br></br>
        <div className="aboutus-card-container">
      <div className="aboutus-card">
        <div className="aboutus-card-image-container">
          <img
            src="https://img.freepik.com/free-photo/sunny-meadow-landscape_1112-134.jpg"
            alt="Image 1"
            className="aboutus-card-image"
          />
          <div className="aboutus-card-overlay">
            <h3 className="aboutus-card-title">Sustainable Marketplace</h3>
            <p className="aboutus-card-description">Connect farmers and industries to trade agri-waste products, promoting eco-friendly practices and reducing waste
            </p>
          </div>
        </div>
      </div>
      <div className="aboutus-card">
        <div className="aboutus-card-image-container">
          <img
            src="https://www.shutterstock.com/image-photo/carrot-field-chinese-woman-caucasian-600nw-2345239815.jpg"
            alt="Image 2"
            className="aboutus-card-image"
          />
          <div className="aboutus-card-overlay">
            <h3 className="aboutus-card-title">Collaboration Hub</h3>
            <p className="aboutus-card-description">Innovative partnerships between farmers and industries for creative uses of agri-waste products</p>
          </div>
        </div>
      </div>
      <div className="aboutus-card">
        <div className="aboutus-card-image-container">
          <img
            src="https://www.asiapathways-adbi.org/wp-content/uploads/2023/03/water-blog-cover.png"
            alt="Image 3"
            className="aboutus-card-image"
          />
          <div className="aboutus-card-overlay">
            <h3 className="aboutus-card-title">Resource Management</h3>
            <p className="aboutus-card-description">Optimize agri-waste handling through efficient logistics, economic and environmental benefits.</p>
          </div>
        </div>
      </div>
    </div>
      </div>
      <br></br><br></br>
      <h2 className='accordian-style'>Answer to Your Questions</h2>
      <br></br>
      <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className={`accordion-item ${index === activeIndex ? 'accordion-active' : ''}`}>
          <div className="accordion-title" onClick={() => handleClick(index)}>
            <span>{item.question}</span>
            <span>{index === activeIndex ? '-' : '+'}</span>
          </div>
          {index === activeIndex && <div className="accordion-content">{item.answer}</div>}
        </div>
      ))}
    </div>
        <br></br><br></br>
      <BuyerFooter />
    </div>
  );
};

export default Aboutus;
