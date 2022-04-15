import React from 'react'
import '../styles/CategoryList.css'
import '../styles/CategoryList_res.css'

const CategoryList = ({ category, handleCategory, handleAllCategorys  }) => {
  return (
    <>
      <div className="categoryList__container">
        <div className="categoryList__button">
          {category.map( (valor, id) => ( 
            <input 
            key={id}
            type="text"
            readOnly
            className="categoryList__list" 
            onClick={handleCategory}
            name={valor}
            value={valor}
            />
            ))}
            <div className="category__all" onClick={handleAllCategorys}><span>Todos</span></div>
        </div>
      </div>
    </>
  )
}

export default CategoryList