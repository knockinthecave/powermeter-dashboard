# Node.js 이미지를 기반으로 설정
FROM node:18-alpine as build

# 작업 디렉토리를 설정
WORKDIR /app

# package.json과 package-lock.json을 복사하고 필요한 Node.js 패키지를 설치
COPY package.json package-lock.json ./
RUN npm install

# 애플리케이션 코드를 복사하고 빌드
COPY . .
RUN npm run build

# Nginx를 사용하여 빌드된 파일을 제공
FROM nginx:alpine

# Nginx 설정 파일을 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 빌드된 파일을 Nginx의 기본 루트 디렉토리에 복사
COPY --from=build /app/build /usr/share/nginx/html

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
