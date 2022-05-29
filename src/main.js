import Manifest from './manifest';
import CustomLoader from './custom-loader';
import EnglishCommon from './locales/en/common';
import EnglishPlugin from './locales/en/plugin';
PluginAPI.addLocaleBundle('en', 'app.mdpkm.common', EnglishCommon);
PluginAPI.addLocaleBundle('en', `app.mdpkm.plugin.${Manifest.id}`, EnglishPlugin);

await API.add('CustomLoader', new CustomLoader());
toast(t(`app.mdpkm.plugin.${Manifest.id}:toasts.test_message`));