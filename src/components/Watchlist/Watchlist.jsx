import React from 'react'
import './Watchlist.css'

const Watchlist = () => {
  return (
    <div className="watchlist">
        <div className="watchlist__headingContainer">
            <h2>Account watchlist</h2>
        </div>
        <div className="watchlist__tableContainer">
            <div className="watchlist__column_1">
                <h3 className="watchlist__columnHeading">Account</h3>
                <p>Sales</p>
                <p>Advertising</p>
                <p>Inventory</p>
                <p>Entertainment</p>
                <p>Product</p>
            </div>
            <div className="watchlist__column_2">
                <h3 className="watchlist__columnHeading">This Month</h3>
                <p>1,194.58</p>
                <p>6,879.02</p>
                <p>4,692.26</p>
                <p>0.00</p>
                <p>4,652.10</p>
            </div>
            <div className="watchlist__column_3">
                <h3 className="watchlist__columnHeading">YTD</h3>
                <p>11,418.29</p>
                <p>9,271.36</p>
                <p>9,768.09</p>
                <p>0.00</p>
                <p>2,529.90</p>
            </div>
        </div>
    </div>
  )
}

export default Watchlist