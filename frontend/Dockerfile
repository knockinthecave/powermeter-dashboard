# Node.js 이미지 사용
FROM node:16

# 작업 디렉터리 설정
WORKDIR /app

# 패키지 설치
COPY package*.json ./
RUN npm install --offline

# 프로젝트 파일 복사
COPY . .

# React 빌드
RUN npm run build

# Nginx 이미지 사용
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Nginx 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
