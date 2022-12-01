import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from '../../Model/IProduto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-ProdutosService',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: IProduto ={
    nome: '',
    validade: new Date(),
    precoProduto: 0
  };

  constructor(private produtosServices: ProdutosService, private router: Router) { }

  ngOnInit(): void {} 

  salvarProduto(): void {
    this.produtosServices.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosServices.exibirMensagem(
        'Sistema',
        `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });

  }

}
