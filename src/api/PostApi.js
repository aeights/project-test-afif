import axios from 'axios';
const getPostsPage = async (pageNumber = 1, pageSize = 10, append = []) => {
    const appendString = append.length > 0 ? `&append[]=${append.join('&append[]=')}` : '';

    const url = `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${pageNumber}&page[size]=${pageSize}${appendString}&sort=-published_at`;
    try {
        const { data: res } = await axios.get(url);
        return res;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};
export const fetchData = async (number, size) => {
    const response = await getPostsPage(number, size);
    return response.data;
};