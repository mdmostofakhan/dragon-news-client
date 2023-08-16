import React, { useEffect, useState } from 'react';
import './LeftNav.css';
import { Link } from 'react-router-dom';
import image1 from '../../../assets/1.png'
import image2 from '../../../assets/2.png'
import image3 from '../../../assets/3.png'

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    },[])

    return (
        <div>
            <h4>All Categories</h4>
           <div className='ps-4'>
                {
                        categories.map(categories => <p
                            key={categories.id}
                        >
                            <Link to={`/category/${categories.id}`}
                            className='text-decoration-none text-black'>
                                {categories.name}</Link>
                        </p>)
                    }
           </div>
              <div>
                  <img src={image1} alt="" />
                  <p className='mt-2'>Bayern Slams Authorities
                     Over Flight Delay to Club World Cup</p>
              </div>
        </div>
    );
};

export default LeftNav;