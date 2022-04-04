var solar10n = 0
var solar5n = 0
var wind1n = 0
var nuclearn = 0
var solarFn = 0
var hybridn = 0
var pHybridn = 0
var evn = 0

document.getElementById('solar-10kw-number').innerHTML = '0'
function solor10Add() {
  console.log('Solor 10 Added')
  solar10n += 1
  document.getElementById('solar-10kw-number').innerHTML = solar10n
}

function solor10Remove() {
  console.log('Solar 10 Removed')
  if (solar10n != 0) {solar10n -= 1}
  document.getElementById('solar-10kw-number').innerHTML = solar10n
}

document.getElementById('solar-5kw-number').innerHTML = '0'
function solor5Add() {
  console.log('Solor 5 Added')
  solar5n += 1
  document.getElementById('solar-5kw-number').innerHTML = solar5n
}

function solor5Remove() {
  console.log('Solar 5 Removed')
  if (solar5n != 0) {solar5n -= 1}
  document.getElementById('solar-5kw-number').innerHTML = solar5n
}

document.getElementById('wind1').innerHTML = '0'
function wind1Add() {
  console.log('Wind 1 Added')
  wind1n += 1
  document.getElementById('wind1').innerHTML = wind1n
}

function wind1Remove() {
  console.log('Wind 1 Removed')
  if (wind1n != 0) {wind1n -= 1}
  document.getElementById('wind1').innerHTML = wind1n
}

document.getElementById('nuclear').innerHTML = '0'
function nuclearAdd() {
  console.log('Nuclear Added')
  nuclearn += 1
  document.getElementById('nuclear').innerHTML = nuclearn
}

function nuclearRemove() {
  console.log('Nuclear Removed')
  if (nuclearn != 0) {nuclearn -= 1}
  document.getElementById('nuclear').innerHTML = nuclearn
}

document.getElementById('solarF').innerHTML = '0'
function solarFAdd() {
  console.log('Solar F Added')
  solarFn += 1
  document.getElementById('solarF').innerHTML = solarFn
}

function solarFRemove() {
  console.log('Solar F Removed')
  if (solarFn != 0) {solarFn -= 1}
  document.getElementById('solarF').innerHTML = solarFn
}

document.getElementById('hybrid').innerHTML = '0'
function hybridAdd() {
  console.log('Hybrid Added')
  hybridn += 1
  document.getElementById('hybrid').innerHTML = hybridn
}

function hybridRemove() {
  console.log('Hybrid Removed')
  if (hybridn != 0) {hybridn -= 1}
  document.getElementById('hybrid').innerHTML = hybridn
}

document.getElementById('pHybrid').innerHTML = '0'
function pHybridAdd() {
  console.log('pHybrid Added')
  pHybridn += 1
  document.getElementById('pHybrid').innerHTML = pHybridn
}

function pHybridRemove() {
  console.log('pHybrid Removed')
  if (pHybridn != 0) {pHybridn -= 1}
  document.getElementById('pHybrid').innerHTML = pHybridn
}

document.getElementById('eV').innerHTML = '0'
function eVAdd() {
  console.log('ev Added')
  evn += 1
  document.getElementById('eV').innerHTML = evn
}

function eVRemove() {
  console.log('ev Removed')
  if (evn != 0) {evn -= 1}
  document.getElementById('eV').innerHTML = evn
}