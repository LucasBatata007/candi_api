# 📆 API de Agenda - Aplicativo Candi

Este repositório contém a API de **Agenda** do aplicativo **Candi**, uma aplicação desenvolvida para auxiliar no acompanhamento de tratamentos e compromissos médicos de pacientes oncológicos.

A API permite o gerenciamento de **perfis de usuários**, **medicamentos** e **compromissos**, fornecendo uma base sólida para aplicações mobile ou web que desejem integrar funcionalidades de agenda e controle de saúde.

---

## 👨‍💻 Integrantes do Grupo

- Carolina Pichelli Souza  
- Fernando Alcantara D'Avila  
- Guilherme Xavier Zanetti  
- Heloísa Pichelli Souza  
- Lucas Batista de Sousa  
- Nuno Kasuo Tronco Yokoji  
- Vivian de Oliveira Zanon  

---

## 🚀 Tecnologias Utilizadas

### 🟢 Node.js
Usado como runtime JavaScript do lado do servidor, garantindo uma aplicação escalável, leve e com excelente performance para APIs RESTful.

### 🍃 MongoDB
Banco de dados NoSQL utilizado para armazenar dados dos usuários, medicamentos e consultas de forma flexível, eficiente e escalável.

---

## 🧪 Exemplos de Requisições

### 🔹 Criando um **Perfil de Usuário**

<pre><code>{
  "username": "lucas lindo",
  "birth_date": "1990-07-15",
  "cancer_id": "00000000-0000-0000-0000-000000000001",
  "image_uri": "https://randomuser.me/api/portraits/women/44.jpg"
}
</code></pre>
### 🔹 Criando um **Medicamento**

<pre><code>{
  "medicine_name": "Paracetamol",
  "dosage": "500 mg",
  "period": "8h",
  "posology": "1 comprimido a cada 8 horas",
  "observation": "Não tomar com álcool",
  "start_date": "2025-07-01T08:00:00Z",
  "end_date": "2025-07-05T08:00:00Z",
  "user_id": "f3b9d7e1-5f87-4e3d-95c9-1234567890ab"
}
</code></pre>

---

### 🔹 Criando uma **Compromisso**

<pre><code>{
  "name": "Consulta com Endocrino",
  "date": "2025-07-10T15:00:00Z",
  "obs": "Levar exames de sangue",
  "user_id": "f3b9d7e1-5f87-4e3d-95c9-1234567890ab"
}
</code></pre>

---

## 📚 Estrutura da API

A API está dividida nos seguintes recursos principais:

- **/profiles** → Gerenciamento de perfis de usuários  
- **/medicines** → Cadastro e consulta de medicamentos  
- **/appointments** → Agendamento e controle de compromissos

