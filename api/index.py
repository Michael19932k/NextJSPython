from fastapi import FastAPI
from fastapi import HTTPException
app = FastAPI()


data = [
    {
        "id": 1,
        "title": "Test Post 1",
        "content": "<h1>Post 1</h1>"
    },
    {
        "id": 2,
        "title": "Test Post 2",
        "content": "<h1>Post 2</h1>"
    },
    {
        "id": 3,
        "title": "Test Post 3",
        "content": "<h1>Post 3</h1>"
    },
    {
        "id": 4,
        "title": "Test Post 4",
        "content": "<h1>Post 4</h1>"
    }
]


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/get_posts")
async def get_posts():
    response = {
        "res": "OK",
        "data": data
    }
    return response



@app.get("/get_hp_data")
async def get_hp_data():
    response = {
        "res": "OK",
        "data": {
            "headline": "<h1>Welcome</h1>"
        }
    }
    return response


@app.get("/get_hp_data")
async def get_hp_data():
    response = {
        "res": "OK",
        "data": {
            "headline": "<h1>Welcome</h1>"
        }
    }
    return response

@app.get("/get_post/")
async def get_post(id: int):
    post = next((post for post in data if post["id"] == id), None)
    if post:
        response = {
            "res": "OK",
            "data": {
                "id": post["id"],
                "title": post["title"],
                "content": post["content"]
            }
        }
    else:
        raise HTTPException(status_code=404, detail="Post not found")

    return response