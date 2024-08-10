import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'bootstrap/dst/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'antd/dist/reset.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Seller from './SellerModule/Seller';
import App from './App';
import SellerProfile from './SellerModule/SellerProfile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
      <App />
     {/* <SellerProfile/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
