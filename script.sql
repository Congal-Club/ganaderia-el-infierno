-- Roles Table
CREATE TABLE `Roles` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `created_at` timestamp
);

-- Users Table
CREATE TABLE `Users` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `user_name` varchar(255),
  `lastname` varchar(255),
  `email` varchar(255),
  `password` text,
  `role_id` integer,
  `picture` text,
  `created_at` timestamp,
  FOREIGN KEY (`role_id`) REFERENCES `Roles` (`id`)
);

-- Products Table
CREATE TABLE `Products` (
  `id` integer PRIMARY KEY,
  `model` varchar(255),
  `slug` varchar(255),
  `stock` integer,
  `image` varchar(255),
  `images` varchar(255),
  `price` integer,
  `weight` integer,
  `length` integer,
  `width` integer,
  `height` integer,
  `status` varchar(255),
  `description` varchar(255),
  `short_description` varchar(255),
  `name` varchar(255),
  `tag` varchar(255),
  `categories` varchar(255),
  `review_id` integer,
  `seller_id` integer,
  `created_at` timestamp,
  FOREIGN KEY (`seller_id`) REFERENCES `Users` (`id`)
);

-- Images Table
CREATE TABLE `Images` (
  `id` integer PRIMARY KEY,
  `link` text,
  `product_id` integer,
  `created_at` timestamp,
  FOREIGN KEY (`product_id`) REFERENCES `Products` (`id`)
);

-- Categories Table
CREATE TABLE `Categories` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `description` varchar(255),
  `slug` varchar(255),
  `created_at` timestamp
);

-- ProductCategories Table
CREATE TABLE `ProductCategories` (
  `id` integer PRIMARY KEY,
  `product_id` integer,
  `category_id` integer,
  `created_at` timestamp,
  FOREIGN KEY (`product_id`) REFERENCES `Products` (`id`),
  FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`)
);

-- Address Table
CREATE TABLE `Address` (
  `id` integer PRIMARY KEY,
  `street` varchar(255),
  `no_out` varchar(255),
  `no_in` varchar(255),
  `zip` varchar(255),
  `city` varchar(255),
  `country` varchar(255),
  `phone` varchar(255),
  `created_at` timestamp
);

-- Order Table
CREATE TABLE `Order` (
  `id` integer PRIMARY KEY,
  `user_id` integer,
  `nameClient` varchar(255),
  `colony` varchar(255),
  `street` varchar(255),
  `streetNumber` varchar(255),
  `suiteNumber` varchar(255),
  `country` varchar(255),
  `city` varchar(255),
  `postalCode` varchar(255),
  `numProducts` integer,
  `status` varchar(255),
  `total` float,
  `date` date,
  `address_id` integer,
  `created_at` timestamp,
  FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`),
  FOREIGN KEY (`address_id`) REFERENCES `Address` (`id`)
);

-- OrderProducts Table
CREATE TABLE `OrderProducts` (
  `id` integer PRIMARY KEY,
  `product_id` integer,
  `order_id` integer,
  `quantity` integer,
  `price` float,
  `created_at` timestamp,
  FOREIGN KEY (`product_id`) REFERENCES `Products` (`id`),
  FOREIGN KEY (`order_id`) REFERENCES `Order` (`id`)
);

-- Reviews Table
CREATE TABLE `Reviews` (
  `id` integer PRIMARY KEY,
  `product_id` integer,
  `user_id` integer,
  `rate` integer,
  `review` text,
  `email` varchar(255),
  `name` varchar(255),
  `created_at` timestamp,
  FOREIGN KEY (`product_id`) REFERENCES `Products` (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`)
);
