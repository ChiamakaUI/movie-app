import { x } from "@xstyled/styled-components";
const Card = ({text, bgColor}) => {
  return (
    <x.div
      m={2}
      display="flex"
      h={44}
      w={44}
      flexGrow={1}
      alignItems="center"
      justifyContent="center"
      borderRadius="lg"
      p={8}
      textAlign="center"
      fontSize="xl"
      fontWeight="medium"
      bg={bgColor}
    >
      {text}
    </x.div>
  );
};

export default Card;

//class="card-hover-animation m-2 flex h-44 w-44 grow items-center justify-center rounded-lg p-8 text-center text-xl font-medium even:bg-app-semi-dark-blue odd:bg-cyan-700"
