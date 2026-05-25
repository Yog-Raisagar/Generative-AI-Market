import os
from fastapi import FastAPI
from pydantic import BaseModel
from google import genai
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=GEMINI_API_KEY)

class UserPrompt(BaseModel):
    prompt: str

@app.post("/translate")

async def translate(user_prompt: UserPrompt):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=user_prompt.prompt
    )

    return {
        "response": response.text
    }

@app.post("/code-assist")
async def code_assist(user_prompt: UserPrompt):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=user_prompt.prompt
    )

    return {
        "response": response.text
    }