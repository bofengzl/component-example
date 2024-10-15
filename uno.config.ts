import { defineConfig, presetUno, presetAttributify } from 'unocss';

export default defineConfig({
	// ...UnoCSS options
	/** 预设 */
	shortcuts: [
		{
			'title1-sam': 'font-300 text-64px leading-76px',
			'title1-reg': 'font-400 text-64px leading-76px',
			'title1-sem': 'font-600 text-64px leading-76px',
			'title2-sam': 'font-300 text-42px leading-54px',
			'title2-reg': 'font-400 text-42px leading-54px',
			'title2-sem': 'font-600 text-42px leading-54px',
			'text1-sam': 'font-300 text-32px leading-36px',
			'text1-reg': 'font-400 text-32px leading-36px',
			'text1-sem': 'font-600 text-32px leading-36px',
			'text2-sam': 'font-300 text-24px leading-32px',
			'text2-reg': 'font-400 text-24px leading-32px',
			'text2-sem': 'font-600 text-24px leading-32px',
			'text3-sam': 'font-300 text-20px leading-28px',
			'text3-reg': 'font-400 text-20px leading-28px',
			'text3-sem': 'font-600 text-20px leading-28px',
			'text4-sam': 'font-300 text-16px leading-24px',
			'text4-reg': 'font-400 text-16px leading-24px',
			'text4-sem': 'font-600 text-16px leading-24px',
			'text5-sam': 'font-300 text-14px leading-20px',
			'text5-reg': 'font-400 text-14px leading-20px',
			'text5-sem': 'font-600 text-14px leading-20px',
			'caption1-sam': 'font-300 text-12px leading-18px',
			'caption1-reg': 'font-400 text-12px leading-18px',
			'caption1-sem': 'font-600 text-12px leading-18px',
			'caption2-sam': 'font-300 text-10px leading-12px',
			'caption2-reg': 'font-400 text-10px leading-12px',
			'caption2-sem': 'font-600 text-10px leading-12px',
		},
	],
	/** 自定义规则 */
	rules: [],
	/** 定义主题 */
	theme: {
		screens: {
			sm: '640px',
			lg: '1024px',
			xl: '1200px',
			'3xl': '1920px',
		},
		breakpoints: {
			sm: '640px',
			lg: '1024px',
			xl: '1200px',
			'3xl': '1920px',
		},
    colors: {
      primary: '#1A1B1C',
    }
	},
	presets: [presetUno(), presetAttributify()],
});
