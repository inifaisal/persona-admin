terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.2"
    }
  }
}

# Configure the Docker provider to connect to your remote server.
# This requires your server's Docker daemon to be configured for
# secure remote access over TCP.
provider "docker" {
  host         = var.docker_host
  cert_path    = var.docker_cert_path
}

# Get the remote image from the registry.
# This ensures Terraform pulls the new image version.
resource "docker_image" "app_image" {
  name = "${var.image_name}:${var.image_tag}"
  keep_locally = false # Set to true if you don't want Terraform to prune old images
}

# Define the Docker container resource.
# Terraform will ensure a container matching this configuration is running.
resource "docker_container" "app_container" {
  # The container name
  name  = "my-web-app"

  # Use the image we just pulled. The 'latest' attribute is the image ID with digest.
  image = docker_image.app_image.latest

  # Restart policy
  restart = "always"

  # Port mapping: Map port 8080 on the host to port 3000 in the container
  ports {
    internal = 80
    external = 8080
  }

  # This is a key trick: If the image ID changes, Terraform will destroy
  # and recreate the container, thus "redeploying" it.
  # We use a lifecycle block to prevent errors on the initial creation.
  lifecycle {
    create_before_destroy = true
  }
}