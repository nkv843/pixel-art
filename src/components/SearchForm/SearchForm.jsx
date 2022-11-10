import React from "react";
import classNames from './SearchForm.module.css'

const SearchForm = () => {
  return(
    <form className={classNames.form}>
      <input className={classNames.input} type="text" placeholder="Some place"/>
      <button className={classNames.submit}>Answer!</button>
    </form>
  )
}

export default SearchForm
