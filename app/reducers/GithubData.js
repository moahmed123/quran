const GithubData = (state = null, action)=>{
    switch(action.type){
        case 'DATA_ALL_AC':
        return action.dataresult;
        break;
    }
    return state;
}
export default GithubData; 