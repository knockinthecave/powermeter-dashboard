# 베이스 이미지를 설정
FROM python:3.9-alpine

# 필요한 패키지를 설치
RUN apk update && apk add --no-cache \
     gcc \
     python3-dev \
     musl-dev \
     mariadb-dev \
     build-base \
     linux-headers \
     libffi-dev \
     openssl-dev

# 작업 디렉토리 설정
WORKDIR /app

# requirements.txt를 복사하고 패키지 설치
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 애플리케이션 코드를 복사
COPY . .

# Uvicorn을 사용하여 ASGI 서버 실행
CMD ["uvicorn", "powermonitoring.asgi:application", "--host", "0.0.0.0", "--port", "8000", "--workers", "4"]
