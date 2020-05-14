# ToDo App

## Used technologies
  Backend:
 * [NodeJS](https://nodejs.org)
 * [Express](https://expressjs.com)
 * [mLab](https://mlab.com) - MongoDB cloud service
 * [Mongoose](https://mongoosejs.com)

Frontend:
 * [ReactJS](https://reactjs.org)


## Getting started
## Project Sturcture (Folders & Files)

```
├── server
│   ├── src          
│   ├── package.json         
│   └── package.lock.json    
├── client                   
│   ├── public         
│   ├── src          
│   ├── package.json 
│   └── package.lock.json
├── README.md            
└── ...
```

## Deployment

Clone the repository

```bash
git clone https://github.com/husniddin96/todoapp.git
```

Install dependencies:

```bash
cd todoapp
cd client
npm i
cd ..
cd server
npm i
```


```bash
cd todoapp
cd client
npm start
cd ..
cd server
npm start
```

By default client app runs on port ```3000``` and backend runs on ```3001```. You can change this from config file.

## Following requests are implemented in this project

!NOTE: Data exchange format is JSON. Here are sample requests:

'login' request:

```bash
curl --location --request POST 'http://localhost:3001/login' \
--header 'Content-Type: application/json' \
--data-raw '{
	"login": "johndoe",
	"password": "jdoe123"
}'
```

response:

```json
{
    "success": true
}
```

'get all todos' request:

```bash
curl --location --request GET 'http://localhost:3001/todo'```

response:

```json{
    "todos": [
        {
            "createdAt": "2020-05-11T08:13:19.933Z",
            "isCompleted": true,
            "_id": "5eb9093248ad383d8a7ccdc3",
            "title": "Learn Javascript",
            "__v": 0
        },
        {
            "createdAt": "2020-05-11T08:13:19.933Z",
            "isCompleted": true,
            "_id": "5eb9093e48ad383d8a7ccdc4",
            "title": "Learn Data Analysis",
            "__v": 0
        },
        {
            "createdAt": "2020-05-11T18:45:28.198Z",
            "isCompleted": false,
            "_id": "5eb99d8b6e423423abebbe0f",
            "title": "Sleep well",
            "__v": 0
        },
        {
            "createdAt": "2020-05-13T16:25:27.580Z",
            "isCompleted": false,
            "_id": "5ebc1f9695fd651474075b76",
            "title": "Go swimming",
            "__v": 0
        },
        {
            "createdAt": "2020-05-13T22:27:11.603Z",
            "isCompleted": false,
            "_id": "5ebc8b982cc6236b4ceefc2d",
            "title": "Read a book",
            "__v": 0
        },
        {
            "createdAt": "2020-05-14T02:15:16.763Z",
            "isCompleted": false,
            "_id": "5ebca9c9a9b0922d330cda8a",
            "title": "Call friends",
            "__v": 0
        }
    ]
}
```

'add todo' request:

```bash
curl --location --request POST 'http://localhost:3001/todo' \
--header 'Content-Type: application/json' \
--data-raw '{
	"title": "Learn AWS"
}'
```

response:

```json
{
    "todos": [
        {
            "createdAt": "2020-05-11T08:13:19.933Z",
            "isCompleted": true,
            "_id": "5eb9093248ad383d8a7ccdc3",
            "title": "Learn Javascript",
            "__v": 0
        },
        {
            "createdAt": "2020-05-11T08:13:19.933Z",
            "isCompleted": true,
            "_id": "5eb9093e48ad383d8a7ccdc4",
            "title": "Learn Data Analysis",
            "__v": 0
        },
        {
            "createdAt": "2020-05-11T18:45:28.198Z",
            "isCompleted": false,
            "_id": "5eb99d8b6e423423abebbe0f",
            "title": "Sleep well",
            "__v": 0
        },
        {
            "createdAt": "2020-05-13T16:25:27.580Z",
            "isCompleted": false,
            "_id": "5ebc1f9695fd651474075b76",
            "title": "Go swimming",
            "__v": 0
        },
        {
            "createdAt": "2020-05-13T22:27:11.603Z",
            "isCompleted": false,
            "_id": "5ebc8b982cc6236b4ceefc2d",
            "title": "Read a book",
            "__v": 0
        },
        {
            "createdAt": "2020-05-14T02:15:16.763Z",
            "isCompleted": false,
            "_id": "5ebca9c9a9b0922d330cda8a",
            "title": "Call friends",
            "__v": 0
        },
        {
            "createdAt": "2020-05-14T13:23:25.717Z",
            "isCompleted": false,
            "_id": "5ebd48c81b2b207b8fbb6ea3",
            "title": "Learn AWS",
            "__v": 0
        }
    ]
}
```


'update todo' request:

```bash
curl --location --request PUT 'http://localhost:3001/todo/5eb9093248ad383d8a7ccdc3' \
--header 'Content-Type: application/json' \
--data-raw '{
	"title": "Learn TypeScript"
}'```

response:

```json
{
    "todos": [
        {
            "createdAt": "2020-05-11T08:13:19.933Z",
            "isCompleted": true,
            "_id": "5eb9093248ad383d8a7ccdc3",
            "title": "Learn TypeScript",
            "__v": 0
        },
        {
            "createdAt": "2020-05-11T08:13:19.933Z",
            "isCompleted": true,
            "_id": "5eb9093e48ad383d8a7ccdc4",
            "title": "Learn Data Analysis",
            "__v": 0
        },
        {
            "createdAt": "2020-05-11T18:45:28.198Z",
            "isCompleted": false,
            "_id": "5eb99d8b6e423423abebbe0f",
            "title": "Sleep well",
            "__v": 0
        },
        {
            "createdAt": "2020-05-13T16:25:27.580Z",
            "isCompleted": false,
            "_id": "5ebc1f9695fd651474075b76",
            "title": "Go swimming",
            "__v": 0
        },
        {
            "createdAt": "2020-05-13T22:27:11.603Z",
            "isCompleted": false,
            "_id": "5ebc8b982cc6236b4ceefc2d",
            "title": "Read a book",
            "__v": 0
        },
        {
            "createdAt": "2020-05-14T02:15:16.763Z",
            "isCompleted": false,
            "_id": "5ebca9c9a9b0922d330cda8a",
            "title": "Call friends",
            "__v": 0
        },
        {
            "createdAt": "2020-05-14T13:23:25.717Z",
            "isCompleted": false,
            "_id": "5ebd48c81b2b207b8fbb6ea3",
            "title": "Learn AWS",
            "__v": 0
        }
    ]
}
```

'delete todo' request:

```bash
curl --location --request DELETE 'http://localhost:3001/todo/5eb9093248ad383d8a7ccdc3'
```

response:

```json
{
    "todos": [
        {
            "createdAt": "2020-05-11T08:13:19.933Z",
            "isCompleted": true,
            "_id": "5eb9093e48ad383d8a7ccdc4",
            "title": "Learn Data Analysis",
            "__v": 0
        },
        {
            "createdAt": "2020-05-11T18:45:28.198Z",
            "isCompleted": false,
            "_id": "5eb99d8b6e423423abebbe0f",
            "title": "Sleep well",
            "__v": 0
        },
        {
            "createdAt": "2020-05-13T16:25:27.580Z",
            "isCompleted": false,
            "_id": "5ebc1f9695fd651474075b76",
            "title": "Go swimming",
            "__v": 0
        },
        {
            "createdAt": "2020-05-13T22:27:11.603Z",
            "isCompleted": false,
            "_id": "5ebc8b982cc6236b4ceefc2d",
            "title": "Read a book",
            "__v": 0
        },
        {
            "createdAt": "2020-05-14T02:15:16.763Z",
            "isCompleted": false,
            "_id": "5ebca9c9a9b0922d330cda8a",
            "title": "Call friends",
            "__v": 0
        },
        {
            "createdAt": "2020-05-14T13:23:25.717Z",
            "isCompleted": false,
            "_id": "5ebd48c81b2b207b8fbb6ea3",
            "title": "Learn AWS",
            "__v": 0
        }
    ]
}```


