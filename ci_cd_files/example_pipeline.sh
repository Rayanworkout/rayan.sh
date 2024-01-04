echo "> Pulling changes ..."
git pull origin main
echo "> Done"

echo "> Installing dependancies ..."
npm install
echo "> Done"

echo "> Started to build ..."
npm run build
echo "> Done"

echo "> Restarting Service ..."

sudo systemctl restart rayan.sh.service

echo "> Done, check website at https://rayan.sh"