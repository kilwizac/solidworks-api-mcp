---
type: method
interface: ISweepFeatureData
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
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.AutoSelect
  - ISweepFeatureData.FeatureScope
  - ISweepFeatureData.FeatureScopeBodies
  - ISweepFeatureData.GetFeatureScopeBodiesCount
  - ISweepFeatureData.IGetFeatureScopeBodies
keywords:
  - feature
  - scope
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - isetfeaturescopebodies
  - sweep
  - data
  - bodies
  - count
  - int32
  - body
  - arr
  - body2
  - void
---

# ISweepFeatureData.ISetFeatureScopeBodies

Obsolete. Sets the solid bodies that the sweep feature affects in a multibody part.

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
for additional details.

## See Also

- `ISweepFeatureData.AutoSelect`
- `ISweepFeatureData.FeatureScope`
- `ISweepFeatureData.FeatureScopeBodies`
- `ISweepFeatureData.GetFeatureScopeBodiesCount`
- `ISweepFeatureData.IGetFeatureScopeBodies`