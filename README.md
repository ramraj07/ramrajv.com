Personal site of Ramraj Velmurugan, powered by Gatsby.js.

Shamelessly (proudly) forked from the brilliant design and implementation by [Noah Yamamoto](https://github.com/Egrodo/noahyamamoto.com) for his personal website. Thankful for his permission to fork his design as well. 

To run locally on docker:
```
docker run -it -v {{site_dir}}:/site -p 8000:8000 teamrazr/gatsby-runner bash
# sha: a485b06b36b6e73815387ed2f8479eb4d726ea95f9c4e25f274a8a1cfaa4fd17
cd /site
npm install
gatsby develop --host 0.0.0.0
```
