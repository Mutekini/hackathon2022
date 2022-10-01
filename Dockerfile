FROM amd64/ubuntu
LABEL maintainer="Krushi Raj Tula <krushiraj123@gmail.com>"
# Install the dependencies
RUN apt-get update
RUN apt-get install \
    unzip \
    wget -y \
    software-properties-common
# Download Pocketbase and install it for AMD64
RUN mkdir pocketbase
COPY . pocketbase

RUN wget -O- https://api.github.com/repos/pocketbase/pocketbase/releases/latest \
  | grep "linux_amd64.zip" \
  | cut -d : -f 2,3 \
  | cut -d , -f 2 \
  | tr -d '"' \
  | wget -qi -
RUN unzip pocketbase*.zip -d /pocketbase
WORKDIR /pocketbase
RUN ls
RUN chmod +x ./pocketbase

# Notify Docker that the container wants to expose a port.
EXPOSE 8080

# Start Pocketbase
CMD [ "./pocketbase", "serve",  "--http", "0.0.0.0:8080" ]