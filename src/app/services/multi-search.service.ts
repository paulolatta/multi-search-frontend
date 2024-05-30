import { ApiConfigService } from './api-config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultiSearchService {
  apiUrl: string;

  constructor(private http: HttpClient, private api: ApiConfigService) {
    this.apiUrl = this.api.getUrl();
  }

  getListTeste(texto: string): Observable<DataResults> {
    return this.http.get<DataResults>(`${this.apiUrl}/search?keyword=${texto}`);
  }
}

export interface Equipment {
  EquipmentID: string;
  EquipmentName: string;
}

export interface Workforce {
  WorkforceID: string;
  Name: string;
  Shift: string;
}

export interface PurchaseOrder {
  PurchaseOrderID: string;
  DeliveryDate: string;
  Supplier: string;
  MaterialID: string;
  MaterialName: string;
  Quantity: number;
  TotalCost: number;
}

export interface Material {
  MaterialID: string;
  MaterialName: string;
}

export interface SalesOrder {
  SalesOrderID: string;
  DeliveryDate: string;
  Customer: string;
  MaterialID: string;
  MaterialName: string;
  Quantity: number;
  TotalValue: number;
}

export interface DataEach {
  id: string;
  name: string;
  quantity?: number;
}

export interface DataResults {
  Equipment?: Equipment[];
  Workforce?: Workforce[];
  PurchaseOrder?: PurchaseOrder[];
  Material?: Material[];
  SalesOrder?: SalesOrder[];
}
