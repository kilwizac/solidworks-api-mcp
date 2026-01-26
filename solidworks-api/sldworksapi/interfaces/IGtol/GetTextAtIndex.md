---
type: method
interface: IGtol
member: GetTextAtIndex
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the text
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetTextAngleAtIndex
  - IGtol.GetTextCount
  - IGtol.GetTextFont
  - IGtol.GetTextHeightAtIndex
  - IGtol.GetTextInvertAtIndex
  - IGtol.GetTextPoint
  - IGtol.GetTextPositionAtIndex
  - IGtol.GetTextRefPositionAtIndex
  - IGtol.IGetTextPoint
  - IGtol.IGetTextPositionAtIndex
keywords:
  - text
  - geometric
  - tolerancing
  - gettextatindex
  - igtol
  - gtol
  - index
  - int32
  - string
  - items
  - frame
  - vba
  - vb
  - net
---

# IGtol.GetTextAtIndex

Gets the specified text from this GTol.

## Signature

```csharp
System.String GetTextAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the text

## Return Value

Unknown.

## Examples

- Get Text Items in GTol Frame (VBA) (Get_Text_Items_in_GTol_Frame_VB.htm)
- Get Text Items in GTol Frame (VB. NET) (Get_Text_Items_in_GTol_Frame_Example_VBNET.htm)
- Get Text Items in GTol Frame (C#) (Get_Text_Items_in_GTol_Frame_Example_CSharp.htm)

## See Also

- `IGtol.GetTextAngleAtIndex`
- `IGtol.GetTextCount`
- `IGtol.GetTextFont`
- `IGtol.GetTextHeightAtIndex`
- `IGtol.GetTextInvertAtIndex`
- `IGtol.GetTextPoint`
- `IGtol.GetTextPositionAtIndex`
- `IGtol.GetTextRefPositionAtIndex`
- `IGtol.IGetTextPoint`
- `IGtol.IGetTextPositionAtIndex`