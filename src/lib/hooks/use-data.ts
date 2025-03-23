import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBlogPosts, getBlogPostBySlug } from '../../utils/getBlogPosts';
import { getLatestAnnouncement } from '../announcementService';

// Blog post queries
export function useBlogPosts(limit = 25, offset = 0) {
  return useQuery({
    queryKey: ['blogPosts', limit, offset],
    queryFn: () => getBlogPosts(limit, offset),
    placeholderData: (previousData) => previousData,
  });
}
export function useBlogPost(slug: string | undefined) {
  return useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => getBlogPostBySlug(slug || ''),
    enabled: !!slug, // Only run the query if slug is provided
  });
}

// Announcement queries
export function useLatestAnnouncement() {
  return useQuery({
    queryKey: ['announcement', 'latest'],
    queryFn: getLatestAnnouncement,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
}
