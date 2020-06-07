import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://diplom-55.firebaseio.com/";

export default instance;
