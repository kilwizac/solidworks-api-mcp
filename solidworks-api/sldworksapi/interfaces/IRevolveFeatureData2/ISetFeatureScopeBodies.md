---
type: method
interface: IRevolveFeatureData2
member: ISetFeatureScopeBodies
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bodies to affect
  -
    name: BodyArr
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of solid bodies of size count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRevolveFeatureData2.AutoSelect
  - IRevolveFeatureData2.FeatureScope
  - IRevolveFeatureData2.FeatureScopeBodies
  - IRevolveFeatureData2.GetFeatureScopeBodiesCount
  - IRevolveFeatureData2.IGetFeatureScopeBodies
keywords:
  - feature
  - scope
  - isetfeaturescopebodies
  - irevolvefeaturedata2
  - revolve
  - data2
  - bodies
  - count
  - int32
  - body
  - arr
  - body2
  - void
---

# IRevolveFeatureData2.ISetFeatureScopeBodies

Sets the solid bodies that the revolve feature affects in a multibody part.

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

- `Count` (System.Int32): Number of bodies to affect
- `BodyArr` (Body2): in-process, unmanaged C++: Pointer to an array of solid bodies of size count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRevolveFeatureData2.AutoSelect`
- `IRevolveFeatureData2.FeatureScope`
- `IRevolveFeatureData2.FeatureScopeBodies`
- `IRevolveFeatureData2.GetFeatureScopeBodiesCount`
- `IRevolveFeatureData2.IGetFeatureScopeBodies`