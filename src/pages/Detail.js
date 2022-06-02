import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../containers/photoCartWhitQuery'

export const Detail = () => {
  const params = useParams();
  return (
    <PhotoCardWithQuery id={params.detailId} />
  )
}
