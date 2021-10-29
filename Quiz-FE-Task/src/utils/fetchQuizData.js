import getQuizzes from "./getQuizzes"; 

const getQuiz =(id)=> {

    let quizzes = getQuizzes();

    let quiz = quizzes.filter((quiz)=>{
        return quiz.id == id; 
    })[0]; 

    console.log(quiz); 
    return quiz; 
}

export default getQuiz; 

