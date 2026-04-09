import axios from "axios";

export class PostService{
    static async getAll() {
        try {
        const response =  await axios.get('https://api.thecatapi.com/v1/images/search?limit=100');
        return response.data;
        } catch(e) {
            console.error(e)
        }
    }
}