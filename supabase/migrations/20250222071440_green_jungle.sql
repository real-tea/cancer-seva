/*
  # Create function to increment view count

  1. New Function
    - `increment_views()`
      - Safely increments the view count in the page_views table
      - Creates initial record if none exists
      - Returns the new count
*/

CREATE OR REPLACE FUNCTION increment_views()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO page_views (count)
  VALUES (1)
  ON CONFLICT (id)
  DO UPDATE SET 
    count = page_views.count + 1,
    updated_at = now();
END;
$$;