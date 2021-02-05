import "./App.css";
import Header from "./components/Header/Index";
import {useState} from 'react'

function App() {
  const [user,setUser] = useState({
    displayName: "Zen F",
    email: "Zeinfarhat6@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://img-authors.flaticon.com/google.jpg"
  })
  // authentication

  return (
    <div className='App'>
      <Header userPhoto={user.photoURL} />
      {/* auth=true 
      sidebar
      filesView
      SideIcons*/}
      {/* no auth: log in */}
    </div>
  );
}

export default App;
