package com.springcrud.crud.model;



public class UserEmailToAdmin {

    private String from;
    private String to;
    private String subject;
    private String message;
    private String query;
    private String mobileNumber;

    public UserEmailToAdmin() {
    }

    public UserEmailToAdmin(String from, String to, String subject, String message, String query, String mobileNumber) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.message = message;
        this.query = query;
        this.mobileNumber = mobileNumber;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
}
