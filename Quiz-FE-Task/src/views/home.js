import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
import MUIDataTable from "mui-datatables";


function Home(){

  const history = useHistory();
    
    useEffect( () => { 
       
    }, []);

    


  return (
    <>
    <button
      style={{marginBottom: '30px'}}
      onClick={
        ()=>{
          history.push('/quiz-create'); 
        }
      }
    >
      Create Quiz
    </button>

    </>
  )
};


export default Home;
