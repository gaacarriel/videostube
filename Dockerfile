FROM node:14 AS frontend-build
WORKDIR /app
COPY src /app/src
COPY package.json /app/
RUN npm install
RUN npm run build


FROM node:14 AS backend-build
WORKDIR /app/backend
COPY backend /app/backend
RUN npm install


FROM nginx:alpine
COPY --from=frontend-build /app/public /usr/share/nginx/html
COPY --from=backend-build /app/backend /app/backend
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
