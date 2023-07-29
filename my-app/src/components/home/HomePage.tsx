import type { ReactElement } from 'react';
import { HpData } from '@/common/types';

type Props = {
  data: HpData;
};

export const HomePage = ({ data }: Props): ReactElement => {

  if (!data) {
    return <div className="article-preview">No data</div>;
  }

  return (
    <>
        <div>
          <div dangerouslySetInnerHTML={{ __html: data.headline }}/>
        </div>
    </>
  );
};