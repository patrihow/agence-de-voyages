   import React from 'react';

   const Header = () => {
       return (
           <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
               <h1 className="text-2xl">Agence de Voyages</h1>
               <nav>
                   <ul className="flex space-x-4">
                       <li><a href="#" className="hover:underline">Accueil</a></li>
                       <li><a href="#" className="hover:underline">Forfaits</a></li>
                       <li><a href="#" className="hover:underline">À propos</a></li>
                   </ul>
               </nav>
           </header>
       );
   };

   export default Header;
   