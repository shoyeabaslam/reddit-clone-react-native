import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Text, View } from "react-native"
import PostCard from "../../components/PostCard";


interface Author {
    name: string;
    avatarUrl: string;
    // Add any other fields relevant to the author object
}

interface Comment {
    userId: string;
    content: string;
    createdAt: string;
    // Add any other fields relevant to the comment object
}

export interface Post {
    author: Author[];
    comments: Comment[];
    community: string;
    content: string;
    createdAt: string;
    id: number;
    images: string[];
    likes: number;
    title: string;
}


const HomeScreen = () => {
    const [homeScreenPosts, setHomeScreenPosts] = useState<Post[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [totalPosts, setTotalPosts] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false)
    const pageSize = 4;

    const fetchPosts = async (currentPage = 1) => {
        setIsLoading(true);
        const res = await fetch(`http://localhost:3000/posts?_page=${currentPage}&_per_page=${pageSize}`)
        const data: { data: [], pages: number, items: number } = await res.json();
        console.log(data.data.length)
        setHomeScreenPosts(prev => [...prev, ...data.data])
        setTotalPages(data.items)
        setCurrentPage(currentPage);
        setIsLoading(false)
    }

    const loadMorePosts = () => {
        if (homeScreenPosts.length >= totalPages) {
            console.log(homeScreenPosts.length);
            console.log(totalPages);
        }
        else if (currentPage < totalPages) {
            fetchPosts(currentPage + 1);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <View>
            <FlatList
                data={homeScreenPosts}
                renderItem={({ item }) => (<PostCard item={item} />)}
                keyExtractor={(item: Post) => item.id.toString()}
                onEndReachedThreshold={0.5}
                onEndReached={loadMorePosts}
            />
            {
                isLoading && <ActivityIndicator />
            }
        </View>
    )
}

export default HomeScreen