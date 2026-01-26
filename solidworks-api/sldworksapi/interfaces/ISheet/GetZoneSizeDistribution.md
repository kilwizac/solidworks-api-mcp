---
type: method
interface: ISheet
member: GetZoneSizeDistribution
returns: System.Int32
parameters:
  -
    name: Rows
    type: System.Int32
    description: Zone rows; Nothing or null if the zone size distribution is swZoneSizeDistribution_e.swZoneSizeDistribution_50mmFromCenter
  -
    name: Columns
    type: System.Int32
    description: Zone columns; Nothing or null if the zone size distribution is swZoneSizeDistribution_e.swZoneSizeDistribution_50mmFromCenter
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - getzonesizedistribution
  - isheet
  - sheet
  - zone
  - size
  - distribution
  - rows
  - int32
  - columns
---

# ISheet.GetZoneSizeDistribution

Gets the zone size distribution.

## Signature

```csharp
System.Int32 GetZoneSizeDistribution( 
   out System.Int32
Rows
,
   out System.Int32
Columns
)
```
## Parameters

- `Rows` (System.Int32): Zone rows; Nothing or null if the zone size distribution is swZoneSizeDistribution_e.swZoneSizeDistribution_50mmFromCenter
- `Columns` (System.Int32): Zone columns; Nothing or null if the zone size distribution is swZoneSizeDistribution_e.swZoneSizeDistribution_50mmFromCenter

## Return Value

Zone size distribution as defined by swZoneSizeDistribution_e