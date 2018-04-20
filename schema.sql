DROP DATABASE IF EXISTS top_songs_db;
CREATE database top_songs_db;

USE top_songs_db;

CREATE TABLE top5000 (
    position INT NOT NULL,
    artist VARCHAR(100) NOT NULL,
    song_title VARCHAR(100) NOT NULL,
    year_released INTEGER(4),
    world_tot INTEGER(10, 4),
    us_tot INTEGER(10, 4),
    uk_tot INTEGER(10, 4),
    eu_tot INTEGER(10, 4),
    etc_tot INTEGER(10, 4),
    PRIMARY KEY (position)
)