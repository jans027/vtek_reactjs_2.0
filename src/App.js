import '../src/styles/App.scss';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';



function App() {
  return (
    <div>
      <NavBar/>
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
