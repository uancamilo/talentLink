package com.talentlink.backend.persistence.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "mentoria")
@Getter
@Setter
@NoArgsConstructor
public class Mentoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, name = "id_mentoria")
    private Long id;

    @Column(nullable = false, length = 50, unique = true)
    private String nombre;

    @Column(nullable = false)
    private String descripcion;
}
