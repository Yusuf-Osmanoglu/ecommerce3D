import type { CartItem } from '../App';

interface CartProps {
  cart: CartItem[];
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onCheckout: () => void;
  onBack: () => void;
}

const Cart = ({ cart, onRemove, onUpdateQuantity, onCheckout, onBack }: CartProps) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <svg className="w-24 h-24 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sepetiniz Boş</h2>
        <p className="text-gray-600 mb-8">Alışverişe başlamak için ürünlerimize göz atın</p>
        <button
          onClick={onBack}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Alışverişe Başla
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Alışveriş Sepeti</h1>
          <p className="text-gray-600 mt-2">{itemCount} ürün</p>
        </div>
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          Alışverişe Devam Et
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-2xl font-bold text-blue-600">₺{item.price.toFixed(2)}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="w-12 text-center font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>

                {/* Total Price */}
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800">₺{(item.price * item.quantity).toFixed(2)}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Sipariş Özeti</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Ara Toplam</span>
                <span className="font-semibold">₺{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Kargo</span>
                <span className="text-green-600 font-semibold">Ücretsiz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">KDV (%18)</span>
                <span className="font-semibold">₺{(total * 0.18).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-bold text-gray-800">Toplam</span>
                  <span className="text-2xl font-bold text-blue-600">₺{(total * 1.18).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ödemeye Geç
            </button>

            {/* Additional Info */}
            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Güvenli ödeme
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Hızlı teslimat
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                30 gün iade garantisi
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 