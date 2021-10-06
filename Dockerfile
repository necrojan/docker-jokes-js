FROM diamol/node AS develop

WORKDIR /src
COPY src/package.json .
RUN npm install

FROM diamol/node 

EXPOSE 80
CMD ["node", "app.js"]

WORKDIR /app
COPY --from=develop /src/node_modules/ /app/node_modules/
COPY src/ .