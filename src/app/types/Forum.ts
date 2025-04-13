export type Forum = {
  userId: number;
  title: string;
  description: string;
  image?: File | null;
  tagIds?: number[];
  chatSessionId?: number;
};
