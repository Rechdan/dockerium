FROM node:18.17.1-alpine3.18 AS base

FROM base AS build

FROM base AS final

EXPOSE 3000
