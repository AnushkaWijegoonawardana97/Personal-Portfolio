import axios from "axios";

const instance = axios.create({
	baseURL: "https://aw-personal-portfolio-default-rtdb.firebaseio.com/",
});

export default instance;
