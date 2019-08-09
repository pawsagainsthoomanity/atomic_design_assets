# Atomic Design Assets for IMS

This is a repository of design and code assets for my internship. It follows the principles of [Atomic Design](http://atomicdesign.bradfrost.com/) by Brad Frost but implemented using React.js. Try [patternlab](https://github.com/pattern-lab/patternlab-node/) if you want to follow the exact methodologies as in the book.

## Getting Started

Please get a copy of the active folder to your local machine. 

### Prerequisites

You will need 
* [Material-UI](https://material-ui.com/) - The react framework used
* [Docz](https://www.docz.site/) - Documentation 
* [Yarn](https://yarnpkg.com/en/) - Package management

### Installing

First you need either npm or yarn to run the environment. The repo uses yarn. 
To see the custom commands, go to scripts under package.json file.
To add scripts, follow the complete [instructions](https://www.docz.site/docs/introduction) here or add the following lines to your scripts:

```
"docz:dev": "docz dev",
"docz:build": "docz build"
```

### Running the environment

cd root folder and run the following command.

```
yarn docz:dev
```

### Possible Trouble Shooting

Here are some tricks that worked for me to circumven some common rabbit holes.

* If yarn does not work for the first time, try to re-install yarn globally.
* If the theme were not running correctly, try to manually add it.

```
yarn add -D docz-theme-default
```
 
