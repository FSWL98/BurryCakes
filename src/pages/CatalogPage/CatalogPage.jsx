import React, { useEffect, useState } from 'react';
import './styles.css';
import SpecialItems from '../../components/SpecialItems/SpecialItems.jsx'
import Header from '../../components/Header/Header.jsx';
import { Tabs } from '../../components/Tabs/Tabs.jsx';
import { CatalogItem } from '../../components/CatalogItem/CatalogItem.jsx';
import OrdersPage from '../OrdersPage/OrdersPage.jsx';

const baseCatalogItems = {
  cakes: {
      name: 'Торты',
      items: [
          {
              name: 'Тортик',
              price: 1900,
              image: 'https://avatars.mds.yandex.net/i?id=3f64e4e2e10e7940a268a982415f2c4a_l-4592776-images-thumbs&n=13'
          },
          {
              name: 'Тортик',
              price: 1900,
              image: 'https://avatars.mds.yandex.net/i?id=3f64e4e2e10e7940a268a982415f2c4a_l-4592776-images-thumbs&n=13'
          },
          {
              name: 'Тортик',
              price: 1900,
              image: 'https://avatars.mds.yandex.net/i?id=3f64e4e2e10e7940a268a982415f2c4a_l-4592776-images-thumbs&n=13'
          },
          {
            name: 'Тортик',
            price: 1900,
            image: 'https://avatars.mds.yandex.net/i?id=3f64e4e2e10e7940a268a982415f2c4a_l-4592776-images-thumbs&n=13'
        },
        {
            name: 'Тортик',
            price: 1900,
            image: 'https://avatars.mds.yandex.net/i?id=3f64e4e2e10e7940a268a982415f2c4a_l-4592776-images-thumbs&n=13'
        }
      ]
  },
  pancakes: {
      name: 'Пирожные',
      items: [
          {
              name: 'Пироженка',
              price: 1700,
              image: 'https://i.pinimg.com/736x/41/cf/01/41cf01a5b56986bdbad1a51858f32191.jpg'
          },
          {
              name: 'Пироженка',
              price: 1700,
              image: 'https://i.pinimg.com/736x/41/cf/01/41cf01a5b56986bdbad1a51858f32191.jpg'
          },
          {
              name: 'Пироженка',
              price: 1700,
              image: 'https://i.pinimg.com/736x/41/cf/01/41cf01a5b56986bdbad1a51858f32191.jpg'
          }
      ]
  }
}


function CatalogPage() {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const [catalogItems, setCatalogItems] = useState({});

  const fetchCatalog = async (searchString = '') => {
    return fetch('https://cors-anywhere.herokuapp.com/http://88.201.128.113:8080/api/v1/mini-app/menu').then((res) => res.json()).then((res) => res);
  }

  useEffect(() => {
    console.log(catalogItems, activeTab);
  }, [catalogItems, activeTab]);

  useEffect(() => {
    fetchCatalog().then((result) => {
      setCatalogItems(result);
      setActiveTab(Object.keys(result)[0]);
    })
      .catch(() => {
        setCatalogItems(baseCatalogItems);
        setActiveTab(Object.keys(baseCatalogItems)[0]);
      });

    setItems([
      {
        header: 'Тест',
        description: 'Тест',
        color: 'light',
        image: 'https://i.pinimg.com/originals/ff/a9/90/ffa99080101f18d0e04574641ce820da.jpg'
      },
      {
        header: 'Тест',
        description: 'Тест',
        color: 'light',
        image: 'https://i.pinimg.com/originals/ff/a9/90/ffa99080101f18d0e04574641ce820da.jpg'
      },
      {
        header: 'Тест',
        description: 'Тест',
        color: 'light',
        image: 'https://i.pinimg.com/originals/ff/a9/90/ffa99080101f18d0e04574641ce820da.jpg'
      },
      {
        header: 'Тест',
        description: 'Тест',
        color: 'light',
        image: 'https://i.pinimg.com/originals/ff/a9/90/ffa99080101f18d0e04574641ce820da.jpg'
      }, 
      {
        header: 'Тест',
        description: 'Тест',
        color: 'light',
        image: 'https://i.pinimg.com/originals/ff/a9/90/ffa99080101f18d0e04574641ce820da.jpg'
      }
    ])
  }, [])

  if (!activeTab) {
    return <div></div>
  }
  
  return (
      <div className='catalog-page'>
        <Header />
        <SpecialItems items={items} />
        <Tabs tabs={Object.keys(catalogItems).map((el) => ({ name: catalogItems[el].name || el, key: el}))} activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className='catalog'>
          {catalogItems[activeTab].items.map((el, index) => <CatalogItem name={el.name} image={el.image} price={el.price} />)}
        </div>
      </div>
  );
}

export default CatalogPage;
