// src/pages/BlogDetails.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchBlogs } from "@/components/ui/fetchBlogs";

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchBlogs().then((data) => {
      const found = data.find((item) => item.ID === id || item.ID === Number(id));
      setPost(found);
    });
  }, [id]);

  if (!post)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading blog details...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-24">
        <Link to="/blogs">
          <Button variant="ghost" className="mb-6 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Image */}
          {post.ImageURL && (
            <img
              src={post.ImageURL}
              alt={post.Title}
              className="w-full h-80 object-cover rounded-xl mb-8 shadow-lg"
            />
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">{post.Title}</h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.Date}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" /> {post.Author}
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: post.Content }}
          ></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetails;
