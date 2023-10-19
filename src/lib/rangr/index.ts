import axios from 'axios';

export default async (url: string, method: string, payload: any): Promise<any> => {
    try {
        return await axios({
            url,
            method,
            data: payload
        });
    } catch (e) {
        console.log('error', e);
    }
}
