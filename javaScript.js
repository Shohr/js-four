let user = [
    {
        name: "Alex"
    },
    {
        name: "John"
    },
    {
        name: "Cardiel"
    },
    {
        name: "Jimmy"
    },
    {
        name: "Jerry"
    },
    {
        name: "Bruno"
    },
    {
        name: "Robert"
    },
    {
        name: "Uroboros"
    },
    {
        name: "Roki"
    },
    {
        name: "Loki"
    },
]

function userLength(user){
    for(let i = 0; i < user.length; i++){
        if(i < 5){
            console.log (user + " 5 ta harfdan kichik")
        }else if(i>5){
            console.log (user + " 5 ta harfdan katta")            
        }else if(i==5){
            console.log (user + " 5 ta harfga teng")            
        }
    }
}
userLength(user)