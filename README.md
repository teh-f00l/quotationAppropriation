# Quotation Appropriation

A Mastodon bot taking the words of historical figures and aggregating them.

[Demo](https://botsin.space/@QuotationAppropriation)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

#### Node
If you dont already have Node installed, you will need it in order to use this project.

[Get Node Here](https://nodejs.org/en/download/). We recommend the LTS version. If you wanna go crazy, maybe check out [NVM](https://github.com/creationix/nvm/blob/master/README.md).

Then verify installation with: 
```
node --version
```

#### BeautifulSoup and lxml
You will need BeautifulSoup and lxml:
```
$ pip install beautifulsoup4
$ pip install lxml
```

### Installing

#### Environment Variables
Create .env file for Mastodon keys:
```
ACCESS_TOKEN
CLIENT_SECRET
CLIENT_KEY
```

## Deployment

No deployment process yet.

## Dependencies:
* [Mastodon API](https://docs.joinmastodon.org/)
* [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
* [lxml](https://lxml.de/)

## Authors
* **Matilda Wysocki** - [teh-f00l](https://github.com/teh-f00l)
* **Jennifer Currie** - [renestl](https://github.com/Renestl)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
