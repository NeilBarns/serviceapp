import { View, Text, ScrollView, FlatList } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Style from './CDraftProjectsStyle';
import moment from 'moment';
import { MaterialIcons, Ionicons } from '../../../components/general/Icons';
import useAsyncStorageOperation from '../../../hooks/Customer/useAsyncStorageOperation';
import { useFocusEffect } from '@react-navigation/native';


const CDraftProjects = () => {

  const [draftProjects, setDraftProjects] = useState([]);


  const { fetchKeys,
    fetchKeyData } = useAsyncStorageOperation();



  useFocusEffect(
    useCallback(() => {
      draftKeyFetcher();
    }, [])
  );

  const keyListLooper = async (keyList) => {

    let temp_array = [];

    await keyList.map((item) => {

      if (item.indexOf('dftPrj_') > -1) {

        const data = async () => {
          let dataFetched = await fetchKeyData(item);
          return dataFetched;
        }

        const arrayCreator = async () => {
          let fetched = await data();
          temp_array.push(fetched);
          addNewItem(temp_array);
        }

        const addNewItem = (fetched) => {
          setDraftProjects(fetched);
        };

        arrayCreator();
      }
    })

    return temp_array;
  }

  const draftKeyFetcher = async () => {
    let keyList = await fetchKeys();
    await keyListLooper(keyList);
  }

  const DraftItem = ({ item }) => {
    let taskDate = moment(item.taskDate).format('MMM D, YYYY');
    let taskSched = taskDate + " " + item.taskTime;
    // let taskExpiryDate = moment(item.taskExpiry).format('MMM D, YYYY');

    return (
      <View style={Style.itemContainer}>
        <View style={Style.itemContainerTop}>
          <View style={Style.itemContainerLeft}>
            <MaterialIcons name='drafts' style={Style.itemLogo} />
          </View>
          <View style={Style.itemContainerRight}>
            <Text style={Style.serviceNameLabel}>{item.serviceName}</Text>
            <Text style={Style.otherDetailsLabel}>{taskSched}</Text>
            <Text style={Style.otherDetailsLabel}>Master Bubble Laundry Shop</Text>
          </View>
        </View>
        <View style={Style.itemContainerBottom}>
          <Ionicons style={Style.warningLogo} name='warning-outline' />
          <Text style={Style.warningLabel}>Expires on {item.taskExpiry}</Text>
        </View>
      </View>
    )
  }

  return (
    <FlatList 
        style={Style.container}
        data={draftProjects}
        renderItem={DraftItem}
        extraData={draftProjects}
      />
  );
};

export default CDraftProjects;
