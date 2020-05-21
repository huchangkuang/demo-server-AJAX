//AJAX加载CSS
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 400) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else { alert("加载CSS失败") }
        }
    }
    request.open("GET", "style.css")
    // request.onload = () => {
    //     console.log(request.response)
    //     const style = document.createElement('style')
    //     style.innerHTML = request.response
    //     document.head.appendChild(style)
    // }
    // request.onerror = () => {
    //     console.log("失败了")
    // }
    request.send()
}
//AJAX加载JS
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "2.js")
    request.onload = () => {
        console.log(request.response)
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log("请求失败")
    }
    request.send()
}
//AJAX加载HTML
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "3.html")
    request.onload = () => {
        console.log(request.response)
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log("请求失败")
    }
    request.send()
}
//AJAX加载XML
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "style.css")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 400) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text)
            } else { alert("加载CSS失败") }
        }
    }
    request.send()
}
//AJAX加载JSON
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "5.JSON")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send()
}
//AJAX分页加载
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n += 1
        }
    }
    request.send()
}