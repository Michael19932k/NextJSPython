import type { ReactElement } from 'react';
import { ContentPost, PostsResponse } from '@/common/types';
import { PostList } from '@/src/components/home/PostList';

const fetchStuff = async (): Promise<ContentPost[]> => {
  const data = await fetch('http://localhost:8000/get_posts');
  const response: PostsResponse = await data.json();
  return response.data; // Extract the 'data' property and return it as ContentPost[]
};

const PostsList = async (): Promise<ReactElement> => {
  const postData = await fetchStuff();


  return <PostList posts={postData} />;
};

export default PostsList;