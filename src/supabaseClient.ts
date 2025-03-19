import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mdbnqmujfoupkepdwmct.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kYm5xbXVqZm91cGtlcGR3bWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0MzQ3NzksImV4cCI6MjA1NzAxMDc3OX0.r1uDClH1yMTNudy0aSkkqm82ulHAbiD99O1qE87jcq0';

export const supabase = createClient(supabaseUrl, supabaseKey); 