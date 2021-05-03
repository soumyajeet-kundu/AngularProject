package com.app.registration.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.registration.model.FileModel;
import com.app.registration.model.User;

public interface ImageRepository extends JpaRepository<FileModel, Long> {

    Optional<FileModel> findByName(String name);
    public List<FileModel> findAll();
}
