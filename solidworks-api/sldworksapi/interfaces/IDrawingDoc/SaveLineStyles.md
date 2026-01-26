---
type: method
interface: IDrawingDoc
member: SaveLineStyles
returns: System.Boolean
parameters:
  -
    name: StyleFiles
    type: System.String
    description: Full pathname of file to save line styles to
  -
    name: StyleNameList
    type: System.Object
    description: Array of strings containing line style names to save
  -
    name: ReplaceExisting
    type: System.Boolean
    description: True to replace existing styles in the file, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - file-io
  - ui
related:
  - IDrawingDoc.AddLineStyle
  - IDrawingDoc.DeleteLineStyle
  - IDrawingDoc.GetLineStyles
  - IDrawingDoc.LoadLineStyles
  - ISldWorks.GetLineStyles
keywords:
  - line
  - styles
  - save
  - drawings
  - see
  - also
  - idrawingdoc
  - savelinestyles
  - drawing
  - doc
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

# IDrawingDoc.SaveLineStyles

Exports to a file the specified line styles in the current drawing.

## Signature

```csharp
System.Boolean SaveLineStyles( 
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

- `StyleFiles` (System.String): Full pathname of file to save line styles to
- `StyleNameList` (System.Object): Array of strings containing line style names to save
- `ReplaceExisting` (System.Boolean): True to replace existing styles in the file, false to not

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
- `IDrawingDoc.LoadLineStyles`
- `ISldWorks.GetLineStyles`