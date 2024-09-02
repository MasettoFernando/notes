#!/bin/bash
# Install npm dependencies
npm install

# Run the database migrations
npm run migrate

# Populate the database with initial seed data
npm run seed

# Start the development server
npm run dev
