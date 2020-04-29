import { Category } from './category';
import { Comment } from './comment';

export interface Specialist {
  id: number;
  title: string;
  age: number;
  gender: string;
  city: string;
  likes: number;
  comments: string[];
  front_image: string;
  images: string[];
  category: Category;
  author: number;
}
