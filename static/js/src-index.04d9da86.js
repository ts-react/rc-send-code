(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/index.mdx":function(A,e,t){"use strict";t.r(e);var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=t("react"),s=t.n(n),a=t("./node_modules/@mdx-js/react/dist/index.es.js"),r=t("./node_modules/docz/dist/index.esm.js"),B=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),d=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),g=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),u=t("./node_modules/antd/es/button/index.js");t("./node_modules/antd/es/button/style/index.css");function l(A,e){return A.replace(/\{([^{]*?)%s(.*?)\}/g,e.toString())}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTemplateText",filename:"src/utils.ts"}});var w=t("./node_modules/awe-utils/dist/index.esm.js");"undefined"!==typeof ISendCodeProps&&ISendCodeProps&&ISendCodeProps===Object(ISendCodeProps)&&Object.isExtensible(ISendCodeProps)&&Object.defineProperty(ISendCodeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ISendCodeProps",filename:"src/send-code.tsx"}});var p=function(A){function e(){var A,t;Object(B.a)(this,e);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(t=Object(g.a)(this,(A=Object(c.a)(e)).call.apply(A,[this].concat(n)))).timer=null,t.lastSecond=0,t.state={buttonText:t.props.initText,start:!1,loading:!1},t.startCountdown=function(){var A=t.props.runText,e=t.lastSecond?t.lastSecond:t.props.second;t.setState({start:!0}),t.lastSecond||t.setState({buttonText:l(A,e)}),t.timer=setInterval(function(){e--,t.setState({buttonText:l(A,e)}),e<=0&&t.timeout()},1e3)},t.timeout=function(){var A=t.props,e=A.resetText,o=A.onEnd;t.setState({buttonText:e,start:!1}),t.timer&&clearInterval(t.timer),o&&o()},t.handleClick=function(A){A.preventDefault();var e=t.props.onCaptcha;t.setState({loading:!0});var o=e?e():null;Object(w.a)(o)?o.then(function(){t.setState({loading:!1}),t.startCountdown()}).catch(function(){t.setState({loading:!1})}):o&&(t.setState({loading:!1}),t.startCountdown())},t}return Object(i.a)(e,A),Object(d.a)(e,[{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer)}},{key:"render",value:function(){var A=this.props,e=(A.second,A.initText,A.resetText,A.runText,A.onCaptcha,A.onEnd,Object(o.a)(A,["second","initText","resetText","runText","onCaptcha","onEnd"])),t=this.state,n=t.loading,a=t.start,r=t.buttonText;return s.a.createElement(u.a,Object.assign({onClick:this.handleClick,loading:n,disabled:a},e),r)}}]),e}(s.a.Component);p.defaultProps={second:60,initText:"\u83b7\u53d6\u9a8c\u8bc1\u7801",runText:"{%s}\u79d2\u540e\u91cd\u65b0\u83b7\u53d6",resetText:"\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801"};var m=p;"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SendCode",filename:"src/send-code.tsx"}}),t.d(e,"default",function(){return E});var I={},C="wrapper";function E(A){var e=A.components,t=Object(o.a)(A,["components"]);return Object(a.b)(C,Object.assign({},I,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"sendcode"},"SendCode"),Object(a.b)("h2",{id:"\u57fa\u672c"},"\u57fa\u672c"),Object(a.b)(r.c,{__position:0,__code:"<SendCode\n  onCaptcha={() => {\n    return true\n  }}\n/>",__scope:{props:this?this.props:t,Playground:r.c,Props:r.d,SendCode:m},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZnDodBHEwLDZXaD04AEchJDgUjzR-AiIPYQNJUok1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnJSABYNPYAA2DStPWMBgIAMW9aBEiU_hnEOBEHQotDKH4JYiGoSg4F0hFLOrayaGcCBcMudgAEZDO0-Q-IEqYAEE5kk9gIyg8gbCgdAw3YeQOUksQMujGR2BRcSYG4YA8NEqq4HkLca2AbLoDy4IADJOvGRJ5koZo2ty_LuFGuUwGQyUBlQdp2AAfg2dqwwjIqriGjrUAS6spBkKs3zMGF1WOGAwDCKAphW4rSu21Ll2rBMOIIHAbMyFIrwIZqa1rEiMHIxl7q-vZUHsWYCGy1wasu7gSpkgHAYnUc-nMVEGRXL75C2-HNxXKRHue173uaqRbr2swvxAWj6MYjBmMBHACDgLBAN0ECDDAwijserj5TNViiPYa9wgiVAligwWbmoTzB0wo0qPcAh0E9OBJA8IXqD5o72nlxX4BVtXUAYsTYEkVRsA-OA4A1-0oNPSwYB9LI7awKYZbdajJHCaBLZVVAOetzg4E8ohqQK7nXBGGBzU9qBvb4w77TQWgBFOtyGh-sjASluxsBA9A7HF4Ws-k9ZHnYQAkBUAQujADfTKvAH9UwAIf8AJc9AEh_wANvMAEujTOU9ZGN0dA5quVBQiIQIBB9ixS8AXCVAGnNQA0ZUASGNADqUwA-M0ALk9AHDTQAac3WNAXidggB4q1ECnH9hS8ABfjABkIqu163kvJHYQArwMAR91AD7owA7f0AUf1AG8MwBQZUAahVgAAFJGrrDRKgfeh8UTThSKfC-l9ADLfoAfXNABwKrfbe1YuiMQIJAq40CT733LtXZBgBzI0voAX8VAAOpkyVAZ4MCHyhiVVglAuBwIfoAduDABryoAGKzACD0YAQA8yFUMIYALHlACcFoAO2NAAr8YAPbUEGABzzQAzYqACztQA9GaADIVMhlcq40JBjMMGfgGFFWhuwLwlByTmAAD4wRlNSRgSIxA-y2nyPQycJTdDTqRP6oksjF2rKrCWECc54OPjOU-KJXDCiuGYixp8oCUA7AUaJwhYlmGcfxOCFt2Dpz-tCZ2pE7B4zXNQfQjBPG_UzuhJY5SM4uAIFkGG6x-xsF8TEI8ZZ2AADlAQAClnA4EsPyDI6Uh4JFPs01gvjMkEBIn3Qew9R7pWUj7Hu9SYjkGOqdUI50s5XBqX9IuUlYZfV7tQdAVwu7aS-rvHBwS5RcL4fw4KX1wH7yUsAxqjcUGAFnEwADaZcOeTWLBo43lyj-Q8gRgL5ArMweKE4qAkhHyyHsnJgIfG0HSscmsAThagomLYHA_ZKB3BwDc_eVyawRKiYaeIjEKUWHiYkgyNKY7_QsNCviFhPjrhoAAdWgFAAAqqgXyyECCXSxRYCAzQIz4rgPTIZAgiqSprOQckAgGiuMmVAWVBIFXtI_CuTGBVOVIuFI4MVJwRjmCkowvxX0krSQnMhfeocpJysJehU-DLRwVS2Gc9KHrpmzIDQtIN_gZn-owOwK4HqiUktORgb1-ICXYPRTATKaMzUEFjWiNlNZCowuuTKgAhOGlEIaMDKqzR6tNayM0qq-ji6goLbb2zJI7HOEZXk5yWIm9Ab54aFqNSuD1bThlSWwZqpO2qIx2sbX6vu5pzRFsBrW0c6bM1w2xfrVtIL21wVoPvbtLre2LrOYOwGw7_TbulRlfttYpLKWrduiwY6hn7BWsm9lRqljRWUgBw1N72WrvHfsdK86VyOqgsC25zsljUDoTkTC7q9XxrgMm0uH9ABcclfZBKC74A3XTM-tW74bNqCc7K4sHyVZqpTmlljEjVAeLRld9Br7WAzVeKDVWr4i6oJeOpVybjUTwfoAReVABfito5BgBouUAG9yK5EPRu6kDJDX71gcuA9MDAsB7BQFiLsW1MBjGNIBn-fsMBWD6C1CdM64qWOquoIJKC1A9EGNcG6lN8r0OrrfXqutWQyOA0ZfpFIubUYA2vVB5zUwsHbKmFJNzoNwbzSBu58Gl15ljNNVKmVtgg7Um7fABLHIX3w3i-dLNYn2AAAEGbmggCkVAQp83w3ppsVAc7TOcfhv51NG7SMLvhqFpJjG2t9evX1mstb6nmraDQK1XXHNDsve1uIBjutXWGzNgLg2gs7a-qN5lp1WXVYLStq9l2LBdAIEjETuXOAysqwQcra69skYO-d474XxtZqm-91Nc2CAWsW6MZbD3qxabAaRSMb2uWxd65SqNiws1kt7VmmjGPt09vg1m5L-jwb0prMp1H26cAU6waIKLga0Nepi6gFz7Aft9uB0sCjrqUPeZwBE2gfmEZ3YEOYKM27GAF2oOdtzBmdg1Q9X4XTMB9OGdEyFhJYWao_ZV19FgFQPCwB4MAejWuWoU9DPAAgxvPqA2ABznOxupDi9QFby9W10nxymJgLZ51sleMBD7cmlMPYxBjvTLQFBgL6EMBwzhgAeC0APD6s9AAhboAQitAD-5oR93hpJrdnMG2h2R6u244Y_gmcfaUfzJHhkDkISYGcdu0jZ1lGnpdA7QiCMvJeDAAjAAbQAHrAAALpGDmhyEBEYcDD65LweQTwy993ppQUSMCVpAa2uTQK2xXBpH_HAagzMI-gRAFi_gqBvSMiQOwfgPxizVAyOaH8ZJz8Uv4NZgQ-QJcX_4MpHA3_u4gGfyAOUOQP0PotNPwFcPwMlBVIRLAHkt6I_sdGSJQIkLmHkAUAjGaLTOUH8KWN5OsPwFEGgOAZfioOGBoHAHgdWPwJgPMOGPxBAPAMQSqvwKaJKMQfwL3tFKZDgAABw4BJiUFfT8DazsEgC95Jg4DRQACc_BghNYwhEcUcweFBn-Yhv-OAAA7HIRYCwZqJaJEKIZwdwXwQISAJpmkgHjgbgLoJACkDvnvtoCzJHmBDJCALQPnufogFfqaLQOaKwRaLMDMPwPIAoBjEAA",mdxType:"Playground"},Object(a.b)(m,{onCaptcha:function(){return!0},mdxType:"SendCode"})),Object(a.b)("h2",{id:"promise"},"Promise"),Object(a.b)(r.c,{__position:1,__code:"<SendCode\n  onCaptcha={() => {\n    return new Promise((resolve, reject) => {\n      setTimeout(function() {\n        resolve()\n      }, 2000)\n    })\n  }}\n/>",__scope:{props:this?this.props:t,Playground:r.c,Props:r.d,SendCode:m},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZnDodBHEwLDZXaD04AEchJDgUjzR-AiIPYQNJUok1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnJSABYNPYAA2DStPWMBgIAMW9aBEiU_hnEOBEHQotDKH4JYiGoSg4F0hFLOrayaGcCBcMudgAEZDO0-Q-IEqYAEE5kk9gIyg8gbCgdAw3YeQOUksQMujGR2BRcSYG4YA8NEqq4HkLca2AbLoDy4IADJOvGRJ5koZo2ty_LuFGuUwGQyUBlQdp2AAfg2dqwwjIqriGjrUAS6spBkKs3zMGF1WOGAwDCKAphW4rSu21Ll2rBMOIIHAbMyFIrwIZqa1rEiMHIxl7q-vZUHsWYCGy1wasu7gSpkgHAYnUc-nMZ0xk8ohqQjCMujgSgoFYGAli6dQtgIIroekld4YsRiCEsfkYH2CMJv47tUEu2Gqap7HcfxlbKappR2AAJmU0W305ixCv5yWtvhzcVykR7nte97mqkW69rML8QFo-jGIwZjARwAg4CwQDdBAgwwMIo7Hq4-UzVYoj2GvcIIlQJYoNdm5qE8wdMKNKj3AIdBPTgSQPDd6gnaO9pg9D-AI6j1AGLE2BJFUbAPjgOAY_tKDT0sGAfSyIusCmAO3WoyRwmgXOVVQG3884OA0epAr7dcEYYHNWuoHrvjDvtNBaAEU63IaH6yMBP27GwED0Dsb33dninq0edhACQFQBC6MAN9Nd8Af1TAAh_wAlz0ASH_AA28wAS6NM5T1kY3R0Dmq5UFCIhAgEBuLA3wBcJUAac1ABoyoASGNAB1KYAPjNABcnoAcNNAA05usNALwy4EGfhVVEBQv7sA3oABfjAAyEbvSBsD1gb0AFeBgBH3UAH3RgA7f0AKP6gBvDMAKDKgBqFWAAAUkausNEqAkEoJRNOFIGDsE4MAMt-gB9c0AHAqBC4HVmxqObhVxeHoKIZILee9RGAHMjHBgBfxUAA6mTJUBngwCgqGJVWCUC4AI5RgB24MAGvKgAYrMAIPRgBADw0TopR7BABY8oATgtAB2xoAFfjAB7akIwAOeaAGbFQAWdqAHozQAZCoaJ3rvPRIMZhgz8EYsmJUvC43FOYAAPjBGU1JGBIjEA3LafI9BjwlN0SepE_qiSyGvCwkcfZcPnvItBM4MEolcMKK4GTySoAwVASgHYCi9OEP0kpiU4I53YFPP60Jy6kTsErNc1B9CMGqb9Ge6ElibOni4AgWQYbrH7GwepMQjxlnYAAOUBAAKWcDgOmlz0qvwSBg05rB6nTIICRR-L834f3SspBu99DkxHIMdU6oRzqzyuHsv6q8pIcxrA_ag6Ari320l9BBtNWlyhsQ4xxwUvqcKQUpVhjUT5iMALOJgAG0xsSSmsMi8XlyUvSwlTimXyFBdI8UJxUBJFQVkeFczAR1NoOlFFjTk7kvxLYHA_ZKB3BwLipB2LUWHJ6YaeIjENUWCGSMgyOr-7_Ulryiwnx1w0AAOrQCgAAVVQL5ZCBB2YrggM0CMEwFUXIyEVaVNZyDkgEA0cpXyoDeoJMbemAgPwrllgVPi1MtUEEcK6k4IxzBSWMQ0oN1BBJQTJfPDuUkfVwEVehDBBrRwVS2Oi9K5acA_L-Q2haTaW31owOwK4TalUqrRRgat8qK00wlTATK_MunatRAyBN8b_QA09RlAAhB2_wvyu3oADfzJtY7wUTsDV9Jp7s5WF2LmSUu88sbIXVXWx-4tAaFWHYmiwTa_VHCkjTMNo8I2YzSXmr6g70DmnNBawGe7RzjsnXDGsJ7qBntkReuCtAkE3paeXJYwHH1fWfcmwGy6IzAdrFJZSO7YNvujX6xmC74avoKksaKosyPgZ5fh6j4R0q5sDUlaSCMaZ3uoAYnImEy3Rv7XAYdG8qGAC45XBoixGEIBpB35B6YPw3gxhggVwWXqqnamq4p1TXzuHYR99sbyPw2DeKUN4b4hRt9RZl9K4N6AEXlQAX4pxNEYAaLlABvciuIT3bupA2EytDBbHF0WD8BgWA9goCxF2DmmAAHA1_n7DAfGNAtQnTOm62j-bUCFqBok5JrhS0jsrcqyT-HKMKv3VkdTgNDX6RSL2tEZqax4ciwVwS2MYVTCktQEr4N5rFdBuDS6AL3k1c4F62wbdGJY3gP1jklnAZ9fOtLTByiAACJtzQQBSKgIUHX4bG02GzbjW3aujqg2po9VNmujJNYxa7BV8ucz3am9NNBM1sw-0-nDgMPjRGyv-q6D2voqeg5DprwyWuGd1adgWAPcOo4RgQJGznusWEIxt0mgGazQ_u1tp7xqjOvdg11-GX3ulpraL90Y_3sfmvw5OSMa3LUFsglOrd-qaxqvnvziwumhf82LZh_mQ3xt-GFyFlC_McBK-xqIAGomKsSeHbxqCZOUhYdTUsTTSDyu09oOBkXiMBDmCjLBxgy9qBbaG_FnYNUm3RfQLF532x6NfV1zVXXPuawsAqB4WAPBgDToIIHiwwAlehngFH_mn1AbACN_PQPUh7eoGT4-rapTnRYGdpgaF51Zk1MBA3bWusa4xH7sbLQFBgL6EMFY6xgAeC0APD6ADAAhboAQitAD-5kpoeUpJqsxHHikuqHr0S-06gvhWGt0Avfv6tpfC81dEx1bict757x8vQiCMvJeDAAjAAbQAHrAAALpGDmhyNhEYcC365LweQTwF-P2NpQUSfCVoLq2trIFNsK4GkP-DjKgObE3qBCACivwKgN6IyEgOwPwD8MWNUBkOaD-GSIgRqvwPjAIPkA7kgfwMpDgKQXfCALgSAOUOQP0EktNPwFcPwMlBVIRLAAst6NgcdGSJQIkLmHkAUAjGaIbOUH8KWN5OsPwFEGgIwcgSoOGBoHABIdWPwJgPMOGPxBAPALIYGvwKaJKLIfwOftFKZDgAABw4BJjKFfT8DxyGEgDn5Jg4DRQACclh1hNYth3cvcteShxBDh5BOAAA7B4RYHoZqJaJEPYcYaYRYVYSAOsHnlXmIbgLoJACkGAdQJAXoNATJCALQJPogYgCgaaLQOaPoRaLMDMPwPIAoPIPIEAA",mdxType:"Playground"},Object(a.b)(m,{onCaptcha:function(){return new Promise(function(A,e){setTimeout(function(){A()},2e3)})},mdxType:"SendCode"})))}E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/index.mdx"}}),E.isMDXComponent=!0}}]);