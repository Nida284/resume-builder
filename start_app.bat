@echo off
REM Resume Builder - Local Setup & Run
REM Set PATH to include Node.js
set PATH=%PATH%;C:\Program Files\nodejs

REM Navigate to project directory
cd /d "c:\Users\Nida Umair\Documents\app\resume_builder"

REM Install dependencies if node_modules doesn't exist
if not exist node_modules (
    echo.
    echo Installing dependencies...
    call npm install
) else (
    echo Dependencies already installed.
)

REM Check if installation was successful
if exist node_modules (
    echo.
    echo ================================
    echo Starting Resume Builder
    echo ================================
    echo.
    echo Your app is running at:
    echo http://localhost:3000
    echo.
    echo Press Ctrl+C to stop the server
    echo.
    pause
    call npm start
) else (
    echo.
    echo Installation failed!
    pause
)
