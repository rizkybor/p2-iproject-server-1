
# Movie API Documentation

berikut adalah dokumentasi server Footbal_Project saya :


## Endpoints :


- POST / register
- POST / login
- GET / fixture
- GET / league
- GET / league/:country 
- POST / bookmark
- GET / bookmark



## 1. POST / Register

```http
  POST /register
```
- req body :
```http
{
    "username": "string,
    "email": "string",
    "password": "string",
    "role": "string"
}
```
- response (201 - Created) :
```http
{
    "id": "integer",
    "email": "string"
}
```
- response (400 - Bad Request) :
```http
{
    "msg": "Email must be unique",
}
OR
{
    "msg": "Wrong email format",
}
```

## 2. POST / Login

```http
  POST /login
```
- req body :
```http
{
  "email": "string",
  "password": "string"
}
```
- response (200 - Ok) :
```http
{
    "message": "string",
    "username": "string",
    "email": "string",
    "role": "string",
    "token": "string"
}
```
- response (400 - Bad Request) :
```http
{
  "message": "Username is required"
}
OR
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

## 3. GET / fixture by date

```http
  GET /fixture/:date
```

- req headers :
```http
{  
  "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
  "x-rapidapi-key": "xxxXxxxXxxxXxxxXxxx"
  "token": "string"
}
```

-req params:
```
params: {date: `string`},
```

- response (200 - Ok) :
```http
[
    {
        "fixture": {
            "id": 663684,
            "referee": "A. Sánchez",
            "timezone": "UTC",
            "date": "2021-01-29T00:00:00+00:00",
            "timestamp": 1611878400,
            "periods": {
                "first": 1611878400,
                "second": 1611882000
            },
            "venue": {
                "id": 1207,
                "name": "Estadio Rommel Fernández Gutiérrez",
                "city": "Ciudad de Panamá"
            },
            "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
            }
        },
        "league": {
            "id": 10,
            "name": "Friendlies",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/10.png",
            "flag": null,
            "season": 2021,
            "round": "Friendlies 1"
        },
        "teams": {
            "home": {
                "id": 11,
                "name": "Panama",
                "logo": "https://media.api-sports.io/football/teams/11.png",
                "winner": null
            },
            "away": {
                "id": 14,
                "name": "Serbia",
                "logo": "https://media.api-sports.io/football/teams/14.png",
                "winner": null
            }
        },
        "goals": {
            "home": 0,
            "away": 0
        },
        "score": {
            "halftime": {
                "home": 0,
                "away": 0
            },
            "fulltime": {
                "home": 0,
                "away": 0
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        }
    },
   ...
]
```
- response (400 - Bad Request) :
```http
{
  Belum ke handle
}
```

## 4. GET / League

```http
  GET /league
```
- req headers :
```http
{  
  "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
  "x-rapidapi-key": "xxxXxxxXxxxXxxxXxxx"
}
```
- response (200 - Ok) :
```http
[
    {
        "id": 4,
        "name": "Euro Championship",
        "type": "Cup",
        "logo": "https://media.api-sports.io/football/leagues/4.png"
    },
    {
        "id": 21,
        "name": "Confederations Cup",
        "type": "Cup",
        "logo": "https://media.api-sports.io/football/leagues/21.png"
    },
    ...
]
```
- response (400 - Bad Request) :
```http
{
Belum dihandle, lanjut besok
}
OR
{
Belum dihandle, lanjut besok
}
```

## 5. GET / League by Country

```http
  GET /league/:country
```
- req headers :
```http
{  
  "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
  "x-rapidapi-key": "xxxXxxxXxxxXxxxXxxx"
}
```

-req params:
```
params: {country: `string`},

```

- response (200 - Ok) :
```http
[
    {
        "id": 4,
        "name": "Euro Championship",
        "type": "Cup",
        "logo": "https://media.api-sports.io/football/leagues/4.png"
    },
    {
        "id": 21,
        "name": "Confederations Cup",
        "type": "Cup",
        "logo": "https://media.api-sports.io/football/leagues/21.png"
    },
    ...
]
```
- response (400 - Bad Request) :
```http
{
Belum dihandle, lanjut besok
}
OR
{
Belum dihandle, lanjut besok
}
```

## 6. GET / Get Odds

```http
  GET /odds
```
- req headers :
```http
{  
    'x-rapidapi-host': 'football-betting-odds1.p.rapidapi.com',
    'x-rapidapi-key': '27b1150a9emshca742ce59c4e066p1ee1cdjsnbd43412d94b3'
}
```

- response (200 - Ok) :
```http
[
    {
        "ename": "1st - Under 0.5",
        "ecode": "1st-under-0-5",
        "id": "4f60a2d53759758e01170000"
    },
    {
        "ename": "1st - Under 1.5",
        "ecode": "1st-under-1-5",
        "id": "4f60a2d53759758e01190000"
    },
    {
        "ename": "1st - Under 2.5",
        "ecode": "1st-under-2-5",
        "id": "4f60a2d53759758e011b0000"
    },
    {
        "ename": "1st - Under 3.5",
        "ecode": "1st-under-3-5",
        "id": "5da36943155e88b3238b4567"
    },
    {
        "ename": "1st - Under 4.5",
        "ecode": "1st-under-4-5",
        "id": "5da36943155e88b3238b4569"
    },
    {
        "ename": "1st - Draw Refund - Home",
        "ecode": "1st-draw-refund-1",
        "id": "54f0fc2201e4e397748b4567"
    },
    {
        "ename": "1st - Draw Refund - Away",
        "ecode": "1st-draw-refund-2",
        "id": "54f0fbf501e4e330768b4569"
    },
    {
        "ename": "1st - Away Under 0.5",
        "ecode": "away-1st-under-0-5",
        "id": "4f60a2d53759758e01270000"
    },
   ...
]
```
- response (400 - Bad Request) :
```http
{
Belum dihandle, lanjut besok
}
OR
{
Belum dihandle, lanjut besok
}
```


## 7. GET / Get Trailer

```http
  GET /youtube/:query
```
- req headers :
```http
{  
    'x-rapidapi-host': 'football-betting-odds1.p.rapidapi.com',
    'x-rapidapi-key': '27b1150a9emshca742ce59c4e066p1ee1cdjsnbd43412d94b3'
}
```
-req params:
```
params: {query: `string`},

```
- response (200 - Ok) :
```http
{
    https://www.youtube.com/watch?v=zWh3CShX_do
}
```
- response (400 - Bad Request) :
```http
{
Belum dihandle, lanjut besok
}
OR
{
Belum dihandle, lanjut besok
}
```


## 8. POST / Bookmark/:fixtureId (Belum ke handle)


## 9. GET / Bookmark (Belum ke handle)



## Global Error

- response (500 - Internal Serve Error) :
```http
{
  "statusCode": "500"
  "msg": "err.name"
}