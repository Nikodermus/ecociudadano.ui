package com.co.latin.ecociudadano.repositories;

import com.co.latin.ecociudadano.model.GarbageTransaction;
import org.springframework.data.repository.CrudRepository;

public interface GarbageTransactionRepository extends CrudRepository<GarbageTransaction, Integer> {
}
