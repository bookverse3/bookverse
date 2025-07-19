'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, MoreVertical, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Comment, bookComments } from '@/lib/data';

interface CommentsSectionProps {
  commentCount: number;
}

export function CommentsSection({ commentCount }: CommentsSectionProps) {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>(bookComments);

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        user: 'You',
        avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
        content: newComment,
        likes: 0,
        timeAgo: 'Just now'
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const handleLikeComment = (commentId: string) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  return (
    <div className="space-y-6">
      {/* Comments Header */}
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {commentCount.toLocaleString()} Comments
        </h3>
        <select className="text-sm text-gray-600 dark:text-gray-400 bg-transparent border-none outline-none cursor-pointer">
          <option>Sort by</option>
          <option>Top comments</option>
          <option>Newest first</option>
        </select>
      </div>

      {/* Add Comment */}
      <div className="flex gap-3">
        <Avatar className="h-10 w-10 flex-shrink-0">
          <AvatarImage src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-3">
          <Textarea
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[80px] resize-none border-b-2 border-gray-200 dark:border-gray-700 rounded-none bg-transparent p-0 focus:border-purple-500 dark:focus:border-purple-400"
          />
          <div className="flex items-center justify-end gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setNewComment('')}
              disabled={!newComment.trim()}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={handleSubmitComment}
              disabled={!newComment.trim()}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Comment
            </Button>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <Avatar className="h-10 w-10 flex-shrink-0">
              <AvatarImage src={comment.avatar} />
              <AvatarFallback>{comment.user.slice(0, 2)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm text-gray-900 dark:text-white">
                  {comment.user}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {comment.timeAgo}
                </span>
              </div>
              
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-3 leading-relaxed">
                {comment.content}
              </p>
              
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLikeComment(comment.id)}
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-0"
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span className="text-xs">{comment.likes || ''}</span>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-0"
                >
                  <ThumbsDown className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-0"
                >
                  Reply
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 ml-auto"
                >
                  <MoreVertical className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}