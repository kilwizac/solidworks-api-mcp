---
type: method
interface: IAssemblyDoc
member: InsertCavity4
returns: void
parameters:
  -
    name: ScaleFactor_x
    type: System.Double
    description: Scaling factor in the x direction
  -
    name: ScaleFactor_y
    type: System.Double
    description: Scaling factor in the y direction
  -
    name: ScaleFactor_z
    type: System.Double
    description: Scaling factor in the z direction
  -
    name: IsUniform
    type: System.Boolean
    description: True to use the first scale argument as the uniform scale, false to not
  -
    name: ScaleType
    type: System.Int32
    description: Type of scaling as defined in swCavityScaleType_e
  -
    name: KeepPieceIndex
    type: System.Int32
    description: Piece to keep if there is ambiguity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - ICavityFeatureData
keywords:
  - cavities
  - see
  - also
  - icavityfeaturedata
  - insert
  - insertcavity4
  - iassemblydoc
  - assembly
  - doc
  - cavity4
  - scale
  - factor
  - double
  - uniform
  - boolean
  - type
  - int32
  - keep
  - piece
  - index
  - void
  - cavity
  - vb
  - net
  - vba
---

# IAssemblyDoc.InsertCavity4

Inserts a cavity to the active part using a selected component.

## Signature

```csharp
void InsertCavity4( 
   System.Double
ScaleFactor_x
,
   System.Double
ScaleFactor_y
,
   System.Double
ScaleFactor_z
,
   System.Boolean
IsUniform
,
   System.Int32
ScaleType
,
   System.Int32
KeepPieceIndex
)
```
## Parameters

- `ScaleFactor_x` (System.Double): Scaling factor in the x direction
- `ScaleFactor_y` (System.Double): Scaling factor in the y direction
- `ScaleFactor_z` (System.Double): Scaling factor in the z direction
- `IsUniform` (System.Boolean): True to use the first scale argument as the uniform scale, false to not
- `ScaleType` (System.Int32): Type of scaling as defined in swCavityScaleType_e
- `KeepPieceIndex` (System.Int32): Piece to keep if there is ambiguity

## Return Value

Unknown.

## Remarks

This operation is performed in the context of an assembly document. The component being edited in the context of the assembly receives the new cavity feature.
Set the scaleFactor argument as appropriate for your casting material. The scaling factor is expressed as a percentage (+/- 20%) of the size of the cavity part. Pass it in as a value within the range of -20 to +20.
SOLIDWORKS uses the following formula to determine the size of the cavity:
cavitysize = partsize * (1 + scaleFactor/100)
When there is ambiguity in the result of a cut, SOLIDWORKS uses KeepPieceIndex to determine which result to use. You can set this parameter to -1 if there is no ambiguity; otherwise, you should use the index of the result, in the range between 0 and 1 less than the possible number of outcomes.

## Examples

- Insert Cavity (C#) (Insert_Cavity_Example_CSharp.htm)
- Insert Cavity (VB.NET) (Insert_Cavity_Example_VBNET.htm)
- Insert Cavity (VBA) (Insert_Cavity_Example_VB.htm)

## See Also

- `ICavityFeatureData`