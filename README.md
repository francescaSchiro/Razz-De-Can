A little game about Dogs and Breeds that uses the [Dog API](https://dog.ceo/dog-api). 
Developed starting from the **clean** code of [**react-boilerplate**](https://www.reactboilerplate.com/).

---
To start: 
- clone the repo. `git clone https://github.com/francescaSchiro/Razz-De-Can.git`
- install dependencies `npm i`
- Start with: `npm start`
---

> Please note that this boilerplate is production-ready and not meant for beginners! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.

---
# The Quickstart I followed to setup the project: 
1. Make sure that you have _Node.js v8.10_ and _npm v5_ or above installed.
2. Clone this repo using `git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git <YOUR_PROJECT_NAME>`
3. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
4. Run `npm run setup` in order to install dependencies and clean the git repo.
   _At this point you can run `npm start` to see the example app at` http://localhost:3000.`_
5. Run `npm run clean` to delete the example app.

---

## Use of [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html)
> (not from the very beginning)
- Whenever I add a new feature I move onto a new branch: `git branch -b feature/<feature_name>`;
- After 1st commit: `git push -u origin <branch>` in order to add it also remotely;
- When I'm satisfied with the feature and after last commit:`git push` & move to develop `git checkout develop` & merge onto develop `git merge feature/<feature_name>`
- Then create and move onto anothe branch to implement new features `git checkout -b feature/<new_feature_name>`

---
Some library I used: 
- FormattedMessages;
- FontFaceObserver;
- styled-components
- Redux
- Saga
- Loadable

