"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const professor_1 = require("./professor");
const prof = new professor_1.Professor();
// prof.registrarProfessor(1, 'Carlos', 62)
// prof.exibirProfessor()
// prof.registrarProfessor(1, 'Carlitos', 16)
// prof.exibirProfessor()
prof.registrarProfessor(1, 'Outro', 17);
prof.exibirProfessor();
