---
type: method
interface: ISimpleFilletFeatureData2
member: SetDistance
returns: void
parameters:
  -
    name: PFilletItem
    type: System.Object
    description: Item at which to set the Distance 2 radius
  -
    name: Dist2
    type: System.Double
    description: Distance 2 radius of the asymmetric fillet/chamfer at PFilletItem
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.AsymmetricFillet
  - ISimpleFilletFeatureData2.GetDistance
keywords:
  - setdistance
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - distance
  - item
  - object
  - dist2
  - double
  - void
---

# ISimpleFilletFeatureData2.SetDistance

Sets the Distance 2 radius at the specified item of this asymmetric fillet/chamfer.

## Signature

```csharp
void SetDistance( 
   System.Object
PFilletItem
,
   System.Double
Dist2
)
```
## Parameters

- `PFilletItem` (System.Object): Item at which to set the Distance 2 radius
- `Dist2` (System.Double): Distance 2 radius of the asymmetric fillet/chamfer at PFilletItem

## Return Value

Unknown.

## Remarks

Call
ISimpleFilletFeatureData2::SetRadius
to set the Distance 1 radius.

## See Also

- `ISimpleFilletFeatureData2.AsymmetricFillet`
- `ISimpleFilletFeatureData2.GetDistance`