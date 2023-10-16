"use client";
import { socket } from "@/services/socket.service";
import { EBattleAction } from "@/types/battle/battleAction.enum";
import { EBattleEvents } from "@/types/battle/battleEvent";
import { EBattleType } from "@/types/battle/battletype.enum";
import React, { createContext, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { io } from "socket.io-client";

type BattleContextType = {
  battle: any;
  findMatch: (petId: string, battleType: EBattleType) => void;
  sendRoundAction: (action: EBattleAction) => void;
  reset(): void;
};
const defaultContext: BattleContextType = {
  battle: undefined,
  findMatch: () => {},
  sendRoundAction: () => {},
  reset: () => {},
};
export const BattleContext = createContext<BattleContextType>(defaultContext);
export const BattleContextProvider: React.FC<{ children: any }> = ({
  children,
}) => {
  const [battle, setBattle] = useState<any>();
  const findMatch = (petId: string, battleType: EBattleType) => {
    socket.emit("findMatch", { petId, battleType });
  };

  const sendRoundAction = (action: EBattleAction) => {
    console.log(action);
    socket.emit("setRoundAction", { battleUuid: battle.uuid, action });
  };
  const reset = () => {
    setBattle(undefined);
  };
  useEffect(() => {
    const localToken =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRpbGFwaW9AZ21haWwuY29tIiwic3ViIjoiNjUyMmIyMjdmM2QxZmMzZjJkNjkxMDhhIiwicGxheWVySWQiOiI2NTI5NzRhMzE3NWQ5NzkyNjJkOWQ5YzIiLCJpYXQiOjE2OTc0NjU0NDMsImV4cCI6MTY5NzU1MTg0M30.7YhRiWi0JtBN1avx--eRr8rKmnhFEgYYu6-5Eq_Jkhs";
    if (localToken) {
      console.log(localToken);
      socket.io.opts.extraHeaders = { authorization: localToken };
      socket.disconnect().connect();
    }
  }, []);

  useEffect(() => {
    function onConnect() {
      console.log("connected");
    }
    function onDisconnect() {
      console.log("disconnected");
    }
    function onBattleChange(data: any) {
      console.log(data);
      setBattle(data);
    }
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on(EBattleEvents.onBattleChange, onBattleChange);
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("battleChange", onBattleChange);
    };
  }, []);
  return (
    <BattleContext.Provider
      value={{ battle, findMatch, sendRoundAction, reset }}
    >
      {children}
    </BattleContext.Provider>
  );
};
