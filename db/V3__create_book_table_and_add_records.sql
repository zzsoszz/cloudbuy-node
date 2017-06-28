CREATE TABLE flyway_test.book (
  id INT NOT NULL,
  author_id INT NOT NULL,
  title VARCHAR(400) NOT NULL,
  createdate timestamp,
  CONSTRAINT pk_t_book PRIMARY KEY (id),
  CONSTRAINT fk_t_book_author_id FOREIGN KEY (author_id) REFERENCES flyway_test.author(id)
);


INSERT INTO flyway_test.author VALUES (next value for flyway_test.s_author_id, 'George', 'Orwell', '1903-06-25', 1903, null,CURRENT_TIMESTAMP());
INSERT INTO flyway_test.author VALUES (next value for flyway_test.s_author_id, 'Paulo', 'Coelho', '1947-08-24', 1947, null,CURRENT_TIMESTAMP());

INSERT INTO flyway_test.book VALUES (1, 1, '1984',null);
INSERT INTO flyway_test.book VALUES (2, 1, 'Animal Farm',null);
INSERT INTO flyway_test.book VALUES (3, 2, 'O Alquimista',null);
INSERT INTO flyway_test.book VALUES (4, 2, 'Brida',null);