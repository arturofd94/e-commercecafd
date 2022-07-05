import { useRef } from 'react'
 
const FilterProducts = ({filter}) => {
    const filterPrice = useRef()
    const filterCategory = useRef()

    const onClickFilterPrice = () => {
        filterPrice.current.classList.toggle('open')
    }

    const onClickFilterCategory = () => {
        filterCategory.current.classList.toggle('open')
    }

  return (
    <section ref={filter} className="filter">
        <form>
            <section ref={filterPrice} className="filter__price">
                <section onClick={onClickFilterPrice} className="filter__priceTitle">
                    <p>Price</p>
                    <i className='bx bx-chevron-down' ></i>
                </section>
                <label className="filter__input">
                    <p>From: </p>
                    <input type="number" name="" id="" />
                </label>
                <label className="filter__input">
                    <p>To: </p>
                    <input type="number" name="" id="" />
                </label>
                <input className="filter__button" type="submit" value='Filter price'/>
            </section>
            <section ref={filterCategory} className="filter__category">
                <section onClick={onClickFilterCategory} className="filter__priceCategory">
                    <p>Category</p>
                    <i className='bx bx-chevron-down' ></i>
                </section>
                <p className="category">Smart Tv</p>
                <p className="category">Computers</p>
                <p className="category">SmartPhones</p>
            </section>
        </form>
    </section>
  )
}

export default FilterProducts