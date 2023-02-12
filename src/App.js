// import '../src/styles/index.scss';
import BotonWhatsapp from './components/BotonWhatsapp';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';



function App() {
  return (
    <div>
      <NavBar/>
      <AppRoutes/>
      <BotonWhatsapp/>
      <Footer/>
    </div>
  );
}

export default App;
