import './App.css';
// import reactLogo from '../../assets/react.svg';
// import ContactForm from '../ContactForm/ContactForm';
// import { SearchBox } from '../SearchBox/SearchBox';
// import { ContactList } from '../ContactList/ContactList';
// import { fetchContacts } from '../../redux/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { Suspense, useEffect } from 'react';
// import { selectStateContacts } from '../../redux/selectors';
import { Navigation } from '../Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
// import Contacts from '../../pages/Contacts';
import Register from '../../pages/Register';
import Login from '../../pages/Login';
import Contacts from '../../pages/Contacts';

function App() {
  // const dispatch = useDispatch();
  // const { items, loading, error } = useSelector(selectStateContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      <Navigation />
      {/* <Suspense fallback={<b>Loading...</b>}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
         
          <Route path="/login" element={<Login />} />
         
          {/* <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route> */}

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      {/* </Suspense> */}
    </div>
    // <div>
    //   <img src={reactLogo} className="logo react" alt="React logo" />

    //   <h1>Phonebook</h1>

    //   <ContactForm />
    //   <SearchBox />
    //   {loading && <p>LOADING.....</p>}
    //   {error !== null && <p>{error}</p>}
    //   {items.length > 0 && <ContactList />}
    // </div>
  );
}

export default App;
