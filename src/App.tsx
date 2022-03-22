import { useEffect, useState } from 'react'
import logo from './logo.svg'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './conponents/Home';
import ProductPage from './conponents/Product';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';
import ProductManager from './pages/ProductManager';
import axios from 'axios';
import ProductType from './pages/types/product';
function App() {
  const [products,setProducts] = useState<ProductType[]>([])
  useEffect(() =>{
    const getProducts = async () =>{
        const { data } = await axios.get("http://localhost:3001/products");
        setProducts(data)
    }
    getProducts();
  },[]);
  const removeId = (id :number) =>{
    axios.delete(`http://localhost:3001/products/${id}`)
    setProducts(products.filter(item => item.id !== id))
  }
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<h1>HomePage</h1>} />
          <Route path='products' element={<h1>Products Page</h1>} />
        </Route>
        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path='dashboard' element={<h1>Dashboard Page</h1>} />
          <Route path='products' element={<ProductManager products={products} onRemove={removeId}/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
