import React from 'react'

const Form = ({ setSearchedProduct }) => {

    const inputProducts = e => {
        setSearchedProduct(e.target.value)
    }


  return (
    <form >
        <input 
        type="text"
        placeholder='What are you looking for?'
        onChange={inputProducts}
        />
    </form>
  )
}

export default Form