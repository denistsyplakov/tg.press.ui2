FROM node AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx:stable

COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/tgp-ui2 /var/www
COPY ./deploy/.env /var/www
EXPOSE 80
