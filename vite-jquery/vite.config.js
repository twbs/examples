const path = require('path')
import inject from "@rollup/plugin-inject";

export default {
    plugins: [
        inject({
            jQuery: 'jquery', // See https://dev.to/chmich/setup-jquery-on-vite-598k
        }),
    ],
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: '../dist'
    },
    server: {
        port: 8080
    }
}
