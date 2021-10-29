import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";

import {
 Table, TableBody, 
 TableCell, TableContainer, 
 TableHead, Paper, TableRow,
 Button
} from '@material-ui/core'; 

import getQuizzes from "../utils/getQuizzes";

function Home(){

  const history = useHistory();
  const [quizzes, setQuizzes] = useState([]); 
  
  useEffect(() => { 
  
    let fetchedQuizzes = getQuizzes();
    setQuizzes(fetchedQuizzes); 
  }, [getQuizzes]);

  return (
    <>
    <button
      style={{
        marginBottom: '30px', 
        color: 'white', 
        backgroundColor: 'Blue'
      }}
      onClick={
        ()=>{
          history.push('/quiz-create'); 
        }
      }
    >
      Create Quiz
    </button>

    {quizzes.length &&
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="quiz table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">URL</TableCell>
            <TableCell align="right" >Operations</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {quizzes.map((quiz) => (
            <TableRow
              key={quiz.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="right">{quiz.title}</TableCell>
              <TableCell align="right">{quiz.description}</TableCell>
              <TableCell align="right">{quiz.URL}</TableCell>
              <TableCell align="right">  
                <Button
                
                  onClick={
                    ()=>{
                      history.push(`/quiz-edit/${quiz.id}`)
                    }
                  }
                  style={{
                    color: 'white', 
                    backgroundColor: 'green', 

                  }}
                >
                  Edit Quiz
                </Button>  
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  }
    </>
  )
};


export default Home;
