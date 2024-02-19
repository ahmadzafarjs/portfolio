import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qaynjgvpqevbhbjqdstz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFheW5qZ3ZwcWV2YmhianFkc3R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxNjQyNTQsImV4cCI6MjAyMzc0MDI1NH0.z0qdQHNyDqQMouVclsAThYG62HjuC5v38YcScFl2tj0"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase