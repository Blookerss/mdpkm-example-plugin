import CustomLoader from './custom-loader';
LocalStrings.setContent({
    en: {
        'app.mdpkm.common.loaders.custom_example': 'Custom Loader',
        'app.mdpkm.common.loaders.custom_example.summary': 'This is a custom loader from the mdpkm Example Plugin!',

        'app.plugin.example_plugin.toasts.test_message': 'This is a message from the mdpkm Example Plugin!'
    }
});

await API.add('CustomLoader', new CustomLoader());