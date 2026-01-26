---
type: method
interface: IDrawingDoc
member: InsertModelAnnotations3
returns: System.Object
parameters:
  -
    name: Option
    type: System.Int32
    description: Source of dimensions as defined by swImportModelItemsSource_e (see Remarks )
  -
    name: Types
    type: System.Int32
    description: Bitwise OR of annotation types as defined in swInsertAnnotation_e
  -
    name: AllViews
    type: System.Boolean
    description: True to insert the annotations in all views in the drawing, false to insert annotations only in the selected view
  -
    name: DuplicateDims
    type: System.Boolean
    description: True to eliminate duplicate dimensions, false to allow duplicate dimensions
  -
    name: HiddenFeatureDims
    type: System.Boolean
    description: True to insert dimensions from features that are hidden, false to not insert dimensions from features that are hidden
  -
    name: UsePlacementInSketch
    type: System.Boolean
    description: True to insert dimensions as they were placed in sketch, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - drawings
  - ui
related:
  - IDrawingDoc.AddCenterMark
  - IDrawingDoc.AddChamferDim
  - IDrawingDoc.AddHoleCallout2
  - IDrawingDoc.AttachAnnotation
  - IDrawingDoc.CreateCompoundNote
  - IDrawingDoc.CreateText2
  - IDrawingDoc.Dimensions
  - IDrawingDoc.IAddHoleCallout2
  - IDrawingDoc.ICreateCompoundNote
  - IDrawingDoc.ICreateText2
  - IDrawingDoc.INewGtol
  - IDrawingDoc.InsertBaseDim
  - IDrawingDoc.InsertDatumTag
  - IDrawingDoc.InsertNewNote2
  - IDrawingDoc.InsertRefDim
  - IDrawingDoc.InsertRevisionSymbol
  - IDrawingDoc.InsertSurfaceFinishSymbol
  - IDrawingDoc.InsertThreadCallout
  - IDrawingDoc.InsertWeldSymbol
  - IDrawingDoc.NewGtol
  - IDrawingDoc.NewNote
keywords:
  - insertmodelannotations3
  - idrawingdoc
  - drawing
  - doc
  - insert
  - model
  - annotations3
  - option
  - int32
  - types
  - all
  - views
  - boolean
  - duplicate
  - dims
  - hidden
  - feature
  - use
  - placement
  - sketch
  - object
---

# IDrawingDoc.InsertModelAnnotations3

Inserts model annotations into this drawing document's currently selected drawing view.

## Signature

```csharp
System.Object InsertModelAnnotations3( 
   System.Int32
Option
,
   System.Int32
Types
,
   System.Boolean
AllViews
,
   System.Boolean
DuplicateDims
,
   System.Boolean
HiddenFeatureDims
,
   System.Boolean
UsePlacementInSketch
)
```
## Parameters

- `Option` (System.Int32): Source of dimensions as defined by swImportModelItemsSource_e (see Remarks )
- `Types` (System.Int32): Bitwise OR of annotation types as defined in swInsertAnnotation_e
- `AllViews` (System.Boolean): True to insert the annotations in all views in the drawing, false to insert annotations only in the selected view
- `DuplicateDims` (System.Boolean): True to eliminate duplicate dimensions, false to allow duplicate dimensions
- `HiddenFeatureDims` (System.Boolean): True to insert dimensions from features that are hidden, false to not insert dimensions from features that are hidden
- `UsePlacementInSketch` (System.Boolean): True to insert dimensions as they were placed in sketch, false to not

## Return Value

Array of inserted IAnnotation objects

## Remarks

The Option argument was incorrectly documented in versions of the SOLIDWORKS API Help published before SOLIDWORKS 2008 SP3.
Incorrect
Correct
0 - All dimensions in the view
swImportModelItemsFromEntireModel = 0
1 - All dimensions of the currently selected component (for assembly drawings)
swImportModelItemsFromSelectedFeature = 1
2 - All dimensions of the currently selected feature
swImportModelItemsFromSelectedComponent = 2
All dimensions of the assembly
swImportModelItemsFromAssemblyOnly = 3

## See Also

- `IDrawingDoc.AddCenterMark`
- `IDrawingDoc.AddChamferDim`
- `IDrawingDoc.AddHoleCallout2`
- `IDrawingDoc.AttachAnnotation`
- `IDrawingDoc.CreateCompoundNote`
- `IDrawingDoc.CreateText2`
- `IDrawingDoc.Dimensions`
- `IDrawingDoc.IAddHoleCallout2`
- `IDrawingDoc.ICreateCompoundNote`
- `IDrawingDoc.ICreateText2`
- `IDrawingDoc.INewGtol`
- `IDrawingDoc.InsertBaseDim`
- `IDrawingDoc.InsertDatumTag`
- `IDrawingDoc.InsertNewNote2`
- `IDrawingDoc.InsertRefDim`
- `IDrawingDoc.InsertRevisionSymbol`
- `IDrawingDoc.InsertSurfaceFinishSymbol`
- `IDrawingDoc.InsertThreadCallout`
- `IDrawingDoc.InsertWeldSymbol`
- `IDrawingDoc.NewGtol`
- `IDrawingDoc.NewNote`