import { Toaster } from 'sonner';
import LandingPage from './landingPage';

function App() {
  return (
    <div>
      <Toaster position="top-right" richColors/>
      <LandingPage />
    </div>
  );
}

export default App;