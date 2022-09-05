import React from 'react'
import { RecentContainer, RecentHeader, ClearRecent, Url, Text, Recents, RecentHead, Grid, RecentImage, DetailContainer, Detail, GridDataContainer, DateType, FunctContainer, ReComp, Del, Remove } from './recent.style'
const recentData = [1, 2, 3, 4, 5]
function Recent() {
    return (
        <RecentContainer>
            <Recents>
                <RecentHead>Recent  Images</RecentHead>
                <Grid>
                    {
                        recentData.map((i) => (
                            <GridDataContainer key={i}>
                                < RecentImage />
                                <DateType>02/03/1299</DateType>
                                <FunctContainer>
                                    <Del>View</Del>
                                    <Del>remove</Del>
                                </FunctContainer>
                            </GridDataContainer>
                        ))
                    }
                </Grid>
                <Remove>Clear all recent</Remove>
            </Recents>
        </RecentContainer>


    )
}

export default Recent