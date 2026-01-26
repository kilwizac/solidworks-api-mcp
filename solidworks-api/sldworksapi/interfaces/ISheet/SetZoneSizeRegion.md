---
type: method
interface: ISheet
member: SetZoneSizeRegion
returns: System.Boolean
parameters:
  -
    name: RegionType
    type: System.Int32
    description: Type of zone size region as defined by swRegionType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - setzonesizeregion
  - isheet
  - sheet
  - zone
  - size
  - region
  - type
  - int32
  - boolean
---

# ISheet.SetZoneSizeRegion

Sets the type of zone size region.

## Signature

```csharp
System.Boolean SetZoneSizeRegion( 
   System.Int32
RegionType
)
```
## Parameters

- `RegionType` (System.Int32): Type of zone size region as defined by swRegionType_e

## Return Value

True of zone size region successfully set, false if not