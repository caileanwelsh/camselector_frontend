import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatInputModule, MatProgressBarModule, MatCardModule],
    exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatInputModule, MatProgressBarModule, MatCardModule]
})

export class MyMaterialModule {}