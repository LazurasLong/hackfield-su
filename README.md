# About

**hackfield -su** - an open-world cyberpunk puzzle adventure.

Development branch.

Phaser: Dev Build used; currently ('18-aug-22) it's 3.12.0-beta3

# Development

## How to contribute

I doubt anyone desires for a while, but just in case, use Github's Pull Request functionality. Until the number of PRs reach a threshold, I'm going to decide about them arbitrarily, but won't have any expectation about them either.

## Workflow

A preview is available at http://katamori.github.io/hackfield-su - this one is shared with Github Pages, based on the `master` branch of this repository.

Active development happens on `dev` branch; as of yet, merges into 'master' occurs whenever I feel like it being ready for "production".

In future updates, I'm going to try being much more inclined to a "prod vs dev" style of workflow, meaning that 'master' will use a self-hosted and minified version of Phaser, as well as leaving dev files (e.g. eslintrc) out.

### Updates on `master`

Updating the master branch starting from this one, in theory, will always cause merge conflict. This is normal.

To keep things transparent, the following files should **never** be updated from dev - that is, they must keep their own version of the master branch:

* README.md             Because of a different description for players and developers.
* index.html            Because of 'phaser.min.js'
* NO .eslintrc.json     As it's used only in dev

As such, I likely won't accept PRs on 'master', unless they are important bugfixes.

## How to install

Get Typescript 3.0.1. with `npm install` (preferably `-g` but optional) and set the root as the source. 

Clone this repo. I've commited a *tsconfig* that does the build work exactly as I desire.

Run `tsc` because I won't commit the build result on this branch.

Run `python -m SimpleHTTPServer 4567` or `php -S localhost:4567` (python is recommended on windows, or serve with xampp) to run a very simple HTTP server.

Visit `localhost:4567` or `127.0.0.1:4567`.

Or just open `index.html` though it [isn't recommended anymore.](http://phaser.io/tutorials/getting-started)

Feel free to customize either any of the other dev settings; to be honest, I'm glad it works at all.

### ESLint

Just follow the original ESLint install instructions, really - and then, use my .eslintrc.json.

Nothing special I just thought some may find it useful.

I won't publish a package.json, though, I stay out of npm hell as much as possible. ESLint is exceptional because I want my code to be nice but that's all.

# Credits

## Contributors

* [Zoltán "Katamori" Schmidt](https://katamori.github.io/)
* [Levente "Razor" Szabó](https://razorsh4rk.github.io/)
