#!/bin/bash
# Bash script to start all applications
# Run this from the root directory

echo "Starting Single-SPA Application..."

# Start root application
gnome-terminal -- bash -c "npm start; exec bash" &

# Wait a moment for the first server to start
sleep 2

# Start app1
gnome-terminal -- bash -c "cd apps/app1 && npm start; exec bash" &

# Wait a moment
sleep 2

# Start app2
gnome-terminal -- bash -c "cd apps/app2 && npm start; exec bash" &

# Wait a moment
sleep 2

# Start app3
gnome-terminal -- bash -c "cd apps/app3 && npm start; exec bash" &

echo "All servers are starting in separate windows."
echo "Please wait for all servers to start, then open http://localhost:9000"

