import { Helmet } from "react-helmet";
import BirthdayExperience from "@/components/birthday/BirthdayExperience";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Happy Birthday Anmol 🌳</title>
        <meta name="description" content="A growing tree of memories and wishes for someone special." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#1a1611" />
      </Helmet>
      <BirthdayExperience />
    </>
  );
};

export default Index;
