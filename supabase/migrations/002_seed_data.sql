-- Seed data for Zero Entertainment admin panel testing

-- Insert sample articles/news (mix of published and unpublished for admin testing)
INSERT INTO articles (title, excerpt, content, category, author, read_time, hot, featured, published, cover_url) VALUES
('Burna Boy Drops New Album', 'The Afrobeat king delivers his most ambitious project yet', 'Burna Boy has released his highly anticipated album "Love, Damini" featuring collaborations with international artists...', 'MUSIC', 'Zero Entertainment', '4 min read', true, true, true, 'https://example.com/burna-boy-album.jpg'),
('Afrobeats Takes Over Billboard Charts', 'African music continues its global dominance', 'For the first time in history, Afrobeats artists occupy multiple spots in the Billboard Hot 100...', 'NEWS', 'Zero Entertainment', '3 min read', false, true, true, 'https://example.com/afrobeats-billboard.jpg'),
('New Artist Spotlight: Seyi Vibez', 'Rising star from Lagos making waves', 'Seyi Vibez emerges as one of Nigeria''s most promising new talents with his unique blend of street music...', 'ARTISTS', 'Zero Entertainment', '5 min read', true, false, true, 'https://example.com/seyi-vibez.jpg'),
('Festival Season Kicks Off in Sierra Leone', 'Local events bring international artists home', 'Sierra Leone''s music festival circuit begins with star-studded lineups featuring both local and international acts...', 'EVENTS', 'Zero Entertainment', '3 min read', false, false, true, 'https://example.com/festival-sl.jpg'),
-- Unpublished articles for admin approval workflow
('Breaking: Major Label Deal Announced', 'Undisclosed artist signs with international label', 'In a surprising move, a rising Afrobeats star has signed a multi-million dollar deal with a major international record label...', 'NEWS', 'Zero Entertainment', '2 min read', false, false, false, 'https://example.com/label-deal.jpg'),
('Behind the Scenes: Album Recording', 'Exclusive look at the creative process', 'We go behind the scenes with one of Sierra Leone''s top producers as they work on their debut album...', 'ARTISTS', 'Zero Entertainment', '6 min read', false, false, false, 'https://example.com/recording.jpg');

-- Insert sample artists (mix of published and unpublished)
INSERT INTO artists (name, genre, location, bio, followers, songs, verified, published, photo_url) VALUES
('Burna Boy', 'AFROBEATS', 'Nigeria', 'Multi-platinum selling artist and Afrobeat pioneer', 8500000, 120, true, true, 'https://example.com/burna-boy.jpg'),
('Wizkid', 'AFROBEATS', 'Nigeria', 'Starboy Entertainment founder and global superstar', 7200000, 95, true, true, 'https://example.com/wizkid.jpg'),
('Seyi Vibez', 'AFROBEATS', 'Nigeria', 'Rising star known for his energetic performances', 1200000, 45, true, true, 'https://example.com/seyi-vibez.jpg'),
('Olamide', 'AFROBEATS', 'Nigeria', 'YBNL Nation boss and rap pioneer', 5800000, 180, true, true, 'https://example.com/olamide.jpg'),
('Tems', 'R&B', 'Nigeria', 'Soulful singer-songwriter gaining international recognition', 3200000, 35, true, true, 'https://example.com/tems.jpg'),
-- Unpublished artists for admin approval
('Khaid', 'AFROBEATS', 'Nigeria', 'Emerging talent from the new generation of Afrobeats artists', 450000, 25, false, false, 'https://example.com/khaid.jpg'),
('CKay', 'AFROBEATS', 'Nigeria', 'Love Nwantiti hitmaker expanding his international reach', 2800000, 40, true, false, 'https://example.com/ckay.jpg');

-- Insert sample songs (mix of published and unpublished)
INSERT INTO songs (title, artist, genre, duration, plays, new_release, hot, published, audio_url, cover_url) VALUES
('Last Last', 'Burna Boy', 'AFROBEATS', '2:52', 45000000, false, true, true, 'https://example.com/last-last.mp3', 'https://example.com/last-last.jpg'),
('Essence', 'Wizkid ft. Tems', 'AFROBEATS', '4:08', 38000000, false, true, true, 'https://example.com/essence.mp3', 'https://example.com/essence.jpg'),
('Different Pattern', 'Seyi Vibez', 'AFROBEATS', '2:45', 8500000, true, true, true, 'https://example.com/different-pattern.mp3', 'https://example.com/different-pattern.jpg'),
('Anifowose', 'Olamide', 'AFROBEATS', '3:22', 25000000, false, false, true, 'https://example.com/anifowose.mp3', 'https://example.com/anifowose.jpg'),
('Try Me', 'Tems', 'R&B', '3:15', 15000000, false, false, true, 'https://example.com/try-me.mp3', 'https://example.com/try-me.jpg'),
('Kilometre', 'Burna Boy', 'AFROBEATS', '2:33', 52000000, false, true, true, 'https://example.com/kilometre.mp3', 'https://example.com/kilometre.jpg'),
-- Unpublished songs for admin approval
('Way Too Big', 'Burna Boy', 'AFROBEATS', '3:45', 0, true, false, false, 'https://example.com/way-too-big.mp3', 'https://example.com/way-too-big.jpg'),
('No Wahala', 'Khaid', 'AFROBEATS', '2:58', 0, true, false, false, 'https://example.com/no-wahala.mp3', 'https://example.com/no-wahala.jpg'),
('Love Nwantiti (Ah Ah Ah)', 'CKay', 'AFROBEATS', '3:08', 0, false, false, false, 'https://example.com/love-nwantiti.mp3', 'https://example.com/love-nwantiti.jpg');

-- Insert sample rankings (all published for chart display)
INSERT INTO rankings (artist_name, rank, genre, streams, weeks, change, published) VALUES
('Burna Boy', 1, 'AFROBEATS', 125000000, 8, 'up', true),
('Wizkid', 2, 'AFROBEATS', 98000000, 12, 'down', true),
('Olamide', 3, 'AFROBEATS', 87500000, 15, 'stable', true),
('Seyi Vibez', 4, 'AFROBEATS', 72000000, 6, 'up', true),
('Tems', 5, 'R&B', 65000000, 10, 'up', true),
('Davido', 6, 'AFROBEATS', 58000000, 20, 'down', true),
('Fireboy DML', 7, 'AFROBEATS', 52000000, 9, 'stable', true),
('Rema', 8, 'AFROBEATS', 48000000, 7, 'up', true),
('Joeboy', 9, 'AFROBEATS', 42000000, 11, 'down', true),
('Asake', 10, 'AFROBEATS', 38000000, 4, 'new', true);