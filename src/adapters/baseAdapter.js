class BaseAdapter{

    static get baseURL(){
        return 'http://localhost:3000'
    }

    static get headers(){
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    static checkResponse(res){
        if(res.status < 200 || res.status > 299){
            throw new Error(res.status)
        }
    }

}