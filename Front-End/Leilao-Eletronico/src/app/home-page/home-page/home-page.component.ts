import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void
  {}

  private name: string = '';
  public isNameValid: boolean = false;
  public errorMessage: string = '';
  public errorType: number = 0;

  saveName(inputName: string)
  {
    this.name = inputName;
    localStorage.clear();
    localStorage.setItem("Name", this.name);
  }

  validatorName(inputName: string)
  {
    console.log('valor:' + inputName);

    this.isEmptyName(inputName)
    this.isOnlyLetters(inputName)
    console.log("antes do if: "+this.isNameValid);



    if(this.isNameValid && this.errorType == 0)
    {
      console.log("nome valido");
      this.errorMessage = '';
      this.saveName(inputName);
    }
  }

  private isEmptyName(name: string)
  {
    name = name.trim();

    this.isNameValid = (name == '')?false:true;

    if(!this.isNameValid)
    {
      console.log("if vazio")
      this.errorMessage = 'Nome é Obrigatório';
      this.errorType = -1;
      return;
    }

    if(this.errorType != -2)
      this.errorType = 0;
  }

  private isOnlyLetters(name: string)
  {
    let numbers: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for(let i = 0; i < numbers.length; i++)
    {
      this.isNameValid = (name.includes(numbers[i]))?false:true;

      if(!this.isNameValid)
      {
        this.errorMessage = 'Permitido Somente Letras';
        this.errorType = -2;
        return;
      }
      if(this.errorType != -1)
        this.errorType = 0;
    }
  }

}
