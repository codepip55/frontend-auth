import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, filter, first, firstValueFrom, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loadingSubject: BehaviorSubject<boolean>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.loadingSubject = new BehaviorSubject<boolean>(true);
  }

  handleCallback() {
    let nonce: string;
    this.loadingSubject.next(true);
    this.route.queryParamMap.pipe(
      tap(qs => nonce = qs.get('state') || ''),
      filter(qs => !!qs.get('redirect')),
      filter(qs => !!qs.get('response_type')),
      filter(qs => !!qs.get('client_id')),
      filter(qs => !!qs.get('redirect_uri')),
      filter(qs => !!qs.get('scope')),
      first(),
    ).subscribe(
      res => {
        // @ts-expect-error
        let params = res.params
        console.log(params)
        this.loadingSubject.next(false);
    })
  }

  async login(email: string, password: string) {
    this.loadingSubject.next(true);
    let req = this.http.post(`${environment.apiUrl}/oauth2/password`, {
      email,
      password
    })
    let res = await firstValueFrom(req)
    if (res) {
      // Continue API Authorization
    } else {
      // Show error
    }
    this.loadingSubject.next(false);
  }

  async signup(nameFirst: string, nameLast: string, email: string, password: string) {
    this.loadingSubject.next(true);
    let req = this.http.post(`${environment.apiUrl}/users`, {
      nameFirst,
      nameLast,
      email,
      password,
      groups: [],
      isActive: false,
      isBanned: false,
    })
    let res = await firstValueFrom(req)
    console.log('user', res)
  }

}
