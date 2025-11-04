# PowerShell script to start all applications
# Run this from the root directory

Write-Host "Starting Single-SPA Application..." -ForegroundColor Green

# Start root application in a new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; npm start"

# Wait a moment for the first server to start
Start-Sleep -Seconds 2

# Start app1 in a new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\apps\app1'; npm start"

# Wait a moment
Start-Sleep -Seconds 2

# Start app2 in a new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\apps\app2'; npm start"

# Wait a moment
Start-Sleep -Seconds 2

# Start app3 in a new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\apps\app3'; npm start"

Write-Host "All servers are starting in separate windows." -ForegroundColor Green
Write-Host "Please wait for all servers to start, then open http://localhost:9000" -ForegroundColor Yellow

