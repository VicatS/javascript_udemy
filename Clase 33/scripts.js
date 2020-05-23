const form = document.getElementById('form')
const characters = document.getElementById('characters')
const table = document.getElementById('table')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    getData(characters.children[characters.selectedIndex].value)
})

const getData = (id) => {
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    if (id == undefined) {
        xhr.open('GET', 'marvel.php')

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)

            const fragment = document.createDocumentFragment()

            for (const heroes of dataJSON) {
                const option = document.createElement('OPTION')
                option.setAttribute('value', heroes.ID)
                option.textContent = heroes.Name
                fragment.appendChild(option)
            }

            characters.appendChild(fragment)
        })
    } else {
        xhr.open('GET', `marvel.php?id=${id}`)

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)

            const fragment = document.createDocumentFragment()

            for (const heroe of dataJSON) {
                const row = document.createElement('TR')
                const dataName = document.createElement('TD')
                const dataAlignment = document.createElement('TD')
                const dataHometown = document.createElement('TD')
                const dataGender = document.createElement('TD')
                const dataFighting = document.createElement('TD')
                dataName.textContent = heroe.Name
                dataAlignment.textContent = heroe.Alignment
                dataHometown.textContent = heroe.Hometown
                dataGender.textContent = heroe.Gender
                dataFighting.textContent = heroe.Fighting_Skills

                row.appendChild(dataName)
                row.appendChild(dataAlignment)
                row.appendChild(dataHometown)
                row.appendChild(dataGender)
                row.appendChild(dataFighting)

                fragment.appendChild(row)
            }
            if (table.children[1])
            {
                table.removeChild(table.children[1])
            }
            table.appendChild(fragment)

        })

    }

    xhr.send()
}

getData()