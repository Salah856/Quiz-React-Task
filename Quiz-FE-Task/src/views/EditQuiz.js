import React, {useState} from 'react'; 

import {useParams} from 'react-router-dom'; 
import getQuiz from '../utils/fetchQuizData';
import { Box, Button, TextField } from '@material-ui/core';

const EditQuiz = () => {

    const { id } = useParams();
    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [URL, setURL] = useState('');  

    let quiz = getQuiz(id); 
    console.log(quiz); 

   
    const handleTitleChange=(e)=>{
        setTitle(e.target.value); 
    }; 
    
    const handleDescriptionChange=(e)=>{
        setDescription(e.target.value); 
    }; 

    const handleURLChange=(e)=>{
        setURL(e.target.value); 
    }; 

    const handleEditQuizSubmit = () => {
       
        // to do 
    }

    return (

        <>
            <TextField 
                label="Title"
                value={quiz.title}
                style={{margin: '40px'}} 
                onChange={handleTitleChange}
            />

            <TextField 
                label="Description"
                value={quiz.description}
                style={{margin: '40px'}} 
                onChange={handleDescriptionChange}
            />

            <TextField 
                label="URL"
                value={quiz.URL}
                style={{margin: '40px'}}
                onChange={handleURLChange}
            />


        {/* {
            quiz.questions.map((question, index)=>{

                return (
                    <>
                        if(question.elementType === 'RadioButton'){

                        }
                    </>
                )
            })
        } */}
        
        <Box
            mt={4}
        >
            <Button
                style={{
                    color: 'white', 
                    backgroundColor: 'blue'
                }}
                onClick={handleEditQuizSubmit}
            >
                Edit Quiz
            </Button>
        </Box>
        </>

        // to do the ui of the every question and its options

    )

}


export default EditQuiz; 

