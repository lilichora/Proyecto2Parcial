<?php
class consultas
{
    private $IdConsulta;
    private $IdPaciente;
    private $IdMedico;
    private $FechaConsulta;
    private $HI;
    private $HF;
    private $Diagnostico;
    private $con;

    function __construct($cn)
    {
        $this->con = $cn;
        //echo "EJECUTANDOSE EL CONSTRUCTOR MARCA<br><br>";
    }

    //******** 3.1 METODO update_consulta() *****************
    public function update_consultas()
    {
        $this->IdConsulta = $_POST['id'];
        $this->IdMedico = $_POST['medico'];
        $this->IdPaciente = $_POST['paciente'];
        $this->FechaConsulta = $_POST['fechaConsulta'];  
        $this->HI = $_POST['HI'];
        $this->HF = $_POST['HF'];
        $this->Diagnostico = $_POST['diagnostico'];
        

        //exit;
       $sql = "UPDATE consultas SET IdMedico=$this->IdMedico,
                              IdPaciente=$this->IdPaciente,
                              FechaConsulta='$this->FechaConsulta',
                              HI='$this->HI',
                              HF='$this->HF',
                              Diagnostico='$this->Diagnostico'
        WHERE IdConsulta = $this->IdConsulta;";



        echo $sql;
        //exit;

        if ($this->con->query($sql)) {
            echo $this->_message_ok("modificó");
        } else {
            echo $this->_message_error("al modificar");
        }
    }




    //******** 3.2 METODO save_consulta() *****************	

