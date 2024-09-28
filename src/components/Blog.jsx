import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../contentfull/client';

const Loader = React.lazy(() => import('../components/Loader'));

const BlogPage = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const entries = await client.getEntries({ content_type: "blogPage" });
        setBlogs(entries.items);
        console.log(entries);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-gray-100 min-h-screen mg-3 ml-5 p-3">
          <div className="container mx-auto py-8 px-3">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">CheckOut The Blogs!!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs.map((item, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img src={item.fields.imageOfBlog.fields.file.url} alt="Blog Post" className="w-full h-40 object-cover object-center" />
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{item.fields.titleOfBlog}</h2>
                    <p className="text-gray-700">{item.fields.displayTitle}</p>
                    <Link to={`/blog/${item.fields.blogId}`}>
                    {/* <Link to={`/blog?blogId=${item.fields.blogId}`}> */}
                      <button className="mt-4 inline-block bg-[#3B5704] hover:bg-slate-400 text-white font-bold py-2 px-4 rounded">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Suspense>
  );
}

export default BlogPage;



