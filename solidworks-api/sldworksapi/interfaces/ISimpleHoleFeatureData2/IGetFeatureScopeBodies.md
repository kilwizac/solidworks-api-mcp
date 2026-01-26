---
type: method
interface: ISimpleHoleFeatureData2
member: IGetFeatureScopeBodies
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bodies that this simple hole feature affects
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleHoleFeatureData2.AutoSelect
  - ISimpleHoleFeatureData2.FeatureScope
  - ISimpleHoleFeatureData2.FeatureScopeBodies
  - ISimpleHoleFeatureData2.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - igetfeaturescopebodies
  - isimpleholefeaturedata2
  - simple
  - hole
  - data2
  - bodies
  - count
  - int32
  - body2
---

# ISimpleHoleFeatureData2.IGetFeatureScopeBodies

Gets the solid bodies that the simple hole feature affects in a multibody part.

## Signature

```csharp
Body2 IGetFeatureScopeBodies( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of bodies that this simple hole feature affects

## Return Value

in-process, unmanaged C++: Pointer to an array of bodies that this simple hole feature affects VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISimpleHoleFeatureData2::GetFeatureScopeBodiesCount
to get the size of the array.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleHoleFeatureData2.AutoSelect`
- `ISimpleHoleFeatureData2.FeatureScope`
- `ISimpleHoleFeatureData2.FeatureScopeBodies`
- `ISimpleHoleFeatureData2.ISetFeatureScopeBodies`