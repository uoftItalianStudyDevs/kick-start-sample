import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatCardModule,
  MatDialogModule, 
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatDividerModule,
  MatTabsModule,
  MatMenuModule,
} from '@angular/material';



@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDividerModule,
    MatTabsModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDividerModule,
    MatTabsModule,
    MatMenuModule
  ]
})

export class MaterialModule { }
