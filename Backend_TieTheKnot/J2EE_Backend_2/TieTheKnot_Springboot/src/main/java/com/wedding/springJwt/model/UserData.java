package com.wedding.springJwt.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

@Entity
public class UserData {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @NotBlank(message = "Name is required")
    private String name;
    
    @NotBlank(message = "Location is required")
    private String location;
    
    @NotBlank(message = "Wedding date is required")
    private String wedding_date;
    
    @NotBlank(message = "Wedding venue is required")
    private String wedding_venue;
    
	
	private String decoration;
	private String catering_services;

	private String photography_services;

	@Override
	public String toString() {
		return "UserData [id=" + id + ", name=" + name + ", location=" + location + ", wedding_date=" + wedding_date
				+ ", wedding_venue=" + wedding_venue + ", decoration=" + decoration + ", catering_services="
				+ catering_services + ", photography_services=" + photography_services + "]";
	}



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



	public String getLocation() {
		return location;
	}



	public void setLocation(String location) {
		this.location = location;
	}



	public String getWedding_date() {
		return wedding_date;
	}



	public void setWedding_date(String wedding_date) {
		this.wedding_date = wedding_date;
	}



	public String getWedding_venue() {
		return wedding_venue;
	}



	public void setWedding_venue(String wedding_venue) {
		this.wedding_venue = wedding_venue;
	}



	public String getDecoration() {
		return decoration;
	}



	public void setDecoration(String decoration) {
		this.decoration = decoration;
	}



	public String getCatering_services() {
		return catering_services;
	}



	public void setCatering_services(String catering_services) {
		this.catering_services = catering_services;
	}



	public String getPhotography_services() {
		return photography_services;
	}



	public void setPhotography_services(String photography_services) {
		this.photography_services = photography_services;
	}



	public UserData(Long id, String name, String location, String wedding_date, String wedding_venue, String decoration,
			String catering_services, String photography_services) {
		super();
		this.id = id;
		this.name = name;
		this.location = location;
		this.wedding_date = wedding_date;
		this.wedding_venue = wedding_venue;
		this.decoration = decoration;
		this.catering_services = catering_services;
		this.photography_services = photography_services;
	}



	

	
	
	public UserData() { }

}