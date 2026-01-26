---
type: method
interface: ISketch
member: AutoDimension2
returns: System.Int32
parameters:
  -
    name: EntitiesToDimension
    type: System.Int32
    description: Entities to dimension as defined in swAutodimEntities_e
  -
    name: HorizontalScheme
    type: System.Int32
    description: Horizontal dimensioning scheme as defined in swAutodimScheme_e
  -
    name: HorizontalPlacement
    type: System.Int32
    description: Placement relative to the sketch as defined in swAutodimHorizontalPlacement_e
  -
    name: VerticalScheme
    type: System.Int32
    description: Vertical dimensioning scheme as defined in swAutodimScheme_e
  -
    name: VerticalPlacement
    type: System.Int32
    description: Placement relative to the sketch as defined in swAutodimVerticalPlacement_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
  - sketches
related: []
keywords:
  - autodimension2
  - isketch
  - sketch
  - auto
  - dimension2
  - entities
  - dimension
  - int32
  - horizontal
  - scheme
  - placement
  - vertical
  - autodimension
  - vba
  - insert
  - dxf
  - file
  - add
  - all
  - sketches
  - vb
  - net
---

# ISketch.AutoDimension2

Obsolete. Superseded by ISketchManager::FullyDefineSketch.

## Signature

```csharp
System.Int32 AutoDimension2( 
   System.Int32
EntitiesToDimension
,
   System.Int32
HorizontalScheme
,
   System.Int32
HorizontalPlacement
,
   System.Int32
VerticalScheme
,
   System.Int32
VerticalPlacement
)
```
## Parameters

- `EntitiesToDimension` (System.Int32): Entities to dimension as defined in swAutodimEntities_e
- `HorizontalScheme` (System.Int32): Horizontal dimensioning scheme as defined in swAutodimScheme_e
- `HorizontalPlacement` (System.Int32): Placement relative to the sketch as defined in swAutodimHorizontalPlacement_e
- `VerticalScheme` (System.Int32): Vertical dimensioning scheme as defined in swAutodimScheme_e
- `VerticalPlacement` (System.Int32): Placement relative to the sketch as defined in swAutodimVerticalPlacement_e

## Return Value

swAutodimStatusSuccess if the sketch is automatically dimensioned successfully; see swAutodimStatus_e for values for reasons for possible failures

## Remarks

If the EntitiesToDimension argument takes the value swAutodimEntitiesSelected, then use
IModelDocExtension::SelectByID2
with a mark value of swAutodimMarkEntities to select the sketch entities to dimension.
You can supply datums for horizontal and vertical dimensioning schemes. Select and mark a unique vertical edge, vertex, sketch point, or vertical sketch line as the datum for the horizontal dimensioning scheme, using swAutodimMarkHorizontalDatum as the mark value. Similarly, select a unique horizontal edge, vertex, sketch point, or horizontal sketch line as the datum for the vertical dimensioning scheme, using swAutodimMarkVerticalDatum as the mark value. It is an error to supply just one datum as indicated by the status value swAutodimStatus_DatumNotSupplied.

## Examples

- Autodimension a Sketch (VBA) (Autodimension_a_Sketch_Example_VB.htm)
- Insert DXF File and Add Dimension (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Autodimension All Sketches (C#) (Autodimension_All_Sketches_Example_CSharp.htm)
- Autodimension All Sketches (VB.NET) (Autodimension_All_Sketches_Example_VBNET.htm)
- Autodimension all Sketches (VBA) (Autodimension_All_Sketches_Example_VB.htm)