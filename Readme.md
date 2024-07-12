# Rick and Morty Character Database

This project integrates seamlessly with the Rick and Morty API to efficiently manage character data, ensuring robust performance and reliability in a PostgreSQL database environment. It encompasses comprehensive functionalities tailored for modern data handling needs:

- **Bulk Insert with Transactions:** Utilizing `db.sequelize.transaction` for `bulkCreate` operations ensures all database interactions are encapsulated within a single transaction. This approach is pivotal for maintaining data integrity and optimizing performance, particularly when handling extensive datasets.

- **Retry Logic:** Implementing sophisticated retry logic (`async-retry`) enhances application resilience by gracefully managing transient errors during API data retrieval. This feature significantly boosts reliability when interfacing with external APIs.

- **Optimized Data Handling:** By aggregating data in the `characters` array prior to bulk insertion, the project minimizes the frequency of database transactions. This streamlined approach translates into improved efficiency and reduced overhead compared to traditional single-record inserts.

- **Error Handling:** The application employs robust error handling mechanisms that provide detailed error logging. This proactive approach facilitates efficient troubleshooting and maintenance, ensuring seamless operation under varying conditions.

This project leverages the Sequelize ORM to streamline database interactions, offering a cohesive solution for managing and analyzing character data from the Rick and Morty universe.


### Table Name

- **Table Name:** `exampleTableName`


To use your own table name:

1. Open the models/character.js file.
2. Locate the line where the Sequelize model is defined.
3. Modify the tableName property inside the model definition to your preferred table name.
5. Save the file to apply the changes.

## Getting Started

#### Prerequisites

- Node.js and npm installed on your machine.

#### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
