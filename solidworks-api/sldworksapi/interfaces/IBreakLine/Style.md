---
type: property
interface: IBreakLine
member: Style
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - style
  - break
  - lines
  - see
  - also
  - ibreakline
  - line
  - int32
  - create
  - view
  - vb
  - net
  - vba
readonly: null
---

# IBreakLine.Style

Gets or sets the style of the break line in the drawing view.

## Signature

```csharp
System.Int32 Style {get; set;}
```
## Parameters

None.

## Return Value

Break line style as defined in swBreakLineStyle_e

## Remarks

This property might automatically load the model in the view.
To get or set the shape intensity of a jagged cut break line, call
IBreakLine::ShapeIntensity
.

## Examples

- Create Break View (C#) (Create_Broken_View_Example_CSharp.htm)
- Create Break View (VB.NET) (Create_Broken_View_Example_VBNET.htm)
- Create Break View (VBA) (Create_Broken_View_Example_VB.htm)