import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import './App.css';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  stock: number;
  rating: number;
  reviews: number;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Statik ürün verisi
const staticProducts: Product[] = [
  {
    id: 1,
    name: "Basic T-Shirt",
    price: 299.99,
    category: "Giyim",
    images: [
      "https://image.hm.com/assets/hm/7d/7e/7d7e465a0f8544332e95f947fe5667c88252811d.jpg?imwidth=1260"
    ],
    description: "%100 pamuk, nefes alabilen kumaş, rahat ve şık tasarım. Günlük kullanım için idealdir. Farklı renk ve beden seçenekleriyle gardırobunuzun vazgeçilmezi.",
    stock: 42,
    rating: 4.6,
    reviews: 212
  },
  {
    id: 2,
    name: "Pamuklu Şort",
    price: 199.99,
    category: "Giyim",
    images: [
      "https://image.hm.com/assets/hm/fd/a6/fda639a039e8796208a36b771b84b437b7cb4ab7.jpg?imwidth=1260"
    ],
    description: "Yumuşak pamuklu kumaştan üretilmiş, yaz aylarında serin ve konforlu kullanım sunan şık şort. Farklı renk ve beden seçenekleriyle.",
    stock: 30,
    rating: 4.7,
    reviews: 98
  }
];

function AppRoutes({
  products,
  cart,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  setCart
}: {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  setCart: (cart: CartItem[]) => void;
}) {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home products={products} onProductClick={product => navigate(`/product/${product.id}`)} />} />
      <Route path="/products" element={<Products products={products} onProductClick={product => navigate(`/product/${product.id}`)} />} />
      <Route path="/product/:id" element={<ProductDetailRouter products={products} addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} onRemove={removeFromCart} onUpdateQuantity={updateCartQuantity} onCheckout={() => navigate('/checkout')} onBack={() => navigate('/products')} />} />
      <Route path="/checkout" element={<Checkout cart={cart} onBack={() => navigate('/cart')} onOrderComplete={() => { setCart([]); navigate('/'); }} />} />
    </Routes>
  );
}

function ProductDetailRouter({ products, addToCart }: { products: Product[]; addToCart: (product: Product, quantity: number) => void }) {
  const navigate = useNavigate();
  const id = window.location.pathname.split('/').pop();
  const product = products.find(p => p.id === Number(id));
  if (!product) return <div>Ürün bulunamadı</div>;
  return <ProductDetail product={product} onAddToCart={addToCart} onBack={() => navigate('/products')} />;
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products] = useState<Product[]>(staticProducts);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          quantity: quantity
        }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart => prevCart.map(item =>
      item.id === productId
        ? { ...item, quantity }
        : item
    ));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header 
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        />
        <main className="container mx-auto px-4 py-8">
          <AppRoutes
            products={products}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            updateCartQuantity={updateCartQuantity}
            setCart={setCart}
          />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
