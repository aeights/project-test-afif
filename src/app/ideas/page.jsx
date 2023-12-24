"use client"
import PostApi, { fetchData } from '@/api/PostApi';
import HeaderComponent from '@/components/HeaderComponent'
import HeaderPostComponent from '@/components/HeaderPostComponent'
import PaginationPostComponent from '@/components/PaginationPostComponent';
import PostComponent from '@/components/PostComponent'
import axios from 'axios';
import { useEffect, useState } from 'react';

// const getAllPosts = async () => {
//     const { data: res } = await axios.get('https://suitmedia-backend.suitdev.com/api/ideas');
//     return res;
// }

const getPostsPage = async (pageNumber,pageSize ,sort ,append = []) => {
    // Mengonversi array append menjadi string dengan format '&append[]=item1&append[]=item2'
    const appendString = append.length > 0 ? `&append[]=${append.join('&append[]=')}` : '';

    const url = `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${pageNumber}&page[size]=${pageSize}${appendString}&sort=${sort}`;

    try {
        const { data: res } = await axios.get(url);
        return res['data'];
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

function Ideas() {
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sortPost, setSortPost] = useState('-published_at');
    const [posts, setPosts] = useState([]);

    const getData = async () => {
        const postPage = await getPostsPage(pageNumber,pageSize,sortPost);
        setPosts(postPage);
    }

    useEffect(() => {
        getData();
    }, [pageNumber,pageSize,sortPost])

    function formatDate(date) {
        const originalDate = new Date(date);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = originalDate.toLocaleDateString('id-ID', options);
        return formattedDate;
    }
    return (
        <>
            <HeaderComponent image={"bg-[url('/assets/images/ideas1.jpg')]"} title={"Ideas"} subtitle={"Where all our great things begin"} />
            <HeaderPostComponent setSize={setPageSize} show={pageSize} setSort={setSortPost} />
            <div className='grid grid-cols-4 px-32 place-items-center'>
                {posts.map(({ id, title, slug, content, published_at }) =>
                    <PostComponent key={id} image={'/assets/images/ideas1.jpg'} alt={slug} date={formatDate(published_at)} title={title} />
                )}
            </div>
            <PaginationPostComponent page={pageNumber} setPage={setPageNumber} />
        </>
    )
}

export default Ideas