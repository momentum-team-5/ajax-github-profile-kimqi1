
// const baseUrl = 'https://api.github.com'

// let username = 'kimqi1'
// let path = 'users'
// let finalUrl = baseUrl + path + usename

const userUrl = 'https://api.github.com/users/kimqi1'
const targetEl = document.querySelector('user-name')
const orgSection = document.querySelector('#org-data')


fetch(userUrl)
    .then(response => response.json())
    .then(function (data) {
        console.log(data)
        const headerEl = document.createElement('h1')
        headerEl.innerText = data.login
        targetEl.appendChild(headerEl)
      })
      
const orgUrl = 'https://api.github.com/orgs/momentum-team-5'      

fetch(orgUrl)      
    .then(response => response.json())
    .then(data=> {
        console.log(data)
        let h2 = document.createElement('h2')
        h2.innerText=data.name
        orgSection.appendChild(h2)
        return data.repos_url
    })

    .then(reposUrl=> fetch(reposUrl))
    .then(response => response.json())
    .then(data => {
        let repoList = document.createElement ('ul')

    })
    // let headerEl = document.createElement('h1')
    // h1.innerText = data.login
    // headerEl.innerText = data.login
    // targetEl.appendChild(headerEl)

// })

