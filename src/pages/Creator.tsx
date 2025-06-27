
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Coffee, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

interface Comment {
  id: string;
  text: string;
  timestamp: Date;
}

const Creator = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleSupportUs = () => {
    // This will redirect to a payment gateway (Stripe, PayPal, etc.)
    window.open('https://buy.stripe.com/your-payment-link', '_blank');
  };

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        text: newComment.trim(),
        timestamp: new Date()
      };
      setComments(prev => [comment, ...prev]);
      setNewComment("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitComment();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl w-full space-y-8">
        <Card className="p-8 glass-effect animate-fade-in">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
            <h1 className="text-3xl md:text-4xl font-bold mb-6 founder-text-gradient">
              A Message from the Creator
            </h1>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Hi there! I'm <strong className="text-founder-red">Aman Tiwari</strong> - Creator of this game and there are more such to come.
            </p>
            
            <p>
              I have a unique way of learning and thus wanted to share, will be posting startup 
              case studies on the way, resources related to startup after each lesson.
            </p>
            
            <p>
              There's too much that this platform will see, join with me to stay together and 
              support me. Thanks for the read.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={handleSupportUs}
              size="lg"
              className="founder-gradient text-white text-xl px-12 py-6 rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              <Coffee className="w-6 h-6 mr-3" />
              Support Us
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              Help us create more amazing learning experiences
            </p>
          </div>
        </Card>

        {/* Comments Section */}
        <Card className="p-6 glass-effect">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-6 h-6 text-founder-red" />
            <h2 className="text-2xl font-bold founder-text-gradient">Open Chat</h2>
            <span className="text-sm text-gray-500 ml-2">Anonymous comments</span>
          </div>

          {/* Comment Input */}
          <div className="mb-6">
            <div className="flex gap-3">
              <Textarea
                placeholder="Share your thoughts anonymously..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 min-h-[80px] resize-none"
                maxLength={500}
              />
              <Button
                onClick={handleSubmitComment}
                disabled={!newComment.trim()}
                className="self-end founder-gradient text-white hover:scale-105 transition-transform duration-200"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {newComment.length}/500 characters • Press Enter to post
            </p>
          </div>

          {/* Comments Display */}
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {comments.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No comments yet. Be the first to share your thoughts!</p>
              </div>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-white/50 rounded-lg p-4 border border-gray-200/50 animate-fade-in"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-medium text-founder-red">Anonymous</span>
                    <span className="text-xs text-gray-500">
                      {comment.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {comment.text}
                  </p>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Creator;
