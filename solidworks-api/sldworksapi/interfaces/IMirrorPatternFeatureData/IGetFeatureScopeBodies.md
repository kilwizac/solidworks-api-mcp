---
type: method
interface: IMirrorPatternFeatureData
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
  - IMirrorPatternFeatureData.FeatureScope
  - IMirrorPatternFeatureData.FeatureScopeBodies
  - IMirrorPatternFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - igetfeaturescopebodies
  - imirrorpatternfeaturedata
  - mirror
  - pattern
  - data
  - bodies
  - count
  - int32
  - body2
---

# IMirrorPatternFeatureData.IGetFeatureScopeBodies

Gets the solid bodies that the mirror pattern feature affects in a multibody part.

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

Before calling this method, call
IMirrorPatternFeatureData::GetFeatureScopeBodiesCount
to get the value for Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMirrorPatternFeatureData.FeatureScope`
- `IMirrorPatternFeatureData.FeatureScopeBodies`
- `IMirrorPatternFeatureData.ISetFeatureScopeBodies`