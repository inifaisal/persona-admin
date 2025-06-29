output "container_id" {
  description = "The ID of the running container."
  value       = docker_container.app_container.id
}

output "container_name" {
  description = "The name of the running container."
  value       = docker_container.app_container.name
}

output "external_port" {
  description = "The external port the application is exposed on."
  value       = docker_container.app_container.ports[0].external
}