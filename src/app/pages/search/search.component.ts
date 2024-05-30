import {
  DataEach,
  DataResults,
  MultiSearchService,
} from '../../services/multi-search.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Component } from '@angular/core';
import { ResultsComponent } from '../../components/results/results.component';
import { SimpleInputComponent } from '../../components/simple-input/simple-input.component';
import { tap } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  imports: [ReactiveFormsModule, SimpleInputComponent, ResultsComponent],
})
export class SearchComponent {
  results: DataResults | undefined;
  equipments: DataEach[] = [];
  materials: DataEach[]  = [];
  purchase: DataEach[] = [];
  sales: DataEach[] = [];
  workforce: DataEach[] = [];

  contador: number = 0;

  formSearch = new FormGroup({
    texto: new FormControl(''),
  });

  constructor(private api: MultiSearchService) {}

  onSubmit(): void {
    const searchText = this.formSearch.get('texto')!.value;
    if (searchText) {
      this.cleanData();
      this.api.getListTeste(searchText as string)
        .pipe(
          tap((res: DataResults) => this.results = res),
          tap(() => this.normalize())
        )
        .subscribe();
    }
  }

  cleanData(): void {
    this.equipments = [];
    this.materials = [];
    this.purchase = [];
    this.sales = [];
    this.workforce = [];
    this.contador = 0;
  }

  normalize(): void {
    if (this.results) {
      const { Equipment, Material, PurchaseOrder, SalesOrder, Workforce } = this.results;

      this.equipments = Equipment?.map(each => ({ name: each.EquipmentName, id: each.EquipmentID })) || [];
      this.materials = Material?.map(each => ({ name: each.MaterialName, id: each.MaterialID })) || [];
      this.purchase = PurchaseOrder?.map(each => ({ name: each.MaterialName, id: each.MaterialID, quantity: each.Quantity })) || [];
      this.sales = SalesOrder?.map(each => ({ name: each.MaterialName, id: each.MaterialID, quantity: each.Quantity })) || [];
      this.workforce = Workforce?.map(each => ({ name: each.Name, id: each.WorkforceID })) || [];

      this.contador = [this.equipments, this.materials, this.purchase, this.sales, this.workforce]
        .reduce((acc, curr) => acc + curr.length, 0);
    }
  }
}
