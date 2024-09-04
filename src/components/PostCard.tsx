import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Post } from "../screen/HomeScreen/HomeScreen"
import { horizontalScale, scaleFontSize, verticalScale } from "../utils/ScalingFunction"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faCommentAlt, faDownLong, faShare, faUpLong } from "@fortawesome/free-solid-svg-icons"

const PostCard = ({ item }: { item: Post }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.communityContainer}>
                    <Image source={require('../assets/images/profile.png')} style={styles.communityIcon} />
                    <Text style={styles.communityText}>{item.community}</Text>
                </View>
                <View style={styles.postContainer}>
                    <View>
                        <Text style={styles.postTitle}>{item.title}</Text>
                    </View>
                    <View>
                        {
                            item.images.length > 0 ? <Image style={styles.postImage} source={{
                                uri: item.images[0]
                            }} /> : <Text>{item.content}</Text>
                        }
                    </View>
                </View>
                <View style={styles.interactionContainer}>
                    <View style={styles.likeDislikeWrapper}>
                        <TouchableOpacity><FontAwesomeIcon icon={faUpLong} color="#434343" /></TouchableOpacity>
                        <Text style={{ paddingHorizontal: horizontalScale(7) }}>{item.likes}</Text>
                        <TouchableOpacity><FontAwesomeIcon icon={faDownLong} color="#434343" /></TouchableOpacity>
                    </View>
                    <View style={styles.commentWrapper}>
                        <TouchableOpacity><FontAwesomeIcon icon={faCommentAlt} color="#434343" /></TouchableOpacity>
                        <Text style={{ paddingHorizontal: horizontalScale(4) }}>{item.comments.length}</Text>
                    </View>
                    <View style={styles.shareWrapper}>
                        <TouchableOpacity><FontAwesomeIcon icon={faShare} color="#434343" /></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#B8B8B8',
        paddingVertical: verticalScale(2)
    },
    innerContainer: {
        marginVertical: verticalScale(3),
        paddingHorizontal: horizontalScale(8)
    },
    communityContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    communityIcon: {
        width: horizontalScale(20),
        height: horizontalScale(20),
    },
    communityText: {
        fontSize: scaleFontSize(10),
        marginLeft: horizontalScale(5)
    },
    postContainer: {

    },
    postTitle: {
        paddingVertical: verticalScale(3),
        fontSize: scaleFontSize(16),
        fontWeight: 'bold',

    },
    postImage: {
        width: 'auto',
        height: verticalScale(150),
        objectFit: 'cover',
        resizeMode: 'cover'
    },
    interactionContainer: {
        marginVertical: verticalScale(6),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    likeDislikeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DEDEDE',
        paddingHorizontal: horizontalScale(8),
        paddingVertical: verticalScale(2),
        borderRadius: 30

    },
    commentWrapper: {
        backgroundColor: '#DEDEDE',
        paddingHorizontal: horizontalScale(8),
        paddingVertical: verticalScale(2),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30
    },
    shareWrapper: {
        backgroundColor: '#DEDEDE',
        paddingHorizontal: horizontalScale(8),
        paddingVertical: verticalScale(2),
        borderRadius: 30
    }
})

export default PostCard