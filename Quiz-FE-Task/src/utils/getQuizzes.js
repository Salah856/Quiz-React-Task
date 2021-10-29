
const getQuizzes = () => {
    
    let quizzes = JSON.parse(localStorage.getItem('quizzes')); 
    console.log(quizzes); 
    return quizzes; 
}; 


export default getQuizzes; 