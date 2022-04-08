import React from 'react';
import { getAuth } from 'firebase/auth';
import {NavLink } from 'react-router-dom';
import app from '../../Firebase/Firebase';
const auth = getAuth(app);
const Header = () => {
          const user = auth.currentUser;
          return (
                    <div>
                              <header>
                                        <h2 className='orange'>Blog Hero</h2>
                                        <nav>
                                                  <NavLink to={'/'}>Home</NavLink>
                                                 { !user?.uid && <NavLink to={'/signup'}>Create An Account</NavLink>}
                                                  {!user?.uid && <NavLink to={'/login'}>Log In</NavLink>}
                                                  <NavLink to={'/profile'}>Profile</NavLink>
                                        </nav>
                              </header>
                    </div>
          );
};

export default Header;