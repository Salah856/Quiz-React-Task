
const handleLocalStorage = (quiz) =>{
        
    let quizzes = JSON.parse(localStorage.getItem('quizzes')); 
    quizzes.push(quiz); 
    localStorage.setItem('quizzes', JSON.stringify(quizzes)); 
}


export default handleLocalStorage; 