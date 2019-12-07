class Hero{

    static async fetchAll(){

        const heroObjects = await HeroesAdapter.fetchAll()
        return heroObjects.map(o => new Hero(o))

    }

    constructor(params){
        const { name, mainTrait, accomplishments } = params
        this.name = name
        this.trait = mainTrait
        this.accomplishments = accomplishments
    }

    get html(){
        return (`
        <div class="hero-card">
            <h3>${this.name}</h3>
            <h4>Best trait: ${this.trait}</h4>
            <p>Accomplishments:</p>
            <ul>    
                ${this.accomplishments.map(a => `<li>${a}</li>`).join('')}
            </ul>
        </div>
        `)
    }

}