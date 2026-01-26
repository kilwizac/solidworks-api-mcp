---
type: method
interface: IPrimaryMemberPointLengthFeatureData
member: SetPoints
returns: System.Boolean
parameters:
  -
    name: Points
    type: System.Object
    description: Array of IVertex es, ISketchPoint s, and/or IRefPoint s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setpoints
  - iprimarymemberpointlengthfeaturedata
  - primary
  - member
  - point
  - length
  - feature
  - data
  - points
  - object
  - boolean
---

# IPrimaryMemberPointLengthFeatureData.SetPoints

Sets the vertexes, sketch points, and reference points.

## Signature

```csharp
System.Boolean SetPoints( 
   System.Object
Points
)
```
## Parameters

- `Points` (System.Object): Array of IVertex es, ISketchPoint s, and/or IRefPoint s

## Return Value

True if points successfully set, false if not

## Remarks

Use
IPrimaryMemberPointLengthFeatureData::UnChainPointsAndLength
to specify whether to chain link members along a chain of points.

## Examples

- IPrimaryMemberPointLengthFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberPointLengthFeatureData)