import React, {Component} from 'react';

const BalanceOption = ({money, title}) => {
  return (
    <span>
        <em>{money}</em>
        <cite>{title}</cite>
      </span>
  )
};
const Page = ({cls, imgSrc, title, onClick}) => {
  return (
    <a className={cls} onClick={onClick}>
      <span><img src={imgSrc} alt=""/></span>
      <label>{title}</label>
    </a>
  )
};

export {
  BalanceOption,
  Page,
};
