# WaiChat

Un'applicazione di chat web moderna con funzionalità simili a WhatsApp Web che permette di ragionare con un AI.

## Caratteristiche

- Autenticazione Locale:
  - Gli utenti possono autenticarsi utilizzando credenziali memorizzate localmente nel database PostgreSQL.
  - L'amministratore può creare e gestire utenti direttamente dall'interfaccia di amministrazione.

- Gestione dei Ruoli e Permessi:
  - Gli amministratori possono assegnare ruoli specifici agli utenti, definendo i permessi di accesso alle diverse funzionalità  della piattaforma.
  - I ruoli possono essere personalizzati per adattarsi alle esigenze organizzative.

- Chat dirette e di gruppo
- Chat verso AI gestito con container Ollama
- Invio di messaggi in tempo reale
- Notifiche di lettura e digitazione
- Interfaccia utente moderna e reattiva
- Supporto per emoji e file
- Supporto per messaggi audio e text to speech
- Sicurezza avanzata (HTTPS, sanitizzazione input, rate limiting)

## Tecnologie utilizzate

### Backend
- Node.js (Express.js)
- Socket.IO per comunicazione in tempo reale
- JWT per autenticazione
- PostgreSQL come database
- Sequelize come ORM
- Winston per logging

### Frontend
- React.js
- Styled Components per lo stile
- React Router per la navigazione
- Framer Motion per le animazioni
- Zustand per la gestione dello stato
- Socket.IO Client per la comunicazione in tempo reale

### Infrastruttura
- Docker con Docker Compose
- Nginx come reverse proxy
- HTTPS con certificati SSL

## Volumi Docker
L'applicazione utilizza volumi Docker esterni per la persistenza dei dati:

- **waichat_postgres_data**: Dati del database PostgreSQL
- **waichat_ollama_data**: Modelli e dati di Ollama
- **waichat_backend_data**: Codice ed asset del backend
- **waichat_frontend_data**: Codice ed asset del frontend
- **waichat_nginx_certs**: Certificati SSL per HTTPS
- **waichat_nginx_conf**: File di configurazione Nginx

Questi volumi sono esterni e devono esistere prima dell'avvio dell'applicazione. I percorsi fisici dei volumi sono:
```
/var/lib/docker/volumes/waichat_frontend_data/_data
/var/lib/docker/volumes/waichat_backend_data/_data
/var/lib/docker/volumes/waichat_nginx_conf/_data
ecc.
```

## Prerequisiti

- Docker e Docker Compose
- I volumi Docker esterni menzionati sopra
- Node.js (per lo sviluppo locale)
- PostgreSQL (per lo sviluppo locale)


## Sviluppo locale

1. Installa le dipendenze del backend:
```bash
cd backend
npm install
```

2. Installa le dipendenze del frontend:
```bash
cd frontend
npm install
```

3. Avvia il backend in modalitÃ  sviluppo:
```bash
cd backend
npm run dev
```

4. Avvia il frontend in modalitÃ  sviluppo:
```bash
cd frontend
npm run dev
```

## Struttura del progetto

```
/
waichat_backend_data/_data                # Server Node.js
 src/
    config/         # Configurazioni
    controllers/    # Controller
    middlewares/    # Middleware
    models/         # Modelli Sequelize
    routes/         # Route API
    services/       # Servizi
    utils/          # UtilitÃ 
    package.json        # Dipendenze del backend
waichat_frontend_data/_data            # Client React
 src/
    components/     # Componenti React
    contexts/       # Context API
    hooks/          # Custom hooks
    pages/          # Pagine
    services/       # Servizi API
    styles/         # Stili globali
    utils/          # UtilitÃ 
    package.json        # Dipendenze del frontend
waichat_nginx_conf/_data                  # Configurazione Nginx
    default.conf        # File di configurazione con SSL
waichat_nginx_certs/_data           # certificato e chiave
    key.pem
    cert.pem
waichat_ollama_data/_data       # server ollama
waichat_postgres_data/_data     # DB postgres
docker-compose.yml      # Configurazione Docker Compose
README.md               # Documentazione
```

## Note importanti
- L'applicazione utilizza volumi Docker esterni che devono essere giÃ  esistenti prima dell'avvio.
- I certificati SSL devono essere presenti nel volume `waichat_nginx_certs`.
- Il file di configurazione Nginx viene montato dal volume `waichat_nginx_conf`.
- Per modificare il codice dell'applicazione, modificare i file direttamente nei volumi o copiare nuovamente i file nei volumi.

## Licenza

MIT 