const { User } = require('../models');
const logger = require('../utils/logger');
const bcrypt = require('bcryptjs');

const initAdminUser = async () => {
  try {
    // Verifica se l'utente admin esiste già
    const adminExists = await User.findOne({
      where: { 
        username: 'admin'
      }
    });
    
    if (!adminExists) {
      // Crea l'utente admin
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('Password123', salt); // Password più sicura
      await User.create({
        username: 'admin',
        email: 'admin@waichat.local',
        password: hashedPassword, // Usa la password hashata
        fullName: 'Administrator',
        role: 'admin'
      });
      
      logger.info('Utente admin creato con successo');
    } else {
      logger.info('Utente admin già esistente');
    }
  } catch (error) {
    logger.error('Errore durante la creazione dell\'utente admin:', error);
  }
};

module.exports = initAdminUser; 