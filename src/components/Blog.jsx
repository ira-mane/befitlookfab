// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { client } from '../contentfull/client';

// const BlogPage = () => {
//   const [loading, setLoading] = useState(true);
//   const [blogs, setBlogs] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const entries = await client.getEntries({ content_type: "blogPage" })
//         setBlogs(entries.items)
//         console.log(entries);
//       } catch (err) {
//         console.log(err)
//       }
//     };
//     fetchData();
//   }, [loading]);
//   if (loading) return <p>Loading...</p>
//   return (
//     <div className="bg-gray-100 min-h-screen mg-3 ml-5 p-3">
//       <div className="container mx-auto py-8 px-3">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8">Latest Blog Posts</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {/* Sample Blog Post Card */}
//           {blogs.map((item,index)=>{
//             console.log(item.fields);
//             return(
//           <div className="bg-white rounded-lg overflow-hidden shadow-md">
//             <img src="https://via.placeholder.com/600x400" alt="Blog Post" className="w-full h-40 object-cover object-center" />
//             <div className="p-6">

//               <h2 className="text-xl font-bold text-gray-800 mb-2">{item.fields.titleOfBlog}</h2>
//               <p className="text-gray-700">{item.fields.displayTitle}</p>
//               <Link to='/1'>
//                 <button className='mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"'>Read More</button>
//               </Link>
//             </div>
//           </div>
//           );
//         })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogPage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../contentfull/client';

const BlogPage = () => {
  const [loading, setLoading] = useState(false); // Corrected initial state
  const [blogs, setBlogs] = useState([]); // Corrected initial state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state to true when fetching data
      try {
        const entries = await client.getEntries({ content_type: "blogPage" });
        setBlogs(entries.items);
        console.log(entries);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // Set loading state back to false when data fetching completes
      }
    };

    fetchData();
  }, []); // Removed 'loading' from dependency array to prevent infinite loop

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen mg-3 ml-5 p-3">
      <div className="container mx-auto py-8 px-3">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Latest Blog Posts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((item, index) => (
            
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={item.fields.imageOfBlog.fields.file.url} alt="Blog Post" className="w-full h-40 object-cover object-center" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{item.fields.titleOfBlog}</h2>
                <p className="text-gray-700">{item.fields.displayTitle}</p>
                <Link to={`/blog/${item.fields.blogId}`}>
                  <button className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;

