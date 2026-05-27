from fastapi import APIRouter
from models.translator_model import TranslatorPrompt
from services.gemini_service import generated_response

router = APIRouter()


@router.post("/translate")
async def translate(translator_prompt: TranslatorPrompt):
    user_prompt = f"""Your an multi-lingual translator. 
            gender neutral.
            Please translate the following text 
            from {translator_prompt.fromlan} 
            to {translator_prompt.tolan}: 
            {translator_prompt.prompt}"""
    print(user_prompt)
    
    response = await generated_response(user_prompt)

    print(response)

    return {
        "response": response
    }