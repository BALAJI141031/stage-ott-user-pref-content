# get Users Api
curl --location 'https://stage-ott-user-pref-content-sigma.vercel.app/user'

# get Movies Api
curl --location 'https://stage-ott-user-pref-content-sigma.vercel.app/content/movies'

# Like content api
curl --location 'https://stage-ott-user-pref-content-sigma.vercel.app/myfavouritelist?email=Meaghan65%40yahoo.com' \
--header 'Content-Type: application/json' \
--data '{
    "likedContent":["clutm7dgo000a4k3kcq1wutki","clutm7dhc000c4k3kracz2hj3"]
}'

# get Liked contnet
curl --location 'https://stage-ott-user-pref-content-sigma.vercel.app/myfavouritelist?userId=clutm05m600004k3kqh2dkusz'

# delete Liked Content
curl --location --request DELETE 'https://stage-ott-user-pref-content-sigma.vercel.app//myfavouritelist?userId=clutheov30000vb5q3nhylelh' \
--header 'Content-Type: application/json' \
--data '{
    "notIntersetedContent":["cluthgljo000cvb5qkrdgyj0m"]
}'

