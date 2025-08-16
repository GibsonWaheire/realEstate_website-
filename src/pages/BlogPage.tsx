import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Search, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blogPosts';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-luxury-navy via-luxury-navy-light to-luxury-navy py-16 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Floating decorative elements */}
        <div className="absolute left-8 top-16 size-16 rounded-full bg-luxury-gold/20 animate-float" />
        <div className="absolute bottom-24 right-20 size-12 rounded-full bg-white/10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute right-16 top-1/3 size-8 rounded-full bg-luxury-gold/30 animate-float" style={{ animationDelay: '4s' }} />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            LuxEstates Insights
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Expert insights, market trends, and luxury real estate knowledge from our team of specialists
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-luxury-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-luxury-gray" />
                <Input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-luxury-gray/30 focus:border-luxury-gold"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "gold" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full capitalize"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <p className="text-luxury-gray mb-8">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {!searchTerm && selectedCategory === 'all' && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-luxury-navy mb-8 text-center">
                Featured Article
              </h2>
              
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.featuredImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-luxury-gold text-luxury-navy font-semibold">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-luxury-gray">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime} min read
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-luxury-navy mb-4 line-clamp-2">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-luxury-gray mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-luxury-navy text-sm">
                            {featuredPost.author.name}
                          </p>
                          <p className="text-luxury-gray text-xs">
                            {featuredPost.author.title}
                          </p>
                        </div>
                      </div>
                      
                      <Button
                        asChild
                        variant="gold"
                        size="sm"
                        className="rounded-full group"
                      >
                        <Link to={`/blog/${featuredPost.slug}`}>
                          <span className="mr-2">Read Article</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {!searchTerm && selectedCategory === 'all' && (
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-luxury-navy mb-8 text-center">
                Recent Articles
              </h2>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm || selectedCategory !== 'all' ? filteredPosts : recentPosts).map((post, index) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-luxury-gold text-luxury-navy font-semibold">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-4 mb-3 text-xs text-luxury-gray">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime} min
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-serif font-bold text-luxury-navy line-clamp-2 group-hover:text-luxury-gold transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-luxury-gray text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs text-luxury-gold border-luxury-gold/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="text-luxury-navy text-xs font-medium">
                          {post.author.name}
                        </span>
                      </div>
                      
                      <Button
                        asChild
                        variant="link"
                        size="sm"
                        className="text-luxury-gold hover:text-luxury-gold-dark p-0 h-auto group"
                      >
                        <Link to={`/blog/${post.slug}`}>
                          <span className="mr-1">Read More</span>
                          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {filteredPosts.length > 6 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white"
                >
                  Load More Articles
                </Button>
              </div>
            )}

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-luxury-gray mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold text-luxury-navy mb-2">No articles found</h3>
                <p className="text-luxury-gray mb-6">
                  Try adjusting your search terms or browse all categories
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  variant="gold"
                  size="lg"
                  className="rounded-full"
                >
                  View All Articles
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-luxury-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-luxury-navy mb-4">
              Stay Updated with Market Insights
            </h2>
            <p className="text-luxury-gray mb-8">
              Get the latest luxury real estate trends, investment tips, and market analysis delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 border-luxury-gray/30 focus:border-luxury-gold"
              />
              <Button
                variant="gold"
                size="lg"
                className="rounded-full px-8"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-luxury-gray mt-4">
              No spam, unsubscribe at any time. Privacy policy applies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
