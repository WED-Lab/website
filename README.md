# Women's Empowerment in Development Lab - Website

Source code for the Women's Empowerment in Development Lab website. The site is built using [Gridsome](https://gridsome.org/), an awesome static site generator built on [Vue.js](https://vuejs.org/).

## Quick Start

To do

## Contributing 

To do


## Branches

* The `master` branch is where the site is automatically built from and artifacts pushed to the relevant ftp servers.
* Updates, enhancements, and any other major changes are are coded and tested on feature branches before they are merged to `master`. These feature branches can be previewed using the following url: `https://feature-branch-name--wed-lab-dev.netlify.app` 


## Build

If you would like to build the site locally on your maching you will need the following: 

* Node.js
* NPM
* Gridsome CLI
* Patience to understand my code


### Install Node.js and NPM

Plently of instructions exist already to get these installed, so I won't reinvent the wheel.

### Install Gridsome CLI tool

The following command will install the latest version of the Gridsome command line interface tools. This allows us to run the `develop` and `build` commands on our project.

```
npm install --global @gridsome/cli
```

### Clone the repository

Grab the latest version of the repository and create a local copy that you can work on.

```
git clone https://github.com/WED-Lab/website.git
```

### Navigate to the directory

```
cd website
```

### Install project dependencies

The project uses a number of dependencies like `tailwindcss`, markdown transformers, to name a few. This command installs all of the depencies to your development environment so that the project can build locally.

```
npm install
```

### Build or Develop the project

The Build command will build all of the files for distribution into a `dist` folder. 
```
gridsome build
```

The Develop command will run a local web server and allow you to make and view changes to the project. 
```
gridsome develop
```

## License

This software has been licensed under the Apache License, Version 2.0. The full version can be obtained [here](http://www.apache.org/licenses/LICENSE-2.0)

What this means is that you are free to use, copy, and distribute this software however there are restrictions on the trademarks files (such as logo images for example) that are included in this project. 

The above paragraph should not be construed as legal advice. If you have questions or concerns refer to the full version of the license or talk to someone who knows about this stuff. 
