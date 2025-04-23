import useSWR from 'swr';


import { API_BASE_URL } from "@/app/config/apiUrl";
import { Category } from "@/app/types/categories";


export class ApiError extends Error {
    data: any;

    constructor(error: string | any) {
        super(typeof error === "string" ? error : error.message);
        this.name = "ApiError";

        if (typeof error !== "string" && error) {
            this.data = error;
        }
    }
}

export const categoriesService = {
    useCategories() : {
        data: Category[] | undefined;
        error: Error | undefined;
        isLoading: boolean;
        refetch: () => void;
    } {
        const fetcher = async (url: string) => {
            const res = await fetch(url, { credentials: 'include' });
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
            return res.json();
        };

        const { data, error, isLoading, mutate} = useSWR(
            `${API_BASE_URL}/categories`,
            fetcher,
            {
                revalidateOnFocus: false,
                revalidateOnReconnect: true,
                dedupingInterval: 1000 * 60 * 10,
            }
        );

        return {
            data,
            error,
            isLoading,
            refetch: () => mutate(),
        };
    },
}