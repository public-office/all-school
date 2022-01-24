#!/usr/bin/env sh

ssh -A root@content.all-school.public-office.info /bin/bash << EOF
  cd /var/www/all-school
  git pull origin main
EOF
