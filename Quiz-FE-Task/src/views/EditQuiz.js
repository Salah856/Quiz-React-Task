
import {useParams} from 'react-router-dom'; 
import {Quiz} from 'react-quizzes'; 


const EditQuiz=()=>{

    const {id} = useParams(); 

    // to do get quiz from local storage by id value; 

    // then handle properly the format of data required for quiz component from react-quizzes packages; 



    return (

        <>
            initial edit quiz ! 
        </>

    )

}


export default EditQuiz; 

