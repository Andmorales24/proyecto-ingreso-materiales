document.getElementById("table")+=


						"<div class='row header'>"+
                            "<div class='cell'>"+
								"Codigo"
							"</div>"+
							"<div class='cell'>"+
								"Nombre"
							"</div>"+
							"<div class='cell'>"+
								"Seccion"+
							"</div>"+
							"<div class='cell'>"+
								"Nivel"+
							"</div>"+
							"<div class='cell'>+
								"Especialidad"
							"</div>"+
                            "<div class='cell'>+
								"Logo"
							"</div>"+
                            "<div class='cell'>+
								"Aula"
							"</div>"+
                                "<div class='cell'>+
								"Integrantes"
							"</div>"+
                                "<div class='cell'>+
								"MaterialesElec"
							"</div>"+
                                "<div class='cell'>+
								"MaterilesNoElec"
							"</div>"+
						"</div>";



            for (var ele in datad){
                document.getElementById("table").innerHTML += 
						"<div class='row'>"+
							"<div class='cell' data-title='Full Name'>+
								datad[ele].codigo;+
							"</div>"+
                            "<div class='cell' data-title='Age'>"+
								datad[ele].nombre;+
							"</div>"+
                            "<div class='cell' data-title='Full Name'>+
								datad[ele].seccion;+
							"</div>"+
                            "<div class='cell' data-title='Full Name'>+
								datad[ele].nivel;+
							"</div>"+
                            "<div class='cell' data-title='Full Name'>+
								datad[ele].especialidad;+
							"</div>"+
                            "<div class='cell' data-title='Full Name'>+
								datad[ele].urllogo;+
							"</div>"+
                            "<div class='cell' data-title='Full Name'>+
								datad[ele].aula;+
							"</div>"+
                            "<div class='cell' data-title='Full Name'>+
								datad[ele].nombre;+"<button type='submit' onclick='annadirIntegranteTabla(\""+datad[ele].nombre +"\","+JSON.stringify(datad[ele].integrantes)+")'>Añadir</button>"+
							"</div>"+
                           
						"</div>";
