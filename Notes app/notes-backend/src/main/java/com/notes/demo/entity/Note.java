package com.notes.demo.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Note")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;
}
