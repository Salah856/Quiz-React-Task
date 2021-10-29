
import generateUniqID from "./generateID";

const createQuizJSON = ( quizData, URL, title, description) => {
   
    let quests = []; 
    let answers = []; 
    
    quizData.forEach(item =>{

        let [questions, options] = item; 
        
        quests.push(questions.en); 
        answers.push(options);
    }); 

    return {

        id: generateUniqID(),
        created: new Date().toLocaleString(),
        modified: '', 
        title,
        description, 
        URL,
        score: null, 
        questions: quests, 
        answers,
    }

};


export default createQuizJSON;