    public function save_consultas()
    {
        $this->IdMedico = $_POST['medico'];
        $this->IdPaciente = $_POST['paciente'];
        $this->FechaConsulta = $_POST['fechaConsulta'];
        $this->HI = $_POST['HI'];
        $this->HF = $_POST['HF'];  
        $this->Diagnostico = $_POST['diagnostico'];
        /*	echo "<br> FILES <br>";    
				echo "<pre>";
					print_r($_FILES);
				echo "</pre>";*/



        $sql = "INSERT INTO consultas VALUES(NULL,
											$this->IdPaciente,
											$this->IdMedico,
											'$this->FechaConsulta',
											'$this->HI',
                                            '$this->HF',
											'$this->Diagnostico');";
        //echo $sql;
        //exit;
        if ($this->con->query($sql)) {
            echo $this->_message_ok("guardó");
        } else {
            echo $this->_message_error("guardar");
        }
    }

    //******** 3.3 METODO _get_name_File() *****************	

    private function _get_name_file($nombre_original, $tamanio)
    {
        $tmp = explode(".", $nombre_original); //Divido el nombre por el punto y guardo en un arreglo
        $numElm = count($tmp); //cuento el número de elemetos del arreglo
        $ext = $tmp[$numElm - 1]; //Extraer la última posición del arreglo.
        $cadena = "";
        for ($i = 1; $i <= $tamanio; $i++) {
            $c = rand(65, 122);
            if (($c >= 91) && ($c <= 96)) {
                $c = NULL;
                $i--;
            } else {
                $cadena .= chr($c);
            }
        }
        return $cadena . "." . $ext;
    }

    //************* PARTE I ********************
    //Aquí se agregó el parámetro:  $defecto/
    private function _get_combo_db($tabla, $valor, $etiqueta, $nombre, $defecto)
    {
        $html = '<select name="' . $nombre . '">';
        $sql = "SELECT $valor,$etiqueta FROM $tabla;";
        $res = $this->con->query($sql);
        while ($row = $res->fetch_assoc()) {
            //ImpResultQuery($row);
            $html .= ($defecto == $row[$valor]) ? '<option value="' . $row[$valor] . '" selected>' . $row[$etiqueta] . '</option>' . "\n" : '<option value="' . $row[$valor] . '">' . $row[$etiqueta] . '</option>' . "\n";
        }
        $html .= '</select>';
        return $html;
    }

    
    //************* PARTE II ******************	

    public function get_form($id = NULL)
    {

        if ($id == NULL) {
            $this->IdPaciente = NULL;
            $this->IdMedico = NULL;
            $this->FechaConsulta = NULL;
            $this->HI = NULL;
            $this->HF = NULL;
            $this->Diagnostico = NULL;

            $op = "new";
        } else {

            $sql = "SELECT * FROM consultas WHERE IdConsulta=$id;";
            $res = $this->con->query($sql);
            $row = $res->fetch_assoc();

            $num = $res->num_rows;
            if ($num == 0) {
                $mensaje = "tratar de actualizar la consulta con id= " . $id;
                echo $this->_message_error($mensaje);
            } else {

                // ** TUPLA ENCONTRADA **
           

                $this->IdMedico = $row['IdMedico'];
                $this->IdPaciente = $row['IdPaciente'];
                $this->FechaConsulta = $row['FechaConsulta'];
                $this->HI = $row['HI'];
                $this->HF = $row['HF'];
                $this->Diagnostico = $row['Diagnostico'];

                $op = "update";
            }
        }
        $html = '
        <form name="Form_Consulta" method="POST" action="consultas.php" enctype="multipart/form-data">
            <!-- Agrego dos líneas -> hidden oculto -->
            <input type="hidden" name="id" value="' . $id . '">
            <input type="hidden" name="op" value="' . $op . '">
            <div class="container mt-4">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                DATOS DEL PACIENTE LA CITA MEDICA
                            </div>
                            <div class="card-body">
                            <div class="form-group row">
                                <label for="nombre" class="col-md-4 col-form-label">Medico:</label>
                                <div class="col-md-8">
                                    ' . $this->_get_combo_db("medicos","IdMedico","Nombre","medico",$this->IdMedico) . '
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="nombre" class="col-md-4 col-form-label">Paciente:</label>
                                <div class="col-md-8">
                                     ' . $this->_get_combo_db("pacientes","IdPaciente","Nombre","paciente",$this->IdPaciente) . '
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="fecha" class="col-md-4 col-form-label">Fecha Consulta:</label>
                                <div class="col-md-8">
                                <input type="date" class="form-control"  name="fechaConsulta" value="' . $this->FechaConsulta . '">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="horainicio" class="col-md-4 col-form-label">Hora Inicio:</label>
                                <div class="col-md-8">
                                    <input type="time" class="form-control" name="HI" value="' . $this->HI . '">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="horafinal" class="col-md-4 col-form-label">Hora Final:</label>
                                <div class="col-md-8">
                                    <input type="time" class="form-control" name="HF" value="' . $this->HF . '">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="diagnostico" class="col-md-4 col-form-label">Sintomas:</label>
                                <div class="col-md-8">
                                    <textarea type="text" class="form-control" size="15" name="diagnostico" placeholder= "Describa sus sintomas" value="' . $this->Diagnostico . '" required> </textarea>  
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-8 offset-md-4">
                                    <input type="submit" class="btn btn-primary" name="Guardar" value="GUARDAR">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>';
        return $html;
    }
    
    public function get_list()
    {
        $d_new = "new/0";
        $d_new_final = base64_encode($d_new);
        $html = '
        <div class="container">
        <br>
            <table class="table table-bordered text-center table-striped" align="center">
                <thead class="thead-dark ">
                    <tr>
                        <th colspan="8"><a href="consultas.php?d=' . $d_new_final . '" class= "text-white">Nuevo</a></th>
                    </tr>
                    
                </thead>
            <tbody>
        </div>';
        // $sql = "SELECT c.IdConsulta, p.Nombre AS nombrepaciente , m.Nombre AS nombremedico, c.FechaConsulta, c.HI, c.HF, c.Diagnostico FROM consultas c 
		// INNER JOIN pacientes p ON (c.IdPaciente=p.IdPaciente) INNER JOIN medicos m ON (c.IdMedico=m.IdMedico);";
        // $res = $this->con->query($sql);
        // Sin codificar <td><a href="consultas.php?op=del&id=' . $row['id'] . '">Borrar</a></td>
        // while ($row = $res->fetch_assoc()) {
        //     $d_del = "del/" . $row['IdConsulta'];
        //     $d_del_final = base64_encode($d_del);
        //     $d_act = "act/" . $row['IdConsulta'];
        //     $d_act_final = base64_encode($d_act);
        //     $d_det = "det/" . $row['IdConsulta'];
        //     $d_det_final = base64_encode($d_det);
        //     $html .= '
        //     <tr>
        //         <td>' . $row['nombrepaciente'] . '</td>
        //         <td>' . $row['nombremedico'] . '</td>
        //         <td>' . $row['FechaConsulta'] . '</td>        
        //         <td>' . $row['Diagnostico'] . '</td>                
        //         <td class="text-center"><button class="btn btn-danger"><a href="consultas.php?d=' . $d_del_final . '">Borrar</a></button></td>
        //         <td class="text-center"><button class="btn btn-warning"><a href="consultas.php?d=' . $d_act_final . '">Actualizar</a></button></td>
        //         <td class="text-center"><button class="btn btn-info"><a href="consultas.php?d=' . $d_det_final . '">Detalle</a></button></td>
        //     </tr>';
        // }
        $html .= '</table>';
        return $html;
    }

    public function get_detail_consultas($id)
    {
        $sql = "SELECT p.Nombre AS nombrepaciente, p.Genero, p.Edad, m.Nombre AS nombremedico, c.FechaConsulta, c.HI, c.HF, c.Diagnostico
            FROM consultas c 
            INNER JOIN pacientes p ON (c.IdPaciente = p.IdPaciente) 
            INNER JOIN medicos m ON (c.IdMedico = m.IdMedico)
            WHERE c.IdConsulta = $id;";
        $res = $this->con->query($sql);
        $row = $res->fetch_assoc();

        $num = $res->num_rows;


        //Si es que no existiese ningun registro debe desplegar un mensaje 
        //$mensaje = "tratar de eliminar el consulta con id= ".$id;
        //echo $this->_message_error($mensaje);
        //y no debe desplegarse la tablas

        if ($num == 0) {
            $mensaje = "tratar de editar el consulta con id= " . $id;
            echo $this->_message_error($mensaje);
        } else {
            $html = '<div class="container mt-4">
            
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-header bg-primary text-white">
                                        DATOS DEL CONSULTA
                                    </div>
                                    <div class="card-body">
                                        <table class="table">
                                            <tr>
                                                <td>Paciente:</td>
                                                <td>' . $row['nombrepaciente'] . '</td>
                                            </tr>
                                            <tr>
                                                <td>Género:</td>
                                                <td>' . $row['Genero'] . '</td>
                                            </tr>
                                            <tr>
                                                <td>Edad:</td>
                                                <td>' . $row['Edad'] . '</td>
                                            </tr>
                                            <tr>
                                                <td>Medico:</td>
                                                <td>' . $row['nombremedico'] . '</td>
                                            </tr>                                    
                                            <tr>
                                                <td>Diagnostico:</td>
                                                <td>' . $row['Diagnostico'] . '</td>
                                            </tr>
                                            <tr>
                                                <td>Hora Inicio:</td>
                                                <td>' . $row['HI'] . '</td>
                                            </tr>
                                            <tr>
                                                <td>Hora Fin:</td>
                                                <td>' . $row['HF'] . '</td>
                                            </tr>
                                            <tr>
                                                <td>Fecha:</td>
                                                <td>' . $row['FechaConsulta'] . '</td>
                                            </tr>

                                            <tr>
                                                <td colspan="2">
                                                    <a href="consultas.php" class="btn btn-primary">Regresar</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>';
            return $html;
        }
    }

    public function delete_consultas($id)
    {
        $sql = "DELETE FROM consultas WHERE IdConsulta=$id;";
        if ($this->con->query($sql)) {
            echo $this->_message_ok("ELIMINÓ");
        } else {
            echo $this->_message_error("eliminar");
        }
    }

    //*************************	

    private function _message_error($tipo)
    {
        $html = '
		<table border="0" align="center">
			<tr>
				<th>Error al ' . $tipo . '. Favor contactar a .................... </th>
			</tr>
			<tr>
				<th><a href="consultas.php">Regresar</a></th>
			</tr>
		</table>';
        return $html;
    }


    private function _message_ok($tipo)
    {
        $html = '
		<table border="0" align="center">
			<tr>
				<th>El registro se  ' . $tipo . ' correctamente</th>
			</tr>
			<tr>
				<th><a href="consultas.php">Regresar</a></th>
			</tr>
		</table>';
        return $html;
    }

    //**************************	

} // FIN SCRPIT