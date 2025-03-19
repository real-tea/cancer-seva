/*
  # Create page views tracking table

  1. New Tables
    - `page_views`
      - `id` (uuid, primary key)
      - `count` (bigint, default 0)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `page_views` table
    - Add policy for authenticated users to read view count
    - Add policy for service role to update view count
*/

CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  count bigint DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to page views"
  ON page_views
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow service role to update page views"
  ON page_views
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);