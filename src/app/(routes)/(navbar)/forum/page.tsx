import queryForum from '@/app/lib/requests/forum/fetchForum';
import Forum from '@/components/forum/Forum';

export default async function ForumPage() {
  const forums = await queryForum();

  return <Forum initialForums={forums} />;
}
