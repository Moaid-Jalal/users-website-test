import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';

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
    useInfiniteProjects() {
        const fetcher = async (url: string) => {
        const res = await fetch(url, { credentials: 'include' });
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
        };
    
        const getKey = (pageIndex: number, previousPageData: any) => {
        if (previousPageData && previousPageData.length < 10) return null; // لا يوجد بيانات أكثر
        const offset = pageIndex * 10;
        return `${API_BASE_URL}/projects?offset=${offset}`;
        };
    
        const { data, error, size, setSize, isValidating } = useSWRInfinite(getKey, fetcher, {
        revalidateOnFocus: false,
        });
    
        return {
        projects: data ? data.flat() : [],
        error,
        isLoading: !data && !error,
        isValidating,
        loadMore: () => setSize(size + 1),
        hasMore: data ? data[data.length - 1]?.length === 10 : false,
        };
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