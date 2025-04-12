import { signIn } from 'next-auth/react';

export default async function crendentialLogin(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  const response = await signIn('credentials', {
    email,
    password,
    redirect: false,
  });

  if (!response) {
    throw new Error('Response not received.');
  }

  if (!response.ok) {
    throw new Error(response.error as string);
  }

  return response;
}
