---
type: method
interface: ISketchSegment
member: JogLine
returns: void
parameters:
  -
    name: XOnLine
    type: System.Double
    description: x coordinate where to begin the jog on the selected line
  -
    name: YOnLine
    type: System.Double
    description: y coordinate where to begin the jog on the selected line
  -
    name: ZOnLine
    type: System.Double
    description: z coordinate where to begin the jog on the selected line
  -
    name: XOnJog
    type: System.Double
    description: x coordinate of the width and depth of the jog
  -
    name: YOnJog
    type: System.Double
    description: y coordinate of the width and depth of the jog
  -
    name: ZOnJog
    type: System.Double
    description: z coordinate of the width and depth of the jog
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.InsertRouteLine
  - ISketchManager.CreateLine
  - ISketchManager.Insert3DSketch
  - ISketchManager.InsertExplodeLineSketch
keywords:
  - jog
  - lines
  - sketch
  - see
  - also
  - isketch
  - tools
  - line
  - jogline
  - isketchsegment
  - segment
  - double
  - void
  - insert
  - explode
  - vb
  - net
  - vba
---

# ISketchSegment.JogLine

Creates rectangular jog on the specified line.

## Signature

```csharp
void JogLine( 
   System.Double
XOnLine
,
   System.Double
YOnLine
,
   System.Double
ZOnLine
,
   System.Double
XOnJog
,
   System.Double
YOnJog
,
   System.Double
ZOnJog
)
```
## Parameters

- `XOnLine` (System.Double): x coordinate where to begin the jog on the selected line
- `YOnLine` (System.Double): y coordinate where to begin the jog on the selected line
- `ZOnLine` (System.Double): z coordinate where to begin the jog on the selected line
- `XOnJog` (System.Double): x coordinate of the width and depth of the jog
- `YOnJog` (System.Double): y coordinate of the width and depth of the jog
- `ZOnJog` (System.Double): z coordinate of the width and depth of the jog

## Return Value

Unknown.

## Examples

- Insert Explode Line Sketch and Jog Line (VB.NET) (Insert_Explode_Line_Sketch_and_Jog_Line_Example_VBNET.htm)
- Insert Explode Line Sketch and Jog Line (VBA) (Insert_Explode_Line_Sketch_and_Jog_Line_Example_VB.htm)
- Insert Explode Line Sketch and Jog Line (C#) (Insert_Explode_Line_Sketch_and_Jog_Line_Example_CSharp.htm)

## See Also

- `ISketch.InsertRouteLine`
- `ISketchManager.CreateLine`
- `ISketchManager.Insert3DSketch`
- `ISketchManager.InsertExplodeLineSketch`