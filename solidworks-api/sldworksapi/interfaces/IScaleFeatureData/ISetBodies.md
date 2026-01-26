---
type: method
interface: IScaleFeatureData
member: ISetBodies
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bodies that are scaled
  -
    name: BodyArr
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of bodies that are scaled of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IScaleFeatureData.Bodies
  - IScaleFeatureData.GetBodiesCount
  - IScaleFeatureData.IGetBodies
keywords:
  - isetbodies
  - iscalefeaturedata
  - scale
  - feature
  - data
  - bodies
  - count
  - int32
  - body
  - arr
  - body2
  - void
---

# IScaleFeatureData.ISetBodies

Sets the bodies that are scaled in a multibody part.

## Signature

```csharp
void ISetBodies( 
   System.Int32
Count
,
   ref Body2
BodyArr
)
```
## Parameters

- `Count` (System.Int32): Number of bodies that are scaled
- `BodyArr` (Body2): in-process, unmanaged C++: Pointer to an array of bodies that are scaled of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IScaleFeatureData.Bodies`
- `IScaleFeatureData.GetBodiesCount`
- `IScaleFeatureData.IGetBodies`