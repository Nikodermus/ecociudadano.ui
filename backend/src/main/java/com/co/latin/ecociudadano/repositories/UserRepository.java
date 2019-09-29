package com.co.latin.ecociudadano.repositories;

import com.co.latin.ecociudadano.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {

    @Query("from User WHERE username=:username")
    public List<User> findByUserName(@Param("username") String username);
    
}
