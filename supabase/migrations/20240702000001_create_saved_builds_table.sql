-- Create saved_builds table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.saved_builds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  name TEXT NOT NULL,
  components JSONB NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable row level security
ALTER TABLE public.saved_builds ENABLE ROW LEVEL SECURITY;

-- Create policies
DROP POLICY IF EXISTS "Users can view their own builds" ON public.saved_builds;
CREATE POLICY "Users can view their own builds"
  ON public.saved_builds
  FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own builds" ON public.saved_builds;
CREATE POLICY "Users can insert their own builds"
  ON public.saved_builds
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own builds" ON public.saved_builds;
CREATE POLICY "Users can update their own builds"
  ON public.saved_builds
  FOR UPDATE
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete their own builds" ON public.saved_builds;
CREATE POLICY "Users can delete their own builds"
  ON public.saved_builds
  FOR DELETE
  USING (auth.uid() = user_id);

-- Enable realtime
alter publication supabase_realtime add table public.saved_builds;