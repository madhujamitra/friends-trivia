import '../QuotesSet/QuestsSet.scss';
import { useNavigate } from 'react-router-dom';

function QuestSet({quotes}){
    let navigate = useNavigate();
 function handleGoHomeClick(){
    navigate('/');
 }

 console.log(quotes);

    return (


<>

<div className='quote-container'>
<h1>Character’s Quote</h1>
<ul>
{quotes && quotes.map(quote => (
          <li key={quote.id}>{quote.quote}</li>
        ))}
      </ul>
<div className='button-container'>
<button  className="button" onClick={handleGoHomeClick}> Go to home page</button>
</div>
      
</div>




</>

    );
}

export default QuestSet;