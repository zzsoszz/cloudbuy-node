CREATE TABLE book_to_book_store (
  book_store_name VARCHAR(400) NOT NULL,
  book_id INTEGER NOT NULL,
  stock INTEGER
);
INSERT INTO book_to_book_store VALUES
	('Amazon', 1, 10),
	('Amazon', 2, 10),
	('Amazon', 3, 10),
	('Barnes and Noble', 1, 1),
	('Barnes and Noble', 3, 2),
	('Payot', 3, 1)
;
