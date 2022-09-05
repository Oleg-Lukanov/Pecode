FROM cypress/included:8.2.0
                RUN mkdir /cypress-docker
                WORKDIR /cypress-docker
                COPY ./package.json .
                COPY ./package-lock.json .
                COPY ./cypress.json .
                COPY ./cypress.config.js .
                COPY ./cypress.env.json .
                COPY ./cypress ./cypress
                RUN npm install
                ENTRYPOINT ["npm", "run"]