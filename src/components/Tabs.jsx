import React from 'react'
import { useState } from 'react';
import SearchForm from './SearchForm';

const Tabs = () => {
  const [activeTab, setsActiveTab] = useState(1);

  const handleActiveTab = (tab) =>{
    setsActiveTab(tab)
    console.log(tab)
  }

  return (
    <div className="c-tabs">

      <div className="c-tabs__content">
       
        {/* TAB GROUP */}
        <div className="c-tabs__tab-group">
          <button htmlFor="radio1" 
            className={activeTab===1 ? 'c-tabs__tab active' :  'c-tabs__tab'}
            onClick={() => handleActiveTab(1)}>
            <span className="c-icon c-icon--flight"></span>
            Vuelos 
          </button>

          <button htmlFor="radio2" 
            className={activeTab===2 ? 'c-tabs__tab active' :  'c-tabs__tab'}
            onClick={() => handleActiveTab(2)}>
            <span className="c-icon c-icon--hotel"></span>
            Hotel
          </button>

          <button htmlFor="radio3" 
            className={activeTab===3 ? 'c-tabs__tab active' :  'c-tabs__tab'}
            onClick={() => handleActiveTab(3)}>
            <span className="c-icon c-icon--car"></span>
            Autos
          </button>
        </div>
         
         {/* TAB PANELS */}
 
        <div className={activeTab===1 ? 'c-tabs__panel active' :  'c-tabs__panel'}>
         <SearchForm />
         
        </div>

  
        <div className={activeTab===2 ? 'c-tabs__panel active' :  'c-tabs__panel'}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Error illo a temporibus est blanditiis, quam voluptatibus ea
          </p>
        </div>

        <div className={activeTab===3 ? 'c-tabs__panel active' : 'c-tabs__panel'}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>

      </div>
    </div>
  )
}

export default Tabs