import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Api from '../../services/Api'
import { FlatList } from 'react-native'
import { Card, Avatar, IconButton } from 'react-native-paper'

export default function Home(props) {

  const [usuarios, setUsuarios] = useState([])  

  useEffect(() => {
    Api.get('/users')
      .then(response =>{

        console.log(response.data.users)

        setUsuarios(response.data.users)
      })

      .catch(error =>{
        console.error('DEU ERRO AO BUSCAR USUARIOS')
      })
  }, [])

  return (
    <View>
      
      <FlatList

        data={usuarios}

        renderItem={({ item }) => {
          return (
            <Card>
              <Card.Title
                left={() => <Avatar.Image size={48} source={{ uri: item.image  }}/>}
                title={item.username}
                subtitle={item.firstName}
              />    
            </Card>
          )
        }

        }

      />

    </View>
  )
}

const styles = StyleSheet.create({})