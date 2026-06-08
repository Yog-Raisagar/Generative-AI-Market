from fastapi import APIRouter
from models.chatbot_model import TranslatorPrompt
from services.gemini_service import generated_response

router = APIRouter()


@router.post("/chatmodel")
