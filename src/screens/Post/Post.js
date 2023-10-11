import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import Api from '../../services/Api'
import { FlatList } from 'react-native'
import { Card, Avatar, IconButton, Divider } from 'react-native-paper'

export default function Post(props) {

  const usuario = props.route.params

  const [posts, setPosts] = useState([])

  useEffect(() => {
    Api.get('/posts')

      .then(response => {

        setPosts(response.data.posts)

      })
      .catch(error => {
        console.error('DEU ERRO AO BUSCAR OS POSTS')
      })

  }, [])

  return (
    <View>
      <Card>
        <Card.Content>
          <FlatList
            data={posts}
            renderItem={({ item }) => {
              return (
                <View style={{ padding: 10}}>
                  <Text>{item.title}</Text>
                  <Text>{item.body}</Text>
                  <Text>{item.tags}</Text>
                </View>
              )
            }}
          />
        </Card.Content>
      </Card>
      <Divider/>
    </View>
  )
}

const styles = StyleSheet.create({})