---
type: method
interface: ISldWorks
member: GetLineStyles
returns: System.Boolean
parameters:
  -
    name: StyleFile
    type: System.String
    description: Full pathname of the file containing line styles to get
  -
    name: StyleNameList
    type: System.Object
    description: Array of strings containing line style names
  -
    name: StyleList
    type: System.Object
    description: Array of strings containing line style types
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IDrawingDoc.AddLineStyle
  - IDrawingDoc.DeleteLineStyle
  - IDrawingDoc.GetLineStyles
  - IDrawingDoc.LoadLineStyles
  - IDrawingDoc.SaveLineStyles
keywords:
  - line
  - styles
  - file
  - getlinestyles
  - isldworks
  - sld
  - works
  - style
  - string
  - name
  - list
  - object
  - boolean
  - manage
  - drawing
  - document
  - vb
  - net
  - vba
---

# ISldWorks.GetLineStyles

Gets all of the line styles in the specified file.

## Signature

```csharp
System.Boolean GetLineStyles( 
   System.String
StyleFile
,
   out System.Object
StyleNameList
,
   out System.Object
StyleList
)
```
## Parameters

- `StyleFile` (System.String): Full pathname of the file containing line styles to get
- `StyleNameList` (System.Object): Array of strings containing line style names
- `StyleList` (System.Object): Array of strings containing line style types

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
- `IDrawingDoc.SaveLineStyles`