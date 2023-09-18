import React from 'react';
import {useTracker} from "meteor/react-meteor-data";
import Login from './Login.jsx';
import { useState } from 'react';
import Page1 from './Page1.jsx';
import { LinksCollection } from '../api/links.js';

export const  App =() =>{
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("isLoggedIn", isLoggedIn);
    const tasks = useTracker(() => LinksCollection.find({}).fetch());

    
      const handleLogin = () => {
        setIsLoggedIn(true);
      };
      const handleLogout = () => {
        setIsLoggedIn(false);
      };

      console.log("isLoggedIn",isLoggedIn)
      
      return (
       

        <div className="App">
          {isLoggedIn ? (
            <Page1 onLogout={handleLogout} />
            
          ) : (
            <Login onLogin={handleLogin} />
          )}
           
               
        </div>
      );
          };
   

       
        