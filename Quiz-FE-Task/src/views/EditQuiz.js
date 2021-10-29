import {useParams} from 'react-router-dom'; 
import getQuiz from '../utils/fetchQuizData';
import { Button, TextField } from '@material-ui/core';

const EditQuiz = () => {

    const { id } = useParams(); 

    let quiz = getQuiz(id); 
    console.log(quiz); 

    return (

        <>
            <TextField 
                label="Title"
                value={quiz.title}
                style={{margin: '40px'}} 
            />

            <TextField 
                label="Description"
                value={quiz.description}
                style={{margin: '40px'}} 
            />

            <TextField 
                label="URL"
                value={quiz.URL}
                style={{margin: '40px'}}
            />


        <Button
        
            style={{
                color: 'white', 
                backgroundColor: 'blue'
            }}
            //onClick={}
        >
            Edit Quiz
        </Button>
        </>

    )

}


export default EditQuiz; 

