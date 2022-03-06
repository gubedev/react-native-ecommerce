import React from 'react';
import MenIcon from 'components/icons/MenIcon';
import WomenIcon from 'components/icons/WomenIcon';
import DevicesIcon from 'components/icons/DevicesIcon';
import GamingIcon from 'components/icons/GamingIcon';
import GadgetIcon from 'components/icons/GadgetIcon';
import { COLORS } from 'utils/constants/colors';

export const CATEGORIES = [
  {
    id: '1',
    label: 'Hombres',
    Icon: () => <MenIcon fill={COLORS.primary} />,
  },
  {
    id: '2',
    label: 'Mujeres',
    Icon: () => <WomenIcon fill={COLORS.primary} />,
  },
  {
    id: '3',
    label: 'Dispositivos',
    Icon: () => <DevicesIcon fill={COLORS.primary} />,
  },
  {
    id: '4',
    label: 'Gaming',
    Icon: () => <GamingIcon fill={COLORS.primary} />,
  },
  {
    id: '5',
    label: 'Otros',
    Icon: () => <GadgetIcon fill={COLORS.primary} />,
  },
];
