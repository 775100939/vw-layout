import React, {Component} from 'react';
import Images from "../utils/image";
import {tel} from "../constants/common";
import {Icon, NavBar} from "antd-mobile";

const CusService = () => {
  return (<span className="cus-service">
    <img src={Images.customService}/>
  </span>);
};

const CellPhone = () => {
  return (
    <a className="tel" href={`tel:${tel}`}>
      <img src={Images.cellphone}/>
    </a>);
};

const Message = () => {
  return (
    <a className="msg" href={`tel:${tel}`}>
      <img src={Images.message}/>
    </a>);
};

const Nav = ({cls, leftContent, onLeftClick, title, rightContent}) => {
  return (
    <NavBar
      mode="dark"
      leftContent={leftContent || <Icon type="left" size="lg"/>}
      onLeftClick={onLeftClick}
      rightContent={rightContent}
      className={`bar-customize ${cls || ''}`}
    >{title}</NavBar>
  );
};

const Container = (props) => {
  return (
    <div className={`wrapper${props.cls ? ` ${props.cls}` : ''}`}>
      <div className="wrapper-inner">
        {props.children}
      </div>
    </div>
  );
};

export {
  Nav,
  Container,
  CellPhone,
  CusService,
  Message,
};
