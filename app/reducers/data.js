const data = (state = null, action)=>{
    switch(action.type){
        case 'DATA_ALL':
        return action.datatest;
        break;
    }
    return state;
}
export default data; 