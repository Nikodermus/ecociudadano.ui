package com.co.latin.ecociudadano.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Clients")
public class Client implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name_firstname")
    private String nameFirstname;

    @Column(name = "lasstname")
    private String lastname;

    @Column(name = "email")
    private String email;


    @Column(name = "contact_phone")
    private String contactPhone;


    @Column(name = "dni")
    private String dni;

    @Column(name = "dni_city")
    private String dni_city;

    @ManyToOne
    @JoinColumn(name = "User_id")
    private User userId;

    @Column(name = "dni_type")
    private String dnitype;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameFirstname() {
        return nameFirstname;
    }

    public void setNameFirstname(String nameFirstname) {
        this.nameFirstname = nameFirstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getDni_city() {
        return dni_city;
    }

    public void setDni_city(String dni_city) {
        this.dni_city = dni_city;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public String getDnitype() {
        return dnitype;
    }

    public void setDnitype(String dnitype) {
        this.dnitype = dnitype;
    }
}

