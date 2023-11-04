#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
 
echo '🏗️👷 Styling your project before committing👷‍♂️🏗️'
echo 'please be patient, this may take a while...'
 
# Check ESLint Standards
npm lint ||
(
    echo '🔨❌ Yoo, you have a problem in your code. Check linter 🔨❌
          Run npm lint, add changes and try commit again.';
    false;
)
 
echo '🎉 No error found: committing this now.... ✨🚀🏄‍♂️🍻'
 
npx lint-staged