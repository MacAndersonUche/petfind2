import axios, {AxiosResponse, AxiosError} from 'axios';

 const getRandomPet = async () => {
    try {
        const {data, status} = await axios.get(`https://api.thecatapi.com/v1/images/search`) as AxiosResponse;

        return {data, status};
    } catch (error) {
        console.log(error);
        
        return {
            data: null,
            status: (error as AxiosError).response?.status || 500
        };
    }
};


export default getRandomPet;