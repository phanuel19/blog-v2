import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import ArticleGrid from "./ArticleGrid";
import { Heart, MessageCircle, Search } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-10 w-full bg-background border-b border-border py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Mental Health Blog</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/articles"
            className="text-foreground hover:text-primary transition-colors"
          >
            Articles
          </Link>
          <Link
            to="/testimonials"
            className="text-foreground hover:text-primary transition-colors"
          >
            Testimonials
          </Link>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Welcome to Our Mental Health Community
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            A safe space to learn, share, and grow together on the journey to
            better mental wellbeing. Explore our resources, read personal
            stories, and join our supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <MessageCircle className="h-5 w-5" />
              Share Your Story
            </Button>
            <Button variant="outline" size="lg">
              Explore Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Our Mission
          </h2>
          <Card>
            <CardContent className="p-6 md:p-8">
              <p className="text-lg leading-relaxed">
                We believe that mental health is just as important as physical
                health. Our mission is to break the stigma surrounding mental
                health issues by providing reliable information, sharing
                personal experiences, and fostering a supportive community where
                everyone feels heard and understood. Through education and
                compassion, we aim to empower individuals to take control of
                their mental wellbeing and seek help when needed.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Featured Articles
            </h2>
            <Link to="/articles" className="text-primary hover:underline">
              View All
            </Link>
          </div>
          <ArticleGrid />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Join Our Community
          </h2>
          <p className="text-lg mb-8">
            Share your experiences, read others' stories, and become part of our
            supportive community.
          </p>
          <Link to="/testimonials">
            <Button size="lg">Share Your Story</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 lg:px-24 bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Heart className="h-5 w-5 text-primary" />
            <span className="font-semibold">Mental Health Blog</span>
          </div>
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              to="/articles"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Articles
            </Link>
            <Link
              to="/testimonials"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mental Health Blog. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
