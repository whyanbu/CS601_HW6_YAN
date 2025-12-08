import './App.css'
import ProductList from './components/ProductList'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import NotFound from './components/NotFound'
import ProductLoader from './components/ProductLoader'

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProductLoader>
                            {({ products }) => <ProductList products={products} />}
                        </ProductLoader>
                    }
                />
                <Route
                    path="/product/:id"
                    element={
                        <ProductLoader>
                            {({ products }) => <ProductDetail products={products} />}
                        </ProductLoader>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
