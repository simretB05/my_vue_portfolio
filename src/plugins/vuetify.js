import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use( Vuetify );

export default new Vuetify( {
    icons: {
        iconfont: 'mdi',
        color: '#1bae9c'
    },
    theme: {
        themes: {
            light: {
                primary: '#1bae9c',
                secondary: '#1bae9c',
                accent: '#1bae9c',
                error: colors.red.accent3,
                background: '#1bae9c',
                info: colors.teal.darken1,
            },
            dark: {
                primary: colors.brown.darken4,
                background: colors.red.darken4,
                info: colors.teal.lighten1,
                dark: false,
            },
        },
    },
} );
