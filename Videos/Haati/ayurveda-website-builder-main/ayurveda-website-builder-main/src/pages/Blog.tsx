import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";
import { Calendar, ArrowRight, X, Clock, Tag, User, Share2, Bookmark, Heart } from "lucide-react";
import BlogPopup from "@/components/BlogPopup";

// Enhanced post data with images and detailed content
const posts = [
  {
    id: 1,
    slug: "benefits-of-panchakarma",
    title: "5 Life-Changing Benefits of Panchakarma Therapy",
    excerpt: "Discover how this ancient detoxification therapy can transform your health, boost immunity, and restore vitality naturally.",
    category: "Treatments",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    author: "Dr. Priya Sharma",
    authorTitle: "Senior Ayurvedic Physician",
    image: "https://placehold.co/1200x800?text=Blog+Image",
    herbImage: "https://placehold.co/600x600?text=Herb+Image",
    herbName: "Triphala",
    herbUses: ["Digestive health", "Detoxification", "Immune support"],
    content: `
      <p>Panchakarma is the cornerstone of Ayurvedic healing, offering profound benefits for physical and mental well-being. This comprehensive detoxification therapy removes deep-seated toxins (ama) from the body while restoring balance to the doshas.</p>
      
      <h3>Key Benefits:</h3>
      <ul>
        <li><strong>Deep Detoxification:</strong> Removes accumulated toxins from tissues and cells</li>
        <li><strong>Immune System Boost:</strong> Strengthens natural defense mechanisms</li>
        <li><strong>Stress Reduction:</strong> Calms the nervous system and improves mental clarity</li>
        <li><strong>Metabolic Enhancement:</strong> Improves digestion and nutrient absorption</li>
        <li><strong>Rejuvenation:</strong> Promotes cellular regeneration and vitality</li>
      </ul>
      
      <p>The treatment involves five main procedures: Vamana (therapeutic vomiting), Virechana (purgation), Basti (enema), Nasya (nasal administration), and Raktamokshana (bloodletting), each tailored to individual constitution.</p>
    `,
    tags: ["Panchakarma", "Detox", "Ayurveda", "Wellness"]
  },
  {
    id: 2,
    slug: "ayurvedic-winter-tips",
    title: "Ayurvedic Tips to Stay Healthy This Winter",
    excerpt: "Learn how to balance your doshas during the cold season with warming foods, herbal teas, and Ayurvedic daily routines.",
    category: "Seasonal Health",
    date: "Jan 25, 2026",
    readTime: "4 min read",
    author: "Dr. Rajesh Kumar",
    authorTitle: "Ayurvedic Lifestyle Expert",
      image: "https://placehold.co/1200x800?text=Blog+Image",
    herbImage: "https://placehold.co/600x600?text=Herb+Image",
    herbName: "Tulsi (Holy Basil)",
    herbUses: ["Respiratory health", "Immune support", "Stress relief"],
    content: `
      <p>Winter is the season of Kapha dosha, characterized by cold, damp, and heavy qualities. To maintain health during this time, Ayurveda recommends specific dietary and lifestyle practices.</p>
      
      <h3>Essential Winter Tips:</h3>
      <ul>
        <li><strong>Warming Foods:</strong> Include ginger, garlic, cinnamon, and black pepper in your meals</li>
        <li><strong>Herbal Teas:</strong> Drink tulsi, ginger, or licorice tea to boost immunity</li>
        <li><strong>Oil Massage:</strong> Apply warm sesame oil before bathing to nourish the skin</li>
        <li><strong>Regular Exercise:</strong> Maintain physical activity to keep circulation flowing</li>
        <li><strong>Hydration:</strong> Drink warm water throughout the day</li>
      </ul>
    `,
    tags: ["Winter Health", "Seasonal", "Immunity", "Kapha"]
  },
  {
    id: 3,
    slug: "home-remedies-digestion",
    title: "10 Ayurvedic Home Remedies for Better Digestion",
    excerpt: "Simple, effective home remedies from the Ayurvedic tradition to improve your digestive health and eliminate toxins.",
    category: "Home Remedies",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    author: "Dr. Anjali Mehta",
    authorTitle: "Digestive Health Specialist",
    image: "https://placehold.co/1200x800?text=Blog+Image",
    herbImage: "https://placehold.co/600x600?text=Herb+Image",
    herbName: "Ginger",
    herbUses: ["Digestion", "Nausea relief", "Anti-inflammatory"],
    content: `
      <p>Ayurveda emphasizes the importance of a strong digestive fire (Agni) for overall health. Here are 10 powerful home remedies to enhance your digestion naturally.</p>
      
      <h3>Top 10 Remedies:</h3>
      <ol>
        <li><strong>Ginger Tea:</strong> Fresh ginger with honey before meals</li>
        <li><strong>Cumin Water:</strong> Cumin seeds soaked overnight</li>
        <li><strong>Fennel Seeds:</strong> Chew after meals</li>
        <li><strong>Triphala:</strong> Take before bed</li>
        <li><strong>Warm Lemon Water:</strong> Start your morning with this</li>
        <li><strong>Apple Cider Vinegar:</strong> Dilute in water</li>
        <li><strong>Pomegranate Juice:</strong> Soothes the digestive tract</li>
        <li><strong>Fenugreek Seeds:</strong> Soak and consume</li>
        <li><strong>Asafoetida (Hing):</strong> Add to foods</li>
        <li><strong>Yogurt:</strong> With black salt and roasted cumin</li>
      </ol>
    `,
    tags: ["Digestion", "Home Remedies", "Ayurveda", "Health Tips"]
  },
  {
    id: 4,
    slug: "understanding-doshas",
    title: "Understanding Your Dosha: Vata, Pitta & Kapha",
    excerpt: "A beginner's guide to identifying your Ayurvedic body type and how it influences your health, diet, and lifestyle.",
    category: "Lifestyle",
    date: "Jan 5, 2026",
    readTime: "7 min read",
    author: "Dr. Vikram Singh",
    authorTitle: "Constitutional Medicine Expert",
    image: "https://placehold.co/1200x800?text=Blog+Image",
    herbImage: "https://placehold.co/600x600?text=Herb+Image",
    herbName: "Ashwagandha",
    herbUses: ["Stress relief", "Vitality", "Sleep support"],
    content: `
      <p>Ayurveda recognizes three primary life forces or doshas: Vata (space and air), Pitta (fire and water), and Kapha (earth and water). Understanding your dominant dosha is key to optimal health.</p>
      
      <h3>Identifying Your Dosha:</h3>
      <ul>
        <li><strong>Vata:</strong> Creative, energetic, adaptable - when balanced; anxious, scattered, cold when imbalanced</li>
        <li><strong>Pitta:</strong> Intelligent, focused, courageous - when balanced; irritable, judgmental, overheated when imbalanced</li>
        <li><strong>Kapha:</strong> Calm, loving, strong - when balanced; sluggish, greedy, stagnant when imbalanced</li>
      </ul>
      
      <p>Each dosha requires specific dietary and lifestyle recommendations to maintain balance and promote well-being.</p>
    `,
    tags: ["Doshas", "Ayurveda Basics", "Constitution", "Wellness"]
  },
  {
    id: 5,
    slug: "stress-relief-ayurveda",
    title: "Natural Stress Relief Through Ayurveda",
    excerpt: "Explore Ayurvedic techniques including Shirodhara, Abhyanga, and herbal supplements for managing stress and anxiety.",
    category: "Wellness",
    date: "Dec 20, 2025",
    readTime: "5 min read",
    author: "Dr. Meera Patel",
    authorTitle: "Mental Health & Wellness Expert",
    image: "https://placehold.co/1200x800?text=Blog+Image",
    herbImage: "https://placehold.co/600x600?text=Herb+Image",
    herbName: "Brahmi",
    herbUses: ["Cognitive function", "Stress reduction", "Anxiety relief"],
    content: `
      <p>Modern life brings unprecedented levels of stress, but Ayurveda offers time-tested solutions for mental well-being and stress management.</p>
      
      <h3>Effective Stress Relief Techniques:</h3>
      <ul>
        <li><strong>Shirodhara:</strong> Warm oil poured on the forehead - deeply calming</li>
        <li><strong>Abhyanga:</strong> Daily self-massage with warm oil</li>
        <li><strong>Meditation:</strong> 15-20 minutes of daily practice</li>
        <li><strong>Herbal Supplements:</strong> Ashwagandha, Brahmi, and Jatamansi</li>
        <li><strong>Yoga:</strong> Gentle asanas and pranayama</li>
      </ul>
    `,
    tags: ["Stress Relief", "Mental Health", "Meditation", "Wellness"]
  },
  {
    id: 6,
    slug: "turmeric-healing",
    title: "The Healing Power of Turmeric in Ayurveda",
    excerpt: "Why turmeric is considered the golden spice of Ayurveda and how to incorporate it into your daily wellness routine.",
    category: "Home Remedies",
    date: "Dec 10, 2025",
    readTime: "4 min read",
    author: "Dr. Suresh Reddy",
    authorTitle: "Herbal Medicine Expert",
    image: "https://placehold.co/1200x800?text=Blog+Image",
    herbImage: "https://placehold.co/600x600?text=Herb+Image",
    herbName: "Turmeric (Curcuma)",
    herbUses: ["Anti-inflammatory", "Antioxidant", "Joint health"],
    content: `
      <p>Turmeric (Curcuma longa) has been revered in Ayurveda for thousands of years as a powerful healing herb. Its active compound, curcumin, offers remarkable health benefits.</p>
      
      <h3>Health Benefits of Turmeric:</h3>
      <ul>
        <li><strong>Anti-inflammatory:</strong> Effective for arthritis and joint pain</li>
        <li><strong>Antioxidant:</strong> Protects cells from free radical damage</li>
        <li><strong>Digestive Health:</strong> Supports healthy digestion and gut health</li>
        <li><strong>Brain Health:</strong> May protect against cognitive decline</li>
        <li><strong>Heart Health:</strong> Improves endothelial function</li>
      </ul>
      
      <p>Incorporate turmeric into your diet through golden milk, curries, teas, or supplements for maximum benefit.</p>
    `,
    tags: ["Turmeric", "Anti-inflammatory", "Immunity", "Herbal Medicine"]
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [savedPosts, setSavedPosts] = useState(new Set());

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleSave = (postId) => {
    setSavedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <>
      <title>Ayurvedic Blog | Health Tips & Natural Remedies</title>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Ayurvedic Wisdom for Modern Living
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover ancient healing secrets, herbal remedies, and holistic wellness tips
              to transform your health naturally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card 
                  className="h-full hover:shadow-elevated transition-shadow bg-background group cursor-pointer overflow-hidden"
                  onClick={() => setSelectedPost(post)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-secondary/20">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const img = e.currentTarget;
                        img.onerror = null;
                        img.src = '/images/blog-placeholder.jpg';
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                    
                    {/* Herb Image Overlay */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <img 
                        src={post.herbImage} 
                        alt={post.herbName}
                        className="w-6 h-6 rounded-full object-cover border-2 border-primary"
                        onError={(e) => {
                          const img = e.currentTarget;
                          img.onerror = null;
                          img.src = '/images/herb-placeholder.jpg';
                        }}
                      />
                      <span className="text-white text-xs font-medium">{post.herbName}</span>
                    </div>
                  </div>

                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                      <span className="mx-1">•</span>
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                    
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[10px] bg-primary/5 text-primary px-2 py-0.5 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleLike(post.id); }}
                          className={`text-sm flex items-center gap-1 transition-colors ${
                            likedPosts.has(post.id) ? 'text-red-500' : 'text-muted-foreground hover:text-primary'
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${likedPosts.has(post.id) ? 'fill-red-500' : ''}`} />
                          <span className="hidden sm:inline">Like</span>
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleSave(post.id); }}
                          className={`text-sm flex items-center gap-1 transition-colors ${
                            savedPosts.has(post.id) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                          }`}
                        >
                          <Bookmark className={`h-4 w-4 ${savedPosts.has(post.id) ? 'fill-primary' : ''}`} />
                          <span className="hidden sm:inline">Save</span>
                        </button>
                      </div>
                      <span className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Detail Popup */}
      <AnimatePresence>
        {selectedPost && (
          <BlogPopup 
            post={selectedPost} 
            onClose={() => setSelectedPost(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Blog;