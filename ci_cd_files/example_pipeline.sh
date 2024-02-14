

# npx prisma migrate deploy
# or
# node node_modules/prisma/build/index.js migrate deploy
# journalctl -u flask_listener.service --since today
# or
# journalctl -u flask_listener.service --since today -f


# Stop if an error occurs
set -e

# Telegram bot token and chat id
telegram_bot_token="BOT_TOKEN"
telegram_chat_id="CHAT_ID"


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

# Send a telegram alert to notify myself that the build was successful
msg=$(jq -rn --arg x "Last build of rayan.sh was successful" '$x|@uri')
tg_url="https://api.telegram.org/bot$telegram_bot_token/sendMessage?chat_id=$telegram_chat_id&text=$msg"
resp=$(curl -s "$tg_url")