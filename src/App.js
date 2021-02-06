import "./App.css";
import Header from "./components/Header/Index";
import Sidebar from "./components/sidebar/Index";
import { useState } from "react";
import FilesView from "./components/filesView/FilesView";
import SideIcons from "./components/sideIcons/index";
import DriveLogo from "./media/google-drive-icon.png";
import { auth, provider } from "./firebase";

function App() {
  const [user, setUser] = useState();
  // authentication
  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user);
      });
    }
  };

  return (
    <div className='App'>
      {user ? (
        <>
          <Header userPhoto={user.photoURL} />
          <div className='app__main'>
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>
        </>
      ) : (
        <div className='app__login'>
          <img src={DriveLogo} alt='One Drive' />
          <button onClick={handleLogin}>Log in to One Drive</button>
        </div>
      )}

      {/* auth=true 
      sidebar
      filesView
      SideIcons*/}
      {/* no auth: log in */}
    </div>
  );
}

export default App;
