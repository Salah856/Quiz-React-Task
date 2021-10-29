
const getQuizzes = () => {
    return JSON.parse(localStorage.getItem('quizzes')); 
}


export default getQuizzes; 