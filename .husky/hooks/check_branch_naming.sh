#!/usr/bin/bash
local_branch_name="$(git rev-parse --abbrev-ref HEAD)"

valid_branch_regex='^(develop|homolog|main|((hotfix|bugfix|fix|feat|feature|improvement|chore|style|refactor|release)\/[a-zA-Z0-9_\-]+))$'

message="There is something wrong with your branch name. Branch names in this project must adhere to this contract: $valid_branch_regex. Your commit will be rejected. You should rename your branch to a valid name and try again."

if [[ ! $local_branch_name =~ $valid_branch_regex ]]; then
    echo "$message"
    exit 1
fi

exit 0