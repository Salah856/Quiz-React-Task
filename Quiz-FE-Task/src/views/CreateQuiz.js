import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Quiz, QuizzBuilder} from 'react-quizzes';
import "react-quizzes/lib/assets/antd.css"

import { Button } from '@material-ui/core';

const CreateQuiz = ({ className, ...rest }) => {

  const [quizRef, setQuizRef] = useState(null);
  const [quizzData, setQuizData] = useSate(null); 

  const saveQuizRef = (quizRef) => {
    setQuizRef(quizRef); 
  };

  const handleCustomSubmit = () => {    
      
    const form = quizRef.props.form;
    form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        form.resetFields(); 
      }
    });
  };


    return (
    <> 
      {/* <Quiz
        wrappedComponentRef={saveQuizRef}
        submitButton={true}
        data={[{
          hello: 'salah'
        }]}
      /> */}
      <QuizzBuilder 
        onChange={(QuizzData) => {
          
          console.log(QuizzData)
        
        }}
      />
      <Button onClick={handleCustomSubmit}>Create Quiz</Button>
    </>
  );
};

CreateQuiz.propTypes = {
  className: PropTypes.string
};

export default CreateQuiz;
