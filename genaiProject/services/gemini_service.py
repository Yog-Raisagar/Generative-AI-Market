import os
from google import genai
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=GEMINI_API_KEY)

async def generated_response(user_prompt):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=user_prompt
    )

    return {
        "response": response.text
    }