import path from 'path';
import { Fragment, Suspense } from 'react';
import Occupation from './occupation';

// const contentPath = path.join(process.cwd(), 'app', 'about', 'content.mdx');

export const metadata = {
  title: 'About',
  description: 'About Mudit Singh',
};

export default function Page() {
  return (
    <Fragment>
      <Occupation />
      <Suspense fallback="loading..">
      </Suspense>
    </Fragment>
  );
}
