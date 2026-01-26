---
type: method
interface: IExtrudeFeatureData2
member: ISetFeatureScopeBodies
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of solid bodies to affect
  -
    name: BodyArr
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of solid bodies of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.AutoSelect
  - IExtrudeFeatureData2.FeatureScope
  - IExtrudeFeatureData2.FeatureScopeBodies
  - IExtrudeFeatureData2.GetFeatureScopeBodiesCount
  - IExtrudeFeatureData2.IGetFeatureScopeBodies
keywords:
  - feature
  - scope
  - multibody
  - extrude
  - isetfeaturescopebodies
  - iextrudefeaturedata2
  - data2
  - bodies
  - count
  - int32
  - body
  - arr
  - body2
  - void
---

# IExtrudeFeatureData2.ISetFeatureScopeBodies

Sets the solid bodies that the extrude feature affects in the multibody part.

## Signature

```csharp
void ISetFeatureScopeBodies( 
   System.Int32
Count
,
   ref Body2
BodyArr
)
```
## Parameters

- `Count` (System.Int32): Number of solid bodies to affect
- `BodyArr` (Body2): in-process, unmanaged C++: Pointer to an array of solid bodies of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IExtrudeFeatureData2.AutoSelect`
- `IExtrudeFeatureData2.FeatureScope`
- `IExtrudeFeatureData2.FeatureScopeBodies`
- `IExtrudeFeatureData2.GetFeatureScopeBodiesCount`
- `IExtrudeFeatureData2.IGetFeatureScopeBodies`