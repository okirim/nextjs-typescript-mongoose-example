import React from 'react';
import PostsList from "../../components/home-page/posts-list";
import Hero from "../../components/home-page/Hero";

function PostsPage() {
    return (
        <div>
            <Hero/>
            <PostsList/>
        </div>
    );
}

export default PostsPage;