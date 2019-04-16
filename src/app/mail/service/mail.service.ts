import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { }



postMail(id):Observable<any>{
  console.log("service", id)
  return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)

}
}
