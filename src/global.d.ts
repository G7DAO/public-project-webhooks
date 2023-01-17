interface Window {
  ethereum: {
    request: ({ method }: { method: string }) => Promise<any>;
    isMetaMask: boolean;
  };
}
