
import axios from 'axios'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = 'edouard';

export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";

export function fetchPost(){

  const URL = `${ROOT_URL}posts/?key=${API_KEY}`;
  const promise = axios.get(URL);

  return {
    type: FETCH_POST,
    payload: promise
  }
}


export function createPost(props) {
  const URL = `${ROOT_URL}posts/?key=${API_KEY}`;
  const promise = axios.post(URL,props);

  return {
    type: CREATE_POST,
    payload: promise
  }

}
