// src/pages/BlogPage.jsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { fetchBlog } from "@/components/ui/fetchBlogs";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlog().then((data) => {
      const formatted = data.map((row) => ({
        id: row.ID,
        title: row.Title,
        image: row.ImageURL,
        category: row.Category,
        content: row.Content,
        author: row.Author,
        date: row.Date,
      }));
      setBlogPosts(formatted);
    });
  }, []);

  const categories = [
    "All",
    "Investment Tips",
    "Market Analysis",
    "Financial Planning",
    "Education",
    "Tax Planning",
    "Retirement",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Mutual Fund Insights & Tips
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert advice, market insights, and investment strategies from
              Chennai's most trusted mutual fund distributor.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {blogPosts.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Loading latest blogs...
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border-0 bg-card"
                  >
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <div className="text-6xl font-bold text-primary/20">
                            {post.id}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p
                        className="text-muted-foreground text-sm mb-4 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      ></p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {post.readTime || "2 min read"}
                        </span>
                        <Link to={`/blog/${post.id}`}>
                          <Button variant="ghost" className="group-hover:text-primary">
                            Read More <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get expert mutual fund tips
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-2 border-white/20 bg-white/10 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-white/40"
              />
              <Button className="bg-white text-primary hover:bg-white/90 shadow-xl rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
