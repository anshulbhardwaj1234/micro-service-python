
from fastapi import FastAPI, UploadFile,File
from fastapi.middleware.cors import CORSMiddleware

import os
from dotenv import load_dotenv
from fastapi.responses import RedirectResponse
import google.generativeai as genai
import PIL.Image


load_dotenv()

app = FastAPI()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this to allow requests from specific origins in production
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Include OPTIONS method
    allow_headers=["*"],
)

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
]

generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 0,
  "max_output_tokens": 8192,
}



text_model = genai.GenerativeModel(model_name='gemini-1.5-pro-latest',safety_settings=safety_settings,generation_config=generation_config)
vision_model = genai.GenerativeModel(model_name='gemini-pro-vision')


@app.get("/")
def index():
    return RedirectResponse("/docs")


@app.post("/AskText/")
def Ask_Text(question:str):
    output = AskingGlobalQuestion(Question=question,text_model=text_model)
    return output


@app.post("/AskImgText/")
async def Ask_Text(question: str, image: UploadFile = File(...)):
    if image.content_type not in ["image/jpeg", "image/png"]:
        raise ValueError("Unsupported image format. Please upload a JPEG or PNG image.")
    
    contents = await image.read()
    with open(f"upload/image.jpg", "wb") as f:
        f.write(contents)
    output = AskImgText(model=vision_model,question=question,file="upload/image.jpg")
    return output


@app.post("/AskChatbot/")
def Ask_Text(question:str,data:str):
    text_model = genai.GenerativeModel(model_name='gemini-1.5-pro-latest',safety_settings=safety_settings,generation_config=generation_config,system_instruction=f'''Answer any question that has been asked from the given text, for other quesry just deny the response by saying something politely that you can't provide the answer for that. the data from you are allowed to answer is {data}''')
    output = AskChatbot(Question=question,text_model=text_model)
    return output



@app.post("/AskPDf/")
def Ask_Text(question:str,pdf: UploadFile = File(...)):
    text_model = genai.GenerativeModel(model_name='gemini-1.5-pro-latest',safety_settings=safety_settings,generation_config=generation_config,system_instruction=f'''Answer any question that has been asked from the given text, for other quesry just deny the response by saying something politely that you can't provide the answer for that. the data from you are allowed to answer is {data}''')
    output = AskChatbot(Question=question,text_model=text_model)
    return output



def AskingGlobalQuestion(Question:str,text_model):
    result = text_model.generate_content(Question)
    print("_____result.candidates[0].content.parts.text_______",result.candidates[0].content.parts[0].text)
    return result.candidates[0].content.parts[0].text


def AskChatbot(Question:str,text_model):
    convo = text_model.start_chat(history=[])
    result = convo.send_message(Question)
    print("__________chatbot_result_______________",result.candidates[0].content.parts[0].text)
    return result.candidates[0].content.parts[0].text


def AskImgText(question,model,file):
  img = PIL.Image.open(file)
  result = model.generate_content([f'''provide me a detailed explaination for my doubt : {question}, answer according to the image only. if you are unable to answer according to image just say something politely like you are unable to see this image please provide a clear one., and if the image content is inappropriate just say: i am not attorised to answer for these content, please make sure not to repeat this beahviour again''', img])
  print(result.candidates[0].content.parts[0].text)
  return  result.candidates[0].content.parts[0].text





if __name__ == "__main__":
    import uvicorn
    import nest_asyncio
    from pyngrok import ngrok
    ngrok.set_auth_token("2cxbTWRcHghE8qZqn5FR4rKIEeM_28aoe2DvmfcDqUgNbvmor")
    ngrok_tunnel = ngrok.connect(3000)
    print('Public URL:', ngrok_tunnel.public_url)
    nest_asyncio.apply()
    uvicorn.run("main:app", reload=True)