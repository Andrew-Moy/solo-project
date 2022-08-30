import React from 'react';
import Stock from '../components/Stock.js'

const addStock = () => {

}

const newStock = () => {

}

const MainContainer = (props) =>{
    return( 
    <div className = "mainContainer">
        <h2 id = "portfolioName">Andrew's Portfolio</h2>
        <form onSubmit={addStock}>
            <input
              id = "new-stock"
            //   value="Stock"
            />
            <button id="add-stock" className = "primary" type ="submit">Add Stock</button>
        </form>
        <Stock />
    </div>
    )
}

export default MainContainer;