---
type: method
interface: IColorTable
member: SetCustomColor
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the custom color to set
  -
    name: ColorRef
    type: System.Int32
    description: COLORREF value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IColorTable.GetCustomColorCount
  - IColorTable.GetCustomColors
  - IColorTable.IGetCustomColors
keywords:
  - setcustomcolor
  - icolortable
  - color
  - table
  - custom
  - index
  - int32
  - ref
  - boolean
---

# IColorTable.SetCustomColor

Sets a custom color.

## Signature

```csharp
System.Boolean SetCustomColor( 
   System.Int32
Index
,
   System.Int32
ColorRef
)
```
## Parameters

- `Index` (System.Int32): Index of the custom color to set
- `ColorRef` (System.Int32): COLORREF value

## Return Value

True if successful, false if not

## See Also

- `IColorTable.GetCustomColorCount`
- `IColorTable.GetCustomColors`
- `IColorTable.IGetCustomColors`