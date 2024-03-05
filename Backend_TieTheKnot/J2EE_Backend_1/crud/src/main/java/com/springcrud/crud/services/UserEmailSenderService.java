// UserEmailSenderService.java
package com.springcrud.crud.services;

public interface UserEmailSenderService {
    void sendUserEmailToAdmin(String to, String subject, String message, String query, String mobileNumber);
}
