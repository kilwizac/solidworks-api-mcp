---
type: method
interface: IThickenFeatureData
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
  - IThickenFeatureData.AutoSelect
  - IThickenFeatureData.FeatureScope
  - IThickenFeatureData.FeatureScopeBodies
  - IThickenFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - igetfeaturescopebodies
  - ithickenfeaturedata
  - thicken
  - data
  - bodies
  - count
  - int32
  - body2
---

# IThickenFeatureData.IGetFeatureScopeBodies

Gets the solid bodies that the thicken feature affects in a multibody part.

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

in-process, unmanaged C++: Pointer to an array of solid bodies that the thicken feature affects in a multibody part of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

COM users must call
IThickenFeatureData::GetFeatureScopeBodiesCount
before calling this method.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IThickenFeatureData.AutoSelect`
- `IThickenFeatureData.FeatureScope`
- `IThickenFeatureData.FeatureScopeBodies`
- `IThickenFeatureData.ISetFeatureScopeBodies`