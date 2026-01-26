---
type: method
interface: ISketchManager
member: FullyDefineSketch
returns: System.Int32
parameters:
  -
    name: EntitiesToFullyDefine
    type: System.Boolean
    description: True to fully define all entities, false to fully define only the entities selected
  -
    name: UseRelations
    type: System.Boolean
    description: True to use relations, false to not
  -
    name: RelationsToApply
    type: System.Int32
    description: Relations to apply as defined in swSketchFullyDefineRelationType_e
  -
    name: UseDimensions
    type: System.Boolean
    description: True to use dimensions, false to not
  -
    name: HorizontalDimScheme
    type: System.Int32
    description: 0 = Chain 1 = Baseline 2 = Ordinate
  -
    name: HorizontalDatumDisp
    type: System.Object
    description: Horizontal datum (model edge, model vertex, sketch line, sketch point), or, if Nothing or null, use entity with selection mark = 6
  -
    name: VerticalDimScheme
    type: System.Int32
    description: 0 = Chain 1 = Baseline 2 = Ordinate
  -
    name: VerticalDatumDisp
    type: System.Object
    description: Vertical datum (model edge, model vertex, sketch line, sketch point), or, if Nothing or null, use entity with selection mark = 6
  -
    name: HorizontalDimPlacement
    type: System.Int32
    description: 0 = Above sketch 1 = Below sketch
  -
    name: VerticalDimPlacement
    type: System.Int32
    description: 0 = Right of sketch 1 = Left of sketch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.AddAlongXDimension
  - ISketchManager.AddAlongYDimension
  - ISketchManager.AddAlongZDimension
keywords:
  - sketch
  - see
  - also
  - isketch
  - fully
  - define
  - fullydefinesketch
  - isketchmanager
  - manager
  - entities
  - boolean
  - use
  - relations
  - apply
  - int32
  - dimensions
  - horizontal
  - dim
  - scheme
  - datum
  - disp
  - object
  - vertical
  - placement
  - under
  - defined
  - vba
  - vb
  - net
---

# ISketchManager.FullyDefineSketch

Fully defines a sketch.

## Signature

```csharp
System.Int32 FullyDefineSketch( 
   System.Boolean
EntitiesToFullyDefine
,
   System.Boolean
UseRelations
,
   System.Int32
RelationsToApply
,
   System.Boolean
UseDimensions
,
   System.Int32
HorizontalDimScheme
,
   System.Object
HorizontalDatumDisp
,
   System.Int32
VerticalDimScheme
,
   System.Object
VerticalDatumDisp
,
   System.Int32
HorizontalDimPlacement
,
   System.Int32
VerticalDimPlacement
)
```
## Parameters

- `EntitiesToFullyDefine` (System.Boolean): True to fully define all entities, false to fully define only the entities selected
- `UseRelations` (System.Boolean): True to use relations, false to not
- `RelationsToApply` (System.Int32): Relations to apply as defined in swSketchFullyDefineRelationType_e
- `UseDimensions` (System.Boolean): True to use dimensions, false to not
- `HorizontalDimScheme` (System.Int32): 0 = Chain 1 = Baseline 2 = Ordinate
- `HorizontalDatumDisp` (System.Object): Horizontal datum (model edge, model vertex, sketch line, sketch point), or, if Nothing or null, use entity with selection mark = 6
- `VerticalDimScheme` (System.Int32): 0 = Chain 1 = Baseline 2 = Ordinate
- `VerticalDatumDisp` (System.Object): Vertical datum (model edge, model vertex, sketch line, sketch point), or, if Nothing or null, use entity with selection mark = 6
- `HorizontalDimPlacement` (System.Int32): 0 = Above sketch 1 = Below sketch
- `VerticalDimPlacement` (System.Int32): 0 = Right of sketch 1 = Left of sketch

## Return Value

Not currently defined

## Examples

- Fully Define Under Defined Sketch (VBA) (Fully_Define_Underdefined_Sketch_Example_VB.htm)
- Fully Define Under Defined Sketch (VB.NET) (Fully_Define_Underdefined_Sketch_Example_VBNET.htm)
- Fully Define Under Defined Sketch (C#) (Fully_Define_Underdefined_Sketch_Example_CSharp.htm)

## See Also

- `ISketchManager.AddAlongXDimension`
- `ISketchManager.AddAlongYDimension`
- `ISketchManager.AddAlongZDimension`