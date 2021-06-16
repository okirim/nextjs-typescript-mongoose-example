import React from 'react';
import {Fragment} from 'react';
import Link from "next/link";
import PostItem from "../posts/post-item";
import {dummyPosts} from "../../data/dummy-data";
import {PostItemType} from "../../app/types/app.types";

function PostsList() {

    return (
        <Fragment>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {dummyPosts.map((item:PostItemType)=>(
                            <PostItem item={item} key={item.slug}  />
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
);
}

export default PostsList;