---
type: method
interface: IColorTable
member: GetColorRefAtIndex
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index position of the desired color
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IColorTable.SetColorRefAtIndex
keywords:
  - getcolorrefatindex
  - icolortable
  - color
  - table
  - ref
  - index
  - int32
  - colorref
  - values
  - standard
  - user
  - elements
  - vb
  - net
  - vba
---

# IColorTable.GetColorRefAtIndex

Gets the COLORREF at the specified index position of the color table.

## Signature

```csharp
System.Int32 GetColorRefAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index position of the desired color

## Return Value

COLORREF at the specified index position

## Examples

- Get COLORREF Values of Standard User-interface Elements (C#) (Get_COLORREF_Values_of_Standard_User-interface_Elements_Example_CSharp.htm)
- Get COLORREF Values of Standard User-interface Elements (VB.NET) (Get_COLORREF_Values_of_Standard_User-interface_Elements_Example_VBNET.htm)
- Get COLORREF Values of Standard User-interface Elements (VBA) (Get_COLORREF_Values_of_Standard_User-interface_Elements_Example_VB.htm)

## See Also

- `IColorTable.SetColorRefAtIndex`