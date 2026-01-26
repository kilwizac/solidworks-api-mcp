---
type: method
interface: ISimpleFilletFeatureData2
member: ISetRadius
returns: void
parameters:
  -
    name: PFilletItem
    type: System.Object
    description: Fillet item whose radius you want
  -
    name: Radius
    type: System.Double
    description: Radius value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.DefaultRadius
  - ISimpleFilletFeatureData2.GetRadius
  - ISimpleFilletFeatureData2.IGetRadius
  - ISimpleFilletFeatureData2.IsMultipleRadius
  - ISimpleFilletFeatureData2.SetRadius
keywords:
  - isetradius
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

# ISimpleFilletFeatureData2.ISetRadius

Sets the radius value for specified fillet item.

## Signature

```csharp
void ISetRadius( 
   System.Object
PFilletItem
,
   System.Double
Radius
)
```
## Parameters

- `PFilletItem` (System.Object): Fillet item whose radius you want
- `Radius` (System.Double): Radius value

## Return Value

Unknown.

## Remarks

To obtain a pointer to a fillet item, see
ISimpleFilletFeatureData2::GetFilletItemAtIndex
and
ISimpleFilletFeatureData2::FilletItemsCount
. Fillets can be made from multiple edges or faces and these methods get a pointer to any of the entities that helped to create the particular fillet and pass it into the PFilletItem parameter of this method.

## See Also

- `ISimpleFilletFeatureData2.DefaultRadius`
- `ISimpleFilletFeatureData2.GetRadius`
- `ISimpleFilletFeatureData2.IGetRadius`
- `ISimpleFilletFeatureData2.IsMultipleRadius`
- `ISimpleFilletFeatureData2.SetRadius`