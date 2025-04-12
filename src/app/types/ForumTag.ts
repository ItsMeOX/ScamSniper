export type ForumTag = {
  tagId: number;
  tagText: string;
};

export type ColoredForumTag = ForumTag & {
  primaryColor: string;
  secondaryColor: string;
};
