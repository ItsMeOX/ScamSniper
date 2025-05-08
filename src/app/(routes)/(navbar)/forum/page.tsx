import queryForum from '@/app/lib/requests/forum/fetchForum';
import Forum from '@/components/forum/Forum';
import Head from 'next/head';

export default async function ForumPage() {
  const forums = await queryForum();

  return (
    <>
    <Head>
      <title>ScamSniper - Community Insights</title>
      <link rel="icons" href="/app_logo.ico"/>
    </Head>
    <Forum initialForums={forums}/>
    </>
  );
}
