# hns-phish-gen

generate phishing alternative domains for Handshake

### install

```shell
$ npm install -g hns-phish-gen
```

### cli

```shell
$ hns-phish-gen <domain-name> [--more|-m]
```

### node.js

```javascript
const generate = require('hns-phish-gen')

const domains = generate('foo') // ['fdoo', 'coo', 'fgoo', ...]
const moreDomains = generate('foo', true) // runs the resulting array against itself for double typos
```

### rationale

this is to demonstrate the absurdity of using a government controlled, suppression-enabling centralized domain system (ICANN) when an alternative and superior technology (Handshake) is solving the same problem in a decentralized and secure manner, where the key holder has actual ownership of the domain, rather than it being provided by a private company as a service, which can, and therefore will be, revoked, when it is seen as economically hostile to some random dude's interests.

### donate

coin | wallet
 --- | ---
bitcoin (BTC) | 3LV3Gpgg75exSPdyEzwPb2BFeVpdXp51rX
handshake (HNS) | hs1qpaa2xsk74dqvecrcgf8llceysqxp09lzqwvz76

### license

MIT
