import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../../components/Card/Card';


export default function Setting() {

const [direction,setDirection] = useState('')

    const { t, i18n } = useTranslation();

    const settings = [
        { title: t('setting.item1'), description: t('setting.description1'),id:'1' },
        { title: t('setting.item2'), description: t('setting.description2'),id:'2' },
        { title: t('setting.item3'), description:t('setting.description3'),id:'3' },
        { title:t('setting.item4'), description:t('setting.description4'),id:'4' },
        { title:t('setting.item5'), description:t('setting.description5'),id:'5' },
        { title:t('setting.item6'), description:t('setting.description6'),id:'6' },
        { title:t('setting.item7'), description:t('setting.description7'),id:'7' },
        { title:t('setting.item8'), description:t('setting.description8'),id:'8' },
        { title: t('setting.item9'), description: t('setting.description9'),id:'9' },
        { title: t('setting.item10'), description: t('setting.description10'),id:'10' },
        { title: t('setting.item11'), description: t('setting.description11'),id:'11' },
        { title: t('setting.item12'), description: t('setting.description12'),id:'12' },
        { title: t('setting.item13'), description: t('setting.description13') ,id:'13'},
        { title: t('setting.item14'), description: t('setting.description14'),id:'14' },
        { title: t('setting.item15'), description: t('setting.description15'),id:'15' },
        { title: t('setting.item16'), description: t('setting.description16'),id:'16' },
       {title: t('setting.item17'), description: t('setting.description17'),id:'17'}
    ]
    useEffect(()=>{
        const lng = navigator.language
        i18n.changeLanguage(lng)
        if (i18n.language === 'ar') {
            setDirection('rtl')
        }
    },[])

  return (
    <section className="my-6">
      <div className="container">
        <h1 className={`text-2xl font-semibold uppercase mb-3 mx-4 `} dir= {direction}>{t("StoreSetting")}</h1>
        <div className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-0" dir={direction}>
            {settings ? settings.map((setting)=> <div key={setting.id} >
            <Card settingInfo={setting}/>
            </div>) : ''}
        </div>
      </div>
    </section>
  );
}
