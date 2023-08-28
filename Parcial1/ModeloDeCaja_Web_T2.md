
# Modelo de caja #

El termino de "modelo de caja" es usado en CSS para referirse al diseño y disposición.  
En escencia este modelo se representa como una "caja" que engloba los elementos del HTML, estos elementos consisten en: márgenes, bordes, el relleno y el contenido actual (margin, border, padding and content).

![Imagen de referencia](https://th.bing.com/th/id/OIP.vyLu4qoPfsAMiT5aGfDdtQAAAA?pid=ImgDet&rs=1 "Imagen de referencia")


A continuación una pequeña definición de de las partes anteriormente mencionadas:

+ **Contenido:** El contenido de la caja, donde las imagenes y el texto aparece.
+ **Relleno:** Limpia o libera un área alrededor del texto, este relleno es transparente.
+ **Bordes:** Es un borde que rodea el relleno y el contenido.
+ **Márgenes:** Limpia o libera el área alrededor del borde, el márgen es transparente.

El modelo de caja nos permite añadir un borde alrededor de un elemento y a definir espacio entre estos.

Un ejemplo es el siguiente código:


    div
    {
        background-color: lightgray; 
             width: 300px;  
                 border: 20px solid black;  
                    padding: 10px;    
    }  
(Okay queria hacer un recuadro con las propiedades anteriores pero conlleva codigo de html y la idea es realizar este archivo unicamente con MarkDown)

### ***Ahora vamos con la propiedad display*** ###



La propiedad **display** especifica el comportamiento de visualización de un elemento.  
A continuación una tabla de los valores que esta propiedad puede tener:

**Valores `<display-outside>`**  
display: block;  
display: inline;  
display: run-in;  

**Valores `<display-inside>`**
display: flow;  
display: flow-root;  
display: table;  
display: flex;  
display: grid;   
display: ruby;  
display: subgrid;  

**Valores `<display-outside>` más valores `<display-inside>`**  
display: block flow;  
display: inline table;  
display: flex run-in;  

**Valores `<display-listitem>`**  
display: list-item;  
display: list-item block;  
display: list-item inline;  
display: list-item flow;  
display: list-item flow-root;  
display: list-item block flow;  
display: list-item block flow-root;  
display: flow list-item block;  

**Valores `<display-internal>`**  
display: table-row-group;  
display: table-header-group;  
display: table-footer-group;  
display: table-row;  
display: table-cell;  
display: table-column-group;  
display: table-column;  
display: table-caption;  
display: ruby-base;  
display: ruby-text;  
display: ruby-base-container;  
display: ruby-text-container;  

**Valores `<display-box>`**  
display: contents;  
display: none;  

**Valores `<display-legacy>`**  
display: inline-block;  
display: inline-table;  
display: inline-flex;  
display: inline-grid;  

**Valores globales**  
display: heredar;  
display: initial;  
display: unset;  

[**Fuente del modelo de caja**](https://www.w3schools.com/css/css_boxmodel.asp)

[**Para más informacion sobre los valores de la propiedad display haz clic aquí**](https://developer.mozilla.org/es/docs/Web/CSS/display)  
[**O aqui**](https://www.w3schools.com/cssref/pr_class_display.php)







