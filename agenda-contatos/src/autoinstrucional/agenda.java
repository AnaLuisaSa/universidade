//Criar uma agenda telefônica que salva nome, e-mail e número de telefone. Faça o seguinte
// menu:
// Digite:
//1-Para armazenar um novo contato
//2-Listar todos os contatos
//3-Buscar contato por nome
//4-Sair

package autoinstrucional;

import java.util.Scanner;

public class agenda {

	public static void main(String[] args) {

		Scanner ler = new Scanner(System.in); // declaracao scanner
		String[][] m = new String[50][3]; // declaracao matriz AGENDA
		int j, n, p, opcao;
		n = 0; // inicializa variavel LINHAS
		p = 0; // inicializa variavel NUMERO DE CONTATOS
		String nome;

		do { // garante que o usuario digite uma opcao valida
			System.out.println("\nEscolha uma das opcoes: ");
			System.out.println("1 - Armazenar novo contato ");
			System.out.println("2 - Listar todos os contatos ");
			System.out.println("3 - Buscar contato por nome ");
			System.out.println("4 - Sair ");
			opcao = ler.nextInt();
			ler.nextLine();

			switch (opcao) {

				case 1: // entra caso o usuario escolha a primeira opcao
					System.out.println("Informe os dados do contato ");
					j = 0; // inicializa variavel das COLUNAS
					p++; // incrementa uma unidade nos numeros de contatos
					System.out.println("Nome :"); // recebe nome
					m[n][j] = ler.nextLine();
					j++; // passa para a proxima posicao da coluna
					System.out.println("Telefone :"); // recebe email
					m[n][j] = ler.nextLine();
					j++;
					System.out.println("Email:"); // recebe email
					m[n][j] = ler.nextLine();
					while (m[n][j].indexOf('@') <= 0) { // garante um email valido
						System.out.println("Digite um email valido:"); // recebe telefone
						m[n][j] = ler.nextLine();
					}

					System.out.println("Contato salvo com sucesso");
					n++; // passa para a proxima linha

					break;

				case 2: // entra se o usuario escolher a 2 opcao
					if (p != 0) {
						System.out.println("Lista dos contatos "); // lista todos os contatos salvos
						System.out.println("  Nome   /   Telefone  /  Email ");
						for (n = 1; n <= p; n++) { // mostra a posicao dos contatos na agenda
							System.out.printf("" + n);

							for (j = 0; j < 3; j++) { // mostra todos os contatos
								System.out.printf(" " + m[n - 1][j] + "     ");
							}
							System.out.printf("\n");
						}
					} else { // entra se o usuario nao tiver salvado nenhum contato
						System.out.printf("Nenhum contato salvo!!");
					}

					break;

				case 3:
					if (p > 0) {
						System.out.println("Insira o nome:");
						nome = ler.nextLine();
						n = 1;
						j = 0;
						while (!(nome.equals(m[n - 1][j])) && n <= p) { // e executado ate encontrar o contato ou
																		// percorrer todos os contatos
							n++;
						}
						if (nome.equals(m[n - 1][j])) { // entra se o contato for encontrado e mostra os dados do mesmo
							System.out.println("Contato: " + n);
							System.out.println(" Nome    /  Telefone   /Email ");
							for (j = 0; j < 3; j++) {
								System.out.printf("" + m[n - 1][j] + "      ");
							}

						} else { // entra se o contato pesquisado nao estiver na agenda
							System.out.println("Contato não existente");
						}
					} else { // entra se nao tiver nenhum contato salvo na agenda
						System.out.println("\nNenhum contato cadasrado ainda!");
					}

					break;

				case 4:
					break;

				default:
					System.out.println("\nERRO: Valor invalido."); // entra se a opcao escolhida nao for valida
			}
		} while (opcao != 4);
		ler.close();
		System.out.println("Saindo..... \n FIM."); // entra se o usuario escolher o numero 4
	}
}
