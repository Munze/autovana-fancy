# Build variables
export ENIRONMENT=production

# Deployment variables
export SERVER_HOST=autovana.rs
export SERVER_DIR=/var/www/html/autovana.rs/html
export SERVER_USER=sasa

# Build app
echo "Pravim production build za aplikaciju...."
    npm run build --scripts-prepend-node-path &&
    echo "Aplikacija bildovana!" &&
    echo "Radim upload fajlova na server..." &&
    echo 'put -r build/*' | sftp --password="Printil1972!@" $SERVER_USER:$SERVER_HOST:$SERVER_DIR &&
echo "Upload fajlova na server zavrsen!"

