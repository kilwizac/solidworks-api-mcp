---
type: method
interface: ISimpleFilletFeatureData2
member: SetRadius
returns: void
parameters:
  -
    name: PFilletItem
    type: System.Object
    description: Fillet item at which to set the radius
  -
    name: Radius
    type: System.Double
    description: Radius of the symmetric fillet at PFilletItem; Distance 1 radius of the asymmetric fillet
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.AsymmetricFillet
  - ISimpleFilletFeatureData2.DefaultRadius
  - ISimpleFilletFeatureData2.GetRadius
  - ISimpleFilletFeatureData2.IGetRadius
  - ISimpleFilletFeatureData2.ISetRadius
  - ISimpleFilletFeatureData2.IsMultipleRadius
keywords:
  - setradius
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - radius
  - item
  - object
  - double
  - void
---

# ISimpleFilletFeatureData2.SetRadius

Sets the radius at the specified fillet item.

## Signature

```csharp
void SetRadius( 
   System.Object
PFilletItem
,
   System.Double
Radius
)
```
## Parameters

- `PFilletItem` (System.Object): Fillet item at which to set the radius
- `Radius` (System.Double): Radius of the symmetric fillet at PFilletItem; Distance 1 radius of the asymmetric fillet

## Return Value

Unknown.

## Remarks

Before calling this method, call
ISimpleFilletFeatureData2::GetFilletItemAtIndex
to get the pointer with which to specify PFilletItem.
Call
ISimpleFilletFeatureData2::SetDistance
to set the Distance 2 radius at PFilletItem of the asymmetric fillet.

## See Also

- `ISimpleFilletFeatureData2.AsymmetricFillet`
- `ISimpleFilletFeatureData2.DefaultRadius`
- `ISimpleFilletFeatureData2.GetRadius`
- `ISimpleFilletFeatureData2.IGetRadius`
- `ISimpleFilletFeatureData2.ISetRadius`
- `ISimpleFilletFeatureData2.IsMultipleRadius`