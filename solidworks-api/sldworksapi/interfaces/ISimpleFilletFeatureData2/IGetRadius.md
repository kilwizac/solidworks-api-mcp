---
type: method
interface: ISimpleFilletFeatureData2
member: IGetRadius
returns: System.Double
parameters:
  -
    name: PFilletItem
    type: System.Object
    description: Fillet item whose radius you want
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.DefaultRadius
  - ISimpleFilletFeatureData2.ISetRadius
  - ISimpleFilletFeatureData2.IsMultipleRadius
  - ISimpleFilletFeatureData2.SetRadius
keywords:
  - igetradius
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

# ISimpleFilletFeatureData2.IGetRadius

Gets the radius value for specified fillet item.

## Signature

```csharp
System.Double IGetRadius( 
   System.Object
PFilletItem
)
```
## Parameters

- `PFilletItem` (System.Object): Fillet item whose radius you want

## Return Value

Radius value

## Remarks

To obtain a pointer to a fillet item, see
ISimpleFilletFeatureData2::GetFilletItemAtIndex
and
ISimpleFilletFeatureData2::FilletItemsCount
. Fillets can be made from multiple edges or faces and these methods get a pointer to any of the entities that helped to create the particular fillet and pass it into the PFilletItem parameter of this method.

## See Also

- `ISimpleFilletFeatureData2.DefaultRadius`
- `ISimpleFilletFeatureData2.ISetRadius`
- `ISimpleFilletFeatureData2.IsMultipleRadius`
- `ISimpleFilletFeatureData2.SetRadius`