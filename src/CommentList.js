import React, { Component } from "react"
import Comment from './Comment'
import PropTypes from 'prop-types'
import { thisTypeAnnotation } from "@babel/types";

class CommentList extends Component{
  //加上defaultProps防止comments不传入的情况
  static defaultProps={
    comments:[]
  }
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }
  handleDeleteComment (index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
 
  render(){
    // const comments=[
    //   {username:'tomy',content:'hello'},
    //   {username:'tomy',content:'hello'},
    //   {username:'tomy',content:'hello'},

    // ]
    return(
      <div>
        {/* {comments.map((comment,i)=>{
          return (
            <div key={i}>
              {comment.username}:{comment.content}
            </div>
          )
        })} */}
        {this.props.comments.map((comment,i)=><Comment comment={comment} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)}/>)}
      </div>
    )
  }
}
  

export default CommentList