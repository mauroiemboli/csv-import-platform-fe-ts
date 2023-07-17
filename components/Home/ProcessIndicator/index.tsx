import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Props } from "./ProcessIndicator";
import CircularProgressWithLabel from "@Components/Common/CircualProcess";

const socketIoServer: string = process.env
  .NEXT_PUBLIC_SOCKET_IO_SERVER as string;

const ProcessIndicator: React.FunctionComponent<Props> = ({
  userId,
}): JSX.Element => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const socket = io(socketIoServer);
    socket.on("connect", () => {
      socket.emit("getProgress", userId);

      // listen for progress updates
      socket.on("progress", (progress) => {
        console.log("progress emit");
        setProgress(progress);
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  return (
    <>
      <CircularProgressWithLabel value={progress} />
    </>
  );
};

export default ProcessIndicator;
