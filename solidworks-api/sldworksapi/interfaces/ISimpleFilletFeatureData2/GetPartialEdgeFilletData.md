---
type: method
interface: ISimpleFilletFeatureData2
member: GetPartialEdgeFilletData
returns: System.Object
parameters:
  -
    name: FilletItem
    type: System.Object
    description: IEdge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - parts
related:
  - ISimpleFilletFeatureData2.SetPartialEdgeFilletData
keywords:
  - getpartialedgefilletdata
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
  - ipartialedgefilletdata
---

# ISimpleFilletFeatureData2.GetPartialEdgeFilletData

Gets the partial edge fillet data for the specified edge.

## Signature

```csharp
System.Object GetPartialEdgeFilletData( 
   System.Object
FilletItem
)
```
## Parameters

- `FilletItem` (System.Object): IEdge

## Return Value

IPartialEdgeFilletData ; null if FilletItem is not an edge

## Remarks

This method is valid only if
ISimpleFilletFeatureData2::EnablePartialEdgeParameters
is true.

## Examples

- IPartialEdgeFilletData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartialEdgeFilletData)

## See Also

- `ISimpleFilletFeatureData2.SetPartialEdgeFilletData`