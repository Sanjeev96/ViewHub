import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule
  ],

  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule
  ],
})

export class MaterialModule { }
