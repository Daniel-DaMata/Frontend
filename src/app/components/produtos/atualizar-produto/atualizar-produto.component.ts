import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../Model/IProduto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {


  produto: IProduto ={
    nome: '',
    validade: new Date(),
    precoProduto: 0
  };

  constructor(
    private produtosServices: ProdutosService,
     private router: Router,
      private activateRouter: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = Number(this.activateRouter.snapshot.paramMap.get('id'));
    this.produtosServices.buscarPorId(id).subscribe(retorno => {
      this.produto = retorno;
    });

  } 

  salvarProduto(): void {
    this.produtosServices.atualizar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosServices.exibirMensagem(
        'Sistema',
        `${this.produto.nome} foi atualizado com sucesso.`,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });

  }

}
