#!/bin/bash

zip -r ./firefox.zip ./* -x .idea -x .gitignore -x .git -x *.zip -x build.sh -x manifestv3.json

mv manifest.json manifest_firefox.json
mv manifestv3.json manifest.json

zip -r ./chrome.zip ./* -x .idea -x .gitignore -x .git -x *.zip -x build.sh -x manifest_firefox.json

mv manifest.json manifestv3.json
mv manifest_firefox.json manifest.json
