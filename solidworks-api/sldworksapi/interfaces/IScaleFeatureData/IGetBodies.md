---
type: method
interface: IScaleFeatureData
member: IGetBodies
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bodies that are scaled
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IScaleFeatureData.Bodies
  - IScaleFeatureData.ISetBodies
keywords:
  - igetbodies
  - iscalefeaturedata
  - scale
  - feature
  - data
  - bodies
  - count
  - int32
  - body2
---

# IScaleFeatureData.IGetBodies

Gets the bodies that are scaled in a multibody part.

## Signature

```csharp
Body2 IGetBodies( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of bodies that are scaled

## Return Value

in-process, unmanaged C++: Pointer to an array of bodies that are scaled of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IScaleFeatureData::GetBodiesCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IScaleFeatureData.Bodies`
- `IScaleFeatureData.ISetBodies`