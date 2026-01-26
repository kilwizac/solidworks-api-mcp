---
type: method
interface: IDrawingDoc
member: GetLineStyles
returns: System.Boolean
parameters:
  -
    name: StyleNameList
    type: System.Object
    description: Array of strings containing style names
  -
    name: StyleList
    type: System.Object
    description: Array of strings containing style types
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.AddLineStyle
  - IDrawingDoc.DeleteLineStyle
  - IDrawingDoc.LoadLineStyles
  - IDrawingDoc.SaveLineStyles
  - ISldWorks.GetLineStyles
keywords:
  - line
  - styles
  - document
  - drawings
  - see
  - also
  - idrawingdoc
  - getlinestyles
  - drawing
  - doc
  - style
  - name
  - list
  - object
  - boolean
  - manage
  - vb
  - net
  - vba
---

# IDrawingDoc.GetLineStyles

Gets all of the line styles used in the current document.

## Signature

```csharp
System.Boolean GetLineStyles( 
   out System.Object
StyleNameList
,
   out System.Object
StyleList
)
```
## Parameters

- `StyleNameList` (System.Object): Array of strings containing style names
- `StyleList` (System.Object): Array of strings containing style types

## Return Value

True if successful, false if not

## Examples

- Manage Drawing Document Line Styles (C#) (Manage_Drawing_Document_Line_Styles_Example_CSharp.htm)
- Manage Drawing Document Line Styles (VB.NET) (Manage_Drawing_Document_Line_Styles_Example_VBNET.htm)
- Manage Drawing Document Line Styles (VBA) (Manage_Drawing_Document_Line_Styles_Example_VB.htm)

## See Also

- `IDrawingDoc.AddLineStyle`
- `IDrawingDoc.DeleteLineStyle`
- `IDrawingDoc.LoadLineStyles`
- `IDrawingDoc.SaveLineStyles`
- `ISldWorks.GetLineStyles`