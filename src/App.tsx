import { AboutUs } from './components/AboutUs';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
export function App() {
  return <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <AboutUs />
      </main>
      <Footer />
    </div>;
}