# Stage 1: Build the React app
FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build  # Ensure this generates the "dist/" folder

# Stage 2: Serve with Nginx
FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .  
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
