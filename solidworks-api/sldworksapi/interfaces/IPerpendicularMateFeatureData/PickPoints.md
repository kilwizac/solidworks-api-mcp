---
type: property
interface: IPerpendicularMateFeatureData
member: PickPoints
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - pickpoints
  - iperpendicularmatefeaturedata
  - perpendicular
  - mate
  - feature
  - data
  - pick
  - points
  - object
readonly: null
---

# IPerpendicularMateFeatureData.PickPoints

Gets or sets the pick points for the entities to mate in this perpendicular mate.

## Signature

```csharp
System.Object PickPoints {get; set;}
```
## Parameters

None.

## Return Value

Array of x, y, z-coordinates, one set for each mate entity

## Remarks

After you set the pick points for a given selection of
IPerpendicularMateFeatureData::EntitiesToMate
, you cannot modify the pick points. If you want to use new pick points, then you must create an entirely new perpendicular mate.