import { Project } from '@/types/projectType';
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

export const projectsService = {
    // i want to put an id to the function
    useInfiniteProjects(categoryName: string, lang: string = "en") : {
        projects: Project[];
        error: ApiError | undefined;
        isLoading: boolean;
        isValidating: boolean;
        loadMore: () => void;
        hasMore: boolean;
    } {
        const fetcher = async (url: string) => {
            const res = await fetch(url);
            if (!res.ok) throw new Error('Failed to fetch');
            return res.json();
        };
    
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && previousPageData.length < 10) return null; // لا يوجد بيانات أكثر
            const offset = pageIndex * 10;
            return `${API_BASE_URL}/categories/${categoryName}/projects?language_code=${lang}&offset=${offset}`;
        };

        const { data, error, size, setSize, isValidating } = useSWRInfinite(getKey, fetcher, {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            dedupingInterval: 1000 * 60 * 10,
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

    useProject(id: string, lang: string = "en") {
        const fetcher = async (url: string) => {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
            return res.json();
        };

        const { data, error, isLoading } = useSWR(
            `${API_BASE_URL}/projects/${id}?language_code=${lang}`,
            fetcher,
            {
                revalidateOnFocus: false,
                revalidateOnReconnect: true,
                dedupingInterval: 1000 * 60 * 10,
            }
        );

        return { data, error, isLoading };
    },
}; 