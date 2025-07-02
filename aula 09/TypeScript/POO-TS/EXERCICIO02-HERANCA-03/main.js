"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var professor_1 = require("./professor");
var prof = new professor_1.Professor();
// prof.registrarProfessor(1, 'Carlos', 62)
// prof.exibirProfessor()
// prof.registrarProfessor(1, 'Carlitos', 16)
// prof.exibirProfessor()
prof.registrarProfessor(1, 'Outro', 17);
prof.exibirProfessor();
