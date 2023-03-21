import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Movements';
import Actions from '../../components/Actions';

//Lista de movimentações na conta

const list = [
    {
        id: 1,
        label: 'Conta de Luz',
        value: '150,00',
        date: '17/09/2022',
        type: 0 // gastos
    },

    {
        id: 2,
        label: 'Salario',
        value: '590,90',
        date: '18/09/2022',
        type: 1 // entrada
    },

    {
        id: 3,
        label: 'Conta Condominio',
        value: '190,90',
        date: '20/09/2022',
        type: 0
    }

]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name = "Nathã"/>
            
            <Balance saldo ="2000" gastos ="500"/>

            <Actions/>
            
            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList
                style={styles.list}
                // nome da lista onde esta pegando os dados
                data={list}
                // garantir que cada item vai ter um id como string
                keyExtrator={(item) => String(item.id)}
                // nao ter a barra de rolagem
                showsVerticalScrollIndicator={false}
                // renderizar os itens como componentes
                renderItem={({item}) => <Moviments data={item}/>}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9ecef',
    },

    title: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
        marginBottom: 14,
    },

    list:{
        marginStart: 14,
        marginEnd: 14,

    }
});
