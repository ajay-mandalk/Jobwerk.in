import { createClient } from '@supabase/supabase-js'

// Remove any hardcoded values or process.env references
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

// Add better error handling and debugging
if (!supabaseUrl) {
  console.error('Missing PUBLIC_SUPABASE_URL')
  throw new Error('Missing PUBLIC_SUPABASE_URL')
}

if (!supabaseKey) {
  console.error('Missing PUBLIC_SUPABASE_ANON_KEY')
  throw new Error('Missing PUBLIC_SUPABASE_ANON_KEY')
}

console.log('Initializing Supabase with URL:', supabaseUrl) // Debug log

export const supabase = createClient(supabaseUrl, supabaseKey)