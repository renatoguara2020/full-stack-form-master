
import './App.css';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <ToastContainer />
     <Contact />
    </div>
  );
}

export default App;



// -----------------important----------------------------------

// in order to send locally from your computer an email succesfully, you have to let nodemailer have access to gmail:
// https://myaccount.google.com/lesssecureapps


// in order to allow herokus machine to have access on gmail:
// https://accounts.google.com/b/0/DisplayUnlockCaptcha



// saved file in github: https://github.com/odito/hooks-form
