export interface EquipoPagina {
  email: string;
  github: string;
  items: Item[];
  linkedin: string;
  nombre_corto: string;
  pagina_autor: string;
  titulo: string;
}

interface Item {
  description: string;
  image: string;
  titulo: string;
}
