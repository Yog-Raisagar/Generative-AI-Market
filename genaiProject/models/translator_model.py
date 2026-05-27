from pydantic import BaseModel


class TranslatorPrompt(BaseModel):
    prompt: str
    fromlan: str
    tolan: str