import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Slider from "react-slick";
import Aos from 'aos';
import 'aos/dist/aos.css';
// Khởi tạo AOS trước khi render ứng dụng
Aos.init()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <script>
    AOS.init();
  </script>
  </React.StrictMode>
);


reportWebVitals();
