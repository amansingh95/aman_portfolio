import React from 'react';
import Link from "next/link";
import Layout from "../components/Layout";

const index = () => {
    return (
        <Layout title="Home">
            <Link href="/about">About Us</Link>
           <h1> hi next()</h1>
        </Layout>
    )
}

export default index
