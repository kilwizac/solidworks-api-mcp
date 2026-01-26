---
type: method
interface: ISimpleFilletFeatureData2
member: GetDistance
returns: System.Double
parameters:
  -
    name: PFilletItem
    type: System.Object
    description: Item at which to get the Distance 2radius
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.AsymmetricFillet
  - ISimpleFilletFeatureData2.SetDistance
keywords:
  - getdistance
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - distance
  - item
  - object
  - double
---

# ISimpleFilletFeatureData2.GetDistance

Gets the Distance 2 radius at the specified item of this asymmetric fillet/chamfer.

## Signature

```csharp
System.Double GetDistance( 
   System.Object
PFilletItem
)
```
## Parameters

- `PFilletItem` (System.Object): Item at which to get the Distance 2radius

## Return Value

Distance 2 radius at PFilletItem for this asymmetric fillet/chamfer

## Remarks

Call
ISimpleFilletFeatureData2::GetRadius
to get the Distance 1 radius at PFilletItem for this asymmetric fillet/chamfer.

## See Also

- `ISimpleFilletFeatureData2.AsymmetricFillet`
- `ISimpleFilletFeatureData2.SetDistance`