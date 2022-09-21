import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ProductsType } from './pages/types/ProductsType'
import { getAll } from './api/products'
import ProductsPage from './pages/client/Products/ProductsPage'

function App() {
  const [products, setProducts]  = useState <ProductsType[]>([])
  useEffect(() => {
    const getProducts = async () =>{
      const {data} = await getAll()
      setProducts(data)
    }
    getProducts()
  },[])
  
  
  return (
    <div className="App">
      <ProductsPage product={products}/>
    </div>
  )
}

export default App
