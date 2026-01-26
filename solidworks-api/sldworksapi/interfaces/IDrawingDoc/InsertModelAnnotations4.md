---
type: method
interface: IDrawingDoc
member: InsertModelAnnotations4
returns: System.Object
parameters:
  -
    name: Option
    type: System.Int32
    description: Source of dimensions as defined by swImportModelItemsSource_e
  -
    name: Types
    type: System.Int32
    description: Annotation types to insert as defined in swInsertAnnotation_e ; only valid if InsertAllAnnotations and InsertAllReferenceGeometry are False
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
  -
    name: InsertAllAnnotations
    type: System.Boolean
    description: True to insert all annotations, false to insert only those specified in Types
  -
    name: InsertAllReferenceGeometry
    type: System.Boolean
    description: True to insert all reference geometry, false to insert only those specified in Types
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - drawings
  - ui
related:
  - IDrawingDoc.InsertModelDimensions
  - IDrawingDoc.InsertModelInPredefinedView
keywords:
  - annotation
  - see
  - also
  - iannotation
  - drawing
  - views
  - drawings
  - idrawingdoc
  - annotations
  - insertmodelannotations4
  - doc
  - insert
  - model
  - annotations4
  - option
  - int32
  - types
  - all
  - boolean
  - duplicate
  - dims
  - hidden
  - feature
  - use
  - placement
  - sketch
  - reference
  - geometry
  - object
  - vba
  - vb
  - net
---

# IDrawingDoc.InsertModelAnnotations4

Inserts model annotations into this drawing document's currently selected drawing view.

## Signature

```csharp
System.Object InsertModelAnnotations4( 
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
,
   System.Boolean
InsertAllAnnotations
,
   System.Boolean
InsertAllReferenceGeometry
)
```
## Parameters

- `Option` (System.Int32): Source of dimensions as defined by swImportModelItemsSource_e
- `Types` (System.Int32): Annotation types to insert as defined in swInsertAnnotation_e ; only valid if InsertAllAnnotations and InsertAllReferenceGeometry are False
- `AllViews` (System.Boolean): True to insert the annotations in all views in the drawing, false to insert annotations only in the selected view
- `DuplicateDims` (System.Boolean): True to eliminate duplicate dimensions, false to allow duplicate dimensions
- `HiddenFeatureDims` (System.Boolean): True to insert dimensions from features that are hidden, false to not insert dimensions from features that are hidden
- `UsePlacementInSketch` (System.Boolean): True to insert dimensions as they were placed in sketch, false to not
- `InsertAllAnnotations` (System.Boolean): True to insert all annotations, false to insert only those specified in Types
- `InsertAllReferenceGeometry` (System.Boolean): True to insert all reference geometry, false to insert only those specified in Types

## Return Value

Array of inserted IAnnotation objects

## Examples

- Insert Model Annotations (VBA) (Insert_Model_Annotations_Example_VB.htm)
- Insert Model Annotations (VB.NET) (Insert_Model_Annotations_Example_VBNET.htm)
- Insert Model Annotations (C#) (Insert_Model_Annotations_Example_CSharp.htm)

## See Also

- `IDrawingDoc.InsertModelDimensions`
- `IDrawingDoc.InsertModelInPredefinedView`