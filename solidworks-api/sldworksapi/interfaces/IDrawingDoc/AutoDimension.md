---
type: method
interface: IDrawingDoc
member: AutoDimension
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
    description: Placement relative to the drawing view as defined in swAutodimHorizontalPlacement_e
  -
    name: VerticalScheme
    type: System.Int32
    description: Vertical dimensioning scheme as defined in swAutodimScheme_e
  -
    name: VerticalPlacement
    type: System.Int32
    description: Placement relative to the drawing view as defined in swAutodimVerticalPlacement_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - drawings
  - ui
related:
  - IDisplayDimension
  - IDrawingDoc.AddChamferDim
  - IDrawingDoc.CreateAngDim4
  - IDrawingDoc.CreateDiamDim4
  - IDrawingDoc.CreateLinearDim4
  - IDrawingDoc.CreateOrdinateDim4
  - IDrawingDoc.Dimensions
  - IDrawingDoc.DragModelDimension
  - IDrawingDoc.HideShowDimensions
  - IDrawingDoc.IAddChamferDim
  - IDrawingDoc.ICreateAngDim4
  - IDrawingDoc.ICreateDiamDim4
  - IDrawingDoc.ICreateLinearDim4
  - IDrawingDoc.ICreateOrdinateDim4
  - IDrawingDoc.InsertBaseDim
  - IDrawingDoc.InsertHorizontalOrdinate
  - IDrawingDoc.InsertModelAnnotations3
  - IDrawingDoc.InsertModelDimensions
  - IDrawingDoc.InsertOrdinate
  - IDrawingDoc.InsertRefDim
  - IDrawingDoc.InsertVerticalOrdinate
  - IDrawingDoc.SketchDim
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - autodimension
  - drawings
  - idrawingdoc
  - dimension
  - idimension
  - automatically
  - doc
  - auto
  - entities
  - int32
  - horizontal
  - scheme
  - placement
  - vertical
  - selected
  - view
  - vb
  - net
  - vba
---

# IDrawingDoc.AutoDimension

Automatically dimensions the selected drawing view.

## Signature

```csharp
System.Int32 AutoDimension( 
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
- `HorizontalPlacement` (System.Int32): Placement relative to the drawing view as defined in swAutodimHorizontalPlacement_e
- `VerticalScheme` (System.Int32): Vertical dimensioning scheme as defined in swAutodimScheme_e
- `VerticalPlacement` (System.Int32): Placement relative to the drawing view as defined in swAutodimVerticalPlacement_e

## Return Value

swAutodimStatusSuccess if the view is automatically dimensioned; see swAutodimStatus_e for reasons for possible failures

## Remarks

This method requires information about the:
drawing view to autodimension. This information can be supplied by selecting the drawing view to use. No mark is necessary.
If a drawing view is not selected, then this method attempts to determine the drawing view information from the other entities that are selected. If no other selections exist, then this method defaults to using the first drawing view, which is consistent with how the SOLIDWORKS Design user interface works.
datums to use for the dimensioning baseline. These can be supplied by selecting a vertical edge, vertical sketch line, vertex, or sketch point as the datum for the horizontal dimensioning scheme. Mark the selection with swAutodimMarkHorizontalDatum from
swAutodimMark_e
. Similarly a horizontal edge, horizontal sketch line, vertex, or sketch point should be selected and marked with swAutodimMark_e.swAutodimMarkVerticalDatum for defining the datum for the vertical dimensioning scheme. If only one of these datums is supplied, only the appropriate dimensions are created for that datum.
Instead of selecting the horizontal and vertical datum separately, you can select a vertex or sketch point to use to define both datums. Mark the selected vertex or sketch point selection with swAutodimMark_e.swAutodimMarkOriginDatum. If no datums are selected, then this method automatically uses the left- and bottom-most entities in the view to determine default datums, which is consistent with how the SOLIDWORKS Design user interface works.
entities to autodimension. This information is supplied by the entitiesToDimension argument and the selected entities marked with swAutodimMark_e.swAutodimMarkEntities. The entitiesToDimension argument takes a value from the swAutodimEntities_e enumeration:
swAutodimEntitiesSelected indicates that only selected entities marked with a value of swAutodimMarkEntities are considered for autodimensioning.
swAutodimEntitiesAll indicates that all entities in the drawing view are autodimensioned.
swAutodimEntitiesBasedOnPreselect indicates that SOLIDWORKS figures out what to do based on the selected entities marked with swAutodimMarkEntities. If any exist, then autodimension them, just like swAutodimEntitiesSelected. If none exist, then autodimension all entities, just like swAutodimEntitiesAll.
Supported entities for dimensioning are lines, points, vertices, faces, and sketch entities.

## Examples

- Autodimension Selected Drawing View (C#) (Autodimension_Selected_Drawing_View_Example_CSharp.htm)
- Autodimension Selected Drawing View (VB.NET) (Autodimension_Selected_Drawing_View_Example_VBNET.htm)
- Autodimension Selected Drawing View (VBA) (Autodimension_Selected_Drawing_View_Example_VB.htm)

## See Also

- `IDisplayDimension`
- `IDrawingDoc.AddChamferDim`
- `IDrawingDoc.CreateAngDim4`
- `IDrawingDoc.CreateDiamDim4`
- `IDrawingDoc.CreateLinearDim4`
- `IDrawingDoc.CreateOrdinateDim4`
- `IDrawingDoc.Dimensions`
- `IDrawingDoc.DragModelDimension`
- `IDrawingDoc.HideShowDimensions`
- `IDrawingDoc.IAddChamferDim`
- `IDrawingDoc.ICreateAngDim4`
- `IDrawingDoc.ICreateDiamDim4`
- `IDrawingDoc.ICreateLinearDim4`
- `IDrawingDoc.ICreateOrdinateDim4`
- `IDrawingDoc.InsertBaseDim`
- `IDrawingDoc.InsertHorizontalOrdinate`
- `IDrawingDoc.InsertModelAnnotations3`
- `IDrawingDoc.InsertModelDimensions`
- `IDrawingDoc.InsertOrdinate`
- `IDrawingDoc.InsertRefDim`
- `IDrawingDoc.InsertVerticalOrdinate`
- `IDrawingDoc.SketchDim`