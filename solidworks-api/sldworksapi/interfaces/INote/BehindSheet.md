---
type: property
interface: INote
member: BehindSheet
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - drawing
  - sheets
  - see
  - also
  - isheet
  - notes
  - note
  - inote
  - watermark
  - drawings
  - behindsheet
  - behind
  - sheet
  - boolean
  - place
  - vb
  - net
  - vba
readonly: null
---

# INote.BehindSheet

Places this note, located on the sheet format in a drawing, behind the drawing sheet.

## Signature

```csharp
System.Boolean BehindSheet {get; set;}
```
## Parameters

None.

## Return Value

True to place this note, located on the sheet format in a drawing, behind the drawing sheet; false to not

## Remarks

This property places a note on the sheet format behind a drawing sheet, which allows you to display the note as watermark in a drawing. Before calling this property, you must call
IDrawingDoc::EditTemplate
and
IDrawingDoc::EditSheet
.
Use these properties to modify watermarks in parts and assemblies:
INote::WatermarkNote
INote::WatermarkBehindGeometry
INote::WatermarkTransparencyLevel

## Examples

- Place Note Behind Drawing Sheet (C#) (Place_Note_Behind_Drawing_Sheet_Example_CSharp.htm)
- Place Note Behind Drawing Sheet (VB.NET) (Place_Note_Behind_Drawing_Sheet_Example_VBNET.htm)
- Place Note Behind Drawing Sheet (VBA) (Place_Note_Behind_Drawing_Sheet_Example_VB.htm)