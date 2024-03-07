<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>ClinicaMedica</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- <link rel="manifest" href="site.webmanifest"> -->
    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.png">
    <!-- Place favicon.ico in the root directory -->

    <!-- CSS here -->
    <link rel="stylesheet" href="../../css/bootstrap.min.css">
    <link rel="stylesheet" href="../../css/owl.carousel.min.css">
    <link rel="stylesheet" href="../../css/magnific-popup.css">
    <link rel="stylesheet" href="../../css/font-awesome.min.css">
    <link rel="stylesheet" href="../../css/themify-icons.css">
    <link rel="stylesheet" href="../../css/nice-select.css">
    <link rel="stylesheet" href="../../css/flaticon.css">
    <link rel="stylesheet" href="../../css/gijgo.css">
    <link rel="stylesheet" href="../../css/animate.css">
    <link rel="stylesheet" href="../../css/slicknav.css">
    <link rel="stylesheet" href="../../css/style.css">
    <!-- <link rel="stylesheet" href="css/responsive.css"> -->
</head>

<body>
    <?php
    session_start();
    require_once("constantes.php");
        include("../../PACIENTE/menu/paciente.php");

    if (!isset($_SESSION['Nombre'])) {
        // Si no hay sesión iniciada, redirige a la página de inicio de sesión
        header("Location: login3.php");
        exit();
    }

    // Obtén el usuario de la sesión
    $usuario = $_SESSION['Nombre'];

    // Realiza la conexión a la base de datos
    $conn = conectarBD();

    // Consulta SQL para obtener la información del vehículo del usuario actual
    // $sql = "SELECT v.id, v.placa, m.descripcion as marca, c.descripcion as color, v.anio, v.avaluo  
    //     FROM vehiculo v
    //     INNER JOIN color c ON v.color = c.id
    //     INNER JOIN marca m ON v.marca = m.id
    //     WHERE v.IDUsuario = (SELECT IDUsuario FROM usuarios WHERE Usuario = '$usuario');";
    $sql = "SELECT
        p.IdPaciente,
        u.Nombre AS NombreUsuario,
        p.Nombre AS NombrePaciente,
        p.Cedula,
        p.Edad,
        p.Genero,
        p.Estatura,
        p.Peso
        FROM
            pacientes p
            INNER JOIN
            usuarios u ON (p.IdUsuario = u.IdUsuario)
        WHERE p.IdUsuario=(SELECT IdUsuario FROM usuarios WHERE Nombre = '$usuario');";

    $result = $conn->query($sql);

    if ($result === false) {
        die('Error en la consulta SQL: ' . $conn->error);
    }

    if ($result->num_rows > 0) {
        // Muestra la información del vehículo
        echo "<h1>Información del Paciente: $usuario</h1>";

        while ($row = $result->fetch_assoc()) {
            echo '<center><td class="text-center">
        <td class="text-center">
        <button class="btn btn-danger">
        <a href="../../PACIENTE/consultas/consultas.php" style="color: white; text-decoration: none;">
            Agendar Nueva Cita
        </a>
    </button>
    <div class="card-body">
                                <table class="table">
                                    <tr>
                                        <td>Usuario:</td>
                                        <td>' . $row['NombreUsuario'] . '</td>
                                    </tr>
                                    <tr>
                                        <td>Paciente:</td>
                                        <td>' . $row['NombrePaciente'] . '</td>
                                    </tr>
                                    <tr>
                                        <td>Cedula:</td>
                                        <td>' . $row['Cedula'] . '</td>
                                    <tr>
                                        <td>Genero:</td>
                                        <td>' . $row['Genero'] . '</td>
                                    </tr>
                                    <tr>
                                        <td>Edad:</td>
                                        <td>' . $row['Edad'] . '</td>
                                    </tr>
                                    <tr>
                                        <td>Estatura:</td>
                                        <td>' . $row['Estatura'] . '</td>
                                    </tr>
                                    <tr>
                                        <td>Peso:</td>
                                        <td>' . $row['Peso'] . '</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <a href="login3.php" class="btn btn-primary">Regresar</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>

         </table></center>';
        }
    } else {
        echo "<p>No se encontró información del vehículo para el usuario $usuario</p>";
    }

    // Cierra la conexión a la base de datos
    $conn->close();
    ?>
</body>

</html>