import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void
  {}

  private name: string = '';
  public isNameValid: boolean = false;
  public errorMessage: string = '';
  public errorType: number = -999;

  saveName(inputName: string)
  {
    this.name = inputName;
    localStorage.clear();
    localStorage.setItem("Name", this.name);
  }

  callRouter(url: string)
  {
    this.router.navigateByUrl(url);
  }

  validatorName(inputName: string)
  {
    if(this.isEmptyName(inputName) && this.isOnlyLetters(inputName))
      this.errorType = 0;

    if(this.errorType == 0)
    {
      console.log("nome valido");
      this.errorMessage = '';
      this.saveName(inputName);
    }
  }

  private isEmptyName(name: string) : boolean
  {
    name = name.trim();

    this.isNameValid = (name == '')?false:true;

    if(!this.isNameValid)
    {
      console.log("if vazio")
      this.errorMessage = 'Nome é Obrigatório';
      this.errorType = -1;
      return false;
    }
    return true;
  }

  private isOnlyLetters(name: string) : boolean
  {
    let numbers: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let specialCharacters: string[] = [',','.','\"','\\','\'','!','@','#','$','%','¨','&','*','(',')','-','_','+','=','*', '|','/','<','>','´','[','{',']','}',':',';','^','~'];
    for(let i = 0; i < numbers.length; i++)
    {
      this.isNameValid = (name.includes(numbers[i]))?false:true;

      if(!this.isNameValid)
      {
        this.errorMessage = 'Permitido Somente Letras';
        this.errorType = -2;
        return false;
      }
    }

    for(let i = 0; i < specialCharacters.length; i++)
    {
      this.isNameValid = (name.includes(specialCharacters[i]))?false:true;

      if(!this.isNameValid)
      {
        this.errorMessage = 'Permitido Somente Letras';
        this.errorType = -2;
        return false;
      }
    }
    return true;
  }

}
