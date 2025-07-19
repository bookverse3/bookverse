export interface Book {
  id: string;
  title: string;
  author: string;
  channel: string;
  channelAvatar: string;
  subscribers: string;
  views: string;
  uploadDate: string;
  readingTime: string;
  cover: string;
  category: string;
  rating: number;
  likes: number;
  dislikes: number;
  comments: number;
  description: string;
  progress?: number;
}

export interface Comment {
  id: string;
  user: string;
  avatar: string;
  content: string;
  likes: number;
  timeAgo: string;
  replies?: Comment[];
}

export const trendingBooks: Book[] = [
  {
    id: 'secret-garden',
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    channel: 'Classic Literature',
    channelAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    subscribers: '156K',
    views: '156.7K',
    uploadDate: '2023-11-25',
    readingTime: '11:40',
    cover: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    category: 'Classic',
    rating: 4.8,
    likes: 7835,
    dislikes: 124,
    comments: 947,
    description: 'Welcome to my channel! I\'m Sarah, and I love sharing my passion for books. Join me as I explore new releases, classics, and everything in between. Don\'t forget to subscribe for more bookish content!',
    progress: 50
  },
  {
    id: 'top-ebooks-2023',
    title: 'Top 10 Ebooks of 2023',
    author: 'BookTube Editorial',
    channel: 'BookTube Editorial',
    channelAvatar: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    subscribers: '500K',
    views: '892K',
    uploadDate: '2023-12-15',
    readingTime: '45',
    cover: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    category: 'Ebooks',
    rating: 4.9,
    likes: 15420,
    dislikes: 231,
    comments: 1205,
    description: 'Our comprehensive review of the year\'s best digital reads, curated by our editorial team.',
    progress: 0
  },
  {
    id: 'author-interviews-modern',
    title: 'Author Interviews: Modern Writers',
    author: 'Various Authors',
    channel: 'Literary Voices',
    channelAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    subscribers: '89.4K',
    views: '89.4K',
    uploadDate: '2023-12-10',
    readingTime: '60',
    cover: 'https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    category: 'Interviews',
    rating: 4.7,
    likes: 4470,
    dislikes: 89,
    comments: 623,
    description: 'In-depth conversations with today\'s most influential writers, exploring their creative processes and inspiration.',
    progress: 0
  },
  {
    id: 'literary-discussions',
    title: 'Literary Discussions: Classic vs Modern',
    author: 'Dr. Sarah Johnson',
    channel: 'Academic Reads',
    channelAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    subscribers: '67.2K',
    views: '67.2K',
    uploadDate: '2023-12-05',
    readingTime: '35',
    cover: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    category: 'Literature',
    rating: 4.6,
    likes: 3360,
    dislikes: 156,
    comments: 512,
    description: 'A thoughtful analysis comparing classical literature with contemporary works.',
    progress: 0
  },
  {
    id: 'fantasy-reviews',
    title: 'Book Reviews: Fantasy Edition',
    author: 'Fantasy Realm',
    channel: 'Fantasy Realm',
    channelAvatar: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    subscribers: '203.5K',
    views: '203.5K',
    uploadDate: '2023-12-01',
    readingTime: '50',
    cover: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    category: 'Fantasy',
    rating: 4.9,
    likes: 10175,
    dislikes: 203,
    comments: 891,
    description: 'Exploring the latest and greatest in fantasy literature, from epic adventures to magical realism.',
    progress: 0
  },
  {
    id: 'writing-masterclass',
    title: 'Writing Masterclass: Crafting Stories',
    author: 'Writing Mentors',
    channel: 'Writing Academy',
    channelAvatar: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    subscribers: '145K',
    views: '267K',
    uploadDate: '2023-11-28',
    readingTime: '90',
    cover: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    category: 'Writing',
    rating: 4.8,
    likes: 8945,
    dislikes: 178,
    comments: 1024,
    description: 'Learn the fundamentals of storytelling from published authors and writing experts.',
    progress: 0
  }
];

export const bookComments: Comment[] = [
  {
    id: '1',
    user: 'Ethan Clark',
    avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
    content: 'This review was so insightful! I\'ve always wanted to read \'The Secret Garden,\' and now I\'m even more excited to start. Thanks for sharing your thoughts, Sarah!',
    likes: 127,
    timeAgo: '1 week ago'
  },
  {
    id: '2',
    user: 'Olivia Bennett',
    avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
    content: 'I love your reviews, Sarah! You always provide such a thoughtful analysis of the books you read. Keep up the great work!',
    likes: 89,
    timeAgo: '2 weeks ago'
  },
  {
    id: '3',
    user: 'Marcus Johnson',
    avatar: 'https://images.pexels.com/photos/1043475/pexels-photo-1043475.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
    content: 'The way you described the garden scenes really made me want to re-read this classic. Your passion for literature is infectious!',
    likes: 156,
    timeAgo: '3 weeks ago'
  }
];

export const upNextBooks: Book[] = [
  {
    id: 'author-interviews-modern',
    title: 'Author Interviews: Modern Writers',
    author: 'Various Authors',
    channel: 'Literary Voices',
    channelAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    subscribers: '89.4K',
    views: '89.4K',
    uploadDate: '2023-12-10',
    readingTime: '7:30',
    cover: 'https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    category: 'Interviews',
    rating: 4.7,
    likes: 4470,
    dislikes: 89,
    comments: 623,
    description: 'In-depth conversations with today\'s most influential writers.',
    progress: 0
  },
  {
    id: 'literary-discussions',
    title: 'Literary Discussions: Classic vs Modern',
    author: 'Dr. Sarah Johnson',
    channel: 'Academic Reads',
    channelAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    subscribers: '67.2K',
    views: '67.2K',
    uploadDate: '2023-12-05',
    readingTime: '3:57',
    cover: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    category: 'Literature',
    rating: 4.6,
    likes: 3360,
    dislikes: 156,
    comments: 512,
    description: 'A thoughtful analysis comparing classical literature with contemporary works.',
    progress: 0
  },
  {
    id: 'fantasy-reviews',
    title: 'Book Reviews: Fantasy Edition',
    author: 'Fantasy Realm',
    channel: 'Fantasy Realm',
    channelAvatar: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    subscribers: '203.5K',
    views: '203.5K',
    uploadDate: '2023-12-01',
    readingTime: '6:40',
    cover: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    category: 'Fantasy',
    rating: 4.9,
    likes: 10175,
    dislikes: 203,
    comments: 891,
    description: 'Exploring the latest and greatest in fantasy literature.',
    progress: 0
  }
];

export function getBookBySlug(slug: string): Book | undefined {
  return trendingBooks.find(book => book.id === slug);
}

export function getBooksExcept(excludeId: string): Book[] {
  return trendingBooks.filter(book => book.id !== excludeId);
}