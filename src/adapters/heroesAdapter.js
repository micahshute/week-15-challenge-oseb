class HeroesAdapter extends BaseAdapter{

   static async fetchAll(){
       const res = await fetch(`${this.baseURL}/heroes`)
       this.checkResponse(res)
       return await res.json()
   }

}