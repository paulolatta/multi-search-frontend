import {
  DataEach,
  DataResults,
  MultiSearchService,
} from '../../services/multi-search.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Component } from '@angular/core';
import { ResultsComponent } from '../../components/results/results.component';
import { SimpleInputComponent } from '../../components/simple-input/simple-input.component';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  imports: [ReactiveFormsModule, SimpleInputComponent, ResultsComponent],
})
export class SearchComponent {
  results: DataResults | undefined;
  equipments: DataEach[] | undefined = [];
  materials: DataEach[] | undefined = [];
  purchase: DataEach[] | undefined = [];
  sales: DataEach[] | undefined = [];
  workforce: DataEach[] | undefined = [];

  contador: number = 0;

  formSearch = new FormGroup({
    texto: new FormControl(''),
  });

  constructor(private api: MultiSearchService) {}

  onSubmit(): void {
    if (this.formSearch.get('texto')!.value) {
      this.cleanData();

      this.api
        .getListTeste(this.formSearch.get('texto')!.value as string)
        .subscribe((res: DataResults) => {
          this.results = res;
          this.normalize();
        });
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
    if (this.results?.Equipment) {
      this.contador = this.contador + this.results.Equipment.length;
      this.results.Equipment.forEach((each) => {
        const item = {
          name: each.EquipmentName,
          id: each.EquipmentID,
        };

        this.equipments?.push(item);
      });
    }

    if (this.results?.Material) {
      this.contador = this.contador + this.results.Material.length;

      this.results.Material.forEach((each) => {
        const item = {
          name: each.MaterialName,
          id: each.MaterialID,
        };

        this.materials?.push(item);
      });
    }

    if (this.results?.PurchaseOrder) {
      this.contador = this.contador + this.results.PurchaseOrder.length;

      this.results.PurchaseOrder.forEach((each) => {
        const item = {
          name: each.MaterialName,
          id: each.MaterialID,
          quantity: each.Quantity,
        };

        this.purchase?.push(item);
      });
    }

    if (this.results?.SalesOrder) {
      this.contador = this.contador + this.results.SalesOrder.length;

      this.results.SalesOrder.forEach((each) => {
        const item = {
          name: each.MaterialName,
          id: each.MaterialID,
          quantity: each.Quantity,
        };

        this.sales?.push(item);
      });
    }

    if (this.results?.Workforce) {
      this.contador = this.contador + this.results.Workforce.length;

      this.results.Workforce.forEach((each) => {
        const item = {
          name: each.Name,
          id: each.WorkforceID,
        };

        this.workforce?.push(item);
      });
    }
  }
}
