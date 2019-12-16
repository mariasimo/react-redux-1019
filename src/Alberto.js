import React from "react";
import { connect } from "react-redux";
import { dateUnaVueltaAction } from "./redux/actions/vueltas";
import styled from "styled-components";

const CajitaMarc = styled.div`
  border: 1px solid ${props => props.color || "red"};
  padding: 10px;
  margin: 10px;
`;

const InternalContadorComponent = ({ color, name, vueltas, dispatch }) => (
  <CajitaMarc color={color}>
    <h2>Hola me llamo {name}</h2>
    <p>He dado {vueltas}</p>
    <button onClick={() => dispatch(dateUnaVueltaAction())}>
      Date una vuelta Alberto
    </button>
    <button onClick={() => dispatch(dateUnaVueltaAction(-1))}>
      Quitate una vuelta Alberto
    </button>
  </CajitaMarc>
);

// Connect "InternalContadorComponent" to redux store
export const Alberto = connect(state => state)(InternalContadorComponent);
