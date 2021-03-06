## VTEX - Anotações

<p>Esse arquivo tem como objetivo server como um bloco de notas/anotações relacionadas a Vtex.</p>

><p>*O arquivo conterá partes em português e inglês*.</p>

<p><strong>What is VTEX:</strong> VTEX is the Enterprise Digital Commerce Platform that enables brands and retailers to achieve faster time to market, reach their customers across any channel, and uncover new growth areas.</p>


<h2>Catálogo</h2>

<p>O catálogo da VTEX é o que permite o cliente (empresa que utiliza VTEX) adicionar, excluir, atualizar ou modificar produtos, que são armazenados nos *cloud servers* da VTEX, a partir disso, o desenvolvedor pode realizar a integração entre a plataforma e o site da empresa.</p>

Dentro do catálogo existe diversas opções para serem exploradas, mas vamos focar em duas principais: <strong>Produtos e SKUs</strong></p>


><p>Produtos: É aquilo que vai ser vendido, é cadastrado por alguém, um produto é como se fosse algo genérico, como por exemplo "camisa".</p>
><p>SKUs(Stock Keeping Units): São como se fosse a variação de algum produto (cada SKU tem um *ID* próprio).</p>

><p>*Os produtos podem variar por modelo, cor, tamanho, entre outras características. Logo, seria possível ter a mesma Camisa (produto) no modelo T-Shirt, Regata ou Manga Comprida; nas cores Branca, Preta ou Estampada; nos tamanhos P, M ou G. Nesse exemplo, um dos SKUs do produto "Camisa" poderia ser "Camisa Manga Comprida Estampada P".*</p>
<br>
<p>Além disso, também temos as marcas, que também são cadastradas pelo cliente, cada produto obrigatoriamente precisa de pelo menos 1 SKU e uma marca.</p>

<h2>Preços, promoções e taxas</h2>

><p>Cada produto tem seu respectivo preço base, esse preço é calculado a partir de dois fatores, o preço de custo e o Markup Inicial (Lucro desejado com base no preço de custo), temos diferentes formas de adicionar, modificar ou remover preços, uma delas é a precificação em massa, que basicamente aplica um mesmo preço para uma série de produtos selecionados.</p>
><p>Além disso, também temos as políticas de preços, que são por exemplo, a mudança de preços com diferentes moedas, como o real e o dolar, além disso, essas políticas também podem funcionar como descontos relacionados a atacados.</p>
><p>Outro aspecto importante é o arredondamento de preços, basicamente, um produto que custa R$100, vai estar custando na verdade, R$99,99, algo que chamamos de preço psicológico, que incentiva a compra, quando o cliente vê um preço menor que o preço inteiro, ele acaba tendo uma tendência maior a comprar.</p>

<p>Outra coisa é a configuração de limite de acrescimo e desconto de produtos, que também pode ser definida pelo cliente (loja)</p>

<h3>Promoções e campanhas</h3>

<p>Temos algo chamado de campanha, que basicamente é algo que criamos, que contém todas as condições necessárias pra uma promoção, cada campanha é acompanhada de seu nome, descrição e duração da campanha (data de ínicio e de fim, hora de ínicio e de fim), além disso, também escolhemos quais SKUs participarão da campanha e o valor mínimo e máximo para a campanha possa ser aplicada e também temos a promoção em si, que é chamada de "público-alvo" dentro da campanha.</p>


*<p>Temos diversos tipos de promoções, por exemplo, a promoção de frete grátis, compre 6 e page 5, promoção regular, compre e ganhe e promoções de campanha.</p>*

<p>Também temos os cupons de desconto, que funcionam juntamente com as promoções</p> 

<h3>Taxas</h3>

<p>As taxas são basicamente o contrário das promoções, podem ser impostos, taxas, CMS, funciona da mesma forma das promoções, ela basicamente faz o preço subir por algum motivo, podendo essa taxa ser: Nominal, Percentual, com base em alguma fórmula ou sobre o frete</p>

<h2>Pedidos</h2>

<p>A VTEX tem duas formas de calcular o frete para o cliente, sendo elas: <strong>Com base no peso real do produto e com base no peso cúbico do produto</strong></p>

>Docas: As docas são os pontos onde a transportadora retirará o produto para entrega.

<h2>Pagamentos</h2>

<p></p>
