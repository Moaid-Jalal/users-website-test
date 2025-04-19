import useSWR from 'swr';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

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

export const productsService = {
    // i want to put an id to the function
    useProjects(offset: number) {
        const fetcher = async (url: string) => {
            const res = await fetch(url, { credentials: 'include' });
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
            return res.json();
        };

        const { data, error, isLoading } = useSWR(
        `${API_BASE_URL}/projects?offset=${offset}`,
        fetcher,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: true,
            fallbackData: [],
        }
        );

        return { data, error, isLoading };
    },

    useProject(id: string) {
        const fetcher = async (url: string) => {
            const res = await fetch(url, { credentials: 'include' });
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
            return res.json();
        };

        const { data, error, isLoading } = useSWR(
            `${API_BASE_URL}/projects/${id}`,
            fetcher,
            {
                revalidateOnFocus: false,
                revalidateOnReconnect: true,
                fallbackData: [],
            }
        );

        return { data, error, isLoading };
    },
}; 