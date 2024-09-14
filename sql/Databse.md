Database Design
Task: Design a database schema for a simple e-commerce application. The schema should include tables for Products, Categories, Orders, and Customers. Describe the relationships between these tables and any constraints you would include.




<!-- The Basic Design for this as per followes -->
Database Schema Design:
  Products Table:
This table will store information about individual products.
        Columns:
        product_id (As a Primary Key)
        name of products
        description 
        price
        category_id

Categories Table:
This table will hold information about product categories.
Columns:
        category_id (As a Primary Key)
        name

Orders Table:
This table will track customer orders.
Columns:
        order_id (AS aPrimary Key)
        customer_id (Foreign Key referencing Customers)
        order_date

Other relevant order-related fields (e.g., total amount, shipping, consumer, address)
Customers Table:
This table will store customer details.
        Columns: as per consumer
        customer_id (Primary Key)
        first_name
        last_name
        email
        address
        
