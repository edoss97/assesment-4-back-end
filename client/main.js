
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const createList = arr => {
    list.innerHTML = 'fortune List:'
    arr.forEach((fortune,index) => {
        let listItem = document.createElement('li')
        let fortuneSpan = document.createElement('span')
        let editForm = document.createElement('form')
        let editInput = document.createElement('input')

        editForm.appendChild(editInput)
        editForm.style.display = 'none'

        listItem.appendChild(editForm)
        listItem.appendChild(fortuneSpan)


        fortuneSpan.textContent = fortune
        deleteButton.textContent = "delete"
        deleteButton.id = index

        deleteButton.addEventListener('click', deleteFortune)

        list.appendChild(listItem)
    })
}


const getFortuneList = () => {
    axios.get('http://localhost:4000/api/compliment')
        .then(response => {
            createList(response.data)
        })
        .catch(err => console.log(err))
    }
const submitFortune = evt => {
        evt.preventDefault()
        axios.post('http://localhost:4000/api/compliment', {fortune: fortuneInput.value})
            .then(response => {let { data } = response
                createList(data)
            })
            .catch(err => console.log(err))
    }
const editFortune = evt => {
    evt.preventDefault()
    console.log(evt.target)
}

const eraseFortune = evt => {
    axios.delete(`http://localhost:4000/api/name/${id}`)
        .then(response => { let {data} = response
            createList(data)
        })
        .catch(err => console.log(err))
}

    
complimentBtn.addEventListener('click', getCompliment)
form.addEventListener('click', submitFortune)
