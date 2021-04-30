package com.app.registration;

import java.io.File;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.app.registration.controller.RegistrationController;


@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan({"com.app.registration", "com.app.registration.controller"})

public class RegistrationApplication {

	public static void main(String[] args) {
		new File(RegistrationController.uploadDirectory).mkdir();

		SpringApplication.run(RegistrationApplication.class, args);
	}

}
