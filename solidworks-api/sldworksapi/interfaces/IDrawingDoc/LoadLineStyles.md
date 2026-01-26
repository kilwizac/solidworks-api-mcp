---
type: method
interface: IDrawingDoc
member: LoadLineStyles
returns: System.Boolean
parameters:
  -
    name: StyleFiles
    type: System.String
    description: Full pathname of file containing line styles to import
  -
    name: StyleNameList
    type: System.Object
    description: Array of strings containing style names
  -
    name: ReplaceExisting
    type: System.Boolean
    description: True to replace existing styles, false to not
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
  - IDrawingDoc.GetLineStyles
  - IDrawingDoc.SaveLineStyles
  - ISldWorks.GetLineStyles
keywords:
  - line
  - styles
  - import
  - drawings
  - see
  - also
  - idrawingdoc
  - loadlinestyles
  - drawing
  - doc
  - load
  - style
  - files
  - string
  - name
  - list
  - object
  - replace
  - existing
  - boolean
  - manage
  - document
  - vb
  - net
  - vba
---

# IDrawingDoc.LoadLineStyles

Loads the specified line styles into the current drawing.

## Signature

```csharp
System.Boolean LoadLineStyles( 
   System.String
StyleFiles
,
   System.Object
StyleNameList
,
   System.Boolean
ReplaceExisting
)
```
## Parameters

- `StyleFiles` (System.String): Full pathname of file containing line styles to import
- `StyleNameList` (System.Object): Array of strings containing style names
- `ReplaceExisting` (System.Boolean): True to replace existing styles, false to not

## Return Value

True if successful, false if not

## Examples

- Manage Drawing Document Line Styles (C#) (Manage_Drawing_Document_Line_Styles_Example_CSharp.htm)
- Manage Drawing Document Line Styles (VB.NET) (Manage_Drawing_Document_Line_Styles_Example_VBNET.htm)
- Manage Drawing Document Line Styles (VBA) (Manage_Drawing_Document_Line_Styles_Example_VB.htm)

## See Also

- `IDrawingDoc.AddLineStyle`
- `IDrawingDoc.DeleteLineStyle`
- `IDrawingDoc.GetLineStyles`
- `IDrawingDoc.SaveLineStyles`
- `ISldWorks.GetLineStyles`