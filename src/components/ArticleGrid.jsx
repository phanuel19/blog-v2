import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const ArticleGrid = ({ articles = defaultArticles }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Get unique categories from articles
  const categories = [
    "all",
    ...new Set(articles.map((article) => article.category)),
  ];

  // Filter articles based on search query and active category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto py-8 bg-background">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Articles</h2>
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full md:w-auto"
          >
            <TabsList className="w-full md:w-auto overflow-x-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No articles found. Try adjusting your search.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="mb-2">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold line-clamp-2">
                  {article.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" asChild className="w-full">
                  <a href={`/article/${article.id}`}>Read More</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

// Default articles for demonstration
const defaultArticles = [
  {
    id: "1",
    title: "Understanding Anxiety: Causes, Symptoms, and Coping Strategies",
    excerpt:
      "Anxiety disorders are the most common mental health concern in the United States. Learn about the different types of anxiety and effective ways to manage symptoms.",
    imageUrl:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    category: "anxiety",
    date: "May 15, 2023",
  },
  {
    id: "2",
    title: "The Science of Depression: What We Know and What Helps",
    excerpt:
      "Depression affects millions worldwide. This article explores the latest research on depression and evidence-based treatments that can help.",
    imageUrl:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
    category: "depression",
    date: "June 3, 2023",
  },
  {
    id: "3",
    title: "Mindfulness Meditation: A Practical Guide for Beginners",
    excerpt:
      "Mindfulness meditation has been shown to reduce stress and improve mental well-being. Learn how to start a simple practice that can transform your relationship with difficult emotions.",
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    category: "mindfulness",
    date: "April 22, 2023",
  },
  {
    id: "4",
    title: "Building Resilience: How to Bounce Back from Life's Challenges",
    excerpt:
      "Resilience isn't something you're born with—it's a skill that can be developed. Discover practical strategies to build your mental strength and adaptability.",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    category: "resilience",
    date: "July 8, 2023",
  },
  {
    id: "5",
    title: "The Connection Between Physical Exercise and Mental Health",
    excerpt:
      "Regular physical activity can significantly improve mood and reduce symptoms of anxiety and depression. Learn about the mind-body connection and how to create an exercise routine that benefits your mental health.",
    imageUrl:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80",
    category: "wellness",
    date: "March 17, 2023",
  },
  {
    id: "6",
    title: "Supporting a Loved One with Mental Health Challenges",
    excerpt:
      "When someone you care about is struggling with their mental health, knowing how to help can be difficult. This guide provides practical advice for offering support while taking care of your own well-being.",
    imageUrl:
      "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=800&q=80",
    category: "support",
    date: "August 2, 2023",
  },
];

export default ArticleGrid;
