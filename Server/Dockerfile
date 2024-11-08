# Pin specific version for stability
# Use slim for reduced image size
FROM node:19.6-bullseye-slim AS base

# Specify working directory other than /
WORKDIR /usr/src/app

# Copy only files required to install
# dependencies (better layer caching)
COPY package*.json ./

FROM base as dev

RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm install

COPY . .

CMD ["npm", "run", "dev"]

# # Pin specific version for stability
# # Use slim for reduced image size
# FROM node AS base

# # Specify working directory other than /
# WORKDIR /usr/src/app
# RUN chown -R node:node /usr/src/app

# USER node

# # Copy only package.json and package-lock.json to install dependencies
# # This allows Docker to cache dependencies if they haven't changed
# COPY package*.json ./

# # Install dependencies, including dev dependencies like ts-node-dev
# FROM base AS dev

# # Cache npm modules to speed up build process
# # RUN --mount=type=cache,target=/usr/src/app/.npm \
# #   npm set cache /usr/src/app/.npm && \
# #   npm install

# RUN npm install

# # Copy the entire application into the working directory
# COPY . .

# # Expose the port your app will run on (optional, useful for Docker usage)
# EXPOSE 3000

# # Run the dev server with ts-node-dev
# CMD ["npm", "run", "dev"]

# FROM base as production

# # Set NODE_ENV
# ENV NODE_ENV production

# # Install only production dependencies
# # Use cache mount to speed up install of existing dependencies
# RUN --mount=type=cache,target=/usr/src/app/.npm \
#   npm set cache /usr/src/app/.npm && \
#   npm ci --only=production

# # Use non-root user
# # Use --chown on COPY commands to set file permissions
# USER node

# # Copy the healthcheck script
# COPY --chown=node:node ./healthcheck/ .

# # Copy remaining source code AFTER installing dependencies. 
# # Again, copy only the necessary files
# COPY --chown=node:node ./src/ .

# # Indicate expected port
# EXPOSE 3000

# CMD [ "node", "index.js" ]