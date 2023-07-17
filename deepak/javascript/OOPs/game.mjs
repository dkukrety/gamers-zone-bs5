class Game
{
    constructor(title,genere,platform,releasedate,description)
    {
        this.title = title;
        this.genere=genere;
        this.platform = platform;
        this.releasedate = releasedate;
        this.description = description;
    }

    displayInfo(){
        //can we display properties automatically, instead of console.log
        console.log(this.title);
        Object.entries(this).forEach(elem => console.log(elem));
        


    }
}
export default Game;