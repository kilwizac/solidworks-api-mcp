---
type: method
interface: IRevolveFeatureData2
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
  - IRevolveFeatureData2.AutoSelect
  - IRevolveFeatureData2.FeatureScope
  - IRevolveFeatureData2.FeatureScopeBodies
  - IRevolveFeatureData2.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - igetfeaturescopebodies
  - irevolvefeaturedata2
  - revolve
  - data2
  - bodies
  - count
  - int32
  - body2
---

# IRevolveFeatureData2.IGetFeatureScopeBodies

Gets the solid bodies that the revolve feature affects in a multibody part.

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
IRevolveFeatureData2::GetFeatureScopeBodiesCount
before calling this method to get the value of Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRevolveFeatureData2.AutoSelect`
- `IRevolveFeatureData2.FeatureScope`
- `IRevolveFeatureData2.FeatureScopeBodies`
- `IRevolveFeatureData2.ISetFeatureScopeBodies`