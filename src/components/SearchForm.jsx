import React from 'react'
import SelectOptions from './SelectOptions';

const SearchForm = () => {
  return (
    <form className="c-search-form">
      
      {/* Radio buttons */}
      <div className="c-search-form__control-group">
        <div className="c-search-form__container">
          <input type="radio" name="flight-type" className="c-search-form__input" />
          <label htmlFor="flight-type" >Ida y vuelta</label>
        </div>
        <div className="c-search-form__container">
          <input type="radio" name="flight-type" className="c-search-form__input" />
          <label htmlFor="flight-type" >Solo ida</label>
        </div>
        <div className="c-search-form__container">
          <input type="radio" name="flight-type" value className="c-search-form__input" />
          <label htmlFor="flight-type" >Multidestino</label>
        </div>
      </div>
      {/* Inputs */}

      <div className="c-search-form__control-group  c-search-form__control-group--select">
        
        <div  className="c-search-form__select-group" >
          <select name="select" id="" className="c-search-form__select">
            <SelectOptions />
          </select>
        </div>

        <div  className="c-search-form__select-group" >
          <select name="select" className="c-search-form__select">
            <SelectOptions />
          </select>
        </div>
          <button className="c-search-form__button" type="submit">Buscar</button>
      </div>

    </form>
  )
}

export default SearchForm