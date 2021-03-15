import React from 'react';
import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {
    const router = useRouter();

    /**
     * Router.pathname, router.query dynamic acses s from backend.
     * Send request  so some backend server to fetch the piece of data with
     * an id of router.query.projectid.
     */
    console.log(router.pathname);
    console.log(router.query);

    return (
        <div>
            <h1>The Portfolio Project Page</h1>
        </div>
    );
};

export default PortfolioProjectPage;
