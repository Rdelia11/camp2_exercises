curl "https://postman-echo.com/post" -d "foo=bar" | jq '.json' > 03_postman_api_post.result
