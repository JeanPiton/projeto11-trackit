const urls = {
    Login:"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
    SignUp:"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
    List:"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
    Create:"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
    Remove:"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO"
}

function Parse(url,id){
    return url.replace("ID_DO_HABITO",id);
}

export default urls;

export {Parse};