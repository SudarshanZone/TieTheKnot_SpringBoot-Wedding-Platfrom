package com.springcrud.crud.services;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
public class UserEmailService implements UserEmailSenderService {

    private final EmailSenderService emailSenderService;

    public UserEmailService(EmailSenderService emailSenderService) {
        this.emailSenderService = emailSenderService;
    }

    @Override
    public void sendUserEmailToAdmin(String to, String subject, String message, String query, String mobileNumber) {
        if (to == null) {
            throw new IllegalArgumentException("Recipient email address cannot be null");
        }
        // Proceed with sending email
        String emailContent = "From: " + message + "\n" +
                              "Query: " + query + "\n" +
                              "Mobile Number: " + mobileNumber;
        this.emailSenderService.sendEmail(to, subject, emailContent);
    }
}
