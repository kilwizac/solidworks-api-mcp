---
type: property
interface: INote
member: WatermarkNote
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.WatermarkBehindGeometry
  - INote.WatermarkTransparencyLevel
keywords:
  - note
  - see
  - also
  - inote
  - watermark
  - parts
  - assemblies
  - ipartdoc
  - iassemblydoc
  - watermarknote
  - boolean
  - add
  - part
  - vb
  - net
  - vba
readonly: null
---

# INote.WatermarkNote

Gets or sets whether the note is a watermark in a part or assembly.

## Signature

```csharp
System.Boolean WatermarkNote {get; set;}
```
## Parameters

None.

## Return Value

True if the note is a watermark in a part or assembly, false if not

## Remarks

To add a watermark to a part or assembly document:
Open a part or assembly document.
Expand the
Annotations
folder in the FeatureManager design tree.
Right click
Notes Area
and click
Activate
.
Click
Insert > Annotations > Note
Place the note in the graphics area, type the note text, and click
OK
in the Notes PropertyManager page.
Right-click the note and click
Watermark
.
Use
ISheet::BehindSheet
to place a note on the sheet format behind a drawing sheet, which allows you to display the note as watermark in a drawing.

## Examples

- Add Watermark to Part (C#) (Add_Watermark_to_Part_Example_CSharp.htm)
- Add Watermark to Part (VB.NET) (Add_Watermark_to_Part_Example_VBNET.htm)
- Add Watermark to Part (VBA) (Add_Watermark_to_Part_Example_VB.htm)

## See Also

- `INote.WatermarkBehindGeometry`
- `INote.WatermarkTransparencyLevel`