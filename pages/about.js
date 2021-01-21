import React from 'react'
import Link from "next/link";
import Layout from "../components/Layout";

const about = () => {
    return (
        <Layout title="About">
            <h1>About Us</h1>
            <Link href="/"> Go TO Home</Link>
            <p>A JavaScript Progmmer</p>
            <img src="/static/javascript-logo.jpeg" alt="js" height="200" />
        </Layout>
    )
}

export default about
