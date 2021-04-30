package com.app.registration.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.registration.model.FileModel;

public interface ImageRepository extends JpaRepository<FileModel, Long> {

    Optional<FileModel> findByName(String name);
}
