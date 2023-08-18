import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import SecondRoutes from './SecondRoutes';



export default function ThemeRoutes() {
    return useRoutes([MainRoutes, SecondRoutes])
}