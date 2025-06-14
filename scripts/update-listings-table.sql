-- Add any missing columns to listings table if needed
ALTER TABLE listings 
ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;

-- Update existing listings to have proper image arrays
UPDATE listings 
SET images = ARRAY[
  'https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
] 
WHERE id = '660e8400-e29b-41d4-a716-446655440001';

UPDATE listings 
SET images = ARRAY[
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502672260266-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
] 
WHERE id = '660e8400-e29b-41d4-a716-446655440002';

UPDATE listings 
SET images = ARRAY[
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&w=1000&auto=format&fit=crop'
] 
WHERE id = '660e8400-e29b-41d4-a716-446655440003';

-- Ensure all listings have proper status
UPDATE listings SET status = 'active' WHERE status IS NULL;
