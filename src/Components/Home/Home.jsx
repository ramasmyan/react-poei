import React, {useEffect} from 'react';
import './Home.scss';

import Yeezy from '../../Assets/img/models/yeezy.glb';
import HomeFilters from '../HomeFilters/HomeFilters';
import NewShoes from '../NewShoes/NewShoes';

function Home(props) {


    return (
        <section className='Home'>
            <div>
                <h2 className="a-h2-title">Products</h2>
            </div>
            <HomeFilters/>
        </section>
    );
}

export default Home;