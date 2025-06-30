# 3D Model Görüntüleyici Bileşeni (React & Three.js)

Bu depo, React ve Three.js (React Three Fiber aracılığıyla) kullanarak `.glb` uzantılı 3D modelleri bir web uygulamasında görüntülemeye olanak tanıyan bir prototip bileşen içermektedir. Bu bileşen, e-ticaret siteleri veya ürün görselleştirme projeleri için 3D varlıkları kolayca entegre etmek isteyen geliştiricilere yönelik bir başlangıç noktası sunar.

## Proje Hakkında

Vite'ın `.glb` dosyalarını varsayılan olarak JavaScript dosyası gibi yorumlamasından kaynaklanan sorunu çözmek için `vite.config.js` dosyasında özel bir yapılandırma ile `.glb` uzantılı dosyaların bir `asset` olarak işlenmesini sağladım.

Bu proje, kendi 3D modellerini (optimize edilmiş `.glb` uzantılı dosyalar) web sitelerinde sergilemek isteyen geliştiriciler için temel bir çözüm sunar.

### Temel Özellikler

* **React Three Fiber Entegrasyonu:** React bileşenleri aracılığıyla Three.js ile kolay 3D sahne oluşturma.
* **GLB Model Yükleme:** `.glb` uzantılı 3D modelleri dinamik olarak yükleyebilir ve görüntüleyebilirsiniz.
* **Vite Desteği:** Vite tabanlı projelerde `.glb` dosyalarının doğru bir şekilde işlenmesi için yapılandırma örneği.
* **Esnek Kullanım:** Mevcut veya yeni React projelerine kolayca entegre edilebilir.
* **Arka Uç Bağlantısı İçin Hazırlık:** Geliştirmek isteyenler için `.env` dosyası üzerinden backend endpoint bağlantısı altyapısı mevcuttur.

### Teknolojiler

* **Ön Uç:** React, Vite
* **3D Görselleştirme:** Three.js, React Three Fiber
* **Ortam Değişkenleri Yönetimi:** Dotenv (Vite ile entegre)

## Kurulum

Projeyi yerel olarak çalıştırmak için aşağıdaki adımları izleyin:

1.  Depoyu klonlayın:
    ```bash
    git clone https://github.com/Yusuf-Osmanoglu/ecommerce3D
    ```
2.  Proje dizinine gidin:
    ```bash
    cd ecommerce3D
    ```
3.  Gerekli bağımlılıkları yükleyin:
    ```bash
    npm install
    ```
4.  `.env` dosyasını oluşturun:
    Projenin kök dizininde `.env` adında bir dosya oluşturun ve isteğe bağlı olarak backend endpoint'inizi buraya tanımlayabilirsiniz. Örneğin:
    ```
     VITE_API_BASE_URL=http://localhost:5000/api
    ```
5.  Uygulamayı başlatın:
    ```bash
    npm run dev 
    ```

## Nasıl Test Edilir?

Proje çalıştırıldıktan sonra, kendi optimize edilmiş `.glb` uzantılı 3D modellerinizi bileşene yükleyerek test edebilirsiniz. Örnek bir model dosyası ile test etmek için bileşeninize ilgili yolu sağlayın.

## Katkıda Bulunma

Bu bir prototip projedir ve geliştirilmeye açıktır. Her türlü katkı (hata düzeltmeleri, yeni özellikler, dokümantasyon iyileştirmeleri vb.) memnuniyetle karşılanır.

## İletişim

Yusuf Osmanoğlu - [LinkedIn Profili](https://www.linkedin.com/in/yusuf-osmanoglu-/) - [EPOSTA_ADRESİNİZ](yusufosmanoglu2003@outlook.com)

Proje Bağlantısı: (https://github.com/Yusuf-Osmanoglu/ecommerce3D)

---

# 3D Model Viewer Component (React & Three.js)

This repository contains a prototype component that allows displaying `.glb` 3D models in a web application using React and Three.js (via React Three Fiber). This component serves as a starting point for developers who want to easily integrate 3D assets into e-commerce sites or product visualization projects.

## About The Project

To address the issue where Vite by default interprets `.glb` files as JavaScript files, we've included a specific configuration in `vite.config.js` to ensure that `.glb` files are treated as assets.

This project offers a foundational solution for developers looking to showcase their own 3D models (optimized `.glb` files) on their websites.

### Key Features

* **React Three Fiber Integration:** Easy 3D scene creation with Three.js through React components.
* **GLB Model Loading:** Dynamically load and display `.glb` 3D models.
* **Vite Support:** Example configuration for proper handling of `.glb` files in Vite-based projects.
* **Flexible Usage:** Easily integratable into existing or new React projects.
* **Backend Connection Preparation:** Includes an `.env` setup for backend endpoint connection, allowing for future development.

### Technologies Used

* **Frontend:** React, Vite
* **3D Visualization:** Three.js, React Three Fiber
* **Environment Variable Management:** Dotenv (integrated with Vite)

## Installation

To get a local copy up and running, follow these simple steps:

1.  Clone the repo:
    ```bash
    git clone https://github.com/Yusuf-Osmanoglu/ecommerce3D
    ```
2.  Navigate to the project directory:
    ```bash
    cd ecommerce3D
    ```
3.  Install NPM packages:
    ```bash
    npm install
    ```
4.  Create `.env` file:
    Create a file named `.env` in the root directory of the project and optionally define your backend endpoint there. For example:
    ```
    VITE_API_BASE_URL=http://localhost:5000/api
    ```
5.  Start the application:
    ```bash
    npm run dev
    ```

## How to Test?

Once the project is running, you can test it by loading your own optimized `.glb` 3D models into the component. Provide the relevant path to your component to test with an example model file.

## Contributing

This is a prototype project and open for development. All contributions (bug fixes, new features, documentation improvements, etc.) are welcome.

## License

Distributed under the [LİSANS_TÜRÜ] License. See `LICENSE` for more information (if you have one, otherwise remove this line).

## Contact

Yusuf Osmanoğlu - [LinkedIn Profile](https://www.linkedin.com/in/yusuf-osmanoglu-/) - [EMAIL_ADDRESS](yusufosmanoglu2003@outlook.com)

Project Link: (https://github.com/Yusuf-Osmanoglu/ecommerce3D)
