docker exec -it waichat-db psql -U waichat -d waichat -c "UPDATE \\"Users\\" SET password = '$2a$10$k6j/HZ9s5jKLAFqc7jRlXe/93W9wRgJIZqAV76Jsxlh0RhT8J9T0e' WHERE username = 'admin';"
docker restart waichat-backend 