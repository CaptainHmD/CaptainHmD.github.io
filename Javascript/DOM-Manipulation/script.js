console.log('hello');
let title = document.getElementById('title')

title.innerHTML='<h2>i changged<h2>' // to make i changged massage h2 u have to use innerHTML
let massage = 'Hi i Channged again'
title.innerHTML = `<h2> ${massage} .<h2>`
