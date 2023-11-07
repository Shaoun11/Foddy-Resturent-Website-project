import React from 'react';
import { FaRegEye,FaCalendarMinus} from 'react-icons/fa'
import { BiTimeFive} from 'react-icons/bi'
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet-async';
const Blog = () => {
    return (
        <>
          <Helmet>
                <title>Foody resturent Blog</title>
             
            </Helmet>
       <div className='max-w-6xl mb-10 mx-auto'>
         <div className=' '>
              <h1 className='text-3xl  font-semibold mt-4 mb-4'>
              1.What is One way data binding?
                 </h1>
              
          
          <div>
          <img className='rounded-lg' src="https://i.ibb.co/bX1vhcY/1-r-SRM637zi-CJAk-Q7c-PKfl3w.png" alt="" />
          </div>
          <div className='flex justify-between'>
              <div className='lg:flex md:flex gap-3'>
              <p className='flex font-mono text-sm m-2 text-gray-500 '> <FaCalendarMinus className='mt-[2px]'></FaCalendarMinus>Published:07-12-2023
                 
                 </p>
                <p className='flex font-mono text-sm m-2 text-gray-500 '> <BiTimeFive className='mt-[4px]'></BiTimeFive> read time:4minutes
                 
                 </p>
              </div>
                
                 <p className='font-mono flex ml-2 m-2 text-gray-500'>
                 <FaRegEye className='mt-1'></FaRegEye>2.3M
                 </p>
                </div>
          <div>
          
            <p className='text-base text-[#0B0B0BB2] mt-5'>One-way data binding is a concept in software development and web development where data is synchronized in a single direction, typically from the data source to the user interface (UI) elements. In this model, changes in the data source are reflected in the UI, but changes made in the UI do not affect the data source.

Here's an example to illustrate one-way data binding:

Let's say you have a variable in your code that stores a user's name, and you want to display that name in a web page. With one-way data binding, you bind the variable to an HTML element, and when the variable's value changes, the HTML element automatically updates to display the new value. However, if a user were to type a new name into an input field in the HTML, it would not automatically update the variable in your code. The data flows in one direction, from the code to the UI.

One-way data binding is simpler to implement and is often used in scenarios where you want to display data, but you don't need to capture or process user input related to that data. It is commonly used in templating systems, where data from a model is rendered in a view, but the view is not expected to modify the model.</p>
          </div>
           </div>
     
    {/* 2nd blog */}

    <div className='max-w-7xl mx-auto '>
              <h1 className='text-3xl  font-semibold mt-4 mb-4'>
              2.What is NPM in node.js?
                 </h1>
              
          
          <div>
          <img className='rounded-lg' src="https://i.ibb.co/6JR03V9/1-hj-anu-Wth-YZs0x22h-E9l-A.png" alt="" />
          </div>
          <div className='flex justify-between'>
              <div className='lg:flex md:flex gap-3'>
              <p className='flex font-mono text-sm m-2 text-gray-500 '> <FaCalendarMinus className='mt-[2px]'></FaCalendarMinus>Published:07-12-2023
                 
                 </p>
                <p className='flex font-mono text-sm m-2 text-gray-500 '> <BiTimeFive className='mt-[4px]'></BiTimeFive> read time:5minutes
                 
                 </p>
              </div>
                
                 <p className='font-mono flex ml-2 m-2 text-gray-500'>
                 <FaRegEye className='mt-1'></FaRegEye>2.3M
                 </p>
                </div>
          <div>
          
            <p className='text-base text-[#0B0B0BB2] mt-5'>
            NPM stands for "Node Package Manager," and it is a package manager and dependency management tool for Node.js. NPM is an essential part of the Node.js ecosystem, and it allows you to easily install, manage, and distribute JavaScript packages and libraries.

Here are some key aspects of NPM in Node.js:

1. Package Management: NPM simplifies the process of installing and managing third-party libraries and modules (packages) for your Node.js projects. You can easily add dependencies to your project by specifying them in a `package.json` file, and NPM will handle the installation and version management.

2. Command-Line Tool: NPM provides a command-line interface that allows you to perform various tasks, such as installing packages, updating packages, running scripts, and managing project dependencies. Common NPM commands include `npm install`, `npm update`, and `npm start`.

3. Central Repository: NPM maintains a central registry that hosts thousands of open-source JavaScript packages. You can search for and download packages from this repository.

4. `package.json` File: Each Node.js project typically includes a `package.json` file, which lists project metadata, including dependencies, version numbers, and scripts. This file is used by NPM to manage project-specific dependencies.

5. Scripts: NPM allows you to define and run custom scripts in your `package.json` file. This is useful for automating tasks like building, testing, and running your application.

6. Version Control: NPM helps you manage package versions by following Semantic Versioning (SemVer) rules. You can specify version ranges in your `package.json` to ensure compatibility with your project.

NPM is an integral part of the Node.js development workflow, making it easier to manage dependencies, share code with others, and streamline the development process by providing access to a vast ecosystem of open-source packages.
               </p>
          </div>
           </div>

           {/* 3rd blog */}

           <div className='max-w-7xl mx-auto '>
              <h1 className='text-3xl  font-semibold mt-4 mb-4'>
              3.Different between Mongodb database vs mySQL database
                 </h1>
              
          
          <div>
          <img className='rounded-lg' src="https://i.ibb.co/FDkf91N/1.png" alt="" />
          </div>
          <div className='flex justify-between'>
              <div className='lg:flex md:flex gap-3'>
              <p className='flex font-mono text-sm m-2 text-gray-500 '> <FaCalendarMinus className='mt-[2px]'></FaCalendarMinus>Published:07-12-2023
                 
                 </p>
                <p className='flex font-mono text-sm m-2 text-gray-500 '> <BiTimeFive className='mt-[4px]'></BiTimeFive> read time:6minutes
                 
                 </p>
              </div>
                
                 <p className='font-mono flex ml-2 m-2 text-gray-500'>
                 <FaRegEye className='mt-1'></FaRegEye>2.3M
                 </p>
                </div>
          <div>
          
            <p className='text-base text-[#0B0B0BB2] mt-5'>
            MongoDB and MySQL are both popular database management systems, but they have some key differences in terms of their data models, query languages, and use cases. Here's a comparison of MongoDB and MySQL:

1. Data Model:
   - MongoDB: MongoDB is a NoSQL database, and it uses a document-based data model. Data is stored in collections, which contain documents in BSON (Binary JSON) format. Each document can have a flexible schema, which means that different documents in the same collection can have different fields and data structures.
   - MySQL: MySQL is a relational database management system (RDBMS), and it uses a tabular data model. Data is organized into tables with predefined schemas, and relationships between tables are established using keys.

2. Query Language:
   - MongoDB: MongoDB uses a query language that is specifically designed for querying and manipulating JSON-like documents. It supports a wide range of query operators and is well-suited for complex hierarchical data structures.
   - MySQL: MySQL uses SQL (Structured Query Language), which is a powerful and standardized language for querying and managing relational data. SQL is well-established and widely supported across various database systems.

3. Schema:
   - MongoDB: MongoDB is schema-less, meaning that you can change the structure of your documents without affecting the entire collection. This flexibility is suitable for applications with evolving data requirements.
   - MySQL: MySQL enforces a rigid schema, which requires data to conform to predefined tables and columns. Schema changes can be more complex and may require data migration.

4. Scaling:
   - MongoDB: MongoDB is designed to scale horizontally, making it suitable for applications with large datasets and high write loads. It supports sharding and replica sets for high availability and scalability.
   - MySQL: MySQL traditionally scales vertically, although it also supports some horizontal scaling solutions. It may require more complex configurations for high availability and scalability.

5. Use Cases:
   - MongoDB: MongoDB is often chosen for projects that require flexibility in data structure, fast development, and scalability. It is well-suited for applications like content management systems, real-time analytics, and IoT applications.
   - MySQL: MySQL is a good choice for applications with structured data and complex relationships, such as e-commerce platforms, financial systems, and traditional relational database use cases.

6. ACID Compliance:
   - MongoDB: MongoDB provides tunable consistency levels and supports multi-document transactions, making it more ACID-compliant in recent versions.
   - MySQL: MySQL has a strong ACID compliance and provides support for transactions and relational integrity.

The choice between MongoDB and MySQL depends on the specific requirements of your project, including the nature of your data, the need for scalability, and your familiarity with the technology. Many projects may even use both databases within their architecture, leveraging each for its strengths in different parts of the application.
            </p>
          </div>
           </div>
           
       </div>
       <Footer></Footer>
       </>
    );
};

export default Blog;