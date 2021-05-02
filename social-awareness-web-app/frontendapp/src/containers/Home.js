import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/campaign6.jpg';
import image2 from '../assets/campaign7.jpg';
import image3 from '../assets/immigrationstress.jpeg';

import Footer from './footer';

const home = () => (
    <div >
        <section className='showcase'>
            <div className='showcase-overlay'>
                <h1>Social Awareness: Think of Others</h1>
                <p>
                Social Awareness: The ability to take the perspective of and 
                empathize with others, including those from diverse backgrounds and cultures.
                </p>
            </div>
        </section>
        <section className='destinations'>
            <h3>More than 100 campaigns to JOIN</h3>
            <div className='grid'>
                <div>
                <img src={image1} alt='destination-1' />
                <h3>Civil Rights and Racial Discrimination</h3>
                <p>
                Civil rights, or the rights of citizens in a country to have equal treatment socially and politically, 
                is another one of the most significant social issues in America and around the world. 

                </p>
                </div>

                <div>
                <img src={image2} alt='destination-2' />
                <h3>Global Warming</h3>
                <p>
                A warmer, changing climate is a threat to the entire world. Climate change affects the entire world population, 
                and the Union of Concerned Scientists calls this social issue "one of the most devastating problems humanity has ever faced.
                </p>
                </div>

                <div>
                    <img src={image3} alt='destination-3' />
                    <h3>Immigration Stresses</h3>
                    <p>
                    People move from one country to another, and in itself, this isn't a social problem. However, immigration can place stress on government programs 
                    and social systems within a country, and it can be a divisive topic in a society. These immigration-related stresses affect many people.
                    </p>
                </div>  
            </div>
            <div text-align='center'>
                <p> Click the button below to know more about campaigns</p>
                <br/>
                <Link className= 'btn btn-primary btn-lg' to='/campaign'>Learn more....</Link>
            </div>
        </section>
        <Footer />
    </div>
);

export default home;
