import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operations";
import { selectStateContacts } from '../redux/selectors';
// import ContactForm from '../components/ContactForm';
// import {SearchBox} from '../components/SearchBox';
// import {ContactList} from '../components/ContactList'
import reactLogo from '../assets/react.svg';
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";


export default function Contacts(){
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(selectStateContacts);


    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    return(
        <div>
            hello Contacts
             <div>
      <img src={reactLogo} className="logo react" alt="React logo" />

      <h1>Phonebook</h1>

   <ContactForm />
       <SearchBox />
      {loading && <p>LOADING.....</p>}
      {error !== null && <p>{error}</p>}
      {items.length > 0 && <ContactList />}
     </div>
        </div>
    )
}