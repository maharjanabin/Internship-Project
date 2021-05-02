import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const navbar = ({ isAuthenticated, logout }) => {
  const authLinks = (
    <Fragment>
        <nav className='navbar'>
            <ul>
            <Link className='links' to='/campaign'>
                Campaign
            </Link>
            <Link className='links' to='/advertisement'>
                Advertisement
            </Link>
            <Link className='links' to='/contact'>
                Contact Us
            </Link>
            <Link className='links' to='/dashboard'>
                Profile
            </Link>
            <Link className='links' onClick = {logout} to='/logout'>
                Log out
            </Link>
            </ul>
        </nav>
        
    </Fragment>
);

const guestLinks = (
    <Fragment>
        <nav className='navbar'>
            <ul>
            <Link className='links' to='/login'>
                Login
            </Link>
            <Link className='links' to='/register'>
                Sign Up
            </Link>
            </ul>
        </nav>
    </Fragment>
    );

    return (
        <header className='header'>
      <div>
        <Link className='links' to='/'>
          Social Awareness Web Application
        </Link>
      </div>

      <nav className='navbar'>
        <ul>
          {isAuthenticated ? authLinks : guestLinks }
        </ul>
      </nav>
    </header>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(navbar);
