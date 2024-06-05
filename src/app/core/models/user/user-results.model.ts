import { User } from './user.model';
import { Info } from './info.model';

export interface UserResults {
  results: User[];
  info: Info;
}
