import React from 'react';
import Banner from '../Banner/Banner';
import BrandsName from '../BrandsName/BrandsName';
import Service from '../Service/Service';
import Connected from '../Connected/Connected';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <BrandsName></BrandsName>
          <Service></Service>
          <Connected></Connected>
        </div>
    );
};

export default Home;