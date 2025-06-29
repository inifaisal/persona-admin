variable "image_tag" {
  description = "The tag of the Docker image to deploy."
  type        = string
}

variable "image_name" {
  description = "The name of the Docker image to deploy (e.g., ghcr.io/your-user/your-repo)."
  type        = string
}

variable "docker_host" {
  description = "The address of the remote Docker host (e.g., tcp://1.2.3.4:2376)."
  type        = string
  sensitive   = true
}

variable "docker_cert_path" {
  description = "Path to the directory containing Docker client certificates."
  type        = string
  sensitive   = true
}
