export class mailModel{
    userId:number;
    id:number;
    name:string;
    postId:number;
    title:string;
    body:string;
    email:string;


    constructor(data:any = {}){
        this.userId = data.userId;
        this.id = data.id;
        this.name = data.name;
        this.title = data.title;
        this.postId = data.postId;
        this.body = data.body;
        this.email = data.email;
    } 
}