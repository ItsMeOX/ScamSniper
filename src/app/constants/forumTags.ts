import { ColoredForumTag, ForumTag } from '../types/ForumTag';

export const FORUM_TAGS: ForumTag[] = [
  { tagId: 0, tagText: 'All categories' },
  { tagId: 1, tagText: 'Story' },
  { tagId: 2, tagText: 'News' },
  { tagId: 3, tagText: 'Phishing' },
  { tagId: 4, tagText: 'Love' },
  { tagId: 5, tagText: 'Job' },
];

const TAG_COLORS: Record<number, { primary: string; secondary: string }> = {
  0: { primary: '#A5A5A5', secondary: '#626262' },
  1: { primary: '#7BA5FF', secondary: '#073EB5' },
  2: { primary: '#00B67C', secondary: '#034E36' },
  3: { primary: '#F5DC75', secondary: '#5E4C03' },
  4: { primary: '#FE4949', secondary: '#5C0404' },
  5: { primary: '#FF965D', secondary: '#592204' },
};

export const COLORED_FORUM_TAGS: ColoredForumTag[] = FORUM_TAGS.map((tag) => ({
  ...tag,
  primaryColor: TAG_COLORS[tag.tagId].primary ?? '#ccc',
  secondaryColor: TAG_COLORS[tag.tagId]?.secondary ?? '#eee',
}));
