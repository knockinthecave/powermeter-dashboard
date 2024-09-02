# Python 이미지 사용
FROM python:3.10-slim

# 작업 디렉터리 설정
WORKDIR /app

# 필요 패키지 복사 및 설치
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 프로젝트 파일 복사
COPY . .

# Uvicorn을 사용하여 ASGI 서버 실행
CMD ["uvicorn", "powermonitoring.asgi:application", "--host", "0.0.0.0", "--port", "8000"]