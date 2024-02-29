import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qjqtrazqgaselcwgisgj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqcXRyYXpxZ2FzZWxjd2dpc2dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwOTM0MTUsImV4cCI6MjAyNDY2OTQxNX0.9-WFdUyzsOfxS1cTGga1F7EbSXcEv7BW6vaSI-lf9OU";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
