let idIncrement = 0; //авто-инкремент
let contact = {
    "id": 0,
    "name": " ",
    "phone": " ",
    "isElected": false,
};

// настройки
const file = {
    // рекомендуемое название файла
    suggestedName: 'resources/txt/contactList.txt',
    types: [
        {
            description: 'Text',
            accept: {
                'text/plain': '.txt'
            }
        }
    ],
    excludeAcceptAllOption: true
}

const addButton = document.querySelector('#add_button');
//Данные контакта
const inputName = document.querySelector('#name');
const phone = document.querySelector('#phone');
const isElected = document.querySelector('#elected');

//Обработка ивентов формы добавления
isElected.addEventListener("change", function (){
    contact[isElected.value] = isElected.checked;
})
addButton.addEventListener("click",function (){
    if (inputName.value != "" && phone.value != "")
        {
            idIncrement++;
            contact.id = idIncrement;
            contact.name = inputName.value;
            contact.phone = phone.value;
            let json = JSON.stringify(contact);
            console.log(json);
        }
    else{
        let error = document.createElement('div');
        error.className = "alert";
        error.innerHTML = "Вы не ввели все данные ! Повторите попытку";
        document.querySelector(".wrapper").before(error);
        sleep(700).then(() => {window.location.reload();})
    }
    }
)

//
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function loadContacts() {
    reader.readAsText(contactList);
    reader.onload = function () {
        console.log(reader.result)
    }
}