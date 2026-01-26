---
type: method
interface: ISimpleFilletFeatureData2
member: IGetFilletItemAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of fillet item
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.IGetConicRhoOrRadius
  - ISimpleFilletFeatureData2.IGetRadius
  - ISimpleFilletFeatureData2.ISetConicRhoOrRadius
  - ISimpleFilletFeatureData2.ISetRadius
keywords:
  - igetfilletitematindex
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - item
  - index
  - int32
  - object
---

# ISimpleFilletFeatureData2.IGetFilletItemAtIndex

Gets the fillet item at the specified index.

## Signature

```csharp
System.Object IGetFilletItemAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of fillet item

## Return Value

Fillet item: edge , face , loop , or NULL if the operation fails

## Remarks

Call
ISimpleFilletFeatureData2::FilletItemsCount
before calling this method to determine the value for Index.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.IGetConicRhoOrRadius`
- `ISimpleFilletFeatureData2.IGetRadius`
- `ISimpleFilletFeatureData2.ISetConicRhoOrRadius`
- `ISimpleFilletFeatureData2.ISetRadius`