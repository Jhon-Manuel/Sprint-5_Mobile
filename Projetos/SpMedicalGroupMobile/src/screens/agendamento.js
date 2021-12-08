import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

export default class agendamento extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listarAgendamentos: [],
        };

    }

    buscarMeusAgendamentos = async () => {
        try {
            const token = await 
        } catch (error) {
            
        }
    }

    render (){
        return(
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                </View>
                <View style={styles.containerMain}>
                    <Text> Meus Agendamentos</Text>
                    <FlatList
                        contentContainerStyle={styles.bodyAgendamento}
                        data={this.state.listarAgendamentos}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }

    renderItem = ({item}) => (
        <View style={containerA}>
            <Text>{item.idAgendamentoNavigation}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {

    }
});