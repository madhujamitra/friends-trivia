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
<ul>
    <li>
        sfdsfsdfsdfsdf
    </li>
    <li>
        fsgsdfsdfsdf
    </li>
    <li>
        zxdfsdfsdfsdf
    </li>

</ul>

<button onClick={handleGoHomeClick}> Go to home page</button>
</>

    );
}

export default QuestSet;