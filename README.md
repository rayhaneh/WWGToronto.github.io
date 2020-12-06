# Women Who Go Toronto
This repository has the code for Women Who Go Toronto [website] (currently
published via github pages).

[website]: https://wwgtoronto.github.io/

## Branches
This repository has two branches:
- The `source` branch which includes the source code. All the pull request
should be made to this branch.
- The `main` branch which includes a build of the source branch. Github site is
built from this branch.

## Pull requests
To make any change to Women Who Go Toronto website, a pull request should be
submitted to the `source` branch. The pull request will be checked for any build
or lint errors using [a github action].

[a github action]: ./.github/workflows/pr-review.yml

## Deployments
This project uses github actions to build and deploy a new version of the
website to github pages. Any push to the `source` branch triggers a deploy
action. This action pushes a new build of the app to the `main` branch which is
the publishing source for github pages.

## Running the project
To run this project, you need node.js version 15 installed. In the project
directory:
* run `npm run install` to install all the dependencies,
* run `npm run start` to start the project,
* run `npm run lint` to check for any linting errors.

## Styling
This project uses [tachyons] for styling.

[tachyons]: https://tachyons.io
