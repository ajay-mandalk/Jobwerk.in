import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

// Validate URL format
if (!supabaseUrl?.startsWith('https://')) {
  throw new Error('Supabase URL must start with https://')
}

if (!supabaseAnonKey) {
  throw new Error('Missing Supabase anon key')
}

// Create client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)