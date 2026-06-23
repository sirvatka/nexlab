@echo off
setlocal
cd /d "%~dp0"

set "NODE_EXE=node.exe"
where node.exe >nul 2>nul
if errorlevel 1 set "NODE_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if not exist "%NODE_EXE%" (
  echo Node.js was not found. Install Node.js, then run this launcher again.
  pause
  exit /b 1
)

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command ^
  "if (-not (Get-NetTCPConnection -LocalPort 8787 -State Listen -ErrorAction SilentlyContinue)) { Start-Process -FilePath '%NODE_EXE%' -ArgumentList 'server.js' -WorkingDirectory '%~dp0' -WindowStyle Hidden; Start-Sleep -Seconds 1 }"

start "" "http://127.0.0.1:8787/"
endlocal
