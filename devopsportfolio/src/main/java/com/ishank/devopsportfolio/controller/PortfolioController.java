package com.ishank.devopsportfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class PortfolioController {

    @GetMapping("/api/portfolio")
    public Map<String, Object> getPortfolio() {

        return Map.of(
                "name", "Ishank Tyagi",
                "role", "DevOps Engineer",
                "message", "Welcome to my DevOps portfolio",
                "technologies", new String[]{
                        "AWS",
                        "Docker",
                        "Kubernetes",
                        "Jenkins",
                        "Terraform",
                        "Linux",
                        "Git",
                        "Prometheus",
                        "Grafana"
                }
        );
    }
}