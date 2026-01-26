---
type: property
interface: IBreakLine
member: ShapeIntensity
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - break
  - lines
  - see
  - also
  - ibreakline
  - jagged
  - cut
  - shapeintensity
  - line
  - shape
  - intensity
  - int32
  - insert
  - vb
  - net
  - vba
readonly: null
---

# IBreakLine.ShapeIntensity

Gets or sets the shape intensity of a jagged cut break line.

## Signature

```csharp
System.Int32 ShapeIntensity {get; set;}
```
## Parameters

None.

## Return Value

Shape intensity of a jagged cut break line; valid range is 1 (most) to 5 (least) (see Remarks )

## Remarks

Call
IBreakLine::Style
to determine if this break line is a jagged cut break line.

## Examples

- Insert Jagged Cut Break (C#) (Insert_Jagged_Cut_Break_Example_CSharp.htm)
- Insert Jagged Cut Break (VB.NET) (Insert_Jagged_Cut_Break_Example_VBNET.htm)
- Insert Jagged Cut Break (VBA) (Insert_Jagged_Cut_Break_Example_VB.htm)