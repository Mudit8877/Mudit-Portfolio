import path from 'path';
import { Fragment } from 'react';
import UsesTitle from './uses-title';

// const contentPath = path.join(process.cwd(), 'app', 'uses', 'content.mdx');

export const metadata = {
  title: 'Skills',
  description: 'What I use',
};

export default function Page() {
  return (
    <Fragment>
      <UsesTitle />
    </Fragment>
  );
}
