import dynamic from "next/dynamic";

const App = dynamic(() => import("_/app"), { ssr: false });

export default () => <App />;
