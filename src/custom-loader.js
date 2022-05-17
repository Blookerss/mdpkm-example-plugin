import Manifest from './manifest';
import IconImage from './assets/img/icon.svg';
import BannerImage from './assets/img/banners/custom-loader.svg';
export default class CustomLoader extends PluginSystem {
    type = 'java-modded';

    constructor() {
        super(Manifest.id);
    }

    async init() {
        this.addLoader('custom_example', LocalStrings['app.mdpkm.common.loaders.custom_example'], {
            icon: IconImage,
            type: this.type,
            banner: BannerImage,
            description: LocalStrings['app.mdpkm.common.loaders.custom_example.summary']
        });
        toast(LocalStrings['app.plugin.example_plugin.toasts.test_message']);
    }

    async getVersions() {
        return {
            '1.18.2': ['1.18.2-1.0.0']
        };
    }

    async downloadManifest(path, game, version) {
        const manifest = await API.makeRequest(
            `https://mdpkm.voxelified.com/example-plugin/manifest.json`
        );
        await Util.writeFile(path, JSON.stringify(manifest));
    }
};