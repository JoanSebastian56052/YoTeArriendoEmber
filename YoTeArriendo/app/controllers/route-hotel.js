import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    fechaEntrada: computed(function() {
        let fecha = new Date();
        let fechaFormato = fecha.getFullYear().toString()
            + '-' + ('0' + (fecha.getMonth() + 1)).slice(-2).toString() 
            + '-' + ('0' + fecha.getDate()).slice(-2).toString();
        return fechaFormato;
    }),
    fechaSalida: computed('fechaEntrada', function() {
        let fecha = new Date(this.get('fechaEntrada') + "T12:00:00");
        let fechaFormato = fecha.getFullYear().toString()
        + '-' + ('0' + (fecha.getMonth() + 1)).slice(-2).toString() 
        + '-' + ('0' + fecha.getDate()).slice(-2).toString();
        return fechaFormato;
    }),
    hoy: computed(function() {
        let fecha = new Date();
        let fechaFormato = fecha.getFullYear().toString()
            + '-' + ('0' + (fecha.getMonth() + 1)).slice(-2).toString() 
            + '-' + ('0' + fecha.getDate()).slice(-2).toString();
        return fechaFormato;
    }),
    entrada: computed('fechaEntrada', function() {
        let fecha = new Date();
        let fechaFormato;
        if(this.get('fechaEntrada') == ''){
            fechaFormato = fecha.getFullYear().toString()
                + '-' + ('0' + (fecha.getMonth() + 1)).slice(-2).toString() 
                + '-' + ('0' + fecha.getDate()).slice(-2).toString();
        }
        else{
            fecha = new Date(this.get('fechaEntrada') + "T12:00:00");
            fechaFormato = fecha.getFullYear().toString()
                + '-' + ('0' + (fecha.getMonth() + 1)).slice(-2).toString() 
                + '-' + ('0' + fecha.getDate()).slice(-2).toString();
        }
        return fechaFormato;
    }),
    actions: {
        buscar(){
            alert("Hay que colocar la funcionalidad");
        } 
    }
});