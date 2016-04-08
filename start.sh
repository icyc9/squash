selenium_port=4444

if lsof -Pi :4444 -sTCP:LISTEN; then 
  echo Selenium Server is already running.
else
  echo Starting selenium on port $selenium_port
  java -jar bin/selenium -Dwebdriver.chrome.driver=bin/chromedriver
fi
