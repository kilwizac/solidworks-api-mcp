---
type: method
interface: IModelDocExtension
member: MoveOrCopy
returns: void
parameters:
  -
    name: Copy
    type: System.Boolean
    description: True to copy the sketch entities or annotations, false to not
  -
    name: NumCopies
    type: System.Int32
    description: Number of copies
  -
    name: KeepRelations
    type: System.Boolean
    description: True to keep sketch relations, false to not
  -
    name: BaseX
    type: System.Double
    description: X coordinate of the base point from which to move the sketch entities or annotations
  -
    name: BaseY
    type: System.Double
    description: Y coordinate of the base point from which to move the sketch entities or annotations
  -
    name: BaseZ
    type: System.Double
    description: Z coordinate of the base point from which to move the sketch entities or annotations
  -
    name: DestX
    type: System.Double
    description: X coordinate of the destination point to which to move the sketch entities or annotations
  -
    name: DestY
    type: System.Double
    description: Y coordinate of the destination point to which to move the sketch entities or annotation s
  -
    name: DestZ
    type: System.Double
    description: Z coordinate of the destination point to which to move the sketch entities or annotation s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.RotateOrCopy
  - IModelDocExtension.ScaleOrCopy
keywords:
  - move
  - annotations
  - sketch
  - entities
  - annotation
  - see
  - also
  - iannotation
  - copy
  - moveorcopy
  - imodeldocextension
  - model
  - doc
  - extension
  - boolean
  - num
  - copies
  - int32
  - keep
  - relations
  - base
  - double
  - dest
  - void
  - vb
  - net
  - vba
---

# IModelDocExtension.MoveOrCopy

Moves and optionally copies the selected sketch entities or annotations.

## Signature

```csharp
void MoveOrCopy( 
   System.Boolean
Copy
,
   System.Int32
NumCopies
,
   System.Boolean
KeepRelations
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
DestX
,
   System.Double
DestY
,
   System.Double
DestZ
)
```
## Parameters

- `Copy` (System.Boolean): True to copy the sketch entities or annotations, false to not
- `NumCopies` (System.Int32): Number of copies
- `KeepRelations` (System.Boolean): True to keep sketch relations, false to not
- `BaseX` (System.Double): X coordinate of the base point from which to move the sketch entities or annotations
- `BaseY` (System.Double): Y coordinate of the base point from which to move the sketch entities or annotations
- `BaseZ` (System.Double): Z coordinate of the base point from which to move the sketch entities or annotations
- `DestX` (System.Double): X coordinate of the destination point to which to move the sketch entities or annotations
- `DestY` (System.Double): Y coordinate of the destination point to which to move the sketch entities or annotation s
- `DestZ` (System.Double): Z coordinate of the destination point to which to move the sketch entities or annotation s

## Return Value

Unknown.

## Examples

- Move Copy Sketch Entities (C#) (Move_Copy_Sketch_Entities_Example_CSharp.htm)
- Move Copy Sketch Entities (VB.NET) (Move_Copy_Sketch_Entities_Example_VBNET.htm)
- Move Copy Sketch Entities (VBA) (Move_Copy_Sketch_Entities_Example_VB.htm)

## See Also

- `IModelDocExtension.RotateOrCopy`
- `IModelDocExtension.ScaleOrCopy`