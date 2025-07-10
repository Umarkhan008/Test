import { useState } from 'react'
import './App.css'

const productsOriginal = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image: 'https://course-api.com/images/store/product-1.jpeg',
    price: 9.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image: 'https://course-api.com/images/store/product-2.jpeg',
    price: 79.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image: 'https://course-api.com/images/store/product-3.jpeg',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image: 'https://course-api.com/images/store/product-4.jpeg',

    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image: 'https://course-api.com/images/store/product-5.jpeg',

    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-6.jpeg',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image: 'https://course-api.com/images/store/product-7.jpeg',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-8.jpeg',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image: 'https://course-api.com/images/store/product-9.jpeg',
    price: 39.95,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-10.jpeg',
    price: 29.98,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image: 'https://course-api.com/images/store/product-11.jpeg',
    price: 10.99,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-12.jpeg',
    price: 9.99,
  },
];



function App() {
  const [products, setProducts] = useState(productsOriginal)
  const [rangeVal, setrangeVal] = useState(50)

  function filter(a) {
    let filtered = productsOriginal.filter((element)=> element.company == a.target.innerHTML)
    setProducts(filtered)
    
    if (a.target.innerHTML == "All") {
      setProducts(productsOriginal)
    }
  }


  function searchFilter(e) {
    let filtered = productsOriginal.filter((element)=> element.title.includes(e.target.value))
    setProducts(filtered)    
  }

  function rangeFilter(e) {
    setrangeVal(e.target.value)
    let filtered = productsOriginal.filter((element)=> element.price < rangeVal)
    setProducts(filtered)
  }


  return (
    <div className='container'>
        <div className="filters">
          <input type="text" onInput={searchFilter} placeholder='Search...' />
          <h1>Company</h1>
          <p onClick={filter}>All</p>
          <p onClick={filter}>ikea</p>
          <p onClick={filter}>marcos</p>
          <p onClick={filter}>caressa</p>
          <p onClick={filter}>liddy</p>

          <input type="range" min={0} max={100} onInput={rangeFilter} />
          <p>{rangeVal}</p>
        </div>

        <main>
          {products.map((element)=>{
            return (
              <div className='card'>
                <img src={element.image} alt="" />
                <h1>{element.title}</h1>
                <b>{element.price}</b>
              </div>
            )
          })}
        </main>
    </div>
  )
}

export default App
