FROM node:18.18.0-alpine3.18 AS base

FROM base AS build

FROM base AS final

EXPOSE 3000
