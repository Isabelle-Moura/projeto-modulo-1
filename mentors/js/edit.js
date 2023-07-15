//U = UPDATE
const url = 'http://localhost:3000/mentors'
const form = document.getElementById("form")
let mentorId = '' 

const getMentorIdUrl = () => {
    const paramsString = window.location.search
    const params = new URLSearchParams(paramsString)
    mentorId = params.get('id')
}

const getMentor = async () => {
    const apiResponse = await fetch(`${url}/${mentorId}`)
    const mentor = await apiResponse.json()
    console.log(mentor)

    return mentor
} 

const editMentor = async (mentor) => {
    await fetch(`${url}/${mentorId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mentor)
   })
   window.location = "../../mentors/html/index.html"
}

const loadFormData = async (mentor) => {
    document.getElementById("name").value = mentor.name
    document.getElementById("email").value = mentor.email
}

const loadData = async () => {
    getMentorIdUrl() 
    const mentor = await getMentor()
    loadFormData(mentor)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = form.elements['name'].value
    const email = form.elements['email'].value

    const mentor = {
        "name": name,
        "email": email
    }

    editMentor(mentor)
})

loadData()

//////////////////////////////////////////
//Redirecionamento das páginas 

//Botão para voltar para a página principal
const backButton = document.getElementById("backButton")

backButton.addEventListener ("click", function () {
    window.location.href = "../../mentors/html/index.html"
})

//"Side Menu"
const mentorsPage = document.getElementById("mentorsPage");
const mentorshipPage = document.getElementById("mentorshipPage");
const classesPage = document.getElementById("classesPage");
const studentsPage = document.getElementById("studentsPage");

mentorsPage.addEventListener ("click", function () {
    window.location.href = "../mentors/html/mentor_index.html"
})

mentorshipPage.addEventListener ("click", function () {
    window.location.href = "../mentorship/mentorship_index.html"
})

classesPage.addEventListener ("click", function () {
    window.location.href = "../classes/classes_index.html"
})

studentsPage.addEventListener ("click", function () {
    window.location.href = "../students/students_index.html"
})
//////////////////////////////////////////