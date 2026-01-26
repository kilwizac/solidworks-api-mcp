---
type: method
interface: IColorTable
member: GetNameAtIndex
returns: System.String
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
  - getnameatindex
  - icolortable
  - color
  - table
  - name
  - index
  - int32
  - string
  - colorref
  - values
  - standard
  - user
  - elements
  - vb
  - net
  - vba
---

# IColorTable.GetNameAtIndex

Gets the name of the color at the specified index position in the color table.

## Signature

```csharp
System.String GetNameAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index position of the desired color

## Return Value

Name of the color at the specified index

## Examples

- Get COLORREF Values of Standard User-interface Elements (C#) (Get_COLORREF_Values_of_Standard_User-interface_Elements_Example_CSharp.htm)
- Get COLORREF Values of Standard User-interface Elements (VB.NET) (Get_COLORREF_Values_of_Standard_User-interface_Elements_Example_VBNET.htm)
- Get COLORREF Values of Standard User-interface Elements (VBA) (Get_COLORREF_Values_of_Standard_User-interface_Elements_Example_VB.htm)

## See Also

- `IColorTable.SetColorRefAtIndex`