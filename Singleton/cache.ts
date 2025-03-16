class SingleCache{
    private static instance : SingleCache;
    private cache : Map<string, string>;
    private constructor(){
        this.cache = new Map();
    }
    public static getInstance(){
        if(!this.instance){
            this.instance = new SingleCache();
        }
        return this.instance;
    }
    public get(key : string){
        return this.cache.get(key);
    }
    public set(key : string, value : string){
        this.cache.set(key, value);
    }
    public delete(key : string){
        this.cache.delete(key);
    }
    public print(){
        console.log(this.cache);
    }
}

export default SingleCache;