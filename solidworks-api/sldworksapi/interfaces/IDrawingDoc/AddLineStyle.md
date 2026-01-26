---
type: method
interface: IDrawingDoc
member: AddLineStyle
returns: System.Boolean
parameters:
  -
    name: StyleName
    type: System.String
    description: Name of line style
  -
    name: StyleDefinition
    type: System.String
    description: Comma-delimited string of line lengths and spacing values for the line style
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.DeleteLineStyle
  - IDrawingDoc.GetLineStyles
  - IDrawingDoc.LoadLineStyles
  - IDrawingDoc.SaveLineStyles
  - ISldWorks.GetLineStyles
keywords:
  - line
  - styles
  - add
  - drawings
  - see
  - also
  - idrawingdoc
  - addlinestyle
  - drawing
  - doc
  - style
  - name
  - string
  - definition
  - boolean
  - manage
  - document
  - vb
  - net
  - vba
---

# IDrawingDoc.AddLineStyle

Adds a line style to the current drawing.

## Signature

```csharp
System.Boolean AddLineStyle( 
   System.String
StyleName
,
   System.String
StyleDefinition
)
```
## Parameters

- `StyleName` (System.String): Name of line style
- `StyleDefinition` (System.String): Comma-delimited string of line lengths and spacing values for the line style

## Return Value

True if successful, false if not

## Remarks

Read about line style options in SOLIDWORKS Help.

## Examples

- Manage Drawing Document Line Styles (C#) (Manage_Drawing_Document_Line_Styles_Example_CSharp.htm)
- Manage Drawing Document Line Styles (VB.NET) (Manage_Drawing_Document_Line_Styles_Example_VBNET.htm)
- Manage Drawing Document Line Styles (VBA) (Manage_Drawing_Document_Line_Styles_Example_VB.htm)

## See Also

- `IDrawingDoc.DeleteLineStyle`
- `IDrawingDoc.GetLineStyles`
- `IDrawingDoc.LoadLineStyles`
- `IDrawingDoc.SaveLineStyles`
- `ISldWorks.GetLineStyles`