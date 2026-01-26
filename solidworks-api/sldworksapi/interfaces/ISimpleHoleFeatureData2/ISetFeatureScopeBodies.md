---
type: method
interface: ISimpleHoleFeatureData2
member: ISetFeatureScopeBodies
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bodies that this simple hole feature affects
  -
    name: BodyArr
    type: Body2
    description: Array of bodies that this simple hole feature affects
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleHoleFeatureData2.AutoSelect
  - ISimpleHoleFeatureData2.FeatureScope
  - ISimpleHoleFeatureData2.FeatureScopeBodies
  - ISimpleHoleFeatureData2.GetFeatureScopeBodiesCount
  - ISimpleHoleFeatureData2.IGetFeatureScopeBodies
keywords:
  - feature
  - scope
  - isetfeaturescopebodies
  - isimpleholefeaturedata2
  - simple
  - hole
  - data2
  - bodies
  - count
  - int32
  - body
  - arr
  - body2
  - void
---

# ISimpleHoleFeatureData2.ISetFeatureScopeBodies

Sets the solid bodies that the simple hole feature affects in the multibody part.

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

- `Count` (System.Int32): Number of bodies that this simple hole feature affects
- `BodyArr` (Body2): Array of bodies that this simple hole feature affects

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleHoleFeatureData2.AutoSelect`
- `ISimpleHoleFeatureData2.FeatureScope`
- `ISimpleHoleFeatureData2.FeatureScopeBodies`
- `ISimpleHoleFeatureData2.GetFeatureScopeBodiesCount`
- `ISimpleHoleFeatureData2.IGetFeatureScopeBodies`