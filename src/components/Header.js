import React from 'react';
   import Button from './Button'; 
   const Header = ({ title, toggleForm, showAdd }) => {
       return (
           <header className="flex justify-between items-center mb-8">
               <h1 className="text-2xl">{title}</h1>
               <Button 
                   color={showAdd ? 'btn-red' : 'btn-green'} 
                   text={showAdd ? 'Close' : 'Add'} 
                   onClick={toggleForm} 
               />
           </header>
       );
   };
   export default Header;