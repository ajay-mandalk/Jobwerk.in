// src/utils/loadProjects.ts

import  type OngoingProject  from '@/types/OngoingProject'

export const loadProjects = async (): Promise<OngoingProject[] | null> => {
  try {
    // Replace with your actual Supabase or API call
    // Example using fetch (adapt to your data source)
    const response = await fetch('/api/projects'); // Adjust the URL as needed
    const data = await response.json();
    return data.data || []; // return [] for an empty array to maintain type consistency.
  } catch (error) {
    console.error('Error loading projects:', error);
    return null;
  }
};