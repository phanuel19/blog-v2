import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle } from "lucide-react";

interface Testimonial {
  id: string;
  title: string;
  content: string;
  date: string;
  tags?: string[];
}

const TestimonialsPage = () => {
  // Mock testimonials data
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: "1",
      title: "Finding Hope in Therapy",
      content:
        "After struggling with anxiety for years, I finally decided to seek help. The journey hasn't been easy, but therapy has given me tools to manage my thoughts and emotions. I'm sharing this because I want others to know they're not alone.",
      date: "2023-05-15",
      tags: ["Anxiety", "Therapy"],
    },
    {
      id: "2",
      title: "My Journey with Depression",
      content:
        "Depression made me feel like I was drowning while everyone around me was breathing. It took time, but with support and treatment, I've found ways to stay afloat. Some days are still hard, but there's always hope.",
      date: "2023-06-22",
      tags: ["Depression", "Recovery"],
    },
    {
      id: "3",
      title: "Breaking the Stigma",
      content:
        "I hid my mental health struggles for years because I was afraid of judgment. Now I realize that speaking openly helps not only me but others who might be suffering in silence. Mental health is health, period.",
      date: "2023-07-10",
      tags: ["Stigma", "Awareness"],
    },
  ]);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create new testimonial
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      title: formData.title,
      content: formData.content,
      date: new Date().toISOString().split("T")[0],
      tags: formData.tags
        ? formData.tags.split(",").map((tag) => tag.trim())
        : [],
    };

    // Add to testimonials list
    setTestimonials((prev) => [newTestimonial, ...prev]);

    // Reset form and show success message
    setFormData({ title: "", content: "", tags: "" });
    setIsSubmitted(true);

    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">Testimonials</h1>
        <p className="text-muted-foreground text-center mb-12">
          Read stories from our community and share your own experience
          anonymously
        </p>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Community Stories</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10">
                        {testimonial.title.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">
                      {testimonial.title}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    {new Date(testimonial.date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.tags?.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Submission Form Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Share Your Story</h2>
          <Card>
            <CardHeader>
              <CardTitle>Submit Anonymously</CardTitle>
              <CardDescription>
                Your story can help others feel less alone. No personal
                information will be collected.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="bg-green-50 p-4 rounded-md flex items-center gap-3 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  <p>
                    Thank you for sharing your story! It has been added
                    anonymously.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium"
                    >
                      Title
                    </label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Give your story a title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="content"
                      className="block text-sm font-medium"
                    >
                      Your Story
                    </label>
                    <Textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      placeholder="Share your experience..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="tags" className="block text-sm font-medium">
                      Tags (optional)
                    </label>
                    <Input
                      id="tags"
                      name="tags"
                      value={formData.tags}
                      onChange={handleChange}
                      placeholder="Anxiety, Depression, Recovery (separate with commas)"
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full md:w-auto">
                      Submit Your Story
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      By submitting, you agree that your story may be shared on
                      this blog. No personally identifiable information will be
                      stored or displayed.
                    </p>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default TestimonialsPage;
