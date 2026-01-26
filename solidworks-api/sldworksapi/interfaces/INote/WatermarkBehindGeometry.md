---
type: property
interface: INote
member: WatermarkBehindGeometry
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.WatermarkTransparencyLevel
keywords:
  - watermarkbehindgeometry
  - inote
  - note
  - watermark
  - behind
  - geometry
  - boolean
  - add
  - part
  - vb
  - net
  - vba
readonly: null
---

# INote.WatermarkBehindGeometry

Gets or sets whether to place this note, specified to be a watermark, behind the geometry in a part or assembly.

## Signature

```csharp
System.Boolean WatermarkBehindGeometry {get; set;}
```
## Parameters

None.

## Return Value

True to place this note behind the geometry in a part or assembly, false to place this note in front of the geometry in a part or assembly

## Remarks

This property is only available when
INote::WatermarkNote
is true.

## Examples

- Add Watermark to Part (C#) (Add_Watermark_to_Part_Example_CSharp.htm)
- Add Watermark to Part (VB.NET) (Add_Watermark_to_Part_Example_VBNET.htm)
- Add Watermark to Part (VBA) (Add_Watermark_to_Part_Example_VB.htm)

## See Also

- `INote.WatermarkTransparencyLevel`