-- Insert sample users
INSERT INTO users (id, name, email, password_hash, avatar) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Sarah Johnson', 'sarah@example.com', '$2b$10$hash1', '/placeholder.svg?height=40&width=40'),
('550e8400-e29b-41d4-a716-446655440002', 'Mike Chen', 'mike@example.com', '$2b$10$hash2', '/placeholder.svg?height=40&width=40'),
('550e8400-e29b-41d4-a716-446655440003', 'Emma Davis', 'emma@example.com', '$2b$10$hash3', '/placeholder.svg?height=40&width=40'),
('550e8400-e29b-41d4-a716-446655440004', 'Demo User', 'demo@stayfinder.com', '$2b$10$hash4', '/placeholder.svg?height=40&width=40');

-- Insert sample listings
INSERT INTO listings (id, title, description, location, price, images, max_guests, bedrooms, bathrooms, amenities, type, featured, host_id) VALUES
('660e8400-e29b-41d4-a716-446655440001', 
 'Cozy Mountain Cabin', 
 'A beautiful cabin nestled in the mountains with stunning views and modern amenities. Perfect for a peaceful getaway with family or friends.',
 'Aspen, Colorado', 
 250.00, 
 ARRAY['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
 6, 3, 2, 
 ARRAY['wifi', 'parking', 'kitchen', 'tv', 'fireplace'],
 'Cabin', 
 true, 
 '550e8400-e29b-41d4-a716-446655440001'),

('660e8400-e29b-41d4-a716-446655440002', 
 'Modern Downtown Apartment', 
 'Stylish apartment in the heart of the city with easy access to restaurants, shopping, and attractions. Newly renovated with modern amenities.',
 'New York, NY', 
 180.00, 
 ARRAY['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
 4, 2, 1, 
 ARRAY['wifi', 'ac', 'tv', 'elevator'],
 'Apartment', 
 false, 
 '550e8400-e29b-41d4-a716-446655440002'),

('660e8400-e29b-41d4-a716-446655440003', 
 'Beachfront Villa', 
 'Luxurious villa right on the beach with private pool and breathtaking ocean views. Perfect for a luxury vacation experience.',
 'Malibu, California', 
 450.00, 
 ARRAY['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
 8, 4, 3, 
 ARRAY['wifi', 'pool', 'parking', 'kitchen', 'tv', 'beach_access'],
 'Villa', 
 true, 
 '550e8400-e29b-41d4-a716-446655440003'),

('660e8400-e29b-41d4-a716-446655440004', 
 'Historic Brownstone', 
 'Charming historic brownstone in a quiet neighborhood. Beautifully preserved with modern updates while maintaining original character.',
 'Boston, Massachusetts', 
 220.00, 
 ARRAY['/placeholder.svg?height=300&width=400'],
 5, 3, 2, 
 ARRAY['wifi', 'parking', 'kitchen', 'tv', 'garden'],
 'House', 
 false, 
 '550e8400-e29b-41d4-a716-446655440001'),

('660e8400-e29b-41d4-a716-446655440005', 
 'Desert Oasis Retreat', 
 'Stunning desert retreat with panoramic views and infinity pool. Modern architecture meets natural beauty in this unique property.',
 'Scottsdale, Arizona', 
 320.00, 
 ARRAY['/placeholder.svg?height=300&width=400'],
 6, 3, 2, 
 ARRAY['wifi', 'pool', 'parking', 'kitchen', 'tv', 'hot_tub'],
 'Villa', 
 true, 
 '550e8400-e29b-41d4-a716-446655440002');

-- Insert sample bookings
INSERT INTO bookings (listing_id, user_id, check_in, check_out, guests, total_price, status) VALUES
('660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440004', '2024-02-15', '2024-02-18', 4, 750.00, 'confirmed'),
('660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440004', '2024-03-01', '2024-03-05', 2, 720.00, 'confirmed'),
('660e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', '2024-04-10', '2024-04-14', 6, 1800.00, 'pending');

-- Insert sample reviews
INSERT INTO reviews (listing_id, user_id, rating, comment) VALUES
('660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440004', 5, 'Amazing place! The views were incredible and the host was very responsive. Would definitely stay again.'),
('660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 4, 'Great location and clean space. The kitchen was well-equipped and perfect for our needs.'),
('660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440003', 5, 'Perfect city location! Walking distance to everything we wanted to see.'),
('660e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', 5, 'Exceeded our expectations! Beautiful property with all the amenities we needed. Highly recommend!');
