import React from 'react';
import { SubHeading } from '../../components';
import{ images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chefs's words" />
      <h1 className="headtext__cormorant">What we beleive in</h1>
    
      <div className="app__chef-content">
        <div className="app__chef-content_qoute">
          <img src={images.quote} alt="Qoute" />
          <p className="p__opensans">CSS property that defines the order of overlapping HTML elements HTML elements..</p>
        </div>
        <p className="p__opensans">CSS property that defines the order of overlapping HTML elements. Elements with a higher index will be placed on top of elements with a lower index. </p>
      </div>
        <div className="app__chef-sign">
          <p>Kevi Luo</p>
          <p className="p__opensans">Chef and Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
    </div>
  </div>
);

export default Chef;
