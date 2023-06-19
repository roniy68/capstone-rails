#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean
bundle exec DISABLE_DATABASE_ENVIRONMENT_CHECK=1 rails db:reset
bundle exec rails db:migrate
bundle exec rails db:seed