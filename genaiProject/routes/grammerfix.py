from fastapi import APIRouter
from models.grammer_model import GrammerPrompt
from services.gemini_service import generated_response

router = APIRouter()


@router.post("/grammer")
async def grammer(grammer_prompt: GrammerPrompt):
    user_prompt = f"""
        You are an expert English grammar assistant.

        Correct the grammar, punctuation, spelling, and sentence clarity of the following text.

        Rules:
        - Keep the original meaning unchanged.
        - Return only the corrected text.
        - Do not add explanations.
        - Do not add extra formatting.

        Text:
            {grammer_prompt.prompt}
        """
   
    
    response = await generated_response(user_prompt)

  

    return {
        "response": response
    }