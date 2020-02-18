import React from 'react';
import { Link } from '../components/Link';

function contactPage() {
    return (
        <>
            <h1>contact page</h1>
            <Link>Click me</Link>
        </>

    )
}

contactPage.getInitialProps = async ({query}) => {
    console.log(query);
      return {};
};

export default contactPage;