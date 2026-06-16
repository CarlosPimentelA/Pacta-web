import { useQuery } from '@tanstack/react-query';
import { getData } from '../api/axios';

export function useApi<T>(url: string) {
    return useQuery<T, Error>({
        queryKey: [url],
        queryFn: async () => {
            const response = await getData<T>(url);

            if (response.error) {
                throw response.error;
            }
            return response.data as T;
        },
        staleTime: 1000 * 60 * 5,
    });
}