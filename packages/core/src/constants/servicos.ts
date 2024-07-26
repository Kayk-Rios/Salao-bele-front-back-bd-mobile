import Servico from '../servico/Servico'

const servicos: Servico[] = [
    {
        id: 1,
        nome: 'Corte Viking',
        descricao:
            'Corte de Viking, com lâmina na pele e estilo de guerreiro. Saia pronto para enfrentar qualquer batalha com um visual que impõe brutalidade.',
        preco: 55,
        qtdeSlots: 3,
        imagemUrl: '/servicos/corte-de-cabelo.jpeg',
    },
    {
        id: 2,
        nome: 'Barba de Lenhador',
        descricao:
            'Barba de lenhador, com aparo preciso e estilo de macho raiz. Saia com uma barba que impõe respeito e faz tremer até as árvores.',
        preco: 45,
        qtdeSlots: 2,
        imagemUrl: '/servicos/corte-de-barba.jpeg',
    },
    {
        id: 3,
        nome: 'Garras Afiadas',
        descricao:
            'Patas de urso em garras de lobo. Nosso serviço de Manicure & Pedicure para homens e mulheres é tão bruto quanto você, mas com um toque de classe.',
        preco: 40,
        qtdeSlots: 2,
        imagemUrl: '/servicos/manicure-pedicure.jpeg',
    },
    {
        id: 4,
        nome: 'Combo Alpha',
        descricao:
            'Cabelo de Viking, uma barba de lenhador e manicure & pedicure de gladiador. Saia pronto para enfrentar qualquer batalha com estilo e unhas afiadas.',
        preco: 95,
        qtdeSlots: 2,
        imagemUrl: '/servicos/combo.jpeg',
    },
    {
        id: 5,
        nome: 'Grande Caçador',
        descricao:
            'Transforme seu pequeno aventureiro em um mini caçador, com um corte cheio de atitude e estilo. Cabelo afiado como uma guitarra e maneiro como uma Harley.',
        preco: 60,
        qtdeSlots: 2,
        imagemUrl: '/servicos/corte-infantil.jpeg',
    },
    {
        id: 6,
        nome: 'Esposo Raiz',
        descricao:
            'Tratamento digno de um verdadeiro guerreiro da estrada. Corte de cabelo afiado, barba de lenhador e manicure de motoqueiro, tudo enquanto você relaxa ao som de rock pesado.',
        preco: 189,
        qtdeSlots: 2,
        imagemUrl: '/servicos/dia-de-noivo.jpeg',
    },
]

export default servicos
