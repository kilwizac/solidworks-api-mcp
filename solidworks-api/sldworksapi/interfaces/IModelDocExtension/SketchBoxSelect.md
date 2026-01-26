---
type: method
interface: IModelDocExtension
member: SketchBoxSelect
returns: System.Boolean
parameters:
  -
    name: FirstPtX
    type: System.Double
    description: x coordinate of the first corner of the box
  -
    name: FirstPtY
    type: System.Double
    description: y coordinate of the first corner of the box
  -
    name: FirstPtZ
    type: System.Double
    description: z coordinate of the first corner of the box
  -
    name: SecondPtX
    type: System.Double
    description: x coordinate of the opposite diagonal corner of the box
  -
    name: SecondPtY
    type: System.Double
    description: y coordinate of the opposite diagonal corner of the box
  -
    name: SecondPtZ
    type: System.Double
    description: z coordinate of the opposite diagonal corner of the box
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - selections
  - sketches
  - ui
related: []
keywords:
  - box
  - select
  - sketch
  - see
  - also
  - isketch
  - sketchboxselect
  - imodeldocextension
  - model
  - doc
  - extension
  - first
  - pt
  - double
  - second
  - boolean
  - vb
  - net
  - vba
---

# IModelDocExtension.SketchBoxSelect

Box selects all of the entities in a sketch within the specified coordinates of the selection box.

## Signature

```csharp
System.Boolean SketchBoxSelect( 
   System.Double
FirstPtX
,
   System.Double
FirstPtY
,
   System.Double
FirstPtZ
,
   System.Double
SecondPtX
,
   System.Double
SecondPtY
,
   System.Double
SecondPtZ
)
```
## Parameters

- `FirstPtX` (System.Double): x coordinate of the first corner of the box
- `FirstPtY` (System.Double): y coordinate of the first corner of the box
- `FirstPtZ` (System.Double): z coordinate of the first corner of the box
- `SecondPtX` (System.Double): x coordinate of the opposite diagonal corner of the box
- `SecondPtY` (System.Double): y coordinate of the opposite diagonal corner of the box
- `SecondPtZ` (System.Double): z coordinate of the opposite diagonal corner of the box

## Return Value

True if the sketch entities lying in the specified coordinates are box-selected, false if not

## Examples

- Box Select a Sketch (VB.NET) (Box_Select_a_Sketch_Example_VBNET.htm)
- Box Select a Sketch (VBA) (Box_Select_a_Sketch_Example_VB.htm)
- Box Select a Sketch (C#) (Box_Select_a_Sketch_Example_CSharp.htm)