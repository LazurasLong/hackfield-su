# About

**hackfield -su** - an open-world cyberpunk puzzle adventure.

Based on my Ludum Dare 27 submission from 2013.

Used 3rd party content: 

* Phaser 3.11 (will upgrade with upcoming versions)
* Silkscreen font

# Development

## How to contribute

I doubt anyone desires for a while, but just in case, use Github's Pull Request functionality. Until the number of PRs reach a threshold, I'm going to decide about them arbitrarily, but won't have any expectation about them either.

## Workflow

A preview is available at http://katamori.github.io/hackfield-su - this one is shared with Github Pages, based on the `master` branch of this repository.

Active development happens on `dev` branch; as of yet, merges into 'master' occurs whenever I feel like it being ready for "production".

In future updates, I'm going to try being much more inclined to a "prod vs dev" style of workflow, meaning that 'master' will use a self-hosted and minified version of Phaser, as well as leaving dev files (e.g. eslintrc) out.

## How to install

Clone this repo.

Run `python -m SimpleHTTPServer 4567` or `php -S localhost:4567` (python is recommended on windows, or serve with xampp) to run a very simple HTTP server.

Visit `localhost:4567` or `127.0.0.1:4567`.

Or just open `index.html` though it [isn't recommended anymore.](http://phaser.io/tutorials/getting-started)

### ESLint

Just follow the original ESLint install instructions, really - and then, use my .eslintrc.json.

Nothing special I just thought some may find it useful.

I won't publish a package.json, though, I stay out of npm hell as much as possible. ESLint is exceptional because I want my code to be nice but that's all.

# Credits

## Contributors

* [Zoltán "Katamori" Schmidt](https://katamori.github.io/)
* [Levente "Razor" Szabó](https://razorsh4rk.github.io/)
