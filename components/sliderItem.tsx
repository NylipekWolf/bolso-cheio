export type SliderItemType = {
  id: string;
  componente: {
    icon: "wallet";
    descricao: string;
    buttonAction: void | undefined;
    buttonName: string;
    disabledView?: boolean = false;
  };
};
const sliderItem: SliderItemType[] = [
  {
    id: "1",
    componente: {
      icon: "wallet",
      descricao: "Você tem uma receita predente no total de R$ 120,50",
      buttonAction: undefined,
      buttonName: "Verificar",
    },
  },
  {
    id: "2",
    componente: {
      icon: "wallet",
      descricao: "Você tem uma receita predente no total de R$ 120,50",
      buttonAction: undefined,
      buttonName: "Verificar",
    },
  },
  {
    id: "3",
    componente: {
      icon: "wallet",
      descricao: "Você tem uma receita predente no total de R$ 120,50",
      buttonAction: undefined,
      buttonName: "Verificar",
    },
  },
];
