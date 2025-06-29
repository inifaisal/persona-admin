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
  name  = "persona-admin"

  # *** THIS LINE IS FIXED ***
  # Use the repo_digest from the image resource. This is a unique
  # identifier that changes when the image is updated, triggering a recreate.
  image = docker_image.app_image.repo_digest

  # Restart policy
  restart = "always"

  # Port mapping: Map port 8080 on the host to port 80 in the container
  # (updated for the Nginx React app)
  ports {
    internal = 80
    external = 8080
  }

  # This is a key trick: If the image ID changes, Terraform will destroy
  # and recreate the container, thus "redeploying" it.
  lifecycle {
    create_before_destroy = true
  }
}