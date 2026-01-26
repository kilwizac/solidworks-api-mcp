---
type: method
interface: IBreakLine
member: GetPosition
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Break line to work with (0 or 1)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IBreakLine.SetPosition
keywords:
  - getposition
  - ibreakline
  - break
  - line
  - position
  - index
  - int32
  - double
  - create
  - view
  - vb
  - net
  - vba
---

# IBreakLine.GetPosition

Gets the location of this break line in the drawing view.

## Signature

```csharp
System.Double GetPosition( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Break line to work with (0 or 1)

## Return Value

Location of the break line (see Remarks )

## Remarks

A drawing view break consists of a pair of lines. This method gets the break line at the location indicated by the Index argument.
If the orientation of the break is...
Then the return value is...
Horizontal
Y value relative to the drawing view origin (center) that indicates where the break is along the Y axis
Vertical
X value relative to the drawing view origin (center) that indicates where the break is along the X axis
To determine the orientation of the break line, use
IBreakLine::Orientation
.

## Examples

- Create Break View (C#) (Create_Broken_View_Example_CSharp.htm)
- Create Break View (VB.NET) (Create_Broken_View_Example_VBNET.htm)
- Create Break View (VBA) (Create_Broken_View_Example_VB.htm)

## See Also

- `IBreakLine.SetPosition`