---
type: method
interface: IDrawingDoc
member: DeleteLineStyle
returns: System.Boolean
parameters:
  -
    name: StyleName
    type: System.String
    description: Name of line style to delete
  -
    name: ReplaceName
    type: System.String
    description: Name of line style to replace deleted StyleName
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.AddLineStyle
  - IDrawingDoc.GetLineStyles
  - IDrawingDoc.LoadLineStyles
  - IDrawingDoc.SaveLineStyles
  - ISldWorks.GetLineStyles
keywords:
  - line
  - styles
  - delete
  - drawings
  - see
  - also
  - idrawingdoc
  - deletelinestyle
  - drawing
  - doc
  - style
  - name
  - string
  - replace
  - boolean
  - manage
  - document
  - vb
  - net
  - vba
---

# IDrawingDoc.DeleteLineStyle

Deletes the specified line style from the current drawing.

## Signature

```csharp
System.Boolean DeleteLineStyle( 
   System.String
StyleName
,
   System.String
ReplaceName
)
```
## Parameters

- `StyleName` (System.String): Name of line style to delete
- `ReplaceName` (System.String): Name of line style to replace deleted StyleName

## Return Value

True if successful, false if not

## Remarks

The following line styles cannot be deleted:
Solid
Dashed
Phantom
Chain
Center
Stitch
Thin/Thick Chain

## Examples

- Manage Drawing Document Line Styles (C#) (Manage_Drawing_Document_Line_Styles_Example_CSharp.htm)
- Manage Drawing Document Line Styles (VB.NET) (Manage_Drawing_Document_Line_Styles_Example_VBNET.htm)
- Manage Drawing Document Line Styles (VBA) (Manage_Drawing_Document_Line_Styles_Example_VB.htm)

## See Also

- `IDrawingDoc.AddLineStyle`
- `IDrawingDoc.GetLineStyles`
- `IDrawingDoc.LoadLineStyles`
- `IDrawingDoc.SaveLineStyles`
- `ISldWorks.GetLineStyles`