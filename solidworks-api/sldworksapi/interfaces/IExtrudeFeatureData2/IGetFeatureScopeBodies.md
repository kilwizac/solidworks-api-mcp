---
type: method
interface: IExtrudeFeatureData2
member: IGetFeatureScopeBodies
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of solid bodies to affect
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.AutoSelect
  - IExtrudeFeatureData2.FeatureScope
  - IExtrudeFeatureData2.FeatureScopeBodies
  - IExtrudeFeatureData2.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - multibody
  - extrude
  - igetfeaturescopebodies
  - iextrudefeaturedata2
  - data2
  - bodies
  - count
  - int32
  - body2
---

# IExtrudeFeatureData2.IGetFeatureScopeBodies

Gets the solid bodies that the extrude feature affects in a multibody part.

## Signature

```csharp
Body2 IGetFeatureScopeBodies( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of solid bodies to affect

## Return Value

in-process, unmanaged C++: Pointer to an array of solid bodies of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IExtrudeFeatureData2::GetFeatureScopeBodiesCount
before calling this method.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IExtrudeFeatureData2.AutoSelect`
- `IExtrudeFeatureData2.FeatureScope`
- `IExtrudeFeatureData2.FeatureScopeBodies`
- `IExtrudeFeatureData2.ISetFeatureScopeBodies`