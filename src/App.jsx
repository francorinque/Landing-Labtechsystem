import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Meet from './components/Meet/Meet';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Stats from './components/Stats/Stats';
import ToolsYouNeed from './components/ToolsYouNeed/ToolsYouNeed';
import Layout from './components/ui/Layout';

function App() {
  return (
    <main>
      <Navbar />
      <Layout maxWidth='max-w-[1440px]'>
        <Hero />
        <ToolsYouNeed />
        <Info />
        <Meet />
        <Stats />
        <Reviews />
      </Layout>
    </main>
  );
}

export default App;
