#!/usr/bin/env sh
rsync -r -p -t -u -z --exclude=".*" -P -h -i --delete root@content.all-school.public-office.info:/var/www/all-school/content ./