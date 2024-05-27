import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nwugkwrtplmnbivthmiw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53dWdrd3J0cGxtbmJpdnRobWl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4MzYyNTQsImV4cCI6MjAzMjQxMjI1NH0.nHp5pEIKJi2LBRNBZ-exISRDbrkAEziahrHTsxIZFso';
export const supabase = createClient(supabaseUrl, supabaseKey);