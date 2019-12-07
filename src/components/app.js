class App{

    constructor(){
        this.heroes = []
        this.fetchAndRenderHeroes()
        this.container = document.querySelector('#app-container')
    }

    async fetchAndRenderHeroes(){
        try{
            this.heroes = await Hero.fetchAll()
            this.render()
        }catch(err){
            alert(`There was a problem retrieving info from the database: ${err}`)
        }
    }

    render(){
        this.container.innerHTML = this.heroes.map(h => h.html).join('')
    }

}