import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const WagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  ssr: true, //enables server side rendering
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
