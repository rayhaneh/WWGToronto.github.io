### Women Who Go
This repository has the code for Women Who Go website (currently published via github pages).

## Deployments
This project uses github actions to build and deploy a new version of the website to github pages. Any push to the `source` branch triggers the deploy action. This action pushes a new build of the app to the `main` branch which is the publishing source for github pages.

## Styling
This project uses [tachyons] for styling.

[tachyons]: https://tachyons.io

## To Do
* Set up a linter check with github actions
* Build all pages of the website