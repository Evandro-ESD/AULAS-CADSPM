O que são Funções Síncronas?
Uma função síncrona é executada de cima para baixo, linha por linha, e bloqueia o restante do código até que ela seja concluída.

Em outras palavras, cada etapa espera a anterior terminar antes de continuar.

Vantagens das Funções Síncronas
Vantagem	                    			Explicação
Simples de entender	            		Executa na ordem que está no código
Mais fácil de depurar	        		Você pode acompanhar passo a passo
Previsível	                    			Ideal para operações imediatas (como cálculos)
Boa para algoritmos pequenos		Onde não há dependência de tempo ou rede

Diferença principal:
Função síncrona: o código executa linha por linha, bloqueando o restante até 
que cada instrução termine.

Função assíncrona: permite aguardar uma operação sem travar o restante do código, 
usando async/await ou .then().

Quando usar cada uma?
Situação	                                					Tipo de função ideal
Cálculos simples, sem espera	            			        Síncrona
Formatações, mensagens, manipulação DOM		                    Síncrona
Requisições HTTP (API, banco de dados)	    		            Assíncrona
Esperar tempo (setTimeout)	                			        Assíncrona
Upload/download de arquivos	                			        Assíncrona

Resumo:
async: transforma a função em uma função que retorna uma Promise. (Assíncrona)

await pausa a execução dentro da função até a resposta chegar.

Usadas para tarefas demoradas, como requisições HTTP, leitura de arquivos, timers e operações
assíncronas em geral.