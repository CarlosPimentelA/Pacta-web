import { ApiResponse } from '@/types';
import { getToken } from '@clerk/nextjs';
import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // Asegúrate de usar NEXT_PUBLIC_
});

api.interceptors.request.use(async (config) => {
    try {
        const token = await getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    } catch (error) {
        console.error("Error obteniendo el token de Clerk:", error);
    }

    return config;
});

export const getData = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
    try {
        const response = await api.get<T>(endpoint);
        return { data: response.data, error: null, loading: false };
    } catch (error) {
        console.error("Error en la solicitud:", error);
        return { data: null, error, loading: false };
    }
}