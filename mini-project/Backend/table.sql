CREATE TABLE IF NOT EXISTS products(
    id INT AUTO_INCREMENT PRIMARY KEY,
    coffeName VARCHAR(100) NOT NULL,
    description VARCHAR(100),
    price DECIMAL(10, 2) NOT NULL
);



INSERT INTO products (coffeName, description, price) VALUES
("Espresso","Intense and concentrated coffee",2.99),
("Cappuccino","Espresso with steamed milk and foam",4.5),
("Latte","Espresso with a lot of steamed milk",3.99),
("Mocha","Espresso with chocolate and steamed milk",5.99),
("Americano","Espresso with added hot water",3.49),
("Macchiato","Espresso with a dash of milk",4.0),
("Flat White","Strong espresso with velvety microfoam",4.75),
("Iced Coffee","Chilled coffee over ice",3.99),
("Cold Coffee","Espresso poured over vanilla ice cream",6.25);



CREATE TABLE coffee_orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
);

