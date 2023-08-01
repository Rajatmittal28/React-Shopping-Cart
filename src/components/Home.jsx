import React from 'react'
import Product from './Product'

function Home() {
  return (
    <div>
        <h2 className='heading'>Welcome to Redux toolkit Store</h2>
        <section>
            <h2 className='heading'>Products</h2>
            <Product />
        </section>

    </div>
  )
}

export default Home