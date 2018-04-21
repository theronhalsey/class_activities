DROP DATABASE IF EXISTS top_songs_db;
CREATE database top_songs_db;

USE top_songs_db;

CREATE TABLE top5000 (
    position INTEGER(10) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    song_title VARCHAR(100) NOT NULL,
    year_released DECIMAL(10),
    world_tot DECIMAL(10, 4),
    us_tot DECIMAL(10, 4),
    uk_tot DECIMAL(10, 4),
    eu_tot DECIMAL(10, 4),
    etc_tot DECIMAL(10, 4),
    PRIMARY KEY (position)
);