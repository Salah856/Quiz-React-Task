import React, {useState, useEffect} from "react";
import axios from 'axios'; 
import { useHistory } from "react-router";
import MUIDataTable from "mui-datatables";


function Home(){

  const [topics, setTopics] = useState([]);
  const history = useHistory();
    
    useEffect( () => { 
        async function fetchTopics() {
            try {
                const res = await axios.get(
                  'https://616d7fff6dacbb001794cacb.mockapi.io/api/v1/topics'
                  ); 
                setTopics(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchTopics();
    }, []);

  const columns = [
    'createdAt', 
    'name', 
    'avatar', 
    'id'
  ]; 

  const options =  {
    filterType: 'dropdown', 
    responsive: 'scroll'
  }; 


  return (
    <>
    <button
      style={{marginBottom: '30px'}}
      onClick={
        ()=>{
          history.push('/topics-create'); 
        }
      }
    >
      Create Topic
    </button>
    <MUIDataTable 
      title={"Topics"} 
      data={topics} 
      columns={columns} 
      options={options} 
    />
    </>
  )
};


export default Home;
