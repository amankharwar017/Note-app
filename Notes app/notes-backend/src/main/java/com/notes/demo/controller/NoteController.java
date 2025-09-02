package com.notes.demo.controller;

import com.notes.demo.entity.Note;
import com.notes.demo.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:5173")
public class NoteController {

    @Autowired
    private NoteRepository repo;

    @GetMapping("/getAll")
    public List<Note> getAllNotes() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Note getNote(@PathVariable Long id) {
        return repo.findById(id).orElse(null);
    }

    @PostMapping
    public Note createNote(@RequestBody Note note) {
        return repo.save(note);
    }

    @PutMapping("/{id}")
    public Note updateNote(@PathVariable Long id, @RequestBody Note note) {
        note.setId(id);
        return repo.save(note);
    }

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
