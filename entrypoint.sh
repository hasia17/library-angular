
echo "Starting..."
for env in $( printenv | grep  -v "_PORT_\|_PORT="); do
    IFS='=' read -r -a array <<< "${env}"
    key=${array[0]}
    value=${array[1]}
    if [ -f /opt/bitnami/nginx/html/assets/env.json ]; then
      sed -i "s|\${$key}|$value|g" /opt/bitnami/nginx/html/assets/env.json
    fi
    if [ -f /opt/bitnami/nginx/html/assets/keycloak.json ]; then
      sed -i "s|\${$key}|$value|g" /opt/bitnami/nginx/html/assets/keycloak.json
    fi
done
echo "Updating nginx config"
value="${APP_BASE_HREF:-/}"
echo "Replace location with '$value'"
sed -i "s|@@APP_BASE_HREF|$value|g" /opt/bitnami/nginx/conf/server_blocks/default.conf
echo "replacement done"
echo "Insert env conf in index.html"
envJsonAsString=$(tr -d "\n" < /opt/bitnami/nginx/html/assets/env.json)
escaped_conf=$(printf '%s\n' "$envJsonAsString" | sed -e 's/[\/&]/\\&/g')
injectScript="window[\"APP_CONFIG\"]=$escaped_conf;"
sed -i "s|@@INJECTED_ENV|$injectScript|g" /opt/bitnami/nginx/conf/server_blocks/default.conf
echo "Done"
exec "$@"