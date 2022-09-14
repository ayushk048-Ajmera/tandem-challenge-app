import axios from "axios";
import APIResponseDTO from "../Models/APIResponseDTO";

class APIService {
    private static instance: APIService;

    public static getInstance() {
        if (!APIService.instance) {
            APIService.instance = new APIService();
        }
        return APIService.instance;
    }

    public async getById(id: string = '1234'): Promise<APIResponseDTO> {
        const response = await axios.get(`data-set/${id}`);
        return response.data;
    }

    public async addNumber(id: string, value: number): Promise<APIResponseDTO> {
        const response = await axios.post(`data-set/${id}`, { value });
        return response.data;
    }

}

export default APIService