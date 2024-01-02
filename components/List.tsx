import React from 'react'

const List = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <div>{children}</div>
  )
}

export default List;