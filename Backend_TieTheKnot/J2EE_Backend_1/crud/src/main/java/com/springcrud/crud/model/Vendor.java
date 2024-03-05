package com.springcrud.crud.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Entity
public class Vendor {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @NotBlank(message = "Name is required")
    private String name;
    
    @NotBlank(message = "GST number is required")
    @Pattern(regexp="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}", message = "Invalid GST number")
    private String gstNumber;
    
    @NotBlank(message = "Facility is required")
    private String facility;
    
    @NotBlank(message = "Cities is required")
    private String cities;
    
    @DecimalMin(value = "1000", message = "Charges must be at least 1000")
    @DecimalMax(value = "1000000", message = "Charges must not exceed 1000000")
    private double charges;
    
    private String pictureLinks;
	public Vendor() {};
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGstNumber() {
		return gstNumber;
	}
	public void setGstNumber(String gstNumber) {
		this.gstNumber = gstNumber;
	}
	public String getFacility() {
		return facility;
	}
	public void setFacility(String facility) {
		this.facility = facility;
	}
	public String getCities() {
		return cities;
	}
	public void setCities(String cities) {
		this.cities = cities;
	}
	public double getCharges() {
		return charges;
	}
	public void setCharges(double charges) {
		this.charges = charges;
	}
	public String getPictureLinks() {
		return pictureLinks;
	}
	public void setPictureLinks(String pictureLinks) {
		this.pictureLinks = pictureLinks;
	}
	public Vendor(Long id, String name, String gstNumber, String facility, String cities, double charges,
			String pictureLinks) {
		super();
		this.id = id;
		this.name = name;
		this.gstNumber = gstNumber;
		this.facility = facility;
		this.cities = cities;
		this.charges = charges;
		this.pictureLinks = pictureLinks;
	}

	// Getters, setters, constructors, and other methods as needed

}
