import Footer from './components/Footer';
import Profile from './components/Profile';
import Links from './components/Links';
import SmallLinks from './components/SmallLink';

function App() {
  return (
    <main className="main">
      <div className="main_section">
        <Profile />
        <Links />
      </div>

      <SmallLinks />
      <Footer />
    </main>
  );
}

export default App;
