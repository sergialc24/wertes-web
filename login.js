var usrs = [];
const url = 'https://wertes.herokuapp.com/users';





$(window).on("load", async() => {
    try {
        usrs = (await axios.get(`${url}`)).data;
        console.log(usrs);
    }
    catch (error) {
        console.log(err);
    }

    $('#form').on("submit", (event) => {
        event.preventDefault();
        var mail = $('#mail').val();
        var pass = $('#passwd').val();
        if(!mail || !pass) {
            $('#warning').html (
                `<div class="alert alert-danger danger" role="alert">
                    Missing some fields! 
                </div>`
            );
            return;
        }
        console.log(mail);
        let user;
        user = usrs.find(us => us.username === mail);
        
        if(user && pass === user.password) {
            console.log(user)
            window.location.href = "index.html";
        }
        else {
            $('#warning').html (
                `<div class="alert alert-danger danger" role="alert">
                    Wrong username or password! 
                </div>`
            );
        }
        return;
        
    });




})

