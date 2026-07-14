from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.upload import router as upload_router
app = FastAPI(
    title="ResearchWeaver AI API",
    version="1.0.0"
)
app.include_router(upload_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "ResearchWeaver AI API is running 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }