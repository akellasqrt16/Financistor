import { useState, useEffect } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from '@ionic/react';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";

const { deleteFile, getUri, readFile, writeFile } = useFilesystem();
const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  export interface Vari {
    filepath: number;
    webviewPath?: number;
    base64?: number;
  }