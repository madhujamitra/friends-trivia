
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import QuestSet from '../components/QuotesSet/QuestsSet';
import axios from 'axios';



function QuotesPage() {
  let location = useLocation();
  let imageName = location.state.value;
  

  const [data, setData] = useState(
    [
       {
         "charId": 1,
         "name": "Rachel Green",
         "quotes": [
           {"id": 1, "quote": "I'm going to go get one of those job things."},
           {"id": 2, "quote": "It's like all my life everyone's always told me, 'You're a shoe! You're a shoe! You're a shoe!'. Well, what if I don't want to be a shoe? What if I want to be a purse, you know, or a hat!"},
           {"id": 3, "quote": "Just so you know, it's not that common, it doesn't happen to every guy, and it is a big deal!"}
         ]
       },
       {
         "charId": 2,
         "name": "Ross Geller",
         "quotes": [
           {"id": 1, "quote": "We were on a break!"},
           {"id": 2, "quote": "Pivot! Pivot! Pivot!"},
           {"id": 3, "quote": "I'm fine!"}
         ]
       },
       {
         "charId": 3,
         "name": "Monica Geller",
         "quotes": [
           {"id": 1, "quote": "Welcome to the real world. It sucks. You're gonna love it!"},
           {"id": 2, "quote": "I KNOW!"},
           {"id": 3, "quote": "Seven! Seven! Seven! Seven! Seven! Seven!"}
         ]
       },
       {
         "charId": 4,
         "name": "Chandler Bing",
         "quotes": [
           {"id": 1, "quote": "Could I BE any more..."},
           {"id": 2, "quote": "Oh... my... God!"},
           {"id": 3, "quote": "We're not great at the advice. Can we interest you in a sarcastic comment?"}
         ]
       },
       {
         "charId": 5,
         "name": "Joey Tribbiani",
         "quotes": [
           {"id": 1, "quote": "How you doin'?"},
           {"id": 2, "quote": "Joey doesn't share food!"},
           {"id": 3, "quote": "Look at me! I'm Chandler! could I be wearing any more clothes?"}
         ]
       },
       {
         "charId": 6,
         "name": "Phoebe Buffay",
         "quotes": [
           {"id": 1, "quote": "Smelly cat, smelly cat, what are they feeding you?"},
           {"id": 2, "quote": "You're going to hurt me? With your buttocks?"},
           {"id": 3, "quote": "They don't know that we know they know we know."}
         ]
       }
     ]
   
   
 )



  
 const character = data.find(char => char.name == imageName)?.quotes;

   
  return (


   <QuestSet quotes={character} />
  );
}

export default QuotesPage;