import createImage from '../lib/requests/createImage';
import { supabase } from '../lib/supabase/db';

export async function uploadImage(file: File, pathPrefix = '') {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `${pathPrefix}${fileName}`;

  console.log(filePath);
  const { error } = await supabase.storage
    .from('images') // your bucket name
    .upload(filePath, file);

  console.log(error);
  if (error) throw error;

  const { data } = supabase.storage.from('images').getPublicUrl(filePath);

  await createImage(data.publicUrl);

  return data.publicUrl;
}
