---
type: method
interface: ISweepFeatureData
member: IGetFeatureScopeBodies
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of solid bodies to affect
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.AutoSelect
  - ISweepFeatureData.FeatureScope
  - ISweepFeatureData.FeatureScopeBodies
  - ISweepFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - igetfeaturescopebodies
  - sweep
  - data
  - bodies
  - count
  - int32
  - body2
---

# ISweepFeatureData.IGetFeatureScopeBodies

Obsolete. Gets the solid bodies that the sweep feature affects in a multibody part.

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
ISweepFeatureData::GetFeatureScopeBodiesCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISweepFeatureData.AutoSelect`
- `ISweepFeatureData.FeatureScope`
- `ISweepFeatureData.FeatureScopeBodies`
- `ISweepFeatureData.ISetFeatureScopeBodies`