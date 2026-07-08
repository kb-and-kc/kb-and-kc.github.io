---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
description: ""
boards: [""]
makers: [""]
form_factor: "" # Size/class, e.g. 60%, 65%, 75%, TKL, 80%, Alice.
layout_style: "" # Blocker/top-case style, e.g. WK, WKL, HHKB, Tsangan.
tags: []
status: "owned"

# Shared/default values. Copy rows inherit these unless overridden.
acquired: ""
colour: ""
finish: ""
case: ""
plate: ""
pcb: ""
weight_material: ""
switches: []

# Use one row per physical copy or build. Only write fields that differ from the shared/default values above.
copies: []
---

Build notes, typing feel, condition, and anything you want to remember.
