---
type: method
interface: ISimpleFilletFeatureData2
member: GetRadius
returns: System.Double
parameters:
  -
    name: PFilletItem
    type: System.Object
    description: Item at which to get the radius
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.AsymmetricFillet
  - ISimpleFilletFeatureData2.DefaultRadius
  - ISimpleFilletFeatureData2.IGetRadius
  - ISimpleFilletFeatureData2.ISetRadius
  - ISimpleFilletFeatureData2.IsMultipleRadius
  - ISimpleFilletFeatureData2.SetRadius
keywords:
  - getradius
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - radius
  - item
  - object
  - double
---

# ISimpleFilletFeatureData2.GetRadius

Gets the radius at the specified fillet/chamfer item.

## Signature

```csharp
System.Double GetRadius( 
   System.Object
PFilletItem
)
```
## Parameters

- `PFilletItem` (System.Object): Item at which to get the radius

## Return Value

Radius of the symmetric fillet at PFilletItem; Distance 1 radius of the asymmetric fillet/chamfer

## Remarks

Before calling this method, call
ISimpleFilletFeatureData2::GetFilletItemAtIndex
to get the pointer with which to specify PFilletItem.
Call
ISimpleFilletFeatureData2::GetDistance
to get the Distance 2 radius of the asymmetric fillet/chamfer.

## See Also

- `ISimpleFilletFeatureData2.AsymmetricFillet`
- `ISimpleFilletFeatureData2.DefaultRadius`
- `ISimpleFilletFeatureData2.IGetRadius`
- `ISimpleFilletFeatureData2.ISetRadius`
- `ISimpleFilletFeatureData2.IsMultipleRadius`
- `ISimpleFilletFeatureData2.SetRadius`