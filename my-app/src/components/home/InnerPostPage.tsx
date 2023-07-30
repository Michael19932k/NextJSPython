import type { ReactElement } from 'react';
import { ContentPost } from '@/common/types';

type Props = {
  data: ContentPost;
};

export const SinglePage = ({ data }: Props): ReactElement => {
console.log(data,'dataaa')
  if (!data) {
    return <div className="article-preview">No data</div>;
  }

  return (
    <>
        <div>
        <div key={data.id}>
          <div>{data.title}</div>
          <div dangerouslySetInnerHTML={{ __html: data.content }}/>
        </div>
        </div>
    </>
  );
};