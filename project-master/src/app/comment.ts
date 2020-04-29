import { User } from './user';

export interface Comment {
  id: number;
  title: string;
  text: string;
  author_id: number;
  recipe_id: number;
}
