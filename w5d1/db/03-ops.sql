-- Basic select

SELECT jokes.* FROM jokes;
SELECT * FROM jokes;

-- Where

SELECT * FROM jokes WHERE rating >= 4;
SELECT * FROM jokes WHERE rating >= 4 AND id > 4;

SELECT * FROM jokes WHERE true AND rating >= 4 AND id > 4;

SELECT * FROM jokes WHERE LOWER(question) LIKE 'what%';
-- STANDARD SQL SELECT * FROM jokes WHERE LOWER(question) LIKE 'what%';
-- POSTGRESQL SQL SELECT * FROM jokes WHERE question ILIKE 'what%';
SELECT * FROM jokes WHERE LOWER(question) LIKE '% a %' OR LOWER(question) LIKE '% an %';

SELECT * 
FROM jokes 
WHERE 
  LOWER(question) LIKE '% a %' 
OR 
  LOWER(question) LIKE '% an %'
ORDER BY
  rating DESC
LIMIT 1
;

SELECT * FROM jokes;

-- SELECT question, answer FROM jokes;

-- JOIN!

SELECT * 
FROM jokes
-- JOIN authors
-- INNER JOIN authors (SAME AS JOIN)
LEFT JOIN authors
-- RIGHT JOIN authors
-- FULL OUTER JOIN authors
ON authors.id = jokes.author_id
;


SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.funny AS author_is_funny,
  authors.description AS author_description 
FROM jokes
LEFT JOIN authors
ON authors.id = jokes.author_id
;

-- AGGREGATE FUNCTIONS!

-- SELECT AVG(jokes.rating), jokes.author_id 
SELECT jokes.author_id 

FROM jokes 
WHERE jokes.author_id IS NOT NULL

GROUP BY jokes.author_id
HAVING AVG(jokes.rating) >= 5
;

SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.funny AS author_is_funny,
  authors.description AS author_description 

FROM jokes
LEFT JOIN authors
ON authors.id = jokes.author_id

WHERE authors.id IN (
  SELECT jokes.author_id 

  FROM jokes 
  WHERE jokes.author_id IS NOT NULL

  GROUP BY jokes.author_id
  HAVING AVG(jokes.rating) >= 5
)
-- WHERE authors.id = 1
-- OR authors.id = 2
-- OR authors.id = 3

;

-- VIEW! - READONLY TABLE ( KINDA )

DROP VIEW IF EXISTS cool_authors;

CREATE VIEW cool_authors AS (
  SELECT jokes.author_id 

  FROM jokes 
  WHERE jokes.author_id IS NOT NULL

  GROUP BY jokes.author_id
  HAVING AVG(jokes.rating) >= 5
);

DROP VIEW IF EXISTS jokes_with_authors;

CREATE VIEW jokes_with_authors AS (
  SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.funny AS author_is_funny,
  authors.description AS author_description 

  FROM jokes
  LEFT JOIN authors
  ON authors.id = jokes.author_id
)

;
-- const bob = {a:1, b:1, a:2}
SELECT * 
FROM jokes_with_authors
WHERE authors.id IN (SELECT * FROM cool_authors)
;

SELECT * 
FROM jokes_with_authors
INNER JOIN cool_authors
ON cool_authors.id = jokes_with_authors.author_id
;

SELECT 
  question,
  answer,
  rating,
  author_id AS "authorId"
FROM jokes;
-- Renaming fields

-- Filter out some results

-- Ordering results

-- Filter based of text

-- Joining tables

-- Potential problems when working with JavaScript

-- AGGREGATE FUNCTIONS

-- AGGREGATES + Nested selects !