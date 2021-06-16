import {Fragment} from 'react';
import Image from 'next/image';
import {PostItemType} from "../../app/types/app.types";
import Link from "next/link";

interface PostItemProps {
    item: PostItemType
}

const ImagePath = (imageName: string): string => {
    return `/images/posts/${imageName}`;
};
const humanDate=(date:string)=>{
    return new Date(date).toLocaleDateString('fr-FR',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
}
const PostItem: React.FC<PostItemProps> = ({item}) => {
    return (
        <Fragment>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Image className="lg:h-48 md:h-36 w-full object-cover object-center"
                           src={ImagePath(item.image)} alt={item.title} width={400} height={300}/>

                    <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                        <Link href={`/posts/${item.slug}`} >
                            <a>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                            </a>
                        </Link>
                        <p className="leading-relaxed mb-3">{item.excerpt}</p>
                        <div className="flex items-center flex-wrap ">
                            <Link href={`/posts/${item.slug}`}>
                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"/>
                                        <path d="M12 5l7 7-7 7"/>
                                    </svg>
                                </a>
                            </Link>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                   <span>
                       {humanDate(item.date)}
                   </span>
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default PostItem;