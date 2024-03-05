import axios from "axios";

const BASE_URL="https://newsapi.org/v2";
const API_KEY="9fdcf4bba00441d5987f148c2ead0e12";

export async function fetchTopHeadlines() {
    //top-headlines?country=in
    try {
        const response = await axios.get(`${BASE_URL}/everything?q=food&apiKey=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchAllNews(){
    try {
        const response = await axios.get(`${BASE_URL}/everything?q=food&apiKey=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}