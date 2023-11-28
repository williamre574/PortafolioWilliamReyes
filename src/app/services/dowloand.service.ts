import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DowloandService {

  downloadFile() {
    // Puedes ajustar la ruta del archivo o la lógica de descarga según tus necesidades
    const filePath = '../../assets/CV-WilliamReyes.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'CV-WILLIAMREYES.pdf';
    link.click();
  }

  constructor() { }
}
