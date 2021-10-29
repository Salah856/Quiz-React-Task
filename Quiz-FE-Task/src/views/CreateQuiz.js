import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import { QuizzBuilder } from 'react-quizzes';
import "react-quizzes/lib/assets/antd.css"; 

import createQuizJSON from '../utils/createQuizJSON';
import handleLocalStorage from '../utils/handleStorage';

import { Button, TextField } from '@material-ui/core';

const CreateQuiz = ({ className, ...rest }) => {

  const history= useHistory();

  const [quizData, setQuizData] = useState(null); 
  
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [URL, setURL] = useState(''); 

  const handleTitleChange=(e)=>{
    setTitle(e.target.value); 
  }; 
  
  const handleDescriptionChange=(e)=>{
    setDescription(e.target.value); 
  }; 

  const handleURLChange=(e)=>{
    setURL(e.target.value); 
  }; 

  const handleQuizCreate = () => {    

      let quiz = createQuizJSON(quizData, URL, title, description); 
      handleLocalStorage(quiz);
      
      history.push('/'); // route to quizzes list view 
  };


  return (
    <>  
    <TextField 
      label="Title" 
      style={{margin: "20px"}} 
      onChange={handleTitleChange}
    />

    <TextField 
      label= "Description" 
      style={{margin: '20px'}} 
      onChange={handleDescriptionChange}
    />
    <TextField 
      label="URL" 
      style={{margin: '20px'}} 
      onChange={handleURLChange}
    />

      <QuizzBuilder 
        onChange={(QuizzData) => {
          console.log(QuizzData); 
          setQuizData(QuizzData);         
        }}
      />

      <Button 
        style={{backgroundColor: 'Blue', color: 'white'}}
        onClick={handleQuizCreate}
      >
        Create Quiz
      </Button>
    </>
  );
};

CreateQuiz.propTypes = {
  className: PropTypes.string
};

export default CreateQuiz;
