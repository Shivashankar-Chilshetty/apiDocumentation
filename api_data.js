define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/users/createexpense/:authToken",
    "title": "api to create a expense.",
    "version": "0.1.0",
    "group": "expense",
    "name": "createExpense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expenseName",
            "description": "<p>Name of the expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "expenseAmount",
            "description": "<p>Amount for the expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>group Id for the expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "paidArray",
            "description": "<p>This array contains the list of paid user details along with their paid share(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "owedArray",
            "description": "<p>This array contains the list of owed user details along with their owed share(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as route parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\t\"error\": false,\n\t\t\"message\": \"Expense created\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\"createdBy\": {\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"name\": \"user 1\",\n\t\t\t\t\"email\": \"user1@gmail.com\"\n\t\t\t},\n\t\t\t\"updatedBy\": {\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"name\": \"user 1\",\n\t\t\t\t\"email\": \"user1@gmail.com\"\n\t\t\t},\n\t\t\t\"deletedBy\": {\n\t\t\t\t\"name\": \"\",\n\t\t\t\t\"userId\": \"\",\n\t\t\t\t\"email\": \"\"\n\t\t\t},\n\t\t\t\"expenseName\": \"test\",\n\t\t\t\"groupId\": \"5f7961a57cd5e43a00537cd3\",\n\t\t\t\"createdOn\": \"2020-10-05T03:32:05.000Z\",\n\t\t\t\"updatedOn\": \"2020-10-05T03:32:05.000Z\",\n\t\t\t\"deletedOn\": null,\n\t\t\t\"expenseAmount\": 700,\n\t\t\t\"_id\": \"5f7a93b5b1f47a52b8360f98\",\n\t\t\t\"paidArray\": [\n\t\t\t\t{\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"email\": \"user1@gmail.com\",\n\t\t\t\t\"amount\": 700,\n\t\t\t\t\"_id\": \"5f7a93b5b1f47a52b8360f99\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"owedArray\": [\n\t\t\t\t{\n\t\t\t\t\"userId\": \"Rhtqus2ss7\",\n\t\t\t\t\"name\": \"user2\",\n\t\t\t\t\"email\": \"user2@gmail.com\",\n\t\t\t\t\"amount\": 700,\n\t\t\t\t\"_id\": \"5f7a93b5b1f47a52b8360f9a\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"__v\": 0\n\t\t}\t\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"faied to create expense\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/expense.js",
    "groupTitle": "expense"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:_id/expenseDelete/:authToken",
    "title": "delete the expense",
    "version": "0.1.0",
    "group": "expense",
    "name": "deleteExpense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as route parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The expenseId for deleting the expense.(Send _id as route parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\t\"error\": false,\n\t\t\"message\": \"Deleted the Expense successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\"createdBy\": {\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"email\": \"user1@gmail.com\"\n\t\t\t},\n\t\t\t\"updatedBy\": {\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"email\": \"user1@gmail.com\"\n\t\t\t},\n\t\t\t\"deletedBy\": {\n\t\t\t\t\"name\": \"user3\",\n\t\t\t\t\"userId\": \"Shtqust67\",\n\t\t\t\t\"email\": \"user3@gmail.com\"\n\t\t\t},\n\t\t\t\"expenseName\": \"test-edited\",\n\t\t\t\"groupId\": \"5f7961a57cd5e43a00537cd3\",\n\t\t\t\"createdOn\": \"2020-10-05T03:32:05.000Z\",\n\t\t\t\"updatedOn\": \"2020-10-05T08:45:39.000Z\",\n\t\t\t\"deletedOn\": \"2020-10-05T09:18:17.000Z\",\n\t\t\t\"expenseAmount\": 100,\n\t\t\t\"_id\": \"5f7a93b5b1f47a52b8360f98\",\n\t\t\t\"paidArray\": [\n\t\t\t\t{\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"email\": \"user1@gmail.com\",\n\t\t\t\t\"amount\": 2000,\n\t\t\t\t\"_id\": \"5f7add33ff70e12df8db41bf\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"owedArray\": [\n\t\t\t\t{\n\t\t\t\t\"userId\": \"Rhtqus2ss7\",\n\t\t\t\t\"name\": \"user3\",\n\t\t\t\t\"email\": \"user3@gmail.com\",\n\t\t\t\t\"amount\": 200,\n\t\t\t\t\"_id\": \"5f7add33ff70e12df8db41c0\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"__v\": 0\n\t\t  }\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To delete the Expense\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/expense.js",
    "groupTitle": "expense"
  },
  {
    "type": "put",
    "url": "/api/v1/users/editExpense/:_id/:authToken",
    "title": "api to edit a expense",
    "version": "0.1.0",
    "group": "expense",
    "name": "editExpenseDetails",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as route parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The expenseId for editing.(Send expenseId as route parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n\t\t\"error\": false,\n\t\t\"message\": \"Expense details edited successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\"createdBy\": {\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"email\": \"user177@gmail.com\"\n\t\t\t},\n\t\t\t\"updatedBy\": {\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"email\": \"user1@gmail.com\"\n\t\t\t},\n\t\t\t\"deletedBy\": {\n\t\t\t\t\"name\": \"\",\n\t\t\t\t\"userId\": \"\",\n\t\t\t\t\"email\": \"\"\n\t\t\t},\n\t\t\t\"expenseName\": \"test\",\n\t\t\t\"groupId\": \"5f7961a57cd5e43a00537cd3\",\n\t\t\t\"createdOn\": \"2020-10-05T03:32:05.000Z\",\n\t\t\t\"updatedOn\": \"2020-10-05T08:45:16.000Z\",\n\t\t\t\"deletedOn\": null,\n\t\t\t\"expenseAmount\": 100,\n\t\t\t\"_id\": \"5f7a93b5b1f47a52b8360f98\",\n\t\t\t\"paidArray\": [\n\t\t\t\t{\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"email\": \"user1@gmail.com\",\n\t\t\t\t\"amount\": 2000,\n\t\t\t\t\"_id\": \"5f7add1cff70e12df8db41bd\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"owedArray\": [\n\t\t\t\t{\n\t\t\t\t\"userId\": \"Rhtqus2ss7\",\n\t\t\t\t\"name\": \"user3\",\n\t\t\t\t\"email\": \"user3@gmail.com\",\n\t\t\t\t\"amount\": 200,\n\t\t\t\t\"_id\": \"5f7add1cff70e12df8db41be\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"__v\": 0\n\t\t  }\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To edit Expense details\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/expense.js",
    "groupTitle": "expense"
  },
  {
    "type": "get",
    "url": "/api/v1/users/:groupId/getAllExpenseByGroupId/:authToken",
    "title": "get all expense details by particular group Id",
    "version": "0.1.0",
    "group": "expense",
    "name": "getExpenseByGroupId",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group Id to fetch all expense details which belongs to that particular group.(Send group Id as a route parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a router parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\t\"error\": false,\n\t\t\"message\": \"All Expense details by Group Id found\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n\t\t{\n\t\t\t\"createdBy\": {\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"email\": \"user1@gmail.com\"\n\t\t\t},\n\t\t\t\"updatedBy\": {\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"email\": \"user1@gmail.com\"\n\t\t\t},\n\t\t\t\"deletedBy\": {\n\t\t\t\t\"name\": \"\",\n\t\t\t\t\"userId\": \"\",\n\t\t\t\t\"email\": \"\"\n\t\t\t},\n\t\t\t\"expenseName\": \"expense 1\",\n\t\t\t\"groupId\": \"5f7482943e8a7e25dc1bf1f5\",\n\t\t\t\"createdOn\": \"2020-09-30T13:06:45.000Z\",\n\t\t\t\"updatedOn\": \"2020-10-03T05:46:54.000Z\",\n\t\t\t\"deletedOn\": null,\n\t\t\t\"expenseAmount\": 150,\n\t\t\t\"_id\": \"5f7482e53e8a7e25dc1bf1fe\",\n\t\t\t\"paidArray\": [\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\t\"email\": \"user1@gmail.com\",\n\t\t\t\t\t\"amount\": 0,\n\t\t\t\t\t\"_id\": \"5f78104e52031112542131a4\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"gRvcZrjn_\",\n\t\t\t\t\t\"name\": \"user2\",\n\t\t\t\t\t\"email\": \"user2@gmail.com\",\n\t\t\t\t\t\"amount\": 0,\n\t\t\t\t\t\"_id\": \"5f78104e52031112542131a5\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"j_ojpBrVH\",\n\t\t\t\t\t\"name\": \"user3\",\n\t\t\t\t\t\"email\": \"user3@gmail.com\",\n\t\t\t\t\t\"amount\": 150,\n\t\t\t\t\t\"_id\": \"5f78104e52031112542131a6\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"owedArray\": [\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\t\"email\": \"user1@gmail.com\",\n\t\t\t\t\t\"amount\": 50,\n\t\t\t\t\t\"_id\": \"5f78104e52031112542131a7\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"gRvcZrjn_\",\n\t\t\t\t\t\"name\": \"user2\",\n\t\t\t\t\t\"email\": \"user2@gmail.com\",\n\t\t\t\t\t\"amount\": 50,\n\t\t\t\t\t\"_id\": \"5f78104e52031112542131a8\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"j_ojpBrVH\",\n\t\t\t\t\t\"name\": \"user3\",\n\t\t\t\t\t\"email\": \"user3@gmail.com\",\n\t\t\t\t\t\"amount\": 50,\n\t\t\t\t\t\"_id\": \"5f78104e52031112542131a9\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"__v\": 0\n\t\t},\n\t\t{\n\t\t\t\"createdBy\": {\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"email\": \"user1@gmail.com\"\n\t\t\t},\n\t\t\t\"updatedBy\": {\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"email\": \"user1@gmail.com\"\n\t\t\t},\n\t\t\t\"deletedBy\": {\n\t\t\t\t\"name\": \"\",\n\t\t\t\t\"userId\": \"\",\n\t\t\t\t\"email\": \"\"\n\t\t\t},\n\t\t\t\"expenseName\": \"expense 2\",\n\t\t\t\"groupId\": \"5f7482943e8a7e25dc1bf1f5\",\n\t\t\t\"createdOn\": \"2020-09-30T13:07:23.000Z\",\n\t\t\t\"updatedOn\": \"2020-09-30T13:07:23.000Z\",\n\t\t\t\"deletedOn\": null,\n\t\t\t\"expenseAmount\": 200,\n\t\t\t\"_id\": \"5f74830b3e8a7e25dc1bf206\",\n\t\t\t\"paidArray\": [\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\t\"email\": \"user1@gmail.com\",\n\t\t\t\t\t\"amount\": 0,\n\t\t\t\t\t\"_id\": \"5f74830b3e8a7e25dc1bf207\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"gRvcZrjn_\",\n\t\t\t\t\t\"name\": \"user2\",\n\t\t\t\t\t\"email\": \"user2@gmail.com\",\n\t\t\t\t\t\"amount\": 200,\n\t\t\t\t\t\"_id\": \"5f74830b3e8a7e25dc1bf208\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"j_ojpBrVH\",\n\t\t\t\t\t\"name\": \"user3\",\n\t\t\t\t\t\"email\": \"user3@gmail.com\",\n\t\t\t\t\t\"amount\": 0,\n\t\t\t\t\t\"_id\": \"5f74830b3e8a7e25dc1bf209\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"owedArray\": [\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\t\"email\": \"user1@gmail.com\",\n\t\t\t\t\t\"amount\": 66.66,\n\t\t\t\t\t\"_id\": \"5f74830b3e8a7e25dc1bf20a\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"gRvcZrjn_\",\n\t\t\t\t\t\"name\": \"user2\",\n\t\t\t\t\t\"email\": \"user2@gmail.com\",\n\t\t\t\t\t\"amount\": 66.66,\n\t\t\t\t\t\"_id\": \"5f74830b3e8a7e25dc1bf20b\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"j_ojpBrVH\",\n\t\t\t\t\t\"name\": \"user3\",\n\t\t\t\t\t\"email\": \"user3@gmail.com\",\n\t\t\t\t\t\"amount\": 66.66,\n\t\t\t\t\t\"_id\": \"5f74830b3e8a7e25dc1bf20c\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"__v\": 0\n\t\t}\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"failed to find the Expense details\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/expense.js",
    "groupTitle": "expense"
  },
  {
    "type": "get",
    "url": "/api/v1/users/getAllExpensesByGroupIdsArray/query",
    "title": "gets all the expense details, by matching all groupId present in an array",
    "version": "0.1.0",
    "group": "expense",
    "name": "getExpenseByGroupIdArray",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "groupArray",
            "description": "<p>The array containing the groupId's.(Send group array as a query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a router or query or headers)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n\t \"error\": false,\n\t \"message\": \"Expense details by Group Id's array found\",\n\t \"status\": 200,\n\t \"data\": [\n\t\t{\n\t\t\t\"groupId\": \"5f7482943e8a7e25dc1bf1f5\",\n\t\t\t\"paidArray\": [\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\t\"email\": \"user1@gmail.com\",\n\t\t\t\t\t\"amount\": 0,\n\t\t\t\t\t\"_id\": \"5f78104e52031112542131a4\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"gRvcZrjn_\",\n\t\t\t\t\t\"name\": \"user2\",\n\t\t\t\t\t\"email\": \"user2@gmail.com\",\n\t\t\t\t\t\"amount\": 0,\n\t\t\t\t\t\"_id\": \"5f78104e52031112542131a5\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"j_ojpBrVH\",\n\t\t\t\t\t\"name\": \"user3\",\n\t\t\t\t\t\"email\": \"user3@gmail.com\",\n\t\t\t\t\t\"amount\": 150,\n\t\t\t\t\t\"_id\": \"5f78104e52031112542131a6\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"owedArray\": [\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\t\"email\": \"user1@gmail.com\",\n\t\t\t\t\t\"amount\": 50,\n\t\t\t\t\t\"_id\": \"5f78104e52031112542131a7\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"gRvcZrjn_\",\n\t\t\t\t\t\"name\": \"user2\",\n\t\t\t\t\t\"email\": \"user2@gmail.com\",\n\t\t\t\t\t\"amount\": 50,\n\t\t\t\t\t\"_id\": \"5f78104e52031112542131a8\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"j_ojpBrVH\",\n\t\t\t\t\t\"name\": \"user3\",\n\t\t\t\t\t\"email\": \"user3@gmail.com\",\n\t\t\t\t\t\"amount\": 50,\n\t\t\t\t\t\"_id\": \"5f78104e52031112542131a9\"\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t\"groupId\": \"5f7482943e8a7e25dc1bf1f5\",\n\t\t\t\"paidArray\": [\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\t\"email\": \"user1@gmail.com\",\n\t\t\t\t\t\"amount\": 0,\n\t\t\t\t\t\"_id\": \"5f74830b3e8a7e25dc1bf207\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"gRvcZrjn_\",\n\t\t\t\t\t\"name\": \"user2\",\n\t\t\t\t\t\"email\": \"user2h@gmail.com\",\n\t\t\t\t\t\"amount\": 200,\n\t\t\t\t\t\"_id\": \"5f74830b3e8a7e25dc1bf208\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"j_ojpBrVH\",\n\t\t\t\t\t\"name\": \"user3\",\n\t\t\t\t\t\"email\": \"user3@gmail.com\",\n\t\t\t\t\t\"amount\": 0,\n\t\t\t\t\t\"_id\": \"5f74830b3e8a7e25dc1bf209\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"owedArray\": [\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\t\"email\": \"user1@gmail.com\",\n\t\t\t\t\t\"amount\": 66.66,\n\t\t\t\t\t\"_id\": \"5f74830b3e8a7e25dc1bf20a\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"gRvcZrjn_\",\n\t\t\t\t\t\"name\": \"user2\",\n\t\t\t\t\t\"email\": \"user2@gmail.com\",\n\t\t\t\t\t\"amount\": 66.66,\n\t\t\t\t\t\"_id\": \"5f74830b3e8a7e25dc1bf20b\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"j_ojpBrVH\",\n\t\t\t\t\t\"name\": \"user3\",\n\t\t\t\t\t\"email\": \"user3@gmail.com\",\n\t\t\t\t\t\"amount\": 66.66,\n\t\t\t\t\t\"_id\": \"5f74830b3e8a7e25dc1bf20c\"\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t\"groupId\": \"5f7961a57cd5e43a00537cd3\",\n\t\t\t\"paidArray\": [\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\t\"email\": \"user1@gmail.com\",\n\t\t\t\t\t\"amount\": 3000,\n\t\t\t\t\t\"_id\": \"5f7a93b5b1f47a52b8360f99\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"owedArray\": [\n\t\t\t\t{\n\t\t\t\t\t\"userId\": \"Rhtqus2ss7\",\n\t\t\t\t\t\"name\": \"user2\",\n\t\t\t\t\t\"email\": \"user2@gmail.com\",\n\t\t\t\t\t\"amount\": 3000,\n\t\t\t\t\t\"_id\": \"5f7a93b5b1f47a52b8360f9a\"\n\t\t\t\t}\n\t\t\t]\n\t\t }\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"failed to find the Expense details\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/expense.js",
    "groupTitle": "expense"
  },
  {
    "type": "get",
    "url": "/api/v1/users/:_id/getExpenseById/:authToken",
    "title": "get particular expense by expenseId",
    "version": "0.1.0",
    "group": "expense",
    "name": "getExpenseById",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The expense Id to fetch the particular expense details.(Send expense Id as a route parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a router parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\t\t\"error\": false,\n\t\t\t\"message\": \"Expense details by Id found\",\n\t\t\t\"status\": 200,\n\t\t\t\"data\": {\n\t\t\t\t\"createdBy\": {\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"email\": \"user1@gmail.com\"\n\t\t\t\t},\n\t\t\t\t\"updatedBy\": {\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"email\": \"user1@gmail.com\"\n\t\t\t\t},\n\t\t\t\t\"deletedBy\": {\n\t\t\t\t\"name\": \"\",\n\t\t\t\t\"userId\": \"\",\n\t\t\t\t\"email\": \"\"\n\t\t\t\t},\n\t\t\t\t\"expenseName\": \"test\",\n\t\t\t\t\"groupId\": \"5f7961a57cd5e43a00537cd3\",\n\t\t\t\t\"createdOn\": \"2020-10-05T05:04:21.000Z\",\n\t\t\t\t\"updatedOn\": \"2020-10-05T05:04:21.000Z\",\n\t\t\t\t\"deletedOn\": null,\n\t\t\t\t\"expenseAmount\": 100,\n\t\t\t\t\"_id\": \"5f7aa955b1f47a52b8360f9b\",\n\t\t\t\t\"paidArray\": [\n\t\t\t\t{\n\t\t\t\t\"userId\": \"Rhtqust67\",\n\t\t\t\t\"name\": \"user1\",\n\t\t\t\t\"email\": \"user1@gmail.com\",\n\t\t\t\t\"amount\": 3000,\n\t\t\t\t\"_id\": \"5f7aa955b1f47a52b8360f9c\"\n\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"owedArray\": [\n\t\t\t\t{\n\t\t\t\t\"userId\": \"Rhtqus2ss7\",\n\t\t\t\t\"name\": \"user2\",\n\t\t\t\t\"email\": \"user2@gmail.com\",\n\t\t\t\t\"amount\": 200,\n\t\t\t\t\"_id\": \"5f7aa955b1f47a52b8360f9d\"\n\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"__v\": 0\n\t\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"failed to find the Expense details\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/expense.js",
    "groupTitle": "expense"
  },
  {
    "type": "post",
    "url": "/api/v1/users/creategroup",
    "title": "api to create a group.",
    "version": "0.1.0",
    "group": "group",
    "name": "createGoup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupName",
            "description": "<p>groupName of the group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "members",
            "description": "<p>array containing userId's of users present in the group. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"Group Created\",\n      \"status\": 200,\n      \"data\": {\n        \"groupName\": \"testing\",\n        \"email\": \"test@gmail.com\",\n        \"createdOn\": \"2020-10-04T05:46:13.000Z\",\n        \"createdBy\": \"test\",\n        \"members\": ['Rhtqust67','BKOpFKEAk'],\n        \"_id\": \"5f7961a57cd5e43a00537cd3\",\n        \"__v\": 0\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"error\": true,\n \"message\" :\"failed to create new group\",\n \"status\": 500,\n \"data: null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/group.js",
    "groupTitle": "group"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:_id/groupDelete/:authToken",
    "title": "delete a group",
    "version": "0.1.0",
    "group": "group",
    "name": "deleteGroup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as route parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The groupId for deleting a group.(Send _id as route parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"Group deleted successfully\",\n      \"status\": 200,\n      \"data\": {\n        \"groupName\": \"testing\",\n        \"email\": \"test@gmail.com\",\n        \"createdOn\": \"2020-10-04T06:02:49.000Z\",\n        \"createdBy\": \"test\",\n        \"members\": ['Rhtqust67', 'aRmzJdo8d'],  \n        \"_id\": \"5f7965897cd5e43a00537cd4\",\n        \"__v\": 0\n        }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"error\": true,\n      \"message\": \"Failed To delete the group\",\n      \"status\": 500,\n      \"data\": null\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/group.js",
    "groupTitle": "group"
  },
  {
    "type": "get",
    "url": "/api/v1/users/:_id/getSingleGroup/query",
    "title": "get group by groupId with user details",
    "version": "0.1.0",
    "group": "group",
    "name": "getGroupById",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a router parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The groupId to find the group details</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"Group Details Found\",\n      \"status\": 200,\n      \"data\": [\n                {\n                \"_id\": \"5f7482943e8a7e25dc1bf1f5\",\n                \"groupName\": \"Group-A\",\n                \"email\": \"some@gmail.com\",\n                \"createdOn\": \"2020-09-30T13:05:24.000Z\",\n                \"createdBy\": \"some\",\n                \"updatedOn\": \"2020-10-02T09:08:49.000Z\",\n                \"members\": [\"Rhtqust67\",\"gRvcZrjn_\"],\n                \"updatedBy\": \"some-other\",\n                \"__v\": 0,\n                \"groupMembers\":[\n                                {\n                                  \"userId\": \"Rhtqust67\",\n                                  \"firstName\": \"some\",\n                                  \"lastName\": \"one\",\n                                  \"email\": \"some@gmail.com\",\n                                },\n                                {\n                                  \"userId\": \"gRvcZrjn_\",\n                                  \"firstName\": \"Suresh\",\n                                  \"lastName\": \"Raina\",\n                                  \"email\": \"suresh@gmail.com\",\n                                }\n                              ]\n                  }\n              ]\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"error\": true,\n      \"message\": \"Some parameters are Invalid / missing\",\n      \"status\": 400,\n      \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/group.js",
    "groupTitle": "group"
  },
  {
    "type": "get",
    "url": "/api/v1/users/getAllGroupsByUserId/:authToken",
    "title": "get all groups of the user",
    "version": "0.1.0",
    "group": "group",
    "name": "getGroups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a router parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"All Group Details Found\",\n      \"status\": 200,\n      \"data\": [\n          {\n            \"groupName\": \"Group A\",\n            \"email\": \"some@gmail.com\",\n            \"createdOn\": \"2020-09-30T13:05:24.000Z\",\n            \"createdBy\": \"shivashankar\",\n            \"members\": [\n                \"Rhtqust67\",\n                \"j_ojpBrVH\",\n                \"gRvcZrjn_\"\n            ],\n            \"_id\": \"5f7482943e8a7e25dc1bf1f5\",\n            \"updatedOn\": \"2020-10-02T09:08:49.000Z\",\n            \"updatedBy\": \"shivashankar\",\n            \"__v\": 0\n          }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"error\": true,\n      \"message\": \"Failed To Find Group Details\",\n      \"status\": 500,\n      \"data\": null\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/group.js",
    "groupTitle": "group"
  },
  {
    "type": "get",
    "url": "/api/v1/users/:groupId/getHistory/:skip/:authToken",
    "title": "get history by groupId",
    "version": "0.1.0",
    "group": "history",
    "name": "getHistory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a router parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The groupId to find all histories present in the group(Send groupId as route parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>The skip number - to display that limited number of records</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"All History Listed\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"Rhtqust67\",\n            \"groupId\": \"5f7482943e8a7e25dc1bf1f5\",\n            \"expenseId\": \"5f78040b5203111254213101\",\n            \"message\": \"shivashankar has changed the expense title from:-'exp1' to exp1-edited\",\n            \"createdOn\": \"2020-10-03T05:56:50.000Z\",\n            \"historyId\": \"GOrcApTmM\"\n        },\n        {\n            \"userId\": \"Rhtqust67\",\n            \"groupId\": \"5f7482943e8a7e25dc1bf1f5\",\n            \"expenseId\": \"5f78040b5203111254213101\",\n            \"message\": \"shivashankar updated the expense:-'exp2'\",\n            \"createdOn\": \"2020-10-03T05:56:50.000Z\",\n            \"historyId\": \"kAzYNmXS5M\"\n        },\n    ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error\": true,\n    \"message\": \"No History Found\",\n    \"status\": 404,\n    \"data\": null\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/group.js",
    "groupTitle": "history"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:userId/delete",
    "title": "delete single users",
    "version": "0.1.0",
    "group": "user",
    "name": "deleteUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId for deleting.(Send userId as route parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"User deleted successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": []\n\t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To delete the user\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "put",
    "url": "/api/v1/users/:userId/edit",
    "title": "edit single users",
    "version": "0.1.0",
    "group": "user",
    "name": "editUserDetails",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId for editing.(Send userId as route parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"User Edited successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\t\t\"createdOn\": \"2018-03-06T13:11:35.000Z\",\n\t\t\t\t\t\"mobileNumber\": 2233112233,\n\t\t\t\t\t\"email\": \"someoneedited@mail.com\",\n\t\t\t\t\t\"lastName\": \"one edited\",\n\t\t\t\t\t\"firstName\": \"some-me\",\n\t\t\t\t\t\"userId\": \"ic4Wn5pPT\"\t\n\t\t\t\t}\n\t\t\t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To edit single user details\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/api/v1/users/:userId/details",
    "title": "Get single users",
    "version": "0.1.0",
    "group": "user",
    "name": "getSingleUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId to find particular User.(Send userId as  route parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"User Details Found\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\t\t\"_id\": \"5f261a48e8d64627bcc28f4a\",\n\t\t\t\t\t\"userId\": \"gRvcZrjn_\",\n\t\t\t\t\t\"firstName\": \"Suresh\",\n\t\t\t\t\t\"lastName\": \"Raina\",\n\t\t\t\t\t\"email\": \"suresh@gmail.com\",\n\t\t\t\t\t\"mobileNumber\": 857496321,\n\t\t\t\t\t\"createdOn\": \"2020-08-02T01:43:36.000Z\",\n\t\t\t\t\t\"countryCode\": \"971\",\n\t\t\t\t\t\"__v\": 0\n\t\t\t\t}\n\t\t\t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To Find single user details\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "Get all users",
    "version": "0.1.0",
    "group": "user",
    "name": "getUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t \"error\": false,\n\t\t \"message\": \"All User Details Found\",\n\t\t \"status\": 200,\n\t\t \"data\": [\n\t\t\t \t {\n\t\t\t\t   \"userId\": \"ic4Wn5pPT\",\n\t\t\t\t   \"firstName\": \"some-user\",\n\t\t\t\t   \"lastName\": \"one-lastname\",\n\t\t\t\t   \"email\": \"someone@mail.com\",\n\t\t\t\t },\n\t\t\t\t {\n\t\t\t\t   \"userId\": \"gRvcZrjn_\",\n\t\t\t\t   \"firstName\": \"Suresh\",\n\t\t\t\t   \"lastName\": \"Raina\",\n\t\t\t\t   \"email\": \"suresh@gmail.com\",\n\t\t\t\t }\n\t\t\t]\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To Find all user details\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "group": "user",
    "version": "0.1.0",
    "name": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n\t\t\"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6ImNsNklCU2ZlNiIsImlhdCI6MTYwMTczMzY1MDYxOSwiZXhwIjoxNjAxODIwMDUwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJleHBlbnNlcyIsImRhdGEiOnsidXNlcklkIjoiemVCbnJnYVlJIiwiZmlyc3ROYW1lIjoidGVzdCIsImxhc3ROYW1lIjoidGxuYW1lIiwidmFsaWRhdGlvblRva2VuIjoiIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsIm1vYmlsZU51bWJlciI6ODg5OTc3ODg5LCJjb3VudHJ5Q29kZSI6IjkxIn19.65NcSD5dVAmIuLN1KiRbsP8FFhMBMmSboWBV3ESY3Rs\",\n\t\t\"userDetails\": {\n\t      \"userId\": \"zeBnrgaYI\",\n\t      \"firstName\": \"test\",\n\t      \"lastName\": \"tlname\",\n\t      \"validationToken\": \"\",\n\t      \"email\": \"test@gmail.com\",\n\t      \"mobileNumber\": 889977889,\n\t      \"countryCode\": \"91\"\n\t    }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Wrong Passsword.Login Failed\",\n\t\t\"status\": 400,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "user logout",
    "version": "0.1.0",
    "group": "user",
    "name": "logout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"User LogedOut successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": null\n\t\t\t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To logout\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "put",
    "url": "/api/v1/users/forgotpassword",
    "title": "reset/forgot the password",
    "version": "0.1.0",
    "group": "user",
    "name": "reset-password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"error\": false,\n\t\t\t\"message\": \"password reset link sent\",\n\t\t\t\"status\": 200,\n\t\t\t\"data\": {\n\t\t\t\t\"n\": 1,\n\t\t\t\t\"nModified\": 1,\n\t\t\t\t\"ok\": 1\n\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To reset user Password\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/v1/users/savepassword",
    "title": "save new password",
    "version": "0.1.0",
    "group": "user",
    "name": "save-new-password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "validationToken",
            "description": "<p>The token for authentication.(Send validationToken as body parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password.(Send password as body parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t  \"error\": false,\n\t\t  \"message\": \"Password Update Successfully\",\n\t\t  \"status\": 200,\n\t\t  \"data\": {\n\t\t\t\"n\": 1,\n\t\t\t\"nModified\": 1,\n\t\t\t\"ok\": 1\n\t\t   }\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t \"error\": true,\n\t\t \"message\": \"Failed To reset user Password'\",\n\t\t \"status\": 500,\n\t\t \"data\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user signup.",
    "version": "0.1.0",
    "group": "user",
    "name": "signup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\"error\": false,\n\t\"message\": \"User created\",\n\t\"status\": 200,\n\t\"data\": {\n\t\t\"userId\": \"zeBnrgaYI\",\n\t\t\"firstName\": \"test\",\n\t\t\"lastName\": \"tlname\",\n\t\t\"validationToken\": \"\",\n\t\t\"email\": \"test@gmail.com\",\n\t\t\"mobileNumber\": 889977889,\n\t\t\"createdOn\": \"2020-10-03T13:50:07.000Z\",\n\t\t\"countryCode\": \"91\",\n\t\t\"_id\": \"5f78818ff688b2328869788b\",\n\t\t\"__v\": 0\n\t}\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed to create new user\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "C:/edwcodes/edwpractice/Proj1-expense/ex-backend/app/routes/user.js",
    "groupTitle": "user"
  }
] });
