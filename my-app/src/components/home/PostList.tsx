import type { ReactElement } from 'react';
import { ContentPost } from '@/common/types';
import Link from 'next/link';

type Props = {
  posts: ContentPost[];
};

export const PostList = ({ posts }: Props): ReactElement => {
  if (posts?.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <div>{post.title}</div>
          <div dangerouslySetInnerHTML={{ __html: post.content }}/>
          <Link href={`/postsList/post?id=${post.id}`}>
        Go to full post {post.title}
        </Link>
        </div>
      ))}
    </>
  );
};