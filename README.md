# Postwoman Extension for Firefox

<a href="https://addons.mozilla.org/en-US/firefox/addon/postwoman/">![Get the add-on](https://addons.cdn.mozilla.net/static/img/addons-buttons/AMO-button_2.png)</a>

**Haven't tried Postwoman yet ? Try it at [https://postwoman.io/](https://postwoman.io/)**

<br />
This extension currently provides the following features to Postwoman.
- Overrides CORS restrictions for cross-origin requests.


### Building & Experimentation
- Clone the repo
- Run `npm install`
- Run `npm run build` to generate the *dist* folder
- Navigate to `about:debugging` in Firefox; Select `This Firefox` in the sidebar
- Click on `Load Temporary Add-on...` and select the *manifest.json* in the generated *dist* folder
- Open `https://postwoman.io` on Firefox and run queries. It will pass without CORS issues.

**NOTE: If you are running Postwoman on a domain which is not `https://postwoman.io` or `https://postwoman.netlify.com/` (for example when running Postwoman on *localhost*), this extension won't work as a security measure. To make it work, add your domain to *manifest.json*'s `matches` array within the `content_scripts` array like so:**

```json
 "content_scripts": [
    {
      "matches": [
        "https://mydomainhere.com",
        
        "https://postwoman.io/",
        "https://postwoman.io/*",
        "https://postwoman.netlify.com/*",
        "https://postwoman.netlify.com/"
      ],
      "js": [ "index.js" ]
    }
  ],
```

<br />
<br />
Postwoman is built with help of an amazing group of people.
<br />
Contribute to Postwoman: <a href="https://github.com/liyasthomas/postwoman">https://github.com/liyasthomas/postwoman</a>
<br/>

Sponsor Postwoman: [OpenCollective](https://opencollective.com/postwoman)


<br />
<br />
<p align="center"><b>made with ❤️ by <a href="https://github.com/AndrewBastin">andrew bastin</a></b></p>


