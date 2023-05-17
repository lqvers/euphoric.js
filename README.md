<div align="center">
<img src="https://images.weserv.nl/?url=euphoric.vercel.app/icon.png&h=275&mask=circle" />
<h3>Euphoric - Free and Keyless API</h3>
<i>Node.js Wrapper</i> <br><br>
<a href="https://lovers.gitbook.io/euphoric-api"> <kbd> <br> Documentation <br> </kbd></a> 
<a href="https://discord.gg/FAwCN6sCsD"> <kbd> <br> Discord Server <br> </kbd></a>
<h1>
</div>

### Overview

Euphoric API is a versatile and expansive API that provides access to a diverse range of resources. With over 20 endpoints, the API offers a rich collection of data in various categories, including animals, anime, and music.
 
#### Example
```js
import * as euphoric from 'euphoric'
const top = euphoric.top(10) // Gets top 10 songs from Billbaord's Hot 100 chart

console.log(top)
```