
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import QuestSet from '../components/QuotesSet/QuestsSet';
import axios from 'axios';



function QuotesPage() {
  let location = useLocation();
  let imageName = location.state;
  
  const [loading, setLoading] = useState(true);


  
    let [characters, setCharacters] = useState([]);
    const fetchCharacters = async () => {
      try {
        const res = await axios.get("http://localhost:8883");
        console.log(res.data);
        setLoading(false);
        setCharacters(res.data);
      } catch (error) {
        console.error("check", error);
      }
    };
    useEffect(() => {
      fetchCharacters();
    }, []);
    console.log(characters);
   
  return (


   <QuestSet />
  );
}

export default QuotesPage;