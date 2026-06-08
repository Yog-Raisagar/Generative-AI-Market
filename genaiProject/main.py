from fastapi import FastAPI

from routes.translator import router as translator_router

app = FastAPI()

app.include_router(translator_router)

# app.include_router(chatbot_router)