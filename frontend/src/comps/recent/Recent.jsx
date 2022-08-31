import React from 'react'
import { RecentContainer, RecentHeader, ClearRecent, Url, Text, Recent, RecentHead, Grid, RecentImage, DetailContainer, Detail, GridDataContainer, DateType, FunctContainer, ReComp, Del, Remove } from './recent.style'
const recentData = [1, 2, 3, 4, 5]
function Recent() {
    return (
        <RecentContainer>
            <RecentHeader>Recent Links</RecentHeader>
            <Recent>
                <RecentHead>Recent  Images</RecentHead>
                <Grid>
                    {
                        recentData.map((i) => (
                            <GridDataContainer key={i}>
                                < RecentImage />
                                <DateType>02/03/1299</DateType>
                                <FunctContainer>
                                    <Del>recompress</Del>
                                    <Del>remove</Del>
                                </FunctContainer>
                            </GridDataContainer>
                        ))
                    }
                </Grid>
                <Remove>Clear all recent</Remove>
            </Recent>
            <ClearRecent>clear all Url</ClearRecent>
        </RecentContainer>


    )
}

export default Recent