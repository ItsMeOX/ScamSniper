import 'next-auth';
import { User } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: User & { id?: string; image_url?: string };
  }
}
