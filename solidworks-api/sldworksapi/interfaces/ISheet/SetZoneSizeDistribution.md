---
type: method
interface: ISheet
member: SetZoneSizeDistribution
returns: System.Boolean
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of zone size distribution as defined by swZoneSizeDistribution_e
  -
    name: Rows
    type: System.Int32
    description: Number of zone rows; valid only if Type is swZoneSizeDistribution.swZoneSizeDistribution_EvenlySized
  -
    name: Column
    type: System.Int32
    description: Number of zone columns; valid only if Type is swZoneSizeDistribution.swZoneSizeDistribution_EvenlySized
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - setzonesizedistribution
  - isheet
  - sheet
  - zone
  - size
  - distribution
  - type
  - int32
  - rows
  - column
  - boolean
---

# ISheet.SetZoneSizeDistribution

Sets the zone size distribution.

## Signature

```csharp
System.Boolean SetZoneSizeDistribution( 
   System.Int32
Type
,
   System.Int32
Rows
,
   System.Int32
Column
)
```
## Parameters

- `Type` (System.Int32): Type of zone size distribution as defined by swZoneSizeDistribution_e
- `Rows` (System.Int32): Number of zone rows; valid only if Type is swZoneSizeDistribution.swZoneSizeDistribution_EvenlySized
- `Column` (System.Int32): Number of zone columns; valid only if Type is swZoneSizeDistribution.swZoneSizeDistribution_EvenlySized

## Return Value

True if zone size distribution successfully set, false if not