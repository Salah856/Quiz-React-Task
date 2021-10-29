import {useParams} from 'react-router-dom'; 
import getQuiz from '../utils/fetchQuizData';


const EditQuiz = () => {

    const { id } = useParams(); 

    let quiz = getQuiz(id); 
    console.log(quiz); 

    // to do :
    // handle properly the format of data required 
    // for quiz component from react-quizzes packages; 


    return (

        <>
            initial edit quiz ! 
        </>

    )

}


export default EditQuiz; 

