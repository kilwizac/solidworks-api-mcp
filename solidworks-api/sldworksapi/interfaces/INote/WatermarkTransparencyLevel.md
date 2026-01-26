---
type: property
interface: INote
member: WatermarkTransparencyLevel
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.WatermarkBehindGeometry
keywords:
  - watermarktransparencylevel
  - inote
  - note
  - watermark
  - transparency
  - level
  - double
  - add
  - part
  - vb
  - net
  - vba
readonly: null
---

# INote.WatermarkTransparencyLevel

Gets or sets the transparency level of a note specified to be a watermark.

## Signature

```csharp
System.Double WatermarkTransparencyLevel {get; set;}
```
## Parameters

None.

## Return Value

0.0 <= Level of transparency <= 1.0 (see Remarks )

## Remarks

This property is only available when
INote::WatermarkNote
is true.
A transparency level of 0.0 indicates that the transparency level is not set for the watermark; a transparency level of 1.0 indicates that the watermark is fully transparent.

## Examples

- Add Watermark to Part (C#) (Add_Watermark_to_Part_Example_CSharp.htm)
- Add Watermark to Part (VB.NET) (Add_Watermark_to_Part_Example_VBNET.htm)
- Add Watermark to Part (VBA) (Add_Watermark_to_Part_Example_VB.htm)

## See Also

- `INote.WatermarkBehindGeometry`