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

export const aboutUsService = {
    useAboutUs(lang: string = "en") {
        const fetcher = async (url: string) => {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
            return res.json();
        };

        const { data, error, isLoading } = useSWR(
            `${API_BASE_URL}/aboutus?language_code=${lang}`,
            fetcher,
            {
                revalidateOnFocus: false,
                revalidateOnReconnect: false,
                refreshInterval: 0,
                dedupingInterval: 1000 * 60 * 60 * 24 * 365 * 100, // 100 سنة
                fallbackData: [], // لو عندك بيانات أولية
            }
        );

        return { data, error, isLoading };
    },
};
