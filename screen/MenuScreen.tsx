import { useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./HomeScreen";

type Props = NativeStackScreenProps<RootStackParamList, 'Menu'>

const combos = [
    {
        id: 1,
        name: 'McOferta Média Big Mac Duplo',
        description: 'Quatro hambúrgueres (100% carne bovina), alface americano...',
        price: 'R$ 39,90',
        image: require('../images/combo-big-mac-duplo.png'),
    },
    {
        id: 2,
        name: 'Novo Brabo Melt Onion Rings',
        description: 'Dois hambúrgueres de carne 100% bovina, méquinese, a exclu',
        price: 'R$ 41,50',
        image: require('../images/combo-brabo-melt-onion-rings.png'),
    },
    {
        id: 3,
        name: 'McCrispy Chicken Elite',
        description: 'Composto por pão tipo brioche com batata, molho Honey&Fire, ...',
        price: 'R$ 39,90',
        image: require('../images/combo-mcrispy-elite.png'),
    },
    {
        id: 4,
        name: 'Duplo Cheddar McMelt',
        description: 'Dois hambúrgueres (100% carne bovina), molho lácteo com queij, ...',
        price: 'R$ 36,20',
        image: require('../images/combo-duplo-cheddar-mcmelt.png'),
    },
];


const categorias = ["Combos", "lanches", "Fritas", "Bebidas"];

export default function MenuScreen({ navigation }: Props) {
    const [activeCategory, setActiveCategory] = useState<string>('Combos');
    return (

    );
}

const styles = StyleSheet.create({
    container: {

    },
    scroll: {

    },
    scrollContent: {

    },
    headerImageWrapper: {

    },
    headerImage: {

    },
    headerButton: {

    },
    headerButtonLeft: {

    },
    headerButtonRight: {

    },
    infoCard: {

    },
    infoTopRow: {

    },
    infoLogo: {

    },
    infoTexts: {

    },
    brandName: {

    },
    brandSubtitle: {

    },
    statusRow: {

    },
    statustext: {

    },
    categoriesRow: {

    },
    categoryill: {

    },
    categoryPillActives: {

    },
    categoryText: {

    },
    categoryTextActive: {

    },
    sectionTitle: {

    },
    productRow: {

    },
    ProductRowDivider: {

    },
    productInfo: {

    },
    productName: {

    },
    productDescription: {

    },
    productPrice: {
        
    },
    productImage: {

    },
})