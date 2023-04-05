import { createClient } from '@supabase/supabase-js'

const URL = 'https://ryamnzglzqvtkziytvnr.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5YW1uemdsenF2dGt6aXl0dm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2MzMxMjQsImV4cCI6MTk5NjIwOTEyNH0.egF41xmOkEbKeljPdPcdXOpRnVkp6bmmgF3LVdPpbyQ'

export const supabase = createClient(URL, API_KEY)