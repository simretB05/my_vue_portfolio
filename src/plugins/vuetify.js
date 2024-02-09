
import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use( Vuetify );

export default new Vuetify( {
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        themes: {
            light: {
                primary: colors.brown.darken2,       // Brown
                secondary: colors.green.darken1,     // Green
                accent: colors.orange.darken1,       // Orange
                error: colors.red.accent3,
                background: colors.grey.lighten4,    // Light Grey
                info: colors.teal.darken1,
            },
            dark: {
                primary: colors.brown.darken4,       // Dark Brown
                background: colors.grey.darken4,     // Dark Grey
                info: colors.teal.lighten1,
                dark: false, // or true for dark mode
            },
        },
    },
} );