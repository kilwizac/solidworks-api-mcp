---
type: method
interface: ISimpleFilletFeatureData2
member: SetPartialEdgeFilletData
returns: System.Boolean
parameters:
  -
    name: FilletItem
    type: System.Object
    description: IEdge
  -
    name: PartialEdgeFilletData
    type: System.Object
    description: IPartialEdgeFilletData ; null to remove existing partial edge fillet data from FilletItem
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - parts
related:
  - ISimpleFilletFeatureData2.GetPartialEdgeFilletData
keywords:
  - setpartialedgefilletdata
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - partial
  - edge
  - data
  - item
  - object
  - boolean
---

# ISimpleFilletFeatureData2.SetPartialEdgeFilletData

Sets the partial edge fillet data for the specified edge.

## Signature

```csharp
System.Boolean SetPartialEdgeFilletData( 
   System.Object
FilletItem
,
   System.Object
PartialEdgeFilletData
)
```
## Parameters

- `FilletItem` (System.Object): IEdge
- `PartialEdgeFilletData` (System.Object): IPartialEdgeFilletData ; null to remove existing partial edge fillet data from FilletItem

## Return Value

True if partial edge fillet data successfully set, false if not

## Remarks

This method is valid only if
ISimpleFilletFeatureData2::EnablePartialEdgeParameters
is true.

## See Also

- `ISimpleFilletFeatureData2.GetPartialEdgeFilletData`