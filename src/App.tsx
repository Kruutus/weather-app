import "./App.scss";
import { Box, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box
      className="outer-box"
      display="flex"
      gap="9.75rem"
      justifyContent="center"
      color="white"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"space-between"}
        flex="1"
      >
        <Box>
          <Text
            fontWeight="400"
            fontSize="12px"
            lineHeight="14.52px"
            marginBottom="4px"
          >
            Város neve
          </Text>
          <Text
            fontSize="48px"
            lineHeight="58.09px"
            margin="unset"
            marginBottom="4px"
          >
            25 °C
          </Text>
          <Text margin="unset" fontSize="16px" lineHeight="19.36px">
            Tiszta idő
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" lineHeight="14.52px" marginBottom="38px">
            Kelemen Kristóf
          </Text>
        </Box>
      </Box>
      <Box flex="3">
        <Text fontSize="12px" lineHeight="14.52px" marginBottom="23px">
          7 napos előrejelzés
        </Text>
        <Box display="flex" flexDirection="column" gap="30px">
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <Box key={index} display="flex" justifyContent={"space-between"}>
                <Box>
                  <Text fontSize="20px" lineHeight="24.2px" margin="unset">
                    {" "}
                    Hétfő
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="20px" lineHeight="24.2px" margin="unset">
                    56%
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="20px" lineHeight="24.2px" margin="unset">
                    9 °C / 23 °C
                  </Text>
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
