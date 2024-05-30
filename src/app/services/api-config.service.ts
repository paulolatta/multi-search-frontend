import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  baseUrl: string = environment.baseUrl;

  constructor() {}

  public getUrl(): string {
    return this.baseUrl;
  }
}
