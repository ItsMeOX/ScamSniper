import { supabase } from '../../supabase/db';

export async function uploadImage(file: File, pathPrefix = '') {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `${pathPrefix}${fileName}`;

  console.log(filePath);
  const { error } = await supabase.storage
    .from('images') // bucket name
    .upload(filePath, file);

  console.log(error);
  if (error) throw error;

  const { data } = supabase.storage.from('images').getPublicUrl(filePath);

  return data.publicUrl;
}
