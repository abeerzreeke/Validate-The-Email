//Exercise 2 : Validate The Email

let newBody = document.querySelector('body')
let newForm = document.createElement('form')
let newTextNode = document.createTextNode('Please Write Your Email Address');

newForm.style.border = '3px solid #f1f1f1'
newBody.appendChild(newForm)
newForm.appendChild(newTextNode)

let newDiv = document.createElement('div')
newDiv.className = 'container'
newDiv.style.padding = '16px'

newForm.appendChild(newDiv)

let newLabel = document.createElement('label')
newDiv.appendChild(newLabel)

let newB = document.createElement('b')
let newTextB = document.createTextNode('E-mail');
newLabel.appendChild(newTextB)

let newInput = document.createElement('input')
newInput.type = 'email'
newInput.placeholder = 'Enter E-mail'
newInput.name = 'uname'
newInput.required = 'true'
newInput.style.width = '100%'
newInput.style.padding = '12px 20px'
newInput.style.margin = '8px 0'
newInput.style.display = 'inline-block'
newInput.style.border = '1px solid #ccc'
newInput.style.boxSizing = 'border-box'

newDiv.appendChild(newInput)

let newSubmit = document.createElement('button')
let newTextSub = document.createTextNode('validation for the email')
newSubmit.setAttribute('onclick','validate()')

newSubmit.type = 'submit'
newSubmit.style.backgroundColor = '#4CAF50'
newSubmit.style.color = 'white'
newSubmit.style.padding = '14px 20px'
newSubmit.style.margin = '8px 0'
newSubmit.style.border = 'none'
newSubmit.style.cursor = 'pointer'
newSubmit.style.width = '100%'

newSubmit.appendChild(newTextSub)
newDiv.appendChild(newSubmit)
