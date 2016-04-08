#!/bin/sh

chrome_driver=http://chromedriver.storage.googleapis.com/2.21/chromedriver_mac32.zip
selenium=http://selenium-release.storage.googleapis.com/2.47/selenium-server-standalone-2.47.0.jar

echo
echo
echo Installing standalone selenium server
echo
echo
mkdir bin
cd bin
curl -o selenium -L $selenium
echo
echo
echo
echo Installing chrome driver
echo
echo
curl -sS $chrome_driver > chromedriver.zip
unzip chromedriver.zip
rm chromedriver.zip