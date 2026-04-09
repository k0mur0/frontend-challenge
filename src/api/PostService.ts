import axios from "axios";

export class PostService{
    static async getAll() {
        const response =  await axios.get('https://api.thecatapi.com/v1/images/search?limit=15&api_key=live_Rdo8RcmPP8hHuf4Ut3HekimJhs2pv6hTCDDEykELbsD6oWPWdiFzEJSlV89KUMHZ');
        return response.data;
    }
}