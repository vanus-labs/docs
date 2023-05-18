# Prerequisites
Before forwarding events to MySQL, you must have:

- A running MySQL server.
- A Database and Table created.


## Setup your connection in Vanus Cloud

Enter all the following information in Vanus Cloud.
- Host - The IP address of your MySQL Server.
- Port - The Port of your MySQL Server default: 3306.
- Username - A Username with the following permissions INSERT, UPDATE, DELETE.
- Password - The user password.
- Database - The database name.
- Table - The table name.
- Chose the insertion mode.


# Custom Connection

The event data must be in JSON format and created following the structure of your database, here's an example:

```json
{
  "title": "value",
  "date": "value",
  "ect...": "value"
}
```
