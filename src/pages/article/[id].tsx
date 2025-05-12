import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Share2,
  ThumbsUp,
  MessageSquare,
  Bookmark,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ArticleData {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedDate: string;
  category: string[];
  isVideo?: boolean;
  videoUrl?: string;
  imageUrl?: string;
}

interface RelatedArticle {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  views: string;
  publishedDate: string;
}

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data - in a real app, this would be fetched based on the ID
  const article: ArticleData = {
    id: id || "1",
    title: "Understanding Anxiety: Causes, Symptoms, and Coping Strategies",
    content: `
      <p>Anxiety is a normal and often healthy emotion. However, when a person regularly feels disproportionate levels of anxiety, it might become a medical disorder.</p>
      
      <p>Anxiety disorders form a category of mental health diagnoses that lead to excessive nervousness, fear, apprehension, and worry. These disorders alter how a person processes emotions and behaves, also causing physical symptoms. Mild anxiety might be vague and unsettling, while severe anxiety may seriously affect day-to-day living.</p>
      
      <h2>Common Symptoms of Anxiety</h2>
      <ul>
        <li>Feeling nervous, restless or tense</li>
        <li>Having a sense of impending danger, panic or doom</li>
        <li>Having an increased heart rate</li>
        <li>Breathing rapidly (hyperventilation)</li>
        <li>Sweating</li>
        <li>Trembling</li>
        <li>Feeling weak or tired</li>
        <li>Trouble concentrating or thinking about anything other than the present worry</li>
      </ul>
      
      <h2>Coping Strategies</h2>
      <p>While anxiety disorders are serious mental health conditions, they're also highly treatable. Some effective strategies include:</p>
      
      <ul>
        <li><strong>Therapy:</strong> Cognitive-behavioral therapy (CBT) is particularly effective for anxiety disorders</li>
        <li><strong>Medication:</strong> Anti-anxiety medications and antidepressants can help manage symptoms</li>
        <li><strong>Lifestyle changes:</strong> Regular exercise, adequate sleep, and avoiding caffeine and alcohol can reduce anxiety symptoms</li>
        <li><strong>Relaxation techniques:</strong> Deep breathing, meditation, and yoga can help manage anxiety</li>
        <li><strong>Support groups:</strong> Connecting with others facing similar challenges can provide validation and perspective</li>
      </ul>
    `,
    author: {
      name: "Dr. Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    publishedDate: "May 15, 2023",
    category: ["Anxiety", "Mental Health", "Self-Care"],
    imageUrl:
      "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&q=80",
  };

  // Mock related articles
  const relatedArticles: RelatedArticle[] = [
    {
      id: "2",
      title: "Meditation Techniques for Anxiety Relief",
      imageUrl:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
      category: "Anxiety",
      views: "3.2k",
      publishedDate: "2 weeks ago",
    },
    {
      id: "3",
      title: "The Connection Between Sleep and Mental Health",
      imageUrl:
        "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&q=80",
      category: "Sleep",
      views: "1.8k",
      publishedDate: "1 month ago",
    },
    {
      id: "4",
      title: "How to Support Someone with Depression",
      imageUrl:
        "https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?w=400&q=80",
      category: "Depression",
      views: "5.4k",
      publishedDate: "3 weeks ago",
    },
    {
      id: "5",
      title: "Recognizing Signs of Burnout",
      imageUrl:
        "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&q=80",
      category: "Burnout",
      views: "2.7k",
      publishedDate: "5 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
          </Button>
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content - 70% width on desktop */}
          <div className="lg:w-[70%]">
            {/* Article header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  {article.author.avatar ? (
                    <AvatarImage
                      src={article.author.avatar}
                      alt={article.author.name}
                    />
                  ) : (
                    <AvatarFallback>
                      {article.author.name.charAt(0)}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <p className="font-medium">{article.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {article.publishedDate}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {article.category.map((cat) => (
                  <Badge key={cat} variant="secondary">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Featured image */}
            {article.imageUrl && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Video embed if it's a video article */}
            {article.isVideo && article.videoUrl && (
              <div className="mb-8 aspect-video">
                <iframe
                  src={article.videoUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={article.title}
                ></iframe>
              </div>
            )}

            {/* Article content */}
            <div
              className="prose max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Engagement buttons */}
            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" /> Like
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" /> Comment
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="mr-2 h-4 w-4" /> Save
              </Button>
            </div>
          </div>

          {/* Sidebar with related content - 30% width on desktop */}
          <div className="lg:w-[30%]">
            <div className="sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Related Articles</h2>

              <div className="space-y-4">
                {relatedArticles.map((related) => (
                  <Link to={`/article/${related.id}`} key={related.id}>
                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={related.imageUrl}
                          alt={related.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-3">
                        <h3 className="font-medium line-clamp-2">
                          {related.title}
                        </h3>
                        <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {related.category}
                          </Badge>
                          <span>{related.views} views</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {related.publishedDate}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-2">Categories</h3>
                <Separator className="mb-4" />
                <div className="space-y-2">
                  {[
                    "Anxiety",
                    "Depression",
                    "Mindfulness",
                    "Self-Care",
                    "Therapy",
                    "Stress Management",
                  ].map((category) => (
                    <Link
                      to={`/category/${category.toLowerCase()}`}
                      key={category}
                      className="flex items-center justify-between p-2 hover:bg-accent rounded-md transition-colors"
                    >
                      <span>{category}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
