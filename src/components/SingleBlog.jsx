import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../contentfull/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const SingleBlog = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState(null); // Initialize as null

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const entries = await client.getEntries({ content_type: "blogPage" });
                console.log('Fetched Entries:', entries); // Log the fetched entries
                const selectedBlog = entries.items.find(item => item.fields.blogId ===parseInt(id, 10));
                console.log('Selected Blog:', selectedBlog); // Log the selected blog
                if (selectedBlog) {
                    setBlog(selectedBlog.fields); // Set only the fields of the selected blog
                } else {
                    console.log(`No blog found with id: ${id}`);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]); // Include 'id' in the dependency array

    if (loading) return <p>Loading...</p>;
    if (!blog) return <p>No blog found</p>; // Handle case where blog is not found

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden my-8">
            <div className="px-6 py-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{blog.titleOfBlog}</h1>
                <p className="text-sm text-gray-600">{blog.dateOfPublish}</p>
            </div>
            {blog.imageOfBlog && blog.imageOfBlog.fields && blog.imageOfBlog.fields.file &&
                <img src={blog.imageOfBlog.fields.file.url} alt="recipe image" className="w-full h-64 object-cover object-center" />
            }
            <div className="px-6 py-4">
                <div className="text-gray-700 text-base mb-4">
                    {/* {blog.items.fields.description.content && documentToReactComponents(blog.content)} */}
                    {blog.description && documentToReactComponents(blog.description)}

                </div>
            </div>
        </div>
    );
}

export default SingleBlog;

