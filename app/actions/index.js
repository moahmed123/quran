
import axios from 'axios';

// Make a request for a user with a given ID
export function githubdata(){
    return(dispatch) =>{

    axios.get('https://api.github.com/users/github')
    .then( (response) => {
        // handle success
        dispatch(actiondatea (response))
        console.log(response);
    })
    .catch( (error) => {
        // handle error
        console.log(error);
    });
    }
}
export function dispat(){
    return(dispatch) => {
        dispatch(action2());
    }  
}
export function action2 (){
    return{
        type: 'DATA_ALL',
        datatest: 'redux done'
    }
}

export function actiondatea (result){
    return{
        type: 'DATA_ALL_AC',
        dataresult: result
    }
}