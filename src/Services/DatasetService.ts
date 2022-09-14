import { ICardProps } from "../Components/CardElement/Index";
import APIService from "./APIService";

export default class DatasetService {
    private static instance: DatasetService;
    private apiService = APIService.getInstance();

    public static getInstance() {
        if (!DatasetService.instance) {
            DatasetService.instance = new DatasetService();
        }
        return DatasetService.instance;
    }

    public async getDataSet(id: string) {
        const response = await this.apiService.getById(id);
        
        const responseObject: Array<ICardProps> = [{
            name: "Mean",
            value: `${this.mean(response.values).toFixed(3)}`,
        }, {

            name: "Median",
            value: `${this.median(response.values)}`
        }, {

            name: "Mode",
            value: `${this.mode(response.values)}`
        }]
        return responseObject;
    }

    public async addValue(id: string, value: number) {
        const response = await this.apiService.addNumber(id, value);
        console.log("🚀 ~ file: DatasetService.ts ~ line 35 ~ DatasetService ~ addValue ~ response", response)
        return response;
    }


    public mean(numbers: number[]) {
        return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
    }

    public median(numbers: number[]) {
        const { length } = numbers;

        numbers.sort((a, b) => a - b);

        if (length % 2 === 0) {
            return (numbers[length / 2 - 1] + numbers[length / 2]) / 2;
        }

        return numbers[(length - 1) / 2];
    }

    public mode(numbers: number[]) {
        // as result can be bimodal or multi-modal,
        // the returned result is provided as an array
        // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
        let count = new Array<number>();
        let modes = new Array<number>();
        let i, number, maxIndex = 0;

        for (i = 0; i < numbers.length; i += 1) {
            number = numbers[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }

        for (i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }

        return modes;
    }


}