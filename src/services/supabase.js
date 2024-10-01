import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://snxksbzdaykibwprwxow.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNueGtzYnpkYXlraWJ3cHJ3eG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3MjE4NjcsImV4cCI6MjA0MzI5Nzg2N30.Y2ipaUg_2DU0WB_SfuSOJL_KVmQ9s915yqpObaNZYOg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
