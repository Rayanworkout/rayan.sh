

# npx prisma migrate deploy
# or
# node node_modules/prisma/build/index.js migrate deploy



# Stop if an error occurs
set -e

echo "> Pulling changes ..."
git pull origin main
echo "> Done"

echo "> Installing dependencies ..."
npm install
echo "> Done"

echo "> Started to build ..."
npm run build
echo "> Done"

echo "Applying Migrations ..."
cd /home/rayan/dev/rayan.sh/prisma
npx prisma migrate deploy
echo "> Done"

echo "> Restarting Service ..."
sudo systemctl restart rayan.sh.service

echo "> Done, check website at https://rayan.sh"