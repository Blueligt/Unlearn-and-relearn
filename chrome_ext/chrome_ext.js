let myLeads = []
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const delBtn = document.getElementById("delete-btn")
const saveTab = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse( (localStorage.getItem("myLeads")))
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url: "www.google.com"}
// ]

saveTab.addEventListener('click', function() {
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     myLeads.push(tabs[0].url)
    //     localStorage.setItem("myLeads", JSON.stringify(myLeads))
    //     render(myLeads)
    // })

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    // console.log(tabs[0].url)
    // myLeads.push(tabs[0].url)
    // localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // render(myLeads)
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
                </a>
            </li>
        `
    
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

delBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
saveBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
    // console.log(localStorage.getItem("myLeads"))
})






// let tryBox = document.getElementById("try")
// let openBox = document.getElementById("open")

// openBox.addEventListener('click', function() {
//     tryBox.textContent = "You have opened the box"
// })