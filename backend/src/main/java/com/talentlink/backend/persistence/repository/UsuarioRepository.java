package com.talentlink.backend.persistence.repository;

import com.talentlink.backend.persistence.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long > {
}
