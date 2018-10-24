import { combineReducers } from "redux";
import datate from './data';
import dataGithup from './GithubData';

const allReducers = combineReducers({
    datatest: datate,
    dataGit: dataGithup
})
export default allReducers;