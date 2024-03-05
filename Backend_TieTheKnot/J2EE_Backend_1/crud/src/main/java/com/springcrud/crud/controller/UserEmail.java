// UserEmail.java
package com.springcrud.crud.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springcrud.crud.model.UserEmailToAdmin;
import com.springcrud.crud.services.UserEmailSenderService;

@RestController
@CrossOrigin
public class UserEmail {

    private final UserEmailSenderService emailSenderService;

    public UserEmail(UserEmailSenderService emailSenderService) {
        this.emailSenderService = emailSenderService;
    }

    @PostMapping("/send-user-email-to-admin")
    public ResponseEntity sendUserEmailToAdmin(@RequestBody UserEmailToAdmin userEmailToAdmin) {
        this.emailSenderService.sendUserEmailToAdmin(
            userEmailToAdmin.getTo(),
            userEmailToAdmin.getSubject(),
            userEmailToAdmin.getMessage(),
            userEmailToAdmin.getQuery(),
            userEmailToAdmin.getMobileNumber()
        );
        return ResponseEntity.ok("Success");
    }
}
