---
type: method
interface: IModelDocExtension
member: ScaleOrCopy
returns: void
parameters:
  -
    name: Copy
    type: System.Boolean
    description: True to copy the sketch items or annotations, false to not
  -
    name: NumCopies
    type: System.Int32
    description: Number of copies
  -
    name: BaseX
    type: System.Double
    description: X coordinate of the base point
  -
    name: BaseY
    type: System.Double
    description: Y coordinate of the base point
  -
    name: BaseZ
    type: System.Double
    description: Z coordinate of the base point
  -
    name: Scale
    type: System.Double
    description: Factor by which to scale the sketch entities or annotations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.MoveOrCopy
  - IModelDocExtension.RotateOrCopy
keywords:
  - scale
  - see
  - also
  - iscalefeaturedata
  - sketch
  - entities
  - annotations
  - annotation
  - iannotation
  - copy
  - scaleorcopy
  - imodeldocextension
  - model
  - doc
  - extension
  - boolean
  - num
  - copies
  - int32
  - base
  - double
  - void
  - rotate
  - vb
  - net
  - vba
---

# IModelDocExtension.ScaleOrCopy

Scales and optionally copies the selected sketch items or annotations.

## Signature

```csharp
void ScaleOrCopy( 
   System.Boolean
Copy
,
   System.Int32
NumCopies
,
   System.Double
BaseX
,
   System.Double
BaseY
,
   System.Double
BaseZ
,
   System.Double
Scale
)
```
## Parameters

- `Copy` (System.Boolean): True to copy the sketch items or annotations, false to not
- `NumCopies` (System.Int32): Number of copies
- `BaseX` (System.Double): X coordinate of the base point
- `BaseY` (System.Double): Y coordinate of the base point
- `BaseZ` (System.Double): Z coordinate of the base point
- `Scale` (System.Double): Factor by which to scale the sketch entities or annotations

## Return Value

Unknown.

## Remarks

Before calling this method, use
IModelDocExtension::SelectByID2
to select the entities to scale or copy.
Using this method may break existing sketch relations, including relations that are automatically created when offsetting or converting entities. Use the
ISketchRelationManager
methods before and after using this method to determine whether all sketch relations remain intact.

## Examples

- Rotate, Scale, and Copy Sketch (C#) (Rotate_Scale_Copy_Sketch_Example_CSharp.htm)
- Rotate, Scale, and Copy Sketch (VB.NET) (Rotate_Scale_Copy_Sketch_Example_VBNET.htm)
- Rotate, Scale, and Copy Sketch (VBA) (Rotate_Scale_Copy_Sketch_Example_VB.htm)

## See Also

- `IModelDocExtension.MoveOrCopy`
- `IModelDocExtension.RotateOrCopy`