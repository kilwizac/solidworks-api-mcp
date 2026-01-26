---
type: property
interface: ISketchBlockInstance
member: Angle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.InsertionPoint
  - ISketchBlockInstance.InstancePosition
  - ISketchBlockInstance.LockAngle
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - angle
  - sketch
  - block
  - instance
  - double
  - data
  - any
  - document
  - vba
  - information
readonly: null
---

# ISketchBlockInstance.Angle

Gets or sets the angle around the insertion point which to rotate this block instance.

## Signature

```csharp
System.Double Angle {get; set;}
```
## Parameters

None.

## Return Value

Angle in radians

## Remarks

You must be editing the block's sketch to change the angle.

## Examples

- Get and Set Blocks Data in Any Document (VBA) (Get_and_Set_Blocks_Data_in_Any_Document_Example_VB.htm)
- Get Block Information (VBA) (Get_Block_Information_Example_VB.htm)

## See Also

- `ISketchBlockDefinition.InsertionPoint`
- `ISketchBlockInstance.InstancePosition`
- `ISketchBlockInstance.LockAngle`