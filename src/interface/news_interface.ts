interface NewsItem {
    title: string;
    date: string;
    description: string;
    link: string;
}

interface NewsResponse {
    status: number;
    message: string;
    data: NewsItem[];
}