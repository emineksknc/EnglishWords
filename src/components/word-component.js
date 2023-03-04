import React from "react"
import Box from "./box";
import {Text} from "react-native"
import Button from "./button"

export function CardContainer({children, ...props}){
    return(
        <Button bg="white" borderRadius="normal" py={16} px={12} {...props}>
            <Box flex={1} borderLeftWidth={3} borderLeftColor="light" pl={12}>
                {children}
            </Box>
        </Button>
    ) 
}



export function CardTitle({children}){
    return(
        <Text style={{fontSize: 18, fontWeight: "bold", color: "black"}}>
            {children}

        </Text>
    )
}

export function CardSummary({children}){
    return(
        <Text color="textMedium" style={{fontSize: 14,  margin:8 }} >
            {children}

        </Text>
    )
}