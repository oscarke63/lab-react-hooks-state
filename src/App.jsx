import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Cart state — array of product objects
  const [cart, setCart] = useState([])

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState('all')

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev)

  const addToCart = (product) => {
    setCart((prev) => {
      // Avoid duplicate entries for the same product
      if (prev.some((item) => item.id === product.id)) return prev
      return [...prev, product]
    })
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Filter products, add them to your cart, and switch themes.
      </p>

      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

      <div className="filter-bar">
        <label htmlFor="category-filter">Filter by Category: </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App
