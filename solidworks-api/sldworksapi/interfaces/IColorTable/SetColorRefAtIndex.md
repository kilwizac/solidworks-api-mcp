---
type: method
interface: IColorTable
member: SetColorRefAtIndex
returns: void
parameters:
  -
    name: Index
    type: System.Int32
    description: Index value within the color table you want to modify
  -
    name: ColorRef
    type: System.Int32
    description: COLORREF value
  -
    name: ApplyTo
    type: System.Int32
    description: Not used; specify 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IColorTable.GetColorRefAtIndex
keywords:
  - setcolorrefatindex
  - icolortable
  - color
  - table
  - ref
  - index
  - int32
  - apply
  - void
---

# IColorTable.SetColorRefAtIndex

Sets the specified color value within the color table.

## Signature

```csharp
void SetColorRefAtIndex( 
   System.Int32
Index
,
   System.Int32
ColorRef
,
   System.Int32
ApplyTo
)
```
## Parameters

- `Index` (System.Int32): Index value within the color table you want to modify
- `ColorRef` (System.Int32): COLORREF value
- `ApplyTo` (System.Int32): Not used; specify 0

## Return Value

Unknown.

## See Also

- `IColorTable.GetColorRefAtIndex`