BRANCH=$(if [ "$GITHUB_EVENT_NAME" != "pull_request" ]; then echo ${GITHUB_REF##*/}; else echo "${GITHUB_HEAD_REF}"; fi)

echo Workflow:
echo $GITHUB_WORKFLOW

echo repo:
echo $GITHUB_REPOSITORY

echo actor:
echo $GITHUB_ACTOR

echo event name:
echo $GITHUB_EVENT_NAME

echo event path:
echo $GITHUB_EVENT_PATH

echo head ref it is only available on pr:
echo $GITHUB_HEAD_REF

echo base ref it is only available on pr:
echo $GITHUB_BASE_REF

echo ref:
echo $GITHUB_REF

echo TESTSTSTSTSTST:
echo $BRANCH
