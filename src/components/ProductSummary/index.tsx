import { Box, Flex, Text, Image, Icon, Tooltip } from "@chakra-ui/react";
import useProductSummary from "../../hooks/useProductSummary";
import { useProductContext } from "../../providers/contexts/productContext";
export default function ProductSummary() {
  const { RRPCurrentProduct } = useProductContext();
  const { productData, currentDate } = useProductSummary();

  return (
    <Box h={"28vh"} minH={"285px"} borderRadius={5}>
      <Box
        overflow={"visible"}
        h={"50%"}
        bg="#2360c3"
        borderTopRadius={5}
        p={3}
        color={"white"}
      >
        <Text fontWeight="500" fontSize={16}>
          {productData.name ? productData.name : "MODEL"}
        </Text>
        <Text fontWeight="500" fontSize={13}>
          {productData.brand && productData.brand.name
            ? productData.brand.name
            : "BRAND"}
        </Text>
        <Text fontWeight="500" fontSize={13} mt={3}>
          {RRPCurrentProduct > 0
            ? `RRP: R$ ${
                RRPCurrentProduct > 1000
                  ? RRPCurrentProduct / 1000
                  : RRPCurrentProduct
              }`
            : "RRP: unknow"}
        </Text>
        <Image
          h={"120px"}
          w={"110px"}
          src={
            productData.pictureUrl
              ? productData.pictureUrl
              : "https://nitm.ac.in/htmls/images/defaultuser.jpg"
          }
          borderRadius={5}
        />
      </Box>
      <Flex
        h={"50%"}
        flexDir={"column"}
        alignItems={{ base: "end", lg: "start", xl: "end" }}
        justifyContent={{
          base: "space-between",
          lg: "end",
          xl: "space-between",
        }}
        p={3}
        bg={"white"}
        color={"black"}
        borderBottomRadius={5}
      >
        <Flex>
          <Text mr={1} fontSize={14}>
            Ranking:
          </Text>
          {productData.lastRatingValue ? (
            <>
              <Icon
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                fill={
                  productData.lastRatingValue >= 1 ? "yellow.300" : "#0078FF"
                }
                className="bi bi-star"
                viewBox="0 0 16 16"
                mt={"1px"}
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </Icon>
              <Icon
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                fill={
                  productData.lastRatingValue >= 2 ? "yellow.300" : "#0078FF"
                }
                className="bi bi-star"
                viewBox="0 0 16 16"
                mt={"1px"}
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </Icon>
              <Icon
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                fill={
                  productData.lastRatingValue >= 3 ? "yellow.300" : "#0078FF"
                }
                className="bi bi-star"
                viewBox="0 0 16 16"
                mt={"1px"}
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </Icon>
              <Icon
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                fill={
                  productData.lastRatingValue >= 4 ? "yellow.300" : "#0078FF"
                }
                className="bi bi-star"
                viewBox="0 0 16 16"
                mt={"1px"}
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </Icon>
              <Icon
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                fill={
                  productData.lastRatingValue >= 5 ? "yellow.300" : "#0078FF"
                }
                className="bi bi-star"
                viewBox="0 0 16 16"
                mt={"1px"}
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </Icon>
            </>
          ) : (
            <Text mr={1} fontSize={14}>
              Unknown
            </Text>
          )}

          <Tooltip label="I'm Tooltip" aria-label="A tooltip">
            <Icon ml={3} mt={"2px"} width="4" height="4" />
          </Tooltip>
        </Flex>
        <Text fontSize={14}>Last scraping: {currentDate}</Text>
      </Flex>
    </Box>
  );
}
