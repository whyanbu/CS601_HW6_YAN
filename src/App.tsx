import './App.css'
import ProductList from './components/ProductList'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import NotFound from './components/NotFound'
import { ProductProvider } from './context/ProductContext'

const App = () => {
    return (
        <div>
            <Header />
            <ProductProvider>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </ProductProvider>
        </div>
    );
}

export default App;
