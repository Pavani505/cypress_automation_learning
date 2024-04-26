# cypress_automation_learning
Trying to learn basic automation skills using cypress with javascript

READ ME FILE

# Setting Up the project for the very first time

URL from cypress docs
https://docs.cypress.io/guides/overview/why-cypress

# 1 - download and install a IDE such as VSCode
https://code.visualstudio.com/download

# 2 - download and install nodejs
https://nodejs.org/en/download
Install the LTS version
Make sure the nodejs is in your path variable
Open the terminal and run the next commands, to be sure it was installed correctly:
node --version
npm --version

# 3 - open the terminal and execute the init command to start initial settings if it is a new project
npm -i init  -------------> that creates package.json file
after running the command you will need to pick any name for the package in order to keep the installation.
and leave it empty the others... but author puts your name on it and yes at the end

# 4 - installing cypress
npm install cypress  --save -dev

# 5 - start cypress
npx cypress open
once you run npx cypress open
cypress app will open and you should select end to end test, it will show you whats is going to be created then you can hit the continue button
then you will select the browser you want (chromes in that case)

# -----------------------------------------------------------------------------

# How to work with cypress
