FROM node:12 as base
ENV NODE_ENV=development
WORKDIR /app
COPY . .


FROM base as install
WORKDIR /app
RUN yarn


FROM install as server
WORKDIR /app
COPY --from=dependencies /app/node_modules node_modules/
CMD [ "yarn dev" ]