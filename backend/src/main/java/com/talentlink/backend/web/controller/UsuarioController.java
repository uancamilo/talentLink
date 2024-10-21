package com.talentlink.backend.web.controller;

import com.talentlink.backend.persistence.entity.Usuario;
import com.talentlink.backend.service.UsuarioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @Schema
    @PostMapping("/usuarios")
    @Operation(summary = "Crear un nuevo usuario", description = "Este endpoint permite crear un nuevo usuario en la base de datos.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Usuario creado exitosamente"),
            @ApiResponse(responseCode = "400", description = "Solicitud incorrecta")
    })
    @Parameters({
            @Parameter(name = "nombre", in = ParameterIn.QUERY, description = "Nombre del usuario"),
            @Parameter(name = "apellido", in = ParameterIn.QUERY, description = "Apellido del usuario"),
            @Parameter(name = "correo", in = ParameterIn.QUERY, description = "Email/correo del usuario"),
            @Parameter(name = "programa", in = ParameterIn.QUERY, description = "Programa en el que esta matriculado el usuario solo se aceptan valores DESARROLLO_DE_SOFTWARE"),
            @Parameter(name = "tipo_usuario", in = ParameterIn.QUERY, description = "Tipo de usuario solo acepta MENTOR, ESTUDIANTE, ADMIN")

    })
    @ResponseBody
    public ResponseEntity<Usuario> crearUsuario(@RequestBody Usuario usuario) {
        Usuario nuevoUsuario = usuarioService.guardarUsuario(usuario);
        return ResponseEntity.ok(nuevoUsuario);
    }
}
