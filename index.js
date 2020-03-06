#!/usr/bin/env node

const ttr = require('hns-domain-ttr')
const typo = require('typojs')
const hasRolledOut = name => !ttr(name)

module.exports = generatePhishingDomains

function generatePhishingDomains (domain, more = false) {
  let domains = typo(domain, true).filter(hasRolledOut)

  if (more) {
    domains = domains
      .concat(domains
        .map(name => typo(name, true))
        .flat()
        .filter(hasRolledOut)
      )
  }

  return domains
}

if (require.main === module) {
  const domain = process.argv[2]
  if (!domain) {
    console.log('usage: hns-phish-gen <domain-name> [--more|-m]')
    return process.exit(1)
  }

  const domains = generatePhishingDomains(domain, process.argv[3] === '--more' || process.argv[3] === '-m')
  const sortByLength = (a, b) => a.length - b.length
  console.log(domains.sort(sortByLength).join(' '))
}
